import { Search, Flame, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState, lazy, Suspense } from 'react';
import { trackEvent } from '../lib/analytics';
import SEO from "../components/SEO";
import gasHeroDesk from '../assets/gas hero desk.webp';
import SectionHeader from '../components/ui/SectionHeader';

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function GasanbieterWuerselen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wuerselenFaqs = [
    {
      question: "Wer ist der lokale Grundversorger für Gas in Würselen?",
      answer: "Die lokale Grundversorgung in Würselen wird in der Regel durch die enwor (Energie- und Wasserversorgung GmbH) sichergestellt. Allerdings sind Sie nicht verpflichtet, dort zu bleiben. Ein Anbieterwechsel kann Ihre jährlichen Heizkosten deutlich reduzieren."
    },
    {
      question: "Ich heize in Bardenberg noch mit Öl und möchte auf Gas umstellen. Helfen Sie dabei?",
      answer: "Wir können Sie bei der Wahl des passenden Gasanbieters beraten, sobald der Netzanschluss steht. Für die physische Umrüstung der Heizungsanlage wenden Sie sich bitte an einen lokalen Heizungsinstallateur."
    },
    {
      question: "Wie berechne ich meinen Gasverbrauch für ein Reihenhaus in Broichweiden?",
      answer: "Wenn Sie noch keine Vorjahresrechnung haben, rechnen wir als Faustformel mit ca. 140 bis 160 kWh pro Quadratmeter Wohnfläche im Jahr. Bei 120 Quadratmetern wären das etwa 16.800 bis 19.200 kWh Gas."
    },
    {
      question: "Bieten Sie auch Biogas für Würselen an?",
      answer: "Ja, wir haben Tarife im Portfolio, die einen festen Anteil an Biogas beinhalten oder durch Klimaschutzprojekte CO2-kompensiert sind. Sprechen Sie uns bei der Beratung einfach darauf an."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#051024] min-h-screen">
      <SEO 
        url="/gasanbieter-wuerselen" 
        title="Gasanbieter Würselen: Günstige Gastarife finden | Energie Alemi"
        description="Vergleichen Sie Gasanbieter in Würselen. Wir finden den günstigsten Tarif für Ihr Zuhause in Broichweiden, Bardenberg oder Mitte. Kostenloser Wechselservice."
        image={gasHeroDesk} 
        faqs={wuerselenFaqs} 
      />
      
      <section className="relative bg-[#00173A] dark:bg-[#030914] text-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={gasHeroDesk} alt="Gas Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
           <div className="flex items-center gap-2 mb-4 text-orange-500 font-bold uppercase tracking-wider text-sm">
              <Flame size={18} /> Gasversorgung Würselen
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Heizkosten senken mit <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">dem perfekten Gastarif</span>
           </h1>
           <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
             Heizen muss nicht teuer sein. Egal ob Altbau in Würselen-Mitte oder neues Eigenheim in Bardenberg – wir filtern den Tarif-Dschungel nach den besten Gasanbietern für Ihre Postleitzahl.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <button 
                onClick={() => {
                  setIsModalOpen(true);
                  trackEvent('service_cta_click', { service_type: 'gasanbieter_wuerselen_custom' });
                }}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2"
             >
                <Search size={20} /> Gasvergleich starten
             </button>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
         
         <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Warum sich der Wechsel in Würselen lohnt</h2>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed space-y-6">
               <p>
                 Durch die geopolitischen Veränderungen der letzten Jahre sind die Gaspreise starken Schwankungen unterworfen. Wer in der Grundversorgung verbleibt, verschenkt oft hunderte Euro pro Jahr.
               </p>
               <p>
                 Wir helfen Ihnen, einen Vertrag mit <Link to="/ratgeber/gaspreise-verstehen" className="text-orange-600 hover:underline">robuster Preisgarantie</Link> zu finden. So schützen Sie sich effektiv vor plötzlichen Preisanpassungen im Winter. Unser lokaler Fokus auf die Region Aachen/Würselen bedeutet, dass wir die Netzbetreiberstrukturen genau kennen.
               </p>
            </div>
         </div>

         <SectionHeader title="Schritt für Schritt zum neuen Gasanbieter" align="center" className="mb-10" />
         <div className="flex flex-col gap-6 mb-20">
            <div className="flex flex-col md:flex-row items-center bg-blue-50 dark:bg-[#0f1d35] p-6 rounded-2xl gap-6 border-l-4 border-orange-500">
               <div className="w-16 h-16 shrink-0 bg-white dark:bg-[#051024] rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl shadow-sm">1</div>
               <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Datenaufnahme</h3>
                  <p className="text-slate-600 dark:text-slate-400">Halten Sie Ihre letzte Gasrechnung bereit. Wir notieren Ihren Jahresverbrauch (in kWh) und Ihre Zählernummer.</p>
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-blue-50 dark:bg-[#0f1d35] p-6 rounded-2xl gap-6 border-l-4 border-orange-500">
               <div className="w-16 h-16 shrink-0 bg-white dark:bg-[#051024] rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl shadow-sm">2</div>
               <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Angebotsvergleich</h3>
                  <p className="text-slate-600 dark:text-slate-400">Wir prüfen alle relevanten Gastarife für das Würselener Stadtgebiet (PLZ 52146). Dabei achten wir besonders auf Arbeitspreis und versteckte Boni-Bedingungen.</p>
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-blue-50 dark:bg-[#0f1d35] p-6 rounded-2xl gap-6 border-l-4 border-orange-500">
               <div className="w-16 h-16 shrink-0 bg-white dark:bg-[#051024] rounded-full flex items-center justify-center text-orange-600 font-bold text-2xl shadow-sm">3</div>
               <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Vertragsabschluss & Kündigung</h3>
                  <p className="text-slate-600 dark:text-slate-400">Wir senden den neuen Vertrag ein und kündigen parallel fristgerecht bei Ihrem alten Gasanbieter.</p>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-[#0a1628] p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
             <h3 className="text-3xl font-bold mb-8 dark:text-white">Häufig gestellte Fragen (Gas in Würselen)</h3>
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
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Lassen Sie uns helfen</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">Übrigens: Neben der Gasberatung helfen wir Ihnen auch dabei, den passenden <Link to="/stromanbieter-wuerselen" className="text-orange-600 dark:text-orange-500 hover:underline font-semibold">Stromanbieter in Würselen</Link> oder <Link to="/internetanbieter-wuerselen" className="text-orange-600 dark:text-orange-500 hover:underline font-semibold">Internetanbieter in Würselen</Link> zu finden.</p>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Als Ihr Ansprechpartner vor Ort sind wir für Würselen da. Kontaktieren Sie uns direkt für ein unverbindliches Gespräch.
            </p>
            <div className="flex justify-center gap-6">
               <a href="tel:017665949390" className="flex items-center gap-2 text-orange-600 dark:text-orange-500 font-bold hover:underline">
                  <Phone size={20} /> 0176 659 493 90
               </a>
               <Link to="/contact" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:underline">
                  <MapPin size={20} /> Büro in Aachen besuchen
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
