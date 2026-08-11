import SEO from '../components/SEO';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1628] py-24 md:py-32">
      <SEO title="Datenschutzerklärung" description="Datenschutzerklärung der Energie Alemi. Informationen zur Verarbeitung Ihrer Daten." url="/datenschutz" />
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Allgemeine Hinweise</h3>
            <p className="leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Datenerfassung auf dieser Website</h3>
            <p className="leading-relaxed font-bold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p className="leading-relaxed mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Datenschutz</h3>
            <p className="leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="leading-relaxed">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Server-Log-Dateien</h3>
            <p className="leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="leading-relaxed">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Analyse-Tools und Werbung</h2>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Google Analytics 4</h3>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-4">
              <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                <strong>Rechtlicher Hinweis:</strong> Dieser Abschnitt zur Google Analytics-Nutzung sollte vor der finalen Freigabe durch den zuständigen Datenschutzbeauftragten oder Rechtsbeistand des Unternehmens geprüft werden, um die vollständige Einhaltung der DSGVO zu gewährleisten.
              </p>
            </div>

            <p className="leading-relaxed mb-4">
              Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website Google Analytics 4 eingesetzt, ein Webanalysedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Zweck der Verarbeitung:</strong> Wir nutzen Google Analytics, um die Nutzung unserer Website analysieren und regelmäßig verbessern zu können. Über die gewonnenen Statistiken können wir unser Angebot verbessern und für Sie als Nutzer interessanter ausgestalten. Dies schließt die Auswertung von Klicks auf bestimmte Elemente wie Buttons oder Links (z. B. zu WhatsApp oder E-Mail) ein, um die Funktionalität zu prüfen. Es werden hierbei jedoch <strong>keine</strong> persönlichen Daten (wie Namen oder E-Mail-Adressen) an Google gesendet.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Zustimmung und Widerruf:</strong> Google Analytics ist standardmäßig deaktiviert. Eine Datenverarbeitung findet nur statt, wenn Sie über unseren Cookie-Banner ausdrücklich zustimmen (Consent Mode v2). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie über den Link „Cookie-Einstellungen“ im Footer der Website Ihre Präferenzen anpassen.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Datenspeicherung und -löschung:</strong> Wir haben die Speicherdauer der durch Google Analytics gesammelten Nutzer- und Ereignisdaten auf das erforderliche Minimum konfiguriert (diese Einstellungen sollten in Ihrem GA4-Konto geprüft werden). Nach Ablauf der Frist werden die Daten automatisch gelöscht.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
