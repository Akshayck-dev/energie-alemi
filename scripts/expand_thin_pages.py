import os

# 1. Expand FAQ.tsx
with open('src/pages/FAQ.tsx', 'r') as f:
    faq_content = f.read()

# I will just replace the whole file to make it easier, it's short.
new_faq = """import { useState } from 'react';
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
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>("cat0-0");

  const categories = [
    {
      title: "Allgemeine Fragen",
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
        }
      ]
    },
    {
      title: "Strom & Tarife",
      items: [
        {
          question: "Was ist die Strom-Grundversorgung?",
          answer: "Die Grundversorgung ist der Tarif, in den Sie automatisch fallen, wenn Sie keinen aktiven Stromvertrag abschließen (z.B. beim Umzug). Sie ist sehr flexibel, gehört aber meist zu den teuersten Tarifen am Markt."
        },
        {
          question: "Lohnt sich der Wechsel zu Ökostrom?",
          answer: "Absolut. Ökostrom aus erneuerbaren Energien ist heute oft genauso günstig oder sogar günstiger als Graustrom. Sie schonen die Umwelt, ohne mehr zu bezahlen."
        },
        {
          question: "Muss beim Anbieterwechsel der Stromzähler getauscht werden?",
          answer: "Nein, ein Zählertausch ist nicht nötig. Ihr Stromzähler und die Leitungen bleiben im Besitz des örtlichen Netzbetreibers, der weiterhin für die Wartung zuständig ist."
        }
      ]
    },
    {
      title: "Gas & Heizen",
      items: [
        {
          question: "Wie berechnet sich der Gaspreis?",
          answer: "Der Gaspreis setzt sich aus einem festen Grundpreis (für Bereitstellung und Zähler) und einem variablen Arbeitspreis (Kosten pro verbrauchter Kilowattstunde) zusammen."
        },
        {
          question: "Sollte ich einen Gastarif mit Preisgarantie wählen?",
          answer: "In der Regel ja. Eine Preisgarantie über 12 oder 24 Monate schützt Sie vor unerwarteten Preiserhöhungen auf dem Energiemarkt."
        }
      ]
    },
    {
      title: "Internet & DSL",
      items: [
        {
          question: "Was ist besser: DSL, Kabel oder Glasfaser?",
          answer: "Das hängt von der lokalen Verfügbarkeit ab. Glasfaser bietet die stabilsten und höchsten Geschwindigkeiten, ist aber noch nicht überall verfügbar. Kabel ist oft schneller als DSL, kann aber zu Stoßzeiten Schwankungen unterliegen."
        },
        {
          question: "Brauche ich einen neuen Router beim Anbieterwechsel?",
          answer: "Das kommt auf Ihren aktuellen Router und die neue Technologie an. Viele Anbieter stellen bei Vertragsabschluss kostenlos oder zur Miete einen passenden Router zur Verfügung. Bei einem reinen Anbieterwechsel ohne Technologiewechsel können Sie moderne Geräte oft weiter nutzen."
        }
      ]
    },
    {
      title: "Der Wechselprozess",
      items: [
        {
          question: "Kann mir bei einem Wechsel der Strom oder das Gas abgestellt werden?",
          answer: "Nein. Die durchgängige Energieversorgung ist in Deutschland gesetzlich garantiert. Sie stehen zu keinem Zeitpunkt ohne Strom oder Gas da."
        },
        {
          question: "Gibt es beim Wechseln Kündigungsfristen?",
          answer: "Ja, diese hängen von Ihrem aktuellen Vertrag ab. In der Grundversorgung beträgt die Frist meist 2 Wochen. Sonderverträge haben längere Laufzeiten – wir prüfen das gerne für Sie und übernehmen die fristgerechte Kündigung."
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
"""
with open('src/pages/FAQ.tsx', 'w') as f:
    f.write(new_faq)


# 2. Expand Contact.tsx
with open('src/pages/Contact.tsx', 'r') as f:
    contact_content = f.read()

