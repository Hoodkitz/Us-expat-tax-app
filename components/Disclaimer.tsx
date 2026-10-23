export default function Disclaimer({ prominent = false }: { prominent?: boolean }) {
  return (
    <div
      role="note"
      className={`rounded-lg border-2 border-red-300 bg-red-50 text-gray-900 ${
        prominent ? 'p-6 text-base' : 'p-4 text-sm'
      }`}
    >
      <p className="font-bold">
        Keine Steuerberatung. Kein Mandats- oder Beratungsverhältnis.
      </p>
      <p className="mt-2">
        Die Inhalte, Rechner und Berichte dieser Website dienen ausschließlich
        der allgemeinen Information. Sie stellen weder Steuer-, Rechts- noch
        Anlageberatung dar und begründen kein Mandats- oder sonstiges
        Beratungsverhältnis mit einem Steuerberater, CPA, Enrolled Agent oder
        Rechtsanwalt. Wir erstellen und übermitteln keine Steuererklärungen.
        Ergebnisse können unvollständig oder veraltet sein. Bitte lasse deine
        persönliche Situation von einer qualifizierten Fachperson prüfen.
      </p>
    </div>
  );
}
