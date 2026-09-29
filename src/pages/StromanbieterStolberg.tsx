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

export default function StromanbieterStolberg() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Private households' : 'Privathaushalte',
      description: i18n.language === "en" ? "Private households benefit from a comparison that takes into account household size, annual consumption and personal priorities. Those who value renewable energies can include the stated origin of electricity and the conditions of corresponding tariffs in the selection." : "Privathaushalte profitieren von einem Vergleich, der Haushaltsgröße, Jahresverbrauch und persönliche Prioritäten berücksichtigt. Wer Wert auf erneuerbare Energien legt, kann die ausgewiesene Stromherkunft und die Bedingungen entsprechender Tarife in die Auswahl einbeziehen."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === "en" ? "Business & Industry" : "Gewerbe & Industrie",
      description: i18n.language === "en" ? "For commercial and industrial customers, the consumption profile, planning security and suitable contract conditions are paramount. Energie Alemi records the operational situation and discusses the available options in a clear and structured manner." : "Bei Gewerbe- und Industriekunden stehen Verbrauchsprofil, Planungssicherheit und passende Vertragskonditionen im Vordergrund. Energie Alemi erfasst die betriebliche Situation und bespricht die verfügbaren Optionen verständlich und strukturiert."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: i18n.language === "en" ? "Check contract and consumption" : "Vertrag und Verbrauch prüfen",
      description: i18n.language === "en" ? "Keep your last annual statement, current contract and, if possible, meter number or market location ID ready." : "Halten Sie Ihre letzte Jahresabrechnung, den aktuellen Vertrag und möglichst Zählernummer oder Marktlokations-ID bereit."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: i18n.language === 'en' ? 'Compare offers comprehensively' : 'Angebote nachvollziehbar vergleichen',
      description: i18n.language === "en" ? "We consider annual costs, term, cancellation period, price guarantee, payment method and bonus rules together." : "Wir betrachten Jahreskosten, Laufzeit, Kündigungsfrist, Preisgarantie, Zahlungsweise und Bonusregeln gemeinsam."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: i18n.language === 'en' ? 'Choose a suitable tariff' : 'Passenden Tarif auswählen',
      description: i18n.language === "en" ? "You decide which offer suits your requirements and receive the relevant contract information before signing." : "Sie entscheiden, welches Angebot zu Ihren Anforderungen passt und erhalten vor dem Abschluss die relevanten Vertragsinformationen."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: i18n.language === 'en' ? 'Get support with switching' : 'Wechsel begleiten lassen',
      description: i18n.language === "en" ? "If you wish, we can support you with the necessary steps and remain your contact person even after the switch." : "Auf Wunsch unterstützen wir die notwendigen Schritte und bleiben auch nach dem Wechsel Ihr Ansprechpartner."
    }
  ];

  const faqs = [
    {
      question: i18n.language === "en" ? "Is the tariff advice for customers from Stolberg free of charge?" : "Ist die Tarifberatung für Kundinnen und Kunden aus Stolberg kostenlos?",
      answer: i18n.language === "en" ? "Yes. Energie Alemi offers tariff advice free of charge. You will receive the relevant tariff and contract information before signing a contract." : i18n.language === "en" ? "Yes. Energie Alemi offers tariff advice free of charge. You will receive the relevant tariff and contract information before signing a contract." : i18n.language === "en" ? "Yes. Energie Alemi offers tariff advice free of charge. You will receive the relevant tariff and contract information before signing a contract." : i18n.language === "en" ? "Yes. Energie Alemi offers tariff advice free of charge. You will receive the relevant tariff and contract information before signing a contract." : i18n.language === "en" ? "Yes. Energie Alemi offers tariff advice free of charge. You will receive the relevant tariff and contract information before signing a contract." : "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Vertragsabschluss erhalten Sie die relevanten Tarif- und Vertragsinformationen."
    },
    {
      question: i18n.language === "en" ? "Which electricity providers are available at my address in Stolberg?" : "Welche Stromanbieter sind an meiner Adresse in Stolberg verfügbar?",
      answer: i18n.language === "en" ? "The available offers depend on the delivery address and current tariff conditions. Your address and consumption data are therefore required for a concrete comparison." : i18n.language === "en" ? "The available offers depend on the delivery address and current tariff conditions. Your address and consumption data are therefore required for a concrete comparison." : i18n.language === "en" ? "The available offers depend on the delivery address and current tariff conditions. Your address and consumption data are therefore required for a concrete comparison." : i18n.language === "en" ? "The available offers depend on the delivery address and current tariff conditions. Your address and consumption data are therefore required for a concrete comparison." : i18n.language === "en" ? "The available offers depend on the delivery address and current tariff conditions. Your address and consumption data are therefore required for a concrete comparison." : "Die verfügbaren Angebote hängen von der Lieferadresse und den aktuellen Tarifbedingungen ab. Für einen konkreten Vergleich werden deshalb Ihre Adresse und Verbrauchsdaten benötigt."
    },
    {
      question: i18n.language === 'en' ? 'Will my electricity be interrupted when I change providers?' : 'Wird mein Strom beim Anbieterwechsel unterbrochen?',
      answer: i18n.language === "en" ? "A regular change of supplier is a contractual process; network and meter remain. The statutory basic or replacement supply secures the electricity supply." : i18n.language === "en" ? "A regular change of supplier is a contractual process; network and meter remain. The statutory basic or replacement supply secures the electricity supply." : i18n.language === "en" ? "A regular change of supplier is a contractual process; network and meter remain. The statutory basic or replacement supply secures the electricity supply." : i18n.language === "en" ? "A regular change of supplier is a contractual process; network and meter remain. The statutory basic or replacement supply secures the electricity supply." : i18n.language === "en" ? "A regular change of supplier is a contractual process; network and meter remain. The statutory basic or replacement supply secures the electricity supply." : "Ein regulärer Lieferantenwechsel ist ein vertraglicher Vorgang; Netz und Zähler bleiben bestehen. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Stromlieferung ab."
    },
    {
      question: i18n.language === "en" ? "What documents do I need for the electricity comparison?" : "Welche Unterlagen brauche ich für den Stromvergleich?",
      answer: i18n.language === 'en' ? 'The last annual statement, the current contract, your annual consumption, the meter number or market location ID, the previous provider and your customer number are helpful.' : 'Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Ihr Jahresverbrauch, die Zählernummer oder Marktlokations-ID, der bisherige Anbieter und Ihre Kundennummer.'
    },
    {
      question: i18n.language === "en" ? "Do I have to cancel my current electricity contract myself?" : "Muss ich meinen bisherigen Stromvertrag selbst kündigen?",
      answer: i18n.language === "en" ? "Normally, the new supplier takes over the cancellation if you authorize them to do so. A different procedure may be necessary for special cancellations, moving house or very short notice periods." : i18n.language === "en" ? "Normally, the new supplier takes over the cancellation if you authorize them to do so. A different procedure may be necessary for special cancellations, moving house or very short notice periods." : i18n.language === "en" ? "Normally, the new supplier takes over the cancellation if you authorize them to do so. A different procedure may be necessary for special cancellations, moving house or very short notice periods." : i18n.language === "en" ? "Normally, the new supplier takes over the cancellation if you authorize them to do so. A different procedure may be necessary for special cancellations, moving house or very short notice periods." : i18n.language === "en" ? "Normally, the new supplier takes over the cancellation if you authorize them to do so. A different procedure may be necessary for special cancellations, moving house or very short notice periods." : "Im Normalfall übernimmt der neue Lieferant die Kündigung, wenn Sie ihn bevollmächtigen. Bei Sonderkündigungen, einem Umzug oder sehr kurzen Fristen kann ein anderes Vorgehen nötig sein."
    },
    {
      question: i18n.language === "en" ? "How long does it take to switch electricity providers?" : "Wie lange dauert der Stromanbieterwechsel?",
      answer: i18n.language === "en" ? "The possible start of delivery depends mainly on the remaining term, cancellation period and complete data. The technical switching process does not replace a contractual cancellation period." : i18n.language === "en" ? "The possible start of delivery depends mainly on the remaining term, cancellation period and complete data. The technical switching process does not replace a contractual cancellation period." : i18n.language === "en" ? "The possible start of delivery depends mainly on the remaining term, cancellation period and complete data. The technical switching process does not replace a contractual cancellation period." : i18n.language === "en" ? "The possible start of delivery depends mainly on the remaining term, cancellation period and complete data. The technical switching process does not replace a contractual cancellation period." : i18n.language === "en" ? "The possible start of delivery depends mainly on the remaining term, cancellation period and complete data. The technical switching process does not replace a contractual cancellation period." : "Der mögliche Lieferbeginn hängt vor allem von der Restlaufzeit, der Kündigungsfrist und vollständig vorliegenden Daten ab. Der technische Wechselprozess ersetzt keine vertragliche Kündigungsfrist."
    },
    {
      question: i18n.language === "en" ? "Does Energie Alemi also advise commercial and industrial customers in Stolberg?" : "Berät Energie Alemi auch Gewerbe- und Industriekunden in Stolberg?",
      answer: i18n.language === "en" ? "Yes. The advice is aimed at private, commercial and industrial customers. The comparison is adapted to consumption, contract goals and operational requirements." : i18n.language === "en" ? "Yes. The advice is aimed at private, commercial and industrial customers. The comparison is adapted to consumption, contract goals and operational requirements." : i18n.language === "en" ? "Yes. The advice is aimed at private, commercial and industrial customers. The comparison is adapted to consumption, contract goals and operational requirements." : i18n.language === "en" ? "Yes. The advice is aimed at private, commercial and industrial customers. The comparison is adapted to consumption, contract goals and operational requirements." : i18n.language === "en" ? "Yes. The advice is aimed at private, commercial and industrial customers. The comparison is adapted to consumption, contract goals and operational requirements." : "Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden. Der Vergleich wird an Verbrauch, Vertragsziel und betriebliche Anforderungen angepasst."
    },
    {
      question: i18n.language === "en" ? "Can I consider green electricity in the comparison?" : i18n.language === "en" ? "Can I consider green electricity in the comparison?" : i18n.language === "en" ? "Can I consider green electricity in the comparison?" : i18n.language === "en" ? "Can I consider green electricity in the comparison?" : i18n.language === "en" ? "Can I consider green electricity in the comparison?" : "Kann ich beim Vergleich Ökostrom berücksichtigen?",
      answer: i18n.language === "en" ? "Yes. If the origin of electricity is important to you, corresponding tariffs can be included in the selection. The specific details and conditions of the respective offer are decisive." : i18n.language === "en" ? "Yes. If the origin of electricity is important to you, corresponding tariffs can be included in the selection. The specific details and conditions of the respective offer are decisive." : i18n.language === "en" ? "Yes. If the origin of electricity is important to you, corresponding tariffs can be included in the selection. The specific details and conditions of the respective offer are decisive." : i18n.language === "en" ? "Yes. If the origin of electricity is important to you, corresponding tariffs can be included in the selection. The specific details and conditions of the respective offer are decisive." : i18n.language === "en" ? "Yes. If the origin of electricity is important to you, corresponding tariffs can be included in the selection. The specific details and conditions of the respective offer are decisive." : "Ja. Wenn Ihnen die Stromherkunft wichtig ist, können entsprechende Tarife in die Auswahl einbezogen werden. Entscheidend sind die konkreten Angaben und Bedingungen des jeweiligen Angebots."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/stromanbieter-stolberg" 
        title={i18n.language === 'en' ? 'Compare Electricity Providers Stolberg | Energie Alemi' : 'Stromanbieter Stolberg vergleichen | Energie Alemi'}
        description={i18n.language === "en" ? "Compare electricity tariffs in Stolberg personally: Energie Alemi checks contract, consumption and conditions and accompanies the change of provider if desired." : "Stromtarife in Stolberg persönlich vergleichen: Energie Alemi prüft Vertrag, Verbrauch und Konditionen und begleitet auf Wunsch den Anbieterwechsel."}
        image={elecHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={i18n.language === 'en' ? 'Electricity Providers Stolberg' : 'Stromanbieter Stolberg'}
          title={i18n.language === 'en' ? 'Compare electricity providers in Stolberg – switch with personal advice' : 'Stromanbieter in Stolberg vergleichen – persönlich beraten wechseln'}
          description={<>{i18n.language === "en" ? "Do you live or work in Stolberg and want to have your electricity contract checked in a comprehensible way? Energie Alemi compares suitable tariffs from various providers and, if you wish, supports you with the switch – for private households, businesses and industry. By the way, we also help you find a suitable" : "Sie wohnen oder arbeiten in Stolberg und möchten Ihren Stromvertrag verständlich prüfen lassen? Energie Alemi vergleicht passende Tarife verschiedener Anbieter und begleitet Sie auf Wunsch beim Wechsel – für Privathaushalte, Gewerbe und Industrie. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden"} <Link to="/gasanbieter-stolberg" className="hover:underline font-semibold text-blue-300">Gasanbieter in Stolberg</Link>.</>}
          bgImage={elecHeroDesk}
          buttonText={i18n.language === "en" ? "Have electricity tariffs for Stolberg checked now" : "Jetzt Stromtarife für Stolberg prüfen lassen"}
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'stromanbieter_stolberg', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: i18n.language === "en" ? "Free tariff advice" : "Kostenlose Tarifberatung" },
            { icon: <MapPin size={24} />, title: i18n.language === "en" ? "Personal contact in Aachen" : "Persönlicher Ansprechpartner in Aachen" },
            { icon: <Handshake size={24} />, title: i18n.language === "en" ? "Support when switching providers" : "Begleitung beim Anbieterwechsel" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === "en" ? "A good electricity tariff matches consumption and contract goals" : "Ein guter Stromtarif passt zu Verbrauch und Vertragsziel"}</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "A low energy price alone does not make a good electricity contract. For a reliable comparison, the prospective annual costs count: energy price, basic price and possible bonuses must be considered together. Term, cancellation period, payment method and the exact scope of a price guarantee are equally important." : "Ein niedriger Arbeitspreis allein macht noch keinen guten Stromvertrag. Für einen belastbaren Vergleich zählen die voraussichtlichen Jahreskosten: Arbeitspreis, Grundpreis und mögliche Boni müssen gemeinsam betrachtet werden. Ebenso wichtig sind Laufzeit, Kündigungsfrist, Zahlungsweise und der genaue Umfang einer Preisgarantie."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "Energie Alemi checks your current bill and categorizes the offers so that you don't just see a short-term promotional price. The goal is a comprehensible decision that suits your consumption and your desired flexibility." : "Energie Alemi prüft Ihre aktuelle Rechnung und ordnet die Angebote so ein, dass Sie nicht nur einen kurzfristigen Aktionspreis sehen. Ziel ist eine nachvollziehbare Entscheidung, die zu Ihrem Verbrauch und Ihrer gewünschten Flexibilität passt."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            {i18n.language === "en" ? "The advice is aimed at customers throughout the Stolberg city area" : "Die Beratung richtet sich an Kundinnen und Kunden im gesamten Stolberger Stadtgebiet"} – etwa in Atsch, Büsbach, Breinig, Mausbach, Vicht oder Zweifall. Die persönliche Beratung findet telefonisch oder am Standort von Energie Alemi in Aachen statt. {i18n.language === "en" ? "Learn more about our services as" : "Erfahren Sie mehr über unsere Leistungen als"} <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Stromanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title={i18n.language === "en" ? "Electricity tariffs for private households, businesses and industry" : "Stromtarife für Privathaushalte, Gewerbe und Industrie"}
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            {i18n.language === "en" ? "By the way: In addition to electricity and gas advice, we also help you find the right" : "Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden"} <Link to="/internetanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">{i18n.language === 'en' ? 'internet provider in Stolberg' : 'Internetanbieter in Stolberg'}</Link> {i18n.language === "en" ? "." : "zu finden."}
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
                        {i18n.language === 'en' ? 'This is how the ' : 'So funktioniert der '} <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === 'en' ? 'electricity provider switch' : 'Stromanbieterwechsel'}</span> in vier Schritten
                      </>
                    }
                    subtitle={i18n.language === 'en' ? 'A transparent and simple process for your new electricity tariff.' : 'Ein transparenter und einfacher Ablauf für Ihren neuen Stromtarif.'}
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
            title={i18n.language === 'en' ? 'What you should pay attention to when comparing electricity' : 'Darauf sollten Sie beim Stromvergleich achten'}
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: i18n.language === 'en' ? 'Total costs' : 'Gesamtkosten', desc: i18n.language === "en" ? "Relate the basic price and energy price together to the expected annual consumption." : "Grundpreis und Arbeitspreis gemeinsam auf den erwarteten Jahresverbrauch beziehen." },
              { title: i18n.language === 'en' ? 'Contract term' : 'Vertragslaufzeit', desc: i18n.language === "en" ? "Check how long you are bound and when another switch would be possible." : "Prüfen, wie lange Sie gebunden sind und wann ein weiterer Wechsel möglich wäre." },
              { title: i18n.language === 'en' ? 'Cancellation period' : 'Kündigungsfrist', desc: i18n.language === 'en' ? 'Take into account the next possible cancellation date of the existing contract.' : 'Den nächstmöglichen Kündigungstermin des bestehenden Vertrags berücksichtigen.' },
              { title: i18n.language === 'en' ? 'Price guarantee' : 'Preisgarantie', desc: i18n.language === 'en' ? 'Look closely at which price components are covered and how long the guarantee is valid.' : 'Genau ansehen, welche Preisbestandteile erfasst sind und wie lange die Garantie gilt.' },
              { title: i18n.language === 'en' ? 'Bonus conditions' : 'Bonusbedingungen', desc: i18n.language === "en" ? "Evaluate one-off bonuses separately from the running costs in the following year." : "Einmalige Boni getrennt von den laufenden Kosten im Folgejahr bewerten." },
              { title: i18n.language === 'en' ? 'Payment method' : 'Zahlungsweise', desc: i18n.language === 'en' ? 'Monthly installments are generally clearer than advance payment or high advance payments.' : 'Monatliche Abschläge sind in der Regel übersichtlicher als Vorkasse oder hohe Vorauszahlungen.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-[#0a1628] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1"><Link to="/electricity" className="hover:underline">{item.title}</Link></h4>
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
          <h2 className="text-3xl font-bold mb-6">{i18n.language === "en" ? "Personal tariff advice for Stolberg – directly from Aachen" : "Persönliche Tarifberatung für Stolberg – direkt aus Aachen"}</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Sie möchten Ihren Stromvertrag nicht allein anhand langer Vergleichslisten beurteilen? Energie Alemi berät Kundinnen und Kunden aus Stolberg telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Bringen Sie Ihre letzte Stromrechnung mit oder halten Sie Jahresverbrauch und Vertragsdaten bereit.
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
              title={i18n.language === "en" ? "Frequently asked questions about electricity tariffs in Stolberg" : "Häufige Fragen zu Stromtarifen in Stolberg"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{i18n.language === "en" ? "Have electricity tariffs for Stolberg checked now" : "Jetzt Stromtarife für Stolberg prüfen lassen"}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === "en" ? "Free advice at 0176 659 493 90 or via the contact page." : "Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Jetzt Stromtarife für Stolberg prüfen lassen
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
