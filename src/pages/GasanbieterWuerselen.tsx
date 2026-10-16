import { Search, Flame, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import { trackEvent } from '../lib/analytics';
import SEO from "../components/SEO";
import { useTranslation } from 'react-i18next';
import gasHeroDesk from '../assets/gas hero desk.webp';
import SectionHeader from '../components/ui/SectionHeader';

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function GasanbieterWuerselen() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wuerselenFaqs = [
    {
      question: i18n.language === 'en' ? "Who is the local basic supplier for gas in Würselen?" : "Wer ist der lokale Grundversorger für Gas in Würselen?",
      answer: i18n.language === 'en' ? "The basic gas supply in Würselen (postcode 52146) is provided by EWV Energie- und Wasser-Versorgung GmbH. You do not have to stay in the basic supply, however: switching providers can noticeably reduce your annual heating costs." : "Die lokale Grundversorgung in Würselen stellt der örtliche Grundversorger sicher. Allerdings sind Sie nicht verpflichtet, dort zu bleiben. Ein Anbieterwechsel kann Ihre jährlichen Heizkosten deutlich reduzieren."
    },
    {
      question: i18n.language === 'en' ? "I heat with oil in Bardenberg and want to switch to gas. Can you help?" : "Ich heize in Bardenberg noch mit Öl und möchte auf Gas umstellen. Helfen Sie dabei?",
      answer: i18n.language === 'en' ? "We can advise you on choosing a suitable gas provider as soon as the network connection is in place. For the physical conversion of the heating system, please contact a local heating installer." : "Wir können Sie bei der Wahl des passenden Gasanbieters beraten, sobald der Netzanschluss steht. Für die physische Umrüstung der Heizungsanlage wenden Sie sich bitte an einen lokalen Heizungsinstallateur."
    },
    {
      question: i18n.language === 'en' ? "How do I calculate my gas consumption for a terraced house in Broichweiden?" : "Wie berechne ich meinen Gasverbrauch für ein Reihenhaus in Broichweiden?",
      answer: i18n.language === 'en' ? "If you do not yet have a previous year's bill, we use a rule of thumb of approx. 140 to 160 kWh per square metre of living space per year. For 120 square metres, that would be about 16,800 to 19,200 kWh of gas." : "Wenn Sie noch keine Vorjahresrechnung haben, rechnen wir als Faustformel mit ca. 140 bis 160 kWh pro Quadratmeter Wohnfläche im Jahr. Bei 120 Quadratmetern wären das etwa 16.800 bis 19.200 kWh Gas."
    },
    {
      question: i18n.language === 'en' ? "Do you also offer biogas for Würselen?" : "Bieten Sie auch Biogas für Würselen an?",
      answer: i18n.language === 'en' ? "Yes, we have tariffs in our portfolio that include a fixed share of biogas or are CO₂-compensated through climate protection projects. Just mention it during the consultation." : "Ja, wir haben Tarife im Portfolio, die einen festen Anteil an Biogas beinhalten oder durch Klimaschutzprojekte CO2-kompensiert sind. Sprechen Sie uns bei der Beratung einfach darauf an."
    },
  
    {
      question: i18n.language === 'en' ? "Is switching gas providers worthwhile even for small flats in Würselen-Mitte?" : "Lohnt sich ein Wechsel des Gasanbieters auch bei kleinen Wohnungen in Würselen-Mitte?",
      answer: i18n.language === 'en' ? "Absolutely. Even with lower consumption in a flat, switching to a cheaper tariff often yields noticeable savings, as providers' monthly basic prices also vary greatly." : "Absolut. Auch bei einem geringeren Verbrauch in einer Etagenwohnung lassen sich durch den Wechsel in einen günstigeren Tarif oft spürbare Einsparungen erzielen, da auch die monatlichen Grundpreise der Anbieter stark variieren."
    },
    {
      question: i18n.language === 'en' ? "Is switching gas providers worthwhile even for small flats in Würselen-Mitte?" : "Lohnt sich ein Wechsel des Gasanbieters auch bei kleinen Wohnungen in Würselen-Mitte?",
      answer: i18n.language === 'en' ? "Absolutely. Even with lower consumption in a flat, switching to a cheaper tariff often yields noticeable savings, as providers' monthly basic prices also vary greatly." : "Absolut. Auch bei einem geringeren Verbrauch in einer Etagenwohnung lassen sich durch den Wechsel in einen günstigeren Tarif oft spürbare Einsparungen erzielen, da auch die monatlichen Grundpreise der Anbieter stark variieren."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#051024] min-h-screen">
      <SEO 
        url="/gasanbieter-wuerselen" 
        title={i18n.language === 'en' ? "Compare Gas Providers in Würselen | Energie Alemi" : "Gasanbieter Würselen: Günstige Gastarife finden | Energie Alemi"}
        description={i18n.language === 'en' ? "Compare gas tariffs in Würselen with personal advice for Mitte, Bardenberg and Broichweiden. Energie Alemi checks real heating costs and price guarantees. Free advice." : "Gasanbieter in Würselen vergleichen – Anbieterwechsel kostenlos & unverbindlich. Persönliche Beratung vor Ort, 5,0★ auf Google."}
        image={gasHeroDesk} 
        faqs={wuerselenFaqs} 
      />
      
      <section className="relative bg-[#00173A] dark:bg-[#030914] text-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={gasHeroDesk} alt="Gas Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
           <div className="flex items-center gap-2 mb-4 text-orange-500 font-bold uppercase tracking-wider text-sm">
              <Flame size={18} /> {i18n.language === 'en' ? "Gas supply Würselen" : "Gasversorgung Würselen"}
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              {i18n.language === 'en' ? <>Lower your heating costs <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">with the right gas tariff</span></> : <>Heizkosten senken mit <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">dem perfekten Gastarif</span></>}
           </h1>
           <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
             {i18n.language === 'en' ? "Heating does not have to be expensive. Whether in an older building in Würselen-Mitte or a new home in Bardenberg — we filter the tariff jungle for the best gas providers for your postcode." : "Heizen muss nicht teuer sein. Egal ob Altbau in Würselen-Mitte oder neues Eigenheim in Bardenberg – wir filtern den Tarif-Dschungel nach den besten Gasanbietern für Ihre Postleitzahl."}
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <button 
                onClick={() => {
                  setIsModalOpen(true);
                  trackEvent('service_cta_click', { service_type: 'gasanbieter_wuerselen_custom' });
                }}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2"
             >
                <Search size={20} /> {i18n.language === 'en' ? "Start gas comparison" : "Gasvergleich starten"}
             </button>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
         
         <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? "Why switching in Würselen is worthwhile" : "Warum sich der Wechsel in Würselen lohnt"}</h2>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
               <p>
                 {i18n.language === 'en' ? "Due to the geopolitical changes of recent years, gas prices have been subject to strong fluctuations. Anyone who stays in the basic supply often gives away hundreds of euros per year." : "Durch die geopolitischen Veränderungen der letzten Jahre sind die Gaspreise starken Schwankungen unterworfen. Wer in der Grundversorgung verbleibt, verschenkt oft hunderte Euro pro Jahr."}
               </p>
               <p>
                 {i18n.language === 'en' ? <>We help you find a contract with a <Link to="/ratgeber/gaspreise-verstehen" className="text-orange-600 hover:underline">robust price guarantee</Link>, so you effectively protect yourself against sudden price adjustments in winter. Our local focus on the Aachen/Würselen region means we know the network operator structures exactly.</> : <>Wir helfen Ihnen, einen Vertrag mit <Link to="/ratgeber/gaspreise-verstehen" className="text-orange-600 hover:underline">robuster Preisgarantie</Link> zu finden. So schützen Sie sich effektiv vor plötzlichen Preisanpassungen im Winter. Unser lokaler Fokus auf die Region Aachen/Würselen bedeutet, dass wir die Netzbetreiberstrukturen genau kennen.</>}
               </p>
            </div>
         </div>

         
         <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? "Local expertise for Würselen and surroundings" : "Lokale Expertise für Würselen und Umgebung"}</h2>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
               <p>Würselen ist mit seinen lebendigen Ortsteilen wie Bardenberg, Broichweiden und Würselen-Mitte eine gefragte Wohn- und Wirtschaftsregion. Durch die direkte Nähe zu Aachen und Herzogenrath sowie die hervorragende Anbindung am Aachener Kreuz wächst die Stadt kontinuierlich. Für viele Familien und Unternehmen stellt die Gasversorgung jedoch einen erheblichen Kostenfaktor dar, insbesondere in den Wintermonaten.</p>
               <p>Unsere regionale Nähe erlaubt es uns, die Besonderheiten des lokalen Marktes genau zu verstehen. Oftmals verbleiben Haushalte aus reiner Gewohnheit in teuren Altverträgen, während sich die Preise am Markt längst entspannt haben. Wir helfen Ihnen, diese Preisunterschiede transparent zu machen. Egal ob Sie ein klassisches Reihenhaus in Broichweiden oder eine Gewerbeimmobilie am Aachener Kreuz beheizen – wir finden den Gastarif, der genau zu Ihrem Verbrauchsverhalten passt. Ein Wechsel ist unkompliziert und wird von uns komplett begleitet, sodass Sie sich um keine administrativen Hürden kümmern müssen. So kombinieren Sie regionale Verbundenheit mit messbaren finanziellen Einsparungen bei Ihren Heizkosten.</p>
                           <p>Ein weiterer großer Vorteil für Haushalte in Würselen ist unser umfassender Wechselservice. Von der ersten Prüfung Ihrer Jahresabrechnung bis hin zur Übermittlung des Zählerstands an den neuen Versorger kümmern wir uns um alle administrativen Details. Besonders in älteren Wohngebäuden in Würselen-Mitte oder historischen Immobilien in Bardenberg kann ein optimierter Gastarif entscheidend zur Entlastung der Haushaltskasse beitragen. Darüber hinaus beraten wir Sie gerne zu Tarifen mit robuster Preisgarantie, die Sie zuverlässig vor unerwarteten Preissprüngen in der nächsten Heizperiode schützen. So verbinden wir echten lokalen Service mit maximaler Sicherheit für Ihr Budget.</p>
            </div>
         </div>

         <SectionHeader title={i18n.language === 'en' ? "Step by step to your new gas provider" : "Schritt für Schritt zum neuen Gasanbieter"} align="center" className="mb-10" />
         <div className="flex flex-col gap-6 mb-20">
            <div className="flex flex-col md:flex-row items-center bg-blue-50 dark:bg-[#0f1d35] p-6 rounded-2xl gap-6 border-l-4 border-orange-500">
               <div className="w-16 h-16 shrink-0 bg-white dark:bg-[#051024] rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl shadow-sm">1</div>
               <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{i18n.language === 'en' ? "Data collection" : "Datenaufnahme"}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{i18n.language === 'en' ? "Have your last gas bill ready. We note your annual consumption (in kWh) and your meter number." : "Halten Sie Ihre letzte Gasrechnung bereit. Wir notieren Ihren Jahresverbrauch (in kWh) und Ihre Zählernummer."}</p>
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-blue-50 dark:bg-[#0f1d35] p-6 rounded-2xl gap-6 border-l-4 border-orange-500">
               <div className="w-16 h-16 shrink-0 bg-white dark:bg-[#051024] rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl shadow-sm">2</div>
               <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{i18n.language === 'en' ? "Offer comparison" : "Angebotsvergleich"}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{i18n.language === 'en' ? "We check all relevant gas tariffs for the Würselen urban area (postcode 52146). We pay particular attention to the energy price and hidden bonus conditions." : "Wir prüfen alle relevanten Gastarife für das Würselener Stadtgebiet (PLZ 52146). Dabei achten wir besonders auf Arbeitspreis und versteckte Boni-Bedingungen."}</p>
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-blue-50 dark:bg-[#0f1d35] p-6 rounded-2xl gap-6 border-l-4 border-orange-500">
               <div className="w-16 h-16 shrink-0 bg-white dark:bg-[#051024] rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl shadow-sm">3</div>
               <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{i18n.language === 'en' ? "Contract conclusion and cancellation" : "Vertragsabschluss & Kündigung"}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{i18n.language === 'en' ? "We submit the new contract and cancel with your old gas provider in parallel and on time." : "Wir senden den neuen Vertrag ein und kündigen parallel fristgerecht bei Ihrem alten Gasanbieter."}</p>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-[#0a1628] p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
             <h3 className="text-3xl font-bold mb-8 dark:text-white">{i18n.language === 'en' ? "Frequently asked questions (gas in Würselen)" : "Häufig gestellte Fragen (Gas in Würselen)"}</h3>
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
            <h3 className="text-2xl font-bold mb-6 dark:text-white">{i18n.language === 'en' ? "Let us help" : "Lassen Sie uns helfen"}</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">{i18n.language === 'en' ? <>By the way: In addition to gas advice, we also help you find the right <Link to="/stromanbieter-wuerselen" className="text-orange-600 dark:text-orange-500 hover:underline font-semibold">electricity provider in Würselen</Link> or <Link to="/internetanbieter-wuerselen" className="text-orange-600 dark:text-orange-500 hover:underline font-semibold">internet provider in Würselen</Link>.</> : <>Übrigens: Neben der Gasberatung helfen wir Ihnen auch dabei, den passenden <Link to="/stromanbieter-wuerselen" className="text-orange-600 dark:text-orange-500 hover:underline font-semibold">Stromanbieter in Würselen</Link> oder <Link to="/internetanbieter-wuerselen" className="text-orange-600 dark:text-orange-500 hover:underline font-semibold">Internetanbieter in Würselen</Link> zu finden.</>}</p>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              {i18n.language === 'en' ? "As your local contact for Würselen, we are here for you. Contact us directly for a non-binding consultation." : "Als Ihr Ansprechpartner vor Ort sind wir für Würselen da. Kontaktieren Sie uns direkt für ein unverbindliches Gespräch."}
            </p>
            <div className="flex justify-center gap-6">
               <a href="tel:017665949390" className="flex items-center gap-2 text-orange-600 dark:text-orange-500 font-bold hover:underline">
                  <Phone size={20} /> 0176 659 493 90
               </a>
               <Link to="/contact" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:underline">
                  <MapPin size={20} /> {i18n.language === 'en' ? "Visit our Aachen office" : "Büro in Aachen besuchen"}
               </Link>
            </div>
         </div>
      </div>
      
      {isModalOpen && (
        <Suspense fallback={null}>
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Gas" />
        </Suspense>
      )}
    </div>
  );
}
