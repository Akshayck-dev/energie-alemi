import os, glob

replacements = {
    'question: "Wird die Gasversorgung beim Anbieterwechsel unterbrochen?",': 
    'question: i18n.language === "en" ? "Will the gas supply be interrupted during the provider switch?" : "Wird die Gasversorgung beim Anbieterwechsel unterbrochen?",',

    'question: "Kann die Gasversorgung beim Anbieterwechsel unterbrochen werden?",':
    'question: i18n.language === "en" ? "Can the gas supply be interrupted during the provider switch?" : "Kann die Gasversorgung beim Anbieterwechsel unterbrochen werden?",',
    
    'question: "Wie lange dauert ein Internetanbieterwechsel?",':
    'question: i18n.language === "en" ? "How long does an internet provider switch take?" : "Wie lange dauert ein Internetanbieterwechsel?",',

    'question: "Ist Glasfaser immer die beste Wahl?",':
    'question: i18n.language === "en" ? "Is fiber always the best choice?" : "Ist Glasfaser immer die beste Wahl?",',

    'question: "Welche Unterlagen sollte ich zum Stromvergleich mitbringen?",':
    'question: i18n.language === "en" ? "What documents should I bring for the electricity comparison?" : "Welche Unterlagen sollte ich zum Stromvergleich mitbringen?",',

    '<li><strong>Lieferadresse:</strong> Postleitzahl und Anschrift in Aachen.</li>':
    '<li><strong>{i18n.language === "en" ? "Delivery address:" : "Lieferadresse:"}</strong> {i18n.language === "en" ? "Zip code and address in Aachen." : "Postleitzahl und Anschrift in Aachen."}</li>',

    '<li><strong>Jahresverbrauch:</strong> Zu finden auf der letzten Jahresabrechnung, in Kilowattstunden.</li>':
    '<li><strong>{i18n.language === "en" ? "Annual consumption:" : "Jahresverbrauch:"}</strong> {i18n.language === "en" ? "To be found on the last annual statement, in kilowatt hours." : "Zu finden auf der letzten Jahresabrechnung, in Kilowattstunden."}</li>',

    '<li><strong>Vertragsdaten:</strong> Aktueller Anbieter, Tarif, Laufzeit und Kündigungsfrist.</li>':
    '<li><strong>{i18n.language === "en" ? "Contract data:" : "Vertragsdaten:"}</strong> {i18n.language === "en" ? "Current provider, tariff, term and cancellation period." : "Aktueller Anbieter, Tarif, Laufzeit und Kündigungsfrist."}</li>',

    '<li><strong>Zählerdaten:</strong> Zählernummer und später zum Wechseltermin der aktuelle Zählerstand.</li>':
    '<li><strong>{i18n.language === "en" ? "Meter data:" : "Zählerdaten:"}</strong> {i18n.language === "en" ? "Meter number and later the current meter reading at the switching date." : "Zählernummer und später zum Wechseltermin der aktuelle Zählerstand."}</li>',

    '<strong>Hinweis zur Grundversorgung:</strong>':
    '<strong>{i18n.language === "en" ? "Note on basic supply:" : "Hinweis zur Grundversorgung:"}</strong>',

    'title="Welche Anschlussart passt zu Ihnen?"':
    'title={i18n.language === "en" ? "Which connection type suits you?" : "Welche Anschlussart passt zu Ihnen?"}',

    'So funktioniert die Gas-Tarifberatung': 
    '{i18n.language === "en" ? "How the gas tariff advice works" : "So funktioniert die Gas-Tarifberatung"}',
    
    'So läuft der Gasvergleich in vier klaren Schritten':
    '{i18n.language === "en" ? "How the gas comparison works in four clear steps" : "So läuft der Gasvergleich in vier klaren Schritten"}',
    
    'So funktioniert die Internet-Tarifberatung':
    '{i18n.language === "en" ? "How the internet tariff advice works" : "So funktioniert die Internet-Tarifberatung"}',

    'So läuft die Internet-Tarifberatung ab':
    '{i18n.language === "en" ? "How the internet tariff advice works" : "So läuft die Internet-Tarifberatung ab"}',
    
    'So läuft die Internetberatung in vier Schritten':
    '{i18n.language === "en" ? "How the internet advice works in four steps" : "So läuft die Internetberatung in vier Schritten"}',

    'So läuft der Stromvergleich in vier Schritten':
    '{i18n.language === "en" ? "How the electricity comparison works in four steps" : "So läuft der Stromvergleich in vier Schritten"}',

    'So läuft die Stromberatung in vier Schritten':
    '{i18n.language === "en" ? "How the electricity advice works in four steps" : "So läuft die Stromberatung in vier Schritten"}',

    'description= oder Gasanbieter in Stolberg.}':
    'description={i18n.language === "en" ? " or gas providers in Stolberg." : " oder Gasanbieter in Stolberg."}',

    'Arbeitspreis und Grundpreis wirken je nach Verbrauch unterschiedlich. Deshalb werden nicht nur einzelne Preisangaben, so':
    '{i18n.language === "en" ? "Energy price and basic price have different effects depending on consumption. Therefore, not only individual price details, so" : "Arbeitspreis und Grundpreis wirken je nach Verbrauch unterschiedlich. Deshalb werden nicht nur einzelne Preisangaben, so',

    'Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden  zu finden.':
    '{i18n.language === "en" ? "By the way: In addition to electricity and gas advice, we also help you find the right " : "Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden "} zu finden.',

    'Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden  zu finden.':
    '{i18n.language === "en" ? "By the way: In addition to internet advice, we also help you find the right " : "Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden "} zu finden.',

    'Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden':
    '{i18n.language === "en" ? "By the way: In addition to internet advice, we also help you find the right" : "Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden"}',

    'Wir beraten Sie nicht nur in Würselen, sondern in der gesamten Städteregion. Vergleichen Sie auch Tarife für Aachen, Sto':
    '{i18n.language === "en" ? "We advise you not only in Würselen, but in the entire city region. Also compare tariffs for Aachen, Sto" : "Wir beraten Sie nicht nur in Würselen, sondern in der gesamten Städteregion. Vergleichen Sie auch Tarife für Aachen, Sto',

    'Energie Alemi berät Kundinnen und Kunden aus der Eschweiler Innenstadt ebenso wie aus Dürwiß, Weisweiler, Kinzweiler, St':
    '{i18n.language === "en" ? "Energie Alemi advises customers from Eschweiler city center as well as from Dürwiß, Weisweiler, Kinzweiler, St" : "Energie Alemi berät Kundinnen und Kunden aus der Eschweiler Innenstadt ebenso wie aus Dürwiß, Weisweiler, Kinzweiler, St',

    'Energie Alemi prüft Ihre letzte Gasrechnung und erklärt die verfügbaren Optionen verständlich. Die Beratung ist für Priv':
    '{i18n.language === "en" ? "Energie Alemi checks your last gas bill and explains the available options understandably. The advice is for priv" : "Energie Alemi prüft Ihre letzte Gasrechnung und erklärt die verfügbaren Optionen verständlich. Die Beratung ist für Priv',

    'Bei gewerblich genutzten Immobilien oder höherem Verbrauch gewinnen Planungssicherheit und verlässliche Vertragsbedingun':
    '{i18n.language === "en" ? "For commercial properties or higher consumption, planning security and reliable contract conditions become" : "Bei gewerblich genutzten Immobilien oder höherem Verbrauch gewinnen Planungssicherheit und verlässliche Vertragsbedingun',
    
    'answer: <>Es gibt keine pauschal beste Lösung. Glasfaser bietet hohe Leistungsreserven, Kabel kann hohe Bandbreiten ermö':
    'answer: <>{i18n.language === "en" ? "There is no general best solution. Fiber offers high performance reserves, cable can enable high bandwidths" : "Es gibt keine pauschal beste Lösung. Glasfaser bietet hohe Leistungsreserven, Kabel kann hohe Bandbreiten ermö',

    'Je nach Adresse können DSL, Kabel, Glasfaser oder funkbasierte Lösungen infrage kommen. Deshalb beginnt unsere Beratung':
    '{i18n.language === "en" ? "Depending on the address, DSL, cable, fiber or radio-based solutions may be considered. Therefore, our advice begins" : "Je nach Adresse können DSL, Kabel, Glasfaser oder funkbasierte Lösungen infrage kommen. Deshalb beginnt unsere Beratung',

    'Für Unternehmen zählen neben der Bandbreite auch Stabilität, Erreichbarkeit, Laufzeit und passende Servicebedingungen. E':
    '{i18n.language === "en" ? "For businesses, bandwidth as well as stability, availability, term and suitable service conditions count. E" : "Für Unternehmen zählen neben der Bandbreite auch Stabilität, Erreichbarkeit, Laufzeit und passende Servicebedingungen. E',

    'Energie Alemi prüft die Optionen für Privathaushalte, Gewerbe und Industrie und erklärt, welche Unterschiede im Alltag o':
    '{i18n.language === "en" ? "Energie Alemi checks the options for private households, commerce and industry and explains which differences in everyday life o" : "Energie Alemi prüft die Optionen für Privathaushalte, Gewerbe und Industrie und erklärt, welche Unterschiede im Alltag o',

    'Ein reduzierter Monatspreis gilt häufig nur für einen Aktionszeitraum. Für einen fairen Vergleich werden daher regulärer':
    '{i18n.language === "en" ? "A reduced monthly price often only applies for a promotional period. For a fair comparison, therefore regular" : "Ein reduzierter Monatspreis gilt häufig nur für einen Aktionszeitraum. Für einen fairen Vergleich werden daher regulärer',
    
    'Ob in Atsch, Büsbach, Breinig, Mausbach, Vicht oder Zweifall: Energie Alemi prüft die verfügbaren Optionen für den jewei':
    '{i18n.language === "en" ? "Whether in Atsch, Büsbach, Breinig, Mausbach, Vicht or Zweifall: Energie Alemi checks the available options for the respec" : "Ob in Atsch, Büsbach, Breinig, Mausbach, Vicht oder Zweifall: Energie Alemi prüft die verfügbaren Optionen für den jewei',

    'Die Beratung richtet sich an Kundinnen und Kunden aus dem gesamten Eschweiler Stadtgebiet – unter anderem aus Dürwiß, We':
    '{i18n.language === "en" ? "The advice is aimed at customers from the entire Eschweiler city area – including from Dürwiß, We" : "Die Beratung richtet sich an Kundinnen und Kunden aus dem gesamten Eschweiler Stadtgebiet – unter anderem aus Dürwiß, We',

    'Das Angebot richtet sich an Kundinnen und Kunden aus Herzogenrath-Mitte, Kohlscheid und Merkstein. Die Beratung erfolgt':
    '{i18n.language === "en" ? "The offer is aimed at customers from Herzogenrath-Mitte, Kohlscheid and Merkstein. The advice takes place" : "Das Angebot richtet sich an Kundinnen und Kunden aus Herzogenrath-Mitte, Kohlscheid und Merkstein. Die Beratung erfolgt',

    'Das Angebot richtet sich an Kundinnen und Kunden aus Würselen-Mitte, Kohlscheid und Merkstein. Die Beratung erfolgt tele':
    '{i18n.language === "en" ? "The offer is aimed at customers from Würselen-Mitte, Bardenberg and Broichweiden. The advice takes place tele" : "Das Angebot richtet sich an Kundinnen und Kunden aus Würselen-Mitte, Bardenberg und Broichweiden. Die Beratung erfolgt tele',

    'Das Angebot richtet sich an Kundinnen und Kunden aus Würselen-Mitte, Bardenberg und Broichweiden. Die Beratung erfolgt tele':
    '{i18n.language === "en" ? "The offer is aimed at customers from Würselen-Mitte, Bardenberg and Broichweiden. The advice takes place tele" : "Das Angebot richtet sich an Kundinnen und Kunden aus Würselen-Mitte, Bardenberg und Broichweiden. Die Beratung erfolgt tele',
}

for filepath in glob.glob("src/pages/*anbieter*.tsx"):
    with open(filepath) as f:
        content = f.read()
    
    original = content
    for old, new in replacements.items():
        if old in content:
            content = content.replace(old, new)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed {os.path.basename(filepath)}")

