import { Search, Handshake, BarChart3, CheckSquare, ArrowRight, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon, Flame } from 'lucide-react';
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

export default function GasanbieterHerzogenrath() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: "Private Gasanschlüsse",
      description: "In Kohlscheid, Merkstein und Herzogenrath-Mitte helfen wir Hausbesitzern und Mietern, die Gaskosten zu kontrollieren. Wir vergleichen Grundpreis und Arbeitspreis exakt anhand Ihrer Wohnfläche und Ihres bisherigen Heizverhaltens."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Gewerbliches Erdgas",
      description: "Für Gewerbetreibende in Herzogenrath (z.B. im TPH oder im Einzelhandel) suchen wir Gewerbegastarife, die Planungssicherheit bei den Nebenkosten bieten, um wirtschaftliche Risiken zu minimieren."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <BarChart3 size={24} />,
      title: "Jahresverbrauch in kWh",
      description: "Sie finden Ihren Gasverbrauch auf der letzten Abrechnung. Dieser Wert ist die Basis für einen realistischen Preisvergleich."
    },
    {
      number: 2,
      icon: <Search size={24} />,
      title: "Tarife in Herzogenrath vergleichen",
      description: "Wir prüfen überregionale und regionale Gasanbieter für Ihre genaue Postleitzahl in Herzogenrath."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Preisgarantien auswerten",
      description: "Wir achten darauf, wie lange der Preis garantiert wird und ob Boni den Tarif nur künstlich im ersten Jahr verbilligen."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel beauftragen",
      description: "Energie Alemi übernimmt die Kündigung beim Vorversorger und die Neuanmeldung für Sie."
    }
  ];

  const faqs = [
    {
      question: "Ich ziehe innerhalb von Herzogenrath um. Kann ich meinen Gasvertrag mitnehmen?",
      answer: "Ein Gasvertrag ist meist an den Zähler gebunden. Bei einem Umzug haben Sie in der Regel ein Sonderkündigungsrecht. Sie sollten rechtzeitig kündigen und für die neue Wohnung in Herzogenrath einen passenden Tarif abschließen. Lesen Sie auch unseren Ratgeber zur Gasanmeldung beim Umzug."
    },
    {
      question: "Warum weichen Gaspreise in Kohlscheid manchmal von anderen Städten ab?",
      answer: "Der Endpreis für Erdgas setzt sich aus Beschaffungskosten, Steuern und den lokalen Netznutzungsentgelten zusammen. Da die Netzgebiete lokal begrenzt sind, können Tarife für Herzogenrath anders kalkuliert sein als für umliegende Städte."
    },
    {
      question: "Gibt es Biogas-Tarife für Herzogenrath?",
      answer: "Ja, Sie können sich auch in Herzogenrath für Tarife mit einem Anteil an Biogas oder für klimaneutral gestelltes Erdgas entscheiden. Wir zeigen Ihnen auf Wunsch gezielt nachhaltige Optionen."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/gasanbieter-herzogenrath" 
        title="Gasanbieter Herzogenrath: Tarife vergleichen | Energie Alemi"
        description="Gastarife in Herzogenrath vergleichen: Senken Sie Ihre Heizkosten in Kohlscheid, Merkstein und Mitte. Kostenlose, persönliche Beratung von Energie Alemi."
        image={gasHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Flame size={24} />}
          badgeText="Gas in Herzogenrath"
          title="Gasanbieter in Herzogenrath wechseln und Heizkosten senken"
          description={<>Finden Sie den passenden Gasvertrag für Ihr Zuhause oder Gewerbe in Herzogenrath. Ob in Merkstein, Kohlscheid oder der Innenstadt – Energie Alemi analysiert Ihren Erdgasverbrauch und findet verlässliche Tarife ohne böse Überraschungen bei der Jahresabrechnung. <br/><br/>Vergleichen Sie direkt auch <Link to="/stromanbieter-herzogenrath" className="hover:underline font-semibold text-blue-300">Stromanbieter in Herzogenrath</Link>.</>}
          bgImage={gasHeroDesk}
          buttonText="Gastarife für Herzogenrath prüfen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'gasanbieter_herzogenrath', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Klare Preisgarantien ohne Fallen" },
            { icon: <BarChart3 size={24} />, title: "Fokus auf reale Jahreskosten" },
            { icon: <MapPin size={24} />, title: "Persönliche Hilfe aus der Region" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Regionale Tarifberatung für Gas in Herzogenrath</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Die Heizkostenabrechnung stellt für viele Familien in Herzogenrath einen großen Posten dar. Eine genaue Überprüfung des aktuellen Gasvertrags kann schnell mehrere Hundert Euro im Jahr sparen. Dabei kommt es nicht nur auf den Arbeitspreis an, sondern auch darauf, wie hoch der monatliche Grundpreis ist – besonders bei kleineren Wohnungen in Kohlscheid oder der Stadtmitte.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Viele Vergleichsportale sortieren Angebote rein nach dem Preis im ersten Jahr und blenden hohe Folgekosten durch auslaufende Boni aus. Energie Alemi filtert solche Angebote für Sie heraus und empfiehlt Tarife, die auch langfristig bezahlbar bleiben.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Zusätzliche Einblicke zu Preisstrukturen finden Sie auch in unserem Ratgeber, wo wir <Link to="/ratgeber/gaspreise-verstehen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Gaspreise im Detail erklären</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Sichere Gasversorgung für Ihr Zuhause"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Brauchen Sie auch Glasfaser oder DSL? Wir vergleichen auch <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Internetanbieter in Herzogenrath</Link>.
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
                    title={<><span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Gasanbieter wechseln</span> in 4 Schritten</>}
                    subtitle="Wir organisieren den Wechselprozess transparent und ohne Risiko."
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
      
      {/* Contact Section */}
      <div className="relative z-25 bg-[#0047AB] dark:bg-[#002f75] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 text-white text-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Beratung ganz in Ihrer Nähe</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Die Tarifberatung von Energie Alemi ist für Sie in der gesamten Region Aachen verfügbar, so auch in Herzogenrath. Rufen Sie an oder besuchen Sie uns in Aachen.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Büro Aachen</h4>
              <p className="text-blue-100">Alexianergraben 9, 52064 Aachen</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Telefon</h4>
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
              title="Häufige Fragen zu Gastarifen in Herzogenrath"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Gastarife jetzt vergleichen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Sparen Sie nachhaltig bei Ihren Heizkosten in Herzogenrath.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Gastarife prüfen
                </Button>
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
