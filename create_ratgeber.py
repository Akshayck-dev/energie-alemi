import os

os.makedirs('src/data', exist_ok=True)
os.makedirs('src/pages/Ratgeber/articles', exist_ok=True)

# 1. data
with open('src/data/ratgeberArticles.ts', 'w') as f:
    f.write('''
export interface RatgeberArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'Strom' | 'Gas' | 'Internet';
  publishedDate: string;
  updatedDate?: string;
  componentName: string;
}

export const articles: RatgeberArticle[] = [
  {
    id: '1',
    slug: 'stromanbieter-wechseln',
    title: 'Stromanbieter wechseln: So funktioniert der Wechsel',
    description: 'Erfahren Sie, wann sich ein Wechsel lohnt, wie der Prozess abläuft und worauf Sie bei Fristen und dem alten Vertrag achten müssen.',
    category: 'Strom',
    publishedDate: '2026-08-09',
    componentName: 'StromanbieterWechseln'
  },
  {
    id: '2',
    slug: 'stromvergleich',
    title: 'Stromvergleich: Worauf sollte man bei einem Stromtarif achten?',
    description: 'Die wichtigsten Kriterien beim Stromvergleich: Arbeitspreis, Grundpreis, Preisgarantie und Vertragslaufzeit einfach erklärt.',
    category: 'Strom',
    publishedDate: '2026-08-09',
    componentName: 'StromvergleichWoraufAchten'
  },
  {
    id: '3',
    slug: 'gasvergleich',
    title: 'Gasvergleich: So finden Sie einen passenden Gastarif',
    description: 'Worauf es beim Gasvergleich ankommt. Alle wichtigen Faktoren wie kWh-Preis, Grundgebühr und Kündigungsfristen verständlich erklärt.',
    category: 'Gas',
    publishedDate: '2026-08-09',
    componentName: 'GasvergleichPassenderTarif'
  },
  {
    id: '4',
    slug: 'gasanbieter-wechseln',
    title: 'Gasanbieter wechseln: Schritt für Schritt erklärt',
    description: 'Den Gasanbieter zu wechseln ist einfach und sicher. Erfahren Sie Schritt für Schritt, welche Informationen Sie benötigen.',
    category: 'Gas',
    publishedDate: '2026-08-09',
    componentName: 'GasanbieterWechselnSchritt'
  },
  {
    id: '5',
    slug: 'internetanbieter-vergleichen',
    title: 'Internetanbieter vergleichen: Darauf sollten Sie achten',
    description: 'DSL, Kabel oder Glasfaser? Was beim Internetvergleich wirklich zählt, um den besten und günstigsten Tarif zu finden.',
    category: 'Internet',
    publishedDate: '2026-08-09',
    componentName: 'InternetanbieterVergleichen'
  }
];
''')

# 2. ArticleLayout
with open('src/pages/Ratgeber/ArticleLayout.tsx', 'w') as f:
    f.write('''
import { ReactNode } from 'react';
import { Link } from 'react-router';
import { ChevronRight, Calendar } from 'lucide-react';
import SEO from '../../components/SEO';
import { RatgeberArticle } from '../../data/ratgeberArticles';

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
''')

# 3. RatgeberIndex
with open('src/pages/Ratgeber/RatgeberIndex.tsx', 'w') as f:
    f.write('''
import { Link } from 'react-router';
import { ArrowRight, BookOpen } from 'lucide-react';
import SEO from '../../components/SEO';
import { articles } from '../../data/ratgeberArticles';

export default function RatgeberIndex() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a1628] py-24 md:py-32">
      <SEO 
        title="Ratgeber: Strom, Gas & Internet im Vergleich" 
        description="Hilfreiche Tipps und Ratgeber rund um den Wechsel von Strom-, Gas- und Internetanbietern. So finden Sie den besten Tarif." 
        url="/ratgeber" 
      />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-[#0047AB] dark:text-[#f0a83f] font-semibold mb-4">
            <BookOpen size={24} />
            <span className="uppercase tracking-wider text-sm font-heading">Energie Alemi Ratgeber</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ratgeber für Strom, Gas & Internet
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Wertvolles Wissen, praktische Tipps und klare Anleitungen für Ihren Anbieterwechsel. Wir helfen Ihnen, den Tarif-Dschungel zu verstehen.
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
''')

