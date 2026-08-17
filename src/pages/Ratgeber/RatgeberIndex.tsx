import { Link } from 'react-router';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { articles } from '../../data/ratgeberArticles';
import { cn } from '../../lib/utils';

export default function RatgeberIndex() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a1628] py-24 md:py-32">
      <SEO 
        url="/ratgeber" 
      />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-[#0047AB] dark:text-[#f0a83f] font-semibold mb-4">
            <BookOpen size={24} className={cn(i18n.dir() === 'rtl' ? "ml-2" : "mr-0")} />
            <span className="uppercase tracking-wider text-sm font-heading">{t('ratgeber.badge')}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('ratgeber.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {t('ratgeber.desc_1')}<Link to="/electricity" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('ratgeber.desc_strom')}</Link>, <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('ratgeber.desc_gas')}</Link> {t('nav.and', 'und')} <Link to="/internet" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('ratgeber.desc_internet')}</Link>{t('ratgeber.desc_or')}<Link to="/contact" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('ratgeber.desc_contact')}</Link>{t('ratgeber.desc_end')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              to={`/ratgeber/${article.slug}`}
              className="bg-white dark:bg-[#112240] rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="inline-block px-3 py-1 rounded-full bg-[#f0f4ff] dark:bg-white/5 text-[#0047AB] dark:text-[#f0a83f] text-xs font-semibold mb-4 w-fit">
                  {article.category}
                </div>
                <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#0047AB] dark:group-hover:text-[#f0a83f] transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 flex-grow">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-[#0047AB] dark:text-[#f0a83f] font-semibold text-sm mt-auto">
                  {t('ratgeber.read_article')} 
                  <ArrowRight size={16} className={cn("transition-transform", i18n.dir() === 'rtl' ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1")} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
