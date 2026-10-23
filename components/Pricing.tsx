'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Basic',
    price: 19,
    description: 'Für einfache Steuererklärungen',
    features: [
      'Form 1040-NR',
      'FBAR (FinCEN 114)',
      'E-Mail Support',
      'Dokumenten-Upload (5 GB)',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC || '',
    popular: false,
  },
  {
    name: 'Pro',
    price: 29,
    description: 'Für die meisten Expats',
    features: [
      'Alles aus Basic',
      'FEIE-Berechnung',
      'Deadline-Tracking',
      'Dokumenten-Upload (25 GB)',
      'Priorisierter Support',
      'Steuerberater-Check',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || '',
    popular: true,
  },
  {
    name: 'Premium',
    price: 49,
    description: 'Für komplexe Situationen',
    features: [
      'Alles aus Pro',
      'Mehrere Steuerjahre',
      'Persönlicher Steuerberater',
      'Dokumenten-Upload (100 GB)',
      '24/7 Support',
      'Audit Protection',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PREMIUM || '',
    popular: false,
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string) => {
    setLoading(priceId);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Fehler beim Erstellen der Checkout-Session. Bitte versuche es erneut.');
      }
    } catch {
      alert('Fehler beim Erstellen der Checkout-Session. Bitte versuche es erneut.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Einfache, transparente Preise
          </h2>
          <p className="text-lg text-gray-600">
            Wähle den Plan, der zu dir passt. Keine versteckten Kosten, keine
            langfristigen Verträge. Jederzeit kündbar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-primary-600 text-white ring-4 ring-primary-200 scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-accent-400 px-4 py-1 text-sm font-semibold text-accent-900">
                    Beliebt
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? 'text-primary-100' : 'text-gray-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.price}€
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? 'text-primary-100' : 'text-gray-500'
                  }`}
                >
                  /Monat
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className={`h-5 w-5 flex-shrink-0 ${
                        plan.popular ? 'text-primary-200' : 'text-green-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-primary-100' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.priceId)}
                disabled={!plan.priceId || loading === plan.priceId}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition ${
                  plan.popular
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading === plan.priceId ? 'Wird geladen...' : 'Jetzt wählen'}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Alle Preise inkl. MwSt. Jederzeit kündbar. Testmodus — keine echten
          Abbuchungen. Widerrufsrecht siehe{' '}
          <a href="/widerruf" className="underline">Widerrufsbelehrung</a>.
        </p>
      </div>
    </section>
  );
}
