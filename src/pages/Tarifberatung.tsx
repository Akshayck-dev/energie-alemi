import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import TarifberatungServices from '../sections/TarifberatungServices';
import TarifberatungProcess from '../sections/TarifberatungProcess';
import TarifberatungPromise from '../sections/TarifberatungPromise';
import SEO from "../components/SEO";

export default function Tarifberatung() {
  const { t } = useTranslation();

  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO url="/tarifberatung-aachen" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white dark:bg-[#0a1628] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0047AB]/5 dark:bg-[#f0a83f]/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            {t('tarifberatung.hero_title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('tarifberatung.hero_desc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#0047AB] hover:bg-[#003380] text-white rounded-full font-semibold transition-colors flex items-center shadow-lg hover:shadow-xl">
              {t('tarifberatung.hero_btn_primary', 'Unverbindliche Anfrage stellen')} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <TarifberatungServices />
      </div>

      {/* Process section slides over Services */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <TarifberatungProcess />
      </div>

      {/* Promise slides over Process */}
      <div className="relative z-40 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <TarifberatungPromise />
      </div>
    </div>
  );
}
