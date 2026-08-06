import json
import os

locales_dir = "public/locales"

# Add translations for the Figma hero sections
hero_translations = {
    "elec_hero": {
        "badge": "STROM",
        "title": "Stromtarife vergleichen & Energiekosten senken.",
        "desc": "Finden Sie den günstigsten Stromtarif und wechseln Sie in nur wenigen Minuten – schnell, einfach und zuverlässig.",
        "btn": "Stromtarife vergleichen",
        "bullet1_title": "Top Tarife",
        "bullet1_desc": "Von geprüften und zuverlässigen Anbietern.",
        "bullet2_title": "Schnell & einfach",
        "bullet2_desc": "In wenigen Minuten zum neuen Tarif wechseln.",
        "bullet3_title": "Sicher & fair",
        "bullet3_desc": "Seriöser Vergleich – transparent und unabhängig.",
        "feat1_title": "Besser sparen",
        "feat1_desc": "Vergleichen und jedes Jahr Hunderte Euro sparen.",
        "feat2_title": "Grüne Optionen",
        "feat2_desc": "Auch Ökostromtarife für eine nachhaltige Zukunft.",
        "feat3_title": "Persönlicher Service",
        "feat3_desc": "Wir sind für Sie da – kompetent & freundlich.",
        "feat4_title": "Ihre Daten sind sicher",
        "feat4_desc": "Wir behandeln Ihre Daten vertraulich und DSGVO-konform."
    },
    "gas_hero": {
        "badge": "GAS",
        "title": "Gastarife vergleichen & bares Geld sparen.",
        "desc": "Finden Sie den günstigsten Gastarif und wechseln Sie in nur wenigen Minuten – schnell, sicher und zuverlässig.",
        "btn": "Gastarife vergleichen",
        "bullet1_title": "Top Tarife von geprüften Anbietern",
        "bullet1_desc": "",
        "bullet2_title": "Schneller & kostenloser Wechsel",
        "bullet2_desc": "",
        "bullet3_title": "Persönlicher Service",
        "bullet3_desc": "",
        "feat1_title": "Sicher & zuverlässig",
        "feat1_desc": "Ihre Daten sind bei uns in besten Händen.",
        "feat2_title": "Schnell & einfach",
        "feat2_desc": "In wenigen Minuten zum neuen Tarif.",
        "feat3_title": "Besser sparen",
        "feat3_desc": "Vergleichen und jedes Jahr hunderte Euro sparen."
    },
    "net_hero": {
        "badge": "INTERNET",
        "title": "Internet-Tarife vergleichen & Bestes sichern.",
        "desc": "Highspeed-Internet zum besten Preis. Finden Sie den perfekten Tarif für Ihr Zuhause – schnell, einfach und zuverlässig.",
        "btn": "Internet-Tarife vergleichen",
        "bullet1_title": "Schnell & zuverlässig",
        "bullet1_desc": "Stabile Verbindungen für Ihr Zuhause.",
        "bullet2_title": "Top Tarife vergleichen",
        "bullet2_desc": "Die besten Angebote auf einen Blick.",
        "bullet3_title": "Einfach wechseln",
        "bullet3_desc": "In wenigen Minuten zum neuen Anbieter.",
        "feat1_title": "Sicher & vertrauenswürdig",
        "feat1_desc": "Ihre Daten sind bei uns in besten Händen.",
        "feat2_title": "Besser sparen",
        "feat2_desc": "Vergleichen und jedes Jahr hunderte Euro sparen.",
        "feat3_title": "Persönlicher Service",
        "feat3_desc": "Wir sind für Sie da – kompetent & freundlich."
    }
}

for lang in os.listdir(locales_dir):
    if os.path.isdir(os.path.join(locales_dir, lang)):
        file_path = os.path.join(locales_dir, lang, "translation.json")
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        # Update German first, later we can auto-translate others or they will just default to German
        # For simplicity, inserting German strings for all, they will be translated later
        data.update(hero_translations)
        
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

print("Translations updated successfully.")
