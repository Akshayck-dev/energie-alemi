import React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ElementType;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, icon: Icon, error, ...props }, ref) => {
    return (
      <div className="relative w-full flex-col">
        {Icon && (
          <div className="absolute left-4 top-4 text-slate-400 dark:text-white/50 pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a1628] px-4 py-3 text-sm text-slate-900 dark:text-white ring-offset-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047AB]/20 focus-visible:border-[#0047AB] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-y",
            Icon ? "pl-11" : "",
            error ? "border-red-500 focus-visible:ring-red-500/20 focus-visible:border-red-500" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
