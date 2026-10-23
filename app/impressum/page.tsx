import LegalPage, { Placeholder } from '@/components/LegalPage';

export const metadata = { title: 'Impressum — US Expat Tax App' };

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <h2 className="text-xl font-semibold text-gray-900">Angaben gemäß § 5 DDG</h2>
      <p>
        <Placeholder>Vollständiger Name bzw. Firma inkl. Rechtsform</Placeholder>
        <br />
        <Placeholder>Straße und Hausnummer</Placeholder>
        <br />
        <Placeholder>PLZ und Ort, Land</Placeholder>
      </p>
      <h2 className="text-xl font-semibold text-gray-900">Kontakt</h2>
      <p>
        E-Mail: <Placeholder>Kontakt-E-Mail</Placeholder>
        <br />
        Telefon: <Placeholder>Telefonnummer (oder zweiter schneller Kontaktweg)</Placeholder>
      </p>
      <h2 className="text-xl font-semibold text-gray-900">Umsatzsteuer-ID</h2>
      <p>
        <Placeholder>USt-IdNr. gemäß § 27a UStG, falls vorhanden</Placeholder>
      </p>
      <h2 className="text-xl font-semibold text-gray-900">
        Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)
      </h2>
      <p>
        <Placeholder>Name und Anschrift</Placeholder>
      </p>
      <h2 className="text-xl font-semibold text-gray-900">Streitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.{' '}
        <Placeholder>Angabe prüfen und ggf. anpassen</Placeholder>
      </p>
    </LegalPage>
  );
}
