
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
    title: 'Stromanbieter wechseln 2026: So einfach geht der Wechsel | ALEMI',
    description: 'Stromanbieter wechseln leicht gemacht: Erfahren Sie, wie der Wechsel abläuft, welche Fristen gelten, was Sie beachten sollten und wie Sie einen passenden Stromtarif finden.',
    category: 'Strom',
    publishedDate: '2026-08-09',
    updatedDate: '2026-08-16',
    componentName: 'StromanbieterWechseln'
  },
  {
    id: '2',
    slug: 'stromvergleich',
    title: 'Stromvergleich 2026: Tarife vergleichen',
    description: 'Die wichtigsten Kriterien beim Stromvergleich: Arbeitspreis, Grundpreis, Preisgarantie und Vertragslaufzeit einfach erklärt.',
    category: 'Strom',
    publishedDate: '2026-08-09',
    componentName: 'StromvergleichWoraufAchten'
  },
  {
    id: '3',
    slug: 'gasvergleich',
    title: 'Gastarife vergleichen 2026: Günstigen Gastarif finden | ALEMI',
    description: 'Gastarife vergleichen und den passenden Gastarif finden. Erfahren Sie, worauf Sie bei Gaspreisen, Verbrauch, Vertragslaufzeit und Anbieterwechsel achten sollten.',
    category: 'Gas',
    publishedDate: '2026-08-09',
    updatedDate: '2026-08-16',
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
    title: 'Internetanbieter vergleichen 2026',
    description: 'DSL, Kabel oder Glasfaser? Was beim Internetvergleich wirklich zählt, um passende und günstige Tarife zu finden.',
    category: 'Internet',
    publishedDate: '2026-08-09',
    componentName: 'InternetanbieterVergleichen'
  },
  {
    id: '6',
    slug: 'umzug-aachen-strom-gas-internet',
    title: 'Umzug nach Aachen: Strom, Gas und Internet richtig anmelden',
    description: 'Praktischer Ratgeber für Ihren Umzug nach Aachen. Erfahren Sie alles zu Anmeldefristen, Sonderkündigungsrechten (EnWG & TKG) und wie Sie typische Fehler vermeiden.',
    category: 'Strom',
    publishedDate: '2026-08-11',
    componentName: 'UmzugAachenStromGasInternet'
  },
  {
    id: '7',
    slug: 'grundversorgung-aachen-strom-gas',
    title: 'Grundversorgung Aachen: Strom & Gas',
    description: 'Grundversorgung in Aachen verständlich erklärt: Anbieter, Kündigungsfrist, Umzug und Wechselmöglichkeiten für Strom und Gas.',
    category: 'Strom',
    publishedDate: '2026-08-12',
    componentName: 'GrundversorgungAachenStromGas'
  }
,
  {
    id: '6',
    slug: 'dsl-vs-glasfaser-aachen',
    title: 'DSL vs. Glasfaser in Aachen: Lohnt sich der Wechsel?',
    description: 'Aachen baut sein Glasfasernetz aus. Wir klären die Unterschiede zu DSL und zeigen, für wen sich der schnelle Anschluss wirklich lohnt.',
    category: 'Internet',
    publishedDate: '2026-08-16',
    componentName: 'DslVsGlasfaserAachen'
  }
,
  {
    id: '9',
    slug: 'strom-anmelden-umzug',
    title: 'Strom anmelden beim Umzug: Checkliste 2026 | Energie Alemi',
    description: 'Strom beim Umzug richtig an- und abmelden: Fristen, Zählerstand, MaLo-ID und Anbieterwahl verständlich erklärt. Persönliche Hilfe in Aachen.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'StromAnmeldenUmzug'
  },
  {
    id: '10',
    slug: 'stromverbrauch-1-person',
    title: 'Stromverbrauch 1 Person: Richtwerte & Spartipps | Energie Alemi',
    description: 'Wie viel Strom verbraucht eine Person? Richtwerte für Wohnung und Haus, mit oder ohne elektrisches Warmwasser, plus einfache Spartipps.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'Stromverbrauch1Person'
  },
  {
    id: '11',
    slug: 'stromverbrauch-2-personen',
    title: 'Stromverbrauch 2 Personen: kWh, Kosten & Tipps | Energie Alemi',
    description: 'Stromverbrauch für 2 Personen einordnen: Richtwerte für Wohnung und Haus, Einfluss von Warmwasser und praktische Spartipps.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'Stromverbrauch2Personen'
  },
  {
    id: '12',
    slug: 'stromverbrauch-4-personen',
    title: 'Stromverbrauch 4 Personen: Richtwerte & Kosten | Energie Alemi',
    description: 'Wie viel Strom braucht eine vierköpfige Familie? Richtwerte nach Wohnform und Warmwasserart sowie Tipps für niedrigere Stromkosten.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'Stromverbrauch4Personen'
  },
  {
    id: '13',
    slug: 'stromkosten-berechnen',
    title: 'Stromkosten berechnen: Formel & Beispiele 2026 | Energie Alemi',
    description: 'Stromkosten einfach berechnen: Jahresverbrauch, Arbeitspreis und Grundpreis richtig einsetzen und Tarife realistisch vergleichen.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'StromkostenBerechnen'
  },
  {
    id: '14',
    slug: 'gas-anmelden-umzug',
    title: 'Gas anmelden beim Umzug: Schritt-für-Schritt | Energie Alemi',
    description: 'Gas beim Umzug richtig anmelden: Vertrag prüfen, Zählerstand sichern, neuen Tarif wählen und doppelte Kosten vermeiden.',
    category: 'Gas',
    publishedDate: '2026-09-27',
    componentName: 'GasAnmeldenUmzug'
  },
  {
    id: '15',
    slug: 'gasverbrauch-berechnen',
    title: 'Gasverbrauch berechnen: m³ in kWh umrechnen | Energie Alemi',
    description: 'Gasverbrauch korrekt berechnen: Zählerstand in m³ ablesen, mit Brennwert und Zustandszahl in kWh umrechnen und Kosten abschätzen.',
    category: 'Gas',
    publishedDate: '2026-09-27',
    componentName: 'GasverbrauchBerechnen'
  },
  {
    id: '16',
    slug: 'gaspreise-verstehen',
    title: 'Gaspreise verstehen: Arbeitspreis & Grundpreis | Energie Alemi',
    description: 'Gaspreise verständlich erklärt: Arbeitspreis, Grundpreis, Preisgarantie, Bonus und Jahreskosten richtig vergleichen.',
    category: 'Gas',
    publishedDate: '2026-09-27',
    componentName: 'GaspreiseVerstehen'
  }
];
