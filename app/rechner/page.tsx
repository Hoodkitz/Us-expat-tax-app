'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Disclaimer from '@/components/Disclaimer';
import { compareFeieFtc, FEIE_LIMITS, physicalPresence } from '@/lib/expat';

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function Rechner() {
  const [daysOut, setDaysOut] = useState(30);
  const [year, setYear] = useState(2025);
  const [income, setIncome] = useState(80000);
  const [foreignTax, setForeignTax] = useState(20000);
  const [rate, setRate] = useState(22);

  const presence = useMemo(() => physicalPresence(daysOut), [daysOut]);
  const result = useMemo(
    () =>
      compareFeieFtc({
        year,
        foreignEarnedIncome: income,
        foreignTaxPaid: foreignTax,
        usEffectiveRatePct: rate,
        qualifiesForFeie: presence.qualifies,
      }),
    [year, income, foreignTax, rate, presence.qualifies]
  );

  const input = 'mt-1 w-full rounded-lg border border-gray-300 px-3 py-2';
  const num = (set: (n: number) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    set(Number(e.target.value));

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <Link href="/" className="text-sm text-primary-600 hover:underline">
          &larr; Startseite
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Gratis-Rechner: Physical Presence &amp; FEIE vs. FTC
        </h1>
        <p className="mt-2 text-gray-600">
          Grobe Orientierung, ob der 330-Tage-Test erfüllt ist und ob Foreign
          Earned Income Exclusion (FEIE) oder Foreign Tax Credit (FTC) rechnerisch
          günstiger wirkt. Berechnung läuft nur in deinem Browser.
        </p>
        <div className="mt-6">
          <Disclaimer prominent />
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">1. Physical Presence Test</h2>
          <label className="mt-4 block text-sm font-medium">
            Tage außerhalb des Auslands (z. B. in den USA) in 12 aufeinanderfolgenden Monaten
            <input type="number" min={0} max={365} value={daysOut} onChange={num(setDaysOut)} className={input} />
          </label>
          <p className={`mt-3 font-semibold ${presence.qualifies ? 'text-green-700' : 'text-red-700'}`}>
            {presence.foreignDays} Tage im Ausland:{' '}
            {presence.qualifies
              ? 'Schwelle von 330 Tagen erreicht (vereinfacht).'
              : `Schwelle nicht erreicht, es fehlen ${presence.daysShort} Tage.`}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Vereinfachung: Es zählen nur volle 24-Stunden-Tage; An- und Abreisetage,
            Transit und der konkrete 12-Monats-Zeitraum bleiben unberücksichtigt.
          </p>
        </section>

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">2. FEIE vs. FTC</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Steuerjahr
              <select value={year} onChange={num(setYear)} className={input}>
                {Object.keys(FEIE_LIMITS).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium">
              Ausländisches Erwerbseinkommen (USD)
              <input type="number" min={0} value={income} onChange={num(setIncome)} className={input} />
            </label>
            <label className="text-sm font-medium">
              Gezahlte ausländische Steuer (USD)
              <input type="number" min={0} value={foreignTax} onChange={num(setForeignTax)} className={input} />
            </label>
            <label className="text-sm font-medium">
              Geschätzter US-Steuersatz (%)
              <input type="number" min={0} max={60} value={rate} onChange={num(setRate)} className={input} />
            </label>
          </div>

          <div className="mt-6 space-y-1 text-sm">
            <p>FEIE-Höchstbetrag {year}: <b>{fmt(FEIE_LIMITS[year] ?? 0)}</b></p>
            {result.feieAvailable ? (
              <>
                <p>US-Steuer mit FEIE (Ausschluss {fmt(result.excluded)}): <b>{fmt(result.usTaxWithFeie)}</b></p>
                <p>US-Steuer mit FTC: <b>{fmt(result.usTaxWithFtc)}</b></p>
                <p className="mt-3 text-base font-semibold">
                  {result.better === 'EQUAL'
                    ? 'Rechnerisch kein Unterschied.'
                    : `Rechnerisch günstiger: ${result.better} (Differenz ca. ${fmt(result.difference)}).`}
                </p>
              </>
            ) : (
              <p className="font-semibold text-amber-700">
                FEIE nicht verfügbar, da der Physical Presence Test nicht erfüllt ist
                (der Bona Fide Residence Test wird hier nicht geprüft). FTC-Steuer: {fmt(result.usTaxWithFtc)}.
              </p>
            )}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Stark vereinfacht: pauschaler Steuersatz, kein Stacking, keine
            FTC-Kategorien/Limits/Vortrag, keine Selbständigkeits- oder Sozialabgaben,
            keine Wohnkostenabzüge, keine Teiljahres-Kürzung des FEIE-Betrags. FEIE
            und FTC auf dasselbe Einkommen schließen sich teilweise aus; die Wahl der
            FEIE ist zudem nur eingeschränkt widerrufbar. Beträge nach IRS-Quellen
            jährlich prüfen.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-primary-200 bg-primary-50 p-6 text-sm text-gray-700">
          Du willst eine Fachperson einbinden? Lass dein Ergebnis von einem
          qualifizierten CPA oder Enrolled Agent prüfen.
        </section>
      </div>
    </main>
  );
}