new_contact_sections = """
            <div className="w-full flex flex-col gap-10 mt-16 col-span-1 md:col-span-2">
              <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 p-8 rounded-[20px] shadow-sm text-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-6 text-[#101828] dark:text-white">Was passiert nach Ihrer Anfrage?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold text-[#0047AB] dark:text-[#60a5fa] mb-2 text-lg">1. Schnelle Rückmeldung</h3>
                    <p className="text-slate-600 dark:text-slate-300">Wir sichten Ihre Anfrage und melden uns in der Regel innerhalb von 24 Stunden telefonisch oder per E-Mail bei Ihnen zurück.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0047AB] dark:text-[#60a5fa] mb-2 text-lg">2. Kostenloses Erstgespräch</h3>
                    <p className="text-slate-600 dark:text-slate-300">In einem kurzen Gespräch klären wir Ihren aktuellen Energiebedarf, prüfen Ihren bestehenden Vertrag und besprechen Ihre Wünsche.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0047AB] dark:text-[#60a5fa] mb-2 text-lg">3. Unverbindliches Angebot</h3>
                    <p className="text-slate-600 dark:text-slate-300">Sie erhalten von uns einen passgenauen Tarifvorschlag. Wenn Sie einverstanden sind, übernehmen wir die komplette Wechselabwicklung für Sie.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 p-8 rounded-[20px] shadow-sm text-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-4 text-[#101828] dark:text-white">Persönliche Beratung vor Ort in Aachen</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Wir glauben an den Wert des persönlichen Gesprächs. Anstatt sich durch unpersönliche Online-Portale zu klicken, laden wir Sie herzlich in unser Büro am Alexianergraben 9, 52064 Aachen ein. Bringen Sie einfach Ihre letzte Strom- oder Gasabrechnung mit. Wir schauen gemeinsam darauf und finden die besten Sparpotenziale für Sie. 
                  <br/><br/>
                  Nutzen Sie unseren <a href="https://maps.app.goo.gl/PD45bFPqEn6h4Udw9" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] font-semibold hover:underline">Google Maps Link</a>, um direkt den Weg zu uns zu finden.
                </p>
              </div>

              <div className="bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 p-8 rounded-[20px] shadow-sm text-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold mb-6 text-[#101828] dark:text-white">Häufige Anliegen unserer Kunden</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#0047AB] pl-4">
                    <h3 className="font-bold text-lg">Stromrechnung zu hoch?</h3>
                    <p className="text-slate-600 dark:text-slate-300">Wir prüfen Ihren Tarif und vergleichen ihn mit aktuellen Angeboten. Erfahren Sie mehr auf unserer <a href="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-medium">Seite zum Stromanbieterwechsel</a>.</p>
                  </div>
                  <div className="border-l-4 border-[#f0a83f] pl-4">
                    <h3 className="font-bold text-lg">Sie planen einen Umzug?</h3>
                    <p className="text-slate-600 dark:text-slate-300">Ein Umzug ist der perfekte Zeitpunkt für einen Wechsel. Wir stellen sicher, dass Sie am neuen Wohnort direkt günstig versorgt sind. Tipps finden Sie im <a href="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-medium">Ratgeber Umzug in Aachen</a>.</p>
                  </div>
                  <div className="border-l-4 border-[#10b981] pl-4">
                    <h3 className="font-bold text-lg">Gasvergleich gewünscht?</h3>
                    <p className="text-slate-600 dark:text-slate-300">Sichern Sie sich langfristige Preisgarantien und schützen Sie sich vor starken Preisschwankungen. Besuchen Sie unsere <a href="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-medium">Gasanbieter-Seite</a>.</p>
                  </div>
                  <div className="border-l-4 border-[#8b5cf6] pl-4">
                    <h3 className="font-bold text-lg">Internet zu langsam oder zu teuer?</h3>
                    <p className="text-slate-600 dark:text-slate-300">Wir prüfen die Verfügbarkeit von DSL, Kabel und Glasfaser an Ihrer Adresse. Infos gibt es in unserem Bereich für <a href="/internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-medium">Internetverträge</a>.</p>
                  </div>
                </div>
              </div>
            </div>
"""

# Insert right after the end of the <ContactForm /> div and right column.
# Let's find: `</div>\n            </div>\n          </div>\n        </section>\n      </div>\n\n      {/* Map Section */}`
insert_pos = contact_content.find('            </div>\n          </div>\n        </section>')
if insert_pos != -1:
    contact_content = contact_content[:insert_pos] + new_contact_sections + contact_content[insert_pos:]
    with open('src/pages/Contact.tsx', 'w') as f:
        f.write(contact_content)


# 3. Expand Electricity.tsx
with open('src/pages/Electricity.tsx', 'r') as f:
    elec_content = f.read()

