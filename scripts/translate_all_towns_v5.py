#!/usr/bin/env python3
"""
Comprehensive town page translator.
Reads each of the 15 town page files and replaces ALL remaining
German text with i18n.language === 'en' ? '...' : '...' conditionals.

Strategy: For each file, we find EVERY line that contains bare German text
and wrap it. We handle both JSX text content and JSX prop values.
"""
import os
import re
import json

# Translation dictionary: German -> English
# We'll build this per-file by extracting strings and translating them.

def translate_de_to_en(text, town_de, town_en):
    """Simple rule-based translation for common patterns."""
    translations = {
        # Hero titles - Strom
        f"Stromanbieter in {town_de} vergleichen – persönlich beraten wechseln": f"Compare electricity providers in {town_en} – switch with personal advice",
        f"Stromanbieter in {town_de} vergleichen – Konditionen klar bewerten": f"Compare electricity providers in {town_en} – evaluate conditions clearly",
        f"Stromanbieter in {town_de} vergleichen – Jahreskosten realistisch bewerten": f"Compare electricity providers in {town_en} – evaluate annual costs realistically",
        f"Stromanbieter {town_de} vergleichen": f"Compare electricity providers {town_en}",
        f"Stromanbieter in {town_de} vergleichen": f"Compare electricity providers in {town_en}",
        
        # Hero titles - Gas
        f"Gasanbieter in {town_de} vergleichen – Kosten und Vertrag prüfen": f"Compare gas providers in {town_en} – check costs and contract",
        f"Gasanbieter in {town_de} vergleichen – Tarife verständlich prüfen": f"Compare gas providers in {town_en} – check tariffs comprehensibly",
        f"Gasanbieter in {town_de} vergleichen – Jahreskosten realistisch prüfen": f"Compare gas providers in {town_en} – evaluate annual costs realistically",
        f"Gasanbieter Aachen vergleichen – persönlich beraten, klar entscheiden": f"Compare gas providers Aachen – personal advice, clear decisions",
        f"Gasanbieter in {town_de} vergleichen": f"Compare gas providers in {town_en}",
        
        # Hero titles - Internet
        f"Internetanbieter in {town_de} vergleichen – adressgenau beraten": f"Compare internet providers in {town_en} – address-specific advice",
        f"Internetanbieter in {town_de} vergleichen – passend zu Adresse und Bedarf": f"Compare internet providers in {town_en} – tailored to address and needs",
        f"Internetanbieter in {town_de} vergleichen – Verfügbarkeit zuerst prüfen": f"Compare internet providers in {town_en} – check availability first",
        f"Internetanbieter in {town_de} vergleichen": f"Compare internet providers in {town_en}",
        f"Welcher Internettarif passt zu Ihrem Zuhause oder Unternehmen? Energie Alemi prüft Ihren Bedarf, vergleicht die an Ihrer Adresse verfügbaren Tarife und berät Sie verständlich – ob DSL, Kabel oder Glasfaser.": f"Which internet tariff suits your home or business? Energie Alemi assesses your needs, compares the tariffs available at your address and advises you clearly – whether DSL, cable or fiber.",
        
        # Button texts
        f"Jetzt Stromtarife für {town_de} prüfen lassen": f"Have electricity tariffs for {town_en} checked now",
        f"Stromtarife für {town_de} prüfen lassen": f"Have electricity tariffs for {town_en} checked now",
        f"Jetzt Gastarife für {town_de} vergleichen": f"Compare gas tariffs for {town_en} now",
        f"Gastarife für {town_de} vergleichen": f"Compare gas tariffs for {town_en}",
        f"Jetzt Gastarife für {town_de} prüfen lassen": f"Have gas tariffs for {town_en} checked now",
        f"Gastarife für {town_de} prüfen lassen": f"Have gas tariffs for {town_en} checked now",
        f"Jetzt Gastarif prüfen": f"Check gas tariff now",
        f"Jetzt Internetverfügbarkeit in {town_de} prüfen lassen": f"Check internet availability in {town_en} now",
        f"Internetverfügbarkeit in {town_de} prüfen lassen": f"Check internet availability in {town_en} now",
        f"Jetzt Internettarife für {town_de} prüfen lassen": f"Have internet tariffs for {town_en} checked now",
        
        # Badge texts
        f"Stromanbieter {town_de}": f"Electricity Providers {town_en}",
        f"Gasanbieter {town_de}": f"Gas Providers {town_en}",
        f"Internetanbieter {town_de}": f"Internet Providers {town_en}",
        
        # Section headers
        f"Stromtarife für {town_de} mit den richtigen Daten vergleichen": f"Compare electricity tariffs for {town_en} with the right data",
        f"Stromtarife für Privathaushalte, Gewerbe und Industrie": f"Electricity tariffs for private households, businesses and industry",
        f"Gastarife für Privathaushalte, Gewerbe und Industrie": f"Gas tariffs for private households, businesses and industry",
        f"Internettarife für Privathaushalte, Gewerbe und Industrie": f"Internet tariffs for private households, businesses and industry",
        f"Ein guter Stromtarif passt zu Verbrauch und Vertragsziel": f"A good electricity tariff matches consumption and contract goals",
        f"Ein guter Gastarif passt zu Verbrauch und Vertragsziel": f"A good gas tariff matches consumption and contract goals",
        f"Darauf sollten Sie beim Stromvergleich achten": f"What you should pay attention to when comparing electricity",
        f"Darauf sollten Sie beim Gasvergleich achten": f"What you should pay attention to when comparing gas",
        f"Häufige Fragen zu Stromtarifen in {town_de}": f"Frequently asked questions about electricity tariffs in {town_en}",
        f"Häufige Fragen zu Gastarifen in {town_de}": f"Frequently asked questions about gas tariffs in {town_en}",
        f"Häufige Fragen zu Internetanbietern in {town_de}": f"Frequently asked questions about internet providers in {town_en}",
        f"Häufige Fragen zu Internettarifen in {town_de}": f"Frequently asked questions about internet tariffs in {town_en}",
        f"Häufige Fragen zu Gasanbietern in {town_de}": f"Frequently asked questions about gas providers in {town_en}",
        f"Persönliche Tarifberatung für {town_de} – direkt aus Aachen": f"Personal tariff advice for {town_en} – directly from Aachen",
        f"Stromberatung für {town_de} – erreichbar in Aachen": f"Electricity advice for {town_en} – reachable in Aachen",
        f"Gasberatung für {town_de} – persönlich erreichbar in Aachen": f"Gas advice for {town_en} – personally reachable in Aachen",
        f"Gasberatung für {town_de} – persönlich aus Aachen": f"Gas advice for {town_en} – personally from Aachen",
        f"Internetberatung für {town_de} – telefonisch oder in Aachen": f"Internet advice for {town_en} – by phone or in Aachen",
        f"Persönliche Gasberatung für {town_de} – erreichbar in Aachen": f"Personal gas advice for {town_en} – reachable in Aachen",
        f"Persönliche Internetberatung für {town_de}": f"Personal internet advice for {town_en}",
        
        # CTA texts  
        f"Bereit für einen transparenten Gasvergleich?": f"Ready for a transparent gas comparison?",
        "Kostenlose Beratung": "Free advice",
        
        # SEO descriptions
        f"Stromtarife in {town_de} persönlich vergleichen: Energie Alemi prüft Vertrag, Verbrauch und Konditionen und begleitet auf Wunsch den Anbieterwechsel.": f"Compare electricity tariffs in {town_en} personally: Energie Alemi checks contract, consumption and conditions and accompanies the change of provider if desired.",
        f"Stromtarife in {town_de} vergleichen: Kosten, Vertragsdetails und Kündigungsfrist prüfen. Energie Alemi berät Privathaushalte, Gewerbe und Industrie – persönlich und vor Ort.": f"Compare electricity tariffs in {town_en}: check costs, contract details and cancellation period. Energie Alemi advises private households, businesses and industry – personally and on site.",
        f"Gastarife in {town_de} persönlich vergleichen: Energie Alemi prüft Verbrauch, Vertrag und Konditionen und begleitet auf Wunsch den Anbieterwechsel.": f"Compare gas tariffs in {town_en} personally: Energie Alemi checks consumption, contract and conditions and accompanies the change of provider if desired.",
        f"Gastarife in {town_de} vergleichen: Energie Alemi prüft Verbrauch, Gesamtkosten und Vertragsbedingungen. Kostenlose Tarifberatung für Privat und Gewerbe.": f"Compare gas tariffs in {town_en}: Energie Alemi checks consumption, total costs and contract conditions. Free tariff advice for private and commercial customers.",
        f"Gastarife in {town_de} vergleichen: Jahreskosten, Preisgarantie und Laufzeit auswerten. Kostenlose Tarifberatung für Privathaushalte und Unternehmen bei Energie Alemi.": f"Compare gas tariffs in {town_en}: evaluate annual costs, price guarantee and term. Free tariff advice for private households and businesses at Energie Alemi.",
        f"Gasanbieter in {town_de} vergleichen: Energie Alemi prüft Arbeitspreis, Grundpreis, Preisgarantie und Laufzeit. Persönliche Beratung für Privathaushalte, Gewerbe und Industrie.": f"Compare gas providers in {town_en}: Energie Alemi checks energy price, basic price, price guarantee and term. Personal advice for private households, businesses and industry.",
        f"Internettarife in {town_de} vergleichen: persönliche Beratung für DSL, Kabel und Glasfaser. Kostenlose Bedarfsanalyse bei Energie Alemi.": f"Compare internet tariffs in {town_en}: personal advice for DSL, cable and fiber. Free needs analysis at Energie Alemi.",
        f"Internettarife in {town_de} vergleichen: Energie Alemi prüft Verfügbarkeit, Leistung, Kosten und Vertragsbedingungen. Kostenlose Beratung für Privat und Gewerbe.": f"Compare internet tariffs in {town_en}: Energie Alemi checks availability, performance, costs and contract conditions. Free advice for private and commercial customers.",
        f"Internettarife in {town_de} vergleichen: Verfügbarkeit, Geschwindigkeit, Kosten und Laufzeit prüfen – persönliche Beratung bei Energie Alemi.": f"Compare internet tariffs in {town_en}: check availability, speed, costs and term – personal advice at Energie Alemi.",
        f"Internettarife in {town_de} vergleichen: Energie Alemi prüft adressgenau Verfügbarkeit, Bandbreite und Vertragsbedingungen. Kostenlose Beratung für DSL, Kabel und Glasfaser.": f"Compare internet tariffs in {town_en}: Energie Alemi checks availability, bandwidth and contract conditions by address. Free advice for DSL, cable and fiber.",
        f"Internettarife in {town_de} vergleichen: Energie Alemi prüft Verfügbarkeit, Geschwindigkeit und Vertragsbedingungen an Ihrer Adresse. Kostenlose Beratung für Privat und Gewerbe.": f"Compare internet tariffs in {town_en}: Energie Alemi checks availability, speed and contract conditions at your address. Free advice for private and commercial customers.",
        f"Internettarife {town_de} vergleichen | Energie Alemi": f"Compare Internet Tariffs {town_en} | Energie Alemi",
        
        # Section subtitle texts
        f"Haushalte und Unternehmen haben unterschiedliche Prioritäten": f"Households and businesses have different priorities",
        f"Beim Gaspreis zählt die Rechnung für ein ganzes Jahr": f"When it comes to gas prices, the bill for a whole year counts",
        f"Diese Punkte gehören in jeden Gasvergleich": f"These points belong in every gas comparison",
        f"Das gehört in einen fairen Gastarif-Vergleich": f"What belongs in a fair gas tariff comparison",
        f"Diese Unterlagen beschleunigen die Prüfung": f"These documents speed up the review",
        f"Was wir beim Vergleich berücksichtigen": f"What we consider in the comparison",
        f"Auch Kündigungsfrist, automatische Verlängerung und Rufnummernmitnahme gehören vor der Beauftragung geprüft.": f"Cancellation period, automatic renewal and number porting should also be checked before placing an order.",
        f"Eine Preisgarantie kann Planungssicherheit geben, erfasst aber nicht automatisch jeden Preisbestandteil.": f"A price guarantee can provide planning security, but does not automatically cover every price component.",
        f"Ein transparenter und einfacher Ablauf für Ihren neuen Internetanschluss.": f"A transparent and simple process for your new internet connection.",
        f"Wer nach {town_de} zieht oder innerhalb der Stadt umzieht, sollte die neue Lieferstelle frühzeitig melden.": f"Anyone moving to {town_en} or within the city should report the new delivery point early.",
    }
    return translations.get(text, None)


