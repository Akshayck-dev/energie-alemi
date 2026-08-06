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
    description: string;
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
  accentColor = 'bg-amber-500'
}: ServiceHeroProps) {
  const isDark = theme === 'dark';

  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-between pt-24 pb-8 lg:pt-32 lg:pb-10 overflow-hidden w-full">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {bgImageMobile ? (
          <>
            <img src={bgImage} alt="" className="hidden md:block w-full h-full object-cover object-center" />
            <img src={bgImageMobile} alt="" className="block md:hidden w-full h-full object-cover object-center" />
          </>
        ) : (
          <img src={bgImage} alt="" className="w-full h-full object-cover object-center" />
        )}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r",
            isDark 
              ? "from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent bg-gradient-to-t md:bg-gradient-to-r" 
              : "from-white/95 via-white/80 to-transparent/30 bg-gradient-to-t md:bg-gradient-to-r"
          )} 
        />
        {isDark && <div className="absolute inset-0 bg-black/40 md:hidden" />}
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center mb-12">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center border", isDark ? "bg-black/50 border-white/10" : "bg-white border-slate-200 shadow-sm")}>
              <div className="text-amber-500">
                {badgeIcon}
              </div>
            </div>
            <span className={cn("font-bold tracking-widest uppercase text-sm", isDark ? "text-amber-500" : "text-amber-600")}>
              {badgeText}
            </span>
          </div>

          {/* Title */}
          <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6", isDark ? "text-white" : "text-slate-900")}>
            {title}
          </h1>

          {/* Description */}
          <p className={cn("text-lg md:text-xl mb-10 max-w-xl", isDark ? "text-slate-300" : "text-slate-600")}>
            {description}
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {bulletPoints.map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className={cn("mt-1 flex-shrink-0", isDark ? "text-amber-500" : "text-amber-500")}>
                  {point.icon}
                </div>
                <div>
                  <h3 className={cn("font-semibold text-lg mb-1", isDark ? "text-white" : "text-slate-900")}>
                    {point.title}
                  </h3>
                  <p className={cn("text-sm leading-relaxed", isDark ? "text-slate-400" : "text-slate-600")}>
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={onButtonClick}
            className={cn("px-8 py-4 rounded-xl font-bold text-white flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-lg", accentColor)}
          >
            {buttonText}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
