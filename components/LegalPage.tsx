import Link from 'next/link';
import Disclaimer from '@/components/Disclaimer';

export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-yellow-200 px-1 font-semibold text-gray-900">
      [PLATZHALTER: {children}]
    </mark>
  );
}

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link href="/" className="text-sm text-primary-600 hover:underline">
          &larr; Zurück zur Startseite
        </Link>
        <h1 className="mt-6 mb-4 text-3xl font-bold text-gray-900">{title}</h1>
        <div className="mb-8 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-gray-800">
          Entwurf: Gelb markierte Platzhalter müssen vom Betreiber vor
          Veröffentlichung ausgefüllt werden. Die Texte sind Vorlagen und
          ersetzen keine Rechtsberatung; bitte juristisch prüfen lassen.
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
        <div className="mt-12">
          <Disclaimer />
        </div>
      </div>
    </main>
  );
}
