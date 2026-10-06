
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

      <h2>How the router choice affects the price</h2>
      <p>
        Most providers offer a suitable WiFi router for a monthly rental fee, which is usually between 3 and 8 euros. Calculated over a minimum term of 24 months, this quickly adds up to 70 to 190 euros. 
      </p>
      <p>
        Thanks to the statutory router freedom in Germany, you are not obliged to rent a device from the provider. Buying your own router (e.g., a FRITZ!Box) is often cheaper in the long run and allows you to continue using the device after a change of provider.
      </p>

      <h2>Cancellation and provider change</h2>
      <p>
        If you are already supplied with internet and want to switch, you should not cancel yourself. The new provider usually handles the cancellation for you and coordinates the switchover date with the old provider. This minimizes the risk of being left without internet for a few days. You should only cancel yourself if you use a special right of termination (e.g., due to a price increase) or are moving at very short notice.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Check availability at your location</h3>
        <p className="mb-6">Find out which providers deliver the best performance for you.</p>
        <Link to="/internet">
          <Button variant="primary">Compare internet providers now</Button>
        </Link>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-6 mt-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Can I keep my landline number when switching?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Yes, the porting of the landline number is legally regulated and nowadays completely free of charge. You simply specify this when concluding the new contract.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Is the booked speed guaranteed?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Providers often speak of "up to" speeds. In the product information sheet, however, you will find the "normally available" and the "minimum" speed. If these are permanently not reached, you have the right to a price reduction or special termination.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Do I need a technician for the switch?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">This depends on the connection type. If you switch from DSL to DSL, remote activation is often sufficient. When switching from DSL to cable or fiber optics, a technician appointment is usually necessary.</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-4">Further Information</h3>
        <ul className="flex flex-col gap-2">
          <li><Link to="/energie-fragen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Energy Q&A</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Contact us</Link></li>
        </ul>
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

      <h2>Wie die Router-Wahl den Preis beeinflusst</h2>
      <p>
        Die meisten Anbieter bieten einen passenden WLAN-Router gegen eine monatliche Mietgebühr an, die meist zwischen 3 und 8 Euro liegt. Auf eine Mindestlaufzeit von 24 Monaten gerechnet, summieren sich hier schnell 70 bis 190 Euro.
      </p>
      <p>
        Dank der gesetzlichen Routerfreiheit in Deutschland sind Sie nicht verpflichtet, ein Gerät vom Anbieter zu mieten. Der Kauf eines eigenen Routers (z. B. einer FRITZ!Box) ist langfristig oft günstiger und ermöglicht es Ihnen, das Gerät auch nach einem Anbieterwechsel weiterzunutzen.
      </p>

      <h2>Kündigung und Anbieterwechsel</h2>
      <p>
        Wenn Sie bereits mit Internet versorgt werden und wechseln möchten, sollten Sie nicht selbst kündigen. Der neue Anbieter übernimmt in der Regel die Kündigung für Sie und stimmt den Umschalttermin mit dem alten Anbieter ab. Das minimiert das Risiko, einige Tage ohne Internet dazustehen. Selbst kündigen sollten Sie nur, wenn Sie ein Sonderkündigungsrecht (z. B. wegen Preiserhöhung) nutzen oder sehr kurzfristig umziehen.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Verfügbarkeit an Ihrem Wohnort prüfen</h3>
        <p className="mb-6">Finden Sie heraus, welche Anbieter bei Ihnen die beste Leistung liefern.</p>
        <Link to="/internet">
          <Button variant="primary">Jetzt Internetanbieter vergleichen</Button>
        </Link>
      </div>

      <h2>Häufige Fragen (FAQ)</h2>
      <div className="space-y-6 mt-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Kann ich meine Festnetznummer beim Wechsel behalten?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Ja, die Mitnahme der Rufnummer (Portierung) ist gesetzlich geregelt und heutzutage komplett kostenlos. Sie geben dies einfach beim Abschluss des neuen Vertrages mit an.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Ist die gebuchte Geschwindigkeit garantiert?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Anbieter sprechen oft von "bis zu"-Geschwindigkeiten. Im Produktinformationsblatt finden Sie jedoch die "normalerweise zur Verfügung stehende" und die "minimale" Geschwindigkeit. Werden diese dauerhaft unterschritten, haben Sie ein Recht auf Preisminderung oder Sonderkündigung.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Brauche ich einen Techniker für den Wechsel?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Das hängt von der Anschlussart ab. Wechseln Sie von DSL zu DSL, reicht oft eine Fernschaltung. Beim Wechsel von DSL auf Kabel oder Glasfaser ist meist ein Technikertermin notwendig.</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-4">Weitere Informationen</h3>
        <ul className="flex flex-col gap-2">
          <li><Link to="/energie-fragen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Energie-Fragen & Antworten</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Kontakt aufnehmen</Link></li>
        </ul>
      </div>
    </>
      )}
    </ArticleLayout>
  );
}
