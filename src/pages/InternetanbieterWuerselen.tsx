import { Search, Wifi, MapPin, Phone, Building2, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import { trackEvent } from '../lib/analytics';
import SEO from "../components/SEO";
import internetHeroDesk from '../assets/internet hero desktop.webp';
import SectionHeader from '../components/ui/SectionHeader';

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function InternetanbieterWuerselen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wuerselenFaqs = [
    {
      question: "Ist Glasfaser in Würselen schon überall verfügbar?",
      answer: "Der Glasfaserausbau in Würselen schreitet voran, besonders in Neubaugebieten und Gewerbeparks. Die Verfügbarkeit hängt jedoch stark von Ihrer exakten Straße (z.B. in Bardenberg oder Broichweiden) ab. Wir führen vorab eine genaue Verfügbarkeitsprüfung durch."
    },
    {
      question: "Welche Internetgeschwindigkeit benötige ich als Familie?",
      answer: "Für eine vierköpfige Familie, die gleichzeitig streamt, arbeitet und spielt, empfehlen wir einen Anschluss mit mindestens 100 bis 250 Mbit/s. Das bietet genug Puffer für Lastspitzen."
    },
    {
      question: "Sollte ich DSL oder Kabel (Coax) in Würselen wählen?",
      answer: "Das kommt auf die Leitungsqualität in Ihrem Wohnhaus an. Kabel-Internet (z.B. über Vodafone) bietet oft höhere Geschwindigkeiten für weniger Geld, kann aber zu Spitzenzeiten anfälliger für Schwankungen sein. VDSL ist in der Regel stabiler. Wir beraten Sie objektiv."
    },
    {
      question: "Kümmert sich Energie Alemi auch um meinen neuen Router?",
      answer: "Ja, wir beraten Sie, ob es wirtschaftlicher ist, den Router beim Anbieter zu mieten oder ein eigenes Gerät (z.B. eine aktuelle FRITZ!Box) zu kaufen. Die Einrichtung müssen Sie jedoch selbst vornehmen oder einen IT-Service beauftragen."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#051024] min-h-screen">
      <SEO 
        url="/internetanbieter-wuerselen" 
        title="Internetanbieter Würselen: DSL, Kabel & Glasfaser vergleichen"
        description="Finden Sie das schnellste und günstigste Internet in Würselen. Kostenlose Beratung zu VDSL, Kabel und Glasfaser für Privathaushalte und Gewerbe."
        image={internetHeroDesk} 
        faqs={wuerselenFaqs} 
      />
      
      {/* Unique Header Style */}
      <section className="relative bg-[#00173A] dark:bg-[#030914] text-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={internetHeroDesk} alt="Internet Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
           <div className="flex items-center gap-2 mb-4 text-cyan-400 font-bold uppercase tracking-wider text-sm">
              <Wifi size={18} /> Breitbandausbau Würselen
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Schnelles Internet für <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zuhause und Büro</span>
           </h1>
           <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
             Die Auswahl an Internet-Tarifen ist riesig. Ob Glasfaser, VDSL oder Kabelinternet in Würselen – wir prüfen, was an Ihrer Adresse wirklich ankommt und wo Sie nicht für leere Versprechungen zahlen.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <button 
                onClick={() => {
                  setIsModalOpen(true);
                  trackEvent('service_cta_click', { service_type: 'internetanbieter_wuerselen_custom' });
                }}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-[#00173A] font-bold rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2"
             >
                <Search size={20} /> Verfügbarkeit prüfen
             </button>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
         
         {/* Context Section */}
         <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Stabile Verbindungen in Broichweiden, Bardenberg & Mitte</h2>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
               <p>
                 Nichts ist ärgerlicher als abbrechende Videokonferenzen im Home-Office oder ruckelnde Streams am Abend. In Würselen bieten Provider verschiedene Technologien (DSL über Telefonkabel, Kabelinternet über TV-Dosen und zunehmend Glasfaser) an.
               </p>
               <p>
                 Wir helfen Ihnen, das Kleingedruckte zu verstehen. Häufig locken <Link to="/ratgeber/internetanbieter-vergleichen" className="text-cyan-600 hover:underline">Telekommunikationsanbieter</Link> mit extrem günstigen ersten Monaten (z.B. 9,99€), aber ab dem 7. oder 13. Monat steigen die Preise drastisch an. Wir rechnen Ihnen den echten Durchschnittspreis (Effektivpreis) über die gesamte Mindestvertragslaufzeit aus.
               </p>
            </div>
         </div>

         {/* Two Column Process */}
         <SectionHeader title="Ablauf des Anbieterwechsels" align="center" className="mb-10" />
         <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-50 dark:bg-[#0f1d35] p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
               <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">1</div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">Leitungsprüfung</h3>
               <p className="text-slate-600 dark:text-slate-400">Teilen Sie uns Ihre genaue Adresse in Würselen mit. Wir checken parallel bei Telekom, Vodafone, O2, 1&1 und regionalen Glasfaseranbietern (wie NetAachen), welche Bandbreiten physisch verfügbar sind.</p>
            </div>
            <div className="bg-slate-50 dark:bg-[#0f1d35] p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
               <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">2</div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">Hardware & Optionen</h3>
               <p className="text-slate-600 dark:text-slate-400">Neben der Geschwindigkeit prüfen wir, ob Sie einen neuen Mietrouter brauchen, ob Sie Ihre alte Festnetznummer portieren möchten und ob TV-Optionen (IPTV) sinnvoll sind.</p>
            </div>
            <div className="bg-slate-50 dark:bg-[#0f1d35] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 md:col-span-2">
               <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">3</div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">Der Wechsel (Portierung)</h3>
               <p className="text-slate-600 dark:text-slate-400">Wir beauftragen den neuen Anbieter mit der Kündigung bei Ihrem alten Versorger. Das garantiert, dass die Leitung am Umschalttag ohne Unterbrechung weiterläuft und Ihre Telefonnummer sicher übertragen wird.</p>
            </div>
         </div>

         {/* Target Groups List */}
         <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center dark:text-white">Unser Fokus in Würselen</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 bg-white dark:bg-[#0a1628] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <HomeIcon className="text-cyan-500 shrink-0 mt-1" size={24} />
                 <div>
                    <strong className="block text-lg dark:text-white">Privathaushalte</strong>
                    <span className="text-slate-600 dark:text-slate-400">Von VDSL 50 für Singles bis zu Gigabit-Kabel für Familien mit vielen Geräten.</span>
                 </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white dark:bg-[#0a1628] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <Building2 className="text-cyan-500 shrink-0 mt-1" size={24} />
                 <div>
                    <strong className="block text-lg dark:text-white">Gewerbe (Kaninsberg & Co.)</strong>
                    <span className="text-slate-600 dark:text-slate-400">Symmetrische Glasfaseranschlüsse (SDSL), feste IP-Adressen und Business-Service-Level-Agreements (SLA) zur Ausfallsicherheit.</span>
                 </div>
              </li>
            </ul>
         </div>

         {/* Custom FAQ */}
         <div className="bg-white dark:bg-[#0a1628] p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
             <h3 className="text-3xl font-bold mb-8 dark:text-white">Ihre Fragen zu Internet in Würselen</h3>
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

         <div className="mt-16 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Kostenlose Beratung anfordern</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-xl text-center">Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden <Link to="/stromanbieter-wuerselen" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Stromanbieter in Würselen</Link> oder <Link to="/gasanbieter-wuerselen" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Gasanbieter in Würselen</Link> zu finden.</p>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-xl text-center">
              Lassen Sie sich von unserem Expertenteam in Aachen neutral und unabhängig zu den besten Breitbandtarifen für Würselen beraten.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <a href="tel:017665949390" className="flex items-center gap-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors">
                  <Phone size={20} /> 0176 659 493 90
               </a>
               <Link to="/contact" className="flex items-center gap-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors">
                  <MapPin size={20} /> Zum Kontaktformular
               </Link>
            </div>
         </div>
      </div>
      
      {isModalOpen && (
        <Suspense fallback={null}>
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Internet" />
        </Suspense>
      )}
    </div>
  );
}
