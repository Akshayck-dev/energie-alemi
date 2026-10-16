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
import { useTranslation } from 'react-i18next';

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function InternetanbieterHerzogenrath() {
  const { i18n } = useTranslation();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? "At home in Herzogenrath" : "Zuhause in Herzogenrath",
      description: i18n.language === 'en' ? "Home office in Kohlscheid or streaming in the centre? We check at your exact residential address whether DSL, cable or already fibre delivers the best bandwidth and reliability for your needs." : "Home-Office in Kohlscheid oder Streaming im Zentrum? Wir prüfen an Ihrer genauen Wohnadresse, ob DSL, Kabel oder bereits Glasfaser die beste Bandbreite und Zuverlässigkeit für Ihre Bedürfnisse liefert."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? "Business & companies" : "Business & Unternehmen",
      description: i18n.language === 'en' ? "For businesses and the Technologiepark Herzogenrath we arrange stable business tariffs with fixed IP addresses, high upload and guaranteed fault-clearance times." : "Für Gewerbetreibende und den Technologiepark Herzogenrath vermitteln wir stabile Business-Tarife mit festen IP-Adressen, hohem Upload und garantierten Entstörfristen."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <MapPin size={24} />,
      title: i18n.language === 'en' ? "Check postcode" : "Postleitzahl prüfen",
      description: i18n.language === 'en' ? "Provide your street and house number in Herzogenrath so we can determine the exact network availability." : "Geben Sie Ihre Straße und Hausnummer in Herzogenrath an, damit wir die exakte Verfügbarkeit der Netze ermitteln können."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: i18n.language === 'en' ? "Needs analysis" : "Bedarfsanalyse",
      description: i18n.language === 'en' ? "How many people surf in the household? Do you need 50, 100 or even 1,000 Mbit/s for interruption-free working?" : "Wie viele Personen surfen im Haushalt? Benötigen Sie 50, 100 oder sogar 1.000 Mbit/s für ruckelfreies Arbeiten?"
    },
    {
      number: 3,
      icon: <Search size={24} />,
      title: i18n.language === 'en' ? "Compare technologies" : "Technologien vergleichen",
      description: i18n.language === 'en' ? "We compare VDSL, cable internet and local fibre expansion and find the tariff with the best price-performance ratio." : "Wir vergleichen VDSL, Kabel-Internet und Glasfaserausbau vor Ort und finden den Tarif mit dem besten Preis-Leistungs-Verhältnis."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: i18n.language === 'en' ? "Provider switch" : "Anbieterwechsel",
      description: i18n.language === 'en' ? "We are also happy to take over porting your existing landline number when you switch." : "Auch die Mitnahme Ihrer bisherigen Festnetznummer bei einem Wechsel übernehmen wir gerne für Sie."
    }
  ];

  const faqs = [
    {
      question: i18n.language === 'en' ? "I live in the Herzogenrath border area. Does that affect my internet connection?" : "Ich wohne im Grenzgebiet Herzogenrath. Beeinflusst das meine Internetverbindung?",
      answer: i18n.language === 'en' ? "Your fixed-line and broadband connection is handled entirely through German providers as long as your house is in Germany. The normal DSL or cable contracts apply, as is usual in the rest of the Aachen city region." : "Ihr Festnetz- und Breitbandanschluss wird ganz regulär über deutsche Provider abgewickelt, solange Ihr Wohnhaus in Deutschland liegt. Es gelten die normalen DSL- oder Kabelverträge, wie sie in der restlichen Städteregion Aachen üblich sind."
    },
    {
      question: i18n.language === 'en' ? "Is fibre offered in Merkstein or Kohlscheid?" : "Wird Glasfaser in Merkstein oder Kohlscheid angeboten?",
      answer: i18n.language === 'en' ? "Fibre expansion in the city region is progressing steadily. Because availability changes from street to street, we run a live check for your address to see whether FTTH (fibre to the home) can already be booked or whether VDSL remains the best option for now." : "Der Glasfaserausbau in der Städteregion schreitet stetig voran. Da die Verfügbarkeit sich je nach Straße ändert, machen wir einen Live-Check für Ihre Adresse, um zu sehen, ob bereits FTTH (Fiber to the Home) buchbar ist oder VDSL vorerst die beste Option bleibt."
    },
    {
      question: i18n.language === 'en' ? "Can I re-register internet and electricity with Energie Alemi at the same time?" : "Kann ich Internet und Strom bei Energie Alemi gleichzeitig ummelden?",
      answer: i18n.language === 'en' ? "Absolutely. Many customers use our service when moving to Herzogenrath to compare and register electricity, gas and internet from one source — it saves time and effort." : "Absolut! Viele Kunden nutzen unseren Service gerade bei einem Umzug nach Herzogenrath, um direkt Strom, Gas und Internet aus einer Hand vergleichen und anmelden zu lassen. Das spart Zeit und Aufwand."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/internetanbieter-herzogenrath" 
        title={i18n.language === 'en' ? "Compare Internet Tariffs in Herzogenrath | Energie Alemi" : "Internetanbieter Herzogenrath vergleichen | Energie Alemi"}
        description={i18n.language === 'en' ? "Compare internet in Herzogenrath with personal advice: DSL, cable and fibre checked for your exact address in Kohlscheid, Merkstein or the centre. Free advice." : "Internetanbieter in Herzogenrath vergleichen: DSL, Kabel & Glasfaser. Kostenlose Bedarfsanalyse, persönliche Beratung – 5,0★ auf Google."}
        image={internetHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText={i18n.language === 'en' ? "Internet Providers Herzogenrath" : "Internet in Herzogenrath"}
          title={i18n.language === 'en' ? "Find fast internet in Herzogenrath – DSL, cable and fibre" : "Schnelles Internet in Herzogenrath finden – DSL, Kabel & Glasfaser"}
          description={i18n.language === 'en' ? <>Which provider delivers the most stable connection at the best price at your address in Herzogenrath? Whether VDSL, a cable connection or the latest fibre technology — we analyse the real availability for Merkstein, Kohlscheid and the centre. <br/><br/>Also discover our offers for <Link to="/stromanbieter-herzogenrath" className="hover:underline font-semibold text-blue-300">electricity in Herzogenrath</Link>.</> : <>Welcher Anbieter liefert an Ihrer Adresse in Herzogenrath die stabilste Verbindung zum besten Preis? Ob VDSL, ein Kabelanschluss oder die neueste Glasfasertechnologie – wir analysieren die echte Verfügbarkeit für Merkstein, Kohlscheid und das Zentrum. <br/><br/>Entdecken Sie auch unsere Angebote für <Link to="/stromanbieter-herzogenrath" className="hover:underline font-semibold text-blue-300">Strom in Herzogenrath</Link>.</>}
          bgImage={internetHeroDesk}
          buttonText={i18n.language === 'en' ? "Check internet tariffs for Herzogenrath" : "Internet-Tarife für Herzogenrath prüfen"}
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internetanbieter_herzogenrath', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: i18n.language === 'en' ? "Exact availability check" : "Exakte Verfügbarkeitsprüfung" },
            { icon: <BarChart3 size={24} />, title: i18n.language === 'en' ? "Contract term & basic fee in view" : "Laufzeit & Grundgebühr im Blick" },
            { icon: <MapPin size={24} />, title: i18n.language === 'en' ? "Local service for the region" : "Lokaler Service für die Region" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? "Making optimal use of broadband expansion in Herzogenrath" : "Breitbandausbau in Herzogenrath optimal nutzen"}</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === 'en' ? "Internet availability in Herzogenrath depends heavily on the district. While some streets in Kohlscheid or the centre already benefit from high-speed fibre, a cable tariff or VDSL is the more sensible choice in other locations." : "Die Internetverfügbarkeit in Herzogenrath hängt stark vom jeweiligen Stadtteil ab. Während einige Straßen in Kohlscheid oder dem Zentrum bereits von Hochgeschwindigkeits-Glasfaser profitieren, ist in anderen Lagen ein Kabel-Tarif oder VDSL die sinnvollere Wahl."} 
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === 'en' ? "The speeds advertised by providers (\"up to 250 Mbit/s\") are not always guaranteed. Energie Alemi advises you honestly on which provider delivers the most reliable line at your house number. We help you keep monthly costs low and avoid paying for bandwidths that never actually arrive." : "Die von den Anbietern beworbenen Geschwindigkeiten (\"bis zu 250 Mbit/s\") werden nicht immer garantiert. Energie Alemi berät Sie ehrlich, welcher Provider an Ihrer Hausnummer die zuverlässigste Leitung liefert. Wir helfen Ihnen, die monatlichen Kosten niedrig zu halten und nicht für Bandbreiten zu zahlen, die gar nicht ankommen."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            {i18n.language === 'en' ? <>Want to learn more about the technologies? Read our guide on <Link to="/ratgeber/dsl-vs-glasfaser-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">DSL vs. fibre</Link>.</> : <>Möchten Sie mehr zu den Technologien erfahren? Lesen Sie unseren Ratgeber zum Thema <Link to="/ratgeber/dsl-vs-glasfaser-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">DSL vs. Glasfaser</Link>.</>}
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title={i18n.language === 'en' ? "The right speed for your needs" : "Die passende Geschwindigkeit für Ihre Bedürfnisse"}
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
                    title={i18n.language === 'en' ? <>Provider switch made easy – in four steps.</> : <><span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Providerwechsel</span> leicht gemacht</>}
                    subtitle={i18n.language === 'en' ? "We check contracts and make sure you do not suddenly go offline when switching." : "Wir prüfen Verträge und sorgen dafür, dass Sie beim Wechsel nicht plötzlich offline sind."}
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
          <h2 className="text-3xl font-bold mb-6">{i18n.language === 'en' ? "Advice close to you." : "Lassen Sie uns den besten Tarif finden"}</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {i18n.language === 'en' ? "Save yourself hours of research. We know the network coverage in the region and advise you independently of any brand. Office Aachen: Alexianergraben 9, 52064 Aachen. Phone 0176 659 493 90." : "Sparen Sie sich stundenlange Recherchen. Wir kennen die Netzabdeckung in der Region und beraten Sie markenunabhängig."}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">{i18n.language === 'en' ? "Aachen office" : "Büro Aachen"}</h4>
              <p className="text-blue-100">Alexianergraben 9, 52064 Aachen</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">{i18n.language === 'en' ? "Phone" : "Telefon"}</h4>
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
              title={i18n.language === 'en' ? "Frequently asked questions about internet providers in Herzogenrath" : "Häufige Fragen zu Internetanbietern in Herzogenrath"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{i18n.language === 'en' ? "Test availability in Herzogenrath now" : "Jetzt Verfügbarkeit in Herzogenrath testen"}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === 'en' ? "Find the fastest line for your home." : "Ermitteln Sie die schnellste Leitung für Ihr Zuhause."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  {i18n.language === 'en' ? "Compare internet tariffs" : "Internet-Tarife vergleichen"}
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
