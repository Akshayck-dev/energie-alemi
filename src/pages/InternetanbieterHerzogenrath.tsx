import { Search, Handshake, BarChart3, ArrowRight, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon, Wifi } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import { trackEvent } from '../lib/analytics';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import internetHeroDesk from '../assets/internet hero desktop.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function InternetanbieterHerzogenrath() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: "Zuhause in Herzogenrath",
      description: "Home-Office in Kohlscheid oder Streaming im Zentrum? Wir prüfen an Ihrer genauen Wohnadresse, ob DSL, Kabel oder bereits Glasfaser die beste Bandbreite und Zuverlässigkeit für Ihre Bedürfnisse liefert."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Business & Unternehmen",
      description: "Für Gewerbetreibende und den Technologiepark Herzogenrath vermitteln wir stabile Business-Tarife mit festen IP-Adressen, hohem Upload und garantierten Entstörfristen."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <MapPin size={24} />,
      title: "Postleitzahl prüfen",
      description: "Geben Sie Ihre Straße und Hausnummer in Herzogenrath an, damit wir die exakte Verfügbarkeit der Netze ermitteln können."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Bedarfsanalyse",
      description: "Wie viele Personen surfen im Haushalt? Benötigen Sie 50, 100 oder sogar 1.000 Mbit/s für ruckelfreies Arbeiten?"
    },
    {
      number: 3,
      icon: <Search size={24} />,
      title: "Technologien vergleichen",
      description: "Wir vergleichen VDSL, Kabel-Internet und Glasfaserausbau vor Ort und finden den Tarif mit dem besten Preis-Leistungs-Verhältnis."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Anbieterwechsel",
      description: "Auch die Mitnahme Ihrer bisherigen Festnetznummer bei einem Wechsel übernehmen wir gerne für Sie."
    }
  ];

  const faqs = [
    {
      question: "Ich wohne im Grenzgebiet Herzogenrath. Beeinflusst das meine Internetverbindung?",
      answer: "Ihr Festnetz- und Breitbandanschluss wird ganz regulär über deutsche Provider abgewickelt, solange Ihr Wohnhaus in Deutschland liegt. Es gelten die normalen DSL- oder Kabelverträge, wie sie in der restlichen Städteregion Aachen üblich sind."
    },
    {
      question: "Wird Glasfaser in Merkstein oder Kohlscheid angeboten?",
      answer: "Der Glasfaserausbau in der Städteregion schreitet stetig voran. Da die Verfügbarkeit sich je nach Straße ändert, machen wir einen Live-Check für Ihre Adresse, um zu sehen, ob bereits FTTH (Fiber to the Home) buchbar ist oder VDSL vorerst die beste Option bleibt."
    },
    {
      question: "Kann ich Internet und Strom bei Energie Alemi gleichzeitig ummelden?",
      answer: "Absolut! Viele Kunden nutzen unseren Service gerade bei einem Umzug nach Herzogenrath, um direkt Strom, Gas und Internet aus einer Hand vergleichen und anmelden zu lassen. Das spart Zeit und Aufwand."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/internetanbieter-herzogenrath" 
        title="Internetanbieter Herzogenrath vergleichen | Energie Alemi"
        description="Internetanbieter in Herzogenrath vergleichen: Wir prüfen DSL, Kabel & Glasfaser in Kohlscheid, Merkstein & Mitte. Unabhängige Tarifberatung."
        image={internetHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText="Internet in Herzogenrath"
          title="Schnelles Internet in Herzogenrath finden – DSL, Kabel & Glasfaser"
          description={<>Welcher Anbieter liefert an Ihrer Adresse in Herzogenrath die stabilste Verbindung zum besten Preis? Ob VDSL, ein Kabelanschluss oder die neueste Glasfasertechnologie – wir analysieren die echte Verfügbarkeit für Merkstein, Kohlscheid und das Zentrum. <br/><br/>Entdecken Sie auch unsere Angebote für <Link to="/stromanbieter-herzogenrath" className="hover:underline font-semibold text-blue-300">Strom in Herzogenrath</Link>.</>}
          bgImage={internetHeroDesk}
          buttonText="Internet-Tarife für Herzogenrath prüfen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internetanbieter_herzogenrath', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Exakte Verfügbarkeitsprüfung" },
            { icon: <BarChart3 size={24} />, title: "Laufzeit & Grundgebühr im Blick" },
            { icon: <MapPin size={24} />, title: "Lokaler Service für die Region" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Breitbandausbau in Herzogenrath optimal nutzen</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Die Internetverfügbarkeit in Herzogenrath hängt stark vom jeweiligen Stadtteil ab. Während einige Straßen in Kohlscheid oder dem Zentrum bereits von Hochgeschwindigkeits-Glasfaser profitieren, ist in anderen Lagen ein Kabel-Tarif oder VDSL die sinnvollere Wahl. 
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Die von den Anbietern beworbenen Geschwindigkeiten ("bis zu 250 Mbit/s") werden nicht immer garantiert. Energie Alemi berät Sie ehrlich, welcher Provider an Ihrer Hausnummer die zuverlässigste Leitung liefert. Wir helfen Ihnen, die monatlichen Kosten niedrig zu halten und nicht für Bandbreiten zu zahlen, die gar nicht ankommen.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Möchten Sie mehr zu den Technologien erfahren? Lesen Sie unseren Ratgeber zum Thema <Link to="/ratgeber/dsl-vs-glasfaser-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">DSL vs. Glasfaser</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Die passende Geschwindigkeit für Ihre Bedürfnisse"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
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
                    title={<><span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Providerwechsel</span> leicht gemacht</>}
                    subtitle="Wir prüfen Verträge und sorgen dafür, dass Sie beim Wechsel nicht plötzlich offline sind."
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
          <h2 className="text-3xl font-bold mb-6">Lassen Sie uns den besten Tarif finden</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Sparen Sie sich stundenlange Recherchen. Wir kennen die Netzabdeckung in der Region und beraten Sie markenunabhängig.
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
              title="Häufige Fragen zu Internetanbietern in Herzogenrath"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Jetzt Verfügbarkeit in Herzogenrath testen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Ermitteln Sie die schnellste Leitung für Ihr Zuhause.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Internet-Tarife vergleichen
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <Suspense fallback={null}>
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Internet" />
        </Suspense>
      )}
    </div>
  );
}
