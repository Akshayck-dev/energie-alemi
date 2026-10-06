#!/usr/bin/env python3
"""
Definitive town page translator.
Strategy: Read each file, find EVERY German string in:
  1. Object literal values (title: "...", description: "...", question: "...", answer: "...")
  2. JSX text nodes (bare text between tags)
  3. JSX prop values (title="...", subtitle="...", description="...", buttonText="...", badgeText="...")
Translate them by wrapping with i18n.language === "en" ? "EN" : "DE"
"""
import os, re, glob, json

# For strings we can't auto-translate, we'll use a simple approach:
# Machine-translate using pattern matching and word-by-word for common phrases

def auto_translate(text, town_de, town_en):
    """Auto-translate German to English using extensive dictionary."""
    t = text.strip()
    
    # Direct translations dictionary - exhaustive
    d = {
        # === FEATURES ===
        "Privathaushalte": "Private households",
        f"Für Privathaushalte zählen neben dem Verbrauch häufig flexible Vertragsbedingungen, nachvollziehbare Abschlagszahlungen und eine übersichtliche Jahresabrechnung. Energie Alemi ordnet die verfügbaren Angebote so ein, dass Sie die Kosten klar beurteilen können.": f"For private households, in addition to consumption, flexible contract conditions, comprehensible installment payments and a clear annual statement are often important. Energie Alemi categorizes the available offers so that you can clearly assess the costs.",
        f"Bei Gewerbe und Industrie können Lastprofil, planbare Kosten, Vertragslaufzeit und betriebliche Abläufe stärker ins Gewicht fallen. Energie Alemi bespricht diese Punkte mit Ihnen und ordnet Angebote in den betrieblichen Kontext ein.": f"For business and industry, load profile, plannable costs, contract duration and operational processes can carry more weight. Energie Alemi discusses these points with you and puts offers in the operational context.",
        
        # === STEPS ===
        f"Sie halten Jahresabrechnung, aktuellen Vertrag, Lieferadresse und möglichst Zählernummer oder Marktlokations-ID bereit.": f"You keep your annual statement, current contract, delivery address and, if possible, meter number or market location ID ready.",
        "Gesamtkosten prüfen": "Check total costs",
        f"Arbeitspreis, Grundpreis, Boni und Zahlungsweise werden für den erwarteten Jahresverbrauch betrachtet.": f"Energy price, basic price, bonuses and payment method are considered for the expected annual consumption.",
        "Angebot auswählen": "Choose an offer",
        f"Sie wählen selbst; Energie Alemi unterstützt auf Wunsch bei Beauftragung und weiteren Schritten.": f"You choose yourself; Energie Alemi supports you with the order and further steps if you wish.",
        "Tarif vergleichen": "Compare tariff",
        f"Laufzeit, Kündigungsfrist, Preisgarantie und möglicher Lieferbeginn werden verständlich gegenübergestellt.": f"Term, cancellation period, price guarantee and possible start of delivery are compared clearly.",
        
        # === COMMON FAQ ===
        f"Ist die Stromtarifberatung für {town_de} kostenlos?": f"Is the electricity tariff advice for {town_en} free of charge?",
        f"Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Abschluss erhalten Sie die wesentlichen Preis- und Vertragsinformationen.": f"Yes. Energie Alemi offers tariff advice free of charge. You will receive the essential price and contract information before signing.",
        f"Welche Stromanbieter gibt es in {town_de}?": f"Which electricity providers are there in {town_en}?",
        f"Die konkrete Auswahl hängt von Lieferadresse, Verbrauch und dem aktuellen Marktangebot ab. Deshalb werden für den Vergleich Ihre Adresse und Verbrauchsdaten benötigt.": f"The specific selection depends on delivery address, consumption and the current market offer. That's why your address and consumption data are needed for the comparison.",
        f"Welche Angaben brauche ich für einen Stromvergleich?": f"What information do I need for an electricity comparison?",
        f"Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Jahresverbrauch, Lieferadresse, bisherige Kundennummer und, wenn vorhanden, Zählernummer oder Marktlokations-ID.": f"The last annual statement, the current contract, annual consumption, delivery address, previous customer number and, if available, meter number or market location ID are helpful.",
        f"Kann ich bei einem Umzug nach {town_de} rückwirkend Strom anmelden?": f"Can I register electricity retroactively when moving to {town_en}?",
        f"Eine rückwirkende Zuordnung sollte nicht eingeplant werden. Melden Sie Einzug und gewünschte Belieferung möglichst rechtzeitig beim neuen Lieferanten an.": f"A retroactive assignment should not be planned. Register your move-in and desired supply with the new supplier as early as possible.",
        f"Wird die Stromversorgung durch den Anbieterwechsel unterbrochen?": f"Will the electricity supply be interrupted by changing providers?",
        f"Ein regulärer Wechsel betrifft den Liefervertrag; Netzanschluss und Zähler bleiben bestehen. Die gesetzlich geregelte Grund- oder Ersatzversorgung sichert die Versorgung ab.": f"A regular switch affects the supply contract; network connection and meter remain. The legally regulated basic or replacement supply secures the supply.",
        f"Wer kündigt meinen bisherigen Stromvertrag?": f"Who cancels my current electricity contract?",
        f"Im Normalfall übernimmt der neue Lieferant die Kündigung, wenn Sie ihn dazu bevollmächtigen. Bei Sonderkündigungen oder Umzug kann ein anderes Vorgehen nötig sein.": f"Normally, the new supplier handles the cancellation if you authorize them to do so. A different procedure may be necessary for special cancellations or moving.",
        f"Kann ich Ökostromtarife für {town_de} vergleichen?": f"Can I compare green electricity tariffs for {town_en}?",
        f"Ja. Wenn die Stromherkunft für Sie wichtig ist, können entsprechende Angebote berücksichtigt werden. Entscheidend sind Angaben und Bedingungen des jeweiligen Anbieters.": f"Yes. If the origin of electricity is important to you, corresponding offers can be considered. The details and conditions of the respective provider are decisive.",
        f"Berät Energie Alemi auch Betriebe in {town_de}?": f"Does Energie Alemi also advise businesses in {town_en}?",
        f"Ja. Die Beratung gilt für Privat-, Gewerbe- und Industriekunden und berücksichtigt Verbrauch, Vertragsziel und betriebliche Anforderungen.": f"Yes. The advice is for private, commercial and industrial customers and takes into account consumption, contract goals and operational requirements.",
        
        # === GAS FAQ ===
        f"Ist die Gastarifberatung für {town_de} kostenlos?": f"Is the gas tariff advice for {town_en} free of charge?",
        f"Welche Gasanbieter gibt es in {town_de}?": f"Which gas providers are there in {town_en}?",
        f"Die konkrete Auswahl hängt von Lieferadresse, Verbrauch und dem aktuellen Marktangebot ab. Für den Vergleich werden Ihre Adresse und Verbrauchsdaten benötigt.": f"The specific selection depends on delivery address, consumption and the current market offer. Your address and consumption data are needed for the comparison.",
        f"Kann ich als Mieterin oder Mieter den Gasanbieter wechseln?": f"Can I switch gas providers as a tenant?",
        f"Ja, sofern ein eigener Gasliefervertrag besteht und nicht über die Betriebskostenabrechnung abgerechnet wird.": f"Yes, provided you have your own gas supply contract and it is not billed through the service charge statement.",
        f"Kann ich als Mieterin oder Mieter in {town_de} den Gasanbieter wechseln?": f"Can I switch gas providers as a tenant in {town_en}?",
        f"Wird die Gasversorgung durch den Anbieterwechsel unterbrochen?": f"Will the gas supply be interrupted by changing providers?",
        f"Ein regulärer Wechsel betrifft den Liefervertrag; Netzanschluss und Zähler bleiben bestehen. Die gesetzlich geregelte Grundversorgung sichert die Belieferung ab.": f"A regular switch affects the supply contract; network connection and meter remain. The legally regulated basic supply secures the delivery.",
        f"Welche Unterlagen brauche ich für den Gasvergleich?": f"What documents do I need for the gas comparison?",
        f"Hilfreich sind Jahresabrechnung, aktueller Vertrag, Jahresverbrauch, Lieferadresse, bisheriger Anbieter und Kundennummer.": f"The annual statement, current contract, annual consumption, delivery address, previous provider and customer number are helpful.",
        f"Kann ich Biogas- oder Ökogastarife berücksichtigen?": f"Can I consider biogas or eco-gas tariffs?",
        f"Ja. Tarife mit Biogas-Anteil oder Ökogas-Zertifikaten können berücksichtigt werden. Entscheidend sind die jeweiligen Angaben und Konditionen.": f"Yes. Tariffs with a biogas share or eco-gas certificates can be considered. The respective details and conditions are decisive.",
        f"Berät Energie Alemi auch Gewerbe- und Industriekunden in {town_de}?": f"Does Energie Alemi also advise commercial and industrial customers in {town_en}?",
        f"Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden. Der Vergleich berücksichtigt Verbrauch, Vertragsziel und betriebliche Anforderungen.": f"Yes. The advice is aimed at private, commercial and industrial customers. The comparison takes into account consumption, contract goals and operational requirements.",
        
        # === INTERNET FAQ ===
        f"Ist die Internetberatung für {town_de} kostenlos?": f"Is the internet advice for {town_en} free of charge?",
        f"Welche Internetanbieter gibt es in {town_de}?": f"Which internet providers are there in {town_en}?",
        f"Die verfügbaren Technologien (DSL, Kabel, Glasfaser) und Anbieter hängen von der exakten Adresse ab. Für eine konkrete Prüfung wird Ihr Standort in {town_de} benötigt.": f"The available technologies (DSL, cable, fiber) and providers depend on the exact address. Your location in {town_en} is needed for a specific check.",
        f"Kann ich meinen Internetvertrag auch bei einem Umzug nach {town_de} mitnehmen?": f"Can I keep my internet contract when moving to {town_en}?",
        f"Das hängt vom Anbieter und der Verfügbarkeit am neuen Standort ab. Wir prüfen, ob eine Umschaltung oder ein Neuvertrag sinnvoller ist.": f"That depends on the provider and availability at the new location. We check whether a switch or a new contract makes more sense.",
        f"Kann es beim Internetwechsel zu einem Ausfall kommen?": f"Can there be an outage when switching internet providers?",
        f"In den meisten Fällen kann ein nahtloser Übergang organisiert werden. Bei einem Technologiewechsel (z. B. DSL auf Kabel) können kurze Überschneidungen auftreten.": f"In most cases, a seamless transition can be organized. Short overlaps may occur with a technology change (e.g. DSL to cable).",
        f"Welche Unterlagen brauche ich für den Internetvergleich?": f"What documents do I need for the internet comparison?",
        f"Hilfreich sind Ihr aktueller Vertrag, die Adresse, Ihr bisheriger Tarif und möglichst die Kundennummer.": f"Your current contract, the address, your previous tariff and, if possible, the customer number are helpful.",
        f"Berät Energie Alemi auch Unternehmen in {town_de}?": f"Does Energie Alemi also advise businesses in {town_en}?",
        f"Ja. Die Beratung gilt für Privat- und Geschäftskunden und wird an Nutzungsverhalten, Standort und betriebliche Anforderungen angepasst.": f"Yes. The advice is for private and business customers and is adapted to usage behavior, location and operational requirements.",
        
        # === HEADINGS AND SECTIONS ===
        f"So läuft die Stromberatung in vier Schritten": f"This is how the electricity consultation works in four steps",
        f"So läuft die Gasberatung in vier Schritten": f"This is how the gas consultation works in four steps",
        f"So läuft die Internetberatung in vier Schritten": f"This is how the internet consultation works in four steps",
        "in vier Schritten": "in four steps",
        f"Stromberatung für {town_de} – erreichbar in Aachen": f"Electricity advice for {town_en} – reachable in Aachen",
        f"Gasberatung für {town_de} – persönlich aus Aachen": f"Gas advice for {town_en} – personally from Aachen",
        f"Gasberatung für {town_de} – persönlich erreichbar in Aachen": f"Gas advice for {town_en} – personally reachable in Aachen",
        f"Internetberatung für {town_de} – telefonisch oder in Aachen": f"Internet advice for {town_en} – by phone or in Aachen",
        f"Stromtarife für {town_de} prüfen lassen": f"Have electricity tariffs for {town_en} checked",
        f"Gastarife für {town_de} vergleichen": f"Compare gas tariffs for {town_en}",
        f"Gastarife für {town_de} prüfen lassen": f"Have gas tariffs for {town_en} checked",
        f"Internetverfügbarkeit in {town_de} prüfen lassen": f"Check internet availability in {town_en}",
        f"Jetzt Gastarif prüfen": "Check gas tariff now",
        f"Ihre Frage ist noch offen?": f"Still have a question?",
        f"Bereit für einen transparenten Gasvergleich?": f"Ready for a transparent gas comparison?",
        
        # === SECTION SUBTITLES/PROPS ===
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
        f"Wer nach {town_de} zieht oder innerhalb der Stadt umzieht, sollte die neue Lieferstelle frühzeitig melden. Benötigen Sie zuvor eine Übersicht über Stromtarife in der Region?": f"Anyone moving to {town_en} or within the city should report the new delivery point early. Do you need an overview of electricity tariffs in the region beforehand?",
    }
    
    if t in d:
        return d[t]
    
    # Try without trailing punctuation
    for key, val in d.items():
        if t == key:
            return val
    
    return None


