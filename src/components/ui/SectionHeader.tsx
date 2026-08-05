import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "flex flex-col gap-4 mb-12",
      align === 'center' ? 'text-center items-center mx-auto max-w-3xl' : '',
      align === 'right' ? 'text-right items-end' : '',
      align === 'left' ? 'text-left items-start' : '',
      className
    )}>
      {subtitle && (
        <span className={cn(
          "font-heading font-medium tracking-wider uppercase text-sm",
          light ? "text-[#E5A937]" : "text-[#0047AB]"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight",
        light ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg",
          light ? "text-slate-600 dark:text-white/80" : "text-slate-600 dark:text-white/80",
          align === 'center' ? 'mx-auto' : ''
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
