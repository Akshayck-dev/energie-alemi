#!/usr/bin/env python3
"""
Final comprehensive translator.
Strategy: Instead of a dictionary, use a word-by-word + phrase translation approach.
For each German string found, generate an English translation using extensive phrase mappings.
"""
import os, re, glob

# German->English word/phrase dictionary for translation
PHRASE_MAP = [
    # Must be ordered from longest to shortest to prevent partial matches
    ("Energie Alemi", "Energie Alemi"),
    ("Alexianergraben 9 in 52064 Aachen", "Alexianergraben 9 in 52064 Aachen"),
    ("Alexianergraben 9, 52064 Aachen", "Alexianergraben 9, 52064 Aachen"),
    ("Marktlokations-ID", "market location ID"),
    ("Kilowattstunden", "kilowatt hours"),
    ("Jahresabrechnung", "annual statement"),
    ("Jahresverbrauch", "annual consumption"),
    ("Grundversorgung", "basic supply"),
    ("Ersatzversorgung", "replacement supply"),
    ("Preisgarantie", "price guarantee"),
    ("Kündigungsfrist", "cancellation period"),
    ("Vertragslaufzeit", "contract duration"),
    ("Mindestlaufzeit", "minimum term"),
    ("Bonusbedingungen", "bonus conditions"),
    ("Grundpreis", "basic price"),
    ("Arbeitspreis", "energy price"),
    ("Anbieterwechsel", "provider switch"),
    ("Lieferadresse", "delivery address"),
    ("Liefervertrag", "supply contract"),
    ("Netzanschluss", "network connection"),
    ("Netzbetreiber", "network operator"),
    ("Privathaushalte", "private households"),
    ("Industriekunden", "industrial customers"),
    ("Gewerbekunden", "business customers"),
    ("Ökostromtarife", "green electricity tariffs"),
    ("Ökostrom", "green electricity"),
    ("Stromherkunft", "origin of electricity"),
    ("Zählerstand", "meter reading"),
    ("Zählernummer", "meter number"),
    ("Zählerdaten", "meter data"),
    ("Gasliefervertrag", "gas supply contract"),
    ("Gasrechnung", "gas bill"),
    ("Gastarif", "gas tariff"),
    ("Gastarife", "gas tariffs"),
    ("Gasanbieter", "gas provider"),
    ("Gasvergleich", "gas comparison"),
    ("Gasnetz", "gas network"),
    ("Gaspreise", "gas prices"),
    ("Stromvertrag", "electricity contract"),
    ("Stromvergleich", "electricity comparison"),
    ("Stromanbieter", "electricity provider"),
    ("Stromtarife", "electricity tariffs"),
    ("Stromtarif", "electricity tariff"),
    ("Internettarif", "internet tariff"),
    ("Internettarife", "internet tariffs"),
    ("Internetanbieter", "internet provider"),
    ("Internetvertrag", "internet contract"),
    ("Internetanschluss", "internet connection"),
    ("Internetberatung", "internet consultation"),
    ("Internetwechsel", "internet switch"),
    ("Tarifberatung", "tariff advice"),
    ("Tarifvergleich", "tariff comparison"),
    ("Stromberatung", "electricity consultation"),
    ("Gasberatung", "gas consultation"),
    ("Zahlungsweise", "payment method"),
    ("Sonderkündigungen", "special cancellations"),
    ("Sonderkündigungsrecht", "special cancellation right"),
    ("Sonderkündigungsgrund", "special cancellation reason"),
    ("Betriebskostenabrechnung", "service charge statement"),
    ("Netzinfrastruktur", "network infrastructure"),
    ("Verfügbarkeitsprüfung", "availability check"),
    ("Geschwindigkeit", "speed"),
    ("Bandbreite", "bandwidth"),
    ("Glasfaser", "fiber"),
    ("Telefonleitung", "telephone line"),
    ("Rufnummernmitnahme", "number porting"),
    ("Bereitstellungsentgelt", "provision fee"),
    ("Bereitstellungsentgelte", "provision fees"),
    ("Verbrauchsdaten", "consumption data"),
    ("Vertragsdaten", "contract data"),
    ("Vertragsbedingungen", "contract conditions"),
    ("Vertragsdetails", "contract details"),
    ("Vertragskonditionen", "contract conditions"),
    ("Preisbestandteil", "price component"),
    ("Preisbestandteile", "price components"),
    ("Kostenlose Beratung", "Free advice"),
    ("kostenlose Beratung", "free advice"),
    ("Kostenlose", "Free"),
    ("kostenlos", "free of charge"),
    ("Gewerbe und Industrie", "business and industry"),
    ("Gewerbe- und Industriekunden", "commercial and industrial customers"),
    ("Privat-, Gewerbe- und Industriekunden", "private, commercial and industrial customers"),
    ("Postleitzahl", "zip code"),
    ("Anschrift", "address"),
    ("Kundennummer", "customer number"),
    ("Vorauszahlungen", "advance payments"),
    ("Vorkasse", "advance payment"),
    ("Abschlagszahlungen", "installment payments"),
    ("Jahreskosten", "annual costs"),
    ("Gesamtkosten", "total costs"),
    ("Monatspreis", "monthly price"),
    ("Planungssicherheit", "planning security"),
]

