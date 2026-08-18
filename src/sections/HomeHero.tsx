import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';
import { trackEvent } from '../lib/analytics';

const CompareModal = lazy(() => import('../components/CompareModal'));

import hero1Desk from '../assets/hero_desk.webp';
import hero1Mob from '../assets/hero_mob.webp';
import hero2Desk from '../assets/hero2_desk.webp';
import hero2Mob from '../assets/hero2_mob.webp';
import hero3Desk from '../assets/hero1_net_desk.webp';
import hero3Mob from '../assets/hero1_net_mob.webp';

// Optimized responsive hero images
import hero1Desk1672Webp from '../assets/hero_desk_1672.webp';
import hero1Desk1672Avif from '../assets/hero_desk_1672.avif';
import hero1Tab1024Webp from '../assets/hero_tablet_1024.webp';
import hero1Tab1024Avif from '../assets/hero_tablet_1024.avif';
import hero1Mob640Webp from '../assets/hero_mob_640.webp';
import hero1Mob640Avif from '../assets/hero_mob_640.avif';

const HERO_IMAGES_CONFIG = [
  {
    desktop: hero1Desk,
    mobile: hero1Mob,
  },
  {
    desktop: hero2Desk,
    mobile: hero2Mob,
  },
  {
    desktop: hero3Desk,
    mobile: hero3Mob,
  }
];

const SLIDE_DURATION = 8; // 8 seconds per slide before switching
const FADE_DURATION = 1500; // 1.5s smooth crossfade

