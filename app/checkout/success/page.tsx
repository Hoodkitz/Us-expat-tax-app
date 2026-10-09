'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CheckoutSuccess() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSessionId(params.get('session_id'));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Zahlung erfolgreich!
        </h1>
        <p className="text-gray-600 mb-6">
          Vielen Dank für dein Abonnement. Deine Zahlung wurde erfolgreich
          verarbeitet.
        </p>

        {sessionId && (
          <p className="text-sm text-gray-500 mb-6">
            Session-ID: <code className="bg-gray-100 px-2 py-1 rounded">{sessionId}</code>
          </p>
        )}

        <div className="space-y-3">
          <Link href="/" className="btn-primary w-full">
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
