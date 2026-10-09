'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Was ist die US Expat Tax App?',
    answer:
      'Die US Expat Tax App ist eine Software, die US-Expats bei der Erstellung ihrer US-Steuererklärung unterstützt. Sie deckt Form 1040-NR, FBAR, FEIE und weitere wichtige Formulare ab.',
  },
  {
    question: 'Wer muss eine US-Steuererklärung abgeben?',
    answer:
      'US-Bürger und Green Card Inhaber müssen weltweit Einkommen versteuern, unabhängig davon, wo sie leben. Auch wenn du im Ausland lebst, musst du deine US-Steuererklärung abgeben.',
  },
  {
    question: 'Was ist FBAR?',
    answer:
      'FBAR (Foreign Bank Account Report) ist eine Meldung an das FinCEN, die US-Bürger mit ausländischen Bankkonten über $10.000 einreichen müssen. Die Deadline ist der 15. April (automatische Verlängerung bis 15. Oktober).',
  },
  {
    question: 'Was ist FEIE?',
    answer:
      'Die Foreign Earned Income Exclusion (FEIE) erlaubt es US-Expats, bis zu $126.500 (2024) ihres ausländischen Einkommens von der US-Besteuerung auszunehmen. Voraussetzung ist der Physical Presence Test oder Bona Fide Residence Test.',
  },
  {
    question: 'Wie funktioniert der Dokumenten-Upload?',
    answer:
      'Du kannst deine Steuerdokumente (W-2, 1099, Kontoauszüge etc.) sicher in die App hochladen. Die Daten werden verschlüsselt übertragen und gespeichert. Unser System extrahiert automatisch die relevanten Informationen.',
  },
  {
    question: 'Kann ich die App auch für vergangene Steuerjahre nutzen?',
    answer:
      'Ja, mit dem Premium-Plan kannst du mehrere Steuerjahre verwalten. Du kannst auch nachträglich Ergänzungen oder Korrekturen vornehmen.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer:
      'Wir nehmen Datenschutz sehr ernst. Alle Daten werden mit TLS 1.3 verschlüsselt übertragen und mit AES-256 verschlüsselt gespeichert. Unsere Server befinden sich in der EU und wir sind vollständig DSGVO-konform.',
  },
  {
    question: 'Kann ich jederzeit kündigen?',
    answer:
      'Ja, du kannst jederzeit kündigen. Es gibt keine langfristigen Verträge oder Kündigungsfristen. Deine Daten bleiben 30 Tage nach Kündigung verfügbar, danach werden sie gelöscht.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600">
            Hier findest du Antworten auf die häufigsten Fragen.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
