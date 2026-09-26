import { Search, Handshake, BarChart3, CheckSquare, Wifi, ArrowRight, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
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

export default function InternetanbieterEschweiler() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: "Privathaushalte",
      description: "Für einen Haushalt zählen die Zahl der Personen und Geräte sowie Anwendungen wie Homeoffice, Videokonferenzen, Streaming, Gaming und Cloud-Backups. Besonders bei häufigen Uploads sollte nicht nur die Download-Zahl betrachtet werden."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Gewerbe & Industrie",
      description: "Unternehmen benötigen je nach Arbeitsweise zusätzlich stabile Verbindungen, ausreichenden Upload, passende Servicebedingungen und einen Plan für mögliche Ausfälle. Eine pauschal größere Bandbreite ist nicht automatisch die wirtschaftlichste Lösung."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Adresse und Nutzung erfassen",
      description: "Wir klären Standort, Nutzerzahl, Anwendungen, vorhandenen Anschluss und aktuellen Vertrag."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Verfügbarkeit prüfen",
      description: "Es wird ermittelt, welche Techniken und Tarife für die genaue Eschweiler Adresse buchbar sind."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Gesamtkosten vergleichen",
      description: "Monatspreis, Aktionszeitraum, Bereitstellung, Router, Laufzeit und Kündigungsfrist werden zusammen betrachtet."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel abstimmen",
      description: "Sie wählen das passende Angebot; auf Wunsch unterstützt Energie Alemi die Beauftragung und Rufnummernmitnahme."
    }
  ];

  const faqs = [
    {
      question: "Welche Internetanbieter sind an meiner Adresse in Eschweiler verfügbar?",
      answer: "Die Verfügbarkeit hängt von Straße, Hausnummer und Gebäudetechnik ab. Eine adressgenaue Prüfung zeigt, welche Anschlussarten und Tarife konkret buchbar sind."
    },
    {
      question: "Warum unterscheiden sich Angebote innerhalb von Eschweiler?",
      answer: "Netze und Hausanschlüsse sind nicht an jeder Adresse gleich ausgebaut. Deshalb können sich Technik und erreichbare Leistung selbst zwischen benachbarten Gebäuden unterscheiden."
    },
    {
      question: "Welche Internetgeschwindigkeit brauche ich für Homeoffice und Streaming?",
      answer: "Das hängt von Nutzerzahl, gleichzeitig verwendeten Geräten sowie Anwendungen ab. Videokonferenzen, Cloud-Dienste, mehrere Streams und große Uploads sollten gemeinsam berücksichtigt werden."
    },
    {
      question: "Ist Glasfaser immer die beste Wahl?",
      answer: "Glasfaser bietet hohe Leistungsreserven, ist aber nur dann eine konkrete Option, wenn ein Anschluss verfügbar oder buchbar ist und Tarif sowie Vertragsbedingungen zum Bedarf passen."
    },
    {
      question: "Kann ich meine Festnetznummer beim Anbieterwechsel behalten?",
      answer: "Eine Rufnummernmitnahme ist grundsätzlich möglich und sollte rechtzeitig beim neuen Anbieter beauftragt werden. Die Vertragsdaten bei bisherigem und neuem Anbieter müssen übereinstimmen."
    },
    {
      question: "Bleibt mein Internet während des Anbieterwechsels aktiv?",
      answer: "Bei einem rechtzeitig eingeleiteten Wechsel muss der bisherige Anbieter grundsätzlich bis zum abgeschlossenen Wechsel weiterversorgen. Am Umschalttag kann es zu einer Unterbrechung kommen."
    },
    {
      question: "Welche Angaben werden für den Internetvergleich benötigt?",
      answer: "Benötigt werden die vollständige Anschlussadresse und Angaben zur Nutzung. Hilfreich sind außerdem aktueller Vertrag, Kundennummer, gewünschte Rufnummernmitnahme und vorhandene Hardware."
    },
    {
      question: "Ist die Internetberatung für Eschweiler kostenlos?",
      answer: "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Die Beratung ist telefonisch oder persönlich am Standort in Aachen möglich."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/internetanbieter-eschweiler" 
        title="Internetanbieter Eschweiler vergleichen | Energie Alemi"
        description="Internettarife in Eschweiler vergleichen: Energie Alemi prüft Verfügbarkeit, Leistung, Kosten und Vertragsdetails für Privat- und Geschäftskunden."
        image={internetHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText="Internetanbieter Eschweiler"
          title="Internetanbieter in Eschweiler vergleichen – adressgenau beraten"
          description={<>Welcher Internetanschluss ist an Ihrer Adresse in Eschweiler verfügbar und welche Leistung brauchen Sie wirklich? Energie Alemi verbindet die Verfügbarkeitsprüfung mit einem verständlichen Tarifvergleich. Übrigens prüfen wir auch gerne für Sie den Wechsel zu einem günstigen <Link to="/stromanbieter-eschweiler" className="hover:underline font-semibold text-blue-300">Stromanbieter in Eschweiler</Link>.</>}
          bgImage={internetHeroDesk}
          buttonText="Internetverfügbarkeit in Eschweiler prüfen lassen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internetanbieter_eschweiler', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <MapPin size={24} />, title: "Adressgenaue Verfügbarkeitsprüfung" },
            { icon: <BarChart3 size={24} />, title: "Kosten und Leistung gemeinsam vergleichen" },
            { icon: <Building2 size={24} />, title: "Für Zuhause und Unternehmen" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">In Eschweiler entscheidet die konkrete Anschlussadresse</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Internettarife lassen sich nicht allein nach beworbener Höchstgeschwindigkeit auswählen. Zuerst muss geklärt werden, welche Anschlussarten und Leistungen am Gebäude tatsächlich buchbar sind. Danach werden Download, Upload, Hardware, Bereitstellung und Vertragskosten passend zur Nutzung bewertet.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Die Verfügbarkeit kann zwischen Eschweiler-Mitte, Dürwiß, Weisweiler, Röhe, Bergrath, Nothberg und weiteren Stadtteilen unterschiedlich sein. Selbst benachbarte Häuser können verschiedene technische Voraussetzungen haben. Deshalb beginnt jede Empfehlung mit der vollständigen Anschlussadresse.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Energie Alemi prüft die Optionen für Privathaushalte, Gewerbe und Industrie und erklärt, welche Unterschiede im Alltag oder im Betrieb wirklich relevant sind. Erfahren Sie mehr über unsere Leistungen als <Link to="/internetanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Internetanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Wie viel Geschwindigkeit ist wirklich sinnvoll?"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden <Link to="/gasanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Gasanbieter in Eschweiler</Link> zu finden.
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
                        So läuft die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Internet-Tarifberatung</span> ab
                      </>
                    }
                    subtitle="Ein transparenter und einfacher Ablauf für Ihren neuen Internetanschluss."
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
            title="DSL, Kabel, Glasfaser und Mobilfunk realistisch vergleichen"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "DSL", desc: "DSL nutzt die Telefonleitung; die erreichbare Leistung hängt unter anderem von Leitung und Entfernung ab." },
              { title: "Kabel", desc: "Kabel kann hohe Bandbreiten ermöglichen, setzt aber einen geeigneten Hausanschluss voraus." },
              { title: "Glasfaser", desc: "Glasfaser bietet hohe Leistungsreserven, ist jedoch nur wählbar, wenn sie am Standort verfügbar oder konkret buchbar ist.", link: "/ratgeber/dsl-vs-glasfaser-aachen" },
              { title: "LTE oder 5G", desc: "Kann eine Alternative oder Übergangslösung sein. Hier sollten Netzabdeckung, Empfang im Gebäude, Datenvolumen und mögliche Leistungsschwankungen berücksichtigt werden." },
              { title: "Bandbreite", desc: "Eine Anschlussart ist erst dann passend, wenn sie verfügbar ist und das Nutzungsprofil zuverlässig abdeckt." },
              { title: "Hardware", desc: "Ob ein eigener oder ein vom Anbieter bereitgestellter Router sinnvoller ist, hängt von den jeweiligen Anforderungen ab." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-[#0a1628] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {item.link ? <Link to={item.link} className="hover:underline">{item.title}</Link> : item.title}
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
          <h2 className="text-3xl font-bold mb-6">Internetberatung für Eschweiler – telefonisch oder in Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Energie Alemi berät Kundinnen und Kunden aus Eschweiler telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Halten Sie für die Prüfung die vollständige Anschlussadresse und möglichst Ihren aktuellen Vertrag bereit.
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
              title="Häufige Fragen zu Internettarifen in Eschweiler"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Internetverfügbarkeit in Eschweiler prüfen lassen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Internetverfügbarkeit in Eschweiler prüfen lassen
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
