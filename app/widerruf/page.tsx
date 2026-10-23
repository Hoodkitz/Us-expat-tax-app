import LegalPage, { Placeholder } from '@/components/LegalPage';

export const metadata = { title: 'Widerrufsbelehrung — US Expat Tax App' };

const h2 = 'text-xl font-semibold text-gray-900';

export default function Widerruf() {
  return (
    <LegalPage title="Widerrufsbelehrung">
      <h2 className={h2}>Widerrufsrecht</h2>
      <p>
        Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
        Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem
        Tag des Vertragsabschlusses.
      </p>
      <p>
        Um dein Widerrufsrecht auszuüben, musst du uns (
        <Placeholder>Name, Anschrift, E-Mail, ggf. Telefon</Placeholder>) mittels
        einer eindeutigen Erklärung (z. B. E-Mail) über deinen Entschluss, diesen
        Vertrag zu widerrufen, informieren. Zur Wahrung der Widerrufsfrist
        reicht es aus, dass du die Mitteilung vor Ablauf der Frist absendest.
      </p>
      <h2 className={h2}>Folgen des Widerrufs</h2>
      <p>
        Wenn du diesen Vertrag widerrufst, erstatten wir dir alle Zahlungen, die
        wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn
        Tagen ab dem Tag, an dem die Mitteilung über deinen Widerruf bei uns
        eingegangen ist, über dasselbe Zahlungsmittel.
      </p>
      <p>
        Hast du verlangt, dass die Dienstleistung während der Widerrufsfrist
        beginnen soll, so hast du uns einen angemessenen Betrag zu zahlen, der dem
        Anteil der bis zum Widerruf bereits erbrachten Leistungen entspricht.
      </p>
      <h2 className={h2}>Vorzeitiges Erlöschen</h2>
      <p>
        <Placeholder>Ggf. Hinweis zum Erlöschen des Widerrufsrechts bei vollständig erbrachter digitaler Leistung (§ 356 Abs. 4/5 BGB) samt ausdrücklicher Zustimmung im Checkout; juristisch prüfen</Placeholder>
      </p>
      <h2 className={h2}>Muster-Widerrufsformular</h2>
      <p>
        An <Placeholder>Name, Anschrift, E-Mail</Placeholder>: Hiermit widerrufe
        ich den von mir abgeschlossenen Vertrag über die Erbringung der folgenden
        Dienstleistung: ____ . Bestellt am: ____ . Name: ____ . Anschrift: ____ .
        Datum: ____
      </p>
    </LegalPage>
  );
}
