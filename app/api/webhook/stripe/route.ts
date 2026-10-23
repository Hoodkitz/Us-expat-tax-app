import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { alreadyProcessed } from '@/lib/idempotency';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!secret || !key) {
    console.error('Stripe webhook not configured');
    return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  }

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  // Raw body is required for signature verification.
  const payload = await req.text();
  const stripe = new Stripe(key, { apiVersion: '2024-06-20' });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (alreadyProcessed(event.id)) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      // Minimal fulfillment record. TODO: persist to a database (see lib/idempotency.ts
      // for limits of the in-memory guard) before granting access.
      console.log(
        JSON.stringify({
          type: 'fulfillment',
          eventId: event.id,
          sessionId: session.id,
          customer: session.customer,
          subscription: session.subscription,
          paymentStatus: session.payment_status,
          priceId: session.metadata?.priceId ?? null,
        })
      );
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
