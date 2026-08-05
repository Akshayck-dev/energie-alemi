import React from 'react';
import { cn } from '../../lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: 'outline' | 'solid' | 'glass';
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
  variant = 'solid'
}: FeatureCardProps) {
  
  const variants = {
    solid: "bg-white dark:bg-[#0a1628] shadow-xl shadow-slate-200/40 border border-slate-100",
    outline: "border-2 border-slate-200 dark:border-white/10 bg-transparent",
    glass: "glass text-white",
  };

  return (
    <div className={cn(
      "rounded-2xl p-8 flex flex-col items-center text-center gap-3 md:gap-5 transition-all duration-300 hover:-translate-y-2 group",
      variants[variant],
      className
    )}>
      <div className={cn(
        "w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110",
        variant === 'glass' ? "bg-white dark:bg-[#0a1628]/10" : "bg-[#f0f4ff]"
      )}>
        <div className={cn(
          "scale-150 transition-colors duration-300",
          variant === 'glass' ? "text-slate-900 dark:text-white group-hover:text-[#E5A937]" : "text-[#0047AB] group-hover:text-slate-900 dark:group-hover:text-white"
        )}>
          {icon}
        </div>
      </div>
      <h3 className={cn(
        "font-heading text-xl font-semibold",
        variant === 'glass' ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
      )}>
        {title}
      </h3>
      <p className={cn(
        "leading-relaxed",
        variant === 'glass' ? "text-white/80" : "text-slate-600 dark:text-white/80"
      )}>
        {description}
      </p>
    </div>
  );
}
