import { ArrowRight, ShieldCheck, Award, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useCallback } from 'react';
import Button from '../components/ui/Button';

import heroElectricity from '../assets/hero_elecrticty_video.mp4';
import heroGas from '../assets/hero_gas_video.mp4';
import heroInternet from '../assets/hero_internet_video.mp4';

const HERO_VIDEOS = [heroElectricity, heroGas, heroInternet];
const VIDEO_DURATION = 4; // seconds per video before switching
const FADE_DURATION = 1500; // 1.5s smooth crossfade

export default function HomeHero() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advanceVideo = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  }, []);

  useEffect(() => {
    // Play the active video from the start
    const video = videoRefs.current[activeIndex];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    // Schedule next switch
    timerRef.current = setTimeout(advanceVideo, VIDEO_DURATION * 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, advanceVideo]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#0a1628]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {HERO_VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[i] = el; }}
            src={src}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-[center_60%] md:object-[80%_60%]"
            style={{
              opacity: activeIndex === i ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            }}
          />
        ))}
        {/* Dark gradient for text legibility on the left, leaving the right side clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/60 to-transparent md:w-[80%]" />
        
        {/* Subtle bottom gradient to blend with the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-[#0a1628] to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[60%] lg:w-[55%] pt-12 md:pt-0">
          <p className="text-[#E5A937] font-heading font-medium tracking-widest uppercase mb-3 md:mb-4 text-xs">
            {t('home_hero.subtitle')}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
            {t('home_hero.title_line1')}<br />
            <span className="text-[#4F8CFF]">{t('home_hero.title_line2')}</span><br />
            {t('home_hero.title_line3')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/75 mb-8 md:mb-10 max-w-md leading-relaxed font-light">
            {t('home_hero.description_part1')}<span className="text-[#4F8CFF] font-medium">{t('home_hero.description_part2')}</span>{t('home_hero.description_part3')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" icon={<ArrowRight size={18} className="rtl:rotate-180" />} className="w-full sm:w-auto justify-center">
              {t('home_hero.get_comparison')}
            </Button>
            <Button variant="outline" className="w-full sm:w-auto justify-center border-white/20 text-white hover:bg-white/10 hover:text-white" icon={<ArrowRight size={18} className="rtl:rotate-180" />}>
              {t('home_hero.our_services')}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
