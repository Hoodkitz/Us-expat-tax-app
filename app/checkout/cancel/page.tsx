'use client';

import Link from 'next/link';

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Zahlung abgebrochen
        </h1>
        <p className="text-gray-600 mb-6">
          Deine Zahlung wurde abgebrochen. Es wurde nichts abgebucht. Du kannst
          es jederzeit erneut versuchen.
        </p>

        <div className="space-y-3">
          <Link href="/#pricing" className="btn-primary w-full">
            Erneut versuchen
          </Link>
          <Link href="/" className="btn-secondary w-full">
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
