import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export default function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("relative pb-[15vh]", className)}>
      {/* Vertical Line */}
      <div className="absolute left-[1.4rem] md:left-[2rem] top-8 bottom-8 w-px border-l-2 border-dashed border-[#0047AB]/30 -z-10"></div>
      
      <div className="flex flex-col relative">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="flex flex-row gap-4 md:gap-8 items-start relative group sticky mb-12 md:mb-16"
            style={{ top: `calc(15vh + ${index * 1.5}rem)`, zIndex: index + 10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            
            {/* Step Number */}
            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-heading font-bold text-lg md:text-xl z-10 shadow-lg group-hover:scale-105 transition-all duration-300 mt-6 md:mt-2 border-4 border-slate-50 dark:border-[#0a1628]">
              {step.number}
            </div>

            {/* Content Card */}
            <div className="flex-1 bg-white dark:bg-[#051024] rounded-2xl p-6 md:p-8 shadow-[0_-5px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_-5px_30px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-4 md:gap-6 items-start transition-all duration-300">
              <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[#f0f4ff] dark:bg-[#0a1628] flex items-center justify-center text-[#0047AB] dark:text-[#f0a83f] group-hover:bg-[#0047AB] group-hover:text-white dark:group-hover:bg-[#f0a83f] dark:group-hover:text-[#051024] border border-transparent dark:border-white/10 transition-colors duration-300">
                <div className="scale-100 md:scale-125">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1 pt-1 md:pt-0">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-[#0047AB] dark:group-hover:text-[#f0a83f] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-white/80 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
