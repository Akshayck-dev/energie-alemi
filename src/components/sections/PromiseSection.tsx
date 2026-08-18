export interface PromiseFeature {
  icon: React.ReactNode;
  text1: string;
  text2: string;
}

export interface PromiseSectionProps {
  subtitle: string;
  titleLine1: React.ReactNode;
  titleLine2: React.ReactNode;
  description: string;
  features: PromiseFeature[];
  image: string;
  quote: string;
}

export default function PromiseSection({
  subtitle,
  titleLine1,
  titleLine2,
  description,
  features,
  image,
  quote
}: PromiseSectionProps) {
  return (
    <section className="py-14 md:py-24 bg-slate-50 dark:bg-[#051024] relative overflow-x-hidden md:overflow-hidden text-slate-900 dark:text-white">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#0047AB]/10 to-transparent pointer-events-none transform-gpu" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          
          <div className="w-full lg:w-5/12 relative z-20">
            <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              {subtitle}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              {titleLine1}<br />
              <span className="text-[#0047AB] dark:text-[#4F8CFF]">{titleLine2}</span>
            </h2>
            <p className="text-slate-600 dark:text-white/80 text-base mb-12 leading-relaxed max-w-md">
              {description}
            </p>
 
            <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-xs leading-tight">
                    {feature.text1}<br/>{feature.text2}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-end relative mt-12 lg:mt-0">
            {/* Advisor image container */}
            <div className="relative z-10 w-full max-w-[500px]">
               <img 
                 src={image} 
                 alt="Advisor" 
                 loading="lazy"
                 decoding="async"
                 className="w-full h-[380px] sm:h-[480px] md:h-[540px] object-cover object-top rounded-3xl shadow-xl border border-slate-200 dark:border-white/10"
                 width="500" height="600" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 dark:from-[#051024]/80 via-transparent to-transparent z-10 rounded-3xl" />
            </div>

            {/* Blockquote card placed below image on mobile, and offset bottom-left on desktop */}
            <div className="relative z-20 mt-[-40px] sm:mt-[-60px] lg:mt-0 lg:absolute lg:bottom-6 lg:left-0 xl:-left-8 bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-[92%] sm:w-[85%] lg:w-auto lg:max-w-md border border-slate-100 dark:border-white/10 shadow-2xl">
              <div className="text-[#E5A937] text-6xl font-serif absolute -top-2 ltr:left-6 rtl:right-6 opacity-80 leading-none">"</div>
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium relative z-10 leading-relaxed mt-3">
                {quote}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
