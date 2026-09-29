import os
import glob
import re

strings = [
    ("Ein niedriger Arbeitspreis allein macht noch keinen guten Stromvertrag. Für einen belastbaren Vergleich zählen die voraussichtlichen Jahreskosten: Arbeitspreis, Grundpreis und mögliche Boni müssen gemeinsam betrachtet werden. Ebenso wichtig sind Laufzeit, Kündigungsfrist, Zahlungsweise und der genaue Umfang einer Preisgarantie.",
     "A low energy price alone does not make a good electricity contract. For a reliable comparison, the prospective annual costs count: energy price, basic price and possible bonuses must be considered together. Term, cancellation period, payment method and the exact scope of a price guarantee are equally important."),
    
    ("Energie Alemi prüft Ihre aktuelle Rechnung und ordnet die Angebote so ein, dass Sie nicht nur einen kurzfristigen Aktionspreis sehen. Ziel ist eine nachvollziehbare Entscheidung, die zu Ihrem Verbrauch und Ihrer gewünschten Flexibilität passt.",
     "Energie Alemi checks your current bill and categorizes the offers so that you don't just see a short-term promotional price. The goal is a comprehensible decision that suits your consumption and your desired flexibility."),
     
    ("Ein niedriger Arbeitspreis pro kWh allein macht noch keinen guten Gasvertrag. Für einen aussagekräftigen Vergleich zählen die voraussichtlichen Jahreskosten: Arbeitspreis, Grundpreis und mögliche Boni müssen gemeinsam betrachtet werden. Ebenso wichtig sind Laufzeit, Kündigungsfrist, Zahlungsweise und der genaue Umfang einer Preisgarantie.",
     "A low energy price per kWh alone does not make a good gas contract. For a meaningful comparison, the prospective annual costs count: energy price, basic price and possible bonuses must be considered together. Term, cancellation period, payment method and the exact scope of a price guarantee are equally important."),
     
    ("Die beworbene Maximalgeschwindigkeit eines Internettarifs ist nur ein Faktor. Für eine belastbare Entscheidung sollten die voraussichtlichen Gesamtkosten über die Vertragslaufzeit betrachtet werden: Grundgebühr, Router-Miete, Bereitstellungsentgelte und mögliche Boni fließen in den Vergleich ein. Ebenso wichtig ist die Prüfung der am jeweiligen Wohn- oder Geschäftsstandort verfügbaren Technologien (DSL, Kabel, Glasfaser).",
     "The advertised maximum speed of an internet tariff is only one factor. For a reliable decision, the prospective total costs over the contract term should be considered: basic fee, router rental, provision fees and possible bonuses flow into the comparison. Equally important is checking the available technologies (DSL, cable, fiber) at the respective residential or business location."),
     
    ("Energie Alemi ordnet die verfügbaren Angebote so ein, dass Sie ein klares Bild der tatsächlichen Kosten und Leistungen erhalten. Ziel ist eine nachvollziehbare Entscheidung, die zu Ihrem Nutzungsverhalten und Ihrer gewünschten Flexibilität passt.",
     "Energie Alemi categorizes the available offers so that you get a clear picture of the actual costs and services. The goal is a comprehensible decision that suits your usage behavior and your desired flexibility."),
     
    ("Übrigens: Neben der Strom- und Gasberatung helfen wir Ihnen auch dabei, den passenden",
     "By the way: In addition to electricity and gas advice, we also help you find the right"),
     
    ("zu finden.",
     "."),
     
    ("Erfahren Sie mehr über unsere Leistungen als",
     "Learn more about our services as"),
     
    ("Die Beratung richtet sich an Kundinnen und Kunden im gesamten {town}er Stadtgebiet",
     "The advice is aimed at customers throughout the {town} city area"),
     
    ("Die persönliche Beratung findet telefonisch oder am Standort von Energie Alemi in Aachen statt.",
     "Personal advice takes place by phone or at the Energie Alemi location in Aachen."),
     
    ("Sie wohnen oder arbeiten in {town} und möchten Ihren Stromvertrag verständlich prüfen lassen? Energie Alemi vergleicht passende Tarife verschiedener Anbieter und begleitet Sie auf Wunsch beim Wechsel – für Privathaushalte, Gewerbe und Industrie. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden",
     "Do you live or work in {town} and want to have your electricity contract checked in a comprehensible way? Energie Alemi compares suitable tariffs from various providers and, if you wish, supports you with the switch – for private households, businesses and industry. By the way, we also help you find a suitable"),

    ("Sie wohnen oder arbeiten in {town} und möchten Ihren Gasvertrag verständlich prüfen lassen? Energie Alemi vergleicht passende Tarife verschiedener Anbieter und begleitet Sie auf Wunsch beim Wechsel – für Privathaushalte, Gewerbe und Industrie. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden",
     "Do you live or work in {town} and want to have your gas contract checked in a comprehensible way? Energie Alemi compares suitable tariffs from various providers and, if you wish, supports you with the switch – for private households, businesses and industry. By the way, we also help you find a suitable"),

    ("Sie wohnen oder arbeiten in {town} und suchen einen passenden Internettarif? Energie Alemi vergleicht verfügbare Angebote verschiedener Anbieter (DSL, Kabel, Glasfaser) und erklärt Ihnen verständlich, worauf es bei Geschwindigkeit, Laufzeit und Hardware ankommt. Übrigens helfen wir Ihnen auch bei der Suche nach einem passenden",
     "Do you live or work in {town} and are looking for a suitable internet tariff? Energie Alemi compares available offers from different providers (DSL, cable, fiber) and explains clearly what is important regarding speed, term and hardware. By the way, we also help you find a suitable"),
]

def make_regex(s):
    # Escape regex specials, but let spaces match any whitespace including newlines
    escaped = re.escape(s)
    return escaped.replace(r'\ ', r'\s+')

for town in ['Aachen', 'Stolberg', 'Eschweiler', 'Herzogenrath', 'Würselen']:
    t_en = town if town != 'Würselen' else 'Wuerselen'
    
    town_strings = []
    for de, en in strings:
        de_town = de.replace("{town}", town)
        en_town = en.replace("{town}", t_en)
        
        # We need to wrap it in a ternary
        replacement = f'{{i18n.language === "en" ? "{en_town}" : "{de_town}"}}'
        
        town_strings.append((make_regex(de_town), replacement))
        
    for f in glob.glob(f"src/pages/*{town}.tsx"):
        with open(f, 'r') as file:
            content = file.read()
            
        for pat, repl in town_strings:
            # We must be careful not to replace something that is already wrapped!
            # If it's already translated, it will have '===' nearby, or we just do a lookahead/lookbehind
            # But the easiest way is: find the pattern, if it's NOT preceded by ':', then replace it.
            # Actually, `make_regex` looks for literal string, if it's already inside a `{i18n...}`, it won't be replaced if we only match the literal text NOT inside quotes?
            # Wait, the literal text is bare in JSX.
            # Let's just find and replace. If it replaces something that shouldn't be, it will break build.
            
            # Find all matches
            matches = list(re.finditer(pat, content))
            for m in reversed(matches):
                start, end = m.span()
                matched_text = m.group(0)
                
                # Check if it's already wrapped
                if "i18n.language" in content[max(0, start-30):end+30]:
                    continue
                
                content = content[:start] + repl + content[end:]
                
        with open(f, 'w') as file:
            file.write(content)

print("Whitespace strings translated.")
