import { Star, ExternalLink, Quote, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ReviewsSection() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const reviewsUrl = "https://www.google.com/maps/place/Energie+Alemi/@50.771966,6.083796,17z/data=!3m1!4b1!4m6!3m5!1s0x47c09954dcd7e08d:0x84121f6684dce4be!8m2!3d50.771966!4d6.083796!16s%2Fg%2F11nt_96jv3";

  const reviews = [
    {
      author: 'danial',
      initials: 'D',
      gradient: 'from-blue-600 to-indigo-600',
      rating: 5,
      dateDe: 'Vor 7 Monaten',
      dateEn: '7 months ago',
      quote: 'Gute Beratung. Professionelle Arbeit und faire Preise.',
      serviceDe: 'Tarifberatung & Wechsel',
      serviceEn: 'Tariff Advice & Switch',
    },
    {
      author: 'Aprameya S',
      initials: 'A',
      gradient: 'from-emerald-500 to-teal-600',
      rating: 5,
      dateDe: 'Vor wenigen Tagen',
      dateEn: 'A few days ago',
      quote: "It is very easy and convenient to get work done here!! I'll definitely recommend.",
      serviceDe: 'Vertragsservice Aachen',
      serviceEn: 'Contract Service Aachen',
    },
    {
      author: "DON'T MESS",
      initials: 'DM',
      gradient: 'from-amber-500 to-orange-600',
      rating: 5,
      dateDe: 'Vor 1 Monat',
      dateEn: '1 month ago',
      quote: 'Good people and fast service',
      serviceDe: 'Kundenservice & Betreuung',
      serviceEn: 'Customer Support',
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white dark:bg-[#051024] relative z-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0047AB]/5 dark:bg-[#0047AB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Block with Google Trust Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/40 text-[#0047AB] dark:text-[#60a5fa] text-xs font-semibold uppercase tracking-wider mb-4">
              <CheckCircle2 size={14} className="text-[#0047AB] dark:text-[#60a5fa]" />
              {isEn ? '100% Real Google Reviews' : '100% Echte Google-Bewertungen'}
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              {isEn ? 'What Our Customers Say' : 'Das sagen unsere Kunden'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {isEn 
                ? 'Discover authentic feedback from households and businesses in Aachen who have lowered their electricity, gas, and internet costs with us.' 
                : 'Erfahren Sie, wie Aachener Haushalte und Gewerbetreibende durch unsere unabhängige Tarifberatung für Strom, Gas und Internet bares Geld und wertvolle Zeit sparen.'}
            </p>
          </div>

          {/* Google Summary Card */}
          <div className="bg-slate-50 dark:bg-[#0a1628] rounded-2xl p-5 md:p-6 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 shrink-0">
            {/* Google Logo */}
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#051024] p-2.5 shadow-sm border border-slate-200/80 dark:border-white/10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full" aria-label="Google Logo">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white leading-none">
                  5,0
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {isEn ? 'out of 5 stars' : 'von 5 Sternen'}
                </span>
                <div className="flex items-center gap-0.5 ml-1" aria-label="5 von 5 Sternen">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {isEn ? '16 Google Reviews' : '16 Google-Bewertungen'}
              </p>
            </div>

            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 sm:ml-4 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#12233f] text-slate-800 dark:text-white text-xs font-bold border border-slate-200 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-[#60a5fa] hover:text-[#0047AB] dark:hover:text-[#60a5fa] shadow-sm hover:shadow transition-all group whitespace-nowrap"
            >
              <span>{isEn ? 'All reviews on Google' : 'Alle Bewertungen auf Google'}</span>
              <ExternalLink size={13} className="text-slate-400 group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa] transition-colors" />
            </a>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-50/80 dark:bg-[#0a1628] rounded-3xl p-7 md:p-8 border border-slate-200/80 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between relative group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Decorative quotation icon */}
              <Quote className="absolute top-6 right-6 text-slate-200 dark:text-white/5 w-10 h-10 -scale-x-100 pointer-events-none" />

              <div>
                {/* Reviewer Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${rev.gradient} text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0`}>
                    {rev.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white truncate">
                        {rev.author}
                      </h3>
                      {/* Mini Google G checkmark badge */}
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400" title="Verifizierte Google-Bewertung">
                        <CheckCircle2 size={12} />
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                      {isEn ? rev.dateEn : rev.dateDe}
                    </span>
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-4" aria-label="5 Sterne">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 ml-1.5">
                    5.0
                  </span>
                </div>

                {/* Real Verbatim Quote */}
                <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed font-medium mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium">
                  {isEn ? rev.serviceEn : rev.serviceDe}
                </span>
                <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                  Google
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust footer link */}
        <div className="text-center">
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0047AB] dark:text-[#60a5fa] hover:underline transition-colors"
          >
            <span>{isEn ? 'Read all 16 five-star customer reviews directly on Google' : 'Alle 16 Fünf-Sterne-Bewertungen direkt auf unserem Google-Unternehmensprofil lesen'}</span>
            <ExternalLink size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