def translate_text(text, town_de, town_en):
    """Translate German text to English using phrase mapping."""
    result = text
    
    # Replace town name first
    if town_de != town_en:
        result = result.replace(town_de, town_en)
    
    # Apply phrase translations (longest first)
    for de, en in PHRASE_MAP:
        result = result.replace(de, en)
    
    # Common German->English word translations
    word_map = {
        'Für': 'For', 'für': 'for', 'und': 'and', 'oder': 'or',
        'mit': 'with', 'von': 'from', 'den': 'the', 'der': 'the',
        'die': 'the', 'das': 'the', 'dem': 'the', 'des': 'of the',
        'ein': 'a', 'eine': 'a', 'einen': 'a', 'einem': 'a',
        'einer': 'a', 'ist': 'is', 'sind': 'are', 'hat': 'has',
        'kann': 'can', 'wird': 'is', 'werden': 'are', 'wird': 'is',
        'nicht': 'not', 'auch': 'also', 'sich': 'itself',
        'bei': 'at', 'aus': 'from', 'auf': 'on', 'über': 'about',
        'an': 'at', 'ab': 'from', 'im': 'in the', 'am': 'at the',
        'nach': 'after', 'vor': 'before', 'noch': 'still',
        'nur': 'only', 'zum': 'to the', 'zur': 'to the',
        'ob': 'whether', 'wenn': 'when', 'wie': 'how',
        'zu': 'to', 'es': 'it', 'so': 'so', 'Sie': 'you',
        'Ihr': 'your', 'Ihre': 'your', 'Ihren': 'your',
        'Ihrem': 'your', 'Ihrer': 'your', 'wir': 'we',
        'uns': 'us', 'unser': 'our', 'unsere': 'our',
        'unseren': 'our', 'Wir': 'We', 'Jetzt': 'Now',
        'jetzt': 'now', 'hier': 'here', 'Hier': 'Here',
        'Ja': 'Yes', 'Nein': 'No', 'aber': 'but',
        'immer': 'always', 'bereits': 'already',
        'dabei': 'with it', 'daher': 'therefore',
        'dazu': 'for this', 'davon': 'of it',
        'jedoch': 'however', 'allerdings': 'however',
        'außerdem': 'furthermore', 'zusätzlich': 'additionally',
        'Zusätzlich': 'Additionally', 'besonders': 'particularly',
        'insbesondere': 'in particular', 'möglich': 'possible',
        'wichtig': 'important', 'Wichtig': 'Important',
        'verfügbar': 'available', 'verfügbaren': 'available',
        'aktuell': 'current', 'aktuellen': 'current', 'aktueller': 'current',
        'Aktueller': 'Current',
        'persönlich': 'personally', 'persönliche': 'personal',
        'Persönliche': 'Personal',
        'verständlich': 'comprehensibly', 'transparent': 'transparent',
        'regelmäßig': 'regularly', 'üblicherweise': 'usually',
        'grundsätzlich': 'generally', 'entsprechende': 'corresponding',
        'jeweiligen': 'respective', 'tatsächlich': 'actual',
        'tatsächlichen': 'actual', 'entscheidend': 'decisive',
        'Entscheidend': 'Decisive',
        'verschiedene': 'different', 'verschiedenen': 'different',
        'passende': 'suitable', 'passenden': 'suitable',
        'günstige': 'affordable', 'günstiger': 'cheaper',
        'günstig': 'affordable', 'günstigen': 'affordable',
        'konkrete': 'specific', 'konkreten': 'specific',
        'gemeinsam': 'together', 'vergleichen': 'compare',
        'Vergleichen': 'Compare', 'prüfen': 'check',
        'beraten': 'advise', 'unterstützen': 'support',
        'erklären': 'explain', 'erklärt': 'explains',
        'finden': 'find', 'wählen': 'choose',
        'wechseln': 'switch', 'kündigen': 'cancel',
        'Kündigung': 'cancellation', 'melden': 'report',
        'anmelden': 'register', 'Anmelden': 'Register',
    }
    
    # We won't do word-by-word for long paragraphs as it won't produce
    # coherent English. Instead, return None for strings we can't translate.
    return None


