
import { Link } from 'react-router';
import { ArrowRight, BookOpen } from 'lucide-react';
import SEO from '../../components/SEO';
import { articles } from '../../data/ratgeberArticles';

export default function RatgeberIndex() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a1628] py-24 md:py-32">
      <SEO 
        title="Ratgeber: Strom, Gas & Internet Tarife in Aachen" 
        description="Wertvolle Tipps rund um den Stromvergleich, Gasanbieterwechsel und Internetvergleich. Finden Sie den passenden Tarif für Ihr Zuhause." 
        url="/ratgeber" 
      />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-[#0047AB] dark:text-[#f0a83f] font-semibold mb-4">
            <BookOpen size={24} />
            <span className="uppercase tracking-wider text-sm font-heading">Energie Alemi Ratgeber</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ratgeber für Strom, Gas & Internet in Aachen
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Wertvolles Wissen, praktische Tipps und klare Anleitungen für Ihren Anbieterwechsel in Aachen. Nutzen Sie auch unsere direkten Vergleiche für <Link to="/electricity" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Strom</Link>, <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Gas</Link> und <Link to="/internet" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Internet</Link> oder nehmen Sie <Link to="/contact" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">persönlichen Kontakt</Link> auf.
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
                  Artikel lesen 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
