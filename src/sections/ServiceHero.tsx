import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export interface ServiceHeroProps {
  theme: 'dark' | 'light';
  badgeIcon: React.ReactNode;
  badgeText: string;
  title: React.ReactNode;
  description: string;
  bgImage: string;
  bgImageMobile?: string;
  bulletPoints: {
    icon: React.ReactNode;
    title: string;
    description?: string;
  }[];
  buttonText: string;
  onButtonClick?: () => void;
  accentColor?: string;
}

export default function ServiceHero({
  theme,
  badgeIcon,
  badgeText,
  title,
  description,
  bgImage,
  bgImageMobile,
  bulletPoints,
  buttonText,
  onButtonClick,
  accentColor = 'bg-amber-500',
}: ServiceHeroProps) {
  const isDark = theme === 'dark';

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden w-full"
      style={{ minHeight: 'clamp(680px, 90vh, 900px)' }}
    >
      {/* ── Background image ───────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {bgImageMobile ? (
          <>
            <img
              src={bgImage}
              alt=""
              className="hidden md:block w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
            <img
              src={bgImageMobile}
              alt=""
              className="block md:hidden w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </>
        ) : (
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        )}

        {/* Gradient: strong darkness behind text → transparent over subject */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'linear-gradient(to right, rgba(6,11,22,0.93) 0%, rgba(6,11,22,0.80) 38%, rgba(6,11,22,0.38) 68%, rgba(6,11,22,0.04) 100%)'
              : 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.84) 38%, rgba(255,255,255,0.38) 68%, rgba(255,255,255,0.04) 100%)',
          }}
        />

        {/* Mobile: uniform tint for contrast */}
        <div
          className={cn(
            'absolute inset-0 md:hidden',
            isDark ? 'bg-black/50' : 'bg-white/50'
          )}
        />
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div
        className="relative z-10 w-full"
        style={{
          paddingTop: 'clamp(96px, 11vw, 148px)',
          paddingBottom: 'clamp(48px, 7vw, 96px)',
          paddingLeft: 'clamp(24px, 7vw, 148px)',
          paddingRight: 'clamp(24px, 7vw, 148px)',
        }}
      >
        <div style={{ maxWidth: '660px' }}>

          {/* 1. Category badge */}
          <div className="flex items-center gap-3 mb-7 md:mb-9">
            <div
              className={cn(
                'w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border flex-shrink-0',
                isDark
                  ? 'bg-black/50 border-white/10'
                  : 'bg-white border-slate-200 shadow-sm'
              )}
            >
              <span className="text-amber-500 [&>svg]:w-5 [&>svg]:h-5">
                {badgeIcon}
              </span>
            </div>
            <span
              className={cn(
                'font-bold tracking-[0.15em] uppercase text-xs md:text-sm',
                isDark ? 'text-amber-500' : 'text-amber-600'
              )}
            >
              {badgeText}
            </span>
          </div>

          {/* 2. Heading — max 2 lines at desktop */}
          <h1
            className={cn(
              'font-bold leading-[1.08] tracking-tight mb-5 md:mb-6',
              isDark ? 'text-white' : 'text-slate-900'
            )}
            style={{ fontSize: 'clamp(2.6rem, 5vw, 5.25rem)' }}
          >
            {title}
          </h1>

          {/* 3. Short description — max 2 lines */}
          <p
            className={cn(
              'leading-relaxed mb-9 md:mb-10',
              isDark ? 'text-slate-300/90' : 'text-slate-600'
            )}
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)',
              maxWidth: '500px',
            }}
          >
            {description}
          </p>

          {/* 4. Primary CTA */}
          <button
            onClick={onButtonClick}
            className={cn(
              'inline-flex items-center gap-3 px-7 py-3.5 md:py-4 rounded-xl font-bold text-white',
              'transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]',
              'shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2',
              'mb-11 md:mb-14',
              accentColor
            )}
            style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)' }}
          >
            {buttonText}
            <ArrowRight size={18} className="motion-safe:transition-transform group-hover:translate-x-1" />
          </button>

          {/* 5. Trust points — icon + title only, inline */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-10 lg:gap-x-14">
            {bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className={cn(
                    'flex-shrink-0 [&>svg]:w-[18px] [&>svg]:h-[18px]',
                    isDark ? 'text-amber-400' : 'text-amber-500'
                  )}
                >
                  {point.icon}
                </span>
                <span
                  className={cn(
                    'font-semibold text-sm md:text-[0.925rem] whitespace-nowrap',
                    isDark ? 'text-white/85' : 'text-slate-700'
                  )}
                >
                  {point.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
