import { Search, Handshake, BarChart3, CheckSquare, Wifi, ArrowRight, MapPin, Phone, Settings } from 'lucide-react';
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

export default function InternetanbieterAachen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "DSL",
      description: "Eine verbreitete Lösung über die Telefonleitung. Die erreichbare Geschwindigkeit hängt unter anderem vom Standort und der Leitung ab."
    },
    {
      icon: <Settings size={28} strokeWidth={1.5} />,
      title: "Kabel",
      description: "Kann hohe Bandbreiten ermöglichen, sofern ein geeigneter Kabelanschluss am Gebäude verfügbar ist."
    },
    {
      icon: <Wifi size={28} strokeWidth={1.5} />,
      title: "Glasfaser",
      description: "Bietet hohe Leistungsreserven und ist besonders interessant, wenn am Standort bereits ein Glasfaseranschluss verfügbar oder geplant ist."
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5} />,
      title: "LTE oder 5G",
      description: "Kann eine Alternative sein, wenn ein geeigneter Festnetzanschluss fehlt. Entscheidend sind Netzabdeckung, Datenvolumen und Empfang am Standort."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Phone size={24} />,
      title: "Kontakt und Beratung",
      description: "Wir besprechen Ihren aktuellen Vertrag, Ihren Standort und Ihre Anforderungen."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Verfügbarkeit und Vergleich",
      description: "Wir prüfen passende Optionen für Ihre Adresse und vergleichen relevante Tarifmerkmale."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Entscheidung und Wechsel",
      description: "Sie erhalten eine verständliche Empfehlung. Auf Wunsch unterstützen wir den Wechselprozess."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Langfristiger Support",
      description: "Auch nach dem Wechsel bleibt Energie Alemi Ihr Ansprechpartner."
    }
  ];

  const faqs = [
    {
      question: "Welcher Internetanbieter ist in Aachen verfügbar?",
      answer: "Die Verfügbarkeit unterscheidet sich je nach Straße, Hausnummer und vorhandener Gebäudetechnik. Eine adressgenaue Prüfung zeigt, welche Anschlussarten und Tarife konkret infrage kommen."
    },
    {
      question: "Welche Internetgeschwindigkeit brauche ich?",
      answer: "Das hängt von der Zahl der Nutzer, den Geräten und den Anwendungen ab. Für Videokonferenzen, große Uploads, Streaming oder Gaming können andere Anforderungen gelten als für E-Mail und normales Surfen. Wir ermitteln den Bedarf vor dem Tarifvergleich."
    },
    {
      question: "Was ist besser: DSL, Kabel oder Glasfaser?",
      answer: <>Es gibt keine pauschal beste Lösung. Glasfaser bietet hohe Leistungsreserven, Kabel kann hohe Bandbreiten ermöglichen und DSL ist weit verbreitet. Entscheidend sind Verfügbarkeit, tatsächlicher Bedarf, Vertragsbedingungen und Gesamtkosten. Mehr dazu in unserem Ratgeber: <Link to="/ratgeber/dsl-vs-glasfaser-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">DSL vs. Glasfaser in Aachen</Link>.</>
    },
    {
      question: "Kann ich meine Festnetznummer beim Anbieterwechsel behalten?",
      answer: "Eine Rufnummernmitnahme ist in vielen Fällen möglich. Die Voraussetzungen und der Ablauf hängen vom bisherigen und neuen Vertrag ab und sollten im Wechselauftrag korrekt angegeben werden."
    },
    {
      question: "Soll ich meinen alten Internetvertrag selbst kündigen?",
      answer: "Bei einem regulären Anbieterwechsel sollte der Ablauf zuerst mit dem neuen Anbieter abgestimmt werden, damit Kündigung, Schaltung und eine mögliche Rufnummernmitnahme zusammenpassen. Sonderfälle wie Umzug oder außerordentliche Kündigung müssen individuell geprüft werden."
    },
    {
      question: "Wie lange dauert ein Internetanbieterwechsel?",
      answer: "Die Dauer hängt unter anderem von Vertragslaufzeit, Kündigungsfrist, Anschlussart, Verfügbarkeit und einem möglichen Technikertermin ab. Beginnen Sie deshalb möglichst früh mit der Prüfung."
    },
    {
      question: "Ist die Beratung bei Energie Alemi kostenlos?",
      answer: "Ja. Energie Alemi weist die Beratung auf der eigenen Website als kostenlos aus. Rufen Sie an oder vereinbaren Sie einen Termin vor Ort in Aachen."
    },
    {
      question: "Berät Energie Alemi auch Unternehmen?",
      answer: "Ja. Die Beratung richtet sich laut Unternehmenswebsite an Privat-, Gewerbe- und Industriekunden und umfasst auch Telekommunikationsverträge."
    }
  ];

  // Pass only specific structured data matching the exact FAQPage definition
  const structuredFaqs = [
    {
      question: "Welcher Internetanbieter ist in Aachen verfügbar?",
      answer: "Die Verfügbarkeit unterscheidet sich je nach Straße, Hausnummer und vorhandener Gebäudetechnik. Eine adressgenaue Prüfung zeigt, welche Anschlussarten und Tarife konkret infrage kommen."
    },
    {
      question: "Welche Internetgeschwindigkeit brauche ich?",
      answer: "Das hängt von der Zahl der Nutzer, den Geräten und den Anwendungen ab. Energie Alemi ermittelt den Bedarf vor dem Tarifvergleich."
    },
    {
      question: "Was ist besser: DSL, Kabel oder Glasfaser?",
      answer: "Es gibt keine pauschal beste Lösung. Entscheidend sind Verfügbarkeit, tatsächlicher Bedarf, Vertragsbedingungen und Gesamtkosten."
    },
    {
      question: "Ist die Beratung bei Energie Alemi kostenlos?",
      answer: "Ja. Energie Alemi weist die Beratung auf der eigenen Website als kostenlos aus. Termine sind telefonisch oder vor Ort in Aachen möglich."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/internetanbieter-aachen" 
        title="Internetanbieter Aachen | Tarife vergleichen | Energie Alemi"
        description="Internettarife in Aachen vergleichen: persönliche Beratung für DSL, Kabel und Glasfaser. Kostenlose Bedarfsanalyse bei Energie Alemi."
        image={internetHeroDesk} 
        faqs={structuredFaqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText="Internetanbieter Aachen"
          title="Internetanbieter in Aachen vergleichen"
          description="Welcher Internettarif passt zu Ihrem Zuhause oder Unternehmen? Energie Alemi prüft Ihren Bedarf, vergleicht verfügbare Tarife und unterstützt Sie beim Wechsel. Persönlich, transparent und direkt in Aachen."
          bgImage={internetHeroDesk}
          buttonText="Kostenlose Beratung anfragen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internetanbieter_aachen', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <MapPin size={24} />, title: "Standort in Aachen" },
            { icon: <Search size={24} />, title: "Persönliche Tarifberatung" },
            { icon: <Handshake size={24} />, title: "Für Privat, Gewerbe und Industrie" },
          ]}
          accentColor="bg-blue-500 hover:bg-blue-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Der passende Internetanschluss beginnt mit Ihrem Bedarf</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Ein günstiger Monatspreis allein macht noch keinen passenden Internettarif. Entscheidend sind die Verfügbarkeit an Ihrer Adresse, die benötigte Geschwindigkeit, die Vertragsbedingungen und die tatsächliche Nutzung. Wir betrachten diese Punkte gemeinsam und helfen Ihnen, eine wirtschaftliche Lösung zu finden, die zu Ihrem Alltag oder Betrieb passt.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Je nach Adresse können DSL, Kabel, Glasfaser oder funkbasierte Lösungen infrage kommen. Deshalb beginnt unsere Beratung mit einer Verfügbarkeits- und Bedarfsprüfung statt mit einer pauschalen Empfehlung. Wenn Sie sich vorab informieren möchten, können Sie auch <Link to="/ratgeber/internetanbieter-vergleichen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Internetanbieter vergleichen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Welche Anschlussart passt zu Ihnen?"
            align="center"
            className="mb-12"
          />
          <ServiceFeatures features={features} />
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl mt-16 bg-slate-50 dark:bg-[#122340] rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Internet für Zuhause und Unternehmen in Aachen</h3>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Für Privatkunden</h4>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Streaming, Videotelefonie, Gaming, Homeoffice und viele gleichzeitig verbundene Geräte stellen unterschiedliche Anforderungen an einen Anschluss. Wir klären, welche Leistung sinnvoll ist, welche Vertragsdetails wichtig sind und welche Optionen an Ihrer Adresse verfügbar sind.
          </p>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Für Gewerbe und Industrie</h4>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Für Unternehmen zählen neben der Bandbreite auch Stabilität, Erreichbarkeit, Laufzeit und passende Servicebedingungen. Energie Alemi analysiert Ihre aktuelle Telekommunikationssituation und unterstützt Sie bei der Auswahl einer bedarfsgerechten Lösung. Auf Wunsch beraten wir Sie im Rahmen einer gemeinsamen Vertragsberatung auch zu <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Stromanbietern</Link> und <Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Gasanbietern</Link>.
          </p>
        </div>
      </div>
      
      {/* Criteria Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Was wir beim Vergleich berücksichtigen"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Verfügbarkeit", desc: "Welche Anschlussarten und Tarife sind an der konkreten Adresse möglich?" },
              { title: "Leistung", desc: "Welche Download- und Upload-Geschwindigkeit passt zur Nutzung?" },
              { title: "Gesamtkosten", desc: "Wie wirken sich Grundpreis, Bereitstellung, Hardware und mögliche Aktionszeiträume aus?" },
              { title: "Vertrag", desc: "Welche Laufzeit, Kündigungsfrist und Preisentwicklung gelten?" },
              { title: "Service", desc: "Welche Unterstützung und Bedingungen bietet der jeweilige Tarif?" }
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
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-6">Lassen Sie Ihren aktuellen Internetvertrag unverbindlich prüfen.</p>
            <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
              Vereinbaren Sie jetzt Ihre kostenlose Beratung bei Energie Alemi in Aachen.
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
      
      {/* FAQ Section */}
      <div className="relative z-30 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title="Häufige Fragen zu Internetanbietern in Aachen"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-[#0047AB] dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-transparent dark:border-slate-800 text-white mt-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">KOSTENLOSE BERATUNG ANFRAGEN</h3>
              <p className="text-blue-100 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                0176 659 493 90  ·  Beratung am Alexianergraben 9, 52064 Aachen
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Kostenlose Beratung anfragen
                </Button>
                <a href="tel:017665949390" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  0176 659 493 90 anrufen
                </a>
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
