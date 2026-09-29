import { Search, Handshake, BarChart3, CheckSquare, Wifi, ArrowRight, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
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
import internetHeroDesk from '../assets/internet hero desktop.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function InternetanbieterHerzogenrath() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Private households' : 'Privathaushalte',
      description: "Für Streaming, Homeoffice, Gaming, Videokonferenzen und Cloud-Dienste sind Anzahl der Personen, gleichzeitig aktive Geräte und Upload-Bedarf wichtig. Wer regelmäßig große Dateien sendet oder Backups hochlädt, sollte die Upload-Leistung ausdrücklich mitprüfen."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === "en" ? "Business & Industry" : "Gewerbe & Industrie",
      description: "Geschäftskunden benötigen je nach Arbeitsweise zusätzlich passende Servicebedingungen, stabile Telefonie, genügend Leistungsreserve und gegebenenfalls eine Ausfallstrategie. Mehr Bandbreite ist nur dann sinnvoll, wenn sie am Standort nutzbar ist und einen konkreten Bedarf erfüllt."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Adresse erfassen",
      description: "Sie nennen Anschlussort, Straße, Hausnummer und gegebenenfalls Wohnungsangaben."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Nutzung beschreiben",
      description: "Nutzerzahl, Geräte, Homeoffice, Streaming, Gaming, Telefonie und geschäftliche Anforderungen werden erfasst."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Angebote vergleichen",
      description: "Verfügbarkeit, Download, Upload, Hardware, Bereitstellung, Aktionspreis und Vertragsbedingungen werden geprüft."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel planen",
      description: "Nach Ihrer Entscheidung werden Beauftragung, Wunschtermin und bei Bedarf Rufnummernmitnahme abgestimmt."
    }
  ];

  const faqs = [
    {
      question: i18n.language === "en" ? "Which internet providers are available at my address in Herzogenrath?" : "Welche Internetanbieter sind an meiner Adresse in Herzogenrath verfügbar?",
      answer: "Die Auswahl hängt von Straße, Hausnummer, Netzausbau und Hausanschluss ab. Eine adressgenaue Prüfung zeigt, welche Technologien und Tarife konkret buchbar sind."
    },
    {
      question: "Unterscheidet sich die Verfügbarkeit zwischen Kohlscheid, Mitte und Merkstein?",
      answer: "Ja, die technische Verfügbarkeit kann zwischen Stadtteilen, Straßen und sogar benachbarten Gebäuden abweichen. Maßgeblich ist daher immer die konkrete Anschlussadresse."
    },
    {
      question: "Wie viel Internetgeschwindigkeit brauche ich?",
      answer: "Das hängt von Personen, Geräten und gleichzeitigen Anwendungen ab. Homeoffice, Videokonferenzen, mehrere Streams, Gaming und große Uploads sollten gemeinsam berücksichtigt werden."
    },
    {
      question: "Wann ist Glasfaser die richtige Wahl?",
      answer: "Glasfaser bietet hohe Leistungsreserven. Entscheidend ist aber, ob der Anschluss an Ihrer Adresse verfügbar oder buchbar ist und ob Kosten und Vertragsbedingungen zu Ihrem Bedarf passen."
    },
    {
      question: "Welche Kosten gehören in einen Internetvergleich?",
      answer: "Neben dem Monatsentgelt zählen Aktions- und Regelpreis, Bereitstellung, Router, Versand, mögliche Anschlusskosten sowie die Kosten über die vereinbarte Vertragsdauer."
    },
    {
      question: "Kann ich meine Festnetznummer mitnehmen?",
      answer: "Eine Rufnummernmitnahme ist grundsätzlich möglich und sollte rechtzeitig beauftragt werden. Die Vertragsdaten beim bisherigen und beim neuen Anbieter müssen übereinstimmen."
    },
    {
      question: "Bleibt der Anschluss während des Anbieterwechsels aktiv?",
      answer: "Bei einem rechtzeitig eingeleiteten Wechsel muss der bisherige Anbieter grundsätzlich bis zum abgeschlossenen Wechsel weiterversorgen. Am Umschalttag kann eine kurze Unterbrechung auftreten."
    },
    {
      question: "Ist die Internetberatung für Herzogenrath kostenlos?",
      answer: "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Sie ist telefonisch oder persönlich am Beratungsstandort in Aachen möglich."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/internetanbieter-herzogenrath" 
        title={i18n.language === 'en' ? 'Compare Internet Providers Herzogenrath | Energie Alemi' : 'Internetanbieter Herzogenrath vergleichen | Energie Alemi'}
        description="Internettarife in Herzogenrath vergleichen: Energie Alemi prüft adressgenau Verfügbarkeit, Bandbreite, Kosten und Vertragsbedingungen."
        image={internetHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText={i18n.language === 'en' ? 'Internet Providers Herzogenrath' : 'Internetanbieter Herzogenrath'}
          title="Internetanbieter in Herzogenrath vergleichen – Verfügbarkeit zuerst prüfen"
          description={<>Welche Internetverbindung ist an Ihrer Adresse in Herzogenrath tatsächlich buchbar? Energie Alemi prüft die Verfügbarkeit und vergleicht Leistung, Gesamtkosten und Vertragsdetails passend zu Ihrer Nutzung. Übrigens prüfen wir auch gerne für Sie den Wechsel zu einem günstigen <Link to="/stromanbieter-herzogenrath" className="hover:underline font-semibold text-blue-300">Stromanbieter in Herzogenrath</Link>.</>}
          bgImage={internetHeroDesk}
          buttonText="Internetverfügbarkeit in Herzogenrath prüfen lassen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internetanbieter_herzogenrath', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <MapPin size={24} />, title: "Adressgenaue Verfügbarkeitsprüfung" },
            { icon: <BarChart3 size={24} />, title: "Download, Upload und Kosten vergleichen" },
            { icon: <Building2 size={24} />, title: "Für Zuhause und Geschäft" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Die Hausnummer entscheidet über die verfügbaren Anschlüsse</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Internettarife werden häufig mit einer maximalen Bandbreite beworben. Ob diese Leistung an einem konkreten Gebäude verfügbar ist, zeigt jedoch erst die Prüfung von Straße und Hausnummer. Technik, Ausbau und Hausanschluss können sich sogar innerhalb desselben Stadtteils unterscheiden.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Deshalb beginnt die Beratung für Herzogenrath-Mitte, Kohlscheid und Merkstein immer mit der vollständigen Anschlussadresse. Anschließend werden die tatsächlich buchbaren Optionen mit dem persönlichen oder betrieblichen Nutzungsprofil abgeglichen.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Ein reduzierter Monatspreis gilt häufig nur für einen Aktionszeitraum. Für einen fairen Vergleich werden daher regulärer Monatspreis, Bereitstellungsentgelt, Routerkosten, Versand, mögliche Anschlussarbeiten und die Vertragsdauer gemeinsam betrachtet. Erfahren Sie mehr über unsere Leistungen als <Link to="/internetanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Internetanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Nicht nur auf den Download achten"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden <Link to="/gasanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">{i18n.language === 'en' ? 'gas provider in Herzogenrath' : 'Gasanbieter in Herzogenrath'}</Link> zu finden.
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
                        So läuft die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Internetberatung</span> in vier Schritten
                      </>
                    }
                    subtitle="Auch Kündigungsfrist, automatische Verlängerung und Rufnummernmitnahme gehören vor der Beauftragung geklärt. So entsteht ein Bild der tatsächlichen Kosten und des organisatorischen Ablaufs."
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
            title="DSL, Kabel, Glasfaser und Mobilfunk passend einordnen"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "DSL", desc: "DSL wird über die Telefonleitung bereitgestellt; die erreichbare Geschwindigkeit hängt von den technischen Bedingungen vor Ort ab." },
              { title: "Kabel", desc: "Kabel benötigt einen geeigneten Hausanschluss." },
              { title: "Glasfaser", desc: "Glasfaser bietet hohe Leistungsreserven, ist aber nur eine Wahl, wenn der Anschluss an der Adresse vorhanden oder konkret buchbar ist.", link: "/ratgeber/dsl-vs-glasfaser-aachen" },
              { title: "LTE oder 5G", desc: "Kann als Alternative oder Zwischenlösung infrage kommen. Dabei zählen Netzabdeckung, Empfang im Gebäude, Datenvolumen und mögliche Schwankungen." },
              { title: "Bandbreite", desc: "Die beste Technik ist nicht die mit dem stärksten Werbeversprechen, sondern die verfügbare Lösung, die den Bedarf zuverlässig abdeckt." },
              { title: "Hardware", desc: "Ob ein eigener oder ein vom Anbieter bereitgestellter Router sinnvoller ist, hängt von den jeweiligen Anforderungen ab." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-[#0a1628] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {item.link ? <Link to={item.link} className="hover:underline">{item.title}</Link> : <Link to="/ratgeber/internetanbieter-vergleichen" className="hover:underline">{item.title}</Link>}
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
          <h2 className="text-3xl font-bold mb-6">Internetberatung für Herzogenrath – telefonisch oder in Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Für die erste Prüfung benötigt Energie Alemi die vollständige Anschlussadresse und möglichst die Daten des bestehenden Vertrags. Die Beratung für Kundinnen und Kunden aus Herzogenrath erfolgt telefonisch oder persönlich am Alexianergraben 9 in 52064 Aachen.
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
              title={i18n.language === "en" ? "Frequently asked questions about internet tariffs in Herzogenrath" : "Häufige Fragen zu Internettarifen in Herzogenrath"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Internetverfügbarkeit in Herzogenrath prüfen lassen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === "en" ? "Free advice at 0176 659 493 90 or via the contact page." : "Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Internetverfügbarkeit in Herzogenrath prüfen lassen
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
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Internet" />
        </Suspense>
      )}
    </div>
  );
}
