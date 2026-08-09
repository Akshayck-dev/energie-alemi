
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ChevronRight, Calendar } from 'lucide-react';
import SEO from '../../components/SEO';
import type { RatgeberArticle } from '../../data/ratgeberArticles';

interface ArticleLayoutProps {
  article: RatgeberArticle;
  children: ReactNode;
  faqs?: Array<{ question: string; answer: string }>;
}

export default function ArticleLayout({ article, children, faqs }: ArticleLayoutProps) {
  const url = `/ratgeber/${article.slug}`;

  // Format dates for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1628] py-24 md:py-32">
      <SEO 
        title={article.title} 
        description={article.description} 
        url={url} 
        faqs={faqs}
        isArticle={true}
        datePublished={article.publishedDate}
        dateModified={article.updatedDate}
      />
      
      <article className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#0047AB] dark:hover:text-[#60a5fa] transition-colors">Startseite</Link>
          <ChevronRight size={14} className="shrink-0" />
          <Link to="/ratgeber" className="hover:text-[#0047AB] dark:hover:text-[#60a5fa] transition-colors">Ratgeber</Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-slate-800 dark:text-slate-200 truncate">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#f0f4ff] dark:bg-[#1a2c47] text-[#0047AB] dark:text-[#60a5fa] text-sm font-semibold mb-6">
            {article.category}
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            {article.title}
          </h1>
          
          {/* Dates */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-slate-500 dark:text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Veröffentlicht: {formatDate(article.publishedDate)}</span>
            </div>
            {article.updatedDate && (
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Zuletzt aktualisiert: {formatDate(article.updatedDate)}</span>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          {children}
        </div>
      </article>
    </div>
  );
}
