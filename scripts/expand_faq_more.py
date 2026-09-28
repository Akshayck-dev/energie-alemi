import re

with open('src/pages/FAQ.tsx', 'r') as f:
    content = f.read()

# Add to Allgemeine Fragen
new_allgemein = """        {
          question: t('faq_page.q5', 'In welchen Regionen sind Sie tätig?'),
          answer: t('faq_page.a5', 'Unser Hauptstandort ist Aachen, Alexianergraben 9. Wir beraten aber auch Kunden in ganz Deutschland – persönlich vor Ort oder telefonisch.')
        },
        {
          question: "Beraten Sie auch auf Englisch?",
          answer: "Ja, wir bieten unsere Tarifberatung auch auf Englisch an. Sprechen Sie uns einfach darauf an, und wir helfen Ihnen bei allen Fragen rund um Strom, Gas und Internet gerne auf Englisch weiter."
        },
        {
          question: "Gibt es eine vertragliche Bindung an Ihre Beratung?",
          answer: "Nein, unsere Beratung ist völlig unverbindlich und an keine Vertragslaufzeit gebunden. Sie binden sich an keinen Beratungsvertrag, sondern schließen lediglich den von Ihnen gewählten Energietarif ab."
        }"""
content = content.replace("""        {
          question: t('faq_page.q5', 'In welchen Regionen sind Sie tätig?'),
          answer: t('faq_page.a5', 'Unser Hauptstandort ist Aachen, Alexianergraben 9. Wir beraten aber auch Kunden in ganz Deutschland – persönlich vor Ort oder telefonisch.')
        }""", new_allgemein)


# Add to Strom & Tarife
new_strom = """        {
          question: "Muss beim Anbieterwechsel der Stromzähler getauscht werden?",
          answer: "Nein, ein Zählertausch ist nicht nötig. Ihr Stromzähler und die Leitungen bleiben im Besitz des örtlichen Netzbetreibers, der weiterhin für die Wartung zuständig ist."
        },
        {
          question: "Was ist der Unterschied zwischen Grundversorgung und Sondervertrag?",
          answer: "Die Grundversorgung ist der Standardtarif, den Sie automatisch erhalten, wenn Sie keinen aktiven Vertrag abschließen. Sonderverträge werden aktiv abgeschlossen und bieten in der Regel deutlich günstigere Konditionen sowie Preisgarantien."
        },
        {
          question: "Lohnt sich Ökostrom wirklich?",
          answer: "Ja, Ökostrom ist heute oft genauso günstig wie herkömmlicher Strom. Zudem unterstützen Sie aktiv den Ausbau erneuerbarer Energien und senken Ihre CO2-Emissionen, ohne Abstriche bei der Versorgungssicherheit zu machen."
        }"""
content = content.replace("""        {
          question: "Muss beim Anbieterwechsel der Stromzähler getauscht werden?",
          answer: "Nein, ein Zählertausch ist nicht nötig. Ihr Stromzähler und die Leitungen bleiben im Besitz des örtlichen Netzbetreibers, der weiterhin für die Wartung zuständig ist."
        }""", new_strom)


# Add to Gas & Heizen
new_gas = """        {
          question: "Sollte ich einen Gastarif mit Preisgarantie wählen?",
          answer: "In der Regel ja. Eine Preisgarantie über 12 oder 24 Monate schützt Sie vor unerwarteten Preiserhöhungen auf dem Energiemarkt."
        },
        {
          question: "Wie finde ich einen günstigeren Gastarif?",
          answer: "Am besten durch einen unabhängigen Vergleich der verschiedenen Angebote. Wir prüfen aktuelle Tarife, achten auf versteckte Kosten und empfehlen Ihnen Optionen, die exakt zu Ihrem Verbrauchsverhalten passen."
        },
        {
          question: "Was passiert bei einer Gaspreiserhöhung?",
          answer: "Bei einer Preiserhöhung haben Sie ein gesetzliches Sonderkündigungsrecht. Sie können Ihren Vertrag kurzfristig beenden, und wir helfen Ihnen sofort dabei, einen neuen und günstigeren Anbieter zu finden."
        }"""
content = content.replace("""        {
          question: "Sollte ich einen Gastarif mit Preisgarantie wählen?",
          answer: "In der Regel ja. Eine Preisgarantie über 12 oder 24 Monate schützt Sie vor unerwarteten Preiserhöhungen auf dem Energiemarkt."
        }""", new_gas)


# Add to Internet & DSL
new_internet = """        {
          question: "Brauche ich einen neuen Router beim Anbieterwechsel?",
          answer: "Das kommt auf Ihren aktuellen Router und die neue Technologie an. Viele Anbieter stellen bei Vertragsabschluss kostenlos oder zur Miete einen passenden Router zur Verfügung. Bei einem reinen Anbieterwechsel ohne Technologiewechsel können Sie moderne Geräte oft weiter nutzen."
        },
        {
          question: "Wann ist Glasfaser in Aachen verfügbar?",
          answer: "Der Glasfaserausbau in Aachen und der Städteregion schreitet stetig voran. Wir prüfen gerne adressgenau für Sie, ob ein Anschluss bei Ihnen bereits möglich ist oder ab wann dieser ausgebaut wird."
        },
        {
          question: "Was tun bei zu langsamem Internet?",
          answer: "Oft liegt es am veralteten Router oder einem Tarif, der nicht mehr zu Ihren aktuellen Anforderungen passt. Ein Wechsel zu einem modernen Tarif, beispielsweise über Kabel oder Glasfaser, kann das Problem der langsamen Internetverbindung meist schnell beheben."
        }"""
content = content.replace("""        {
          question: "Brauche ich einen neuen Router beim Anbieterwechsel?",
          answer: "Das kommt auf Ihren aktuellen Router und die neue Technologie an. Viele Anbieter stellen bei Vertragsabschluss kostenlos oder zur Miete einen passenden Router zur Verfügung. Bei einem reinen Anbieterwechsel ohne Technologiewechsel können Sie moderne Geräte oft weiter nutzen."
        }""", new_internet)


# Add to Der Wechselprozess
new_wechsel = """        {
          question: "Gibt es beim Wechseln Kündigungsfristen?",
          answer: "Ja, diese hängen von Ihrem aktuellen Vertrag ab. In der Grundversorgung beträgt die Frist meist 2 Wochen. Sonderverträge haben längere Laufzeiten – wir prüfen das gerne für Sie und übernehmen die fristgerechte Kündigung."
        },
        {
          question: "Kann der Wechsel schiefgehen?",
          answer: "Nein, der Prozess ist in Deutschland extrem stark reguliert und sehr sicher. Wir überwachen alle Fristen und stellen sicher, dass Ihre Energie- oder Internetversorgung zu jedem Zeitpunkt vollständig aufrechterhalten bleibt."
        },
        {
          question: "Was ist eine Preisgarantie wert?",
          answer: "Eine Preisgarantie schützt Sie effektiv vor steigenden Energiepreisen auf dem Beschaffungsmarkt. Besonders in unruhigen Marktphasen bietet sie Ihnen wertvolle Planungssicherheit über 12 oder 24 Monate."
        }"""
content = content.replace("""        {
          question: "Gibt es beim Wechseln Kündigungsfristen?",
          answer: "Ja, diese hängen von Ihrem aktuellen Vertrag ab. In der Grundversorgung beträgt die Frist meist 2 Wochen. Sonderverträge haben längere Laufzeiten – wir prüfen das gerne für Sie und übernehmen die fristgerechte Kündigung."
        }""", new_wechsel)

with open('src/pages/FAQ.tsx', 'w') as f:
    f.write(content)
