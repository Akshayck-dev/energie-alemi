import { Search, Wifi, MapPin, Phone, Building2, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import { trackEvent } from '../lib/analytics';
import SEO from "../components/SEO";
import { useTranslation } from 'react-i18next';
import internetHeroDesk from '../assets/internet hero desktop.webp';
import SectionHeader from '../components/ui/SectionHeader';

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function InternetanbieterWuerselen() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wuerselenFaqs = [
    {
      question: i18n.language === 'en' ? "Is fibre already available everywhere in Würselen?" : "Ist Glasfaser in Würselen schon überall verfügbar?",
      answer: i18n.language === 'en' ? "Fibre expansion in Würselen is progressing, especially in new development areas and business parks. Availability, however, depends heavily on your exact street (e.g. in Bardenberg or Broichweiden), so we carry out a precise availability check in advance." : "Der Glasfaserausbau in Würselen schreitet voran, besonders in Neubaugebieten und Gewerbeparks. Die Verfügbarkeit hängt jedoch stark von Ihrer exakten Straße (z.B. in Bardenberg oder Broichweiden) ab. Wir führen vorab eine genaue Verfügbarkeitsprüfung durch."
    },
    {
      question: i18n.language === 'en' ? "What internet speed do I need as a family?" : "Welche Internetgeschwindigkeit benötige ich als Familie?",
      answer: i18n.language === 'en' ? "For a family of four that streams, works and plays simultaneously, we recommend a connection of at least 100 to 250 Mbit/s. That offers enough buffer for peak loads." : "Für eine vierköpfige Familie, die gleichzeitig streamt, arbeitet und spielt, empfehlen wir einen Anschluss mit mindestens 100 bis 250 Mbit/s. Das bietet genug Puffer für Lastspitzen."
    },
    {
      question: i18n.language === 'en' ? "Should I choose DSL or cable (coax) in Würselen?" : "Sollte ich DSL oder Kabel (Coax) in Würselen wählen?",
      answer: i18n.language === 'en' ? "It depends on the line quality in your residential building. Cable internet often offers higher speeds for less money but can be more prone to fluctuations at peak times; VDSL is generally more stable. We advise you objectively." : "Das kommt auf die Leitungsqualität in Ihrem Wohnhaus an. Kabel-Internet (z.B. über Vodafone) bietet oft höhere Geschwindigkeiten für weniger Geld, kann aber zu Spitzenzeiten anfälliger für Schwankungen sein. VDSL ist in der Regel stabiler. Wir beraten Sie objektiv."
    },
    {
      question: i18n.language === 'en' ? "Does Energie Alemi also take care of my new router?" : "Kümmert sich Energie Alemi auch um meinen neuen Router?",
      answer: i18n.language === 'en' ? "Yes, we advise you whether it is more economical to rent the router from the provider or to buy your own device (e.g. a current FRITZ!Box). You carry out the setup yourself or commission an IT service." : "Ja, wir beraten Sie, ob es wirtschaftlicher ist, den Router beim Anbieter zu mieten oder ein eigenes Gerät (z.B. eine aktuelle FRITZ!Box) zu kaufen. Die Einrichtung müssen Sie jedoch selbst vornehmen oder einen IT-Service beauftragen."
    },
  
    {
      question: i18n.language === 'en' ? "Is switching internet providers in Würselen associated with downtimes?" : "Ist ein Wechsel des Internetanbieters in Würselen mit Ausfallzeiten verbunden?",
      answer: i18n.language === 'en' ? "No, for a regular provider switch the law stipulates that downtime may not exceed one working day. In practice the changeover usually runs smoothly, so you stay online in Würselen with virtually no interruption." : "Nein, bei einem regulären Anbieterwechsel ist gesetzlich geregelt, dass die Ausfallzeit maximal einen Arbeitstag betragen darf. In der Praxis verläuft die Umschaltung meist fließend, sodass Sie in Würselen nahezu unterbrechungsfrei online bleiben."
    },
    {
      question: i18n.language === 'en' ? "Is switching internet providers in Würselen associated with downtimes?" : "Ist ein Wechsel des Internetanbieters in Würselen mit Ausfallzeiten verbunden?",
      answer: i18n.language === 'en' ? "No, for a regular provider switch the law stipulates that downtime may not exceed one working day. In practice the changeover usually runs smoothly, so you stay online in Würselen with virtually no interruption." : "Nein, bei einem regulären Anbieterwechsel ist gesetzlich geregelt, dass die Ausfallzeit maximal einen Arbeitstag betragen darf. In der Praxis verläuft die Umschaltung meist fließend, sodass Sie in Würselen nahezu unterbrechungsfrei online bleiben."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#051024] min-h-screen">
      <SEO 
        url="/internetanbieter-wuerselen" 
        title={i18n.language === 'en' ? "Compare Internet Tariffs in Würselen | Energie Alemi" : "Internetanbieter Würselen: DSL, Kabel & Glasfaser vergleichen"}
        description={i18n.language === 'en' ? "Compare internet in Würselen with personal advice: fibre, VDSL and cable checked for your exact address, with real effective prices. Free advice at Energie Alemi." : "Internetanbieter in Würselen vergleichen: DSL, Kabel & Glasfaser. Kostenlose Bedarfsanalyse, persönliche Beratung – 5,0★ auf Google."}
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
              <Wifi size={18} /> {i18n.language === 'en' ? "Broadband expansion Würselen" : "Breitbandausbau Würselen"}
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              {i18n.language === 'en' ? <>Fast internet <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">for home and office in Würselen</span></> : <>Schnelles Internet für <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zuhause und Büro</span></>}
           </h1>
           <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
             {i18n.language === 'en' ? "The choice of internet tariffs is huge. Whether fibre, VDSL or cable internet in Würselen — we check what actually arrives at your address and where you are not paying for empty promises." : "Die Auswahl an Internet-Tarifen ist riesig. Ob Glasfaser, VDSL oder Kabelinternet in Würselen – wir prüfen, was an Ihrer Adresse wirklich ankommt und wo Sie nicht für leere Versprechungen zahlen."}
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <button 
                onClick={() => {
                  setIsModalOpen(true);
                  trackEvent('service_cta_click', { service_type: 'internetanbieter_wuerselen_custom' });
                }}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-[#00173A] font-bold rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2"
             >
                <Search size={20} /> {i18n.language === 'en' ? "Check availability" : "Verfügbarkeit prüfen"}
             </button>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
         
         {/* Context Section */}
         <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? "Stable connections in Broichweiden, Bardenberg and Mitte" : "Stabile Verbindungen in Broichweiden, Bardenberg & Mitte"}</h2>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
               <p>
                 {i18n.language === 'en' ? "Nothing is more annoying than video conferences dropping out in the home office or streams stuttering in the evening. In Würselen, providers offer different technologies — DSL over the telephone cable, cable internet over the TV socket and increasingly fibre." : "Nichts ist ärgerlicher als abbrechende Videokonferenzen im Home-Office oder ruckelnde Streams am Abend. In Würselen bieten Provider verschiedene Technologien (DSL über Telefonkabel, Kabelinternet über TV-Dosen und zunehmend Glasfaser) an."}
               </p>
               <p>
                 {i18n.language === 'en' ? <>We help you understand the small print. Telecommunications providers often lure customers with extremely cheap first months (e.g. €9.99), but from the 7th or 13th month the prices rise drastically. We calculate the real average price (effective price) over the entire minimum contract term for you, so you can compare offers honestly instead of comparing promotional months.</> : <>Wir helfen Ihnen, das Kleingedruckte zu verstehen. Häufig locken <Link to="/ratgeber/internetanbieter-vergleichen" className="text-cyan-600 hover:underline">Telekommunikationsanbieter</Link> mit extrem günstigen ersten Monaten (z.B. 9,99€), aber ab dem 7. oder 13. Monat steigen die Preise drastisch an. Wir rechnen Ihnen den echten Durchschnittspreis (Effektivpreis) über die gesamte Mindestvertragslaufzeit aus.</>}
               </p>
            </div>
         </div>

         {/* Two Column Process */}
         
         <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? "Local expertise for Würselen and surroundings" : "Lokale Expertise für Würselen und Umgebung"}</h2>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
               <p>Die Stadt Würselen mit ihren Ortsteilen Bardenberg, Broichweiden und Würselen-Mitte zeichnet sich durch eine hohe Lebensqualität und eine starke wirtschaftliche Dynamik aus. Insbesondere die exzellente Lage am Aachener Kreuz und die direkte Nachbarschaft zu Aachen und Herzogenrath machen die Region attraktiv. Diese positive Entwicklung spiegelt sich auch im wachsenden Bedarf an schnellen, stabilen Internetverbindungen wider – sowohl für das private Home-Office als auch für lokale Gewerbebetriebe.</p>
               <p>Als Ihr Berater aus der Region kennen wir die Herausforderungen des lokalen Breitbandausbaus. Die Verfügbarkeit von VDSL, Kabel-Internet oder Glasfaser kann selbst innerhalb von Würselen von Straße zu Straße variieren. Deshalb verlassen wir uns nicht auf pauschale Werbeversprechen, sondern führen für Ihre genaue Adresse eine detaillierte Verfügbarkeitsprüfung durch. Egal ob Sie in Bardenberg wohnen oder ein Büro in Broichweiden betreiben – wir finden die Technologie und den Anbieter, der Ihnen die versprochene Leistung auch tatsächlich liefert. Wir übernehmen die Kommunikation mit den Providern und sorgen für einen reibungslosen Wechsel, damit Sie stets optimal vernetzt bleiben.</p>
                           <p>Neben der reinen Anschlussgeschwindigkeit legen wir in Würselen großen Wert auf Stabilität und verlässlichen Service. Egal ob Sie für Ihr Home-Office auf eine konstante Upload-Rate angewiesen sind oder abends mit der ganzen Familie ruckelfrei streamen möchten – die Wahl des richtigen Routers und die passenden Vertragsoptionen machen den Unterschied. Wir helfen Ihnen auch bei komplexeren Anforderungen, etwa wenn Sie Ihre alte Festnetznummer portieren möchten oder spezifische TV-Pakete benötigen. Durch unseren lokalen Fokus wissen wir aus Erfahrung, welche Anbieter in welchen Teilen von Würselen, sei es in Broichweiden oder am Aachener Kreuz, ihre Leistungsversprechen auch wirklich in der Praxis einhalten.</p>
            </div>
         </div>

         <SectionHeader title={i18n.language === 'en' ? "How the provider switch works – in three steps" : "Ablauf des Anbieterwechsels"} align="center" className="mb-10" />
         <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-50 dark:bg-[#0f1d35] p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
               <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">1</div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">{i18n.language === 'en' ? "Line check" : "Leitungsprüfung"}</h3>
               <p className="text-slate-600 dark:text-slate-400">{i18n.language === 'en' ? "Tell us your exact address in Würselen. We check in parallel with Telekom, Vodafone, O2, 1&1 and regional fibre providers (such as NetAachen) which bandwidths are physically available." : "Teilen Sie uns Ihre genaue Adresse in Würselen mit. Wir checken parallel bei Telekom, Vodafone, O2, 1&1 und regionalen Glasfaseranbietern (wie NetAachen), welche Bandbreiten physisch verfügbar sind."}</p>
            </div>
            <div className="bg-slate-50 dark:bg-[#0f1d35] p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
               <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">2</div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">{i18n.language === 'en' ? "Hardware and options" : "Hardware & Optionen"}</h3>
               <p className="text-slate-600 dark:text-slate-400">{i18n.language === 'en' ? "Alongside speed, we check whether you need a new rental router, whether you want to port your old landline number and whether TV options (IPTV) make sense." : "Neben der Geschwindigkeit prüfen wir, ob Sie einen neuen Mietrouter brauchen, ob Sie Ihre alte Festnetznummer portieren möchten und ob TV-Optionen (IPTV) sinnvoll sind."}</p>
            </div>
            <div className="bg-slate-50 dark:bg-[#0f1d35] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 md:col-span-2">
               <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">3</div>
               <h3 className="text-xl font-bold mb-3 dark:text-white">{i18n.language === 'en' ? "The switch (porting)" : "Der Wechsel (Portierung)"}</h3>
               <p className="text-slate-600 dark:text-slate-400">{i18n.language === 'en' ? "We instruct the new provider to cancel with your old supplier. This guarantees that the line keeps running without interruption on the changeover day and that your telephone number is transferred securely." : "Wir beauftragen den neuen Anbieter mit der Kündigung bei Ihrem alten Versorger. Das garantiert, dass die Leitung am Umschalttag ohne Unterbrechung weiterläuft und Ihre Telefonnummer sicher übertragen wird."}</p>
            </div>
         </div>

         {/* Target Groups List */}
         <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center dark:text-white">{i18n.language === 'en' ? "Our focus in Würselen" : "Unser Fokus in Würselen"}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 bg-white dark:bg-[#0a1628] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <HomeIcon className="text-cyan-500 shrink-0 mt-1" size={24} />
                 <div>
                    <strong className="block text-lg dark:text-white">{i18n.language === 'en' ? "Private households" : "Privathaushalte"}</strong>
                    <span className="text-slate-600 dark:text-slate-400">{i18n.language === 'en' ? "From VDSL 50 for singles to gigabit cable for families with many devices." : "Von VDSL 50 für Singles bis zu Gigabit-Kabel für Familien mit vielen Geräten."}</span>
                 </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white dark:bg-[#0a1628] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <Building2 className="text-cyan-500 shrink-0 mt-1" size={24} />
                 <div>
                    <strong className="block text-lg dark:text-white">{i18n.language === 'en' ? "Business (Kaninsberg & Co.)" : "Gewerbe (Kaninsberg & Co.)"}</strong>
                    <span className="text-slate-600 dark:text-slate-400">{i18n.language === 'en' ? "Symmetrical fibre connections (SDSL), fixed IP addresses and business service-level agreements (SLA) for failure security." : "Symmetrische Glasfaseranschlüsse (SDSL), feste IP-Adressen und Business-Service-Level-Agreements (SLA) zur Ausfallsicherheit."}</span>
                 </div>
              </li>
            </ul>
         </div>

         {/* Custom FAQ */}
         <div className="bg-white dark:bg-[#0a1628] p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
             <h3 className="text-3xl font-bold mb-8 dark:text-white">{i18n.language === 'en' ? "Your questions about internet in Würselen" : "Ihre Fragen zu Internet in Würselen"}</h3>
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
            <h3 className="text-2xl font-bold mb-4 dark:text-white">{i18n.language === 'en' ? "Request free advice" : "Kostenlose Beratung anfordern"}</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-xl text-center">{i18n.language === 'en' ? <>By the way: In addition to internet advice, we also help you find the right <Link to="/stromanbieter-wuerselen" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">electricity provider in Würselen</Link> or <Link to="/gasanbieter-wuerselen" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">gas provider in Würselen</Link>.</> : <>Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden <Link to="/stromanbieter-wuerselen" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Stromanbieter in Würselen</Link> oder <Link to="/gasanbieter-wuerselen" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Gasanbieter in Würselen</Link> zu finden.</>}</p>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-xl text-center">
              {i18n.language === 'en' ? "Let our expert team in Aachen advise you neutrally and independently on the best broadband tariffs for Würselen." : "Lassen Sie sich von unserem Expertenteam in Aachen neutral und unabhängig zu den besten Breitbandtarifen für Würselen beraten."}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <a href="tel:017665949390" className="flex items-center gap-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors">
                  <Phone size={20} /> 0176 659 493 90
               </a>
               <Link to="/contact" className="flex items-center gap-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors">
                  <MapPin size={20} /> {i18n.language === 'en' ? "To the contact form" : "Zum Kontaktformular"}
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
