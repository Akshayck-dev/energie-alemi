import React from 'react';
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
    <div className={cn("relative", className)}>
      {/* Vertical Line */}
      <div className="absolute left-[1.4rem] md:left-[2rem] top-8 bottom-8 w-px border-l-2 border-dashed border-[#0047AB]/30 -z-10"></div>
      
      <div className="flex flex-col gap-6 md:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-row gap-4 md:gap-8 items-start relative group">
            
            {/* Step Number */}
            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-heading font-bold text-lg md:text-xl z-10 shadow-lg group-hover:scale-110 transition-all duration-300 mt-6 md:mt-2">
              {step.number}
            </div>

            {/* Content Card */}
            <div className="flex-1 bg-white dark:bg-[#0a1628] rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col md:flex-row gap-4 md:gap-6 items-start transition-all duration-300 hover:-translate-y-1">
              <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[#f0f4ff] flex items-center justify-center text-[#0047AB] group-hover:bg-[#0047AB] group-hover:text-white transition-colors duration-300">
                <div className="scale-100 md:scale-125">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1 pt-1 md:pt-0">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-white/80 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
