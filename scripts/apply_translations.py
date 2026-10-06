#!/usr/bin/env python3
"""Apply ALL translations from translations.json to the 15 town page files."""
import os, re, glob, json

with open('scripts/translations.json') as f:
    T = json.load(f)
T = {k: v for k, v in T.items() if v}

def has_german(text):
    if not text or len(text.strip()) < 3: return False
    t = text.strip()
    if re.search(r'[äöüßÄÖÜ]', t): return True
    if re.search(r'\b(und|oder|für|bei|mit|von|den|der|das|aus|ist|wir|Sie|Ihr|nicht|sich|dem|Energie|Alemi|Verbrauch|Vertrag|Tarif|Beratung|Kosten|Preis|Anbieter|Strom|Gas|Internet|Kündigung|Laufzeit|Wechsel|Angebot|Rechnung|Gewerbe|Industrie)\b', t): return True
    return False

total_fixed = 0
counter = [0]

def replace_obj(match):
    full = match.group(0)
    key = match.group(1)
    val = match.group(2)
    if 'i18n' in full: return full
    if not has_german(val): return full
    en = T.get(val)
    if en:
        counter[0] += 1
        en_safe = en.replace('"', '\\"')
        val_safe = val.replace('"', '\\"')
        return f'{key}: i18n.language === "en" ? "{en_safe}" : "{val_safe}"'
    return full

def replace_prop(match):
    full = match.group(0)
    prop = match.group(1)
    val = match.group(2)
    if 'i18n' in val: return full
    if not has_german(val): return full
    en = T.get(val)
    if en:
        counter[0] += 1
        return f'{prop}={{i18n.language === "en" ? "{en}" : "{val}"}}'
    return full

for filepath in sorted(glob.glob("src/pages/*anbieter*.tsx")):
    with open(filepath) as f:
        content = f.read()
    original = content
    counter[0] = 0
    
    content = re.sub(r'(title|description|question|answer|subtitle|desc): "((?:[^"\\]|\\.)*)"', replace_obj, content)
    content = re.sub(r'(title|description|subtitle|badgeText|buttonText)="((?:[^"\\]|\\.)*)"', replace_prop, content)
    
    lines = content.split('\n')
    for i, line in enumerate(lines):
        s = line.strip()
        if not s or len(s) < 3: continue
        if 'i18n' in line: continue
        if s.startswith(('<','{','//','import','const','export','return','}',')',']*','onClick','setIs')): continue
        if '<Link' in line or '<span' in line or 'className' in line: continue
        if has_german(s):
            en = T.get(s)
            if en:
                indent = re.match(r'^(\s*)', line).group(1)
                lines[i] = f'{indent}{{i18n.language === "en" ? "{en}" : "{s}"}}'
                counter[0] += 1
    content = '\n'.join(lines)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        total_fixed += counter[0]
        print(f"✅ {os.path.basename(filepath)}: {counter[0]} fixes")
    else:
        print(f"⏭️  {os.path.basename(filepath)}: no changes")

print(f"\nTotal fixes applied: {total_fixed}")
