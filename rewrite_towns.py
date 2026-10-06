import os

files = {
    'StromanbieterHerzogenrath.tsx': """import { Search, Handshake, BarChart3, CheckSquare, Zap, ArrowRight, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon, Leaf } from 'lucide-react';
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

export default function StromanbieterHerzogenrath() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Living in the Border Region' : 'Wohnen in der Grenzregion',
      description: i18n.language === "en" ? "Herzogenrath's unique location directly bordering Kerkrade means many cross-border commuters live here. Flexible contract conditions and reliable price guarantees are essential for households in Kohlscheid, Merkstein, and the city center." : "Die besondere Lage Herzogenraths direkt an der Grenze zu Kerkrade zieht viele Pendler an. Für Haushalte in Kohlscheid, Merkstein und der Innenstadt sind daher flexible Vertragsbedingungen und verlässliche Preisgarantien beim Strom wichtig."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === "en" ? "Commercial & Tech Park" : "Gewerbe & Technologiepark",
      description: i18n.language === "en" ? "Local businesses, especially around the TPH (Technologiepark Herzogenrath), require stable energy costs. We analyze your load profile and find suitable commercial electricity tariffs to ensure planning security." : "Lokale Unternehmen, insbesondere rund um den TPH (Technologiepark Herzogenrath), benötigen stabile Energiekosten. Wir analysieren Ihr Lastprofil und finden passende Gewerbestromtarife für Planungssicherheit."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <MapPin size={24} />,
      title: "Wohnort & Zähler prüfen",
      description: "Geben Sie Ihre genaue Adresse in Herzogenrath (z.B. Merkstein oder Kohlscheid) sowie die Zählernummer an."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Verbrauch analysieren",
      description: "Wir werten Ihren bisherigen Jahresverbrauch aus, um Arbeitspreis und Grundpreis optimal abzustimmen."
    },
    {
      number: 3,
      icon: <Search size={24} />,
      title: "Tarifauswahl",
      description: "Einholung und Vergleich von Angeboten, die in Herzogenrath verfügbar sind – ohne versteckte Kosten."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Reibungsloser Wechsel",
      description: "Energie Alemi kümmert sich um die Kündigung beim alten Anbieter und die Anmeldung beim neuen Versorger."
    }
  ];

  const faqs = [
    {
      question: "Warum lohnt sich ein Stromvergleich speziell für Herzogenrath?",
      answer: i18n.language === "en" ? "Because local network usage charges in the Aachen region affect the final electricity price. A comparison tailored to your Herzogenrath postal code shows exactly which national and regional providers currently offer the best rates." : "Weil lokale Netznutzungsentgelte in der Städteregion Aachen den Strompreis beeinflussen. Ein Vergleich mit Ihrer Herzogenrather Postleitzahl zeigt exakt, welche überregionalen und regionalen Versorger aktuell die besten Konditionen bieten."
    },
    {
      question: "Ich ziehe nach Herzogenrath-Kohlscheid. Wann sollte ich Strom anmelden?",
      answer: i18n.language === "en" ? "You should register your electricity about 2-4 weeks before handing over the keys. If you move in without a contract, you automatically fall into the often more expensive basic supply." : "Am besten melden Sie Ihren Strom etwa 2-4 Wochen vor der Schlüsselübergabe an. Wer ohne Vertrag einzieht, fällt automatisch in die oft teurere Grundversorgung. Mehr dazu in unserem Ratgeber zum Umzug."
    },
    {
      question: "Wirken sich Grenzpendler-Situationen auf den deutschen Stromvertrag aus?",
      answer: i18n.language === "en" ? "As long as your residence and the electricity meter are located in Herzogenrath (Germany), German market rules apply entirely. Your employment in the Netherlands (e.g., Kerkrade) has no impact on the choice of your electricity provider." : "Solange Ihr Wohnsitz und der Stromzähler in Herzogenrath (Deutschland) liegen, gelten vollständig die deutschen Marktregeln. Eine Berufstätigkeit in den Niederlanden (z.B. Kerkrade) hat keinen Einfluss auf die Wahl Ihres Stromanbieters."
    },
    {
      question: "Bietet Energie Alemi auch Ökostrom in Herzogenrath an?",
      answer: i18n.language === "en" ? "Yes, you can specifically choose green electricity tariffs for Herzogenrath. We ensure the electricity comes from renewable sources." : "Ja, Sie können gezielt Ökostromtarife für Herzogenrath wählen. Wir achten darauf, dass der Strom aus erneuerbaren Energien stammt und die Tarife dennoch wirtschaftlich bleiben."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/stromanbieter-herzogenrath" 
        title={i18n.language === 'en' ? 'Electricity Providers Herzogenrath: Compare & Switch | Energie Alemi' : 'Stromanbieter Herzogenrath: Tarife vergleichen | Energie Alemi'}
        description={i18n.language === "en" ? "Find the best electricity provider in Herzogenrath. Personal advice for Kohlscheid, Merkstein and Center. Compare safely and switch without stress." : "Finden Sie den passenden Stromanbieter in Herzogenrath. Persönliche Beratung für Kohlscheid, Merkstein und Mitte. Sicher vergleichen und wechseln."}
        image={elecHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={i18n.language === 'en' ? 'Electricity in Herzogenrath' : 'Strom in Herzogenrath'}
          title="Stromanbieter in Herzogenrath finden und Energiekosten senken"
          description={<>Egal ob Sie im Zentrum der Eurode-Stadt, in Kohlscheid oder in Merkstein leben: Wir finden den passenden Stromtarif für Ihre Adresse in Herzogenrath. Energie Alemi bietet Ihnen eine transparente, persönliche Beratung direkt aus der Region. <br/><br/>Tipp: Wir helfen auch beim <Link to="/gasanbieter-herzogenrath" className="hover:underline font-semibold text-blue-300">Gasanbieterwechsel in Herzogenrath</Link>.</>}
          bgImage={elecHeroDesk}
          buttonText="Stromtarife für Herzogenrath prüfen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'stromanbieter_herzogenrath', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Lokale & unabhängige Tarifberatung" },
            { icon: <BarChart3 size={24} />, title: "Transparente Kostenaufschlüsselung" },
            { icon: <Leaf size={24} />, title: "Auf Wunsch 100% Ökostrom" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Individuelle Stromtarife für die Region Herzogenrath</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Herzogenrath zeichnet sich durch seine Vielfalt aus – vom dichten Siedlungsgebiet in Kohlscheid bis zu den ruhigeren Lagen in Merkstein. Genauso vielfältig sind die Anforderungen an einen Stromtarif. Während Familien oft auf Preisstabilität durch lange Garantien setzen, bevorzugen Singles oder Pendler häufig flexiblere Verträge mit kurzen Kündigungsfristen.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Ein reiner Online-Preisvergleich übersieht oft wichtige Details wie die Verlässlichkeit der Preisgarantie oder die tatsächlichen Folgekosten nach Ablauf eines Bonusjahres. Energie Alemi prüft diese Faktoren detailliert für Ihre Anschrift in Herzogenrath.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Wir beraten Sie gerne telefonisch oder persönlich in unserem nahegelegenen Büro in Aachen. Wir sind stolz darauf, als <Link to="/ratgeber/energieberater-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">unabhängige Energieberatung in der Region Aachen</Link> tätig zu sein.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Stromberatung angepasst an Ihre Wohnsituation"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Suchen Sie schnelles Internet an der Grenze? Hier geht es zum <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Internetanbieter Vergleich für Herzogenrath</Link>.
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
                        <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Stromanbieterwechsel</span> in Herzogenrath
                      </>
                    }
                    subtitle="Ein nahtloser Übergang ohne Risiko. Wir begleiten Ihren Wechsel von der Tarifauswahl bis zur erfolgreichen Ummeldung."
                    align="left"
                    className="mb-8"
                  />
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Sicherheit beim Wechsel</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Die Stromversorgung in Herzogenrath ist gesetzlich abgesichert. Selbst wenn es bei einem Anbieterwechsel zu Verzögerungen kommt, springt automatisch der örtliche Grundversorger ein. Sie stehen also niemals im Dunkeln.
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
      
      {/* Contact Section */}
      <div className="relative z-25 bg-[#0047AB] dark:bg-[#002f75] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 text-white text-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Persönliche Beratung für Herzogenrath</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Sparen Sie sich die Zeit für aufwendige Online-Suchen. Kontaktieren Sie uns unverbindlich für eine professionelle Analyse Ihres Stromtarifs.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Büro Aachen</h4>
              <p className="text-blue-100">Alexianergraben 9, 52064 Aachen</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Telefon</h4>
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
              title="Häufige Fragen zum Strom in Herzogenrath"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Jetzt Stromtarif für Herzogenrath optimieren</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Kostenlose und unverbindliche Tarifberatung anfordern.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Tarife vergleichen lassen
                </Button>
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
""",
    'StromanbieterWuerselen.tsx': """import { Search, Handshake, BarChart3, CheckSquare, Zap, ArrowRight, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon, ZapOff } from 'lucide-react';
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

export default function StromanbieterWuerselen() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: "Haushalte in Würselen",
      description: "Egal ob Wohnung in Würselen-Mitte oder Einfamilienhaus in Broichweiden und Bardenberg: Wir ermitteln Ihren genauen Jahresverbrauch und suchen Tarife, die ohne versteckte Klauseln dauerhaft günstige Strompreise garantieren."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Gewerbe am Aachener Kreuz",
      description: "Würselen beheimatet durch das Gewerbegebiet Kaninsberg/Aachener Kreuz viele Unternehmen. Für diese Betriebe verhandeln wir gewerbliche Stromtarife mit Planungssicherheit und prüfen Einsparpotenziale bei hohem Verbrauch."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Zap size={24} />,
      title: "Aktuellen Tarif erfassen",
      description: "Wir prüfen Ihre aktuelle Stromrechnung und identifizieren teure Grundpreise oder ausgelaufene Preisgarantien."
    },
    {
      number: 2,
      icon: <Search size={24} />,
      title: "Lokale Angebote filtern",
      description: "Vergleich aller für das Postleitzahlengebiet Würselen verfügbaren Anbieter (regional und bundesweit)."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Konditionen prüfen",
      description: "Bewertung von Kündigungsfristen, Boni und echtem Arbeitspreis im zweiten Vertragsjahr."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechselservice",
      description: "Entspannte Übernahme des Vertragswechsels – Sie müssen sich nicht um den Papierkram kümmern."
    }
  ];

  const faqs = [
    {
      question: "Ich baue/kaufe ein Haus in Bardenberg. Wie melde ich Baustrom oder Hausstrom an?",
      answer: "Beim Neubau benötigen Sie zunächst Baustrom über den lokalen Netzbetreiber. Später können Sie für den Hausstrom frei einen Anbieter für Würselen wählen. Wir beraten Sie rechtzeitig zu den Übergangsfristen."
    },
    {
      question: "Warum sind Stromtarife in Würselen teilweise anders als im Umland?",
      answer: "Der Strommarkt in Deutschland ist in Netzgebiete unterteilt. Die Netznutzungsentgelte, die Teil Ihres Strompreises sind, können sich je nach exaktem Wohnort unterscheiden. Deshalb ist ein postleitzahlengenauer Vergleich entscheidend."
    },
    {
      question: "Gibt es spezielle Tarife für Wärmepumpen in Würselen?",
      answer: "Ja, wenn Sie über einen separaten Stromzähler für Ihre Wärmepumpe verfügen, können wir spezielle Wärmepumpentarife vermitteln. Diese weisen in der Regel einen deutlich günstigeren Arbeitspreis auf."
    },
    {
      question: "Was passiert, wenn mein bisheriger Anbieter insolvent geht?",
      answer: "Die Versorgung in Würselen ist durch den Gesetzgeber geschützt. Sie fallen dann automatisch in die Ersatzversorgung des Grundversorgers und haben jederzeit das Recht, kurzfristig in einen günstigeren Sondertarif zu wechseln."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/stromanbieter-wuerselen" 
        title="Stromanbieter Würselen: Stromtarife vergleichen | Energie Alemi"
        description="Stromanbieter in Würselen wechseln: Kostenlose Beratung für Haushalte und Gewerbe (Aachener Kreuz). Günstige Stromtarife für Mitte, Bardenberg & Broichweiden."
        image={elecHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText="Strom in Würselen"
          title="Stromanbieter in Würselen vergleichen – Transparent und unabhängig"
          description={<>Die Stadt der Jungenspiele bietet hohe Lebensqualität – aber zahlen Sie vielleicht zu viel für Strom? Ob in Bardenberg, Broichweiden oder Würselen-Mitte: Wir überprüfen Ihren aktuellen Stromvertrag und finden faire, günstige Alternativen für Ihre Anschrift. <br/><br/>Entdecken Sie auch unsere Angebote für <Link to="/gasanbieter-wuerselen" className="hover:underline font-semibold text-blue-300">Gas in Würselen</Link>.</>}
          bgImage={elecHeroDesk}
          buttonText="Kostenlosen Stromvergleich starten"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'stromanbieter_wuerselen', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Faire Vertragsbedingungen" },
            { icon: <BarChart3 size={24} />, title: "Exakte Analyse der Jahreskosten" },
            { icon: <ZapOff size={24} />, title: "Unterbrechungsfreier Wechsel" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Regionale Stromberatung für Würselener Haushalte & Gewerbe</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Als direkter Nachbar von Aachen ist Würselen ein attraktiver Wohnort und starker Wirtschaftsstandort. Das große Gewerbegebiet am Aachener Kreuz (Kaninsberg) beheimatet viele Unternehmen mit hohem Strombedarf. Doch auch Familien in den Stadtteilen Bardenberg und Broichweiden spüren die steigenden Energiekosten.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Energie Alemi hilft Ihnen dabei, den Überblick im Tarifdschungel zu behalten. Wir prüfen nicht nur den reinen Preis pro Kilowattstunde, sondern bewerten auch die Seriosität der Stromanbieter, die Dauer der Preisgarantie und Fallstricke bei Boni. 
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Unsere Beratung ist 100% kostenfrei. Wir sind als unabhängiger <Link to="/ratgeber/energieberater-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Energieberater in Aachen</Link> auch für das gesamte Würselener Stadtgebiet zuständig.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Stromtarife nach Maß"
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Neben Strom helfen wir Ihnen auch beim Thema Internetverbindung. Hier geht es zum <Link to="/internetanbieter-wuerselen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Internetanbieter Vergleich Würselen</Link>.
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
                        <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Der Wechselprozess</span> in Würselen
                      </>
                    }
                    subtitle="Von der Beratung bis zum Vertragsbeginn begleiten wir Sie transparent und zuverlässig."
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
      
      {/* Contact Section */}
      <div className="relative z-25 bg-[#0047AB] dark:bg-[#002f75] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 text-white text-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Wir sind für Sie da</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Wir beraten Sie gerne telefonisch oder in unserem Büro im Herzen von Aachen. 
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Büro Aachen</h4>
              <p className="text-blue-100">Alexianergraben 9, 52064 Aachen</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Telefon</h4>
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
              title="Ihre Fragen zum Stromanbieterwechsel in Würselen"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Jetzt unverbindlich Stromtarife prüfen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Sparen Sie sich die aufwendige Recherche. Wir finden den richtigen Tarif für Ihr Zuhause in Würselen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Vergleich anfordern
                </Button>
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
"""
}

for name, content in files.items():
    with open(f"src/pages/{name}", "w") as f:
        f.write(content)

