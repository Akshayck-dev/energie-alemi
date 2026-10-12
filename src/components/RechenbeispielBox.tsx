import { useTranslation } from 'react-i18next';
import { Calculator, TrendingDown, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '../lib/utils';

interface RechenbeispielBoxProps {
  service: 'electricity' | 'gas';
  className?: string;
  onCtaClick?: () => void;
}

export default function RechenbeispielBox({ service, className, onCtaClick }: RechenbeispielBoxProps) {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const isElec = service === 'electricity';

  const data = isElec
    ? {
        badge: isEn ? 'Example Calculation' : 'Rechenbeispiel',
        headline: isEn
          ? 'Example: 3,500 kWh/year — Basic supply approx. €1,400/year, alternative tariff approx. €1,100/year → Savings approx. €300/year.'
          : 'Beispiel: 3.500 kWh/Jahr — Grundversorgung ca. 1.400 €/Jahr, Alternativtarif ca. 1.100 €/Jahr → Ersparnis ca. 300 €/Jahr.',
        consumptionLabel: isEn ? '3,500 kWh / year' : '3.500 kWh / Jahr',
        householdSubtitle: isEn ? 'Representative 3- to 4-person household' : 'Typischer 3- bis 4-Personen-Haushalt',
        basicPrice: isEn ? 'approx. €1,400 / yr' : 'ca. 1.400 € / Jahr',
        basicLabel: isEn ? 'Basic supply' : 'Grundversorgung',
        altPrice: isEn ? 'approx. €1,100 / yr' : 'ca. 1.100 € / Jahr',
        altLabel: isEn ? 'Alternative tariff' : 'Alternativtarif',
        savingsFigure: isEn ? 'approx. €300' : 'ca. 300 €',
        savingsUnit: isEn ? 'savings per year' : 'Ersparnis pro Jahr',
        disclaimer: isEn
          ? '(Example calculation, as of October 2026 — your actual savings depend on consumption and current tariffs.)'
          : '(Beispielrechnung, Stand Oktober 2026 — Ihre Ersparnis hängt von Verbrauch und aktuellen Tarifen ab.)',
        ctaText: isEn ? 'Calculate your electricity costs' : 'Jetzt Stromkosten berechnen',
        ctaLink: '/stromkosten-berechnen',
        accentColor: 'from-blue-600/10 via-amber-500/10 to-emerald-500/10',
        borderColor: 'border-blue-200/90 dark:border-blue-500/30',
        badgeBg: 'bg-blue-100 text-[#0047AB] dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-700/50',
      }
    : {
        badge: isEn ? 'Example Calculation' : 'Rechenbeispiel',
        headline: isEn
          ? 'Example: 12,000 kWh/year — Basic supply approx. €1,500/year, alternative tariff approx. €1,150/year → Savings approx. €350/year.'
          : 'Beispiel: 12.000 kWh/Jahr — Grundversorgung ca. 1.500 €/Jahr, Alternativtarif ca. 1.150 €/Jahr → Ersparnis ca. 350 €/Jahr.',
        consumptionLabel: isEn ? '12,000 kWh / year' : '12.000 kWh / Jahr',
        householdSubtitle: isEn ? 'Flat or terraced house with gas heating' : 'Wohnung oder Reihenhaus mit Gasheizung',
        basicPrice: isEn ? 'approx. €1,500 / yr' : 'ca. 1.500 € / Jahr',
        basicLabel: isEn ? 'Basic supply' : 'Grundversorgung',
        altPrice: isEn ? 'approx. €1,150 / yr' : 'ca. 1.150 € / Jahr',
        altLabel: isEn ? 'Alternative tariff' : 'Alternativtarif',
        savingsFigure: isEn ? 'approx. €350' : 'ca. 350 €',
        savingsUnit: isEn ? 'savings per year' : 'Ersparnis pro Jahr',
        disclaimer: isEn
          ? '(Example calculation, as of October 2026 — your actual savings depend on consumption and current tariffs.)'
          : '(Beispielrechnung, Stand Oktober 2026 — Ihre Ersparnis hängt von Verbrauch und aktuellen Tarifen ab.)',
        ctaText: isEn ? 'Check your gas tariff' : 'Jetzt Gastarif prüfen',
        ctaLink: '/contact',
        accentColor: 'from-orange-500/10 via-amber-500/10 to-emerald-500/10',
        borderColor: 'border-orange-200/90 dark:border-orange-500/30',
        badgeBg: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 border-orange-200 dark:border-orange-700/50',
      };

  return (
    <div
      className={cn(
        'relative rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg transition-all',
        'bg-white dark:bg-[#0d1d36] border-2',
        data.borderColor,
        'shadow-slate-200/60 dark:shadow-black/20',
        className
      )}
    >
      {/* Subtle background glow */}
      <div
        className={cn(
          'absolute inset-0 rounded-3xl bg-gradient-to-br opacity-70 pointer-events-none -z-0',
          data.accentColor
        )}
      />

      <div className="relative z-10">
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span
            className={cn(
              'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase border',
              data.badgeBg
            )}
          >
            <Calculator size={16} />
            <span>{data.badge}</span>
          </span>

          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-500" />
            <span>{data.consumptionLabel} • {data.householdSubtitle}</span>
          </span>
        </div>

        {/* Verbatim Quote Headline */}
        <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
          „{data.headline}“
        </p>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Card 1: Grundversorgung */}
          <div className="bg-slate-50 dark:bg-[#071324] p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              {data.basicLabel}
            </span>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 block">
                {data.basicPrice}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {isEn ? 'Standard baseline tariff' : 'Standard-Basistarif'}
              </span>
            </div>
          </div>

          {/* Card 2: Alternativtarif */}
          <div className="bg-slate-50 dark:bg-[#071324] p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
              {data.altLabel}
            </span>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white block">
                {data.altPrice}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {isEn ? 'Competitive market offer' : 'Günstiger Wettbewerbstarif'}
              </span>
            </div>
          </div>

          {/* Card 3: Ersparnis (Highlighted € figure large bold) */}
          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 sm:p-5 rounded-2xl border-2 border-emerald-400/70 dark:border-emerald-500/50 flex flex-col justify-between shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1 mb-1">
              <TrendingDown size={14} />
              {isEn ? 'Potential Savings' : 'Ihre Ersparnis'}
            </span>
            <div>
              {/* LARGE BOLD € FIGURE */}
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 block tracking-tight">
                {data.savingsFigure}
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 block mt-0.5">
                {data.savingsUnit}
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer / Transparency note (labeled Beispiel, never guaranteed) */}
        <div className="pt-2 border-t border-slate-200/70 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="italic leading-normal max-w-2xl">
            {data.disclaimer}
          </p>

          <Link
            to={data.ctaLink}
            onClick={onCtaClick}
            className="inline-flex items-center gap-1.5 font-bold text-[#0047AB] dark:text-[#f0a83f] hover:underline underline-offset-4 shrink-0"
          >
            <span>{data.ctaText}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