export default function HomeHero() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState<number[]>([0]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenModal = () => {
    // Determine service based on active slide index
    let service = '';
    if (activeIndex === 0) service = 'Strom';
    else if (activeIndex === 1) service = 'Gas';
    else if (activeIndex === 2) service = 'Internet';
    setSelectedService(service);
    setIsCompareModalOpen(true);
    trackEvent('service_cta_click', {
      service_type: service.toLowerCase(),
      cta_location: 'home_hero'
    });
  };
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advanceSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_IMAGES_CONFIG.length);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let idleId: number | null = null;
    let fallbackTimeout: ReturnType<typeof setTimeout> | null = null;

    const startIdleLoad = () => {
      const loadRemaining = () => {
        setLoadedIndices([0, 1, 2]);
      };

      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(() => {
          loadRemaining();
        }, { timeout: 2000 });
      } else {
        loadRemaining();
      }
    };

    if (document.readyState === 'complete') {
      fallbackTimeout = setTimeout(startIdleLoad, 1000);
    } else {
      const handleLoad = () => {
        fallbackTimeout = setTimeout(startIdleLoad, 1000);
      };
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        if (idleId && 'cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleId);
        }
        if (fallbackTimeout) clearTimeout(fallbackTimeout);
      };
    }

    return () => {
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };
  }, []);

  useEffect(() => {
    // Schedule next slide switch
    timerRef.current = setTimeout(advanceSlide, SLIDE_DURATION * 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, advanceSlide]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#0a1628]">
      {/* LCP Optimization: Preload first slide images responsive using media queries */}
      <Helmet>
        {/* Mobile Preload */}
        <link 
          rel="preload" 
          as="image" 
          href={hero1Mob640Avif} 
          type="image/avif" 
          media="(max-width: 768px)" 
          fetchPriority="high" 
        />
        {/* Tablet Preload */}
        <link 
          rel="preload" 
          as="image" 
          href={hero1Tab1024Avif} 
          type="image/avif" 
          media="(min-width: 769px) and (max-width: 1024px)" 
          fetchPriority="high" 
        />
        {/* Desktop Preload */}
        <link 
          rel="preload" 
          as="image" 
          href={hero1Desk1672Avif} 
          type="image/avif" 
          media="(min-width: 1025px)" 
          fetchPriority="high" 
        />
      </Helmet>

      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES_CONFIG.map((cfg, i) => {
          const isLoaded = loadedIndices.includes(i);
          if (!isLoaded) return null;

          return (
            <picture
              key={i}
              className={cn(
                "absolute inset-0 w-full h-full transition-opacity",
                activeIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
              style={{
                transition: `opacity ${FADE_DURATION}ms ease-in-out`
              }}
            >
              {i === 0 ? (
                <>
                  {/* AVIF options with intrinsic width and height */}
                  <source media="(max-width: 768px)" type="image/avif" srcSet={hero1Mob640Avif} width="640" height="1000" />
                  <source media="(min-width: 769px) and (max-width: 1024px)" type="image/avif" srcSet={hero1Tab1024Avif} width="1024" height="576" />
                  <source media="(min-width: 1025px)" type="image/avif" srcSet={hero1Desk1672Avif} width="1672" height="941" />

                  {/* WebP options (fallbacks) with intrinsic width and height */}
                  <source media="(max-width: 768px)" type="image/webp" srcSet={hero1Mob640Webp} width="640" height="1000" />
                  <source media="(min-width: 769px) and (max-width: 1024px)" type="image/webp" srcSet={hero1Tab1024Webp} width="1024" height="576" />
                  <source media="(min-width: 1025px)" type="image/webp" srcSet={hero1Desk1672Webp} width="1672" height="941" />
                  
                  <img 
                    src={hero1Desk1672Webp} 
                    alt={`Hero background ${i + 1}`}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="1672"
                    height="941"
                    className="w-full h-full object-cover object-center"
                    onLoad={() => {
                      window.__heroImageLoaded = true;
                      window.dispatchEvent(new Event('hero-image-loaded'));
                    }}
                    ref={(el) => {
                      if (el && el.complete) {
                        window.__heroImageLoaded = true;
                        window.dispatchEvent(new Event('hero-image-loaded'));
                      }
                    }}
                  />
                </>
              ) : (
                <>
                  <source media="(max-width: 768px)" type="image/webp" srcSet={cfg.mobile} />
                  <source media="(min-width: 769px)" type="image/webp" srcSet={cfg.desktop} />
                  <img 
                    src={cfg.desktop} 
                    alt={`Hero background ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </>
              )}
            </picture>
          );
        })}
        {/* Dark gradient for text legibility — anchored to text side */}
        {/* LTR: dark on left, transparent on right */}
        <div className="ltr:block rtl:hidden absolute top-0 left-0 bottom-0 w-full md:w-[80%] bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/60 to-transparent z-10" />
        {/* RTL: dark on right, transparent on left */}
        <div className="rtl:block ltr:hidden absolute top-0 right-0 bottom-0 w-full md:w-[80%] bg-gradient-to-l from-[#0a1628]/95 via-[#0a1628]/60 to-transparent z-10" />
        
        {/* Subtle bottom gradient to blend with the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-[#0a1628] to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-[60%] lg:w-[55%] pt-12 md:pt-0"
        >
          <p className="text-[#E5A937] font-heading font-medium tracking-widest uppercase mb-3 md:mb-4 text-xs">
            {t('home_hero.subtitle')}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
            {t('home_hero.title_line1')}<br />
            <span className="text-[#4F8CFF]">{t('home_hero.title_line2')}</span>
            {t('home_hero.title_line3') ? (
              <>
                <br />
                {t('home_hero.title_line3')}
              </>
            ) : null}
          </h1>
          <p className="text-base text-white/75 mb-8 md:mb-10 max-w-md leading-relaxed font-light">
            {t('home_hero.description_part1')}<span className="text-[#4F8CFF] font-medium">{t('home_hero.description_part2')}</span>{t('home_hero.description_part3')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-0">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto justify-center bg-[#0047AB] hover:bg-[#003380] text-white font-semibold" 
              icon={<ArrowRight size={18} className="rtl:rotate-180" />} 
              onClick={handleOpenModal}
            >
              {t('home_hero.contact_us', 'Contact us')}
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto justify-center border-white/20 text-white hover:bg-white/10 hover:text-white" 
              icon={<ArrowRight size={18} className="rtl:rotate-180" />}
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('home_hero.our_services')}
            </Button>
          </div>

        </motion.div>
      </div>

      {/* Slideshow Progress Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-30 flex justify-center gap-3">
        {HERO_IMAGES_CONFIG.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              activeIndex === i ? "w-10 bg-[#E5A937]" : "w-3 bg-white/40 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Compare Modal Form */}
      {isCompareModalOpen && (
        <Suspense fallback={null}>
          <CompareModal isOpen={isCompareModalOpen} onClose={() => setIsCompareModalOpen(false)} defaultService={selectedService} />
        </Suspense>
      )}
    </section>
  );
}
