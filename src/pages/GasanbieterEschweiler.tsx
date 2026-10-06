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

export default function GasanbieterEschweiler() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Private households' : 'Privathaushalte',
      description: i18n.language === "en" ? "Ein Bonus kann die rechnerischen Kosten im ersten Jahr senken. Für eine tragfähige Entscheidung sollten jedoch auch die Kosten ohne Einmalvorteil, die Auszahlungsvoraussetzungen und der Preis nach dem promotional period sichtbar sein." : "Ein Bonus kann die rechnerischen Kosten im ersten Jahr senken. Für eine tragfähige Entscheidung sollten jedoch auch die Kosten ohne Einmalvorteil, die Auszahlungsvoraussetzungen und der Preis nach dem Aktionszeitraum sichtbar sein."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === "en" ? "Business & Industry" : "Gewerbe & Industrie",
      description: i18n.language === "en" ? "For higher consumption, rented properties or commercially used buildings, calculable conditions are particularly important. The comparison is therefore adapted to the specific use." : "Bei höherem Verbrauch, vermieteten Objekten oder betrieblich genutzten Gebäuden sind kalkulierbare Konditionen besonders wichtig. Der Vergleich wird deshalb an die konkrete Nutzung angepasst."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: i18n.language === "en" ? "Check contract and bill" : "Vertrag und Rechnung prüfen",
      description: i18n.language === "en" ? "Benötigt werden if possible annual consumption, delivery address, meter number, aktueller Anbieter und contract data." : "Benötigt werden möglichst Jahresverbrauch, Lieferadresse, Zählernummer, aktueller Anbieter und Vertragsdaten."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Jahreskosten vergleichen",
      description: i18n.language === "en" ? "energy price, basic price, Boni und payment method werden auf die actuallye Verbrauchssituation bezogen." : "Arbeitspreis, Grundpreis, Boni und Zahlungsweise werden auf die tatsächliche Verbrauchssituation bezogen."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Vertragsbedingungen einordnen",
      description: i18n.language === "en" ? "Laufzeit, cancellation period und Umfang der price guarantee werden vor der Entscheidung besprochen." : "Laufzeit, Kündigungsfrist und Umfang der Preisgarantie werden vor der Entscheidung besprochen."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel vorbereiten",
      description: i18n.language === "en" ? "You choose the suitable offer; Energie Alemi supports you with the next steps if you wish." : "Sie wählen das passende Angebot; Energie Alemi unterstützt auf Wunsch bei den nächsten Schritten."
    }
  ];

  const faqs = [
    {
      question: i18n.language === "en" ? "Ist die gas consultation für customers aus Eschweiler free of charge?" : "Ist die Gasberatung für Kundinnen und Kunden aus Eschweiler kostenlos?",
      answer: i18n.language === "en" ? "Ja. Energie Alemi bietet die tariff advice free of charge an. Für einen konkreten Vergleich bringen Sie am besten Ihre letzte gas bill und die aktuellen contract data mit." : "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Für einen konkreten Vergleich bringen Sie am besten Ihre letzte Gasrechnung und die aktuellen Vertragsdaten mit."
    },
    {
      question: i18n.language === "en" ? "Can I switch gas providers in a rented apartment?" : "Kann ich in einer Mietwohnung den Gasanbieter wechseln?",
      answer: i18n.language === "en" ? "Das ist nur möglich, wenn Sie selbst Vertragspartner für die Gaslieferung sind. Bei einer zentralen heating system schließt häufig die landlord oder property management den Vertrag ab." : "Das ist nur möglich, wenn Sie selbst Vertragspartner für die Gaslieferung sind. Bei einer zentralen Heizungsanlage schließt häufig die Vermietung oder Hausverwaltung den Vertrag ab."
    },
    {
      question: i18n.language === "en" ? "Welche gas tariffs sind in Eschweiler verfügbar?" : "Welche Gastarife sind in Eschweiler verfügbar?",
      answer: i18n.language === "en" ? "Die Auswahl hängt von delivery address, Verbrauch und aktuellem Marktangebot ab. Ein konkreter Vergleich ist deshalb erst mit den individuellen Angaben möglich." : "Die Auswahl hängt von Lieferadresse, Verbrauch und aktuellem Marktangebot ab. Ein konkreter Vergleich ist deshalb erst mit den individuellen Angaben möglich."
    },
    {
      question: i18n.language === "en" ? "Is the gas meter replaced when switching?" : "Wird beim Wechsel der Gaszähler ausgetauscht?",
      answer: i18n.language === "en" ? "Normalerweise nicht. Leitungen und Zähler bleiben in der Regel bestehen; zum switching date kann jedoch ein aktueller meter reading benötigt werden." : "Normalerweise nicht. Leitungen und Zähler bleiben in der Regel bestehen; zum Wechseltermin kann jedoch ein aktueller Zählerstand benötigt werden."
    },
    {
      question: "Kann die Gasversorgung beim Anbieterwechsel unterbrochen werden?",
      answer: i18n.language === "en" ? "Ein regulärer Wechsel ändert den supply contract, nicht das vorhandene Netz. Die gesetzlich vorgesehene Grund- oder replacement supply sichert die Belieferung ab." : "Ein regulärer Wechsel ändert den Liefervertrag, nicht das vorhandene Netz. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Belieferung ab."
    },
    {
      question: i18n.language === "en" ? "Was bedeuten energy price und basic price beim Gas?" : "Was bedeuten Arbeitspreis und Grundpreis beim Gas?",
      answer: i18n.language === "en" ? "Der energy price wird je verbrauchter Kilowattstunde berechnet. Der basic price fällt verbrauchsunabhängig an. Für den Vergleich zählt die Summe der erwarteten annual costs." : "Der Arbeitspreis wird je verbrauchter Kilowattstunde berechnet. Der Grundpreis fällt verbrauchsunabhängig an. Für den Vergleich zählt die Summe der erwarteten Jahreskosten."
    },
    {
      question: i18n.language === "en" ? "Do I have to cancel my current gas contract myself?" : "Muss ich meinen bisherigen Gasvertrag selbst kündigen?",
      answer: i18n.language === "en" ? "Im Regelfall übernimmt der neue Lieferant die cancellation nach entsprechender Bevollmächtigung. special cancellations, Umzüge und knappe Fristen sollten vorab separat geprüft werden." : "Im Regelfall übernimmt der neue Lieferant die Kündigung nach entsprechender Bevollmächtigung. Sonderkündigungen, Umzüge und knappe Fristen sollten vorab separat geprüft werden."
    },
    {
      question: i18n.language === "en" ? "Für wen lohnt sich eine price guarantee?" : "Für wen lohnt sich eine Preisgarantie?",
      answer: i18n.language === "en" ? "Eine price guarantee kann die Planung erleichtern, gilt aber nur für den vereinbarten Zeitraum und möglicherweise nicht für alle price components. Umfang und Ausschlüsse sollten deshalb genau gelesen werden." : "Eine Preisgarantie kann die Planung erleichtern, gilt aber nur für den vereinbarten Zeitraum und möglicherweise nicht für alle Preisbestandteile. Umfang und Ausschlüsse sollten deshalb genau gelesen werden."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/gasanbieter-eschweiler" 
        title={i18n.language === 'en' ? 'Compare Gas Providers Eschweiler | Energie Alemi' : 'Gasanbieter Eschweiler vergleichen | Energie Alemi'}
        description={i18n.language === "en" ? "gas tariffs in Eschweiler vergleichen: Energie Alemi prüft Verbrauch, total costs und contract conditions und unterstützt beim provider switch." : "Gastarife in Eschweiler vergleichen: Energie Alemi prüft Verbrauch, Gesamtkosten und Vertragsbedingungen und unterstützt beim Anbieterwechsel."}
        image={gasHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Flame size={24} />}
          badgeText={i18n.language === 'en' ? 'Gas Providers Eschweiler' : 'Gasanbieter Eschweiler'}
          title="Gasanbieter in Eschweiler vergleichen – Kosten und Vertrag prüfen"
          description={<>Sie beziehen Gas über einen eigenen Liefervertrag in Eschweiler? Energie Alemi prüft Ihre Abrechnung, vergleicht passende Tarife und unterstützt Sie auf Wunsch beim Wechsel – persönlich und nachvollziehbar. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden <Link to="/stromanbieter-eschweiler" className="hover:underline font-semibold text-blue-300">Stromanbieter in Eschweiler</Link>.</>}
          bgImage={gasHeroDesk}
          buttonText="Gastarife für Eschweiler vergleichen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'gasanbieter_eschweiler', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: i18n.language === "en" ? "Free tariff advice" : "Kostenlose Tarifberatung" },
            { icon: <MapPin size={24} />, title: i18n.language === "en" ? "Review by building and consumption" : "Prüfung nach Gebäude und Verbrauch" },
            { icon: <Handshake size={24} />, title: i18n.language === "en" ? "Unterstützung beim provider switch" : "Unterstützung beim Anbieterwechsel" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Der Gasvergleich beginnt mit Verbrauch und Gebäudesituation</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "Bei Gas können sich die annual costs je nach Verbrauch deutlich unterscheiden. Deshalb werden energy price und basic price immer gemeinsam auf die Verbrauchsmenge bezogen. Laufzeit, cancellation period, payment method, price guarantee und Bonusregeln gehören ebenfalls in die Bewertung." : "Bei Gas können sich die Jahreskosten je nach Verbrauch deutlich unterscheiden. Deshalb werden Arbeitspreis und Grundpreis immer gemeinsam auf die Verbrauchsmenge bezogen. Laufzeit, Kündigungsfrist, Zahlungsweise, Preisgarantie und Bonusregeln gehören ebenfalls in die Bewertung."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "Wichtig ist außerdem, wer den gas supply contract abgeschlossen hat. Bei einer Wohnung mit central heating liegt der Vertrag häufig bei landlord oder property management. Selbst wechseln können Sie nur, wenn Sie selbst Vertragspartner der Gaslieferung sind." : "Wichtig ist außerdem, wer den Gasliefervertrag abgeschlossen hat. Bei einer Wohnung mit Zentralheizung liegt der Vertrag häufig bei Vermietung oder Hausverwaltung. Selbst wechseln können Sie nur, wenn Sie selbst Vertragspartner der Gaslieferung sind."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Energie Alemi berät Kundinnen und Kunden aus der Eschweiler Innenstadt ebenso wie aus Dürwiß, Weisweiler, Kinzweiler, St. Jöris, Bergrath oder Nothberg. Die Beratung erfolgt telefonisch oder am Standort in Aachen. {i18n.language === "en" ? "Learn more about our services as" : "Erfahren Sie mehr über unsere Leistungen als"} <Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Gasanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title={i18n.language === "en" ? "Nicht nur den new customer bonus betrachten" : "Nicht nur den Neukundenbonus betrachten"}
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            {i18n.language === "en" ? "By the way: In addition to electricity and gas advice, we also help you find the right" : "Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden"} <Link to="/internetanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">{i18n.language === 'en' ? 'internet provider in Eschweiler' : 'Internetanbieter in Eschweiler'}</Link> {i18n.language === "en" ? "." : "zu finden."}
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
                        {i18n.language === "en" ? "This is how the " : "So funktioniert die "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "gas tariff advice" : "Gas-Tarifberatung"}</span>{i18n.language === "en" ? " works" : ""}
                      </>
                    }
                    subtitle={i18n.language === 'en' ? 'A transparent and simple process for your new gas tariff.' : 'Ein transparenter und einfacher Ablauf für Ihren neuen Gastarif.'}
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
            title={i18n.language === "en" ? "Worauf Sie bei gas tariffsn achten sollten" : "Worauf Sie bei Gastarifen achten sollten"}
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: i18n.language === "en" ? "Consumption" : "Verbrauch", desc: i18n.language === "en" ? "Die letzte annual statement liefert die verlässlichste Vergleichsgrundlage." : "Die letzte Jahresabrechnung liefert die verlässlichste Vergleichsgrundlage." },
              { title: "Jahreskosten", desc: i18n.language === "en" ? "energy price und basic price zusammenrechnen, statt nur einen Einzelwert zu vergleichen." : "Arbeitspreis und Grundpreis zusammenrechnen, statt nur einen Einzelwert zu vergleichen." },
              { title: i18n.language === 'en' ? 'Price guarantee' : 'Preisgarantie', desc: i18n.language === "en" ? "Check how long it is valid and which components may be excluded." : "Prüfen, wie lange sie gilt und welche Bestandteile ausgenommen sein können." },
              { title: i18n.language === 'en' ? 'Cancellation period' : 'Kündigungsfrist', desc: i18n.language === "en" ? "Den frühestmöglichen switching date des bisherigen Vertrags beachten." : "Den frühestmöglichen Wechseltermin des bisherigen Vertrags beachten." },
              { title: i18n.language === 'en' ? 'Bonus conditions' : 'Bonusbedingungen', desc: i18n.language === "en" ? "Understand requirements and payout timing." : "Voraussetzungen und Auszahlungszeitpunkt nachvollziehen." },
              { title: "Vorauszahlung", desc: i18n.language === "en" ? "Angebote mit advance payment oder hohen Abschlägen besonders sorgfältig prüfen." : "Angebote mit Vorkasse oder hohen Abschlägen besonders sorgfältig prüfen." }
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
            {i18n.language === "en" ? "Wer mehrere tariff lists vergleicht, sieht viele Zahlen, aber nicht automatisch den passenden Vertrag. Energie Alemi ordnet die Optionen für customers aus Eschweiler ein – by phone oder personally am Alexianergraben 9 in 52064 Aachen." : "Wer mehrere Tariflisten vergleicht, sieht viele Zahlen, aber nicht automatisch den passenden Vertrag. Energie Alemi ordnet die Optionen für Kundinnen und Kunden aus Eschweiler ein – telefonisch oder persönlich am Alexianergraben 9 in 52064 Aachen."}
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
              title={i18n.language === "en" ? "Frequently asked questions about gas tariffs in Eschweiler" : "Häufige Fragen zu Gastarifen in Eschweiler"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Gastarife für Eschweiler vergleichen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === "en" ? "Free advice at 0176 659 493 90 or via the contact page." : "Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Gastarife für Eschweiler vergleichen
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
