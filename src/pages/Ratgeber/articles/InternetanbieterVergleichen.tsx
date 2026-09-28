
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function InternetanbieterVergleichen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'internetanbieter-vergleichen')!;
  
  return (
    <ArticleLayout article={article}>
      {i18n.language === 'en' ? (
        <>

      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        The selection of internet tariffs is huge. Whether DSL, cable, or fiber optics – the decision depends not only on the price but also on regional availability and your usage habits.
      </p>

      <h2>Technologies in comparison</h2>
      <ul>
        <li><strong>DSL (Copper cable):</strong> Available everywhere, but often limited to 50 to 250 Mbit/s. Very stable.</li>
        <li><strong>Cable internet:</strong> Via the TV cable connection. Often cheaper than DSL at very high speeds (up to 1,000 Mbit/s). In the evening hours ("Shared Medium"), however, the speed can fluctuate.</li>
        <li><strong>Fiber optics (FTTH):</strong> The most future-proof technology. Stable, extremely fast (upload and download), but not yet available everywhere.</li>
      </ul>

      <h2>What speed do I need?</h2>
      <p>
        Not everyone needs Gigabit internet. For a single household that watches Netflix and surfs in the evening, 50 Mbit/s is perfectly sufficient. For families with parallel streams, home office (video conferences), and large downloads (gaming), it should be at least 100 to 250 Mbit/s.
      </p>

      <h2>Router: Rent or buy?</h2>
      <p>
        Many providers charge a monthly rent (3 to 8 euros) for the WiFi router. Calculated over a term of 24 months, buying your own router is often cheaper. Thanks to statutory router freedom, you can use any compatible end device.
      </p>

      <h2>Check availability</h2>
      <p>
        Before you fall in love with a tariff, you must check the availability at your address. Our comparison calculator does this automatically for you. If you are moving soon, also read our guide on the topic of <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Moving and internet registration</Link> to use deadlines and special termination rights correctly.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Check availability at your location</h3>
        <p className="mb-6">Find out which providers deliver the best performance for you.</p>
        <Link to="/internet">
          <Button variant="primary">Compare internet providers now</Button>
        </Link>
      </div>

        </>
      ) : (
        <>
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
        Bevor Sie sich in einen Tarif verlieben, müssen Sie die Verfügbarkeit an Ihrer Adresse prüfen. Unser Vergleichsrechner macht dies automatisch für Sie. Wenn Sie demnächst den Wohnort wechseln, lesen Sie auch unseren Ratgeber zum Thema <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Umzug und Internetanmeldung</Link>, um Fristen und Sonderkündigungsrechte richtig zu nutzen.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Verfügbarkeit an Ihrem Wohnort prüfen</h3>
        <p className="mb-6">Finden Sie heraus, welche Anbieter bei Ihnen die beste Leistung liefern.</p>
        <Link to="/internet">
          <Button variant="primary">Jetzt Internetanbieter vergleichen</Button>
        </Link>
      </div>
    </>
      )}
    </ArticleLayout>
  );
}
