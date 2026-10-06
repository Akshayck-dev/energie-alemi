import re

content = """import { Search, Zap, ShieldCheck, MapPin, Phone, Building2, Home as HomeIcon, CheckCircle2, Factory } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import { trackEvent } from '../lib/analytics';
import SEO from "../components/SEO";
import elecHeroDesk from '../assets/electricity hero desk.webp';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function StromanbieterWuerselen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wuerselenFaqs = [
    {
      question: "Ich ziehe nach Broichweiden. Wann sollte ich mich um den Strom kümmern?",
      answer: "Ideal ist es, 2-4 Wochen vor Schlüsselübergabe aktiv zu werden. In Broichweiden und dem restlichen Würselen gibt es neben dem Grundversorger viele Alternativen, die oft bessere Konditionen bieten. Wir empfehlen, nicht einfach in die Ersatzversorgung zu rutschen."
    },
    {
      question: "Warum gibt es Preisunterschiede zwischen Würselen und Aachen?",
      answer: "Jede Kommune hat leicht unterschiedliche Netzentgelte. Auch wenn Würselen direkt an Aachen grenzt, kalkulieren die Energieversorger diese lokalen Durchleitungsgebühren in den Kilowattstundenpreis ein. Daher benötigt man einen exakten Vergleich für die Würselener Postleitzahl."
    },
    {
      question: "Lohnt sich ein Wechselbetreuungsservice für mein Gewerbe am Kaninsberg?",
      answer: "Absolut. Das Gewerbegebiet Kaninsberg/Aachener Kreuz ist energieintensiv. Durch unsere jährliche Wechselbetreuung verpassen Sie keine Kündigungsfristen mehr und profitieren fortlaufend von günstigen Konditionen."
    },
    {
      question: "Unterstützt Energie Alemi bei der Installation von Smart Metern in Würselen?",
      answer: "Wir beraten Sie, welche Tarife von Smart Metern (intelligenten Messsystemen) profitieren, wie beispielsweise dynamische Stromtarife. Den eigentlichen Einbau übernimmt jedoch Ihr lokaler Messstellenbetreiber."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#051024] min-h-screen">
      <SEO 
        url="/stromanbieter-wuerselen" 
        title="Stromanbieter Würselen: Lokale Beratung & Tarifwechsel | Energie Alemi"
        description="Wechseln Sie Ihren Stromanbieter in Würselen ohne Aufwand. Unabhängige Tarifberatung für Haushalte in Broichweiden, Bardenberg, Mitte und Gewerbe am Aachener Kreuz."
        image={elecHeroDesk} 
        faqs={wuerselenFaqs} 
      />
      
      {/* Custom Hero for Wuerselen */}
      <section className="relative bg-[#00173A] dark:bg-[#030914] text-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={elecHeroDesk} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
           <div className="flex items-center gap-2 mb-4 text-amber-500 font-bold uppercase tracking-wider text-sm">
              <Zap size={18} /> Stromtarife in Würselen
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Transparenter Stromwechsel <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">für die Region Würselen</span>
           </h1>
           <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
             Als unabhängiger Berater helfen wir Familien in Bardenberg, Bewohnern in Würselen-Mitte und Unternehmen am Aachener Kreuz dabei, versteckte Kosten zu vermeiden und langfristig sichere Stromtarife zu finden. Wir übernehmen den gesamten Wechselprozess für Sie.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <button 
                onClick={() => {
                  setIsModalOpen(true);
                  trackEvent('service_cta_click', { service_type: 'stromanbieter_wuerselen_custom' });
                }}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-[#00173A] font-bold rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2"
             >
                <Search size={20} /> Jetzt Tarife prüfen
             </button>
           </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
         
         {/* Story / Intro */}
         <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Sichere Stromversorgung ohne Preis-Schock</h2>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
               <p>
                 Würselen ist durch seine zentrale Lage ein dynamischer Wohn- und Wirtschaftsstandort. Viele Verbraucher zahlen jedoch aus Gewohnheit den teuren Grundversorgungstarif.
                 Ein regelmäßiger Stromvergleich schützt Sie vor teuren Überraschungen, wenn Preisgarantien auslaufen.
               </p>
               <p>
                 Unser Ansatz: Wir prüfen nicht nur das erste Vertragsjahr mit Neukundenboni, sondern kalkulieren die echten Kosten für Ihre persönliche Situation. Gerade für <Link to="/ratgeber/stromkosten-berechnen" className="text-amber-600 hover:underline">Vielverbraucher oder Familien</Link> machen wenige Cent Unterschied beim Arbeitspreis am Jahresende hunderte Euro aus.
               </p>
            </div>
         </div>

         {/* Grid Layout for Process */}
         <SectionHeader title="So funktioniert unser Service" align="center" className="mb-10" />
         <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-blue-50 dark:bg-[#0f1d35] p-8 rounded-2xl">
               <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                  1
               </div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">Analyse Ihrer Situation</h3>
               <p className="text-slate-600 dark:text-slate-400">Wir schauen uns Ihre letzte Stromrechnung an. Liegt Ihr Verbrauch im Durchschnitt? Sind Sie in Bardenberg oder Broichweiden gemeldet?</p>
            </div>
            <div className="bg-blue-50 dark:bg-[#0f1d35] p-8 rounded-2xl">
               <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                  2
               </div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">Tarif-Matching</h3>
               <p className="text-slate-600 dark:text-slate-400">Wir filtern die verfügbaren Angebote in Würselen nach strengen Kriterien: keine Vorauskasse, sichere Preisgarantie, faire Kündigungsfristen.</p>
            </div>
            <div className="bg-blue-50 dark:bg-[#0f1d35] p-8 rounded-2xl">
               <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                  3
               </div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">Nahtloser Wechsel</h3>
               <p className="text-slate-600 dark:text-slate-400">Mit Ihrer Zustimmung übernehmen wir die Kündigung beim alten Anbieter und melden Sie nahtlos beim neuen Versorger an.</p>
            </div>
         </div>

         {/* Target Groups */}
         <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="flex-1">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 dark:text-white">
                 <HomeIcon className="text-amber-500" /> Privatkunden
               </h3>
               <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                 Egal ob Sie in eine Wohnung in der Kaiserstraße ziehen oder ein Eigenheim in Linden-Neusen bauen: Wir finden den passenden Haushaltstarif. Wir berücksichtigen auch spezielle Zählerkonfigurationen wie Nachtspeicherheizungen.
               </p>
            </div>
            <div className="flex-1">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 dark:text-white">
                 <Factory className="text-amber-500" /> Gewerbebetriebe
               </h3>
               <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                 Für das Gewerbegebiet Kaninsberg und ansässige Betriebe verhandeln wir maßgeschneiderte Konditionen. Gewerbestromtarife erfordern oft eine genaue Lastprofilanalyse, bei der wir als unabhängiger Berater unterstützen.
               </p>
            </div>
         </div>

         {/* Custom FAQ */}
         <div className="bg-white dark:bg-[#0a1628] p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
             <h3 className="text-3xl font-bold mb-8 dark:text-white">Häufig gestellte Fragen (Würselen)</h3>
             <div className="space-y-6">
                {wuerselenFaqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0 last:pb-0">
                     <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-2">
                       <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                       {faq.question}
                     </h4>
                     <p className="text-slate-600 dark:text-slate-400 pl-7">{faq.answer}</p>
                  </div>
                ))}
             </div>
         </div>

         <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Persönliche Beratung in Aachen</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Unser Büro liegt in Aachen (Alexianergraben 9). Sie können uns schnell aus Würselen erreichen oder ganz bequem telefonisch beraten werden.
            </p>
            <div className="flex justify-center gap-6">
               <a href="tel:017665949390" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline">
                  <Phone size={20} /> 0176 659 493 90
               </a>
               <Link to="/contact" className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold hover:underline">
                  <MapPin size={20} /> Termin vereinbaren
               </Link>
            </div>
         </div>
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

with open("src/pages/StromanbieterWuerselen.tsx", "w") as f:
    f.write(content)
