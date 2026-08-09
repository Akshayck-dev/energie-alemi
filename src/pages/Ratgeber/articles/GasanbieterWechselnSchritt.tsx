
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