def auto_translate(text, town_de, town_en):
    """Full sentence translation using exhaustive dictionary."""
    t = text.strip()
    
    # Build comprehensive dictionary with town variants
    d = {}
    
    # First, add all town-specific translations
    for td, te in [('Aachen', 'Aachen'), ('Stolberg', 'Stolberg'), ('Eschweiler', 'Eschweiler'), ('Herzogenrath', 'Herzogenrath'), ('Würselen', 'Würselen')]:
        d.update({
            # FAQ questions
            f"Ist die Stromtarifberatung für {td} kostenlos?": f"Is the electricity tariff advice for {te} free of charge?",
            f"Ist die Gastarifberatung für {td} kostenlos?": f"Is the gas tariff advice for {te} free of charge?",
            f"Ist die Internetberatung für {td} kostenlos?": f"Is the internet advice for {te} free of charge?",
            f"Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Abschluss erhalten Sie die wesentlichen Preis- und Vertragsinformationen.": f"Yes. Energie Alemi offers tariff advice free of charge. You will receive the essential price and contract information before signing.",
            f"Welche Stromanbieter gibt es in {td}?": f"Which electricity providers are there in {te}?",
            f"Welche Gasanbieter gibt es in {td}?": f"Which gas providers are there in {te}?",
            f"Welche Internetanbieter gibt es in {td}?": f"Which internet providers are there in {te}?",
            f"Die konkrete Auswahl hängt von Lieferadresse, Verbrauch und dem aktuellen Marktangebot ab. Deshalb werden für den Vergleich Ihre Adresse und Verbrauchsdaten benötigt.": f"The specific selection depends on delivery address, consumption and the current market offer. That's why your address and consumption data are needed for the comparison.",
            f"Die konkrete Auswahl hängt von Lieferadresse, Verbrauch und dem aktuellen Marktangebot ab. Für den Vergleich werden Ihre Adresse und Verbrauchsdaten benötigt.": f"The specific selection depends on delivery address, consumption and the current market offer. Your address and consumption data are needed for the comparison.",
            f"Welche Angaben brauche ich für einen Stromvergleich?": f"What information do I need for an electricity comparison?",
            f"Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Jahresverbrauch, Lieferadresse, bisherige Kundennummer und, wenn vorhanden, Zählernummer oder Marktlokations-ID.": f"The last annual statement, current contract, annual consumption, delivery address, previous customer number and, if available, meter number or market location ID are helpful.",
            f"Kann ich bei einem Umzug nach {td} rückwirkend Strom anmelden?": f"Can I register electricity retroactively when moving to {te}?",
            f"Eine rückwirkende Zuordnung sollte nicht eingeplant werden. Melden Sie Einzug und gewünschte Belieferung möglichst rechtzeitig beim neuen Lieferanten an.": f"A retroactive assignment should not be planned. Register your move-in and desired supply with the new supplier as early as possible.",
            f"Wird die Stromversorgung durch den Anbieterwechsel unterbrochen?": f"Will the electricity supply be interrupted by changing providers?",
            f"Ein regulärer Wechsel betrifft den Liefervertrag; Netzanschluss und Zähler bleiben bestehen. Die gesetzlich geregelte Grund- oder Ersatzversorgung sichert die Versorgung ab.": f"A regular switch affects the supply contract; network connection and meter remain. The legally regulated basic or replacement supply secures the supply.",
            f"Wer kündigt meinen bisherigen Stromvertrag?": f"Who cancels my current electricity contract?",
            f"Im Normalfall übernimmt der neue Lieferant die Kündigung, wenn Sie ihn dazu bevollmächtigen. Bei Sonderkündigungen oder Umzug kann ein anderes Vorgehen nötig sein.": f"Normally, the new supplier handles the cancellation if you authorize them. A different procedure may be necessary for special cancellations or moving.",
            f"Kann ich Ökostromtarife für {td} vergleichen?": f"Can I compare green electricity tariffs for {te}?",
            f"Ja. Wenn die Stromherkunft für Sie wichtig ist, können entsprechende Angebote berücksichtigt werden. Entscheidend sind Angaben und Bedingungen des jeweiligen Anbieters.": f"Yes. If the origin of electricity is important to you, corresponding offers can be considered. The details and conditions of the respective provider are decisive.",
            f"Berät Energie Alemi auch Betriebe in {td}?": f"Does Energie Alemi also advise businesses in {te}?",
            f"Ja. Die Beratung gilt für Privat-, Gewerbe- und Industriekunden und berücksichtigt Verbrauch, Vertragsziel und betriebliche Anforderungen.": f"Yes. The advice is for private, commercial and industrial customers and takes into account consumption, contract goals and operational requirements.",
            f"Kann ich als Mieterin oder Mieter den Gasanbieter wechseln?": f"Can I switch gas providers as a tenant?",
            f"Kann ich als Mieterin oder Mieter in {td} den Gasanbieter wechseln?": f"Can I switch gas providers as a tenant in {te}?",
            f"Ja, sofern ein eigener Gasliefervertrag besteht und nicht über die Betriebskostenabrechnung abgerechnet wird.": f"Yes, provided you have your own gas supply contract and it is not billed through the service charge statement.",
            f"Wird die Gasversorgung durch den Anbieterwechsel unterbrochen?": f"Will the gas supply be interrupted by changing providers?",
            f"Ein regulärer Wechsel betrifft den Liefervertrag; Netzanschluss und Zähler bleiben bestehen. Die gesetzlich geregelte Grundversorgung sichert die Belieferung ab.": f"A regular switch affects the supply contract; network connection and meter remain. The legally regulated basic supply secures the delivery.",
            f"Welche Unterlagen brauche ich für den Gasvergleich?": f"What documents do I need for the gas comparison?",
            f"Hilfreich sind Jahresabrechnung, aktueller Vertrag, Jahresverbrauch, Lieferadresse, bisheriger Anbieter und Kundennummer.": f"The annual statement, current contract, annual consumption, delivery address, previous provider and customer number are helpful.",
            f"Kann ich Biogas- oder Ökogastarife berücksichtigen?": f"Can I consider biogas or eco-gas tariffs?",
            f"Ja. Tarife mit Biogas-Anteil oder Ökogas-Zertifikaten können berücksichtigt werden. Entscheidend sind die jeweiligen Angaben und Konditionen.": f"Yes. Tariffs with a biogas share or eco-gas certificates can be considered. The respective details and conditions are decisive.",
            f"Berät Energie Alemi auch Gewerbe- und Industriekunden in {td}?": f"Does Energie Alemi also advise commercial and industrial customers in {te}?",
            f"Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden. Der Vergleich berücksichtigt Verbrauch, Vertragsziel und betriebliche Anforderungen.": f"Yes. The advice is aimed at private, commercial and industrial customers. The comparison takes into account consumption, contract goals and operational requirements.",
            f"Ist die Internetberatung für {td} kostenlos?": f"Is the internet advice for {te} free of charge?",
            f"Welche Internetanbieter gibt es in {td}?": f"Which internet providers are there in {te}?",
            f"Die verfügbaren Technologien (DSL, Kabel, Glasfaser) und Anbieter hängen von der exakten Adresse ab. Für eine konkrete Prüfung wird Ihr Standort in {td} benötigt.": f"The available technologies (DSL, cable, fiber) and providers depend on the exact address. Your location in {te} is needed for a specific check.",
            f"Kann ich meinen Internetvertrag auch bei einem Umzug nach {td} mitnehmen?": f"Can I keep my internet contract when moving to {te}?",
            f"Das hängt vom Anbieter und der Verfügbarkeit am neuen Standort ab. Wir prüfen, ob eine Umschaltung oder ein Neuvertrag sinnvoller ist.": f"That depends on the provider and availability at the new location. We check whether a switch or a new contract makes more sense.",
            f"Kann es beim Internetwechsel zu einem Ausfall kommen?": f"Can there be an outage when switching internet providers?",
            f"In den meisten Fällen kann ein nahtloser Übergang organisiert werden. Bei einem Technologiewechsel (z. B. DSL auf Kabel) können kurze Überschneidungen auftreten.": f"In most cases, a seamless transition can be organized. Short overlaps may occur with a technology change (e.g. DSL to cable).",
            f"Welche Unterlagen brauche ich für den Internetvergleich?": f"What documents do I need for the internet comparison?",
            f"Hilfreich sind Ihr aktueller Vertrag, die Adresse, Ihr bisheriger Tarif und möglichst die Kundennummer.": f"Your current contract, address, previous tariff and, if possible, customer number are helpful.",
            f"Berät Energie Alemi auch Unternehmen in {td}?": f"Does Energie Alemi also advise businesses in {te}?",
            f"Ja. Die Beratung gilt für Privat- und Geschäftskunden und wird an Nutzungsverhalten, Standort und betriebliche Anforderungen angepasst.": f"Yes. The advice is for private and business customers and is adapted to usage behavior, location and operational requirements.",
            
            # Section headings
            f"So läuft die Stromberatung in vier Schritten": f"This is how the electricity consultation works in four steps",
            f"So läuft der Stromvergleich in vier Schritten": f"This is how the electricity comparison works in four steps",
            f"So läuft die Gasberatung in vier Schritten": f"This is how the gas consultation works in four steps",
            f"So läuft der Gasvergleich in vier klaren Schritten": f"This is how the gas comparison works in four clear steps",
            f"So läuft die Internetberatung in vier Schritten": f"This is how the internet consultation works in four steps",
            f"So läuft die Internet-Tarifberatung ab": f"This is how internet tariff advice works",
            f"So funktioniert die Gas-Tarifberatung": f"This is how gas tariff advice works",
            f"So funktioniert die Internet-Tarifberatung": f"This is how internet tariff advice works",
            f"Stromberatung für {td} – erreichbar in Aachen": f"Electricity advice for {te} – reachable in Aachen",
            f"Gasberatung für {td} – persönlich aus Aachen": f"Gas advice for {te} – personally from Aachen",
            f"Gasberatung für {td} – persönlich erreichbar in Aachen": f"Gas advice for {te} – personally reachable in Aachen",
            f"Internetberatung für {td} – telefonisch oder in Aachen": f"Internet advice for {te} – by phone or in Aachen",
            f"Persönliche Gasberatung für {td} – erreichbar in Aachen": f"Personal gas advice for {te} – reachable in Aachen",
            f"Persönliche Internetberatung für {td}": f"Personal internet advice for {te}",
            f"Stromtarife für {td} prüfen lassen": f"Have electricity tariffs for {te} checked",
            f"Stromtarife für {td} mit den richtigen Daten vergleichen": f"Compare electricity tariffs for {te} with the right data",
            f"Gastarife für {td} vergleichen": f"Compare gas tariffs for {te}",
            f"Gastarife für {td} prüfen lassen": f"Have gas tariffs for {te} checked",
            f"Internetverfügbarkeit in {td} prüfen lassen": f"Check internet availability in {te}",
            f"Bereit für einen transparenten Gasvergleich?": f"Ready for a transparent gas comparison?",
            f"Ihre Frage ist noch offen?": f"Still have a question?",
            f"Für wen lohnt sich ein Gasvergleich?": f"Who benefits from a gas comparison?",
            f"Wichtig für Mieterinnen und Mieter": f"Important for tenants",
            f"Was bedeutet das für Ihren Wechsel?": f"What does this mean for your switch?",
            f"Hinweis zur Grundversorgung:": f"Note on basic supply:",
            
            # Steps
            f"Gesamtkosten prüfen": f"Check total costs",
            f"Angebot auswählen": f"Choose an offer",
            f"Tarif vergleichen": f"Compare tariff",
            
            # Buttons
            f"Jetzt Gasrechnung prüfen lassen": f"Have your gas bill checked now",
            f"Letzte Gasrechnung prüfen lassen": f"Have your last gas bill checked",
            f"Jetzt Internetverfügbarkeit prüfen": f"Check internet availability now",
            f"Persönliche Beratung in Aachen anfragen": f"Request personal advice in Aachen",
            f"Vereinbaren Sie jetzt Ihre kostenlose Beratung bei Energie Alemi in Aachen.": f"Schedule your free consultation with Energie Alemi in Aachen now.",
            
            # Data labels
            f"Jahresverbrauch:": f"Annual consumption:",
            f"Jahresverbrauch: Zu finden auf der letzten Jahresabrechnung, in Kilowattstunden.": f"Annual consumption: Found on the last annual statement, in kilowatt hours.",
            f"Lieferadresse: Postleitzahl und Anschrift in Aachen.": f"Delivery address: Zip code and address in Aachen.",
            f"Postleitzahl und Anschrift in Aachen.": f"Zip code and address in Aachen.",
            f"Aktueller Anbieter, Tarif, Laufzeit und Kündigungsfrist.": f"Current provider, tariff, term and cancellation period.",
            f"Vertragsdaten: Aktueller Anbieter, Tarif, Laufzeit und Kündigungsfrist.": f"Contract data: Current provider, tariff, term and cancellation period.",
            f"Zählerdaten:": f"Meter data:",
            f"Zählerdaten: Zählernummer und später zum Wechseltermin der aktuelle Zählerstand.": f"Meter data: Meter number and later the current meter reading for the switching date.",
            f"Für Privatkunden": f"For private customers",
            f"Für Gewerbe und Industrie": f"For business and industry",
            f"Lassen Sie Ihren aktuellen Internetvertrag unverbindlich prüfen.": f"Have your current internet contract checked without obligation.",
            f"Gasnetz, Anschluss und technische Netzinfrastruktur": f"Gas network, connection and technical network infrastructure",
        })
    
    if t in d:
        return d[t]
    return None


