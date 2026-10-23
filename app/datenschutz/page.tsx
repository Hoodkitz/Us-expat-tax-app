import LegalPage, { Placeholder } from '@/components/LegalPage';

export const metadata = { title: 'Datenschutzerklärung — US Expat Tax App' };

const h2 = 'text-xl font-semibold text-gray-900';

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2 className={h2}>1. Verantwortlicher</h2>
      <p>
        <Placeholder>Name, Anschrift und E-Mail des Verantwortlichen (wie im Impressum)</Placeholder>
      </p>
      <h2 className={h2}>2. Hosting und Server-Logfiles</h2>
      <p>
        Beim Aufruf der Website werden technisch notwendige Daten (z. B.
        IP-Adresse, Zeitpunkt, aufgerufene Seite) verarbeitet, um die Seite
        auszuliefern und die Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f
        DSGVO). Hosting-Anbieter: <Placeholder>Anbieter, Standort, AV-Vertrag</Placeholder>
      </p>
      <h2 className={h2}>3. Zahlungsabwicklung über Stripe</h2>
      <p>
        Zahlungen werden über Stripe abgewickelt (Stripe Payments Europe Ltd.,
        Irland, bzw. Stripe, Inc., USA). Bei Bestellung werden die für die
        Zahlung erforderlichen Daten (z. B. E-Mail-Adresse, Zahlungsdaten,
        Betrag) an Stripe übermittelt (Art. 6 Abs. 1 lit. b DSGVO). Die
        Kartendaten werden direkt von Stripe erfasst und nicht auf unseren
        Servern gespeichert. Eine Übermittlung in Drittländer kann stattfinden;
        Stripe verweist hierfür auf Standardvertragsklauseln bzw. das EU-US Data
        Privacy Framework. Details: stripe.com/privacy.
      </p>
      <h2 className={h2}>4. Kostenloser Rechner</h2>
      <p>
        Die Eingaben im kostenlosen Rechner werden ausschließlich im Browser
        berechnet und nicht an unsere Server übertragen oder gespeichert.
      </p>
      <h2 className={h2}>5. Kontaktaufnahme</h2>
      <p>
        Bei Kontakt per E-Mail verarbeiten wir deine Angaben zur Bearbeitung der
        Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO).
      </p>
      <h2 className={h2}>6. Speicherdauer</h2>
      <p>
        <Placeholder>Speicher- und Löschfristen festlegen; Aufbewahrungspflichten für Rechnungen (i. d. R. 6 bzw. 8 bis 10 Jahre) beachten</Placeholder>
      </p>
      <h2 className={h2}>7. Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
        Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht auf
        Beschwerde bei einer Aufsichtsbehörde.{' '}
        <Placeholder>zuständige Aufsichtsbehörde</Placeholder>
      </p>
      <h2 className={h2}>8. Cookies und Tracking</h2>
      <p>
        Diese Website setzt nach aktuellem Stand keine Tracking-Cookies ein.{' '}
        <Placeholder>Bei Einbindung von Analyse-Tools Abschnitt und Einwilligungsbanner ergänzen</Placeholder>
      </p>
    </LegalPage>
  );
}
