import { Search, Handshake, BarChart3, CheckSquare, Flame, ArrowRight, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useState, lazy, Suspense } from 'react';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import { trackEvent } from '../lib/analytics';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import gasHeroDesk from '../assets/gas hero desk.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function GasanbieterHerzogenrath() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Private households' : 'Privathaushalte',
      description: "Ein Neukundenbonus kann die Rechnung im ersten Vertragsjahr beeinflussen. Für eine langfristig nachvollziehbare Entscheidung werden auch die Kosten ohne Einmalbonus, die Auszahlungsbedingungen und die Konditionen nach dem Aktionszeitraum betrachtet."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === "en" ? "Business & Industry" : "Gewerbe & Industrie",
      description: "Kurze Kündigungsfristen schaffen Flexibilität, während längere Laufzeiten mehr Bindung bedeuten. Welche Gewichtung sinnvoll ist, hängt von Verbrauch, Gebäude, Nutzung und persönlicher Planung ab – besonders bei Gewerbeobjekten oder höherem Bedarf."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Vertragssituation klären",
      description: "Sie prüfen, ob Sie selbst Vertragspartner sind, und stellen Rechnung, Lieferadresse sowie Zählerdaten bereit."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Verbrauch einordnen",
      description: "Der letzte Jahreswert wird als Grundlage für einen realistischen Kostenvergleich verwendet."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Angebote bewerten",
      description: "Jahreskosten, Preisgarantie, Laufzeit, Kündigungsfrist, Bonus und Zahlungsweise werden gegenübergestellt."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel vorbereiten",
      description: "Nach Ihrer Tarifentscheidung unterstützt Energie Alemi auf Wunsch die nächsten Schritte."
    }
  ];

  const faqs = [
    {
      question: "Ist die Gasberatung für Herzogenrath kostenlos?",
      answer: "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Für einen konkreten Vergleich sind die letzte Gasrechnung und die aktuellen Vertragsdaten besonders hilfreich."
    },
    {
      question: i18n.language === "en" ? "Can I switch gas providers as a tenant?" : "Kann ich als Mieterin oder Mieter den Gasanbieter wechseln?",
      answer: "Nur wenn Sie selbst Vertragspartner für die Gaslieferung sind. Bei einer zentralen Heizungsanlage liegt der Vertrag häufig bei Vermietung oder Hausverwaltung."
    },
    {
      question: "Welche Gastarife sind in Herzogenrath verfügbar?",
      answer: "Das hängt von Lieferadresse, Verbrauch und aktuellem Marktangebot ab. Eine belastbare Auskunft ist deshalb erst nach Prüfung der individuellen Daten möglich."
    },
    {
      question: "Was ist beim Vergleich wichtiger: Arbeitspreis oder Grundpreis?",
      answer: "Beide Preisbestandteile gehören zusammen. Der Arbeitspreis wird auf den Verbrauch berechnet, der Grundpreis fällt unabhängig davon an; entscheidend sind die erwarteten Jahreskosten."
    },
    {
      question: "Muss beim Gasanbieterwechsel der Zähler getauscht werden?",
      answer: "In der Regel nicht. Leitungen und Zähler bleiben normalerweise bestehen. Zum Wechseltermin kann jedoch ein aktueller Zählerstand erforderlich sein."
    },
    {
      question: "Ist die Gasversorgung während eines Wechsels gesichert?",
      answer: "Ein regulärer Wechsel ändert den Liefervertrag, nicht das vorhandene Netz. Die gesetzlich geregelte Grund- oder Ersatzversorgung sichert die Belieferung ab."
    },
    {
      question: "Übernimmt der neue Anbieter die Kündigung?",
      answer: "Im Normalfall ja, wenn er entsprechend bevollmächtigt wird. Sonderkündigungen, Umzüge und sehr kurze Fristen sollten separat abgestimmt werden."
    },
    {
      question: "Warum sollte ich Bonus und Folgejahr getrennt betrachten?",
      answer: "Ein einmaliger Bonus kann das erste Jahr rechnerisch günstiger machen. Für die weitere Vertragsdauer sind die laufenden Preise und Bedingungen ohne Einmalvorteil entscheidend."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/gasanbieter-herzogenrath" 
        title={i18n.language === 'en' ? 'Compare Gas Providers Herzogenrath | Energie Alemi' : 'Gasanbieter Herzogenrath vergleichen | Energie Alemi'}
        description="Gastarife in Herzogenrath vergleichen: Energie Alemi bewertet Verbrauch, Jahreskosten, Preisgarantie und Vertragslaufzeit und hilft beim Wechsel."
        image={gasHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Flame size={24} />}
          badgeText={i18n.language === 'en' ? 'Gas Providers Herzogenrath' : 'Gasanbieter Herzogenrath'}
          title="Gasanbieter in Herzogenrath vergleichen – Jahreskosten realistisch prüfen"
          description={<>Sie haben in Herzogenrath einen eigenen Gasliefervertrag? Energie Alemi prüft Ihre Ausgangslage, vergleicht passende Angebote und erklärt Kosten und Vertragsbedingungen verständlich. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden <Link to="/stromanbieter-herzogenrath" className="hover:underline font-semibold text-blue-300">Stromanbieter in Herzogenrath</Link>.</>}
          bgImage={gasHeroDesk}
          buttonText="Gastarife für Herzogenrath vergleichen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'gasanbieter_herzogenrath', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: i18n.language === "en" ? "Free tariff advice" : "Kostenlose Tarifberatung" },
            { icon: <MapPin size={24} />, title: "Verbrauch und Gebäude berücksichtigen" },
            { icon: <Handshake size={24} />, title: "Vertragsdetails transparent prüfen" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Zuerst klären, wer den Gasvertrag abgeschlossen hat</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Nicht jeder Haushalt kann den Gasanbieter selbst wechseln. In einem Gebäude mit zentraler Heizungsanlage wird der Liefervertrag häufig von der Vermietung oder Hausverwaltung geführt. Ein eigener Tarifwechsel kommt nur infrage, wenn Sie selbst Vertragspartner für die Gaslieferung sind.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Ist ein eigener Vertrag vorhanden, bilden Jahresverbrauch, Lieferadresse und bestehende Konditionen die Vergleichsbasis. Energie Alemi berät Kundinnen und Kunden aus Herzogenrath-Mitte, Kohlscheid und Merkstein telefonisch oder persönlich am Standort in Aachen.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Arbeitspreis und Grundpreis wirken je nach Verbrauch unterschiedlich. Deshalb werden nicht nur einzelne Preisangaben, sondern die erwarteten Gesamtkosten für zwölf Monate verglichen. Bei wechselndem Verbrauch sollte zusätzlich geprüft werden, wie belastbar die zugrunde gelegte Prognose ist. {i18n.language === "en" ? "Learn more about our services as" : "Erfahren Sie mehr über unsere Leistungen als"} <Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Gasanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Beim Gaspreis zählt die Rechnung für ein ganzes Jahr"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            {i18n.language === "en" ? "By the way: In addition to electricity and gas advice, we also help you find the right" : "Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden"} <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">{i18n.language === 'en' ? 'internet provider in Herzogenrath' : 'Internetanbieter in Herzogenrath'}</Link> {i18n.language === "en" ? "." : "zu finden."}
          </p>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionHeader 
                    title={
                      <>
                        So läuft der <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Gasvergleich</span> in vier klaren Schritten
                      </>
                    }
                    subtitle="Eine Preisgarantie kann Planungssicherheit geben, erfasst aber nicht automatisch jeden Preisbestandteil. Dauer, Umfang und mögliche Ausnahmen müssen daher im jeweiligen Angebot gelesen werden."
                    align="left"
                    className="mb-8"
                  />
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Preisgarantie und Flexibilität gemeinsam bewerten</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Dauer, Umfang und mögliche Ausnahmen müssen im jeweiligen Angebot gelesen werden, damit die Preisgarantie die gewünschte Sicherheit bietet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <Timeline steps={steps} />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Criteria Section */}
      <div className="relative z-25 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Diese Unterlagen beschleunigen die Prüfung"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Jahresabrechnung", desc: "Sie enthält Verbrauch, Abrechnungszeitraum und häufig die wichtigsten Vertragsdaten." },
              { title: "Lieferadresse", desc: "Sie ist für die konkrete Tarifauswahl erforderlich." },
              { title: "Zählerdaten", desc: "Zählernummer und aktueller Stand können für die Abwicklung benötigt werden." },
              { title: "Vertragsstatus", desc: "Laufzeit, Kündigungsfrist und bisheriger Anbieter bestimmen den möglichen Starttermin." },
              { title: i18n.language === 'en' ? 'Payment method' : 'Zahlungsweise', desc: "Abschläge, Vorkasse und mögliche Kautionen sollten vor dem Abschluss klar sein." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-[#0a1628] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    <Link to={item.title === "Jahresabrechnung" || item.title === "Zahlungsweise" ? "/ratgeber/gasvergleich" : item.title === "Vertragsstatus" ? "/ratgeber/grundversorgung-aachen-strom-gas" : "/ratgeber/gasanbieter-wechseln"} className="hover:underline">{item.title}</Link>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="relative z-25 bg-[#0047AB] dark:bg-[#002f75] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 text-white text-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Gasberatung für Herzogenrath – persönlich aus Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Energie Alemi vergleicht Gastarife für Kundinnen und Kunden aus Herzogenrath und erklärt die relevanten Unterschiede ohne pauschale Sparversprechen. Die Beratung ist telefonisch oder persönlich am Alexianergraben 9 in 52064 Aachen möglich.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">{i18n.language === 'en' ? 'Address' : 'Adresse'}</h4>
              <p className="text-blue-100">Alexianergraben 9, 52064 Aachen</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">{i18n.language === 'en' ? 'Phone' : 'Telefon'}</h4>
              <a data-track="phone" href="tel:017665949390" className="text-blue-100 hover:text-white hover:underline">0176 659 493 90</a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-30 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title={i18n.language === "en" ? "Frequently asked questions about gas tariffs in Herzogenrath" : "Häufige Fragen zu Gastarifen in Herzogenrath"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Gastarife für Herzogenrath vergleichen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === "en" ? "Free advice at 0176 659 493 90 or via the contact page." : "Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Gastarife für Herzogenrath vergleichen
                </Button>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0047AB] dark:border-[#f0a83f] text-[#0047AB] dark:text-[#f0a83f] font-semibold rounded-full hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#0a1628] transition-colors">
                  <Phone size={18} className="mr-2" />
                  {i18n.language === "en" ? "Free advice" : "Kostenlose Beratung"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <Suspense fallback={null}>
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Gas" />
        </Suspense>
      )}
    </div>
  );
}
