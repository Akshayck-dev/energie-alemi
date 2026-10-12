import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: "Wer ist der Grundversorger für Strom in Aachen?",
      answer: "Der gesetzliche Grundversorger für das Stadtgebiet Aachen (PLZ-Bereich 52062 bis 52078) ist die STAWAG (Stadtwerke Aachen Aktiengesellschaft). Wer eine neue Wohnung oder ein Haus in Aachen bezieht und keinen gesonderten Energieliefervertrag abschließt, wird automatisch im Tarif 'STAWAG Strom Basis' beliefert."
    },
    {
      question: "Wie hoch sind die aktuellen Strompreise in der Aachener Grundversorgung?",
      answer: "In der Grundversorgung der STAWAG (Tarif STAWAG Strom Basis, Stand: Oktober 2026) liegt der Arbeitspreis bei 37,13 Cent pro Kilowattstunde (brutto) und der Grundpreis bei 114,00 Euro pro Jahr (entspricht 9,50 Euro pro Monat). Diese Konditionen dienen als gesetzliche Basisversorgung, sind jedoch spürbar teurer als alternative Wettbewerbstarife."
    },
    {
      question: "Wie viel Geld kann ein Haushalt in Aachen durch einen Tarifwechsel sparen?",
      answer: "Je nach Jahresverbrauch sparen Aachener Haushalte beim Wechsel von der Grundversorgung zu einem günstigen Alternativtarif zwischen rund 190 Euro (bei 2.500 kWh für 2 Personen), circa 284 Euro (bei 3.500 kWh für eine Familie) und über 413 Euro (bei 5.000 kWh für ein Einfamilienhaus oder Haushalt mit Wärmepumpe/E-Auto) pro Jahr."
    },
    {
      question: "Welche Kündigungsfrist gilt für die Strom-Grundversorgung in Aachen?",
      answer: "Für die gesetzliche Grundversorgung gilt nach § 20 Abs. 1 der Stromgrundversorgungsverordnung (StromGVV) eine bundesweit einheitliche Kündigungsfrist von nur zwei Wochen. Sie können die Grundversorgung somit jederzeit kurzfristig und ohne Einhaltung langer Mindestvertragslaufzeiten kündigen."
    },
    {
      question: "Droht beim Anbieterwechsel in Aachen eine Unterbrechung der Stromversorgung?",
      answer: "Nein, ein Stromausfall beim Anbieterwechsel ist in Deutschland gesetzlich ausgeschlossen. Nach § 36 des Energiewirtschaftsgesetzes (EnWG) ist die lückenlose Stromversorgung garantiert. Der örtliche Verteilnetzbetreiber (Regionah bzw. Infrawest) bleibt für die Leitungen und den Zähler zuständig; es ändert sich lediglich das abrechnende Energieunternehmen."
    },
    {
      question: "Wie berechne ich meine jährlichen Stromkosten in Aachen selbst?",
      answer: "Die Berechnung erfolgt mit der einfachen mathematischen Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh) + jährlicher Grundpreis in Euro = Gesamtkosten pro Jahr. Teilen Sie diesen Betrag durch 12, erhalten Sie den passenden monatlichen Abschlagsbetrag. Für eine schnelle Berechnung können Sie direkt unseren interaktiven Stromrechner nutzen."
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
            <Link to="/" className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors">Startseite</Link>
            <ChevronRight size={14} className="opacity-60" />
            <Link to="/ratgeber" className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors">Ratgeber</Link>
            <ChevronRight size={14} className="opacity-60" />
            <span className="text-slate-900 dark:text-white font-medium truncate">Strompreise Aachen 2026</span>
          </nav>
        </div>
      </div>

      {/* Hero Header Section */}
      <header className="relative bg-gradient-to-b from-white via-blue-50/40 to-slate-50 dark:from-[#0a1628] dark:via-[#0c1a30] dark:to-[#071120] pt-12 pb-16 border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 dark:bg-[#0047AB]/20 border border-blue-200 dark:border-blue-500/30 text-[#0047AB] dark:text-[#60a5fa] text-xs md:text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Aachen Strommarktreport • Stand: Oktober 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
            Strompreise in Aachen: Aktuelle Kosten &amp; Spartipps 2026
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            Was kostet Strom in Aachen aktuell wirklich? Wie hoch sind Arbeitspreis und Grundpreis in der Grundversorgung und welche Einsparpotenziale bieten alternative Stromtarife? Auf dieser Seite finden Sie verlässliche Zahlen, eine transparente Vergleichstabelle für Privathaushalte sowie praxisnahe Tipps, mit denen Sie Ihre monatlichen Energiekosten spürbar senken.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-white dark:bg-[#0d1d36] p-4 rounded-xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">Grundversorgung</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">37,13 ct</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Arbeitspreis / kWh</span>
            </div>
            <div className="bg-white dark:bg-[#0d1d36] p-4 rounded-xl border border-blue-200 dark:border-blue-500/30 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold block mb-1">Günstige Alternativen</span>
              <span className="text-xl sm:text-2xl font-bold text-[#0047AB] dark:text-[#60a5fa]">ab 28,50 ct</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Arbeitspreis / kWh</span>
            </div>
            <div className="bg-white dark:bg-[#0d1d36] p-4 rounded-xl border border-emerald-200 dark:border-emerald-500/30 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">Ersparnis Ø 3.500 kWh</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">284 € / Jahr</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">durch Anbieterwechsel</span>
            </div>
            <div className="bg-white dark:bg-[#0d1d36] p-4 rounded-xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">Kündigungsfrist</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">2 Wochen</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">in Grundversorgung</span>
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
                Aktuelle Strompreise in Aachen 2026 im Überblick
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Wer in der Kaiserstadt Aachen Strom bezieht, zahlt monatlich für zwei grundlegende Preisbestandteile: den verbrauchsabhängigen <strong>Arbeitspreis</strong> (gemessen in Cent pro Kilowattstunde, ct/kWh) und den festen, verbrauchsunabhängigen <strong>Grundpreis</strong> (in Euro pro Monat bzw. Jahr). Die Gesamthöhe dieser beiden Komponenten unterscheidet sich dabei fundamental zwischen der lokalen Grundversorgung und freien Wettbewerbstarifen.
            </p>

            <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 flex items-start gap-3 mb-8">
              <Calendar size={20} className="text-[#0047AB] dark:text-[#60a5fa] shrink-0 mt-0.5" />
              <div className="text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Transparente Datenbasis (Stand: Oktober 2026):</strong> Alle nachfolgenden Preisangaben verstehen sich als Bruttopreise inklusive aller gesetzlichen Steuern, Umlagen, Netzentgelte und 19 % Mehrwertsteuer für das Netzgebiet der Stadt Aachen (PLZ 52062, 52064, 52066, 52068, 52070, 52072, 52074, 52076, 52078).
              </div>
            </div>

            {/* Grid comparing Grundversorgung vs Alternativen */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card Grundversorgung */}
              <div className="bg-white dark:bg-[#0d1d36] rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  Standardtarif
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 size={20} className="text-slate-500 dark:text-slate-400" />
                  <span className="font-semibold text-slate-600 dark:text-slate-400 text-sm">Grundversorger STAWAG</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  STAWAG Strom Basis
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Der Basistarif der Stadtwerke Aachen AG greift automatisch, wenn Verbraucher keinen individuellen Sondervertrag abgeschlossen haben. Er bietet maximale Flexibilität (2 Wochen Kündigungsfrist), ist preislich jedoch das obere Ende des Aachener Marktes.
                </p>
                <div className="space-y-4 border-t border-slate-100 dark:border-white/5 pt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Arbeitspreis:</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">37,13 ct / kWh</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Grundpreis:</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">114,00 € / Jahr</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-500 dark:text-slate-400">
                    <span>Monatlicher Grundpreisanteil:</span>
                    <span>9,50 € / Monat</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-500 dark:text-slate-400">
                    <span>Gesetzliche Kündigungsfrist:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">2 Wochen (§ 20 StromGVV)</span>
                  </div>
                </div>
              </div>

              {/* Card Wettbewerbstarife */}
              <div className="bg-white dark:bg-[#0d1d36] rounded-2xl p-6 sm:p-8 border-2 border-[#0047AB] dark:border-[#3b82f6] shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#0047AB] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  Empfehlung
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown size={20} className="text-emerald-500" />
                  <span className="font-semibold text-blue-600 dark:text-blue-400 text-sm">Freier Energiemarkt Aachen</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Günstige Alternativtarife
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Überregionale und regionale Wettbewerber sowie Ökostromanbieter bieten in Aachen deutlich preisgünstigere Sonderverträge mit 12-monatiger Preisgarantie an. Geprüft von <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">unseren Aachener Stromberatern</Link>.
                </p>
                <div className="space-y-4 border-t border-slate-100 dark:border-white/5 pt-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Arbeitspreis (Beispiel):</span>
                    <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">28,50 ct / kWh</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">Grundpreis (Beispiel):</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">132,00 € / Jahr</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-500 dark:text-slate-400">
                    <span>Monatlicher Grundpreisanteil:</span>
                    <span>11,00 € / Monat</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-500 dark:text-slate-400">
                    <span>Typische Konditionen:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">12 Monate Preisgarantie</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Möchten Sie Ihren individuellen Verbrauch berechnen und wissen, welcher Tarif für Sie infrage kommt? Unser Ratgeberartikel zum Thema <Link to="/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">Stromkosten berechnen</Link> führt Sie Schritt für Schritt durch die exakte Verbrauchsermittlung, während Sie in unserem Bereich für <Link to="/strom" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">Stromvergleich &amp; Stromtarife</Link> alle allgemeinen Optionen im Detail kennenlernen.
            </div>
          </section>

          {/* Section 2: Preis-Tabelle Grundversorgung vs. Alternativtarife */}
          <section id="vergleichstabelle" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Scale size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Preistabelle: Grundversorgung vs. Alternativtarife im Kostenvergleich
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Wie stark wirkt sich der Preisunterschied im Portemonnaie aus? Die folgende Tabelle veranschaulicht die jährlichen Gesamtkosten und monatlichen Abschläge für drei typische Haushaltstypen in Aachen bei 2.500 kWh, 3.500 kWh und 5.000 kWh Jahresstromverbrauch.
            </p>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm bg-white dark:bg-[#0d1d36] mb-4">
              <table className="w-full text-left text-sm md:text-base border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 dark:bg-slate-800/60 text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 font-semibold">
                    <th className="py-4 px-4 sm:px-6">Jahresverbrauch &amp; Haushalt</th>
                    <th className="py-4 px-4 sm:px-6">Grundversorgung (STAWAG Basis)</th>
                    <th className="py-4 px-4 sm:px-6">Alternativtarif (Beispieltarif)</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-600 dark:text-emerald-400">Ihre Ersparnis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                  {/* Row 1: 2.500 kWh */}
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-900 dark:text-white">
                      <span className="block text-base font-bold">2.500 kWh</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Typischer 2-Personen-Haushalt</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">1.042,25 € / Jahr</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Abschlag: ca. 86,85 € / Monat</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">844,50 € / Jahr</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Abschlag: ca. 70,38 € / Monat</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-flex items-center gap-1 font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                        <TrendingDown size={16} /> 197,75 € / Jahr
                      </span>
                      <span className="block text-xs text-emerald-600/80 dark:text-emerald-400/80">ca. 16,48 € / Monat</span>
                    </td>
                  </tr>

                  {/* Row 2: 3.500 kWh */}
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors bg-blue-50/30 dark:bg-blue-900/10">
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-900 dark:text-white">
                      <span className="block text-base font-bold">3.500 kWh</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">3- bis 4-Personen-Familie</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">1.413,55 € / Jahr</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Abschlag: ca. 117,80 € / Monat</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">1.129,50 € / Jahr</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Abschlag: ca. 94,13 € / Monat</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-flex items-center gap-1 font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                        <TrendingDown size={16} /> 284,05 € / Jahr
                      </span>
                      <span className="block text-xs text-emerald-600/80 dark:text-emerald-400/80">ca. 23,67 € / Monat</span>
                    </td>
                  </tr>

                  {/* Row 3: 5.000 kWh */}
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-900 dark:text-white">
                      <span className="block text-base font-bold">5.000 kWh</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Einfamilienhaus / Wärmepumpe / E-Auto</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">1.970,50 € / Jahr</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Abschlag: ca. 164,21 € / Monat</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="block font-bold text-slate-900 dark:text-white">1.557,00 € / Jahr</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Abschlag: ca. 129,75 € / Monat</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-flex items-center gap-1 font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                        <TrendingDown size={16} /> 413,50 € / Jahr
                      </span>
                      <span className="block text-xs text-emerald-600/80 dark:text-emerald-400/80">ca. 34,46 € / Monat</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 leading-normal mb-6 flex items-center gap-2">
              <Info size={14} className="shrink-0" />
              <span>
                <strong>Erläuterung &amp; Nachvollziehbarkeit:</strong> Berechnungsbeispiel basierend auf STAWAG Strom Basis (37,13 ct/kWh + 114,00 €/Jahr Grundpreis) versus repräsentativem Alternativtarif (28,50 ct/kWh + 132,00 €/Jahr Grundpreis). Alle Beträge brutto, gerundet. Keine Gewähr für künftige Tarifänderungen.
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Sie möchten Ihren persönlichen Verbrauch exakt auf den Cent durchkalkulieren? Nutzen Sie unseren digitalen <Link to="/stromrechner" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">Stromrechner</Link>, um die Kosten nach Ihren individuellen Zählerdaten sekundenschnell zu simulieren.
            </p>
          </section>

          {/* Section 3: Warum die Strompreise in Aachen so sind, wie sie sind */}
          <section id="ursachen-strompreise" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                <Layers size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Warum die Strompreise in Aachen so sind, wie sie sind
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Viele Aachener fragen sich: Warum unterscheidet sich der Strompreis in unserer Stadt von anderen Regionen in Deutschland, und wieso gibt es so große Spannen zwischen Grundversorgung und Alternativtarifen? Der Strompreis setzt sich sachlich und transparent aus vier Hauptbestandteilen zusammen:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Factor 1: Netzentgelte */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] text-xs flex items-center justify-center font-bold">1</span>
                  Lokale Netzentgelte in Aachen
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Die Netzentgelte werden vom regionalen Verteilnetzbetreiber (in Aachen die Regionah Netz GmbH bzw. Infrawest) für den Betrieb, die Instandhaltung und den Ausbau der Stromleitungen, Transformatoren und Zähler erhoben. Da Aachen kontinuierlich in die Energiewende, Smart-Meter-Systeme und Netzsicherheit investiert, machen die Netzentgelte rund 20 bis 25 % des gesamten Endkundenstrompreises aus.
                </p>
              </div>

              {/* Factor 2: Steuern, Abgaben & Umlagen */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] text-xs flex items-center justify-center font-bold">2</span>
                  Staatlich regulierte Abgaben &amp; Steuern
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mehr als ein Drittel des Strompreises ist staatlich vorgegeben und für jeden Anbieter unvermeidbar: Dazu gehören die Stromsteuer (2,05 ct/kWh), die Konzessionsabgabe an die Stadt Aachen (nach KAV), die KWKG-Umlage, die § 19 StromNEV-Umlage für energieintensive Netzkunden, die Offshore-Netzumlage und schließlich 19 % Mehrwertsteuer auf alle Posten.
                </p>
              </div>

              {/* Factor 3: Strombeschaffung & Börsenpreise */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] text-xs flex items-center justify-center font-bold">3</span>
                  Einkaufsstrategie an der Strombörse
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Grundversorger kaufen den Strom für ihre Kunden oft sehr langfristig im Voraus ein, um Versorgungssicherheit zu garantieren – dies schützt zwar vor extremen kurzfristigen Preisausschlägen, verhindert aber auch eine rasche Weitergabe von Preissenkungen. Alternative Anbieter kaufen häufig dynamischer und flexibler an der Leipziger Strombörse (EEX) ein und können günstigere Erzeugerpreise direkt an Neukunden weitergeben.
                </p>
              </div>

              {/* Factor 4: Risiko- und Vertriebsmargen */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3 text-slate-900 dark:text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] text-xs flex items-center justify-center font-bold">4</span>
                  Vertriebs- &amp; Flexibilitätsaufschlag
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  In der Grundversorgung ist der Versorger gesetzlich verpflichtet, jeden Kunden jederzeit ohne Vorlauf aufzunehmen und muss ein Kündigungsrecht von zwei Wochen gewähren. Dieses Ausfall- und Schwankungsrisiko preist der Grundversorger in den Grundversorgungstarif ein. Sonderverträge mit 12 Monaten Laufzeit kalkulieren dagegen mit planbaren Abnahmemengen und bieten deshalb günstigere Konditionen.
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
                4 wirksame Spartipps für Ihren Strom in Aachen
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Niemand muss in Aachen mehr für Strom bezahlen als unbedingt nötig. Mit den folgenden vier erprobten Maßnahmen reduzieren Sie Ihre Stromkosten sofort und nachhaltig:
            </p>

            <div className="space-y-6 mb-10">
              {/* Tip 1 */}
              <div className="bg-white dark:bg-[#0d1d36] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Raus aus der Grundversorgung: Größter Einsparhebel (bis zu 400 € / Jahr)
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                    Der Verbleib im Grundversorgungstarif ist in Aachen die häufigste Ursache für überhöhte Stromrechnungen. Da für die Grundversorgung eine gesetzliche Frist von nur zwei Wochen gilt, können Sie praktisch sofort wechseln. Die Ersparnis ist sofort ab dem ersten Liefermonat spürbar – ganz ohne Komfortverzicht und ohne technischen Aufwand.
                  </p>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Sofortige Ersparnis bei 3.500 kWh: ca. 284 € jährlich
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
                    Arbeitspreis und Grundpreis passend zum eigenen Verbrauch gewichten
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Achten Sie bei der Tarifauswahl auf Ihr persönliches Verbrauchsprofil: Für 1-Personen-Haushalte oder wenig genutzte Wohnungen mit unter 1.500 kWh Verbrauch ist ein niedriger Grundpreis entscheidend, da dieser unabhängig vom Zählerstand jeden Monat anfällt. Für Familien, Mehrpersonen-Haushalte oder Besitzer von Wärmepumpen und E-Autos (über 3.500 kWh) ist hingegen ein möglichst günstiger Arbeitspreis der ausschlaggebende Hebel.
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
                    Warmwasser &amp; Standby-Stromfresser im Haushalt eliminieren
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    In vielen Aachener Altbauwohnungen wird Warmwasser über elektrische Durchlauferhitzer oder Boiler bereitgestellt – das macht häufig 25 bis 40 % des gesamten Stromverbrauchs aus! Schon das Herabregeln der Wassertemperatur am Gerät von 60 °C auf 45–50 °C und der Einbau von Sparduschköpfen spart jährlich hunderte Kilowattstunden ein. Schalten Sie zudem Unterhaltungselektronik und Homeoffice-Geräte über schaltbare Steckdosenleisten nachts komplett ab.
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
                    Faire Vertragskonditionen wählen: 12 Monate Preisgarantie statt Knebelverträge
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Lassen Sie sich bei Online-Vergleichsportalen nicht von einmaligen Neukundenboni blenden, die im zweiten Vertragsjahr entfallen. Setzen Sie stattdessen auf Tarife mit einer Erstvertragslaufzeit von maximal 12 Monaten, einer vollen Preisgarantie für diesen Zeitraum und monatlicher Zahlweise. Vermeiden Sie Angebote mit Vorkasse oder Kaution.
                  </p>
                </div>
              </div>
            </div>

            {/* High-Converting CTA Box to Energie Alemi */}
            <div className="bg-gradient-to-br from-[#0047AB] to-[#0a2f75] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                  <ShieldCheck size={14} /> Kostenloser Vor-Ort-Service in Aachen
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug">
                  Strompreise senken – persönlich &amp; ohne Papierkram mit Energie Alemi
                </h3>
                <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
                  Sie möchten nicht stundenlang Tarifbedingungen studieren? Kommen Sie einfach mit Ihrer letzten Stromrechnung zu uns ins Aachener Büro am Alexianergraben 9 oder lassen Sie sich digital beraten. Als Ihr unabhängiger <Link to="/energieberater-aachen" className="text-amber-300 underline underline-offset-4 font-bold hover:text-white">Energieberater in Aachen</Link> finden wir den günstigsten seriösen Tarif für Sie und übernehmen den kompletten Wechselprozess vollkommen kostenfrei.
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
                    Kostenlose Tarifprüfung starten
                  </Button>
                  <a 
                    href="https://wa.me/4917665949390?text=Hallo%20Energie%20Alemi,%20ich%20m%C3%B6chte%20meine%20Strompreise%20in%20Aachen%20pr%C3%BCfen%20lassen."
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/25 text-base"
                  >
                    Per WhatsApp anfragen
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/15 text-xs sm:text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-amber-400 shrink-0" />
                    <span>Alexianergraben 9, 52064 Aachen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-amber-400 shrink-0" />
                    <span>0176 659 493 90 (Mo–Sa 10–19 Uhr)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>100 % kostenfrei &amp; unverbindlich</span>
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
                Häufige Fragen zu den Strompreisen in Aachen (FAQ)
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base mb-8">
              Hier beantworten unsere Energieexperten die wichtigsten Fragen rund um Tarife, Versorger und den Wechselprozess in Aachen:
            </p>

            <FAQ items={faqs} />
          </section>

          {/* Section 6: Weiterführende interne Themen */}
          <section className="pt-8 border-t border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Weiterführende Ratgeber und nützliche Tools für Aachen
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                to="/stromanbieter-aachen" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#0047AB] dark:text-blue-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>Lokaler Anbietervergleich</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Stromanbieter in Aachen
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Alle relevanten Stromanbieter und Ökostromtarife in Aachen auf einen Blick.
                  </p>
                </div>
              </Link>

              <Link 
                to="/stromrechner" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-emerald-600 dark:text-emerald-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>Interaktiver Rechner</span>
                    <Calculator size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Stromrechner Aachen
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Kalkulieren Sie Ihre monatlichen Abschläge und Jahressummen millimetergenau.
                  </p>
                </div>
              </Link>

              <Link 
                to="/energieberater-aachen" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-600 dark:text-amber-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>Persönliche Beratung</span>
                    <MapPin size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Energieberater Aachen
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Unser Team am Alexianergraben 9 hilft Ihnen persönlich bei Strom, Gas &amp; DSL.
                  </p>
                </div>
              </Link>

              <Link 
                to="/stromkosten-berechnen" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#0047AB] dark:text-blue-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>Formel &amp; Anleitung</span>
                    <FileText size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Stromkosten berechnen
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Verständliche Formel, Rechenbeispiele und Erklärungen zum Arbeitspreis.
                  </p>
                </div>
              </Link>

              <Link 
                to="/strom" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between sm:col-span-2 lg:col-span-2"
              >
                <div>
                  <div className="text-[#0047AB] dark:text-blue-400 mb-2 font-semibold text-sm flex items-center justify-between">
                    <span>Hauptseite Strom</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Stromvergleich &amp; Wechselservice Aachen
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Vergleichen Sie zertifizierte Tarife für Privathaushalte und Gewerbe in der gesamten StädteRegion Aachen.
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