# 4. Article 1
with open('src/pages/Ratgeber/articles/StromanbieterWechseln.tsx', 'w') as f:
    f.write('''
import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromanbieterWechseln() {
  const article = articles.find(a => a.slug === 'stromanbieter-wechseln')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Ein Wechsel des Stromanbieters ist heutzutage unkompliziert und kann mehrere hundert Euro im Jahr sparen. Dennoch zögern viele Verbraucher aus Angst vor einer Unterbrechung der Stromversorgung oder rechtlichen Fallstricken.
      </p>

      <h2>Wann lohnt sich ein Wechsel?</h2>
      <p>
        Besonders Verbraucher, die noch in der teuren Grundversorgung ihres lokalen Anbieters sind, haben enormes Sparpotenzial. Aber auch nach Ablauf einer Preisgarantie bei einem alternativen Anbieter lohnt sich ein erneuter <Link to="/electricity" className="text-[#0047AB] hover:underline">Stromvergleich</Link>. 
      </p>

      <h2>Wie funktioniert der Prozess?</h2>
      <ol>
        <li><strong>Vergleich durchführen:</strong> Nutzen Sie unseren Vergleichsrechner.</li>
        <li><strong>Tarif auswählen:</strong> Achten Sie nicht nur auf den Preis, sondern auch auf die Konditionen.</li>
        <li><strong>Auftrag erteilen:</strong> Füllen Sie das Wechselformular online aus.</li>
        <li><strong>Zurücklehnen:</strong> Ihr neuer Anbieter übernimmt in der Regel die Kündigung beim alten Versorger.</li>
      </ol>

      <h2>Was passiert mit dem alten Vertrag?</h2>
      <p>
        Wenn Sie nicht von einem Sonderkündigungsrecht (z.B. wegen einer Preiserhöhung) Gebrauch machen müssen, kündigt Ihr neuer Anbieter den alten Vertrag fristgerecht für Sie. Sie müssen selbst nicht aktiv werden.
      </p>

      <h2>Häufige Fehler vermeiden</h2>
      <p>
        Kündigen Sie niemals selbst, es sei denn, Sie haben ein Sonderkündigungsrecht. Wenn Sie selbst kündigen, weiß der neue Anbieter nichts davon, und es kann zu Komplikationen bei der nahtlosen Übergabe kommen.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Bereit für günstigere Strompreise?</h3>
        <p className="mb-6">Vergleichen Sie jetzt die aktuellen Tarife und wechseln Sie in wenigen Minuten.</p>
        <Link to="/electricity">
          <Button variant="primary">Jetzt Stromtarife vergleichen</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
''')

# 5. Article 2
with open('src/pages/Ratgeber/articles/StromvergleichWoraufAchten.tsx', 'w') as f:
    f.write('''
import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromvergleichWoraufAchten() {
  const article = articles.find(a => a.slug === 'stromvergleich')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Der Strommarkt bietet hunderte verschiedene Tarife. Doch der billigste Tarif ist nicht immer der beste. Wer die Preisstrukturen und Vertragsbedingungen versteht, vermeidet böse Überraschungen im zweiten Vertragsjahr.
      </p>

      <h2>Arbeitspreis vs. Grundpreis</h2>
      <p>
        Ihre Stromrechnung setzt sich aus zwei Hauptkomponenten zusammen:
      </p>
      <ul>
        <li><strong>Der Arbeitspreis (Cent/kWh):</strong> Dies ist der Preis, den Sie für jede verbrauchte Kilowattstunde zahlen. Wer viel Strom verbraucht, sollte auf einen niedrigen Arbeitspreis achten.</li>
        <li><strong>Der Grundpreis (Euro/Monat):</strong> Eine feste monatliche Gebühr, unabhängig vom Verbrauch. Single-Haushalte mit niedrigem Verbrauch profitieren von einem niedrigen Grundpreis.</li>
      </ul>

      <h2>Vertragslaufzeit und Kündigungsfrist</h2>
      <p>
        Wir empfehlen Vertragslaufzeiten von maximal 12 Monaten. So bleiben Sie flexibel und können jährlich von neuen Wechselboni profitieren. Nach geltendem Recht dürfen Verträge, die sich nach der Erstlaufzeit automatisch verlängern, mittlerweile monatlich gekündigt werden.
      </p>

      <h2>Die Preisgarantie</h2>
      <p>
        Achten Sie darauf, dass der Tarif eine Preisgarantie beinhaltet, die mindestens für die Dauer der Erstlaufzeit gilt (z.B. 12 Monate). Eine <em>eingeschränkte Preisgarantie</em> deckt den Energiepreis und die Netzentgelte ab, nicht aber staatliche Steuern.
      </p>

      <h2>Ökostrom</h2>
      <p>
        Wenn Ihnen Nachhaltigkeit wichtig ist, achten Sie auf zertifizierten Ökostrom (z.B. ok-power-Label oder Grüner Strom-Label), der nicht nur aus Erneuerbaren Energien stammt, sondern auch den Ausbau neuer Anlagen fördert.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Tarife transparent vergleichen</h3>
        <p className="mb-6">Finden Sie den Tarif, der perfekt zu Ihrem Verbrauch passt.</p>
        <Link to="/electricity">
          <Button variant="primary">Zum kostenlosen Stromvergleich</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
''')