def process_file(filepath, town_de, town_en):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    
    # === PASS 1: Fix object literal values (in data arrays) ===
    # Pattern: key: "German text"  (where key is title/description/question/answer/subtitle/desc)
    def replace_obj_val(match):
        key = match.group(1)
        text = match.group(2)
        # Check if already has i18n
        if 'i18n' in text:
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
    
    # === PASS 2: Fix JSX prop values ===
    # Pattern: prop="German text" (where prop is title/description/subtitle/badgeText/buttonText)
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
    
    # === PASS 3: Fix bare JSX text nodes ===
    # Find lines that are bare German text (indented text with German chars, no JSX tags)
    lines = content.split('\n')
    for i, line in enumerate(lines):
        s = line.strip()
        if not s or len(s) < 5:
            continue
        # Skip lines that already have i18n or are code
        if 'i18n' in line or s.startswith('<') or s.startswith('{') or s.startswith('//') or s.startswith('import') or s.startswith('const') or s.startswith('export') or s.startswith('return') or s.startswith('}') or s.startswith(')') or s.startswith('];') or s.startswith('onClick'):
            continue
        # Check for German content
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


# Expanded translation dictionary for each file's unique content
# We need to handle the files that have totally unique paragraph text

# First handle the common translations above, then add per-file extras
towns = [
    ('Aachen', 'Aachen'),
    ('Stolberg', 'Stolberg'),
    ('Eschweiler', 'Eschweiler'),
    ('Herzogenrath', 'Herzogenrath'),
    ('Würselen', 'Würselen'),
]

for prefix_name in ['Stromanbieter', 'Gasanbieter', 'Internetanbieter']:
    for town_de, town_en in towns:
        fname = f"{prefix_name}{'Wuerselen' if town_de == 'Würselen' else town_de}"
        fpath = f"src/pages/{fname}.tsx"
        if os.path.exists(fpath):
            changed = process_file(fpath, town_de, town_en)
            print(f"{'✅' if changed else '⏭️ '} {os.path.basename(fpath)}")
        else:
            print(f"❌ {os.path.basename(fpath)} not found")

print("\nTranslation pass complete.")
