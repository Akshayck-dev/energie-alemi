import { Search, Handshake, BarChart3, CheckSquare, Flame, ArrowRight, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router';
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

export default function GasanbieterEschweiler() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: "Privathaushalte",
      description: "Ein Bonus kann die rechnerischen Kosten im ersten Jahr senken. Für eine tragfähige Entscheidung sollten jedoch auch die Kosten ohne Einmalvorteil, die Auszahlungsvoraussetzungen und der Preis nach dem Aktionszeitraum sichtbar sein."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Gewerbe & Industrie",
      description: "Bei höherem Verbrauch, vermieteten Objekten oder betrieblich genutzten Gebäuden sind kalkulierbare Konditionen besonders wichtig. Der Vergleich wird deshalb an die konkrete Nutzung angepasst."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Vertrag und Rechnung prüfen",
      description: "Benötigt werden möglichst Jahresverbrauch, Lieferadresse, Zählernummer, aktueller Anbieter und Vertragsdaten."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Jahreskosten vergleichen",
      description: "Arbeitspreis, Grundpreis, Boni und Zahlungsweise werden auf die tatsächliche Verbrauchssituation bezogen."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Vertragsbedingungen einordnen",
      description: "Laufzeit, Kündigungsfrist und Umfang der Preisgarantie werden vor der Entscheidung besprochen."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel vorbereiten",
      description: "Sie wählen das passende Angebot; Energie Alemi unterstützt auf Wunsch bei den nächsten Schritten."
    }
  ];

  const faqs = [
    {
      question: "Ist die Gasberatung für Kundinnen und Kunden aus Eschweiler kostenlos?",
      answer: "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Für einen konkreten Vergleich bringen Sie am besten Ihre letzte Gasrechnung und die aktuellen Vertragsdaten mit."
    },
    {
      question: "Kann ich in einer Mietwohnung den Gasanbieter wechseln?",
      answer: "Das ist nur möglich, wenn Sie selbst Vertragspartner für die Gaslieferung sind. Bei einer zentralen Heizungsanlage schließt häufig die Vermietung oder Hausverwaltung den Vertrag ab."
    },
    {
      question: "Welche Gastarife sind in Eschweiler verfügbar?",
      answer: "Die Auswahl hängt von Lieferadresse, Verbrauch und aktuellem Marktangebot ab. Ein konkreter Vergleich ist deshalb erst mit den individuellen Angaben möglich."
    },
    {
      question: "Wird beim Wechsel der Gaszähler ausgetauscht?",
      answer: "Normalerweise nicht. Leitungen und Zähler bleiben in der Regel bestehen; zum Wechseltermin kann jedoch ein aktueller Zählerstand benötigt werden."
    },
    {
      question: "Kann die Gasversorgung beim Anbieterwechsel unterbrochen werden?",
      answer: "Ein regulärer Wechsel ändert den Liefervertrag, nicht das vorhandene Netz. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Belieferung ab."
    },
    {
      question: "Was bedeuten Arbeitspreis und Grundpreis beim Gas?",
      answer: "Der Arbeitspreis wird je verbrauchter Kilowattstunde berechnet. Der Grundpreis fällt verbrauchsunabhängig an. Für den Vergleich zählt die Summe der erwarteten Jahreskosten."
    },
    {
      question: "Muss ich meinen bisherigen Gasvertrag selbst kündigen?",
      answer: "Im Regelfall übernimmt der neue Lieferant die Kündigung nach entsprechender Bevollmächtigung. Sonderkündigungen, Umzüge und knappe Fristen sollten vorab separat geprüft werden."
    },
    {
      question: "Für wen lohnt sich eine Preisgarantie?",
      answer: "Eine Preisgarantie kann die Planung erleichtern, gilt aber nur für den vereinbarten Zeitraum und möglicherweise nicht für alle Preisbestandteile. Umfang und Ausschlüsse sollten deshalb genau gelesen werden."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/gasanbieter-eschweiler" 
        title="Gasanbieter Eschweiler vergleichen | Energie Alemi"
        description="Gastarife in Eschweiler vergleichen: Energie Alemi prüft Verbrauch, Gesamtkosten und Vertragsbedingungen und unterstützt beim Anbieterwechsel."
        image={gasHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Flame size={24} />}
          badgeText="Gasanbieter Eschweiler"
          title="Gasanbieter in Eschweiler vergleichen – Kosten und Vertrag prüfen"
          description={<>Sie beziehen Gas über einen eigenen Liefervertrag in Eschweiler? Energie Alemi prüft Ihre Abrechnung, vergleicht passende Tarife und unterstützt Sie auf Wunsch beim Wechsel – persönlich und nachvollziehbar. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden <Link to="/stromanbieter-eschweiler" className="hover:underline font-semibold text-blue-300">Stromanbieter in Eschweiler</Link>.</>}
          bgImage={gasHeroDesk}
          buttonText="Gastarife für Eschweiler vergleichen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'gasanbieter_eschweiler', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Kostenlose Tarifberatung" },
            { icon: <MapPin size={24} />, title: "Prüfung nach Gebäude und Verbrauch" },
            { icon: <Handshake size={24} />, title: "Unterstützung beim Anbieterwechsel" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Der Gasvergleich beginnt mit Verbrauch und Gebäudesituation</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Bei Gas können sich die Jahreskosten je nach Verbrauch deutlich unterscheiden. Deshalb werden Arbeitspreis und Grundpreis immer gemeinsam auf die Verbrauchsmenge bezogen. Laufzeit, Kündigungsfrist, Zahlungsweise, Preisgarantie und Bonusregeln gehören ebenfalls in die Bewertung.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Wichtig ist außerdem, wer den Gasliefervertrag abgeschlossen hat. Bei einer Wohnung mit Zentralheizung liegt der Vertrag häufig bei Vermietung oder Hausverwaltung. Selbst wechseln können Sie nur, wenn Sie selbst Vertragspartner der Gaslieferung sind.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Energie Alemi berät Kundinnen und Kunden aus der Eschweiler Innenstadt ebenso wie aus Dürwiß, Weisweiler, Kinzweiler, St. Jöris, Bergrath oder Nothberg. Die Beratung erfolgt telefonisch oder am Standort in Aachen. Erfahren Sie mehr über unsere Leistungen als <Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Gasanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Nicht nur den Neukundenbonus betrachten"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden <Link to="/internetanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Internetanbieter in Eschweiler</Link> zu finden.
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
                        So funktioniert die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Gas-Tarifberatung</span>
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
      
      {/* Criteria Section */}
      <div className="relative z-25 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Worauf Sie bei Gastarifen achten sollten"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Verbrauch", desc: "Die letzte Jahresabrechnung liefert die verlässlichste Vergleichsgrundlage." },
              { title: "Jahreskosten", desc: "Arbeitspreis und Grundpreis zusammenrechnen, statt nur einen Einzelwert zu vergleichen." },
              { title: "Preisgarantie", desc: "Prüfen, wie lange sie gilt und welche Bestandteile ausgenommen sein können." },
              { title: "Kündigungsfrist", desc: "Den frühestmöglichen Wechseltermin des bisherigen Vertrags beachten." },
              { title: "Bonusbedingungen", desc: "Voraussetzungen und Auszahlungszeitpunkt nachvollziehen." },
              { title: "Vorauszahlung", desc: "Angebote mit Vorkasse oder hohen Abschlägen besonders sorgfältig prüfen." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-[#0a1628] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1"><Link to="/ratgeber/gasvergleich" className="hover:underline">{item.title}</Link></h4>
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
          <h2 className="text-3xl font-bold mb-6">Gasberatung für Eschweiler – persönlich erreichbar in Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Wer mehrere Tariflisten vergleicht, sieht viele Zahlen, aber nicht automatisch den passenden Vertrag. Energie Alemi ordnet die Optionen für Kundinnen und Kunden aus Eschweiler ein – telefonisch oder persönlich am Alexianergraben 9 in 52064 Aachen.
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
              title="Häufige Fragen zu Gastarifen in Eschweiler"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Gastarife für Eschweiler vergleichen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Gastarife für Eschweiler vergleichen
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