# 6. Article 3
with open('src/pages/Ratgeber/articles/GasvergleichPassenderTarif.tsx', 'w') as f:
    f.write('''
import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasvergleichPassenderTarif() {
  const article = articles.find(a => a.slug === 'gasvergleich')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Die Heizkosten machen einen großen Teil der monatlichen Ausgaben aus. Ein regelmäßiger <Link to="/gas" className="text-[#0047AB] hover:underline">Gasvergleich</Link> ist daher eine der effektivsten Methoden, um die Haushaltskasse zu entlasten.
      </p>

      <h2>Den eigenen Verbrauch ermitteln</h2>
      <p>
        Für einen aussagekräftigen Gasvergleich benötigen Sie Ihren Jahresverbrauch in Kilowattstunden (kWh). Diesen finden Sie auf Ihrer letzten Jahresabrechnung. Wenn Sie diese nicht zur Hand haben, können Sie Richtwerte nutzen:
      </p>
      <ul>
        <li>30 m² Wohnung: ca. 4.000 kWh</li>
        <li>50 m² Wohnung: ca. 7.000 kWh</li>
        <li>100 m² Wohnung: ca. 14.000 kWh</li>
        <li>Reihenhaus: ca. 20.000 kWh</li>
      </ul>

      <h2>Wichtige Vertragsbedingungen</h2>
      <p>
        Wie beim Strom gilt auch beim Gas: Der Preis ist nicht alles. Achten Sie auf eine <strong>Preisgarantie</strong> von mindestens 12 Monaten. Diese schützt Sie vor unerwarteten Preiserhöhungen während der Erstlaufzeit. Die <strong>Vertragslaufzeit</strong> sollte ebenfalls 12 Monate nicht überschreiten.
      </p>

      <h2>Klimatarife und Biogas</h2>
      <p>
        Immer mehr Anbieter bieten Ökogas oder Biogas-Beimischungen an. Bei reinen "Klimatarifen" wird meist herkömmliches Erdgas geliefert, die CO2-Emissionen werden jedoch durch Klimaschutzprojekte kompensiert. Wer echten Einfluss nehmen will, sollte auf Tarife mit einem echten Biogas-Anteil (z.B. 10% oder mehr) achten.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Starten Sie Ihren Gasvergleich</h3>
        <p className="mb-6">Sichern Sie sich jetzt günstige Konditionen für die nächste Heizperiode.</p>
        <Link to="/gas">
          <Button variant="primary">Jetzt Gastarife vergleichen</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
''')

