import { Link } from 'react-router';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-[#0a1628] px-6 py-24">
      <SEO title="Seite nicht gefunden (404)" description="Die angeforderte Seite konnte nicht gefunden werden." />
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-[#E5A937] mb-4">404</h1>
        <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-6">
          Hoppla! Seite nicht gefunden.
        </h2>
        <p className="text-slate-600 dark:text-white/80 mb-10 text-lg">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link to="/">
          <Button variant="primary" icon={<Home size={18} />} className="w-full sm:w-auto justify-center">
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </div>
  );
}
