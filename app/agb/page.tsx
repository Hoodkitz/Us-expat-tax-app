import LegalPage, { Placeholder } from '@/components/LegalPage';

export const metadata = { title: 'AGB — US Expat Tax App' };

const h2 = 'text-xl font-semibold text-gray-900';

export default function AGB() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <h2 className={h2}>1. Anbieter</h2>
      <p>
        <Placeholder>Name, Anschrift des Anbieters (wie im Impressum)</Placeholder>
      </p>
      <h2 className={h2}>2. Leistungsgegenstand</h2>
      <p>
        Der Anbieter stellt Software und informative Auswertungen für US-Expats
        bereit. Es handelt sich ausdrücklich nicht um Steuer- oder
        Rechtsberatung, nicht um die Erstellung oder Einreichung von
        Steuererklärungen und nicht um ein Mandatsverhältnis.{' '}
        <Placeholder>Leistungsumfang je Tarif verbindlich beschreiben; nur tatsächlich vorhandene Funktionen nennen</Placeholder>
      </p>
      <h2 className={h2}>3. Vertragsschluss, Preise, Laufzeit</h2>
      <p>
        Der Vertrag kommt mit Abschluss der Bestellung über Stripe Checkout
        zustande. Die Tarife werden als Abonnement abgerechnet und sind{' '}
        <Placeholder>Laufzeit und Kündigungsfrist festlegen</Placeholder>{' '}
        kündbar. Preise in EUR inkl. gesetzlicher Umsatzsteuer, sofern
        anwendbar. <Placeholder>Umsatzsteuer-Behandlung / Kleinunternehmerregelung klären</Placeholder>
      </p>
      <h2 className={h2}>4. Widerruf</h2>
      <p>Verbrauchern steht ein Widerrufsrecht nach der gesonderten Widerrufsbelehrung zu.</p>
      <h2 className={h2}>5. Haftung</h2>
      <p>
        Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit,
        bei Verletzung von Leben, Körper und Gesundheit sowie nach dem
        Produkthaftungsgesetz. Bei leichter Fahrlässigkeit haftet er nur bei
        Verletzung wesentlicher Vertragspflichten, begrenzt auf den
        vorhersehbaren, vertragstypischen Schaden.{' '}
        <Placeholder>Haftungsklausel juristisch prüfen</Placeholder>
      </p>
      <h2 className={h2}>6. Keine Gewähr für Richtigkeit</h2>
      <p>
        Steuerliche Werte und Fristen ändern sich. Der Nutzer ist selbst für die
        Prüfung der Ergebnisse und die fristgerechte Erfüllung seiner
        steuerlichen Pflichten verantwortlich.
      </p>
      <h2 className={h2}>7. Schlussbestimmungen</h2>
      <p>
        Es gilt deutsches Recht unter Beachtung zwingender
        Verbraucherschutzvorschriften des Aufenthaltsstaates des Verbrauchers.{' '}
        <Placeholder>Rechtswahl und Gerichtsstand prüfen</Placeholder>
      </p>
    </LegalPage>
  );
}
