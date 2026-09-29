import { Search, Handshake, BarChart3, CheckSquare, Zap, ArrowRight, Clock, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
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

export default function StromanbieterAachen() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Private households' : 'Privathaushalte',
      description: i18n.language === 'en' ? 'Compare tariffs according to consumption, contract preference and personal priorities.' : 'Tarife passend zu Verbrauch, Vertragswunsch und persönlichen Prioritäten vergleichen.'
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Business' : 'Gewerbe',
      description: i18n.language === 'en' ? 'Check energy costs and contract conditions for operational needs in a structured manner.' : 'Energiekosten und Vertragsbedingungen für den betrieblichen Bedarf strukturiert prüfen.'
    },
    {
      icon: <Zap size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Industry' : 'Industrie',
      description: i18n.language === 'en' ? 'Individually record consumption situation and requirements and classify suitable options.' : 'Verbrauchssituation und Anforderungen individuell erfassen und geeignete Optionen einordnen.'
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: i18n.language === 'en' ? 'View contract and consumption' : 'Vertrag und Verbrauch ansehen',
      description: i18n.language === 'en' ? 'If possible, bring your last annual statement and the details of your current contract. The annual consumption, installment, previous provider, customer number and cancellation conditions can be read from this.' : 'Bringen Sie möglichst Ihre letzte Jahresabrechnung und die Daten Ihres aktuellen Vertrags mit. Daraus lassen sich Jahresverbrauch, Abschlag, bisheriger Anbieter, Kundennummer und Kündigungsbedingungen ablesen.'
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: i18n.language === 'en' ? 'Compare offers comprehensively' : 'Angebote nachvollziehbar vergleichen',
      description: i18n.language === 'en' ? 'We compare available tariffs based on your details and discuss not only the price, but also the term, cancellation period, price guarantee, payment method and bonus rules.' : 'Wir vergleichen verfügbare Tarife anhand Ihrer Angaben und besprechen nicht nur den Preis, sondern auch Laufzeit, Kündigungsfrist, Preisgarantie, Zahlungsweise und Bonusregeln.'
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: i18n.language === 'en' ? 'Choose a suitable tariff' : 'Passenden Tarif auswählen',
      description: i18n.language === 'en' ? 'You decide at your leisure which offer suits you. Before signing, you will see the relevant contract conditions and the possible start of delivery.' : 'Sie entscheiden in Ruhe, welches Angebot zu Ihnen passt. Vor Abschluss sehen Sie die relevanten Vertragsbedingungen und den möglichen Lieferbeginn.'
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: i18n.language === 'en' ? 'Get support with switching' : 'Wechsel begleiten lassen',
      description: i18n.language === 'en' ? 'If you wish, we will support you with the necessary steps and remain your contact person even after the switch.' : 'Auf Wunsch unterstützen wir Sie bei den notwendigen Schritten und bleiben auch nach dem Wechsel Ihr Ansprechpartner.'
    }
  ];

  const faqs = [
    {
      question: i18n.language === 'en' ? 'Is the tariff advice at Energie Alemi free of charge?' : 'Ist die Tarifberatung bei Energie Alemi kostenlos?',
      answer: i18n.language === 'en' ? 'Yes. Energie Alemi shows the advice on the website as free of charge. Before concluding a contract, you will receive the relevant tariff and contract information.' : 'Ja. Energie Alemi weist die Beratung auf der Website als kostenlos aus. Vor einem Vertragsabschluss erhalten Sie die relevanten Tarif- und Vertragsinformationen.'
    },
    {
      question: i18n.language === 'en' ? 'Will my electricity be interrupted when I change providers?' : 'Wird mein Strom beim Anbieterwechsel unterbrochen?',
      answer: i18n.language === 'en' ? 'No. Energy supply is guaranteed during a change of supplier. The local network operator remains responsible for the electricity grid; only the supply contract is changed.' : 'Nein. Die Energieversorgung bleibt beim Lieferantenwechsel sichergestellt. Der örtliche Netzbetreiber bleibt für das Stromnetz zuständig; geändert wird der Liefervertrag.'
    },
    {
      question: i18n.language === 'en' ? 'What documents do I need for the comparison?' : 'Welche Unterlagen brauche ich für den Vergleich?',
      answer: i18n.language === 'en' ? 'The last annual statement, the current contract, your annual consumption, the meter number or market location ID, the previous provider and your customer number are helpful.' : 'Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Ihr Jahresverbrauch, die Zählernummer oder Marktlokations-ID, der bisherige Anbieter und Ihre Kundennummer.'
    },
    {
      question: i18n.language === 'en' ? 'Do I have to cancel my old electricity contract myself?' : 'Muss ich meinen alten Stromvertrag selbst kündigen?',
      answer: i18n.language === 'en' ? 'In many cases, the new supplier will take over the cancellation if you authorize them to do so. A different procedure may be necessary for special cancellations, moving house or very short notice periods. We will clarify this with you individually.' : 'In vielen Fällen übernimmt der neue Lieferant die Kündigung, wenn Sie ihn dazu bevollmächtigen. Bei Sonderkündigungen, einem Umzug oder sehr kurzen Fristen kann ein anderes Vorgehen nötig sein. Das klären wir im Einzelfall mit Ihnen.'
    },
    {
      question: i18n.language === 'en' ? 'How long does it take to change providers?' : 'Wie lange dauert der Anbieterwechsel?',
      answer: i18n.language === 'en' ? 'The specific start date depends mainly on the minimum contract term, cancellation period and processing by the companies involved. The possible start of delivery should be clearly stated before signing.' : 'Der konkrete Starttermin hängt vor allem von Mindestvertragslaufzeit, Kündigungsfrist und Bearbeitung der beteiligten Unternehmen ab. Vor dem Abschluss sollte der mögliche Lieferbeginn klar benannt sein.'
    },
    {
      question: i18n.language === 'en' ? 'Does Energie Alemi also advise commercial and industrial customers?' : 'Berät Energie Alemi auch Gewerbe- und Industriekunden?',
      answer: i18n.language === 'en' ? 'Yes. According to Energie Alemi, the advice is aimed at private, commercial and industrial customers. The comparison is adapted to the respective needs.' : 'Ja. Die Beratung richtet sich laut Energie Alemi an Privat-, Gewerbe- und Industriekunden. Der Vergleich wird an den jeweiligen Bedarf angepasst.'
    },
    {
      question: i18n.language === 'en' ? 'Can I also consider green electricity in the comparison?' : 'Kann ich beim Vergleich auch Ökostrom berücksichtigen?',
      answer: i18n.language === 'en' ? 'Yes. If the origin of the electricity is important to you, it can be included in the comparison as a selection criterion. The decisive factors are the specific details and conditions of the respective tariff.' : 'Ja. Wenn die Stromherkunft für Sie wichtig ist, kann sie als Auswahlkriterium in den Vergleich einfließen. Entscheidend sind die konkreten Angaben und Bedingungen des jeweiligen Tarifs.'
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/stromanbieter-aachen" 
        title={i18n.language === 'en' ? 'Compare Electricity Providers Aachen | Energie Alemi' : 'Stromanbieter Aachen vergleichen | Energie Alemi'}
        description={i18n.language === 'en' ? 'Compare electricity tariffs in Aachen: Energie Alemi checks your contract, finds suitable offers and accompanies the change of provider personally.' : 'Stromtarife in Aachen vergleichen: Energie Alemi prüft Ihren Vertrag, findet passende Angebote und begleitet den Anbieterwechsel persönlich.'}
        image={elecHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={i18n.language === 'en' ? 'Electricity Providers Aachen' : 'Stromanbieter Aachen'}
          title={i18n.language === 'en' ? 'Compare electricity providers in Aachen – switch with personal advice' : 'Stromanbieter in Aachen vergleichen – persönlich beraten wechseln'}
          description={i18n.language === 'en' ? 'We check your current electricity contract, compare suitable tariffs from different providers and accompany you through the switch if you wish. Personally in Aachen – for private households, businesses and industry.' : 'Wir prüfen Ihren aktuellen Stromvertrag, vergleichen passende Tarife verschiedener Anbieter und begleiten Sie auf Wunsch durch den Wechsel. Persönlich in Aachen – für Privathaushalte, Gewerbe und Industrie.'}
          bgImage={elecHeroDesk}
          buttonText={i18n.language === 'en' ? 'Request free tariff advice' : 'Kostenlose Tarifberatung anfragen'}
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'stromanbieter_aachen', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: i18n.language === 'en' ? 'Free advice' : 'Kostenlose Beratung' },
            { icon: <MapPin size={24} />, title: i18n.language === 'en' ? 'Personally on site in Aachen' : 'Persönlich vor Ort in Aachen' },
            { icon: <Handshake size={24} />, title: i18n.language === 'en' ? 'Support when switching' : 'Begleitung beim Wechsel' },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? 'A suitable electricity tariff begins with your actual needs' : 'Ein passender Stromtarif beginnt mit Ihrem tatsächlichen Bedarf'}</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === 'en' ? 'A low energy price alone does not make a good electricity contract. It is crucial how the tariff suits your consumption, your desired term and your personal planning. Basic price, cancellation period, price guarantee, payment method and possible bonus conditions should also be considered together.' : 'Ein niedriger Arbeitspreis allein macht noch keinen guten Stromvertrag. Entscheidend ist, wie der Tarif zu Ihrem Verbrauch, Ihrer gewünschten Laufzeit und Ihrer persönlichen Planung passt. Auch Grundpreis, Kündigungsfrist, Preisgarantie, Zahlungsweise und mögliche Bonusbedingungen sollten gemeinsam betrachtet werden.'}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            {i18n.language === 'en' ? 'Energie Alemi takes time for these details. We check your current situation, compare different offers and show you understandably which conditions are relevant in the long term. This way, you don\'t make a decision just because of a short-term bait price, but on the basis of a comprehensible overall package.' : 'Energie Alemi nimmt sich Zeit für diese Details. Wir prüfen Ihre aktuelle Situation, vergleichen verschiedene Angebote und zeigen Ihnen verständlich, welche Konditionen langfristig relevant sind. So treffen Sie keine Entscheidung nur wegen eines kurzfristigen Lockpreises, sondern auf Basis eines nachvollziehbaren Gesamtpakets.'}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            {i18n.language === 'en' ? 'By the way: We not only advise you on electricity, but also support you as a' : 'Übrigens: Wir beraten Sie nicht nur zu Strom, sondern unterstützen Sie als'} <Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">{i18n.language === 'en' ? 'gas provider' : 'Gasanbieter'}</Link> {i18n.language === "en" ? "and" : "und"} <Link to="/internetanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">{i18n.language === 'en' ? 'internet provider in Aachen' : 'Internetanbieter in Aachen'}</Link> {i18n.language === 'en' ? 'also with joint contract optimization.' : 'auch bei der gemeinsamen Vertragsoptimierung.'}
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title={i18n.language === 'en' ? 'Tariff advice directly in Aachen – instead of just through comparison lists' : 'Tarifberatung direkt in Aachen – statt allein durch Vergleichslisten'}
            subtitle={i18n.language === 'en' ? 'Online tariff calculators provide many results, but do not automatically answer your questions. Which term makes sense? How are bonuses considered? Does the installment match actual consumption? And when can the existing contract be terminated? At Energie Alemi, you get a personal point of contact in Aachen.' : 'Online-Tarifrechner liefern viele Ergebnisse, beantworten aber nicht automatisch Ihre Fragen. Welche Laufzeit ist sinnvoll? Wie werden Boni berücksichtigt? Passt der Abschlag zum tatsächlichen Verbrauch? Und wann kann der bestehende Vertrag beendet werden? Bei Energie Alemi erhalten Sie eine persönliche Anlaufstelle in Aachen.'}
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
                    title={
                      <>
                        {i18n.language === 'en' ? 'This is how the ' : 'So funktioniert der '} <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === 'en' ? 'electricity provider switch' : 'Stromanbieterwechsel'}</span> in vier Schritten
                      </>
                    }
                    subtitle={i18n.language === 'en' ? 'A transparent and simple process for your new electricity tariff.' : 'Ein transparenter und einfacher Ablauf für Ihren neuen Stromtarif.'}
                    align="left"
                    className="mb-8"
                  />
                  <div className="bg-white dark:bg-[#122340] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 mt-8">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{i18n.language === 'en' ? 'Helpful for the appointment' : 'Für den Termin hilfreich'}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {i18n.language === 'en' ? 'Last annual statement, current contract, meter number or market location ID, previous customer number and - if available - a current meter reading.' : 'Letzte Jahresabrechnung, aktueller Vertrag, Zählernummer oder Marktlokations-ID, bisherige Kundennummer und – falls vorhanden – ein aktueller Zählerstand.'}
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
            title={i18n.language === 'en' ? 'What you should pay attention to when comparing electricity' : 'Darauf sollten Sie beim Stromvergleich achten'}
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: i18n.language === 'en' ? 'Total costs' : 'Gesamtkosten', desc: i18n.language === 'en' ? 'Consider basic price and energy price together - not just a single value.' : 'Grundpreis und Arbeitspreis gemeinsam betrachten – nicht nur einen Einzelwert.' },
              { title: i18n.language === 'en' ? 'Contract term' : 'Vertragslaufzeit', desc: i18n.language === 'en' ? 'Check how long you are bound and how flexible a later switch remains.' : 'Prüfen, wie lange Sie gebunden sind und wie flexibel ein späterer Wechsel bleibt.' },
              { title: i18n.language === 'en' ? 'Cancellation period' : 'Kündigungsfrist', desc: i18n.language === 'en' ? 'Take into account the next possible cancellation date of the existing contract.' : 'Den nächstmöglichen Kündigungstermin des bestehenden Vertrags berücksichtigen.' },
              { title: i18n.language === 'en' ? 'Price guarantee' : 'Preisgarantie', desc: i18n.language === 'en' ? 'Look closely at which price components are covered and how long the guarantee is valid.' : 'Genau ansehen, welche Preisbestandteile erfasst sind und wie lange die Garantie gilt.' },
              { title: i18n.language === 'en' ? 'Bonus conditions' : 'Bonusbedingungen', desc: i18n.language === 'en' ? 'Do not confuse one-off bonuses with permanently low costs; also consider the following year.' : 'Einmalige Boni nicht mit dauerhaft niedrigen Kosten verwechseln; auch das Folgejahr betrachten.' },
              { title: i18n.language === 'en' ? 'Payment method' : 'Zahlungsweise', desc: i18n.language === 'en' ? 'Monthly installments are generally clearer than advance payment or high advance payments.' : 'Monatliche Abschläge sind in der Regel übersichtlicher als Vorkasse oder hohe Vorauszahlungen.' },
              { title: i18n.language === 'en' ? 'Electricity origin' : 'Stromherkunft', desc: i18n.language === 'en' ? 'If renewable energies are important to you, check the stated electricity mix and the tariff conditions.' : 'Wenn Ihnen erneuerbare Energien wichtig sind, den ausgewiesenen Strommix und die Tarifbedingungen prüfen.' }
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
          <h2 className="text-3xl font-bold mb-6">{i18n.language === 'en' ? 'Personally available in the center of Aachen' : 'Persönlich erreichbar im Zentrum von Aachen'}</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {i18n.language === 'en' ? 'You don\'t want to compare your electricity contract alone online? Visit Energie Alemi at Alexianergraben 9 in 52064 Aachen. We will discuss your situation personally and explain the next steps in clear language.' : 'Sie möchten Ihren Stromvertrag nicht allein online vergleichen? Besuchen Sie Energie Alemi am Alexianergraben 9 in 52064 Aachen. Wir besprechen Ihre Situation persönlich und erklären die nächsten Schritte in verständlicher Sprache.'}
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
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Clock size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">{i18n.language === 'en' ? 'Opening hours' : 'Öffnungszeiten'}</h4>
              <p className="text-blue-100">{i18n.language === 'en' ? 'Monday to Saturday, 10:00 AM–7:00 PM' : 'Montag bis Samstag, 10:00–19:00 Uhr'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-30 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title={i18n.language === 'en' ? 'Frequently asked questions about switching electricity providers in Aachen' : 'Häufige Fragen zum Stromanbieterwechsel in Aachen'}
              subtitle={i18n.language === 'en' ? 'Everything you need to know about switching.' : 'Alles, was Sie für Ihren Wechsel wissen müssen.'}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{i18n.language === 'en' ? 'Have electricity tariffs in Aachen checked now' : 'Jetzt Stromtarife in Aachen prüfen lassen'}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === 'en' ? 'Arrange your free tariff advice at Energie Alemi - in person at Alexianergraben 9 or by phone at 0176 659 493 90.' : 'Vereinbaren Sie Ihre kostenlose Tarifberatung bei Energie Alemi – persönlich am Alexianergraben 9 oder telefonisch unter 0176 659 493 90.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  {i18n.language === 'en' ? 'REQUEST FREE TARIFF ADVICE' : 'KOSTENLOSE TARIFBERATUNG ANFRAGEN'}
                </Button>
                <a data-track="phone" href="tel:017665949390" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0047AB] dark:border-[#f0a83f] text-[#0047AB] dark:text-[#f0a83f] font-semibold rounded-full hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#0a1628] transition-colors">
                  <Phone size={18} className="mr-2" />
                  {i18n.language === 'en' ? 'CALL NOW' : 'JETZT ANRUFEN'}
                </a>
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
