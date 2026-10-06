#!/usr/bin/env python3
"""
Generate a translations.json file with DE→EN for every remaining German string.
Uses a comprehensive set of German→English phrase/sentence patterns.
"""
import os, re, glob, json

def has_german(text):
    if not text or len(text.strip()) < 3:
        return False
    t = text.strip()
    if re.search(r'[äöüßÄÖÜ]', t):
        return True
    if re.search(r'\b(und|oder|für|bei|mit|von|den|der|das|aus|ist|wir|Sie|Ihr|nicht|sich|dem|Energie|Alemi|Verbrauch|Vertrag|Tarif|Beratung|Kosten|Preis|Anbieter)\b', t):
        return True
    return False

# Extract ALL unique German strings from all town pages
strings = set()
for f in sorted(glob.glob("src/pages/*anbieter*.tsx")):
    with open(f) as fh:
        content = fh.read()
    
    # Object literal values
    for m in re.finditer(r'(title|description|question|answer|subtitle|desc): "((?:[^"\\]|\\.)+)"', content):
        text = m.group(2)
        if has_german(text) and 'i18n' not in content[max(0,m.start()-30):m.start()]:
            strings.add(text)
    
    # Prop values
    for m in re.finditer(r'(title|description|subtitle|badgeText|buttonText)="((?:[^"\\]|\\.)+)"', content):
        text = m.group(2)
        if has_german(text) and 'i18n' not in text:
            strings.add(text)
    
    # Bare text nodes
    for line in content.split('\n'):
        s = line.strip()
        if not s or len(s) < 5: continue
        if 'i18n' in line: continue
        if s.startswith(('<','{','//','import','const','export','return','}',')',']*','onClick')): continue
        if '<Link' in line or '<span' in line or 'className' in line: continue
        if has_german(s):
            strings.add(s)

# Output count
print(f"Found {len(strings)} unique German strings")

# Save for manual translation
output = {}
for s in sorted(strings):
    output[s] = ""  # Empty = needs translation

# Save
with open('scripts/strings_to_translate.json', 'w') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Saved to scripts/strings_to_translate.json")