def process_file(filepath, town_de, town_en):
    """Process a single town page file."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    changed = False
    
    for i, line in enumerate(lines):
        original_line = line
        
        # Skip lines that are already fully translated or are imports/comments
        stripped = line.strip()
        if not stripped or stripped.startswith('import') or stripped.startswith('//') or stripped.startswith('{/*') or stripped.startswith('const ') or stripped.startswith('export '):
            continue
            
        # Pattern 1: JSX prop with German string: prop="German text"
        # But NOT className, style, href, to, etc.
        prop_pattern = r'((?:title|description|subtitle|badgeText|buttonText|placeholder|label)=)"([^"]+)"'
        for match in re.finditer(prop_pattern, line):
            prop_name = match.group(1)
            text = match.group(2)
            if any(c in text for c in 'äöüßÄÖÜ') or (len(text) > 20 and re.search(r'[A-Z][a-z]+\s+(und|oder|für|bei|mit|von|den|der|die|das|aus|ist|wir|Sie|Ihr)', text)):
                if 'i18n' not in text:
                    en_text = translate_de_to_en(text, town_de, town_en)
                    if en_text:
                        old = f'{prop_name}"{text}"'
                        new = f'{prop_name}{{i18n.language === "en" ? "{en_text}" : "{text}"}}'
                        line = line.replace(old, new)
                        changed = True
        
        # Pattern 2: Bare German text in JSX (between > and <)
        # Find runs of text that are NOT inside {}, and contain German
        # We look for lines where the text content is bare (not inside i18n ternary)
        # This is the trickiest part
        
        # Check for lines like:   Some German text here
        # where it's inside a JSX element
        bare_text_pattern = r'^(\s+)((?:[A-ZÄÖÜ][a-zäöüß]+\s+(?:und|oder|für|bei|mit|von|den|der|die|das|aus|ist|wir|Sie|Ihr|nicht|sich|dem|ein|einen|eine|einem|einer|auch|sind|hat|kann|als|auf|über|an|ab|im|am|nach|vor|noch|nur|zum|zur|ob|schon|wenn|so|wie|es|zu|Ihre|Ihren|Ihrem|Ihrer))[^<>{}]*[.?!]?)$'
        m = re.match(bare_text_pattern, stripped)
        
        lines[i] = line
    
    # Now handle multi-line patterns and inline text  
    content = '\n'.join(lines)
    
    # --- Handle all remaining bare German paragraphs ---
    # Find <p ...>GERMAN TEXT</p> patterns where the text spans the space between tags
    # and is NOT wrapped in {}
    
    # Strategy: use a line-by-line approach to find lines that contain bare German text
    # that should be wrapped in i18n ternary
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Skip already processed lines
        if 'i18n.language' in line and '===' in line:
            # But check if there's ALSO bare German text mixed in on the same line
            # e.g., {i18n...} – etwa in Atsch, Büsbach... 
            pass
        
        if not stripped:
            continue
            
        # Handle lines that are pure German paragraph text (indented, no JSX tags on line)
        # These are text nodes inside <p> or <h2> etc.
        if re.match(r'^\s+[A-ZÄÖÜ]', line) and not stripped.startswith('<') and not stripped.startswith('{') and not stripped.startswith('//') and not stripped.startswith('import') and not stripped.startswith('const') and not stripped.startswith('export') and not stripped.startswith('return') and not stripped.startswith('onClick') and not stripped.startswith('}'):
            # Check if this is likely German text
            if any(c in stripped for c in 'äöüßÄÖÜ') or re.search(r'(und|oder|für|bei|mit|von|den|der|die|das|aus|ist|wir|Sie|Ihr)\s', stripped):
                # Check it doesn't already have i18n
                if 'i18n' not in line and '<Link' not in line and '<span' not in line and 'className' not in line:
                    indent = re.match(r'^(\s+)', line).group(1) if re.match(r'^(\s+)', line) else ''
                    en = translate_line_to_en(stripped, town_de, town_en)
                    if en:
                        lines[i] = f'{indent}{{i18n.language === "en" ? "{en}" : "{stripped}"}}'
                        changed = True
    
    content = '\n'.join(lines)
    
    if changed:
        with open(filepath, 'w') as f:
            f.write(content)
    
    return changed


def translate_line_to_en(text, town_de, town_en):
    """Translate a single line/paragraph of German text."""
    # Remove trailing whitespace
    text = text.strip()
    
    translations = {
        # Strom section paragraphs
        f"Stromtarife für {town_de} mit den richtigen Daten vergleichen": f"Compare electricity tariffs for {town_en} with the right data",
        f"Beim Umzug rechtzeitig Lieferadresse und Termin festlegen": f"Report your delivery address and date in time when moving",
        f"Stromberatung für {town_de} – erreichbar in Aachen": f"Electricity advice for {town_en} – reachable in Aachen",
        f"Stromtarife für {town_de} prüfen lassen": f"Have electricity tariffs for {town_en} checked",
        
        # Gas section paragraphs
        f"Der Gasvergleich beginnt mit Verbrauch und Gebäudesituation": f"The gas comparison starts with consumption and building situation",
        f"Ein sinnvoller Gasvergleich beginnt mit Ihrer tatsächlichen Ausgangslage": f"A meaningful gas comparison starts with your actual situation",
        f"Gasverträge ohne Lockpreis-Falle vergleichen": f"Compare gas contracts without promotional price traps",
        f"Zuerst klären, wer den Gasvertrag abgeschlossen hat": f"First clarify who signed the gas contract",
        f"Preisgarantie und Flexibilität gemeinsam bewerten": f"Evaluate price guarantee and flexibility together",
        f"Persönliche Gasberatung für {town_de} – erreichbar in Aachen": f"Personal gas advice for {town_en} – reachable in Aachen",
        f"Gasberatung für {town_de} – persönlich erreichbar in Aachen": f"Gas advice for {town_en} – personally reachable in Aachen",
        f"Gasberatung für {town_de} – persönlich aus Aachen": f"Gas advice for {town_en} – personally from Aachen",
        f"Jetzt Gastarife für {town_de} vergleichen": f"Compare gas tariffs for {town_en} now",
        f"Gastarife für {town_de} vergleichen": f"Compare gas tariffs for {town_en}",
        f"Jetzt Gastarife für {town_de} prüfen lassen": f"Have gas tariffs for {town_en} checked now",
        f"Gastarife für {town_de} prüfen lassen": f"Have gas tariffs for {town_en} checked",
        f"Für wen lohnt sich ein Gasvergleich?": f"Who benefits from a gas comparison?",
        f"Wichtig für Mieterinnen und Mieter": f"Important for tenants",
        f"Was bedeutet das für Ihren Wechsel?": f"What does this mean for your switch?",
        f"Bereit für einen transparenten Gasvergleich?": f"Ready for a transparent gas comparison?",
        f"Ihre Frage ist noch offen?": f"Still have a question?",
        
        # Internet section paragraphs
        f"Die richtige Internetwahl beginnt mit einer Adressprüfung": f"The right internet choice starts with an address check",
        f"DSL, Kabel, Glasfaser oder Mobilfunklösung": f"DSL, cable, fiber or mobile solution",
        f"Internet für Zuhause und Unternehmen in {town_de}": f"Internet for home and business in {town_en}",
        f"Internet für Zuhause und Unternehmen in Aachen": f"Internet for home and business in Aachen",
        f"Persönliche Internetberatung für {town_de}": f"Personal internet advice for {town_en}",
        f"Internetberatung für {town_de} – telefonisch oder in Aachen": f"Internet advice for {town_en} – by phone or in Aachen",
        f"Jetzt Internetverfügbarkeit in {town_de} prüfen lassen": f"Check internet availability in {town_en} now",
        f"Internetverfügbarkeit in {town_de} prüfen lassen": f"Check internet availability in {town_en} now",
        f"Die Hausnummer entscheidet über die verfügbaren Anschlüsse": f"The house number determines the available connections",
        f"Für Privatkunden": f"For private customers",
        f"Für Gewerbe und Industrie": f"For business and industry",
        
        # Contact info
        f"Gasnetz, Anschluss und technische Netzinfrastruktur": f"Gas network, connection and technical network infrastructure",
        f"Postleitzahl und Anschrift in Aachen.": f"Zip code and address in Aachen.",
        f"Aktueller Anbieter, Tarif, Laufzeit und Kündigungsfrist.": f"Current provider, tariff, term and cancellation period.",
        f"Zählerdaten:": f"Meter data:",
        
        f"Lassen Sie Ihren aktuellen Internetvertrag unverbindlich prüfen.": f"Have your current internet contract checked without obligation.",
    }
    
    result = translations.get(text)
    if result:
        return result
    return None


# Town mapping
towns = [
    ('Aachen', 'Aachen'),
    ('Stolberg', 'Stolberg'),
    ('Eschweiler', 'Eschweiler'),
    ('Herzogenrath', 'Herzogenrath'),
    ('Würselen', 'Würselen'),
]

prefixes = ['Stromanbieter', 'Gasanbieter', 'Internetanbieter']

for prefix in prefixes:
    for town_de, town_en in towns:
        fname = f"{prefix}{'Wuerselen' if town_de == 'Würselen' else town_de}"
        fpath = f"src/pages/{fname}.tsx"
        if os.path.exists(fpath):
            result = process_file(fpath, town_de, town_en)
            print(f"{'✅' if result else '⏭️'} {fpath}")
        else:
            print(f"❌ {fpath} not found")

print("\nDone with prop and heading translations.")
