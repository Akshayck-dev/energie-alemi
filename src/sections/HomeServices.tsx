import { useEffect, useRef } from 'react';
import { Zap, Flame, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesConfig = [
  {
    id: 'electricity',
    icon: Zap,
    color: 'text-amber-400',
    glow: 'group-hover:shadow-[0_0_24px_rgba(251,191,36,0.35)]',
    bg: 'bg-amber-400/10'
  },
  {
    id: 'gas',
    icon: Flame,
    color: 'text-rose-500',
    glow: 'group-hover:shadow-[0_0_24px_rgba(244,63,94,0.35)]',
    bg: 'bg-rose-500/10'
  },
  {
    id: 'internet',
    icon: Wifi,
    color: 'text-blue-500',
    glow: 'group-hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]',
    bg: 'bg-blue-500/10'
  }
];

export default function HomeServices() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Zoom Effect on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1.05 },
        {
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          }
        }
      );

      // Line drawing animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 85%',
          }
        }
      );

      // Staggered fade up for service items
      gsap.fromTo(
        itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-[#0a1628] relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-16">
          <h3 className="text-[#0047AB] font-heading font-medium tracking-wider uppercase text-sm mb-2">
            {t('home_services.subtitle')}
          </h3>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {t('home_services.title_part1')} <span className="text-slate-400 dark:text-white/50">{t('home_services.title_part2')}</span>
          </h2>
        </div>

        {/* Premium Image Container */}
        <div className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-[24px] md:rounded-[32px] overflow-hidden mb-16 md:mb-24 shadow-[0_20px_60px_rgba(5,16,36,0.12)] border border-slate-100 relative group">
          <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-700 group-hover:bg-black/5" />
          <img 
            ref={imageRef}
            src="/smart-home.png" 
            alt="Modern European Smart Home" 
            className="w-full h-full object-cover object-center origin-center"
          />
        </div>

        {/* Services Showcase */}
        <div className="relative">
          {/* Animated Connecting Line (Hidden on mobile swipe view, shown on desktop) */}
          <div className="hidden md:block absolute top-[42px] md:top-[48px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0">
            <div ref={lineRef} className="w-full h-full bg-gradient-to-r from-amber-400 via-rose-500 to-blue-500 opacity-70" />
          </div>

          {/* Service Items: Horizontal Swipeable on Mobile, Grid on Desktop */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-0 snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {servicesConfig.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className="w-[85vw] sm:w-[320px] md:w-auto shrink-0 snap-center flex flex-col items-center text-center group cursor-pointer relative z-10"
                >
                  {/* Premium Icon Container */}
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-[#0a1628] flex items-center justify-center border border-slate-100 shadow-sm mb-6 transition-all duration-500 ${service.glow} relative`}>
                    <div className={`absolute inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.bg}`} />
                    <Icon size={32} strokeWidth={1.5} className={`${service.color} relative z-10 transition-transform duration-500 group-hover:scale-110`} />
                  </div>
                  
                  {/* Text Content */}
                  <h4 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                    {t(`home_services.items.${service.id}.title`)}
                  </h4>
                  <p className="text-slate-500 dark:text-white/60 text-base md:text-lg max-w-[280px]">
                    {t(`home_services.items.${service.id}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
          
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
