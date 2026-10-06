import { Search, Handshake, BarChart3, CheckSquare, Wifi, ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      number: 1,
      icon: <Phone size={24} />,
      title: i18n.language === "en" ? "Clarify address and usage" : "Adresse und Nutzung klären",
      description: i18n.language === "en" ? "We record the location, current contract, number of users and important applications." : "Wir erfassen Standort, aktuellen Vertrag, Zahl der Nutzer und wichtige Anwendungen."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: i18n.language === "en" ? "availability prüfen" : "Verfügbarkeit prüfen",
      description: i18n.language === "en" ? "Wir klären, welche connection types und Tarife an der konkreten Adresse buchbar sind." : "Wir klären, welche Anschlussarten und Tarife an der konkreten Adresse buchbar sind."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: i18n.language === "en" ? "Compare costs and conditions" : "Kosten und Bedingungen vergleichen",
      description: i18n.language === "en" ? "monthly price, Bereitstellung, Hardware, promotional period, Laufzeit und cancellation period werden gemeinsam betrachtet." : "Monatspreis, Bereitstellung, Hardware, Aktionszeitraum, Laufzeit und Kündigungsfrist werden gemeinsam betrachtet."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: i18n.language === "en" ? "Accompany decision and switch" : "Entscheidung und Wechsel begleiten",
      description: i18n.language === "en" ? "You choose the suitable offer; if you wish, Energie Alemi supports the next steps." : "Sie wählen das passende Angebot; auf Wunsch unterstützt Energie Alemi die nächsten Schritte."
    }
  ];

  const faqs = [
    {
      question: i18n.language === "en" ? "Which internet providers are available at my address in Stolberg?" : "Welche Internetanbieter sind an meiner Adresse in Stolberg verfügbar?",
      answer: i18n.language === "en" ? "Die availability hängt von Straße, Hausnummer und vorhandener Gebäudetechnik ab. Eine adressgenaue Prüfung zeigt, welche connection types und Tarife konkret buchbar sind." : "Die Verfügbarkeit hängt von Straße, Hausnummer und vorhandener Gebäudetechnik ab. Eine adressgenaue Prüfung zeigt, welche Anschlussarten und Tarife konkret buchbar sind."
    },
    {
      question: "Welche Internetgeschwindigkeit brauche ich?",
      answer: i18n.language === "en" ? "That depends on the number of users, devices and applications. Home office, video conferences, streaming, gaming and large uploads have different requirements." : "Das hängt von Nutzerzahl, Geräten und Anwendungen ab. Homeoffice, Videokonferenzen, Streaming, Gaming und große Uploads stellen unterschiedliche Anforderungen."
    },
    {
      question: i18n.language === "en" ? "Was ist besser: DSL, Kabel, fiber oder 5G?" : "Was ist besser: DSL, Kabel, Glasfaser oder 5G?",
      answer: i18n.language === "en" ? "Es gibt keine pauschal beste Lösung. Entscheidend sind availability, actuallyer Bedarf, Stabilität, contract conditions und total costs." : "Es gibt keine pauschal beste Lösung. Entscheidend sind Verfügbarkeit, tatsächlicher Bedarf, Stabilität, Vertragsbedingungen und Gesamtkosten."
    },
    {
      question: i18n.language === "en" ? "Warum ist eine availability check notwendig?" : "Warum ist eine Verfügbarkeitsprüfung notwendig?",
      answer: i18n.language === "en" ? "connection types und erreichbare speeden können sich selbst innerhalb einer Straße unterscheiden. Erst die konkrete Adresse zeigt, welche Angebote realistisch buchbar sind." : "Anschlussarten und erreichbare Geschwindigkeiten können sich selbst innerhalb einer Straße unterscheiden. Erst die konkrete Adresse zeigt, welche Angebote realistisch buchbar sind."
    },
    {
      question: "Kann ich meine Festnetznummer beim Anbieterwechsel behalten?",
      answer: i18n.language === "en" ? "Eine number porting ist bei einem provider switch generally möglich. Sie sollte on time im Auftrag angegeben werden; die konkrete Umsetzung hängt vom Anschluss und den beteiligten Anbietern ab." : "Eine Rufnummernmitnahme ist bei einem Anbieterwechsel grundsätzlich möglich. Sie sollte rechtzeitig im Auftrag angegeben werden; die konkrete Umsetzung hängt vom Anschluss und den beteiligten Anbietern ab."
    },
    {
      question: i18n.language === "en" ? "Kann das Internet beim provider switch ausfallen?" : "Kann das Internet beim Anbieterwechsel ausfallen?",
      answer: i18n.language === "en" ? "Bei einem on time eingeleiteten Wechsel muss der bisherige Anbieter generally weiterversorgen, bis der Wechsel abgeschlossen ist. Am Umschalttag kann es zu einer Unterbrechung kommen; Details sollten mit dem neuen Anbieter geklärt werden." : "Bei einem rechtzeitig eingeleiteten Wechsel muss der bisherige Anbieter grundsätzlich weiterversorgen, bis der Wechsel abgeschlossen ist. Am Umschalttag kann es zu einer Unterbrechung kommen; Details sollten mit dem neuen Anbieter geklärt werden."
    },
    {
      question: i18n.language === "en" ? "What information do I need for the internet comparison?" : "Welche Angaben brauche ich für den Internetvergleich?",
      answer: i18n.language === "en" ? "Hilfreich sind die vollständige connection address, der aktuelle Vertrag, customer number, gewünschte number porting sowie Angaben zu Nutzung, Nutzerzahl und benötigter speed." : "Hilfreich sind die vollständige Anschlussadresse, der aktuelle Vertrag, Kundennummer, gewünschte Rufnummernmitnahme sowie Angaben zu Nutzung, Nutzerzahl und benötigter Geschwindigkeit."
    },
    {
      question: i18n.language === "en" ? "Ist die internet consultation für customers aus Stolberg free of charge?" : "Ist die Internetberatung für Kundinnen und Kunden aus Stolberg kostenlos?",
      answer: i18n.language === "en" ? "Ja. Energie Alemi bietet die tariff advice free of charge an. Die Beratung ist by phone oder personally am Standort in Aachen möglich." : "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Die Beratung ist telefonisch oder persönlich am Standort in Aachen möglich."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/internetanbieter-stolberg" 
        title={i18n.language === 'en' ? 'Compare Internet Providers Stolberg | Energie Alemi' : 'Internetanbieter Stolberg vergleichen | Energie Alemi'}
        description={i18n.language === "en" ? "internet tariffs in Stolberg vergleichen: Energie Alemi prüft availability, speed und Vertragskosten für Zuhause und Unternehmen." : "Internettarife in Stolberg vergleichen: Energie Alemi prüft Verfügbarkeit, Geschwindigkeit und Vertragskosten für Zuhause und Unternehmen."}
        image={internetHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText={i18n.language === 'en' ? 'Internet Providers Stolberg' : 'Internetanbieter Stolberg'}
          title="Internetanbieter in Stolberg vergleichen – passend zu Adresse und Bedarf"
          description={<>Welcher Internetanschluss passt zu Ihrem Zuhause oder Unternehmen in Stolberg? Energie Alemi prüft den Bedarf, vergleicht die an Ihrer Adresse verfügbaren Tarife und unterstützt Sie auf Wunsch beim Anbieterwechsel. Übrigens: Wenn Sie auch an Tarifen für Energie interessiert sind, prüfen wir gerne mit Ihnen zusammen den passenden <Link to="/stromanbieter-stolberg" className="hover:underline font-semibold text-blue-300">{i18n.language === 'en' ? 'electricity provider' : 'Stromanbieter'}</Link> oder <Link to="/gasanbieter-stolberg" className="hover:underline font-semibold text-blue-300">Gasanbieter</Link> in Stolberg.</>}
          bgImage={internetHeroDesk}
          buttonText="Jetzt Internetverfügbarkeit in Stolberg prüfen lassen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internetanbieter_stolberg', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <MapPin size={24} />, title: i18n.language === "en" ? "Adressgenaue availability check" : "Adressgenaue Verfügbarkeitsprüfung" },
            { icon: <Search size={24} />, title: i18n.language === "en" ? "Personal tariff advice" : "Persönliche Tarifberatung" },
            { icon: <Handshake size={24} />, title: i18n.language === "en" ? "Für Privat, business and industry" : "Für Privat, Gewerbe und Industrie" },
          ]}
          accentColor="bg-blue-500 hover:bg-blue-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Die richtige Internetwahl beginnt mit einer Adressprüfung</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "Ein günstiger monthly price allein macht noch keinen passenden internet tariff. Entscheidend sind die actually verfügbare Anschlussart, die erreichbare speed, der benötigte Upload, die contract conditions und die total costs einschließlich Bereitstellung und Hardware." : "Ein günstiger Monatspreis allein macht noch keinen passenden Internettarif. Entscheidend sind die tatsächlich verfügbare Anschlussart, die erreichbare Geschwindigkeit, der benötigte Upload, die Vertragsbedingungen und die Gesamtkosten einschließlich Bereitstellung und Hardware."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "Die availability kann sich in Stolberg von Straße zu Straße und sogar zwischen Gebäuden unterscheiden. Deshalb beginnt die Beratung mit der konkreten Adresse und Ihrem usage profile – nicht mit einer pauschalen Empfehlung." : "Die Verfügbarkeit kann sich in Stolberg von Straße zu Straße und sogar zwischen Gebäuden unterscheiden. Deshalb beginnt die Beratung mit der konkreten Adresse und Ihrem Nutzungsprofil – nicht mit einer pauschalen Empfehlung."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Ob in Atsch, Büsbach, Breinig, Mausbach, Vicht oder Zweifall: Energie Alemi prüft die verfügbaren Optionen für den jeweiligen Standort und erklärt die Unterschiede verständlich. {i18n.language === 'en' ? 'Learn more about our services as' : 'Erfahren Sie auch mehr über unsere Dienstleistungen als'} <Link to="/internetanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Internetanbieter Aachen</Link> oder lesen Sie unseren Ratgeber zum Thema <Link to="/ratgeber/internetanbieter-vergleichen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Internetanbieter vergleichen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl mt-16 bg-slate-50 dark:bg-[#122340] rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">DSL, Kabel, Glasfaser oder Mobilfunklösung</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            {i18n.language === "en" ? "DSL nutzt die telephone line; die erreichbare Leistung hängt von Leitung und Standort ab. Kabel kann hohe bandwidthn bieten, wenn ein geeigneter Hausanschluss vorhanden ist. fiber bietet große performance reserves, ist aber nur dort wählbar, wo ein Anschluss verfügbar oder konkret buchbar ist." : "DSL nutzt die Telefonleitung; die erreichbare Leistung hängt von Leitung und Standort ab. Kabel kann hohe Bandbreiten bieten, wenn ein geeigneter Hausanschluss vorhanden ist. Glasfaser bietet große Leistungsreserven, ist aber nur dort wählbar, wo ein Anschluss verfügbar oder konkret buchbar ist."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            {i18n.language === "en" ? "LTE oder 5G kann eine Alternative sein, wenn kein geeigneter Festnetzanschluss vorhanden ist. Hier zählen network coverage, Empfang am Standort, Datenvolumen und mögliche Schwankungen. Die beste Technik ist deshalb immer diejenige, die an der konkreten Adresse verfügbar ist und den actuallyen Bedarf erfüllt." : "LTE oder 5G kann eine Alternative sein, wenn kein geeigneter Festnetzanschluss vorhanden ist. Hier zählen Netzabdeckung, Empfang am Standort, Datenvolumen und mögliche Schwankungen. Die beste Technik ist deshalb immer diejenige, die an der konkreten Adresse verfügbar ist und den tatsächlichen Bedarf erfüllt."}
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Internet für Zuhause und Unternehmen in Stolberg</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            {i18n.language === "en" ? "Für private households bestimmen Nutzerzahl, Homeoffice, Streaming, Gaming, video calls und gleichzeitig verbundene Geräte den sinnvollen Leistungsbedarf. Eine größere Zahl im Tarifnamen ist nicht automatisch wirtschaftlicher." : "Für Privathaushalte bestimmen Nutzerzahl, Homeoffice, Streaming, Gaming, Videotelefonie und gleichzeitig verbundene Geräte den sinnvollen Leistungsbedarf. Eine größere Zahl im Tarifnamen ist nicht automatisch wirtschaftlicher."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {i18n.language === "en" ? "Für business and industry können neben Download und Upload auch Stabilität, feste reachability, contract duration, service conditions und Ausfallszenarien relevant sein. Energie Alemi ordnet diese Anforderungen vor dem Vergleich gemeinsam mit Ihnen ein." : "Für Gewerbe und Industrie können neben Download und Upload auch Stabilität, feste Erreichbarkeit, Vertragslaufzeit, Servicebedingungen und Ausfallszenarien relevant sein. Energie Alemi ordnet diese Anforderungen vor dem Vergleich gemeinsam mit Ihnen ein."}
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
                        {i18n.language === "en" ? "This is how the " : "So funktioniert die "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "internet tariff advice" : "Internet-Tarifberatung"}</span>{i18n.language === "en" ? " works" : ""}
                      </>
                    }
                    subtitle={i18n.language === 'en' ? 'A transparent and simple process for your new internet tariff.' : 'Ein transparenter und einfacher Ablauf für Ihren neuen Internettarif.'}
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
            {i18n.language === "en" ? "Sie möchten nicht selbst zwischen availabilityschecks, promotional pricesn und contract details wechseln? Energie Alemi berät customers aus Stolberg by phone und personally am Alexianergraben 9 in 52064 Aachen." : "Sie möchten nicht selbst zwischen Verfügbarkeitschecks, Aktionspreisen und Vertragsdetails wechseln? Energie Alemi berät Kundinnen und Kunden aus Stolberg telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen."}
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
              title={i18n.language === "en" ? "Frequently asked questions about internet tariffs in Stolberg" : "Häufige Fragen zu Internettarifen in Stolberg"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-[#0047AB] dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-transparent dark:border-slate-800 text-white mt-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Jetzt Internetverfügbarkeit in Stolberg prüfen lassen</h3>
              <p className="text-blue-100 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === "en" ? "Free advice at 0176 659 493 90 or via the contact page." : "Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Jetzt Internetverfügbarkeit prüfen
                </Button>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
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
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Internet" />
        </Suspense>
      )}
    </div>
  );
}
