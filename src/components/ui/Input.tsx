import React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/50 pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a1628] px-4 py-2 text-sm text-slate-900 dark:text-white ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 dark:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047AB]/20 focus-visible:border-[#0047AB] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
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
Input.displayName = "Input"

export { Input }
