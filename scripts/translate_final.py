#!/usr/bin/env python3
"""
Final approach: Read each file, find all German text that is NOT wrapped
in an i18n conditional, and replace it by wrapping the entire <p>/<h*>
block content in a conditional.

The key insight: instead of trying to match individual strings,
we identify BLOCKS of JSX content that contain German and wrap
the entire block.
"""
import os, re, glob, json

# Load remaining strings for reference
with open('scripts/remaining_german.json') as f:
    remaining_set = set(json.load(f))

# Master translation dictionary - strings that appear as-is
T = {}
with open('scripts/remaining_german.json') as f:
    remaining = json.load(f)

# Now let me build translations for EVERY remaining string
# I'll do this programmatically using the patterns I see
for s in remaining:
    # Skip if already have it
    if s in T:
        continue
    # Provide translation based on content analysis
    # (This is the manual but necessary part)

def has_german(text):
    """Check if text contains German content."""
    if not text or len(text.strip()) < 3:
        return False
    t = text.strip()
    # Check for German-specific characters
    if re.search(r'[äöüßÄÖÜ]', t):
        return True
    # Check for common German words (that are NOT English)
    if re.search(r'\b(und|oder|für|bei|mit|von|den|der|das|aus|ist|wir|Sie|Ihr|nicht|sich|dem|ein|einen|eine|einem|einer|auch|sind|hat|kann|als|auf|über|ab|im|am|nach|vor|noch|nur|zum|zur|wenn|wie|Ihre|Ihren|Ihrem|Ihrer|Energie|Alemi|Verbrauch|Vertrag|Tarif|Beratung|Kosten|Preis|Anbieter|Strom|Gas|Internet|Kündigung|Laufzeit|Wechsel)\b', t):
        return True
    return False


# Now let me just directly output a list of all remaining issues with their line content
# so I can manually create translations for them

for f in sorted(glob.glob("src/pages/*anbieter*.tsx")):
    with open(f) as fh:
        lines = fh.readlines()
    
    issues = []
    for i, line in enumerate(lines, 1):
        s = line.strip()
        if not s or len(s) < 5:
            continue
        
        # Check object literal values
        for m in re.finditer(r'(title|description|question|answer|subtitle|desc): "([^"]+)"', line):
            text = m.group(2)
            if has_german(text) and 'i18n' not in line:
                issues.append((i, 'OBJ', m.group(1), text))
        
        # Check prop values
        for m in re.finditer(r'(title|description|subtitle|badgeText|buttonText)="([^"]+)"', line):
            text = m.group(2)
            if has_german(text) and 'i18n' not in text:
                issues.append((i, 'PROP', m.group(1), text))
        
        # Check bare text nodes
        if 'i18n' not in line and not s.startswith('<') and not s.startswith('{') and not s.startswith('//') and not s.startswith('import') and not s.startswith('const') and not s.startswith('export') and not s.startswith('return') and not s.startswith('}') and not s.startswith(')') and not s.startswith('];') and not s.startswith('onClick'):
            if '<Link' not in line and '<span' not in line and 'className' not in line:
                if has_german(s):
                    issues.append((i, 'TEXT', '', s))
    
    if issues:
        # Output as JSON for the next step
        for linenum, kind, prop, text in issues:
            # Truncate to 200 chars
            t = text[:200]
            print(json.dumps({"file": os.path.basename(f), "line": linenum, "kind": kind, "prop": prop, "text": t}, ensure_ascii=False))

