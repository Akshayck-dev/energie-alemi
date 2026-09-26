import { Search, Handshake, BarChart3, CheckSquare, Flame, ArrowRight, MapPin, Phone, ShieldCheck, ClipboardList } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import ServiceHero from '../sections/ServiceHero';
import { trackEvent } from '../lib/analytics';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import gasHeroDesk from '../assets/gas hero desk.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function GasanbieterStolberg() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const steps = [
    {
      number: 1,
      icon: <ClipboardList size={24} />,
      title: "Rechnung und Vertrag ansehen",
      description: "Halten Sie Jahresverbrauch, Lieferadresse, Zählernummer, bisherigen Anbieter und aktuelle Vertragsdaten bereit."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Tarife und Bedingungen vergleichen",
      description: "Wir prüfen Jahreskosten, Laufzeit, Kündigungsfrist, Preisgarantie, Zahlungsweise und Bonusregeln."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Geeignetes Angebot auswählen",
      description: "Sie erhalten die relevanten Informationen und entscheiden, welcher Tarif zu Ihrer Situation passt."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel begleiten lassen",
      description: "Auf Wunsch unterstützen wir die notwendigen Schritte und bleiben bei Rückfragen erreichbar."
    }
  ];

  const faqs = [
    {
      question: "Ist die Gasberatung für Kundinnen und Kunden aus Stolberg kostenlos?",
      answer: "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Bringen Sie für einen konkreten Vergleich am besten Ihre letzte Gasrechnung und die aktuellen Vertragsdaten mit."
    },
    {
      question: "Kann jeder Haushalt in Stolberg den Gasanbieter wechseln?",
      answer: "Ein Wechsel ist möglich, wenn Sie selbst Vertragspartner für die Gaslieferung sind und an Ihrer Adresse ein Gasanschluss genutzt wird. Bei einer Zentralheizung schließt häufig die Vermietung oder Hausverwaltung den Vertrag ab."
    },
    {
      question: "Wird die Gasversorgung beim Anbieterwechsel unterbrochen?",
      answer: "Ein regulärer Anbieterwechsel ändert den Liefervertrag, nicht die vorhandenen Leitungen. Netz und Zähler bleiben in der Regel unverändert; die Energieversorgung bleibt gesetzlich abgesichert."
    },
    {
      question: "Muss der Gaszähler beim Wechsel ausgetauscht werden?",
      answer: "Normalerweise nicht. Zum Wechseltermin kann jedoch ein aktueller Zählerstand benötigt werden."
    },
    {
      question: "Welche Angaben brauche ich für einen Gasvergleich?",
      answer: "Hilfreich sind Lieferadresse, Jahresverbrauch in Kilowattstunden, letzte Gasrechnung, aktueller Anbieter und Tarif, Zählernummer, Kundennummer sowie Laufzeit und Kündigungsfrist."
    },
    {
      question: "Was ist der Unterschied zwischen Arbeitspreis und Grundpreis?",
      answer: "Der Arbeitspreis wird je verbrauchter Kilowattstunde berechnet. Der Grundpreis fällt unabhängig vom Verbrauch als fester Betrag an. Für den Vergleich zählen die erwarteten Jahreskosten aus beiden Bestandteilen."
    },
    {
      question: "Muss ich meinen alten Gasvertrag selbst kündigen?",
      answer: "Im Normalfall übernimmt der neue Lieferant die Kündigung nach entsprechender Bevollmächtigung. Bei Sonderkündigungen, Umzügen oder knappen Fristen sollte das Vorgehen vorab geklärt werden."
    },
    {
      question: "Was bedeutet eine Preisgarantie beim Gastarif?",
      answer: "Eine Preisgarantie begrenzt Preisänderungen für einen festgelegten Zeitraum. Je nach Tarif können einzelne Preisbestandteile ausgenommen sein; deshalb sollten Dauer und Umfang vor dem Abschluss geprüft werden."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/gasanbieter-stolberg" 
        title="Gasanbieter Stolberg vergleichen | Energie Alemi"
        description="Gastarife in Stolberg persönlich vergleichen: Energie Alemi prüft Verbrauch, Vertrag und Konditionen und begleitet auf Wunsch den Anbieterwechsel."
        image={gasHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Flame size={24} />}
          badgeText="Gasanbieter Stolberg"
          title="Gasanbieter in Stolberg vergleichen – Tarife verständlich prüfen"
          description={<>Sie haben in Stolberg einen eigenen Gasliefervertrag und möchten Kosten und Vertragsbedingungen prüfen? Energie Alemi vergleicht passende Gastarife verschiedener Anbieter und begleitet Sie auf Wunsch beim Wechsel – persönlich, transparent und gut erreichbar aus Stolberg. Wir helfen Ihnen auch gerne bei der Suche nach einem passenden <Link to="/stromanbieter-stolberg" className="hover:underline font-semibold text-amber-200">Stromanbieter in Stolberg</Link>.</>}
          bgImage={gasHeroDesk}
          buttonText="Jetzt Gastarife für Stolberg vergleichen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'gasanbieter_stolberg', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Kostenlose Tarifberatung" },
            { icon: <Search size={24} />, title: "Vergleich nach Verbrauch und Gebäudesituation" },
            { icon: <Handshake size={24} />, title: "Unterstützung beim Wechsel" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ein sinnvoller Gasvergleich beginnt mit Ihrer tatsächlichen Ausgangslage</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Beim Gastarif zählt nicht nur der Preis pro Kilowattstunde. Für einen fairen Vergleich werden Arbeitspreis und Grundpreis auf Ihren Jahresverbrauch bezogen. Zusätzlich sollten Laufzeit, Kündigungsfrist, Zahlungsweise, Preisgarantie und mögliche Bonusbedingungen gemeinsam bewertet werden.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Auch die Wohn- oder Gebäudesituation ist wichtig: Wer in einem Mietshaus mit Zentralheizung lebt, schließt den Gasvertrag häufig nicht selbst ab. Ein eigener Anbieterwechsel ist nur möglich, wenn Sie selbst Vertragspartner für die Gaslieferung sind.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Energie Alemi prüft Ihre letzte Gasrechnung und erklärt die verfügbaren Optionen verständlich. Die Beratung ist für Privatpersonen, Gewerbe und Industrie aus Stolberg gedacht – vom Kernstadtbereich bis zu Stadtteilen wie Breinig, Mausbach, Gressenich, Vicht und Zweifall. Erfahren Sie mehr über unsere Leistungen als <Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Gasanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl mt-8 bg-slate-50 dark:bg-[#122340] rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Gasverträge ohne Lockpreis-Falle vergleichen</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Ein hoher Neukundenbonus kann ein Angebot im ersten Jahr attraktiv wirken lassen, sagt aber wenig über die laufenden Kosten danach aus. Deshalb betrachten wir die voraussichtlichen Jahreskosten und die Konditionen für die gesamte relevante Vertragsdauer.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Bei gewerblich genutzten Immobilien oder höherem Verbrauch gewinnen Planungssicherheit und verlässliche Vertragsbedingungen zusätzlich an Bedeutung. Hier wird der Vergleich an den konkreten Bedarf angepasst. Bei einer gemeinsamen Vertragsoptimierung helfen wir Ihnen natürlich auch dabei, einen passenden <Link to="/internetanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Internetanbieter in Stolberg</Link> zu finden.
          </p>
        </div>
      </div>
      
      {/* Criteria Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Diese Punkte gehören in jeden Gasvergleich"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Jahresverbrauch", desc: "Die letzte Abrechnung liefert die beste Grundlage für eine realistische Berechnung." },
              { title: "Arbeitspreis und Grundpreis", desc: "Beide Bestandteile bestimmen zusammen die voraussichtlichen Gesamtkosten." },
              { title: "Laufzeit und Kündigungsfrist", desc: "Prüfen, wann der bestehende Vertrag endet und wie flexibel der neue Vertrag bleibt." },
              { title: "Preisgarantie", desc: "Dauer und ausgeschlossene Preisbestandteile genau lesen." },
              { title: "Bonusregeln", desc: "Voraussetzungen und Auszahlungstermin prüfen; das zweite Vertragsjahr separat betrachten." },
              { title: "Zahlungsweise", desc: "Tarife mit Vorkasse oder hohen Vorauszahlungen besonders kritisch einordnen." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white dark:bg-[#122340] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
              Jetzt Gastarife für Stolberg vergleichen
            </Button>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="relative z-25 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionHeader 
                    title={
                      <>
                        So funktioniert der <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Gasanbieterwechsel</span> in vier Schritten
                      </>
                    }
                    subtitle="Ein transparenter und einfacher Ablauf für Ihren neuen Gastarif."
                    align="left"
                    className="mb-8"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <Timeline steps={steps} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Local Info */}
      <div className="relative z-25 bg-[#0047AB] dark:bg-[#002f75] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 text-white text-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Persönliche Gasberatung für Stolberg – erreichbar in Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Ein Online-Rechner liefert viele Zahlen, aber nicht immer eine klare Entscheidung. Energie Alemi unterstützt Kundinnen und Kunden aus Stolberg telefonisch und am Standort Alexianergraben 9 in 52064 Aachen. Für den Termin genügt zunächst Ihre letzte Gasrechnung oder eine Übersicht zu Verbrauch und aktuellem Vertrag.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Adresse</h4>
              <p className="text-blue-100">Alexianergraben 9, 52064 Aachen</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Telefon</h4>
              <a href="tel:017665949390" className="text-blue-100 hover:text-white hover:underline">0176 659 493 90</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="relative z-30 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title="Häufige Fragen zu Gastarifen in Stolberg"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-transparent dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Jetzt Gastarife für Stolberg vergleichen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Jetzt Gastarife für Stolberg vergleichen
                </Button>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0047AB] dark:border-[#f0a83f] text-[#0047AB] dark:text-[#f0a83f] font-semibold rounded-full hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#0a1628] transition-colors">
                  <Phone size={18} className="mr-2" />
                  Kostenlose Beratung
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
