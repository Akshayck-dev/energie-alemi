import { cn } from '../lib/utils';
import brandLogo from '../assets/logo_transparent.webp';
import { useTheme } from '../contexts/ThemeContext';

interface LogoVideoProps {
  className?: string;
}

export default function LogoVideo({ className }: LogoVideoProps) {
  const { theme } = useTheme();

  return (
    <img
      src={brandLogo}
      alt="Energie Alemi Logo"
      className={cn(
        "pointer-events-none object-contain transition-[filter] duration-300",
        // In dark mode, invert the dark logo so text+icon turn white/light
        theme === 'dark'
          ? "brightness-0 invert"
          : "",
        className
      )}
      width="1254"
      height="1254"
    />
  );
}
