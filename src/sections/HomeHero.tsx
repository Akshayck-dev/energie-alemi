import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';
import OptimizedVideo from '../components/OptimizedVideo';
import CompareModal from '../components/CompareModal';

import heroElectricity from '../assets/hero_elecrticty_video.mp4';
import heroGas from '../assets/hero_gas_video.mp4';
import heroInternet from '../assets/hero_internet_video.mp4';

import electricityPosterDesk from '../assets/electricity hero desk.webp';
import electricityPosterMob from '../assets/electricity mob.webp';
import gasPosterDesk from '../assets/gas hero desk.webp';
import gasPosterMob from '../assets/gas hero mob.webp';
import internetPosterDesk from '../assets/internet hero desktop.webp';
import internetPosterMob from '../assets/internet hero mob.webp';

const HERO_VIDEOS_CONFIG = [
  {
    desktopMp4: heroElectricity,
    poster: electricityPosterDesk,
    mobilePoster: electricityPosterMob,
  },
  {
    desktopMp4: heroGas,
    poster: gasPosterDesk,
    mobilePoster: gasPosterMob,
  },
  {
    desktopMp4: heroInternet,
    poster: internetPosterDesk,
    mobilePoster: internetPosterMob,
  }
];

const VIDEO_DURATION = 8; // 8 seconds per video before switching
const FADE_DURATION = 1500; // 1.5s smooth crossfade

export default function HomeHero() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenModal = () => {
    // Determine service based on active video index
    let service = '';
    if (activeIndex === 0) service = 'Strom';
    else if (activeIndex === 1) service = 'Gas';
    else if (activeIndex === 2) service = 'Internet';
    setSelectedService(service);
    setIsCompareModalOpen(true);
  };
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advanceVideo = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_VIDEOS_CONFIG.length);
  }, []);

  useEffect(() => {
    // Schedule next slide switch
    timerRef.current = setTimeout(advanceVideo, VIDEO_DURATION * 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, advanceVideo]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#0a1628]">
      {/* LCP Optimization: Preload first slide poster image */}
      <Helmet>
        <link rel="preload" as="image" href={electricityPosterDesk} media="(min-width: 769px)" fetchPriority="high" />
        <link rel="preload" as="image" href={electricityPosterMob} media="(max-width: 768px)" fetchPriority="high" />
      </Helmet>

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {HERO_VIDEOS_CONFIG.map((cfg, i) => (
          <OptimizedVideo
            key={cfg.desktopMp4}
            desktopMp4={cfg.desktopMp4}
            poster={cfg.poster}
            mobilePoster={cfg.mobilePoster}
            priority={i === 0}
            active={activeIndex === i}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity",
              activeIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            style={{
              transition: `opacity ${FADE_DURATION}ms ease-in-out`
            } as React.CSSProperties}
          />
        ))}
        {/* Dark gradient for text legibility on the left, leaving the right side clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/60 to-transparent md:w-[80%] z-10" />
        
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
            <span className="text-[#4F8CFF]">{t('home_hero.title_line2')}</span><br />
            {t('home_hero.title_line3')}
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
        {HERO_VIDEOS_CONFIG.map((_, i) => (
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
      <CompareModal isOpen={isCompareModalOpen} onClose={() => setIsCompareModalOpen(false)} defaultService={selectedService} />
    </section>
  );
}
