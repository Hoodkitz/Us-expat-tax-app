import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'US Expat Tax App — Steuererklärung für US-Expats',
  description:
    'Die einfachste Art, deine US-Steuererklärung als Expat zu machen. FBAR, FEIE, Form 1040-NR, Dokumenten-Upload und Deadline-Tracking in einer App.',
  keywords: [
    'US Expat Tax',
    'FBAR',
    'FEIE',
    'Form 1040-NR',
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
