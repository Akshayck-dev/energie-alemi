#!/usr/bin/env python3
"""
v9: Read each file line by line. For every line containing German text,
extract the full line content, create an English translation, and wrap.

Key improvement: handle lines with mixed JSX (e.g., text + <Link> + text)
by extracting the whole line and providing complete EN/DE versions.
"""
import os, re, glob

def has_german(text):
    if not text or len(text.strip()) < 3:
        return False
    t = text.strip()
    if re.search(r'[äöüßÄÖÜ]', t):
        return True
    if re.search(r'\b(und|oder|für|bei|mit|von|den|der|die|das|aus|ist|wir|Sie|Ihr|nicht|sich|dem|Energie|Alemi|Verbrauch|Vertrag|Tarif|Beratung|Kosten|Preis|Anbieter|Strom|Gas|Internet|Kündigung|Laufzeit|Wechsel|Angebot|Rechnung|Vertragsbedingungen|Stadtgebiet|Gewerbe|Industrie)\b', t):
        return True
    return False

def process_file(filepath):
    """Process a single file: find all lines with bare German text in object literals."""
    with open(filepath) as f:
        content = f.read()
    
    original = content
    
    # We need to handle object literal patterns: key: "value"
    # where value is German text and NOT already wrapped
    
    # Pattern for object literal string values
    def wrap_obj(match):
        full = match.group(0)
        if 'i18n' in full:
            return full
        key = match.group(1)
        val = match.group(2)
        if not has_german(val):
            return full
        # Generate English translation
        en = translate(val)
        if en:
            return f'{key}: i18n.language === "en" ? "{en}" : "{val}"'
        return full
    
    content = re.sub(
        r'(title|description|question|answer|subtitle|desc): "((?:[^"\\]|\\.)+)"',
        wrap_obj,
        content
    )
    
    # Pattern for JSX prop values
    def wrap_prop(match):
        full = match.group(0)
        if 'i18n' in full:
            return full
        prop = match.group(1)
        val = match.group(2)
        if not has_german(val):
            return full
        en = translate(val)
        if en:
            return f'{prop}={{i18n.language === "en" ? "{en}" : "{val}"}}'
        return full
    
    content = re.sub(
        r'(title|description|subtitle|badgeText|buttonText)="((?:[^"\\]|\\.)+)"',
        wrap_prop,
        content
    )
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False


# EXHAUSTIVE translation dictionary
# I'm going to load all remaining strings from the jsonl and provide translations
TRANS = {}

def load_translations():
    """Build translation map for ALL remaining German strings."""
    import json
    with open('scripts/all_issues.jsonl') as f:
        for line in f:
            data = json.loads(line)
            text = data['text']
            if text not in TRANS:
                TRANS[text] = None  # placeholder
    
    # Now provide actual translations for every string
    # I'll do this by reading the actual files and creating translations
    
    # Instead of manual translations, use a simpler approach:
    # For each German string, create a functional English translation
    # using comprehensive text replacement
    
    for text in list(TRANS.keys()):
        en = create_translation(text)
        if en and en != text:
            TRANS[text] = en

def create_translation(text):
    """Create English translation from German text using comprehensive replacement rules."""
    t = text
    
    # Full sentence translations (exact matches)
    exact = {
        "Tarife verständlich vergleichen": "Compare tariffs comprehensibly",
        "Wir stellen Kosten und Vertragsbedingungen übersichtlich gegenüber.": "We compare costs and contract conditions clearly.",
        "Persönlich vor Ort beraten": "Personal on-site advice",
        "Passend zum Bedarf auswählen": "Select to match your needs",
        "Verbrauch, Haushaltssituation und gewünschte Flexibilität fließen in die Auswahl ein.": "Consumption, household situation and desired flexibility are taken into account.",
        "Wir unterstützen Sie von der Prüfung Ihrer Unterlagen bis zum neuen Liefervertrag.": "We support you from checking your documents to the new supply contract.",
        "Verbrauch und Vertrag erfassen": "Record consumption and contract",
        "Verfügbare Tarife vergleichen": "Compare available tariffs",
        "Tarif auswählen und Wechsel beauftragen": "Select tariff and initiate switch",
        "Sie entscheiden in Ruhe. Anschließend wird der Lieferantenwechsel mit den erforderlichen Angaben angestoßen.": "You decide at your own pace. Then the supplier switch is initiated with the required information.",
        "Bestätigung prüfen und weiter begleiten": "Check confirmation and continue support",
        "Gesamtkosten prüfen": "Check total costs",
        "Angebot auswählen": "Choose an offer",
        "Tarif vergleichen": "Compare tariff",
        "Kostenlose Beratung": "Free advice",
        "Für Privatkunden": "For private customers",
        "Für Gewerbe und Industrie": "For business and industry",
        "Jahresverbrauch:": "Annual consumption:",
        "Zählerdaten:": "Meter data:",
        "Hinweis zur Grundversorgung:": "Note on basic supply:",
        "Jetzt Gasrechnung prüfen lassen": "Have your gas bill checked now",
        "Letzte Gasrechnung prüfen lassen": "Have your last gas bill checked",
        "Jetzt Internetverfügbarkeit prüfen": "Check internet availability now",
        "Persönliche Beratung in Aachen anfragen": "Request personal advice in Aachen",
    }
    
    if t in exact:
        return exact[t]
    
    return None


def translate(text):
    """Look up translation for text."""
    if text in TRANS and TRANS[text]:
        return TRANS[text]
    # Try exact match from the comprehensive dict
    from scripts_translate_v8_dict import T as T8
    if text in T8:
        return T8[text]
    return None

# Since importing won't work, let me just inline everything
# Actually, let me take a completely different approach...
# Let me read each file and process it directly

print("Script loaded but need different approach")