def process_file(filepath, town_de, town_en):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    
    # PASS 1: Object literal values
    def replace_obj_val(match):
        key = match.group(1)
        text = match.group(2)
        if 'i18n' in match.group(0):
            return match.group(0)
        en = auto_translate(text, town_de, town_en)
        if en:
            return f'{key}: i18n.language === "en" ? "{en}" : "{text}"'
        return match.group(0)
    
    content = re.sub(
        r'((?:title|description|question|answer|subtitle|desc)): "([^"]+)"',
        replace_obj_val,
        content
    )
    
    # PASS 2: JSX prop values  
    def replace_prop_val(match):
        prop = match.group(1)
        text = match.group(2)
        if 'i18n' in text:
            return match.group(0)
        en = auto_translate(text, town_de, town_en)
        if en:
            return f'{prop}={{i18n.language === "en" ? "{en}" : "{text}"}}'
        return match.group(0)
    
    content = re.sub(
        r'((?:title|description|subtitle|badgeText|buttonText))="([^"]+)"',
        replace_prop_val,
        content
    )
    
    # PASS 3: Bare JSX text nodes
    lines = content.split('\n')
    for i, line in enumerate(lines):
        s = line.strip()
        if not s or len(s) < 5:
            continue
        if 'i18n' in line or s.startswith('<') or s.startswith('{') or s.startswith('//') or s.startswith('import') or s.startswith('const') or s.startswith('export') or s.startswith('return') or s.startswith('}') or s.startswith(')') or s.startswith('];') or s.startswith('onClick'):
            continue
        has_german = bool(re.search(r'[äöüßÄÖÜ]', s)) or bool(re.search(r'\b(und|oder|für|bei|mit|von|den|der|die|das|aus|ist|wir|Sie|Ihr|nicht|sich|dem|Energie|Alemi)\b', s))
        if has_german and '<Link' not in line and '<span' not in line and 'className' not in line:
            indent = re.match(r'^(\s*)', line).group(1)
            en = auto_translate(s, town_de, town_en)
            if en:
                lines[i] = f'{indent}{{i18n.language === "en" ? "{en}" : "{s}"}}'
    
    content = '\n'.join(lines)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False


towns = [
    ('Aachen', 'Aachen'),
    ('Stolberg', 'Stolberg'),
    ('Eschweiler', 'Eschweiler'),
    ('Herzogenrath', 'Herzogenrath'),
    ('Würselen', 'Würselen'),
]

for prefix in ['Stromanbieter', 'Gasanbieter', 'Internetanbieter']:
    for td, te in towns:
        fname = f"{prefix}{'Wuerselen' if td == 'Würselen' else td}"
        fpath = f"src/pages/{fname}.tsx"
        if os.path.exists(fpath):
            changed = process_file(fpath, td, te)
            print(f"{'✅' if changed else '⏭️ '} {os.path.basename(fpath)}")

print("\nDone.")
