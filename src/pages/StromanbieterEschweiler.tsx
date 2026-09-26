import { Search, Handshake, BarChart3, CheckSquare, Zap, ArrowRight, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import { trackEvent } from '../lib/analytics';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import elecHeroDesk from '../assets/electricity hero desk.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function StromanbieterEschweiler() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: "Privathaushalte",
      description: "In Privathaushalten bilden Haushaltsgröße, bisheriger Jahresverbrauch und gewünschte Vertragsflexibilität die Vergleichsbasis. Auf Wunsch kann auch die ausgewiesene Stromherkunft als Kriterium berücksichtigt werden."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Gewerbe & Industrie",
      description: "Bei Gewerbe- und Industriekunden können Lastverlauf, planbare Vertragskosten und betriebliche Anforderungen stärker ins Gewicht fallen. Deshalb wird die Ausgangslage vor dem Vergleich strukturiert erfasst, statt einen Standardtarif für jede Situation zu empfehlen."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Ausgangslage erfassen",
      description: "Sie stellen die letzte Jahresabrechnung, den aktuellen Vertrag und möglichst Zählernummer oder Marktlokations-ID bereit."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Angebote bewerten",
      description: "Jahreskosten, Laufzeit, Kündigungsfrist, Preisgarantie, Zahlungsweise und Bonusbedingungen werden gemeinsam geprüft."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Tarif auswählen",
      description: "Sie erhalten die relevanten Vertragsangaben und entscheiden, welches Angebot zu Ihrem Bedarf passt."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel begleiten",
      description: "Auf Wunsch unterstützt Energie Alemi die notwendigen Schritte und bleibt bei Rückfragen erreichbar."
    }
  ];

  const faqs = [
    {
      question: "Ist die Stromtarifberatung für Eschweiler kostenlos?",
      answer: "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Abschluss erhalten Sie die relevanten Tarif- und Vertragsinformationen."
    },
    {
      question: "Welche Stromtarife sind an meiner Adresse in Eschweiler verfügbar?",
      answer: "Das hängt von der Lieferadresse, dem Verbrauch und den aktuell angebotenen Konditionen ab. Für ein konkretes Ergebnis werden deshalb Ihre Vertrags- und Verbrauchsdaten benötigt."
    },
    {
      question: "Welche Unterlagen sollte ich zum Stromvergleich mitbringen?",
      answer: "Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Jahresverbrauch, bisherige Kundennummer sowie Zählernummer oder Marktlokations-ID."
    },
    {
      question: "Bleibt die Stromversorgung während des Wechsels bestehen?",
      answer: "Ein regulärer Anbieterwechsel betrifft den Liefervertrag; Leitungen und Zähler bleiben bestehen. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Belieferung ab."
    },
    {
      question: "Kündigt der neue Stromanbieter meinen bisherigen Vertrag?",
      answer: "Im Regelfall übernimmt der neue Lieferant die Kündigung, wenn er dazu bevollmächtigt wird. Bei Sonderkündigungen, Umzügen oder sehr kurzen Fristen sollte das Vorgehen separat geklärt werden."
    },
    {
      question: "Wann kann der neue Stromtarif starten?",
      answer: "Der mögliche Lieferbeginn richtet sich unter anderem nach Vertragslaufzeit, Kündigungsfrist und vollständig vorliegenden Daten. Ein schneller technischer Wechsel hebt bestehende Vertragsfristen nicht auf."
    },
    {
      question: "Kann ich für Eschweiler auch Ökostromtarife vergleichen?",
      answer: "Ja. Wenn Ihnen die Stromherkunft wichtig ist, können passende Angebote berücksichtigt werden. Maßgeblich sind die Angaben und Bedingungen des jeweiligen Tarifs."
    },
    {
      question: "Berät Energie Alemi auch Unternehmen aus Eschweiler?",
      answer: "Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden und wird an Verbrauch, Vertragsziel und betriebliche Anforderungen angepasst."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/stromanbieter-eschweiler" 
        title="Stromanbieter Eschweiler vergleichen | Energie Alemi"
        description="Stromtarife in Eschweiler vergleichen: Energie Alemi prüft Kosten, Laufzeit und Vertragsdetails und begleitet auf Wunsch den Anbieterwechsel."
        image={elecHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText="Stromanbieter Eschweiler"
          title="Stromanbieter in Eschweiler vergleichen – Tarif persönlich prüfen"
          description={<>Sie möchten Ihren Stromvertrag in Eschweiler neu abschließen oder bestehende Konditionen überprüfen? Energie Alemi vergleicht verfügbare Angebote anhand Ihres Verbrauchs und Ihrer Vertragsziele – für Privathaushalte, Gewerbe und Industrie. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden <Link to="/gasanbieter-eschweiler" className="hover:underline font-semibold text-blue-300">Gasanbieter in Eschweiler</Link>.</>}
          bgImage={elecHeroDesk}
          buttonText="Stromtarife für Eschweiler prüfen lassen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'stromanbieter_eschweiler', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Kostenlose Tarifberatung" },
            { icon: <BarChart3 size={24} />, title: "Vergleich nach Jahreskosten" },
            { icon: <Handshake size={24} />, title: "Begleitung bis zum Lieferbeginn" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Stromkosten in Eschweiler richtig einordnen</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Ein Tarifvergleich sollte nicht bei einem einzelnen Cent-Wert enden. Erst aus Arbeitspreis, Grundpreis und dem erwarteten Jahresverbrauch ergeben sich belastbare Jahreskosten. Boni können das erste Vertragsjahr verändern, ersetzen aber keinen Blick auf die laufenden Konditionen.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Energie Alemi berücksichtigt außerdem Laufzeit, Kündigungsfrist, Zahlungsweise und Umfang der Preisgarantie. So lässt sich erkennen, ob ein Angebot nicht nur im Aktionszeitraum, sondern auch für Ihre persönliche Planung geeignet ist.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Die Beratung richtet sich an Kundinnen und Kunden aus dem gesamten Eschweiler Stadtgebiet – unter anderem aus Dürwiß, Weisweiler, Röhe, Röthgen, Bergrath und Nothberg. Sie erfolgt telefonisch oder persönlich am Standort von Energie Alemi in Aachen. Erfahren Sie mehr über unsere Leistungen als <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Stromanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Privathaushalt, Gewerbe oder Industrie: Der Bedarf entscheidet"
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
                        So läuft der <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Stromvergleich</span> in vier Schritten
                      </>
                    }
                    subtitle="Ein technisch schneller Lieferantenwechsel beendet keinen laufenden Vertrag vorzeitig. Entscheidend bleiben Mindestlaufzeit, Kündigungsfrist und ein möglicher Sonderkündigungsgrund. Der gewünschte Lieferbeginn sollte deshalb mit den Vertragsdaten abgestimmt werden. Für einen Umzug nach oder innerhalb von Eschweiler sollten Lieferadresse, Einzugsdatum und Zählerdaten frühzeitig bereitliegen. So kann geprüft werden, welcher Starttermin realistisch ist."
                    align="left"
                    className="mb-8"
                  />
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Vor dem Wechsel Fristen und Lieferbeginn klären</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Entscheidend bleiben Mindestlaufzeit, Kündigungsfrist und ein möglicher Sonderkündigungsgrund.
                    </p>
                  </div>
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
            title="Diese Angaben machen den Vergleich aussagekräftig"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Jahresverbrauch", desc: "Der Verbrauch aus der letzten Abrechnung ist genauer als eine pauschale Haushaltsschätzung." },
              { title: "Gesamtkosten", desc: "Arbeitspreis und Grundpreis auf ein vollständiges Jahr beziehen." },
              { title: "Vertragsstatus", desc: "Laufzeit, Kündigungsfrist und mögliche Preisänderungen prüfen." },
              { title: "Preisgarantie", desc: "Dauer und erfasste Preisbestandteile genau vergleichen." },
              { title: "Bonus", desc: "Voraussetzungen, Auszahlung und Kosten im Folgejahr getrennt betrachten." },
              { title: "Zahlungsweise", desc: "Regelmäßige Abschläge gegenüber Vorkasse oder hohen Vorauszahlungen abwägen." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-[#0a1628] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1"><Link to="/ratgeber/stromvergleich" className="hover:underline">{item.title}</Link></h4>
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
          <h2 className="text-3xl font-bold mb-6">Persönliche Stromberatung für Eschweiler aus Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Energie Alemi berät Kundinnen und Kunden aus Eschweiler telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Für die erste Prüfung genügen in der Regel die letzte Stromrechnung und die Daten des bestehenden Vertrags.
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
              title="Häufige Fragen zu Stromtarifen in Eschweiler"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Stromtarife für Eschweiler prüfen lassen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Stromtarife für Eschweiler prüfen lassen
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
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Strom" />
        </Suspense>
      )}
    </div>
  );
}
