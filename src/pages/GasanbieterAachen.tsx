import { Search, Handshake, BarChart3, CheckSquare, Flame, ArrowRight, MapPin, Phone, Settings, ClipboardList } from 'lucide-react';

import { useState, lazy, Suspense } from 'react';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import { trackEvent } from '../lib/analytics';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import gasHeroDesk from '../assets/gas hero desk.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function GasanbieterAachen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "Tarife verständlich vergleichen",
      description: "Wir stellen Kosten und Vertragsbedingungen übersichtlich gegenüber."
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5} />,
      title: "Persönlich vor Ort beraten",
      description: "Bei Fragen haben Sie einen direkten Ansprechpartner in Aachen."
    },
    {
      icon: <Settings size={28} strokeWidth={1.5} />,
      title: "Passend zum Bedarf auswählen",
      description: "Verbrauch, Haushaltssituation und gewünschte Flexibilität fließen in die Auswahl ein."
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: "Beim Wechsel begleitet werden",
      description: "Wir unterstützen Sie von der Prüfung Ihrer Unterlagen bis zum neuen Liefervertrag."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <ClipboardList size={24} />,
      title: "Verbrauch und Vertrag erfassen",
      description: "Wir prüfen Ihre letzte Gasrechnung, den Jahresverbrauch, den aktuellen Tarif und die Vertragsfristen."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Verfügbare Tarife vergleichen",
      description: "Wir stellen passende Angebote für Ihre Lieferadresse in Aachen gegenüber und erklären Preis sowie Vertragsbedingungen."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Tarif auswählen und Wechsel beauftragen",
      description: "Sie entscheiden in Ruhe. Anschließend wird der Lieferantenwechsel mit den erforderlichen Angaben angestoßen."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Bestätigung prüfen und weiter begleiten",
      description: "Wir achten auf Lieferbeginn, Abschlag und Vertragsbestätigung und bleiben bei Rückfragen erreichbar."
    }
  ];

  const faqs = [
    {
      question: "Wer ist der Gas-Grundversorger in Aachen?",
      answer: "Die STAWAG ist der örtliche Grundversorger für Gas in Aachen. Sie veröffentlicht dafür den Tarif „STAWAG Gas Basis“. Die Grundversorgung ist vom frei gewählten Sondervertrag zu unterscheiden."
    },
    {
      question: "Wer ist der Gasnetzbetreiber in Aachen?",
      answer: "Die Regionetz GmbH betreibt das Gasnetz in Aachen. Der Netzbetreiber ist für die technische Infrastruktur zuständig und bleibt auch dann derselbe, wenn Sie Ihren Gasanbieter wechseln."
    },
    {
      question: "Kann ich meinen Gasanbieter in Aachen frei wählen?",
      answer: "Wenn Sie selbst Vertragspartner für die Gaslieferung sind, können Sie grundsätzlich einen verfügbaren Anbieter wählen. Bei einer Zentralheizung im Mietshaus schließt häufig die Vermietung oder Hausverwaltung den Gasvertrag ab."
    },
    {
      question: "Wird die Gasversorgung beim Anbieterwechsel unterbrochen?",
      answer: "Ein regulärer Anbieterwechsel ist ein vertraglicher Vorgang; die Leitungen bleiben unverändert. Die Energieversorgung bleibt laut Verbraucherinformation des Bundes während des Wechsels sichergestellt."
    },
    {
      question: "Muss der Gaszähler beim Wechsel ausgetauscht werden?",
      answer: "Normalerweise nicht. Der vorhandene Zähler und das Netz bleiben bestehen. Zum Wechseltermin kann ein aktueller Zählerstand erforderlich sein."
    },
    {
      question: "Welche Angaben brauche ich für einen Gasvergleich?",
      answer: "Hilfreich sind Ihre Lieferadresse, der Jahresverbrauch in Kilowattstunden, die letzte Gasrechnung, der aktuelle Anbieter und Tarif sowie Laufzeit und Kündigungsfrist."
    },
    {
      question: "Was ist der Unterschied zwischen Arbeitspreis und Grundpreis?",
      answer: "Der Arbeitspreis wird je verbrauchter Kilowattstunde berechnet. Der Grundpreis fällt unabhängig vom Verbrauch als fester Betrag an. Für einen fairen Vergleich sollten immer die voraussichtlichen Jahreskosten betrachtet werden."
    },
    {
      question: "Was bedeutet Preisgarantie beim Gastarif?",
      answer: "Eine Preisgarantie begrenzt Preisänderungen für einen festgelegten Zeitraum. Je nach Tarif können einzelne Preisbestandteile ausgenommen sein. Deshalb sollten Dauer und Umfang der Garantie vor dem Abschluss geprüft werden."
    },
    {
      question: "Wie lang ist die Kündigungsfrist in der Gas-Grundversorgung?",
      answer: "Ein Grundversorgungsvertrag kann nach § 20 GasGVV mit einer Frist von zwei Wochen gekündigt werden. Bei Sonderverträgen gelten die im Vertrag vereinbarten Fristen."
    },
    {
      question: "Kostet die Beratung bei Energie Alemi etwas?",
      answer: "Die Tarifberatung wird als kostenlose Beratung angeboten. Für den konkreten Vergleich bringen Sie am besten Ihre letzte Rechnung und die aktuellen Vertragsdaten mit."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/gasanbieter-aachen" 
        title="Gasanbieter Aachen vergleichen | Energie Alemi"
        description="Gasanbieter in Aachen vergleichen: Energie Alemi prüft Arbeitspreis, Grundpreis, Preisgarantie und Laufzeit – persönlich und transparent beraten."
        image={gasHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Flame size={24} />}
          badgeText="Gasanbieter Aachen"
          title="Gasanbieter Aachen vergleichen – persönlich beraten, klar entscheiden"
          description="Sie möchten Ihren Gastarif in Aachen prüfen oder den Gasanbieter wechseln? Energie Alemi vergleicht verfügbare Angebote verschiedener Anbieter und erklärt Ihnen verständlich, worauf es bei Preis, Laufzeit und Vertragsbedingungen ankommt."
          bgImage={gasHeroDesk}
          buttonText="Jetzt Gastarif prüfen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'gasanbieter_aachen', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <MapPin size={24} />, title: "Persönliche Beratung in Aachen" },
            { icon: <Search size={24} />, title: "Transparenter Tarifvergleich" },
            { icon: <Handshake size={24} />, title: "Unterstützung beim Anbieterwechsel" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Gasvergleich in Aachen: Nicht nur auf den Arbeitspreis schauen</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Ein günstiger Arbeitspreis wirkt attraktiv, entscheidet aber nicht allein über die tatsächlichen Jahreskosten. Auch der Grundpreis, die Preisgarantie, die Vertragslaufzeit und die Kündigungsfrist beeinflussen, ob ein Gastarif zu Ihrem Verbrauch und Ihrem Wunsch nach Flexibilität passt.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Wir betrachten diese Punkte gemeinsam und ordnen Boni oder Aktionspreise so ein, dass Sie das erste Vertragsjahr und die Zeit danach vergleichen können. So erhalten Sie eine nachvollziehbare Entscheidungsgrundlage statt einer unübersichtlichen Tarifliste.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Ihre Vorteile bei Energie Alemi"
            align="center"
            className="mb-12"
          />
          <ServiceFeatures features={features} />
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl mt-16 bg-slate-50 dark:bg-[#122340] rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Für wen lohnt sich ein Gasvergleich?</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Ein Vergleich kann besonders sinnvoll sein, wenn Ihre Preisgarantie bald endet, eine Preiserhöhung angekündigt wurde, Sie noch in der Grundversorgung sind oder sich Ihr Verbrauch verändert hat. Auch bei einem Umzug oder vor der Verlängerung eines bestehenden Vertrags lohnt sich ein genauer Blick auf die Konditionen.
          </p>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Wichtig für Mieterinnen und Mieter</h4>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Wer eine eigene Gastherme und einen eigenen Gasliefervertrag hat, kann den Anbieter in der Regel selbst wählen. Bei einer zentralen Heizungsanlage liegt der Liefervertrag häufig bei der Vermietung oder Hausverwaltung.
          </p>
        </div>
      </div>
      
      {/* Criteria Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Das gehört in einen fairen Gastarif-Vergleich"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Arbeitspreis", desc: "Preis je verbrauchter kWh. Wie stark wirkt er bei meinem Verbrauch?" },
              { title: "Grundpreis", desc: "Fester Betrag pro Monat/Jahr. Wie hoch sind die Fixkosten?" },
              { title: "Preisgarantie", desc: "Dauer und abgedeckte Bestandteile. Was darf sich trotz Garantie ändern?" },
              { title: "Kündigungsfrist", desc: "Frist und Vertragsverlängerung. Bis wann muss gekündigt werden?" },
              { title: "Vertragslaufzeit", desc: "Eine längere Bindung kann Planungssicherheit geben, schränkt aber die Flexibilität für einen späteren Wechsel ein." },
              { title: "Bonusbedingungen", desc: "Neukunden- oder Sofortboni können den Preis im ersten Jahr senken. Entscheidend sind die Voraussetzungen und die Kosten ohne Bonus." },
              { title: "Abschlag und Jahreskosten", desc: "Der monatliche Abschlag ist eine Vorauszahlung. Für den Vergleich zählt die nachvollziehbare Prognose der Gesamtkosten." },
              { title: "Zahlungsweise", desc: "Tarife mit Vorkasse oder Paketmengen sollten besonders sorgfältig geprüft werden." }
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
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-6">Sie möchten wissen, welcher Gastarif zu Ihrem Verbrauch passt?</p>
            <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
              Jetzt Gasrechnung prüfen lassen
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
                        So funktioniert der <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Gasanbieterwechsel</span> in vier Schritten
                      </>
                    }
                    subtitle="Ein transparenter und einfacher Ablauf für Ihren neuen Gastarif."
                    align="left"
                    className="mb-8"
                  />
                  <div className="bg-slate-50 dark:bg-[#122340] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 mt-8">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Diese Angaben helfen beim Vergleich</h4>
                    <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2 list-disc pl-4">
                      <li><strong>Lieferadresse:</strong> Postleitzahl und Anschrift in Aachen.</li>
                      <li><strong>Jahresverbrauch:</strong> Zu finden auf der letzten Jahresabrechnung, in Kilowattstunden.</li>
                      <li><strong>Vertragsdaten:</strong> Aktueller Anbieter, Tarif, Laufzeit und Kündigungsfrist.</li>
                      <li><strong>Zählerdaten:</strong> Zählernummer und später zum Wechseltermin der aktuelle Zählerstand.</li>
                    </ul>
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
      
      {/* Local Aachen Info */}
      <div className="relative z-25 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Gasversorgung in Aachen: Lieferant und Netzbetreiber sind nicht dasselbe"
            align="center"
            className="mb-10"
          />
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
            In Aachen übernimmt die STAWAG die Gas-Grundversorgung. Die Grundversorgung ist der gesetzlich geregelte Basistarif des örtlichen Grundversorgers. Wer Gas entnimmt, ohne zuvor einen Sondervertrag abgeschlossen zu haben, kann – abhängig von der konkreten Situation – in der Grund- oder Ersatzversorgung landen.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8">
            Für das Gasnetz in Aachen ist die Regionetz GmbH zuständig. Sie betreibt die Netzinfrastruktur; der gewählte Gasanbieter verkauft und liefert die Energie auf vertraglicher Ebene. Ein Anbieterwechsel ändert deshalb nicht das vorhandene Leitungsnetz und erfordert normalerweise keinen Austausch des Gaszählers.
          </p>
          
          <div className="bg-white dark:bg-[#122340] rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
              <div className="p-6">
                <h4 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Rolle</h4>
                <p className="font-medium text-slate-900 dark:text-white">Grundversorger</p>
                <p className="font-medium text-slate-900 dark:text-white mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">Netzbetreiber</p>
              </div>
              <div className="p-6">
                <h4 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Unternehmen</h4>
                <p className="font-medium text-[#0047AB] dark:text-[#f0a83f]">STAWAG</p>
                <p className="font-medium text-[#0047AB] dark:text-[#f0a83f] mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">Regionetz GmbH</p>
              </div>
              <div className="p-6">
                <h4 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Aufgabe</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">Grund- und Ersatzversorgung; eigene Gastarife</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">Gasnetz, Anschluss und technische Netzinfrastruktur</p>
              </div>
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Was bedeutet das für Ihren Wechsel?</h4>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Sie können einen anderen Lieferanten wählen, während der Netzbetreiber gleich bleibt. Der Wechsel ist ein vertraglicher Vorgang. Laut einer Verbraucherinformation des Bundes ist der Lieferantenwechsel kostenlos; die Energieversorgung bleibt dabei sichergestellt. Für einen Vertrag außerhalb der Grundversorgung gelten die vereinbarten Laufzeiten und Kündigungsfristen.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
            <strong className="block mb-1">Hinweis zur Grundversorgung:</strong>
            Ein Gas-Grundversorgungsvertrag kann nach § 20 GasGVV mit einer Frist von zwei Wochen gekündigt werden. Bei Sonderverträgen gelten die jeweiligen Vertragsbedingungen.
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title="Häufige Fragen zu Gasanbietern in Aachen"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="text-center mt-8 mb-16">
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-6">Ihre Frage ist noch offen?</p>
              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0047AB] dark:border-[#f0a83f] text-[#0047AB] dark:text-[#f0a83f] font-semibold rounded-full hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#0a1628] transition-colors">
                Persönliche Beratung in Aachen anfragen
              </button>
            </div>
            
            <div className="bg-[#0047AB] dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-transparent dark:border-slate-800 text-white mt-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Bereit für einen transparenten Gasvergleich?</h3>
              <p className="text-blue-100 dark:text-slate-300 text-lg mb-4 max-w-2xl mx-auto">
                Ein Online-Rechner zeigt Zahlen. Eine persönliche Beratung hilft dabei, diese Zahlen richtig einzuordnen. Energie Alemi prüft mit Ihnen, welcher Gastarif zu Verbrauch, Immobilie und gewünschter Vertragsflexibilität passt – verständlich und direkt in Aachen.
              </p>
              <p className="text-blue-200 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Bringen Sie einfach Ihre letzte Gasrechnung mit oder halten Sie Jahresverbrauch und aktuelle Vertragsdaten bereit. Wir prüfen die Ausgangslage und besprechen die nächsten Schritte.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Kostenlose Gasberatung vereinbaren
                </Button>
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  Letzte Gasrechnung prüfen lassen
                </button>
              </div>
              <div className="pt-8 border-t border-white/20 text-blue-100 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm">
                <span className="flex items-center justify-center"><MapPin size={16} className="mr-2"/> Energie Alemi, Alexianergraben 9, 52064 Aachen</span>
                <span className="flex items-center justify-center"><Phone size={16} className="mr-2"/> <a href="tel:017665949390" className="hover:underline hover:text-white">0176 659 493 90</a></span>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <Suspense fallback={null}>
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Gas" />
        </Suspense>
      )}
    </div>
  );
}
