import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { 
  Zap, 
  Calculator, 
  TrendingDown, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  HelpCircle, 
  FileText, 
  Sparkles, 
  Building2, 
  ArrowRight,
  BarChart3,
  Scale,
  Calendar,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import { trackEvent } from '../lib/analytics';

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function StrompreiseAachen() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: isEn ? "Who is the default electricity supplier in Aachen?" : "Wer ist der Grundversorger für Strom in Aachen?",
      answer: isEn ? "The statutory default supplier for the city of Aachen (postcode area 52062 to 52078) is STAWAG (Stadtwerke Aachen Aktiengesellschaft). If you move into a new flat or house in Aachen and don\u2019t sign a separate energy supply contract, you are automatically supplied under the 'STAWAG Strom Basis' tariff." : "Der gesetzliche Grundversorger für das Stadtgebiet Aachen (PLZ-Bereich 52062 bis 52078) ist die STAWAG (Stadtwerke Aachen Aktiengesellschaft). Wer eine neue Wohnung oder ein Haus in Aachen bezieht und keinen gesonderten Energieliefervertrag abschließt, wird automatisch im Tarif 'STAWAG Strom Basis' beliefert."
    },
    {
      question: isEn ? "How high are current electricity prices under Aachen\u2019s default supply?" : "Wie hoch sind die aktuellen Strompreise in der Aachener Grundversorgung?",
      answer: isEn ? "Under STAWAG\u2019s default supply (STAWAG Strom Basis tariff, as of October 2026), the usage price is 37,13 cents per kilowatt hour (gross) and the base price is 114,00 euros per year (equivalent to 9,50 euros per month). These terms serve as the statutory basic supply but are noticeably more expensive than alternative competitive tariffs." : "In der Grundversorgung der STAWAG (Tarif STAWAG Strom Basis, Stand: Oktober 2026) liegt der Arbeitspreis bei 37,13 Cent pro Kilowattstunde (brutto) und der Grundpreis bei 114,00 Euro pro Jahr (entspricht 9,50 Euro pro Monat). Diese Konditionen dienen als gesetzliche Basisversorgung, sind jedoch spürbar teurer als alternative Wettbewerbstarife."
    },
    {
      question: isEn ? "How much money can a household in Aachen save by switching tariffs?" : "Wie viel Geld kann ein Haushalt in Aachen durch einen Tarifwechsel sparen?",
      answer: isEn ? "Depending on annual consumption, Aachen households switching from default supply to a cheap alternative tariff save between around 190 euros (at 2.500 kWh for 2 people), approximately 284 euros (at 3.500 kWh for a family) and over 413 euros (at 5.000 kWh for a detached house or a household with heat pump/e-car) per year." : "Je nach Jahresverbrauch sparen Aachener Haushalte beim Wechsel von der Grundversorgung zu einem günstigen Alternativtarif zwischen rund 190 Euro (bei 2.500 kWh für 2 Personen), circa 284 Euro (bei 3.500 kWh für eine Familie) und über 413 Euro (bei 5.000 kWh für ein Einfamilienhaus oder Haushalt mit Wärmepumpe/E-Auto) pro Jahr."
    },
    {
      question: isEn ? "What notice period applies to default electricity supply in Aachen?" : "Welche Kündigungsfrist gilt für die Strom-Grundversorgung in Aachen?",
      answer: isEn ? "Under \u00a7 20 Abs. 1 of the Stromgrundversorgungsverordnung (StromGVV), a nationwide uniform notice period of just two weeks applies to statutory default supply. You can therefore cancel default supply at any time on short notice, without being bound by long minimum contract terms." : "Für die gesetzliche Grundversorgung gilt nach § 20 Abs. 1 der Stromgrundversorgungsverordnung (StromGVV) eine bundesweit einheitliche Kündigungsfrist von nur zwei Wochen. Sie können die Grundversorgung somit jederzeit kurzfristig und ohne Einhaltung langer Mindestvertragslaufzeiten kündigen."
    },
    {
      question: isEn ? "Could switching providers in Aachen interrupt my power supply?" : "Droht beim Anbieterwechsel in Aachen eine Unterbrechung der Stromversorgung?",
      answer: isEn ? "No, a power outage during a provider switch is legally impossible in Germany. Under \u00a7 36 of the Energiewirtschaftsgesetz (EnWG), uninterrupted electricity supply is guaranteed. The local distribution grid operator (Regionah or Infrawest) remains responsible for the lines and the meter; only the company billing you changes." : "Nein, ein Stromausfall beim Anbieterwechsel ist in Deutschland gesetzlich ausgeschlossen. Nach § 36 des Energiewirtschaftsgesetzes (EnWG) ist die lückenlose Stromversorgung garantiert. Der örtliche Verteilnetzbetreiber (Regionah bzw. Infrawest) bleibt für die Leitungen und den Zähler zuständig; es ändert sich lediglich das abrechnende Energieunternehmen."
    },
    {
      question: isEn ? "How can I calculate my annual electricity costs in Aachen myself?" : "Wie berechne ich meine jährlichen Stromkosten in Aachen selbst?",
      answer: isEn ? "The calculation follows a simple mathematical formula: (annual consumption in kWh \u00d7 usage price in \u20ac/kWh) + annual base price in euros = total cost per year. Divide this amount by 12 to get the matching monthly instalment. For a quick calculation, you can use our interactive electricity calculator directly." : "Die Berechnung erfolgt mit der einfachen mathematischen Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh) + jährlicher Grundpreis in Euro = Gesamtkosten pro Jahr. Teilen Sie diesen Betrag durch 12, erhalten Sie den passenden monatlichen Abschlagsbetrag. Für eine schnelle Berechnung können Sie direkt unseren interaktiven Stromrechner nutzen."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#071120] text-slate-800 dark:text-slate-100 antialiased selection:bg-[#0047AB]/20 selection:text-[#0047AB] dark:selection:bg-[#f0a83f]/30">
      <SEO 
        url="/strompreise-aachen"
        title="Strompreise Aachen 2026: Tarife & Spartipps | Energie Alemi"
        description="Strompreise in Aachen 2026: Aktuelle Arbeitspreise, Grundpreise & Spartipps. Grundversorgung vs. Alternativtarife im Vergleich bei 2.500 bis 5.000 kWh."
        faqs={faqs}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-white dark:bg-[#0a1628] border-b border-slate-200 dark:border-white/5 py-3">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs md:text-sm text-slate-500 dark:text-slate-400 gap-2">
            <Link to="/" className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors">{isEn ? "Home" : "Startseite"}</Link>
            <ChevronRight size={14} className="opacity-60" />
            <Link to="/ratgeber" className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors">{isEn ? "Guide" : "Ratgeber"}</Link>
            <ChevronRight size={14} className="opacity-60" />
            <span className="text-slate-900 dark:text-white font-medium truncate">{isEn ? "Electricity Prices Aachen 2026" : "Strompreise Aachen 2026"}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header Section */}
      <header className="relative bg-gradient-to-b from-white via-blue-50/40 to-slate-50 dark:from-[#0a1628] dark:via-[#0c1a30] dark:to-[#071120] pt-12 pb-16 border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 dark:bg-[#0047AB]/20 border border-blue-200 dark:border-blue-500/30 text-[#0047AB] dark:text-[#60a5fa] text-xs md:text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>{isEn ? "Aachen Electricity Market Report • Updated: October 2026" : "Aachen Strommarktreport • Stand: Oktober 2026"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
            {isEn ? "Electricity Prices in Aachen: Current Costs & Saving Tips 2026" : "Strompreise in Aachen: Aktuelle Kosten & Spartipps 2026"}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            {isEn ? "What does electricity in Aachen really cost right now? How high are the usage and base prices under default supply, and what savings potential do alternative electricity tariffs offer? On this page you\u2019ll find reliable figures, a transparent comparison table for private households, and practical tips to noticeably cut your monthly energy costs." : "Was kostet Strom in Aachen aktuell wirklich? Wie hoch sind Arbeitspreis und Grundpreis in der Grundversorgung und welche Einsparpotenziale bieten alternative Stromtarife? Auf dieser Seite finden Sie verlässliche Zahlen, eine transparente Vergleichstabelle für Privathaushalte sowie praxisnahe Tipps, mit denen Sie Ihre monatlichen Energiekosten spürbar senken."}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-white dark:bg-[#0d1d36] p-4 rounded-xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">{isEn ? "Default supply" : "Grundversorgung"}</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">37,13 ct</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">{isEn ? "Usage price / kWh" : "Arbeitspreis / kWh"}</span>
            </div>
            <div className="bg-white dark:bg-[#0d1d36] p-4 rounded-xl border border-blue-200 dark:border-blue-500/30 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold block mb-1">{isEn ? "Cheap alternatives" : "Günstige Alternativen"}</span>
              <span className="text-xl sm:text-2xl font-bold text-[#0047AB] dark:text-[#60a5fa]">{isEn ? "from 28,50 ct" : "ab 28,50 ct"}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">{isEn ? "Usage price / kWh" : "Arbeitspreis / kWh"}</span>
            </div>
            <div className="bg-white dark:bg-[#0d1d36] p-4 rounded-xl border border-emerald-200 dark:border-emerald-500/30 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">{isEn ? "Savings (avg. 3.500 kWh)" : "Ersparnis Ø 3.500 kWh"}</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">{isEn ? "284 € / year" : "284 € / Jahr"}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">{isEn ? "by switching providers" : "durch Anbieterwechsel"}</span>
            </div>
            <div className="bg-white dark:bg-[#0d1d36] p-4 rounded-xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">{isEn ? "Notice period" : "Kündigungsfrist"}</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">2 Wochen</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">{isEn ? "in default supply" : "in Grundversorgung"}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container mx-auto px-4 max-w-5xl py-12 md:py-16">
        <article className="space-y-16">

          {/* Section 1: Aktuelle Arbeitspreis- und Grundpreis-Zahlen */}
          <section id="aktuelle-strompreise" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] flex items-center justify-center font-bold">
                <BarChart3 size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {isEn ? "Current Electricity Prices in Aachen 2026 at a Glance" : "Aktuelle Strompreise in Aachen 2026 im Überblick"}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {isEn ? "Anyone taking electricity in the imperial city of Aachen pays monthly for two basic price components: the consumption-based " : "Wer in der Kaiserstadt Aachen Strom bezieht, zahlt monatlich für zwei grundlegende Preisbestandteile: den verbrauchsabhängigen "}<strong>{isEn ? "usage price" : "Arbeitspreis"}</strong>{isEn ? " (measured in cents per kilowatt hour, ct/kWh) and the fixed, consumption-independent " : " (gemessen in Cent pro Kilowattstunde, ct/kWh) und den festen, verbrauchsunabhängigen "}<strong>{isEn ? "base price" : "Grundpreis"}</strong>{isEn ? " (in euros per month or year). The total of these two components differs fundamentally between the local default supply and free competitive tariffs." : " (in Euro pro Monat bzw. Jahr). Die Gesamthöhe dieser beiden Komponenten unterscheidet sich dabei fundamental zwischen der lokalen Grundversorgung und freien Wettbewerbstarifen."}
            </p>

            <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 flex items-start gap-3 mb-8">
              <Calendar size={20} className="text-[#0047AB] dark:text-[#60a5fa] shrink-0 mt-0.5" />
              <div className="text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">{isEn ? "Transparent data basis (as of October 2026):" : "Transparente Datenbasis (Stand: Oktober 2026):"}</strong> {isEn ? "All prices below are gross prices including all statutory taxes, levies, grid fees and 19% VAT for the grid area of the city of Aachen (PLZ 52062, 52064, 52066, 52068, 52070, 52072, 52074, 52076, 52078)." : "Alle nachfolgenden Preisangaben verstehen sich als Bruttopreise inklusive aller gesetzlichen Steuern, Umlagen, Netzentgelte und 19 % Mehrwertsteuer für das Netzgebiet der Stadt Aachen (PLZ 52062, 52064, 52066, 52068, 52070, 52072, 52074, 52076, 52078)."}
              </div>
            </div>

            {/* Grid comparing Grundversorgung vs Alternativen */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card Grundversorgung */}
              <div className="bg-white dark:bg-[#0d1d36] rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  {isEn ? "Standard tariff" : "Standardtarif"}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 size={20} className="text-slate-500 dark:text-slate-400" />
                  <span className="font-semibold text-slate-600 dark:text-slate-400 text-sm">{isEn ? "Default supplier STAWAG" : "Grundversorger STAWAG"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  STAWAG Strom Basis
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {isEn ? "The basic tariff of Stadtwerke Aachen AG applies automatically when consumers haven\u2019t signed an individual special contract. It offers maximum flexibility (2 Wochen notice period) but sits at the top end of the Aachen market price-wise." : "Der Basistarif der Stadtwerke Aachen AG greift automatisch, wenn Verbraucher keinen individuellen Sondervertrag abgeschlossen haben. Er bietet maximale Flexibilität (2 Wochen Kündigungsfrist), ist preislich jedoch das obere Ende des Aachener Marktes."}
                </p>
                <div className="space-y-4 border-t border-slate-100 dark:border-white/5 pt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">{isEn ? "Usage price:" : "Arbeitspreis:"}</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">37,13 ct / kWh</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">{isEn ? "Base price:" : "Grundpreis:"}</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{isEn ? "114,00 € / year" : "114,00 € / Jahr"}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-500 dark:text-slate-400">
                    <span>{isEn ? "Monthly share of base price:" : "Monatlicher Grundpreisanteil:"}</span>
                    <span>{isEn ? "9,50 € / month" : "9,50 € / Monat"}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-500 dark:text-slate-400">
                    <span>{isEn ? "Statutory notice period:" : "Gesetzliche Kündigungsfrist:"}</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">2 Wochen (§ 20 StromGVV)</span>
                  </div>
                </div>
              </div>

              {/* Card Wettbewerbstarife */}
              <div className="bg-white dark:bg-[#0d1d36] rounded-2xl p-6 sm:p-8 border-2 border-[#0047AB] dark:border-[#3b82f6] shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#0047AB] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  {isEn ? "Recommendation" : "Empfehlung"}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown size={20} className="text-emerald-500" />
                  <span className="font-semibold text-blue-600 dark:text-blue-400 text-sm">{isEn ? "Free energy market Aachen" : "Freier Energiemarkt Aachen"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {isEn ? "Cheap alternative tariffs" : "Günstige Alternativtarife"}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {isEn ? "National and regional competitors as well as green electricity providers offer significantly cheaper special contracts in Aachen with a 12-month price guarantee. Reviewed by " : "Überregionale und regionale Wettbewerber sowie Ökostromanbieter bieten in Aachen deutlich preisgünstigere Sonderverträge mit 12-monatiger Preisgarantie an. Geprüft von "}<Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">{isEn ? "our Aachen electricity consultants" : "unseren Aachener Stromberatern"}</Link>.
                </p>
                <div className="space-y-4 border-t border-slate-100 dark:border-white/5 pt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">{isEn ? "Usage price (example):" : "Arbeitspreis (Beispiel):"}</span>
                    <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">28,50 ct / kWh</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">{isEn ? "Base price (example):" : "Grundpreis (Beispiel):"}</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{isEn ? "132,00 € / year" : "132,00 € / Jahr"}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-500 dark:text-slate-400">
                    <span>{isEn ? "Monthly share of base price:" : "Monatlicher Grundpreisanteil:"}</span>
                    <span>{isEn ? "11,00 € / month" : "11,00 € / Monat"}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-500 dark:text-slate-400">
                    <span>{isEn ? "Typical conditions:" : "Typische Konditionen:"}</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{isEn ? "12-month price guarantee" : "12 Monate Preisgarantie"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {isEn ? "Want to calculate your individual consumption and see which tariff could work for you? Our guide on " : "Möchten Sie Ihren individuellen Verbrauch berechnen und wissen, welcher Tarif für Sie infrage kommt? Unser Ratgeberartikel zum Thema "}<Link to="/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">{isEn ? "calculating electricity costs" : "Stromkosten berechnen"}</Link>{isEn ? " walks you step by step through determining your exact usage, while our section on " : " führt Sie Schritt für Schritt durch die exakte Verbrauchsermittlung, während Sie in unserem Bereich für "}<Link to="/strom" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">{isEn ? "electricity comparison & tariffs" : "Stromvergleich & Stromtarife"}</Link>{isEn ? " explains all general options in detail." : " alle allgemeinen Optionen im Detail kennenlernen."}
            </div>
          </section>

          {/* Section 2: Preis-Tabelle Grundversorgung vs. Alternativtarife */}
          <section id="vergleichstabelle" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Scale size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {isEn ? "Price Table: Default Supply vs. Alternative Tariffs Compared" : "Preistabelle: Grundversorgung vs. Alternativtarife im Kostenvergleich"}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {isEn ? "How hard does the price difference hit your wallet? The table below illustrates annual total costs and monthly instalments for three typical household types in Aachen at 2.500 kWh, 3.500 kWh and 5.000 kWh of annual electricity consumption." : "Wie stark wirkt sich der Preisunterschied im Portemonnaie aus? Die folgende Tabelle veranschaulicht die jährlichen Gesamtkosten und monatlichen Abschläge für drei typische Haushaltstypen in Aachen bei 2.500 kWh, 3.500 kWh und 5.000 kWh Jahresstromverbrauch."}
            </p>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm bg-white dark:bg-[#0d1d36] mb-4">
              <table className="w-full text-left text-sm md:text-base border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 dark:bg-slate-800/60 text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 font-semibold">
                    <th className="py-4 px-4 sm:px-6">{isEn ? "Annual consumption & household" : "Jahresverbrauch & Haushalt"}</th>
                    <th className="py-4 px-4 sm:px-6">{isEn ? "Default supply (STAWAG Basis)" : "Grundversorgung (STAWAG Basis)"}</th>
                    <th className="py-4 px-4 sm:px-6">{isEn ? "Alternative tariff (example tariff)" : "Alternativtarif (Beispieltarif)"}</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-600 dark:text-emerald-400">{isEn ? "Your savings" : "Ihre Ersparnis"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                  {/* Row 1: 2.500 kWh */}
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-900 dark:text-white">
                      <span className="block text-base font-bold">2.500 kWh</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "Typical 2-person household" : "Typischer 2-Personen-Haushalt"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">{isEn ? "1.042,25 € / year" : "1.042,25 € / Jahr"}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "Instalment: approx. 86,85 € / month" : "Abschlag: ca. 86,85 € / Monat"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">{isEn ? "844,50 € / year" : "844,50 € / Jahr"}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "Instalment: approx. 70,38 € / month" : "Abschlag: ca. 70,38 € / Monat"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-flex items-center gap-1 font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                        <TrendingDown size={16} /> {isEn ? "197,75 € / year" : "197,75 € / Jahr"}
                      </span>
                      <span className="block text-xs text-emerald-600/80 dark:text-emerald-400/80">{isEn ? "approx. 16,48 € / month" : "ca. 16,48 € / Monat"}</span>
                    </td>
                  </tr>

                  {/* Row 2: 3.500 kWh */}
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors bg-blue-50/30 dark:bg-blue-900/10">
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-900 dark:text-white">
                      <span className="block text-base font-bold">3.500 kWh</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "3\u20134-person family" : "3- bis 4-Personen-Familie"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">{isEn ? "1.413,55 € / year" : "1.413,55 € / Jahr"}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "Instalment: approx. 117,80 € / month" : "Abschlag: ca. 117,80 € / Monat"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">{isEn ? "1.129,50 € / year" : "1.129,50 € / Jahr"}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "Instalment: approx. 94,13 € / month" : "Abschlag: ca. 94,13 € / Monat"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-flex items-center gap-1 font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                        <TrendingDown size={16} /> {isEn ? "284,05 € / year" : "284,05 € / Jahr"}
                      </span>
                      <span className="block text-xs text-emerald-600/80 dark:text-emerald-400/80">{isEn ? "approx. 23,67 € / month" : "ca. 23,67 € / Monat"}</span>
                    </td>
                  </tr>

                  {/* Row 3: 5.000 kWh */}
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-900 dark:text-white">
                      <span className="block text-base font-bold">5.000 kWh</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "Detached house / heat pump / e-car" : "Einfamilienhaus / Wärmepumpe / E-Auto"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">{isEn ? "1.970,50 € / year" : "1.970,50 € / Jahr"}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "Instalment: approx. 164,21 € / month" : "Abschlag: ca. 164,21 € / Monat"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">{isEn ? "1.557,00 € / year" : "1.557,00 € / Jahr"}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{isEn ? "Instalment: approx. 129,75 € / month" : "Abschlag: ca. 129,75 € / Monat"}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-flex items-center gap-1 font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                        <TrendingDown size={16} /> {isEn ? "413,50 € / year" : "413,50 € / Jahr"}
                      </span>
                      <span className="block text-xs text-emerald-600/80 dark:text-emerald-400/80">{isEn ? "approx. 34,46 € / month" : "ca. 34,46 € / Monat"}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 leading-normal mb-6 flex items-center gap-2">
              <Info size={14} className="shrink-0" />
              <span>
                <strong>{isEn ? "Explanation & transparency:" : "Erläuterung & Nachvollziehbarkeit:"}</strong> {isEn ? "Sample calculation based on STAWAG Strom Basis (37,13 ct/kWh + 114,00 \u20ac/year base price) versus a representative alternative tariff (28,50 ct/kWh + 132,00 \u20ac/year base price). All amounts gross, rounded. No guarantee of future tariff changes." : "Berechnungsbeispiel basierend auf STAWAG Strom Basis (37,13 ct/kWh + 114,00 €/Jahr Grundpreis) versus repräsentativem Alternativtarif (28,50 ct/kWh + 132,00 €/Jahr Grundpreis). Alle Beträge brutto, gerundet. Keine Gewähr für künftige Tarifänderungen."}
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              {isEn ? "Want to calculate your personal consumption down to the cent? Use our digital " : "Sie möchten Ihren persönlichen Verbrauch exakt auf den Cent durchkalkulieren? Nutzen Sie unseren digitalen "}<Link to="/stromrechner" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">{isEn ? "electricity calculator" : "Stromrechner"}</Link>{isEn ? " to simulate costs from your individual meter data in seconds." : ", um die Kosten nach Ihren individuellen Zählerdaten sekundenschnell zu simulieren."}
            </p>
          </section>

          {/* Section 3: Warum die Strompreise in Aachen so sind, wie sie sind */}
          <section id="ursachen-strompreise" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                <Layers size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {isEn ? "Why Electricity Prices in Aachen Are the Way They Are" : "Warum die Strompreise in Aachen so sind, wie sie sind"}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {isEn ? "Many Aachen residents ask: why does the electricity price in our city differ from other regions in Germany, and why is the gap between default supply and alternative tariffs so wide? Factually and transparently, the electricity price is made up of four main components:" : "Viele Aachener fragen sich: Warum unterscheidet sich der Strompreis in unserer Stadt von anderen Regionen in Deutschland, und wieso gibt es so große Spannen zwischen Grundversorgung und Alternativtarifen? Der Strompreis setzt sich sachlich und transparent aus vier Hauptbestandteilen zusammen:"}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Factor 1: Netzentgelte */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] text-xs flex items-center justify-center font-bold">1</span>
                  {isEn ? "Local grid fees in Aachen" : "Lokale Netzentgelte in Aachen"}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isEn ? "Grid fees are charged by the regional distribution grid operator (in Aachen, Regionah Netz GmbH and Infrawest) for operating, maintaining and expanding power lines, transformers and meters. Because Aachen continuously invests in the energy transition, smart-meter systems and grid security, grid fees make up around 20 to 25% of the total end-customer electricity price." : "Die Netzentgelte werden vom regionalen Verteilnetzbetreiber (in Aachen die Regionah Netz GmbH bzw. Infrawest) für den Betrieb, die Instandhaltung und den Ausbau der Stromleitungen, Transformatoren und Zähler erhoben. Da Aachen kontinuierlich in die Energiewende, Smart-Meter-Systeme und Netzsicherheit investiert, machen die Netzentgelte rund 20 bis 25 % des gesamten Endkundenstrompreises aus."}
                </p>
              </div>

              {/* Factor 2: Steuern, Abgaben & Umlagen */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] text-xs flex items-center justify-center font-bold">2</span>
                  {isEn ? "State-regulated levies & taxes" : "Staatlich regulierte Abgaben & Steuern"}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isEn ? "More than a third of the electricity price is set by the state and unavoidable for every provider: this includes the electricity tax (2,05 ct/kWh), the concession fee paid to the city of Aachen (under the KAV), the KWKG levy, the \u00a7 19 StromNEV levy for energy-intensive grid customers, the offshore grid levy and, finally, 19% VAT on all items." : "Mehr als ein Drittel des Strompreises ist staatlich vorgegeben und für jeden Anbieter unvermeidbar: Dazu gehören die Stromsteuer (2,05 ct/kWh), die Konzessionsabgabe an die Stadt Aachen (nach KAV), die KWKG-Umlage, die § 19 StromNEV-Umlage für energieintensive Netzkunden, die Offshore-Netzumlage und schließlich 19 % Mehrwertsteuer auf alle Posten."}
                </p>
              </div>

              {/* Factor 3: Strombeschaffung & Börsenpreise */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] text-xs flex items-center justify-center font-bold">3</span>
                  {isEn ? "Purchasing strategy on the power exchange" : "Einkaufsstrategie an der Strombörse"}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isEn ? "Default suppliers often buy electricity for their customers well in advance to guarantee security of supply \u2013 while this protects against extreme short-term price spikes, it also prevents price cuts from being passed on quickly. Alternative providers tend to buy more dynamically and flexibly on the Leipzig power exchange (EEX) and can pass cheaper generation prices directly on to new customers." : "Grundversorger kaufen den Strom für ihre Kunden oft sehr langfristig im Voraus ein, um Versorgungssicherheit zu garantieren – dies schützt zwar vor extremen kurzfristigen Preisausschlägen, verhindert aber auch eine rasche Weitergabe von Preissenkungen. Alternative Anbieter kaufen häufig dynamischer und flexibler an der Leipziger Strombörse (EEX) ein und können günstigere Erzeugerpreise direkt an Neukunden weitergeben."}
                </p>
              </div>

              {/* Factor 4: Risiko- und Vertriebsmargen */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] text-xs flex items-center justify-center font-bold">4</span>
                  {isEn ? "Sales & flexibility surcharge" : "Vertriebs- & Flexibilitätsaufschlag"}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isEn ? "Under default supply, the supplier is legally obliged to take on every customer at any time without lead time and must grant a two-week right of cancellation. The default supplier prices this default and fluctuation risk into the default supply tariff. Special contracts with a 12-month term, by contrast, are calculated on predictable purchase volumes and therefore offer cheaper conditions." : "In der Grundversorgung ist der Versorger gesetzlich verpflichtet, jeden Kunden jederzeit ohne Vorlauf aufzunehmen und muss ein Kündigungsrecht von zwei Wochen gewähren. Dieses Ausfall- und Schwankungsrisiko preist der Grundversorger in den Grundversorgungstarif ein. Sonderverträge mit 12 Monaten Laufzeit kalkulieren dagegen mit planbaren Abnahmemengen und bieten deshalb günstigere Konditionen."}
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: 4 konkrete Spartipps für Aachener Haushalte */}
          <section id="spartipps" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] flex items-center justify-center font-bold">
                <Zap size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {isEn ? "4 Effective Saving Tips for Your Electricity in Aachen" : "4 wirksame Spartipps für Ihren Strom in Aachen"}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {isEn ? "Nobody in Aachen has to pay more for electricity than absolutely necessary. These four tried-and-tested measures cut your electricity costs immediately and sustainably:" : "Niemand muss in Aachen mehr für Strom bezahlen als unbedingt nötig. Mit den folgenden vier erprobten Maßnahmen reduzieren Sie Ihre Stromkosten sofort und nachhaltig:"}
            </p>

            <div className="space-y-6 mb-10">
              {/* Tip 1 */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {isEn ? "Leave default supply: the biggest savings lever (up to 400 € / year)" : "Raus aus der Grundversorgung: Größter Einsparhebel (bis zu 400 € / Jahr)"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                    {isEn ? "Staying on the default supply tariff is the most common cause of inflated electricity bills in Aachen. Because a statutory notice period of only two weeks applies to default supply, you can switch almost immediately. The savings show from the very first month of supply \u2013 with no loss of comfort and no technical hassle." : "Der Verbleib im Grundversorgungstarif ist in Aachen die häufigste Ursache für überhöhte Stromrechnungen. Da für die Grundversorgung eine gesetzliche Frist von nur zwei Wochen gilt, können Sie praktisch sofort wechseln. Die Ersparnis ist sofort ab dem ersten Liefermonat spürbar – ganz ohne Komfortverzicht und ohne technischen Aufwand."}
                  </p>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {isEn ? "Calculation example at 3.500 kWh: approx. 284 € savings per year" : "Rechenbeispiel bei 3.500 kWh: ca. 284 € Ersparnis pro Jahr"}
                  </span>
                </div>
              </div>

              {/* Tip 2 */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-[#0047AB] dark:text-[#60a5fa] flex items-center justify-center shrink-0 font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {isEn ? "Match usage price and base price to your own consumption" : "Arbeitspreis und Grundpreis passend zum eigenen Verbrauch gewichten"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isEn ? "When choosing a tariff, look at your personal consumption profile: for 1-person households or rarely used flats using under 1.500 kWh, a low base price is decisive, since it applies every month regardless of the meter reading. For families, multi-person households or owners of heat pumps and e-cars (over 3.500 kWh), the lowest possible usage price is the decisive lever." : "Achten Sie bei der Tarifauswahl auf Ihr persönliches Verbrauchsprofil: Für 1-Personen-Haushalte oder wenig genutzte Wohnungen mit unter 1.500 kWh Verbrauch ist ein niedriger Grundpreis entscheidend, da dieser unabhängig vom Zählerstand jeden Monat anfällt. Für Familien, Mehrpersonen-Haushalte oder Besitzer von Wärmepumpen und E-Autos (über 3.500 kWh) ist hingegen ein möglichst günstiger Arbeitspreis der ausschlaggebende Hebel."}
                  </p>
                </div>
              </div>

              {/* Tip 3 */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {isEn ? "Eliminate hot water & standby power guzzlers at home" : "Warmwasser & Standby-Stromfresser im Haushalt eliminieren"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isEn ? "In many older Aachen buildings, hot water comes from electric instantaneous heaters or boilers \u2013 often accounting for 25 bis 40 % of total electricity consumption! Simply turning the water temperature down at the device from 60 °C to 45–50 °C and fitting water-saving shower heads saves hundreds of kilowatt hours a year. Also switch entertainment electronics and home-office devices fully off at night via switchable power strips." : "In vielen Aachener Altbauwohnungen wird Warmwasser über elektrische Durchlauferhitzer oder Boiler bereitgestellt – das macht häufig 25 bis 40 % des gesamten Stromverbrauchs aus! Schon das Herabregeln der Wassertemperatur am Gerät von 60 °C auf 45–50 °C und der Einbau von Sparduschköpfen spart jährlich hunderte Kilowattstunden ein. Schalten Sie zudem Unterhaltungselektronik und Homeoffice-Geräte über schaltbare Steckdosenleisten nachts komplett ab."}
                  </p>
                </div>
              </div>

              {/* Tip 4 */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {isEn ? "Choose fair contract terms: 12-month price guarantee instead of lock-in contracts" : "Faire Vertragskonditionen wählen: 12 Monate Preisgarantie statt Knebelverträge"}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isEn ? "Don\u2019t be dazzled on online comparison portals by one-off new-customer bonuses that vanish in the second contract year. Instead, choose tariffs with an initial term of no more than 12 months, a full price guarantee for that period and monthly payments. Avoid offers requiring advance payment or deposits." : "Lassen Sie sich bei Online-Vergleichsportalen nicht von einmaligen Neukundenboni blenden, die im zweiten Vertragsjahr entfallen. Setzen Sie stattdessen auf Tarife mit einer Erstvertragslaufzeit von maximal 12 Monaten, einer vollen Preisgarantie für diesen Zeitraum und monatlicher Zahlweise. Vermeiden Sie Angebote mit Vorkasse oder Kaution."}
                  </p>
                </div>
              </div>
            </div>

            {/* High-Converting CTA Box to Energie Alemi */}
            <div className="bg-gradient-to-br from-[#0047AB] to-[#0a2f75] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                  <ShieldCheck size={14} /> {isEn ? "Free on-site service in Aachen" : "Kostenloser Vor-Ort-Service in Aachen"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug">
                  {isEn ? "Cut electricity prices \u2013 personally & without paperwork, with Energie Alemi" : "Strompreise senken – persönlich & ohne Papierkram mit Energie Alemi"}
                </h3>
                <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
                  {isEn ? "Don\u2019t want to spend hours studying tariff terms? Just bring your last electricity bill to our Aachen office at Alexianergraben 9 or get advised digitally. As your independent " : "Sie möchten nicht stundenlang Tarifbedingungen studieren? Kommen Sie einfach mit Ihrer letzten Stromrechnung zu uns ins Aachener Büro am Alexianergraben 9 oder lassen Sie sich digital beraten. Als Ihr unabhängiger "}<Link to="/energieberater-aachen" className="text-amber-300 underline underline-offset-4 font-bold hover:text-white">{isEn ? "energy consultant in Aachen" : "Energieberater in Aachen"}</Link>{isEn ? ", we\u2019ll find the cheapest reputable tariff for you and handle the entire switch completely free of charge." : " finden wir den günstigsten seriösen Tarif für Sie und übernehmen den kompletten Wechselprozess vollkommen kostenfrei."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold shadow-lg shadow-black/10 text-base"
                    onClick={() => {
                      setIsModalOpen(true);
                      trackEvent('cta_click', { cta_type: 'strompreise_aachen_modal', page: '/strompreise-aachen' });
                    }}
                  >
                    {isEn ? "Start free tariff check" : "Kostenlose Tarifprüfung starten"}
                  </Button>
                  <a 
                    href="https://wa.me/4917665949390?text=Hallo%20Energie%20Alemi,%20ich%20m%C3%B6chte%20meine%20Strompreise%20in%20Aachen%20pr%C3%BCfen%20lassen."
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/25 text-base"
                  >
                    {isEn ? "Ask via WhatsApp" : "Per WhatsApp anfragen"}
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/15 text-xs sm:text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-amber-400 shrink-0" />
                    <span>Alexianergraben 9, 52064 Aachen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-amber-400 shrink-0" />
                    <span>{isEn ? "0176 659 493 90 (Mon–Sat 10am–7pm)" : "0176 659 493 90 (Mo–Sa 10–19 Uhr)"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>{isEn ? "100% free & non-binding" : "100 % kostenfrei & unverbindlich"}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: FAQ-Bereich */}
          <section id="faq" className="scroll-mt-24 pt-4 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] flex items-center justify-center font-bold">
                <HelpCircle size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {isEn ? "Frequently Asked Questions About Electricity Prices in Aachen (FAQ)" : "Häufige Fragen zu den Strompreisen in Aachen (FAQ)"}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base mb-8">
              {isEn ? "Here our energy experts answer the most important questions about tariffs, providers and the switching process in Aachen:" : "Hier beantworten unsere Energieexperten die wichtigsten Fragen rund um Tarife, Versorger und den Wechselprozess in Aachen:"}
            </p>

            <FAQ items={faqs} />
          </section>

          {/* Section 6: Weiterführende interne Themen */}
          <section className="pt-8 border-t border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              {isEn ? "Further Guides and Useful Tools for Aachen" : "Weiterführende Ratgeber und nützliche Tools für Aachen"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                to="/stromanbieter-aachen" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#0047AB] dark:text-blue-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>{isEn ? "Local provider comparison" : "Lokaler Anbietervergleich"}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {isEn ? "Electricity providers in Aachen" : "Stromanbieter in Aachen"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isEn ? "All relevant electricity providers and green electricity tariffs in Aachen at a glance." : "Alle relevanten Stromanbieter und Ökostromtarife in Aachen auf einen Blick."}
                  </p>
                </div>
              </Link>

              <Link 
                to="/stromrechner" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-emerald-600 dark:text-emerald-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>{isEn ? "Interactive calculator" : "Interaktiver Rechner"}</span>
                    <Calculator size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {isEn ? "Electricity calculator Aachen" : "Stromrechner Aachen"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isEn ? "Calculate your monthly instalments and annual totals with pinpoint accuracy." : "Kalkulieren Sie Ihre monatlichen Abschläge und Jahressummen millimetergenau."}
                  </p>
                </div>
              </Link>

              <Link 
                to="/energieberater-aachen" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-600 dark:text-amber-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>{isEn ? "Personal consultation" : "Persönliche Beratung"}</span>
                    <MapPin size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {isEn ? "Energy consultant Aachen" : "Energieberater Aachen"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isEn ? "Our team at Alexianergraben 9 personally helps you with electricity, gas & internet." : "Unser Team am Alexianergraben 9 hilft Ihnen persönlich bei Strom, Gas & DSL."}
                  </p>
                </div>
              </Link>

              <Link 
                to="/stromkosten-berechnen" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#0047AB] dark:text-blue-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>{isEn ? "Formula & guide" : "Formel & Anleitung"}</span>
                    <FileText size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {isEn ? "Calculate electricity costs" : "Stromkosten berechnen"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isEn ? "Easy-to-understand formula, calculation examples and usage-price explanations." : "Verständliche Formel, Rechenbeispiele und Erklärungen zum Arbeitspreis."}
                  </p>
                </div>
              </Link>

              <Link 
                to="/strom" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between sm:col-span-2 lg:col-span-2"
              >
                <div>
                  <div className="text-[#0047AB] dark:text-blue-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>{isEn ? "Main electricity page" : "Hauptseite Strom"}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {isEn ? "Electricity comparison & switching service Aachen" : "Stromvergleich & Wechselservice Aachen"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isEn ? "Compare certified tariffs for private households and businesses across the entire St\u00e4dteRegion Aachen." : "Vergleichen Sie zertifizierte Tarife für Privathaushalte und Gewerbe in der gesamten StädteRegion Aachen."}
                  </p>
                </div>
              </Link>
            </div>
          </section>

        </article>
      </main>

      {/* Modal for direct comparison request */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <CompareModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            defaultService="electricity"
          />
        </Suspense>
      )}
    </div>
  );
}
