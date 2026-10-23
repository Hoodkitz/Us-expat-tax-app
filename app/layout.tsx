import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'US Expat Tax App — Steuererklärung für US-Expats',
  description:
    'Rechner, Berichte und Checklisten für US-Expats: FBAR, FEIE, Fristen. Keine Steuerberatung.',
  keywords: [
    'US Expat Tax',
    'FBAR',
    'FEIE',
    'Steuererklärung',
    'US Expats',
    'Tax Filing',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
