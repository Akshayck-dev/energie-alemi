import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    icon, 
    iconPosition = 'right',
    fullWidth,
    children, 
    ...props 
  }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out overflow-hidden rounded-full group";
    
    const variants = {
      primary: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200",
      secondary: "bg-[#0047AB] text-white hover:bg-[#003380]",
      accent: "bg-[#E5A937] text-white hover:bg-[#c99026]",
      outline: "border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white",
      ghost: "text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3.5 md:py-3 min-h-[52px] md:min-h-0 text-sm md:text-base",
      lg: "px-8 py-4 min-h-[56px] md:min-h-0 text-base md:text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      >
        {/* Glow effect on hover for primary/accent */}
        {(variant === 'primary' || variant === 'accent') && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white dark:bg-[#0a1628] transition-opacity duration-300 rounded-full" />
        )}
        
        <span className="relative z-10 flex items-center gap-2">
          {icon && iconPosition === 'left' && (
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              {icon}
            </span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {icon}
            </span>
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
