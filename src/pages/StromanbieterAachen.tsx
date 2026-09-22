import { Search, Handshake, BarChart3, CheckSquare, Zap, ArrowRight, Clock, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
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

export default function StromanbieterAachen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: "Privathaushalte",
      description: "Tarife passend zu Verbrauch, Vertragswunsch und persönlichen Prioritäten vergleichen."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: "Gewerbe",
      description: "Energiekosten und Vertragsbedingungen für den betrieblichen Bedarf strukturiert prüfen."
    },
    {
      icon: <Zap size={28} strokeWidth={1.5} />,
      title: "Industrie",
      description: "Verbrauchssituation und Anforderungen individuell erfassen und geeignete Optionen einordnen."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Vertrag und Verbrauch ansehen",
      description: "Bringen Sie möglichst Ihre letzte Jahresabrechnung und die Daten Ihres aktuellen Vertrags mit. Daraus lassen sich Jahresverbrauch, Abschlag, bisheriger Anbieter, Kundennummer und Kündigungsbedingungen ablesen."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Angebote nachvollziehbar vergleichen",
      description: "Wir vergleichen verfügbare Tarife anhand Ihrer Angaben und besprechen nicht nur den Preis, sondern auch Laufzeit, Kündigungsfrist, Preisgarantie, Zahlungsweise und Bonusregeln."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Passenden Tarif auswählen",
      description: "Sie entscheiden in Ruhe, welches Angebot zu Ihnen passt. Vor Abschluss sehen Sie die relevanten Vertragsbedingungen und den möglichen Lieferbeginn."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel begleiten lassen",
      description: "Auf Wunsch unterstützen wir Sie bei den notwendigen Schritten und bleiben auch nach dem Wechsel Ihr Ansprechpartner."
    }
  ];

  const faqs = [
    {
      question: "Ist die Tarifberatung bei Energie Alemi kostenlos?",
      answer: "Ja. Energie Alemi weist die Beratung auf der Website als kostenlos aus. Vor einem Vertragsabschluss erhalten Sie die relevanten Tarif- und Vertragsinformationen."
    },
    {
      question: "Wird mein Strom beim Anbieterwechsel unterbrochen?",
      answer: "Nein. Die Energieversorgung bleibt beim Lieferantenwechsel sichergestellt. Der örtliche Netzbetreiber bleibt für das Stromnetz zuständig; geändert wird der Liefervertrag."
    },
    {
      question: "Welche Unterlagen brauche ich für den Vergleich?",
      answer: "Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Ihr Jahresverbrauch, die Zählernummer oder Marktlokations-ID, der bisherige Anbieter und Ihre Kundennummer."
    },
    {
      question: "Muss ich meinen alten Stromvertrag selbst kündigen?",
      answer: "In vielen Fällen übernimmt der neue Lieferant die Kündigung, wenn Sie ihn dazu bevollmächtigen. Bei Sonderkündigungen, einem Umzug oder sehr kurzen Fristen kann ein anderes Vorgehen nötig sein. Das klären wir im Einzelfall mit Ihnen."
    },
    {
      question: "Wie lange dauert der Anbieterwechsel?",
      answer: "Der konkrete Starttermin hängt vor allem von Mindestvertragslaufzeit, Kündigungsfrist und Bearbeitung der beteiligten Unternehmen ab. Vor dem Abschluss sollte der mögliche Lieferbeginn klar benannt sein."
    },
    {
      question: "Berät Energie Alemi auch Gewerbe- und Industriekunden?",
      answer: "Ja. Die Beratung richtet sich laut Energie Alemi an Privat-, Gewerbe- und Industriekunden. Der Vergleich wird an den jeweiligen Bedarf angepasst."
    },
    {
      question: "Kann ich beim Vergleich auch Ökostrom berücksichtigen?",
      answer: "Ja. Wenn die Stromherkunft für Sie wichtig ist, kann sie als Auswahlkriterium in den Vergleich einfließen. Entscheidend sind die konkreten Angaben und Bedingungen des jeweiligen Tarifs."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/stromanbieter-aachen" 
        title="Stromanbieter Aachen vergleichen | Energie Alemi"
        description="Stromtarife in Aachen vergleichen: Energie Alemi prüft Ihren Vertrag, findet passende Angebote und begleitet den Anbieterwechsel persönlich."
        image={elecHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText="Stromanbieter Aachen"
          title="Stromanbieter in Aachen vergleichen – persönlich beraten wechseln"
          description="Wir prüfen Ihren aktuellen Stromvertrag, vergleichen passende Tarife verschiedener Anbieter und begleiten Sie auf Wunsch durch den Wechsel. Persönlich in Aachen – für Privathaushalte, Gewerbe und Industrie."
          bgImage={elecHeroDesk}
          buttonText="Kostenlose Tarifberatung anfragen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'stromanbieter_aachen', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "Kostenlose Beratung" },
            { icon: <MapPin size={24} />, title: "Persönlich vor Ort in Aachen" },
            { icon: <Handshake size={24} />, title: "Begleitung beim Wechsel" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ein passender Stromtarif beginnt mit Ihrem tatsächlichen Bedarf</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            Ein niedriger Arbeitspreis allein macht noch keinen guten Stromvertrag. Entscheidend ist, wie der Tarif zu Ihrem Verbrauch, Ihrer gewünschten Laufzeit und Ihrer persönlichen Planung passt. Auch Grundpreis, Kündigungsfrist, Preisgarantie, Zahlungsweise und mögliche Bonusbedingungen sollten gemeinsam betrachtet werden.
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Energie Alemi nimmt sich Zeit für diese Details. Wir prüfen Ihre aktuelle Situation, vergleichen verschiedene Angebote und zeigen Ihnen verständlich, welche Konditionen langfristig relevant sind. So treffen Sie keine Entscheidung nur wegen eines kurzfristigen Lockpreises, sondern auf Basis eines nachvollziehbaren Gesamtpakets.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title="Tarifberatung direkt in Aachen – statt allein durch Vergleichslisten"
            subtitle="Online-Tarifrechner liefern viele Ergebnisse, beantworten aber nicht automatisch Ihre Fragen. Welche Laufzeit ist sinnvoll? Wie werden Boni berücksichtigt? Passt der Abschlag zum tatsächlichen Verbrauch? Und wann kann der bestehende Vertrag beendet werden? Bei Energie Alemi erhalten Sie eine persönliche Anlaufstelle in Aachen."
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
                        So funktioniert der <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Stromanbieterwechsel</span> in vier Schritten
                      </>
                    }
                    subtitle="Ein transparenter und einfacher Ablauf für Ihren neuen Stromtarif."
                    align="left"
                    className="mb-8"
                  />
                  <div className="bg-white dark:bg-[#122340] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 mt-8">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Für den Termin hilfreich</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Letzte Jahresabrechnung, aktueller Vertrag, Zählernummer oder Marktlokations-ID, bisherige Kundennummer und – falls vorhanden – ein aktueller Zählerstand.
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
            title="Darauf sollten Sie beim Stromvergleich achten"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Gesamtkosten", desc: "Grundpreis und Arbeitspreis gemeinsam betrachten – nicht nur einen Einzelwert." },
              { title: "Vertragslaufzeit", desc: "Prüfen, wie lange Sie gebunden sind und wie flexibel ein späterer Wechsel bleibt." },
              { title: "Kündigungsfrist", desc: "Den nächstmöglichen Kündigungstermin des bestehenden Vertrags berücksichtigen." },
              { title: "Preisgarantie", desc: "Genau ansehen, welche Preisbestandteile erfasst sind und wie lange die Garantie gilt." },
              { title: "Bonusbedingungen", desc: "Einmalige Boni nicht mit dauerhaft niedrigen Kosten verwechseln; auch das Folgejahr betrachten." },
              { title: "Zahlungsweise", desc: "Monatliche Abschläge sind in der Regel übersichtlicher als Vorkasse oder hohe Vorauszahlungen." },
              { title: "Stromherkunft", desc: "Wenn Ihnen erneuerbare Energien wichtig sind, den ausgewiesenen Strommix und die Tarifbedingungen prüfen." }
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
          <h2 className="text-3xl font-bold mb-6">Persönlich erreichbar im Zentrum von Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Sie möchten Ihren Stromvertrag nicht allein online vergleichen? Besuchen Sie Energie Alemi am Alexianergraben 9 in 52064 Aachen. Wir besprechen Ihre Situation persönlich und erklären die nächsten Schritte in verständlicher Sprache.
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
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Clock size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">Öffnungszeiten</h4>
              <p className="text-blue-100">Montag bis Samstag, 10:00–19:00 Uhr</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-30 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title="Häufige Fragen zum Stromanbieterwechsel in Aachen"
              subtitle="Alles, was Sie für Ihren Wechsel wissen müssen."
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Jetzt Stromtarife in Aachen prüfen lassen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Vereinbaren Sie Ihre kostenlose Tarifberatung bei Energie Alemi – persönlich am Alexianergraben 9 oder telefonisch unter 0176 659 493 90.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  KOSTENLOSE TARIFBERATUNG ANFRAGEN
                </Button>
                <a href="tel:017665949390" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0047AB] dark:border-[#f0a83f] text-[#0047AB] dark:text-[#f0a83f] font-semibold rounded-full hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#0a1628] transition-colors">
                  <Phone size={18} className="mr-2" />
                  JETZT ANRUFEN
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
