import { useState, useEffect } from 'react';
import { Search, FileCheck, Handshake, ArrowRight } from 'lucide-react';

export default function HomeFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 md:py-24 bg-slate-50 dark:bg-[#051024] relative z-20 -mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-[#0047AB] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              WELCOME TO
            </h3>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
              ENERGIE ALEMI
            </h2>
            <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed mb-6">
              We analyze your current electricity, gas, or telecommunications contracts and compare them with hundreds of tariffs from various providers. This allows us to find the most economical tariff that best suits your business.
            </p>
            <div className="w-12 h-[3px] bg-[#0047AB]"></div>
          </div>

          {/* Right Features Box */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-[#0a1628] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 p-6 md:py-8 md:px-12 relative overflow-hidden md:overflow-visible">
              <div 
                className="flex md:grid md:grid-cols-3 md:gap-0 relative transition-transform duration-500 ease-in-out md:!transform-none"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                
                {/* Feature 1 */}
                <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                  <div className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white shadow-sm shrink-0 mb-4">
                    <Search size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Free tariff<br/>comparison</h4>
                  <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                    We compare hundreds of tariffs so you get the best deal – for free.
                  </p>
                  <button className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0">
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Divider 1 */}
                <div className="hidden md:block absolute left-1/3 top-2 bottom-2 w-px bg-slate-100 dark:bg-[#0c1d3d] z-10"></div>

                {/* Feature 2 */}
                <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                  <div className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white shadow-sm shrink-0 relative mb-4">
                    <FileCheck size={28} strokeWidth={1.5} />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E5A937" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Contract<br/>optimization</h4>
                  <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                    We analyze your contracts and find savings potential you might miss.
                  </p>
                  <button className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0">
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Divider 2 */}
                <div className="hidden md:block absolute left-2/3 top-2 bottom-2 w-px bg-slate-100 dark:bg-[#0c1d3d] z-10"></div>

                {/* Feature 3 */}
                <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                  <div className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white shadow-sm shrink-0 mb-4">
                    <Handshake size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Personal<br/>consultation</h4>
                  <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                    Our experts are here for you – personal, independent and committed.
                  </p>
                  <button className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0">
                    <ArrowRight size={18} />
                  </button>
                </div>

              </div>

              {/* Mobile Pagination Dots */}
              <div className="flex md:hidden justify-center gap-2 mt-5 relative z-10">
                {[0, 1, 2].map((index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-[#0047AB]' : 'w-1.5 bg-slate-200 dark:bg-white dark:bg-[#0a1628]/10'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
