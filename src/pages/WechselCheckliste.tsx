import { Link } from 'react-router';
import {
  ClipboardCheck,
  FileText,
  Hash,
  Building,
  CalendarClock,
  MessageCircle,
  Phone,
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  Zap,
  Check,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import { trackEvent } from '../lib/analytics';

export default function WechselCheckliste() {
  const faqs = [
    {
      question: "Entstehen beim Anbieterwechsel Kosten?",
      answer: "Nein. Unsere Beratung und der komplette Wechselservice sind für Sie zu 100 % kostenlos und unverbindlich. Wir finanzieren unseren Service über marktübliche Provisionen der Anbieter – ohne Aufschlag auf Ihre Tarife."
    },
    {
      question: "Wird meine Strom- oder Gasversorgung während des Wechsels unterbrochen?",
      answer: "Nein, eine Unterbrechung ist in Deutschland gesetzlich ausgeschlossen. Strom und Gas fließen während des gesamten Wechsels unterbrechungsfrei weiter – Sie merken vom Wechsel technisch nichts, nur die Abrechnung kommt vom neuen Anbieter."
    },
    {
      question: "Wie lange dauert der Anbieterwechsel?",
      answer: "In der Regel 3 bis 6 Wochen, abhängig von der Kündigungsfrist Ihres aktuellen Vertrags. Sobald Sie uns Ihre Unterlagen geben, kümmern wir uns um alles: Kündigung, Neuanmeldung und Zählerstandserfassung zum Stichtag."
    }
  ];

  const steps = [
    {
      icon: <FileText size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "1. Aktuelle Jahresabrechnung bereithalten",
      description: "Ihre letzte Strom-, Gas- oder Internetabrechnung enthält alles Wichtige: Ihren Jahresverbrauch in kWh, die Zählernummer und Ihre aktuellen Konditionen. Ein Foto per WhatsApp genügt."
    },
    {
      icon: <Hash size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "2. Zählernummer notieren",
      description: "Die Zählernummer finden Sie auf Ihrer Abrechnung oder direkt am Zähler. Wir brauchen sie für die korrekte Anmeldung beim neuen Anbieter – keine Sorge, wir prüfen alles gemeinsam mit Ihnen."
    },
    {
      icon: <Building size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "3. Aktuellen Anbieter & Vertragsdaten",
      description: "Name Ihres aktuellen Anbieters, Kundennummer und – falls bekannt – die Vertragslaufzeit bzw. Kündigungsfrist. Den Rest recherchieren wir für Sie."
    },
    {
      icon: <CalendarClock size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "4. Wunschtermin für den Wechsel",
      description: "Teilen Sie uns mit, ab wann der neue Tarif gelten soll – zum nächstmöglichen Termin oder zu einem Wunschdatum. Wir timen Kündigung und Neuanmeldung exakt darauf ab."
    },
    {
      icon: <MessageCircle size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "5. Uns kontaktieren – wir erledigen den Rest",
      description: "Schicken Sie uns Ihre Unterlagen per WhatsApp oder kommen Sie in unserem Büro in Aachen vorbei. Wir vergleichen die Tarife, kündigen fristgerecht und melden Sie beim neuen Anbieter an."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#071120] text-slate-800 dark:text-slate-100 antialiased selection:bg-[#0047AB]/20 selection:text-[#0047AB]">
      <SEO
        url="/wechsel-checkliste"
        title="Anbieterwechsel Checkliste: In 5 Schritten sparen | Energie Alemi"
        description="Anbieterwechsel leicht gemacht: Unsere Checkliste zeigt Ihnen in 5 Schritten, wie Sie Strom-, Gas- oder Internetanbieter wechseln. Kostenlos & unverbindlich."
        faqs={faqs}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white dark:bg-[#0a1628] border-b border-slate-200 dark:border-white/5 py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs md:text-sm text-slate-500 dark:text-slate-400 gap-2">
            <Link to="/" className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors">Startseite</Link>
            <ChevronRight size={14} className="opacity-60" />
            <span className="text-slate-900 dark:text-white font-medium truncate">Wechsel-Checkliste</span>
          </nav>
        </div>
      </div>

      {/* Hero Header Section */}
      <header className="relative bg-gradient-to-b from-white via-blue-50/40 to-slate-50 dark:from-[#0a1628] dark:via-[#0c1a30] dark:to-[#071120] pt-12 pb-16 md:py-20 border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 text-[#0047AB] dark:text-[#60a5fa] text-xs sm:text-sm font-bold mb-6">
            <ClipboardCheck size={16} />
            <span>Kostenlose Wechselhilfe in Aachen</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15] max-w-4xl">
            Anbieterwechsel in 5 Minuten: Ihre Checkliste
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            Der Wechsel Ihres Strom-, Gas- oder Internetanbieters ist einfacher, als die meisten denken.
            Mit dieser Checkliste sind Sie in 5 Minuten startklar – <strong className="text-slate-900 dark:text-white">um alles andere kümmern wir uns kostenlos für Sie.</strong>
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-10">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#0047AB] hover:bg-[#003380] text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-900/10 text-base"
              onClick={() => {
                const el = document.getElementById('checkliste');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                trackEvent('cta_click', { cta_type: 'checkliste_hero_steps', page: '/wechsel-checkliste' });
              }}
            >
              Checkliste ansehen
              <ArrowRight size={18} />
            </Button>
            <a
              href="https://wa.me/4917665949390?text=Hallo%20Energie%20Alemi,%20ich%20m%C3%B6chte%20meinen%20Anbieter%20wechseln%20und%20bitte%20um%20Beratung."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { page: '/wechsel-checkliste', source: 'hero' })}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#1eb856] text-white font-bold text-base shadow-lg shadow-green-900/10 transition-all"
            >
              <MessageCircle size={20} />
              Per WhatsApp starten
            </a>
            <a
              href="tel:+4917665949390"
              onClick={() => trackEvent('phone_click', { page: '/wechsel-checkliste', source: 'hero' })}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white dark:bg-[#0a1628] border-2 border-slate-200 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-[#60a5fa] text-slate-900 dark:text-white font-bold text-base transition-all"
            >
              <Phone size={20} className="text-[#0047AB] dark:text-[#60a5fa]" />
              0176 659 493 90
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-6xl py-14 md:py-20">

        {/* Checklist Steps */}
        <section id="checkliste" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Die 5 Schritte zum günstigeren Tarif
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base mb-10 max-w-3xl">
            Alles, was wir von Ihnen brauchen, passt auf eine einzige Nachricht. Den Rest – Tarifvergleich,
            Kündigung, Neuanmeldung – übernehmen wir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-[#0a1628] rounded-2xl p-6 md:p-7 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow ${index === 4 ? 'md:col-span-2 bg-blue-50/60 dark:bg-blue-950/20 border-blue-200/60 dark:border-blue-800/30' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Box */}
        <section className="mb-16">
          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-800/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h2 className="font-bold text-xl text-slate-900 dark:text-white mb-3">
                  Gut zu wissen
                </h2>
                <ul className="space-y-2.5 text-slate-700 dark:text-slate-200 text-base">
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Keine Unterbrechung:</strong> Strom und Gas fließen während des Wechsels unterbrechungsfrei weiter – gesetzlich garantiert.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Keine Kosten:</strong> Beratung und Wechselservice sind für Sie komplett kostenlos und unverbindlich.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={18} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Kein Papierkram:</strong> Wir kündigen fristgerecht und melden Sie beim neuen Anbieter an – inklusive Zählerstand zum Stichtag.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Box */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#0047AB] to-[#003380] rounded-3xl p-8 md:p-12 text-white text-center shadow-xl shadow-blue-900/20">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Bereit? In 5 Minuten ist alles erledigt.
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Schicken Sie uns einfach Ihre Abrechnung per WhatsApp oder rufen Sie an –
              wir kümmern uns um den Rest. Kostenlos & unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/4917665949390?text=Hallo%20Energie%20Alemi,%20ich%20m%C3%B6chte%20meinen%20Anbieter%20wechseln."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { page: '/wechsel-checkliste', source: 'cta_box' })}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1eb856] text-white font-bold text-base shadow-lg transition-all w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                WhatsApp: Unterlagen schicken
              </a>
              <a
                href="tel:+4917665949390"
                onClick={() => trackEvent('phone_click', { page: '/wechsel-checkliste', source: 'cta_box' })}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base transition-all w-full sm:w-auto"
              >
                <Phone size={20} />
                0176 659 493 90
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 pt-4 border-t border-slate-200 dark:border-white/10 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] flex items-center justify-center font-bold">
              <HelpCircle size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Häufige Fragen zum Anbieterwechsel (FAQ)
            </h2>
          </div>
          <FAQ items={faqs} />
        </section>

        {/* Internal Links */}
        <section className="pt-8 border-t border-slate-200 dark:border-white/10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Weiterführende Themen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { to: '/electricity', icon: <Zap size={20} />, label: 'Stromtarife vergleichen' },
              { to: '/gas', icon: <FileText size={20} />, label: 'Gastarife vergleichen' },
              { to: '/internet', icon: <MessageCircle size={20} />, label: 'Internetanbieter vergleichen' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-3 p-5 rounded-xl bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-[#60a5fa] hover:shadow-md transition-all group"
              >
                <span className="text-[#0047AB] dark:text-[#60a5fa]">{link.icon}</span>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa]">
                  {link.label}
                </span>
                <ArrowRight size={16} className="ml-auto text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
