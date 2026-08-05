import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

interface ServiceHeroProps {
  titleLine1: React.ReactNode;
  titleLine2: React.ReactNode;
  description: React.ReactNode;
  glowColor?: string;
  graphic?: React.ReactNode;
  rating?: boolean;
}

export default function ServiceHero({ 
  titleLine1, 
  titleLine2, 
  description, 
  glowColor = 'bg-cyan-500/10',
  graphic,
  rating = true
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[max(100vh,900px)] flex items-center py-20 md:py-32 overflow-hidden bg-white dark:bg-[#0a1628]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 ${glowColor} rounded-full blur-[120px] transform-gpu`} />
        {/* Placeholder background building image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0a1628] via-white/90 dark:via-[#0a1628]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[60%] lg:w-[50%] pt-12 md:pt-0">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-4 md:mb-6">
            {titleLine1}<br />
            <span className="text-[#0047AB] font-light">{titleLine2}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-white/80 mb-8 md:mb-10 max-w-lg leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" icon={<ArrowRight size={18} />} className="w-full sm:w-auto justify-center">
              Non-binding consultation
            </Button>
            <Button variant="outline" className="w-full sm:w-auto justify-center border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#051024] hover:text-slate-900 dark:hover:text-white">
              Our services
            </Button>
          </div>

          {rating && (
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=3" alt="Avatar" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#E5A937] text-sm">
                  <span className="text-slate-900 dark:text-white font-medium mr-1">4.9/5</span>
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-slate-600 dark:text-white/80 text-xs mt-1">Trusted by 300+ businesses</p>
              </div>
            </div>
          )}
        </div>

        {/* Right side graphic */}
        <div className="hidden md:flex w-full md:w-[40%] lg:w-[50%] justify-center mt-12 md:mt-0 relative">
          {graphic || (
            <div className="w-72 h-72 lg:w-[28rem] lg:h-[28rem] rounded-full border-[3px] border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.3)] flex items-center justify-center relative backdrop-blur-sm">
              <div className="absolute inset-2 border border-cyan-300/30 rounded-full" />
              {/* Default graphic icon */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
