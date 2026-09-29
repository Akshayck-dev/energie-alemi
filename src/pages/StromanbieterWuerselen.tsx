import { Search, Handshake, BarChart3, CheckSquare, Zap, ArrowRight, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
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
import elecHeroDesk from '../assets/electricity hero desk.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function StromanbieterWürselen() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Private households' : 'Privathaushalte',
      description: "Für Privathaushalte zählen neben dem Verbrauch häufig flexible Vertragsbedingungen, nachvollziehbare Abschläge und auf Wunsch die ausgewiesene Stromherkunft. Die Haushaltsgröße hilft bei einer Schätzung, ersetzt aber keine vorhandene Jahresabrechnung."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Gewerbe & Industrie",
      description: "Bei Gewerbe und Industrie können Lastprofil, planbare Kosten, Vertragslaufzeit und betriebliche Abläufe stärker ins Gewicht fallen. Energie Alemi erfasst deshalb zuerst die konkrete Ausgangslage, bevor Angebote eingeordnet werden."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Daten zusammenstellen",
      description: "Sie halten Jahresabrechnung, aktuellen Vertrag, Lieferadresse und möglichst Zählernummer oder Marktlokations-ID bereit."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Gesamtkosten prüfen",
      description: "Arbeitspreis, Grundpreis, Boni und Zahlungsweise werden für den erwarteten Jahresverbrauch betrachtet."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Vertragsdetails vergleichen",
      description: "Laufzeit, Kündigungsfrist, Preisgarantie und möglicher Lieferbeginn werden verständlich gegenübergestellt."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel abstimmen",
      description: "Sie wählen selbst; Energie Alemi unterstützt auf Wunsch bei Beauftragung und weiteren Schritten."
    }
  ];

  const faqs = [
    {
      question: "Ist die Stromtarifberatung für Würselen kostenlos?",
      answer: "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Abschluss erhalten Sie die wesentlichen Preis- und Vertragsangaben des ausgewählten Angebots."
    },
    {
      question: "Welche Stromanbieter sind an meiner Adresse in Würselen verfügbar?",
      answer: "Die konkrete Auswahl hängt von Lieferadresse, Verbrauch und dem aktuellen Marktangebot ab. Deshalb werden für den Vergleich Ihre individuellen Liefer- und Verbrauchsdaten benötigt."
    },
    {
      question: "Welche Angaben brauche ich für einen Stromvergleich?",
      answer: "Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Jahresverbrauch, Lieferadresse, bisherige Kundennummer sowie Zählernummer oder Marktlokations-ID."
    },
    {
      question: "Kann ich bei einem Umzug nach Würselen rückwirkend Strom anmelden?",
      answer: "Eine rückwirkende Zuordnung sollte nicht eingeplant werden. Melden Sie Einzug und gewünschte Belieferung möglichst vorab und stimmen Sie die geltenden Fristen mit dem Anbieter ab."
    },
    {
      question: "Wird die Stromversorgung durch den Anbieterwechsel unterbrochen?",
      answer: "Ein regulärer Wechsel betrifft den Liefervertrag; Netzanschluss und Zähler bleiben bestehen. Die gesetzlich geregelte Grund- oder Ersatzversorgung sichert die Belieferung ab."
    },
    {
      question: "Wer kündigt meinen bisherigen Stromvertrag?",
      answer: "Im Normalfall übernimmt der neue Lieferant die Kündigung, wenn Sie ihn dazu bevollmächtigen. Bei Sonderkündigung, Umzug oder knappen Fristen sollte das Vorgehen vorher geklärt werden."
    },
    {
      question: "Kann ich Ökostromtarife für Würselen vergleichen?",
      answer: "Ja. Wenn die Stromherkunft für Sie wichtig ist, können entsprechende Angebote berücksichtigt werden. Entscheidend bleiben die konkreten Tarifangaben und Vertragsbedingungen."
    },
    {
      question: "Berät Energie Alemi auch Betriebe in Würselen?",
      answer: "Ja. Die Beratung gilt für Privat-, Gewerbe- und Industriekunden und berücksichtigt Verbrauch, Vertragsziel und betriebliche Anforderungen."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/stromanbieter-wuerselen" 
        title={i18n.language === 'en' ? 'Compare Electricity Providers Würselen | Energie Alemi' : 'Stromanbieter Würselen vergleichen | Energie Alemi'}
        description="Stromtarife in Würselen vergleichen: Kosten, Vertragsdetails und Kündigungsfrist prüfen. Energie Alemi berät Haushalte und Unternehmen persönlich."
        image={elecHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={i18n.language === 'en' ? 'Electricity Providers Würselen' : 'Stromanbieter Würselen'}
          title="Stromanbieter in Würselen vergleichen – Konditionen klar bewerten"
          description={<>Sie möchten in Würselen einen neuen Stromvertrag abschließen oder Ihren bestehenden Tarif prüfen? Energie Alemi vergleicht Angebote nach Verbrauch, Jahreskosten und Vertragsbedingungen und begleitet Sie auf Wunsch beim Wechsel. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden <Link to="/gasanbieter-wuerselen" className="hover:underline font-semibold text-blue-300">Gasanbieter in Würselen</Link>.</>}
          bgImage={elecHeroDesk}
          buttonText="Stromtarife für Würselen prüfen lassen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'stromanbieter_wuerselen', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Kostenlose Tarifberatung" },
            { icon: <BarChart3 size={24} />, title: "Jahreskosten statt Lockpreis vergleichen" },
            { icon: <Building2 size={24} />, title: "Für Privat, Gewerbe und Industrie" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Stromtarife für Würselen mit den richtigen Daten vergleichen</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Ein aussagekräftiger Vergleich beginnt mit dem Jahresverbrauch aus Ihrer letzten Abrechnung. Erst wenn Arbeitspreis und Grundpreis auf diesen Verbrauch bezogen werden, lassen sich die erwarteten Jahreskosten verschiedener Tarife sinnvoll gegenüberstellen.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Zusätzlich gehören Mindestlaufzeit, Kündigungsfrist, Zahlungsweise, Preisgarantie und Bonusbedingungen in die Entscheidung. Ein günstiger Einstiegswert kann sonst darüber hinwegtäuschen, dass der Vertrag später weniger flexibel oder im Folgejahr teurer ist.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Das Angebot richtet sich an Kundinnen und Kunden aus Würselen-Mitte, Kohlscheid und Merkstein. Die Beratung erfolgt telefonisch oder persönlich bei Energie Alemi am Alexianergraben 9 in Aachen. Erfahren Sie mehr über unsere Leistungen als <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Stromanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Haushalte und Unternehmen haben unterschiedliche Prioritäten"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden <Link to="/internetanbieter-wuerselen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">{i18n.language === 'en' ? 'internet provider in Würselen' : 'Internetanbieter in Würselen'}</Link> zu finden.
          </p>
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-4 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-6">
            Wir beraten Sie nicht nur in Würselen, sondern in der gesamten Städteregion. Vergleichen Sie auch Tarife für <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Aachen</Link>, <Link to="/stromanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Stolberg</Link>, <Link to="/stromanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Eschweiler</Link> und <Link to="/stromanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Herzogenrath</Link>.
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
                        So läuft die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Stromberatung</span> in vier Schritten
                      </>
                    }
                    subtitle="Wer nach Würselen zieht oder innerhalb der Stadt umzieht, sollte die neue Lieferstelle frühzeitig melden. Benötigt werden in der Regel die vollständige Adresse, Einzugsdatum, Zählernummer und – sofern vorhanden – die Marktlokations-ID."
                    align="left"
                    className="mb-8"
                  />
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Beim Umzug rechtzeitig Lieferadresse und Termin festlegen</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Der technische Lieferantenwechsel und die vertragliche Kündigung sind zwei verschiedene Dinge. Auch bei einem schnelleren Wechselprozess bleiben vereinbarte Laufzeiten und Kündigungsfristen maßgeblich. Deshalb wird der gewünschte Lieferbeginn mit dem bisherigen Vertrag abgestimmt.
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
            title="Diese Vertragsmerkmale verdienen besondere Aufmerksamkeit"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Jahresverbrauch", desc: "Möglichst den Abrechnungswert nutzen, nicht nur eine allgemeine Personenschätzung." },
              { title: i18n.language === 'en' ? 'Total costs' : 'Gesamtkosten', desc: "Grundpreis und verbrauchsabhängigen Arbeitspreis für zwölf Monate zusammen betrachten." },
              { title: i18n.language === 'en' ? 'Price guarantee' : 'Preisgarantie', desc: "Laufzeit, Umfang und mögliche Ausnahmen im Angebot nachlesen." },
              { title: i18n.language === 'en' ? 'Bonus conditions' : 'Bonusbedingungen', desc: "Voraussetzungen und Auszahlung getrennt von den laufenden Tarifkosten bewerten." },
              { title: i18n.language === 'en' ? 'Cancellation period' : 'Kündigungsfrist', desc: "Den frühestmöglichen Vertragsbeginn realistisch planen." },
              { title: i18n.language === 'en' ? 'Payment method' : 'Zahlungsweise', desc: "Monatliche Abschläge sind meist leichter einzuordnen als Vorkasse oder hohe Vorauszahlungen." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-[#0a1628] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    <Link to={item.title === "Jahresverbrauch" || item.title === "Gesamtkosten" ? "/ratgeber/stromvergleich" : item.title === "Kündigungsfrist" ? "/ratgeber/grundversorgung-aachen-strom-gas" : "/ratgeber/stromanbieter-wechseln"} className="hover:underline">{item.title}</Link>
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
          <h2 className="text-3xl font-bold mb-6">Stromberatung für Würselen – erreichbar in Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Energie Alemi unterstützt Privat-, Gewerbe- und Industriekunden aus Würselen telefonisch und persönlich in Aachen. Für eine erste Prüfung reichen meist die letzte Stromrechnung und die aktuellen Vertragsdaten.
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
              title="Häufige Fragen zu Stromtarifen in Würselen"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Stromtarife für Würselen prüfen lassen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Stromtarife für Würselen prüfen lassen
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
