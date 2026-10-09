# US Expat Tax App

Die einfachste Art, deine US-Steuererklärung als Expat zu machen.

## Features

- **Form 1040-NR** — Automatisierte Erstellung deiner US-Steuererklärung
- **FBAR (FinCEN 114)** — Meldung deiner ausländischen Bankkonten
- **FEIE** — Foreign Earned Income Exclusion Berechnung
- **Dokumenten-Upload** — Sichere Speicherung deiner Steuerdokumente
- **Deadline-Tracking** — Verpasse nie wieder eine Frist
- **Stripe-Checkout** — Sichere Zahlungsabwicklung (Test-Modus)

## Preise

| Plan | Preis | Beschreibung |
|------|-------|--------------|
| Basic | 19€/Monat | Für einfache Steuererklärungen |
| Pro | 29€/Monat | Für die meisten Expats |
| Premium | 49€/Monat | Für komplexe Situationen |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Zahlungen:** Stripe (Test-Modus)

## Getting Started

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### Installation

```bash
# Repository klonen
git clone https://github.com/Hoodkitz/us-expat-tax-app.git
cd us-expat-tax-app

# Dependencies installieren
npm install

# Environment Variables kopieren
cp .env.example .env.local
# .env.local mit deinen Stripe-Keys bearbeiten

# Dev-Server starten
npm run dev
```

Die App ist jetzt unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Stripe Test-Modus

1. Erstelle ein [Stripe-Konto](https://stripe.com)
2. Kopiere deine Test-Keys (Publishable & Secret Key)
3. Trage sie in `.env.local` ein
4. Erstelle drei Subscription-Produkte im Stripe Dashboard:
   - Basic (19€/Monat)
   - Pro (29€/Monat)
   - Premium (49€/Monat)
5. Kopiere die Price-IDs in `.env.local`

### Build

```bash
npm run build
npm start
```

## Projektstruktur

```
us-expat-tax-app/
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts      # Stripe Checkout API
│   ├── checkout/
│   │   ├── success/
│   │   │   └── page.tsx      # Erfolgsseite
│   │   └── cancel/
│   │       └── page.tsx      # Abbruchseite
│   ├── globals.css           # Tailwind CSS
│   ├── layout.tsx            # Root Layout
│   └── page.tsx              # Landing Page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Security

- Alle Daten werden verschlüsselt übertragen (TLS 1.3)
- DSGVO-konform
- Server in der EU

## License

MIT — siehe [LICENSE](LICENSE)
