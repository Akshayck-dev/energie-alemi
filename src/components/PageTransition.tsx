import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import { Zap, Flame, Wifi, Home, Info, Mail } from 'lucide-react';
import type { ReactNode } from 'react';

const getRouteConfig = (pathname: string) => {
  if (pathname.includes('gas')) return { color: 'bg-rose-500', icon: Flame };
  if (pathname.includes('electricity')) return { color: 'bg-amber-400', icon: Zap };
  if (pathname.includes('internet')) return { color: 'bg-blue-500', icon: Wifi };
  if (pathname.includes('about')) return { color: 'bg-slate-800', icon: Info };
  if (pathname.includes('contact')) return { color: 'bg-[#0047AB]', icon: Mail };
  return { color: 'bg-[#0a1628]', icon: Home };
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { color, icon: Icon } = getRouteConfig(location.pathname);

  return (
    <>
      {/* 
        Enter Panel:
        When the page mounts, this panel is already covering the screen (top: 0).
        It animates to top: -100% (sliding up, revealing the page).
      */}
      <motion.div
        className={`fixed inset-0 z-[100] flex items-center justify-center ${color} origin-top`}
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Icon size={80} className="text-white opacity-80" />
      </motion.div>

      {/* 
        Exit Panel:
        When the page unmounts, this panel starts at bottom (top: 100%).
        It animates to top: 0 (sliding up, covering the screen).
      */}
      <motion.div
        className={`fixed inset-0 z-[100] flex items-center justify-center ${color} origin-bottom`}
        initial={{ y: "100%" }}
        animate={{ y: "100%" }}
        exit={{ y: "0%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Icon size={80} className="text-white opacity-80" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
