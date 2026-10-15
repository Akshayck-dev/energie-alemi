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

export default function StromanbieterEschweiler() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Private households' : 'Privathaushalte',
      description: i18n.language === "en" ? "Private households: household size, previous annual consumption and desired contract flexibility form the basis of the comparison; on request, the stated origin of electricity can also be included as a criterion." : "In Privathaushalten bilden Haushaltsgröße, bisheriger Jahresverbrauch und gewünschte Vertragsflexibilität die Vergleichsbasis. Auf Wunsch kann auch die ausgewiesene Stromherkunft als Kriterium berücksichtigt werden."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === "en" ? "Business & Industry" : "Gewerbe & Industrie",
      description: i18n.language === "en" ? "For business and industrial customers, load profile, plannable contract costs and operational requirements can weigh more heavily. The starting situation is therefore recorded in a structured way before the comparison, instead of recommending a standard tariff for every situation." : "Bei Gewerbe- und Industriekunden können Lastverlauf, planbare Vertragskosten und betriebliche Anforderungen stärker ins Gewicht fallen. Deshalb wird die Ausgangslage vor dem Vergleich strukturiert erfasst, statt einen Standardtarif für jede Situation zu empfehlen."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Ausgangslage erfassen",
      description: i18n.language === "en" ? "You provide the last annual statement, the current contract and, if possible, meter number or market location ID." : "Sie stellen die letzte Jahresabrechnung, den aktuellen Vertrag und möglichst Zählernummer oder Marktlokations-ID bereit."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Angebote bewerten",
      description: i18n.language === "en" ? "Annual costs, term, cancellation period, price guarantee, payment method and bonus conditions are checked together." : "Jahreskosten, Laufzeit, Kündigungsfrist, Preisgarantie, Zahlungsweise und Bonusbedingungen werden gemeinsam geprüft."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: i18n.language === "en" ? "Select tariff" : "Tarif auswählen",
      description: i18n.language === "en" ? "You receive the relevant contract details and decide which offer suits your needs." : "Sie erhalten die relevanten Vertragsangaben und entscheiden, welches Angebot zu Ihrem Bedarf passt."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel begleiten",
      description: i18n.language === "en" ? "If you wish, Energie Alemi supports the necessary steps and remains available for questions." : "Auf Wunsch unterstützt Energie Alemi die notwendigen Schritte und bleibt bei Rückfragen erreichbar."
    }
  ];

  const faqs = [
    {
      question: "Ist die Stromtarifberatung für Eschweiler kostenlos?",
      answer: i18n.language === "en" ? "Yes. Energie Alemi offers tariff advice free of charge. Before signing, you receive the relevant tariff and contract information." : "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Abschluss erhalten Sie die relevanten Tarif- und Vertragsinformationen."
    },
    {
      question: i18n.language === "en" ? "Which electricity tariffs are available at my address in Eschweiler?" : "Welche Stromtarife sind an meiner Adresse in Eschweiler verfügbar?",
      answer: i18n.language === "en" ? "That depends on the delivery address, consumption and currently offered conditions. Your contract and consumption data are therefore needed for a concrete result." : "Das hängt von der Lieferadresse, dem Verbrauch und den aktuell angebotenen Konditionen ab. Für ein konkretes Ergebnis werden deshalb Ihre Vertrags- und Verbrauchsdaten benötigt."
    },
    {
      question: "Welche Unterlagen sollte ich zum Stromvergleich mitbringen?",
      answer: i18n.language === "en" ? "Helpful are the last annual statement, the current contract, annual consumption, previous customer number, as well as meter number or market location ID." : "Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Jahresverbrauch, bisherige Kundennummer sowie Zählernummer oder Marktlokations-ID."
    },
    {
      question: i18n.language === "en" ? "Does the electricity supply continue during the switch?" : "Bleibt die Stromversorgung während des Wechsels bestehen?",
      answer: i18n.language === "en" ? "A regular provider switch concerns the supply contract; lines and meter remain. The legally provided basic or replacement supply secures delivery." : "Ein regulärer Anbieterwechsel betrifft den Liefervertrag; Leitungen und Zähler bleiben bestehen. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Belieferung ab."
    },
    {
      question: i18n.language === "en" ? "Does the new electricity provider cancel my previous contract?" : "Kündigt der neue Stromanbieter meinen bisherigen Vertrag?",
      answer: i18n.language === "en" ? "Normally, the new supplier takes over the cancellation when authorised to do so. For special cancellations, moves or very short deadlines, the procedure should be clarified separately." : "Im Regelfall übernimmt der neue Lieferant die Kündigung, wenn er dazu bevollmächtigt wird. Bei Sonderkündigungen, Umzügen oder sehr kurzen Fristen sollte das Vorgehen separat geklärt werden."
    },
    {
      question: i18n.language === "en" ? "When can the new electricity tariff start?" : "Wann kann der neue Stromtarif starten?",
      answer: i18n.language === "en" ? "The possible delivery start depends on contract term, cancellation period and complete data, among other things. A fast technical switch does not lift existing contract deadlines." : "Der mögliche Lieferbeginn richtet sich unter anderem nach Vertragslaufzeit, Kündigungsfrist und vollständig vorliegenden Daten. Ein schneller technischer Wechsel hebt bestehende Vertragsfristen nicht auf."
    },
    {
      question: i18n.language === "en" ? "Can I also compare green electricity tariffs for Eschweiler?" : "Kann ich für Eschweiler auch Ökostromtarife vergleichen?",
      answer: i18n.language === "en" ? "Yes. If the origin of electricity is important to you, suitable offers can be considered. The details and conditions of the respective tariff are decisive." : "Ja. Wenn Ihnen die Stromherkunft wichtig ist, können passende Angebote berücksichtigt werden. Maßgeblich sind die Angaben und Bedingungen des jeweiligen Tarifs."
    },
    {
      question: i18n.language === "en" ? "Does Energie Alemi also advise businesses from Eschweiler?" : "Berät Energie Alemi auch Unternehmen aus Eschweiler?",
      answer: i18n.language === "en" ? "Yes. The advice is aimed at private, commercial and industrial customers and is adapted to consumption, contract goals and operational requirements." : "Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden und wird an Verbrauch, Vertragsziel und betriebliche Anforderungen angepasst."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/stromanbieter-eschweiler" 
        title={i18n.language === 'en' ? 'Compare Electricity Providers Eschweiler | Energie Alemi' : 'Stromanbieter Eschweiler vergleichen | Energie Alemi'}
        description={i18n.language === "en" ? "Compare electricity tariffs in Eschweiler with personal advice. Energie Alemi checks annual costs, terms and price guarantees — and helps you switch. Free advice." : "Stromanbieter in Eschweiler vergleichen – Anbieterwechsel kostenlos & unverbindlich. Persönliche Beratung vor Ort, 5,0★ auf Google."}
        image={elecHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={i18n.language === 'en' ? 'Electricity Providers Eschweiler' : 'Stromanbieter Eschweiler'}
          title={i18n.language === "en" ? "Compare electricity providers in Eschweiler – check your tariff personally" : "Stromanbieter in Eschweiler vergleichen – Tarif persönlich prüfen"}
          description={<>Sie möchten Ihren Stromvertrag in Eschweiler neu abschließen oder bestehende Konditionen überprüfen? Energie Alemi vergleicht verfügbare Angebote anhand Ihres Verbrauchs und Ihrer Vertragsziele – für Privathaushalte, Gewerbe und Industrie. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden <Link to="/gasanbieter-eschweiler" className="hover:underline font-semibold text-blue-300">Gasanbieter in Eschweiler</Link>.</>}
          bgImage={elecHeroDesk}
          buttonText="Stromtarife für Eschweiler prüfen lassen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'stromanbieter_eschweiler', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: i18n.language === "en" ? "Free tariff advice" : "Kostenlose Tarifberatung" },
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
            {i18n.language === "en" ? "A tariff comparison should not end at a single cent value. Only from the energy price, basic price and expected annual consumption do reliable annual costs result. Bonuses can change the first contract year, but they do not replace a look at the ongoing conditions." : "Ein Tarifvergleich sollte nicht bei einem einzelnen Cent-Wert enden. Erst aus Arbeitspreis, Grundpreis und dem erwarteten Jahresverbrauch ergeben sich belastbare Jahreskosten. Boni können das erste Vertragsjahr verändern, ersetzen aber keinen Blick auf die laufenden Konditionen."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "Energie Alemi also considers term, cancellation period, payment method and the scope of the price guarantee — so you can see whether an offer is suitable not only during the promotional period, but also for your personal planning." : "Energie Alemi berücksichtigt außerdem Laufzeit, Kündigungsfrist, Zahlungsweise und Umfang der Preisgarantie. So lässt sich erkennen, ob ein Angebot nicht nur im Aktionszeitraum, sondern auch für Ihre persönliche Planung geeignet ist."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Die Beratung richtet sich an Kundinnen und Kunden aus dem gesamten Eschweiler Stadtgebiet – unter anderem aus Dürwiß, Weisweiler, Röhe, Röthgen, Bergrath und Nothberg. Sie erfolgt telefonisch oder persönlich am Standort von Energie Alemi in Aachen. {i18n.language === "en" ? "Learn more about our services as" : "Erfahren Sie mehr über unsere Leistungen als"} <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Stromanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title={i18n.language === "en" ? "Private household, business or industry: the need decides" : "Privathaushalt, Gewerbe oder Industrie: Der Bedarf entscheidet"}
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            {i18n.language === "en" ? "By the way: In addition to electricity and gas advice, we also help you find the right" : "Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden"} <Link to="/internetanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">{i18n.language === 'en' ? 'internet provider in Eschweiler' : 'Internetanbieter in Eschweiler'}</Link> {i18n.language === "en" ? "." : "zu finden."}
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
                        {i18n.language === "en" ? "This is how the " : "So läuft der "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "electricity comparison" : "Stromvergleich"}</span>{i18n.language === "en" ? " works in four steps" : " in vier Schritten"}
                      </>
                    }
                    subtitle={i18n.language === "en" ? "A technically fast supplier switch does not end a running contract early. Minimum term, cancellation period and a possible special cancellation reason remain decisive. The desired delivery start should therefore be coordinated with the contract data. For a move to or within Eschweiler, delivery address, move-in date and meter data should be ready early so it can be checked which start date is realistic." : "Ein technisch schneller Lieferantenwechsel beendet keinen laufenden Vertrag vorzeitig. Entscheidend bleiben Mindestlaufzeit, Kündigungsfrist und ein möglicher Sonderkündigungsgrund. Der gewünschte Lieferbeginn sollte deshalb mit den Vertragsdaten abgestimmt werden. Für einen Umzug nach oder innerhalb von Eschweiler sollten Lieferadresse, Einzugsdatum und Zählerdaten frühzeitig bereitliegen. So kann geprüft werden, welcher Starttermin realistisch ist."}
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
            title={i18n.language === "en" ? "This information makes the comparison meaningful" : "Diese Angaben machen den Vergleich aussagekräftig"}
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Jahresverbrauch", desc: i18n.language === "en" ? "The consumption from the last statement is more accurate than a flat-rate household estimate." : "Der Verbrauch aus der letzten Abrechnung ist genauer als eine pauschale Haushaltsschätzung." },
              { title: i18n.language === 'en' ? 'Total costs' : 'Gesamtkosten', desc: i18n.language === "en" ? "Relate energy price and basic price to a full year." : "Arbeitspreis und Grundpreis auf ein vollständiges Jahr beziehen." },
              { title: "Vertragsstatus", desc: i18n.language === "en" ? "Check term, cancellation period and possible price changes." : "Laufzeit, Kündigungsfrist und mögliche Preisänderungen prüfen." },
              { title: i18n.language === 'en' ? 'Price guarantee' : 'Preisgarantie', desc: i18n.language === "en" ? "Compare duration and covered price components carefully." : "Dauer und erfasste Preisbestandteile genau vergleichen." },
              { title: "Bonus", desc: i18n.language === "en" ? "Consider requirements, payout and costs in the following year separately." : "Voraussetzungen, Auszahlung und Kosten im Folgejahr getrennt betrachten." },
              { title: i18n.language === 'en' ? 'Payment method' : 'Zahlungsweise', desc: i18n.language === "en" ? "Weigh regular installments against advance payment or high advance payments." : "Regelmäßige Abschläge gegenüber Vorkasse oder hohen Vorauszahlungen abwägen." }
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
            {i18n.language === "en" ? "Energie Alemi advises customers from Eschweiler by phone and in person at Alexianergraben 9 in 52064 Aachen. For the first check, the last electricity bill and the data of the existing contract are usually sufficient." : "Energie Alemi berät Kundinnen und Kunden aus Eschweiler telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Für die erste Prüfung genügen in der Regel die letzte Stromrechnung und die Daten des bestehenden Vertrags."}
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
              title={i18n.language === "en" ? "Frequently asked questions about electricity tariffs in Eschweiler" : "Häufige Fragen zu Stromtarifen in Eschweiler"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Stromtarife für Eschweiler prüfen lassen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === "en" ? "Free advice at 0176 659 493 90 or via the contact page." : "Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Stromtarife für Eschweiler prüfen lassen
                </Button>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0047AB] dark:border-[#f0a83f] text-[#0047AB] dark:text-[#f0a83f] font-semibold rounded-full hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#0a1628] transition-colors">
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
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Strom" />
        </Suspense>
      )}
    </div>
  );
}
