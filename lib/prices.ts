// Price IDs are not secret. One set of env vars is used by the client
// (Pricing.tsx) and the server (allowlist in /api/checkout).
export const PRICE_ENV = {
  basic: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC,
  pro: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO,
  premium: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM,
} as const;

export function allowedPriceIds(): string[] {
  return Object.values(PRICE_ENV).filter(
    (v): v is string => typeof v === 'string' && v.startsWith('price_')
  );
}
