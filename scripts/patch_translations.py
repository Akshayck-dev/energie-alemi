import json

with open('public/locales/de/translation.json', 'r') as f:
    data = json.load(f)

data['home_services']['items']['electricity']['description'] = "100% Ökostrom für ein nachhaltiges Morgen. Unser umfassender Stromvergleich berücksichtigt nicht nur den reinen Arbeitspreis pro Kilowattstunde, sondern auch den monatlichen Grundpreis, die Vertragslaufzeit und den Umfang der Preisgarantie. Egal ob Single-Haushalt, Großfamilie oder Unternehmen – wir finden den Tarif, der Ihre laufenden Stromkosten spürbar senkt und vor plötzlichen Preiserhöhungen schützt. Wechseln Sie sicher den Stromanbieter."
data['home_services']['items']['gas']['description'] = "Zuverlässige und günstige klimaneutrale Gastarife. Die Entwicklungen auf dem Gasmarkt sind oft unübersichtlich. Wir analysieren für Sie das Verhältnis von Arbeitspreis zu Grundpreis und prüfen Vertragslaufzeiten sowie Wechselboni im Detail. Unser Service richtet sich an alle, die verlässlich heizen und dabei Budgetsicherheit genießen wollen. Entdecken Sie jetzt, wie einfach ein Gasanbieterwechsel mit unserer Begleitung ist."
data['home_services']['items']['internet']['description'] = "Highspeed-Verbindungen für Unternehmen und Zuhause. Ob klassisches DSL, Kabelinternet oder hochmodernes Glasfaser – wir vergleichen Bandbreiten, Anschlusskosten und monatliche Gebühren verschiedener Provider für Sie. Eine stabile und schnelle Internetverbindung ist heute unerlässlich. Wir beraten Privatpersonen und Gewerbetreibende, klären die lokale Verfügbarkeit an Ihrem Wohnort und empfehlen Ihnen den optimalen Internettarif."

with open('public/locales/de/translation.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Translations patched successfully.")
