#!/usr/bin/env python3
"""Add the remaining 141 translations to translations.json"""
import json

with open('scripts/translations.json') as f:
    T = json.load(f)

# Add ALL missing translations
missing = {
    "0176 659 493 90  ·  Beratung am Alexianergraben 9, 52064 Aachen": "0176 659 493 90  ·  Advice at Alexianergraben 9, 52064 Aachen",
    "Adresse und Nutzung erfassen": "Record address and usage",
    "Adresse und Nutzung klären": "Clarify address and usage",
    "Auch nach dem Wechsel bleibt Energie Alemi Ihr Ansprechpartner.": "Even after the switch, Energie Alemi remains your contact.",
    "Auf Wunsch unterstützen wir die notwendigen Schritte und bleiben bei Rückfragen erreichbar.": "If you wish, we support the necessary steps and remain available for questions.",
    "Auf Wunsch unterstützt Energie Alemi die notwendigen Schritte und bleibt bei Rückfragen erreichbar.": "If you wish, Energie Alemi supports the necessary steps and remains available for questions.",
    "Bei Fragen haben Sie einen direkten Ansprechpartner in Aachen.": "If you have questions, you have a direct contact person in Aachen.",
    "Bei höherem Verbrauch, vermieteten Objekten oder betrieblich genutzten Gebäuden sind kalkulierbare Konditionen besonders wichtig. Der Vergleich wird deshalb an die konkrete Nutzung angepasst.": "For higher consumption, rented properties or commercially used buildings, calculable conditions are particularly important. The comparison is therefore adapted to the specific use.",
    "Berät Energie Alemi auch Unternehmen aus Eschweiler?": "Does Energie Alemi also advise businesses from Eschweiler?",
    "Berät Energie Alemi auch Unternehmen?": "Does Energie Alemi also advise businesses?",
    "Bleibt die Stromversorgung während des Wechsels bestehen?": "Does the electricity supply continue during the switch?",
    "Der letzte Jahreswert wird als Grundlage für einen realistischen Kostenvergleich verwendet.": "The last annual value is used as the basis for a realistic cost comparison.",
    "Diese Angaben machen den Vergleich aussagekräftig": "This information makes the comparison meaningful",
    "Ein Überblick über laufende Kosten, feste Anteile und einmalige Sonderzahlungen.": "An overview of running costs, fixed components and one-off special payments.",
    "Entscheidung und Wechsel": "Decision and switch",
    "Entscheidung und Wechsel begleiten": "Accompany decision and switch",
    "Ergebnis besprechen und entscheiden": "Discuss result and decide",
    "Es wird ermittelt, welche Techniken und Tarife für die genaue Eschweiler Adresse buchbar sind.": "It is determined which technologies and tariffs can be booked for the exact Eschweiler address.",
    "Für einen Haushalt zählen die Zahl der Personen und Geräte sowie Anwendungen wie Homeoffice, Videokonferenzen, Streaming, Gaming und Cloud-Backups. Besonders bei häufigen Uploads sollte nicht nur die Download-Zahl betrachtet werden.": "For a household, the number of people and devices as well as applications such as home office, video conferences, streaming, gaming and cloud backups count. Especially with frequent uploads, not only the download speed should be considered.",
    "Geeignetes Angebot auswählen": "Select suitable offer",
    "Ihre Vorteile bei Energie Alemi": "Your advantages with Energie Alemi",
    "Internetberatung in Aachen: Verfügbarkeit, Tarife und Wechsel transparent erklärt. DSL, Kabel und Glasfaser für Privathaushalte und Unternehmen.": "Internet advice in Aachen: availability, tariffs and switching explained transparently. DSL, cable and fiber for private households and businesses.",
    "Internetanbieter in Aachen vergleichen": "Compare internet providers in Aachen",
    "Ist die Gasversorgung während eines Wechsels gesichert?": "Is the gas supply secured during a switch?",
    "Kontakt und Beratung": "Contact and advice",
    "Kostet die Beratung bei Energie Alemi etwas?": "Does the advice at Energie Alemi cost anything?",
    "Kosten und Bedingungen vergleichen": "Compare costs and conditions",
    "LTE oder 5G": "LTE or 5G",
    "Muss der Gaszähler beim Wechsel ausgetauscht werden?": "Does the gas meter need to be replaced when switching?",
    "Nach Ihrer Tarifentscheidung unterstützt Energie Alemi auf Wunsch die nächsten Schritte.": "After your tariff decision, Energie Alemi supports the next steps if you wish.",
    "Nein. Die Tarifberatung ist kostenlos.": "No. The tariff advice is free of charge.",
    "Nein. Der Gaszähler gehört dem Netzbetreiber und bleibt bei einem Lieferantenwechsel unverändert.": "No. The gas meter belongs to the network operator and remains unchanged when switching suppliers.",
    "Nicht nur auf den Download achten": "Don't just look at the download",
    "Netze und Hausanschlüsse sind nicht an jeder Adresse gleich ausgebaut. Deshalb können sich Technik und erreichbare Leistung selbst zwischen benachbarten Gebäuden unterscheiden.": "Networks and house connections are not equally developed at every address. Therefore, technology and achievable performance can differ even between neighboring buildings.",
    "Neukunden- oder Sofortboni können den Preis im ersten Jahr senken. Entscheidend sind die Voraussetzungen und die Kosten ohne Bonus.": "New customer or instant bonuses can reduce the price in the first year. The requirements and costs without bonus are decisive.",
    "Nutzerzahl, Geräte, Homeoffice, Streaming, Gaming, Telefonie und geschäftliche Anforderungen werden erfasst.": "Number of users, devices, home office, streaming, gaming, telephony and business requirements are recorded.",
    "Ob ein eigener oder ein vom Anbieter bereitgestellter Router sinnvoller ist, hängt von den jeweiligen Anforderungen ab.": "Whether your own or a provider-supplied router makes more sense depends on the respective requirements.",
    "Preis je verbrauchter kWh. Wie stark wirkt er bei meinem Verbrauch?": "Price per kWh consumed. How much does it affect my consumption?",
    "Privathaushalt, Gewerbe oder Industrie: Der Bedarf entscheidet": "Private household, business or industry: the need decides",
    "Prüfen, wann der bestehende Vertrag endet und wie flexibel der neue Vertrag bleibt.": "Check when the existing contract ends and how flexible the new contract remains.",
    "Prüfen, wie lange sie gilt und welche Bestandteile ausgenommen sein können.": "Check how long it is valid and which components may be excluded.",
    "Prüfung nach Gebäude und Verbrauch": "Review by building and consumption",
    "Rechnung und Vertrag ansehen": "Review bill and contract",
    "Sie erhalten die relevanten Informationen und entscheiden, welcher Tarif zu Ihrer Situation passt.": "You receive the relevant information and decide which tariff suits your situation.",
    "Sie erhalten die relevanten Vertragsangaben und entscheiden, welches Angebot zu Ihrem Bedarf passt.": "You receive the relevant contract details and decide which offer suits your needs.",
    "Sie ist für die konkrete Tarifauswahl erforderlich.": "It is required for the specific tariff selection.",
    "Sie nennen Anschlussort, Straße, Hausnummer und gegebenenfalls Wohnungsangaben.": "You provide the connection location, street, house number and, if applicable, apartment details.",
    "Sie wählen das passende Angebot; Energie Alemi unterstützt auf Wunsch bei den nächsten Schritten.": "You choose the suitable offer; Energie Alemi supports you with the next steps if you wish.",
    "Sie wählen das passende Angebot; auf Wunsch unterstützt Energie Alemi die nächsten Schritte.": "You choose the suitable offer; if you wish, Energie Alemi supports the next steps.",
    "Tarif auswählen": "Select tariff",
    "Tarife und Bedingungen vergleichen": "Compare tariffs and conditions",
    "Unterstützung beim Wechsel": "Support with switching",
    "Verbrauch": "Consumption",
    "Verbrauch einordnen": "Classify consumption",
    "Verbrauch und Gebäude berücksichtigen": "Consider consumption and building",
    "Vergleich nach Verbrauch und Gebäudesituation": "Comparison by consumption and building situation",
    "Vertrag": "Contract",
    "Vertrag und Rechnung prüfen": "Check contract and bill",
    "Vertragssituation klären": "Clarify contract situation",
    "Voraussetzungen und Auszahlung getrennt von den laufenden Tarifkosten bewerten.": "Evaluate requirements and payout separately from the running tariff costs.",
    "Voraussetzungen und Auszahlungstermin prüfen; das zweite Vertragsjahr separat betrachten.": "Check requirements and payout date; consider the second contract year separately.",
    "Voraussetzungen und Auszahlungszeitpunkt nachvollziehen.": "Understand requirements and payout timing.",
    "Voraussetzungen, Auszahlung und Kosten im Folgejahr getrennt betrachten.": "Consider requirements, payout and costs in the following year separately.",
    "Warum sollte ich Bonus und Folgejahr getrennt betrachten?": "Why should I consider bonus and following year separately?",
    "Warum unterscheiden sich Angebote innerhalb von Eschweiler?": "Why do offers differ within Eschweiler?",
    "Welche Angaben brauche ich für den Internetvergleich?": "What information do I need for the internet comparison?",
    "Welche Angaben werden für den Internetvergleich benötigt?": "What information is needed for the internet comparison?",
    "Welche Internetgeschwindigkeit brauche ich für Homeoffice und Streaming?": "What internet speed do I need for home office and streaming?",
    "Welche Kosten gehören in einen Internetvergleich?": "What costs belong in an internet comparison?",
    "Welche Unterstützung und Bedingungen bietet der jeweilige Tarif?": "What support and conditions does the respective tariff offer?",
    "Wir besprechen Ihren aktuellen Vertrag, Ihren Standort und Ihre Anforderungen.": "We discuss your current contract, your location and your requirements.",
    "Wir erfassen Standort, aktuellen Vertrag, Zahl der Nutzer und wichtige Anwendungen.": "We record the location, current contract, number of users and important applications.",
    "Wir klären Standort, Nutzerzahl, Anwendungen, vorhandenen Anschluss und aktuellen Vertrag.": "We clarify location, number of users, applications, existing connection and current contract.",
    "Wir prüfen passende Optionen für Ihre Adresse und vergleichen relevante Tarifmerkmale.": "We check suitable options for your address and compare relevant tariff features.",
    "Wird beim Wechsel der Gaszähler ausgetauscht?": "Is the gas meter replaced when switching?",
    "Das hängt von Nutzerzahl, Geräten und Anwendungen ab. Homeoffice, Videokonferenzen, Streaming, Gaming und große Uploads stellen unterschiedliche Anforderungen.": "That depends on the number of users, devices and applications. Home office, video conferences, streaming, gaming and large uploads have different requirements.",
    "Das hängt von Nutzerzahl, gleichzeitig verwendeten Geräten sowie Anwendungen ab. Videokonferenzen, Cloud-Dienste, mehrere Streams und große Uploads sollten gemeinsam berücksichtigt werden.": "That depends on the number of users, simultaneously used devices and applications. Video conferences, cloud services, multiple streams and large uploads should be considered together.",
    "Das hängt von Personen, Geräten und gleichzeitigen Anwendungen ab. Homeoffice, Videokonferenzen, mehrere Streams, Gaming und große Uploads sollten gemeinsam berücksichtigt werden.": "That depends on the number of people, devices and simultaneous applications. Home office, video conferences, multiple streams, gaming and large uploads should be considered together.",
    "Die Auswahl hängt von Straße, Hausnummer, Netzausbau und Hausanschluss ab. Eine adressgenaue Prüfung zeigt, welche Technologien und Tarife konkret buchbar sind.": "The selection depends on street, house number, network expansion and house connection. An address-specific check shows which technologies and tariffs can actually be booked.",
    "Ja. Die Beratung richtet sich gleichermaßen an Privat- und Geschäftskunden in Eschweiler.": "Yes. The advice is equally aimed at private and business customers in Eschweiler.",
    "Ja. Die Beratung gilt für Privat-, Gewerbe- und Industriekunden.": "Yes. The advice applies to private, commercial and industrial customers.",
    "Ja. Ein regulärer Wechsel betrifft den Liefervertrag; Netzanschluss und Zähler bleiben bestehen. Die gesetzlich geregelte Grundversorgung sichert die Belieferung ab.": "Yes. A regular switch affects the supply contract; network connection and meter remain. The legally regulated basic supply secures the delivery.",
    "Ein regulärer Lieferantenwechsel betrifft nur den Vertrag; Netzanschluss und Zähler bleiben bestehen. Die gesetzliche Grundversorgung sichert die Gaslieferung ab.": "A regular supplier switch only affects the contract; network connection and meter remain. The statutory basic supply secures the gas delivery.",
    "Regulärer Monatspreis, Bereitstellung, Router, Versand, eventuelle Anschlussarbeiten und Vertragslaufzeit werden zusammen betrachtet.": "Regular monthly price, provision, router, shipping, any connection work and contract duration are considered together.",
    "Monatspreis, Bereitstellungsentgelt, Routerkosten, Versand, mögliche Anschlussarbeiten und Vertragslaufzeit werden zusammen betrachtet.": "Monthly price, provision fee, router costs, shipping, possible connection work and contract duration are considered together.",
}

# Update translations
for k, v in missing.items():
    T[k] = v

# Also handle strings that start with "question: " or "answer: " or "title: " etc
# These are detected by the audit with prefixes
for key in list(T.keys()):
    if not T[key]:
        # Try stripping common prefixes
        for prefix in ['question: "', 'answer: "', 'title: "', 'description: "', 'title="']:
            if key.startswith(prefix):
                inner = key[len(prefix):].rstrip('"').rstrip("',")
                if inner in T and T[inner]:
                    T[key] = T[inner]
                elif inner in missing:
                    T[key] = missing[inner]

with open('scripts/translations.json', 'w') as f:
    json.dump(T, f, indent=2, ensure_ascii=False)

empty = sum(1 for v in T.values() if not v)
print(f"Total: {len(T)}, Translated: {len(T) - empty}, Missing: {empty}")
