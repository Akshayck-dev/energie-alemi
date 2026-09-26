import { Search, Handshake, BarChart3, CheckSquare, Wifi, ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import ServiceHero from '../sections/ServiceHero';
import { trackEvent } from '../lib/analytics';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import internetHeroDesk from '../assets/internet hero desktop.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function InternetanbieterStolberg() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      number: 1,
      icon: <Phone size={24} />,
      title: "Adresse und Nutzung klären",
      description: "Wir erfassen Standort, aktuellen Vertrag, Zahl der Nutzer und wichtige Anwendungen."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Verfügbarkeit prüfen",
      description: "Wir klären, welche Anschlussarten und Tarife an der konkreten Adresse buchbar sind."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Kosten und Bedingungen vergleichen",
      description: "Monatspreis, Bereitstellung, Hardware, Aktionszeitraum, Laufzeit und Kündigungsfrist werden gemeinsam betrachtet."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Entscheidung und Wechsel begleiten",
      description: "Sie wählen das passende Angebot; auf Wunsch unterstützt Energie Alemi die nächsten Schritte."
    }
  ];

  const faqs = [
    {
      question: "Welche Internetanbieter sind an meiner Adresse in Stolberg verfügbar?",
      answer: "Die Verfügbarkeit hängt von Straße, Hausnummer und vorhandener Gebäudetechnik ab. Eine adressgenaue Prüfung zeigt, welche Anschlussarten und Tarife konkret buchbar sind."
    },
    {
      question: "Welche Internetgeschwindigkeit brauche ich?",
      answer: "Das hängt von Nutzerzahl, Geräten und Anwendungen ab. Homeoffice, Videokonferenzen, Streaming, Gaming und große Uploads stellen unterschiedliche Anforderungen."
    },
    {
      question: "Was ist besser: DSL, Kabel, Glasfaser oder 5G?",
      answer: "Es gibt keine pauschal beste Lösung. Entscheidend sind Verfügbarkeit, tatsächlicher Bedarf, Stabilität, Vertragsbedingungen und Gesamtkosten."
    },
    {
      question: "Warum ist eine Verfügbarkeitsprüfung notwendig?",
      answer: "Anschlussarten und erreichbare Geschwindigkeiten können sich selbst innerhalb einer Straße unterscheiden. Erst die konkrete Adresse zeigt, welche Angebote realistisch buchbar sind."
    },
    {
      question: "Kann ich meine Festnetznummer beim Anbieterwechsel behalten?",
      answer: "Eine Rufnummernmitnahme ist bei einem Anbieterwechsel grundsätzlich möglich. Sie sollte rechtzeitig im Auftrag angegeben werden; die konkrete Umsetzung hängt vom Anschluss und den beteiligten Anbietern ab."
    },
    {
      question: "Kann das Internet beim Anbieterwechsel ausfallen?",
      answer: "Bei einem rechtzeitig eingeleiteten Wechsel muss der bisherige Anbieter grundsätzlich weiterversorgen, bis der Wechsel abgeschlossen ist. Am Umschalttag kann es zu einer Unterbrechung kommen; Details sollten mit dem neuen Anbieter geklärt werden."
    },
    {
      question: "Welche Angaben brauche ich für den Internetvergleich?",
      answer: "Hilfreich sind die vollständige Anschlussadresse, der aktuelle Vertrag, Kundennummer, gewünschte Rufnummernmitnahme sowie Angaben zu Nutzung, Nutzerzahl und benötigter Geschwindigkeit."
    },
    {
      question: "Ist die Internetberatung für Kundinnen und Kunden aus Stolberg kostenlos?",
      answer: "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Die Beratung ist telefonisch oder persönlich am Standort in Aachen möglich."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/internetanbieter-stolberg" 
        title="Internetanbieter Stolberg vergleichen | Energie Alemi"
        description="Internettarife in Stolberg vergleichen: Energie Alemi prüft Verfügbarkeit, Geschwindigkeit und Vertragskosten für Zuhause und Unternehmen."
        image={internetHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText="Internetanbieter Stolberg"
          title="Internetanbieter in Stolberg vergleichen – passend zu Adresse und Bedarf"
          description={<>Welcher Internetanschluss passt zu Ihrem Zuhause oder Unternehmen in Stolberg? Energie Alemi prüft den Bedarf, vergleicht die an Ihrer Adresse verfügbaren Tarife und unterstützt Sie auf Wunsch beim Anbieterwechsel. Übrigens: Wenn Sie auch an Tarifen für Energie interessiert sind, prüfen wir gerne mit Ihnen zusammen den passenden <Link to="/stromanbieter-stolberg" className="hover:underline font-semibold text-blue-300">Stromanbieter</Link> oder <Link to="/gasanbieter-stolberg" className="hover:underline font-semibold text-blue-300">Gasanbieter</Link> in Stolberg.</>}
          bgImage={internetHeroDesk}
          buttonText="Jetzt Internetverfügbarkeit in Stolberg prüfen lassen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internetanbieter_stolberg', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <MapPin size={24} />, title: "Adressgenaue Verfügbarkeitsprüfung" },
            { icon: <Search size={24} />, title: "Persönliche Tarifberatung" },
            { icon: <Handshake size={24} />, title: "Für Privat, Gewerbe und Industrie" },
          ]}
          accentColor="bg-blue-500 hover:bg-blue-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Die richtige Internetwahl beginnt mit einer Adressprüfung</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Ein günstiger Monatspreis allein macht noch keinen passenden Internettarif. Entscheidend sind die tatsächlich verfügbare Anschlussart, die erreichbare Geschwindigkeit, der benötigte Upload, die Vertragsbedingungen und die Gesamtkosten einschließlich Bereitstellung und Hardware.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Die Verfügbarkeit kann sich in Stolberg von Straße zu Straße und sogar zwischen Gebäuden unterscheiden. Deshalb beginnt die Beratung mit der konkreten Adresse und Ihrem Nutzungsprofil – nicht mit einer pauschalen Empfehlung.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Ob in Atsch, Büsbach, Breinig, Mausbach, Vicht oder Zweifall: Energie Alemi prüft die verfügbaren Optionen für den jeweiligen Standort und erklärt die Unterschiede verständlich. Erfahren Sie auch mehr über unsere Services als <Link to="/internetanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Internetanbieter Aachen</Link> oder lesen Sie unseren Ratgeber zum Thema <Link to="/ratgeber/internetanbieter-vergleichen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Internetanbieter vergleichen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl mt-16 bg-slate-50 dark:bg-[#122340] rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">DSL, Kabel, Glasfaser oder Mobilfunklösung</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            DSL nutzt die Telefonleitung; die erreichbare Leistung hängt von Leitung und Standort ab. Kabel kann hohe Bandbreiten bieten, wenn ein geeigneter Hausanschluss vorhanden ist. Glasfaser bietet große Leistungsreserven, ist aber nur dort wählbar, wo ein Anschluss verfügbar oder konkret buchbar ist.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            LTE oder 5G kann eine Alternative sein, wenn kein geeigneter Festnetzanschluss vorhanden ist. Hier zählen Netzabdeckung, Empfang am Standort, Datenvolumen und mögliche Schwankungen. Die beste Technik ist deshalb immer diejenige, die an der konkreten Adresse verfügbar ist und den tatsächlichen Bedarf erfüllt.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Internet für Zuhause und Unternehmen in Stolberg</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Für Privathaushalte bestimmen Nutzerzahl, Homeoffice, Streaming, Gaming, Videotelefonie und gleichzeitig verbundene Geräte den sinnvollen Leistungsbedarf. Eine größere Zahl im Tarifnamen ist nicht automatisch wirtschaftlicher.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Für Gewerbe und Industrie können neben Download und Upload auch Stabilität, feste Erreichbarkeit, Vertragslaufzeit, Servicebedingungen und Ausfallszenarien relevant sein. Energie Alemi ordnet diese Anforderungen vor dem Vergleich gemeinsam mit Ihnen ein.
          </p>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="relative z-25 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionHeader 
                    title={
                      <>
                        So funktioniert die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Internet-Tarifberatung</span>
                      </>
                    }
                    subtitle="Ein transparenter und einfacher Ablauf für Ihren neuen Internettarif."
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
          <h2 className="text-3xl font-bold mb-6">Persönliche Internetberatung für Stolberg</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Sie möchten nicht selbst zwischen Verfügbarkeitschecks, Aktionspreisen und Vertragsdetails wechseln? Energie Alemi berät Kundinnen und Kunden aus Stolberg telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen.
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
              title="Häufige Fragen zu Internettarifen in Stolberg"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-[#0047AB] dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-transparent dark:border-slate-800 text-white mt-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Jetzt Internetverfügbarkeit in Stolberg prüfen lassen</h3>
              <p className="text-blue-100 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Jetzt Internetverfügbarkeit prüfen
                </Button>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
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
