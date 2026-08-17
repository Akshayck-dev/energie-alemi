import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';

export default function NotFound() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-[#0a1628] px-6 py-24">
      <SEO title={t('not_found.seo_title')} description={t('not_found.seo_desc')} />
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-[#E5A937] mb-4">404</h1>
        <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-6">
          {t('not_found.heading')}
        </h2>
        <p className="text-slate-600 dark:text-white/80 mb-10 text-lg">
          {t('not_found.description')}
        </p>
        <Link to="/">
          <Button variant="primary" icon={<Home size={18} className={cn(i18n.dir() === 'rtl' ? "ml-2" : "mr-2")} />} className="w-full sm:w-auto justify-center">
            {t('not_found.back_home')}
          </Button>
        </Link>
      </div>
    </div>
  );
}
