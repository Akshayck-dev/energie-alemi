import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Home, Zap, Flame, Wifi } from 'lucide-react';

export default function MobileBottomNav() {
  const { t } = useTranslation();

  const navItems = [
    { to: "/", icon: <Home size={20} strokeWidth={2} />, label: t('nav.home') || 'Home' },
    { to: "/electricity", icon: <Zap size={20} strokeWidth={2} />, label: t('nav.electricity') || 'Strom' },
    { to: "/gas", icon: <Flame size={20} strokeWidth={2} />, label: t('nav.gas') || 'Gas' },
    { to: "/internet", icon: <Wifi size={20} strokeWidth={2} />, label: t('nav.internet') || 'Internet' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#051024]/80 backdrop-blur-md border-t border-slate-200 dark:border-white/10 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_20px_rgba(0,0,0,0.3)] transition-colors duration-300">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
                        className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full gap-1 transition-all duration-300 ${
                isActive
                  ? 'text-[#0047AB] dark:text-[#f0a83f]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`relative p-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-[#0047AB]/10 dark:bg-[#f0a83f]/10' : ''}`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-bold tracking-wide ${isActive ? '' : 'font-medium'}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