new_elec_sections = """
      <div className="relative z-25 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-[1000px]">
            <div className="bg-white dark:bg-[#051024] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/10 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">Stromkosten in Aachen: Was ist normal?</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Um zu beurteilen, ob Ihr aktueller Stromtarif zu teuer ist, hilft ein Blick auf die durchschnittlichen Verbrauchswerte. Der Stromverbrauch hängt stark von der Haushaltsgröße und der Art der Warmwasserbereitung ab.
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 dark:text-slate-300 text-lg space-y-2">
                <li><strong>1-Personen-Haushalt:</strong> ca. 1.500 kWh pro Jahr. (<a href="/ratgeber/stromverbrauch-1-person" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Details zum Single-Haushalt</a>)</li>
                <li><strong>2-Personen-Haushalt:</strong> ca. 2.500 kWh pro Jahr. (<a href="/ratgeber/stromverbrauch-2-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Details für Paare</a>)</li>
                <li><strong>4-Personen-Haushalt:</strong> ca. 4.000 kWh pro Jahr. (<a href="/ratgeber/stromverbrauch-4-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Details für Familien</a>)</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Liegt Ihr Verbrauch deutlich darüber, helfen Energiespartipps. Liegen Ihre Kosten pro kWh jedoch deutlich über dem Marktdurchschnitt, sollten Sie umgehend den Tarif wechseln.
              </p>
            </div>

            <div className="bg-white dark:bg-[#051024] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/10 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">Ökostrom oder Normalstrom?</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Viele Kunden fragen uns, ob sich der Umstieg auf Ökostrom lohnt. Die Antwort lautet ganz klar: Ja. Strom aus erneuerbaren Energien (wie Wind-, Sonnen- oder Wasserkraft) ist in den letzten Jahren enorm konkurrenzfähig geworden.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Oftmals sind reine Ökostromtarife sogar günstiger als die klassischen Graustrom-Mixe der regionalen Grundversorger. Ein Wechsel zu Ökostrom bedeutet also nicht, dass Sie mehr bezahlen müssen. Im Gegenteil: Sie schonen die Umwelt und entlasten gleichzeitig Ihren Geldbeutel.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                In unserer Tarifberatung weisen wir echte Ökotarife (mit Zertifikaten wie ok-power oder Grüner Strom Label) transparent aus, sodass Sie eine informierte Entscheidung treffen können.
              </p>
            </div>

            <div className="bg-white dark:bg-[#051024] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/10 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">Für wen lohnt sich der Wechsel besonders?</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Das größte Sparpotenzial haben Haushalte, die noch nie ihren Stromanbieter gewechselt haben und sich in der sogenannten Grundversorgung befinden. Die Grundversorgung ist zwar flexibel, aber strukturell oft sehr teuer.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Auch nach einer Preiserhöhung Ihres aktuellen Anbieters oder bei einem anstehenden Umzug ist der optimale Zeitpunkt gekommen, um aktiv zu werden. Sie profitieren dann nicht nur von besseren Kilowattstundenpreisen, sondern oft auch von attraktiven Neukundenboni.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Erfahren Sie in unserem Ratgeber mehr darüber, wie Sie den <a href="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Stromanbieter richtig wechseln</a> und Fristen optimal nutzen.
              </p>
            </div>

            <div className="bg-white dark:bg-[#051024] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">Strom, Gas & Internet aus einer Hand</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Energie Alemi bietet Ihnen den Komfort, nicht nur Ihren Stromtarif zu optimieren. Wir prüfen auf Wunsch auch Ihre Verträge für andere grundlegende Haushaltsausgaben.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Mit einem kombinierten Blick auf Ihre Kosten für <a href="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Gas</a> und <a href="/internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Internet (DSL & Glasfaser)</a> lässt sich die Haushaltskasse oft um mehrere hundert Euro im Jahr entlasten. Wir sind Ihr zentraler Ansprechpartner für alle Versorgungsverträge in Aachen und bundesweit.
              </p>
            </div>
          </div>
        </section>
      </div>
"""

insert_pos_elec = elec_content.find('{/* FAQ Section */}')
if insert_pos_elec != -1:
    elec_content = elec_content[:insert_pos_elec] + new_elec_sections + elec_content[insert_pos_elec:]
    with open('src/pages/Electricity.tsx', 'w') as f:
        f.write(elec_content)

print("Expanded thin pages successfully")
