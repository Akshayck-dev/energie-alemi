import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

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
  const { t, i18n } = useTranslation();
  const [openId, setOpenId] = useState<string | null>("cat0-0");

  const categories = [
    {
      title: i18n.language === "en" ? "General Questions" : "Allgemeine Fragen",
      items: [
        {
          question: t('faq_page.q1', 'Ist die Beratung wirklich kostenlos?'),
          answer: t('faq_page.a1', 'Ja, unsere Tarifberatung ist zu 100% kostenlos und unverbindlich. Wir vergleichen Strom-, Gas- und Internet-Tarife für Sie – ohne versteckte Kosten.')
        },
        {
          question: t('faq_page.q2', 'Wie lange dauert der Anbieterwechsel?'),
          answer: t('faq_page.a2', 'Wir übernehmen den kompletten Prozess für Sie. In der Regel dauert der Wechsel 2–4 Wochen, und Sie müssen sich um nichts kümmern.')
        },
        {
          question: t('faq_page.q3', 'Beraten Sie auch Unternehmen?'),
          answer: t('faq_page.a3', 'Ja, wir beraten sowohl Privatkunden als auch Unternehmen – persönlich, unabhängig und kostenlos.')
        },
        {
          question: t('faq_page.q4', 'Muss ich meinen aktuellen Vertrag kündigen?'),
          answer: t('faq_page.a4', 'Nein. Sobald Sie sich für einen neuen Tarif entscheiden, übernehmen wir die Kündigung Ihres alten Vertrags sowie den gesamten Wechselprozess für Sie.')
        },
        {
          question: t('faq_page.q5', 'In welchen Regionen sind Sie tätig?'),
          answer: t('faq_page.a5', 'Unser Hauptstandort ist Aachen, Alexianergraben 9. Wir beraten aber auch Kunden in ganz Deutschland – persönlich vor Ort oder telefonisch.')
        },
        {
          question: i18n.language === "en" ? "Do you also advise in English?" : "Beraten Sie auch auf Englisch?",
          answer: i18n.language === "en" ? "Yes, we also offer our tariff consultancy in English. Just ask us about it, and we will gladly help you with any questions about electricity, gas, and internet in English." : "Ja, wir bieten unsere Tarifberatung auch auf Englisch an. Sprechen Sie uns einfach darauf an, und wir helfen Ihnen bei allen Fragen rund um Strom, Gas und Internet gerne auf Englisch weiter."
        },
        {
          question: i18n.language === "en" ? "Is there a contractual commitment to your advice?" : "Gibt es eine vertragliche Bindung an Ihre Beratung?",
          answer: i18n.language === "en" ? "No, our advice is completely non-binding and not tied to any contract duration. You do not commit to any consulting contract; you merely take out the energy tariff you have chosen." : "Nein, unsere Beratung ist völlig unverbindlich und an keine Vertragslaufzeit gebunden. Sie binden sich an keinen Beratungsvertrag, sondern schließen lediglich den von Ihnen gewählten Energietarif ab."
        }
      ]
    },
    {
      title: i18n.language === "en" ? "Electricity & Tariffs" : "Strom & Tarife",
      items: [
        {
          question: i18n.language === "en" ? "What is the basic electricity supply?" : "Was ist die Strom-Grundversorgung?",
          answer: i18n.language === "en" ? "The basic supply is the tariff you automatically fall into if you do not actively sign an electricity contract (e.g., when moving). It is very flexible but usually belongs to the most expensive tariffs on the market." : "Die Grundversorgung ist der Tarif, in den Sie automatisch fallen, wenn Sie keinen aktiven Stromvertrag abschließen (z.B. beim Umzug). Sie ist sehr flexibel, gehört aber meist zu den teuersten Tarifen am Markt."
        },
        {
          question: i18n.language === "en" ? "Is it worth switching to green electricity?" : "Lohnt sich der Wechsel zu Ökostrom?",
          answer: i18n.language === "en" ? "Absolutely. Green electricity from renewable energies is often just as cheap or even cheaper than grey electricity today. You protect the environment without paying more." : "Absolut. Ökostrom aus erneuerbaren Energien ist heute oft genauso günstig oder sogar günstiger als Graustrom. Sie schonen die Umwelt, ohne mehr zu bezahlen."
        },
        {
          question: i18n.language === "en" ? "Does the electricity meter need to be replaced when switching providers?" : "Muss beim Anbieterwechsel der Stromzähler getauscht werden?",
          answer: i18n.language === "en" ? "No, replacing the meter is not necessary. Your electricity meter and the lines remain the property of the local network operator, who continues to be responsible for maintenance." : "Nein, ein Zählertausch ist nicht nötig. Ihr Stromzähler und die Leitungen bleiben im Besitz des örtlichen Netzbetreibers, der weiterhin für die Wartung zuständig ist."
        },
        {
          question: i18n.language === "en" ? "What is the difference between basic supply and a special contract?" : "Was ist der Unterschied zwischen Grundversorgung und Sondervertrag?",
          answer: i18n.language === "en" ? "The basic supply is the standard tariff you automatically receive if you do not actively sign a contract. Special contracts are actively signed and usually offer significantly cheaper conditions as well as price guarantees." : "Die Grundversorgung ist der Standardtarif, den Sie automatisch erhalten, wenn Sie keinen aktiven Vertrag abschließen. Sonderverträge werden aktiv abgeschlossen und bieten in der Regel deutlich günstigere Konditionen sowie Preisgarantien."
        },
        {
          question: i18n.language === "en" ? "Is green electricity really worth it?" : "Lohnt sich Ökostrom wirklich?",
          answer: i18n.language === "en" ? "Yes, green electricity is often just as cheap as conventional electricity today. Additionally, you actively support the expansion of renewable energies and reduce your CO2 emissions without compromising security of supply." : "Ja, Ökostrom ist heute oft genauso günstig wie herkömmlicher Strom. Zudem unterstützen Sie aktiv den Ausbau erneuerbarer Energien und senken Ihre CO2-Emissionen, ohne Abstriche bei der Versorgungssicherheit zu machen."
        }
      ]
    },
    {
      title: i18n.language === "en" ? "Gas & Heating" : "Gas & Heizen",
      items: [
        {
          question: i18n.language === "en" ? "How is the gas price calculated?" : "Wie berechnet sich der Gaspreis?",
          answer: i18n.language === "en" ? "The gas price consists of a fixed base price (for provision and meter) and a variable unit price (cost per consumed kilowatt-hour)." : "Der Gaspreis setzt sich aus einem festen Grundpreis (für Bereitstellung und Zähler) und einem variablen Arbeitspreis (Kosten pro verbrauchter Kilowattstunde) zusammen."
        },
        {
          question: i18n.language === "en" ? "Should I choose a gas tariff with a price guarantee?" : "Sollte ich einen Gastarif mit Preisgarantie wählen?",
          answer: i18n.language === "en" ? "Usually, yes. A price guarantee for 12 or 24 months protects you from unexpected price increases on the energy market." : "In der Regel ja. Eine Preisgarantie über 12 oder 24 Monate schützt Sie vor unerwarteten Preiserhöhungen auf dem Energiemarkt."
        },
        {
          question: i18n.language === "en" ? "How do I find a cheaper gas tariff?" : "Wie finde ich einen günstigeren Gastarif?",
          answer: i18n.language === "en" ? "Best through an independent comparison of the different offers. We check current tariffs, watch out for hidden costs, and recommend options that exactly match your consumption behavior." : "Am besten durch einen unabhängigen Vergleich der verschiedenen Angebote. Wir prüfen aktuelle Tarife, achten auf versteckte Kosten und empfehlen Ihnen Optionen, die exakt zu Ihrem Verbrauchsverhalten passen."
        },
        {
          question: i18n.language === "en" ? "What happens if gas prices increase?" : "Was passiert bei einer Gaspreiserhöhung?",
          answer: i18n.language === "en" ? "In the event of a price increase, you have a legal right of special termination. You can end your contract at short notice, and we will immediately help you find a new and cheaper provider." : "Bei einer Preiserhöhung haben Sie ein gesetzliches Sonderkündigungsrecht. Sie können Ihren Vertrag kurzfristig beenden, und wir helfen Ihnen sofort dabei, einen neuen und günstigeren Anbieter zu finden."
        }
      ]
    },
    {
      title: i18n.language === "en" ? "Internet & DSL" : "Internet & DSL",
      items: [
        {
          question: i18n.language === "en" ? "What is better: DSL, cable, or fiber optics?" : "Was ist besser: DSL, Kabel oder Glasfaser?",
          answer: i18n.language === "en" ? "That depends on local availability. Fiber optics offer the most stable and highest speeds but are not yet available everywhere. Cable is often faster than DSL but can be subject to fluctuations during peak times." : "Das hängt von der lokalen Verfügbarkeit ab. Glasfaser bietet die stabilsten und höchsten Geschwindigkeiten, ist aber noch nicht überall verfügbar. Kabel ist oft schneller als DSL, kann aber zu Stoßzeiten Schwankungen unterliegen."
        },
        {
          question: i18n.language === "en" ? "Do I need a new router when switching providers?" : "Brauche ich einen neuen Router beim Anbieterwechsel?",
          answer: i18n.language === "en" ? "That depends on your current router and the new technology. Many providers offer a suitable router free of charge or for rent when signing a contract. When simply switching providers without changing technology, you can often continue using modern devices." : "Das kommt auf Ihren aktuellen Router und die neue Technologie an. Viele Anbieter stellen bei Vertragsabschluss kostenlos oder zur Miete einen passenden Router zur Verfügung. Bei einem reinen Anbieterwechsel ohne Technologiewechsel können Sie moderne Geräte oft weiter nutzen."
        },
        {
          question: i18n.language === "en" ? "When will fiber optics be available in Aachen?" : "Wann ist Glasfaser in Aachen verfügbar?",
          answer: i18n.language === "en" ? "The fiber optic expansion in Aachen and the city region is progressing steadily. We would be happy to check your exact address to see if a connection is already possible or when it will be expanded." : "Der Glasfaserausbau in Aachen und der Städteregion schreitet stetig voran. Wir prüfen gerne adressgenau für Sie, ob ein Anschluss bei Ihnen bereits möglich ist oder ab wann dieser ausgebaut wird."
        },
        {
          question: i18n.language === "en" ? "What to do if the internet is too slow?" : "Was tun bei zu langsamem Internet?",
          answer: i18n.language === "en" ? "It is often due to an outdated router or a tariff that no longer fits your current requirements. A switch to a modern tariff, for example via cable or fiber optics, can usually solve the problem of a slow internet connection quickly." : "Oft liegt es am veralteten Router oder einem Tarif, der nicht mehr zu Ihren aktuellen Anforderungen passt. Ein Wechsel zu einem modernen Tarif, beispielsweise über Kabel oder Glasfaser, kann das Problem der langsamen Internetverbindung meist schnell beheben."
        }
      ]
    },
    {
      title: i18n.language === "en" ? "The Switching Process" : "Der Wechselprozess",
      items: [
        {
          question: i18n.language === "en" ? "Can my electricity or gas be shut off during a switch?" : "Kann mir bei einem Wechsel der Strom oder das Gas abgestellt werden?",
          answer: i18n.language === "en" ? "No. Continuous energy supply is legally guaranteed in Germany. You will never be without electricity or gas at any point." : "Nein. Die durchgängige Energieversorgung ist in Deutschland gesetzlich garantiert. Sie stehen zu keinem Zeitpunkt ohne Strom oder Gas da."
        },
        {
          question: i18n.language === "en" ? "Are there notice periods when switching?" : "Gibt es beim Wechseln Kündigungsfristen?",
          answer: i18n.language === "en" ? "Yes, these depend on your current contract. In the basic supply, the period is usually 2 weeks. Special contracts have longer terms – we are happy to check this for you and take care of the timely cancellation." : "Ja, diese hängen von Ihrem aktuellen Vertrag ab. In der Grundversorgung beträgt die Frist meist 2 Wochen. Sonderverträge haben längere Laufzeiten – wir prüfen das gerne für Sie und übernehmen die fristgerechte Kündigung."
        },
        {
          question: i18n.language === "en" ? "Can the switch go wrong?" : "Kann der Wechsel schiefgehen?",
          answer: i18n.language === "en" ? "No, the process is extremely strictly regulated and very secure in Germany. We monitor all deadlines and ensure that your energy or internet supply is fully maintained at all times." : "Nein, der Prozess ist in Deutschland extrem stark reguliert und sehr sicher. Wir überwachen alle Fristen und stellen sicher, dass Ihre Energie- oder Internetversorgung zu jedem Zeitpunkt vollständig aufrechterhalten bleibt."
        },
        {
          question: i18n.language === "en" ? "What is a price guarantee worth?" : "Was ist eine Preisgarantie wert?",
          answer: i18n.language === "en" ? "A price guarantee effectively protects you from rising energy prices on the procurement market. Especially in turbulent market phases, it offers you valuable planning security for 12 or 24 months." : "Eine Preisgarantie schützt Sie effektiv vor steigenden Energiepreisen auf dem Beschaffungsmarkt. Besonders in unruhigen Marktphasen bietet sie Ihnen wertvolle Planungssicherheit über 12 oder 24 Monate."
        }
      ]
    }
  ];

  // Flatten FAQs for SEO schema
  const flatFaqs = categories.flatMap(cat => cat.items);

  return (
    <>
      <SEO url="/faq" faqs={flatFaqs} />

      <section className="py-20 md:py-32 bg-slate-50 dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-10 md:mb-16 text-center">
            <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              {t('faq_page.subtitle', 'FAQ')}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t('faq_page.title', 'Häufig gestellte ')}{' '}
              <span className="text-slate-400 dark:text-white/50">{t('faq_page.title_span', 'Fragen.')}</span>
            </h1>
          </div>

          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200 dark:border-white/10 pb-2">
                  {category.title}
                </h2>
                <div className="bg-white dark:bg-[#051024] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-white/10 px-6 md:px-10">
                  {category.items.map((item, itemIndex) => {
                    const id = `cat${catIndex}-${itemIndex}`;
                    return (
                      <FAQItem
                        key={id}
                        item={item}
                        isOpen={openId === id}
                        onToggle={() => setOpenId(openId === id ? null : id)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 dark:text-white/70 mb-4">
              {t('faq_page.more_questions', 'Ihre Frage war nicht dabei?')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0047AB] hover:bg-[#003380] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.02]"
            >
              {t('faq_page.contact_now', 'Jetzt kontaktieren')}
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
