
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
    title: 'Grundversorgung Aachen: Strom und Gas – Kündigung und Tarifwechsel',
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
];
