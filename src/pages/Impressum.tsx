import SEO from '../components/SEO';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1628] py-24 md:py-32">
      <SEO title="Impressum" description="Impressum der Energie Alemi. Angaben gemäß § 5 TMG." url="/impressum" />
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">Impressum</h1>
        
        <div className="space-y-8 text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              [Name des Unternehmens / Inhabers]<br />
              [Straße Hausnummer]<br />
              [PLZ Ort]<br />
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Kontakt</h2>
            <p className="leading-relaxed">
              Telefon: [Telefonnummer]<br />
              E-Mail: [E-Mail-Adresse]<br />
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Umsatzsteuer-ID</h2>
            <p className="leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr.]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Streitschlichtung</h2>
            <p className="leading-relaxed mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