# 7. Article 4
with open('src/pages/Ratgeber/articles/GasanbieterWechselnSchritt.tsx', 'w') as f:
    f.write('''
import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasanbieterWechselnSchritt() {
  const article = articles.find(a => a.slug === 'gasanbieter-wechseln')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Der Wechsel des Gasanbieters funktioniert völlig reibungslos im Hintergrund. Es sind keine technischen Anpassungen an Ihrer Heizung oder den Leitungen nötig.
      </p>

      <h2>Schritt 1: Daten bereitlegen</h2>
      <p>
        Für den Wechsel benötigen Sie lediglich drei Informationen von Ihrer letzten Rechnung:
      </p>
      <ul>
        <li>Ihren bisherigen Anbieter</li>
        <li>Ihre Kundennummer</li>
        <li>Ihre Zählernummer (steht auf dem Gaszähler)</li>
      </ul>

      <h2>Schritt 2: Neuen Tarif abschließen</h2>
      <p>
        Über unseren <Link to="/gas" className="text-[#0047AB] hover:underline">Vergleichsrechner</Link> können Sie den passenden Tarif auswählen und den Wechsel direkt online beauftragen. Sie erteilen dem neuen Anbieter dabei eine Vollmacht.
      </p>

      <h2>Schritt 3: Kündigung durch den neuen Anbieter</h2>
      <p>
        Ihr neuer Versorger kündigt in Ihrem Namen den alten Vertrag. <strong>Wichtig:</strong> Wenn Sie aufgrund einer angekündigten Preiserhöhung ein Sonderkündigungsrecht haben (meist nur 14 Tage Frist), sollten Sie zur Sicherheit selbst kündigen und dies dem neuen Anbieter mitteilen.
      </p>

      <h2>Muss ich den Zählerstand ablesen?</h2>
      <p>
        Ja, zum Datum des Anbieterwechsels wird Sie Ihr Netzbetreiber oder der alte Anbieter auffordern, den Zählerstand durchzugeben, damit abschlussgenau abgerechnet werden kann.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Jetzt Wechsel prüfen</h3>
        <p className="mb-6">Prüfen Sie in wenigen Sekunden Ihr Sparpotenzial.</p>
        <Link to="/gas">
          <Button variant="primary">Zum Gasvergleich</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
''')

# 8. Article 5
with open('src/pages/Ratgeber/articles/InternetanbieterVergleichen.tsx', 'w') as f:
    f.write('''
import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function InternetanbieterVergleichen() {
  const article = articles.find(a => a.slug === 'internetanbieter-vergleichen')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Die Auswahl an Internet-Tarifen ist riesig. Ob DSL, Kabel oder Glasfaser – die Entscheidung hängt nicht nur vom Preis, sondern auch von der regionalen Verfügbarkeit und Ihren Nutzungsgewohnheiten ab.
      </p>

      <h2>Technologien im Vergleich</h2>
      <ul>
        <li><strong>DSL (Kupferkabel):</strong> Überall verfügbar, aber oft auf 50 bis 250 Mbit/s limitiert. Sehr stabil.</li>
        <li><strong>Kabel-Internet:</strong> Über den TV-Kabelanschluss. Oft günstiger als DSL bei sehr hohen Geschwindigkeiten (bis zu 1.000 Mbit/s). In den Abendstunden ("Shared Medium") kann die Geschwindigkeit jedoch schwanken.</li>
        <li><strong>Glasfaser (FTTH):</strong> Die zukunftssicherste Technologie. Stabil, extrem schnell (Upload und Download), aber noch nicht flächendeckend verfügbar.</li>
      </ul>

      <h2>Welche Geschwindigkeit brauche ich?</h2>
      <p>
        Nicht jeder braucht Gigabit-Internet. Für einen Single-Haushalt, der abends Netflix schaut und surft, reichen 50 Mbit/s völlig aus. Für Familien mit parallelen Streams, Home-Office (Videokonferenzen) und großen Downloads (Gaming) sollten es mindestens 100 bis 250 Mbit/s sein.
      </p>

      <h2>Router: Mieten oder kaufen?</h2>
      <p>
        Viele Anbieter verlangen eine monatliche Miete (3 bis 8 Euro) für den WLAN-Router. Auf eine Laufzeit von 24 Monaten gerechnet, ist der Kauf eines eigenen Routers oft günstiger. Dank der gesetzlichen Routerfreiheit können Sie jedes kompatible Endgerät nutzen.
      </p>

      <h2>Verfügbarkeit prüfen</h2>
      <p>
        Bevor Sie sich in einen Tarif verlieben, müssen Sie die Verfügbarkeit an Ihrer Adresse prüfen. Unser Vergleichsrechner macht dies automatisch für Sie.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Verfügbarkeit an Ihrem Wohnort prüfen</h3>
        <p className="mb-6">Finden Sie heraus, welche Anbieter bei Ihnen die beste Leistung liefern.</p>
        <Link to="/internet">
          <Button variant="primary">Jetzt Internetanbieter vergleichen</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
''')

