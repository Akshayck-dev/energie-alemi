import { useState } from 'react';
import SEO from '../components/SEO';

/**
 * FAQ Component — Energie Alemi
 *
 * Drop this into your pages directory (e.g. src/pages/FAQ.jsx or as a
 * section inside Home.jsx / a dedicated /faq route).
 *
 * - Matches the existing design tokens: #0047AB (blue), #E5A937 (amber),
 *   #0a1628 (dark bg), font-heading, rounded-full accents.
 * - Includes FAQPage JSON-LD schema so Google can show rich results and
 *   AI answer engines (ChatGPT, Perplexity, AI Overviews) can cite it.
 * - Content is in German — swap in your i18n strings if the page is
 *   driven by a translation dictionary instead of hardcoded text.
 */

const faqs = [
  {
    question: 'Ist die Beratung wirklich kostenlos?',
    answer:
      'Ja, unsere Tarifberatung ist zu 100% kostenlos und unverbindlich. Wir vergleichen Strom-, Gas- und Internet-Tarife für Sie – ohne versteckte Kosten.',
  },
  {
    question: 'Wie lange dauert der Anbieterwechsel?',
    answer:
      'Wir übernehmen den kompletten Prozess für Sie. In der Regel dauert der Wechsel 2–4 Wochen, und Sie müssen sich um nichts kümmern.',
  },
  {
    question: 'Beraten Sie auch Unternehmen?',
    answer:
      'Ja, wir beraten sowohl Privatkunden als auch Unternehmen in Aachen und Umgebung – persönlich, unabhängig und kostenlos.',
  },
  {
    question: 'Muss ich meinen aktuellen Vertrag kündigen?',
    answer:
      'Nein. Sobald Sie sich für einen neuen Tarif entscheiden, übernehmen wir die Kündigung Ihres alten Vertrags sowie den gesamten Wechselprozess für Sie.',
  },
  {
    question: 'In welchen Regionen sind Sie tätig?',
    answer:
      'Unser Hauptstandort ist Aachen, Alexianergraben 9. Wir beraten aber auch Kunden in ganz Deutschland – persönlich vor Ort oder telefonisch.',
  },
];

interface FAQItemProps {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-slate-100 dark:border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base md:text-lg font-semibold text-slate-900 dark:text-white transition-colors">
          {item.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-[#0047AB] border-[#0047AB] rotate-45' : 'group-hover:border-[#0047AB]'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? '#ffffff' : 'currentColor'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-500 dark:text-white/70"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed pb-6 pr-12">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <SEO url="/faq" faqs={faqs} />

      <section className="py-20 md:py-32 bg-slate-50 dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-10 md:mb-16 text-center">
            <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              FAQ
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Häufig gestellte{' '}
              <span className="text-slate-400 dark:text-white/50">Fragen.</span>
            </h2>
          </div>

          <div className="bg-white dark:bg-[#051024] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-white/10 px-6 md:px-10">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-600 dark:text-white/70 mb-4">
              Ihre Frage war nicht dabei?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0047AB] hover:bg-[#003380] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.02]"
            >
              Jetzt kontaktieren
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
