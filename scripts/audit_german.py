#!/usr/bin/env python3
"""Audit all 15 town page files for remaining bare German text."""
import os, re, glob

german_pattern = re.compile(r'[äöüßÄÖÜ]')
german_words = re.compile(r'\b(und|oder|für|bei|mit|von|den|der|die|das|aus|ist|wir|Sie|Ihr|nicht|sich|dem|ein|einen|eine|einem|einer|auch|sind|hat|kann|als|auf|über|an|ab|im|am|nach|vor|noch|nur|zum|zur|ob|wenn|wie|zu)\b')

skip_prefixes = ('import ', 'const ', 'export ', '//', '{/*', '* ', '/*', 'return', '}', '{', '(', ')', '];', '});', '</', '<Suspense', '<CompareModal', '<SEO', '<ServiceHero', '<SectionHeader', '<ServiceFeatures', '<Timeline', '<FAQ', '<Button', '<Link', '<div', '<section', '<p ', '<h', '<a ', '<span', '<Phone', '<MapPin', '<ArrowRight', '<CheckSquare', '<Search', '<BarChart', '<Handshake', '<ShieldCheck', '<Building', '<HomeIcon', '<Zap', '<Wifi', '<Flame')

total_issues = 0

for f in sorted(glob.glob("src/pages/*anbieter*.tsx")):
    issues = []
    with open(f) as fh:
        lines = fh.readlines()
    for i, line in enumerate(lines, 1):
        s = line.strip()
        if not s or any(s.startswith(p) for p in skip_prefixes):
            continue
        
        # Check JSX props with German values
        props = re.findall(r'(?:title|description|subtitle|badgeText|buttonText)="([^"]+)"', line)
        for p in props:
            if german_pattern.search(p) and 'i18n' not in line:
                issues.append((i, 'PROP', p[:80]))
        
        # Check for bare German text (not inside {})
        # Remove all {...} blocks from the line
        cleaned = re.sub(r'\{[^}]*\}', '', line)
        # Remove JSX tags
        cleaned = re.sub(r'<[^>]+>', '', cleaned)
        cleaned = cleaned.strip()
        if cleaned and len(cleaned) > 5:
            if german_pattern.search(cleaned) and 'i18n' not in cleaned:
                issues.append((i, 'TEXT', cleaned[:120]))
            elif len(cleaned) > 15 and german_words.search(cleaned) and 'i18n' not in cleaned:
                # Double check it's actual German, not English
                if not re.search(r'\b(the|and|or|for|with|from|is|are|was|were|not|you|your|this|that|can|will|all|our|we)\b', cleaned, re.IGNORECASE):
                    issues.append((i, 'TEXT', cleaned[:120]))
    
    if issues:
        print(f"\n{'='*60}")
        print(f"FILE: {os.path.basename(f)} ({len(issues)} issues)")
        print(f"{'='*60}")
        for linenum, kind, text in issues:
            print(f"  L{linenum:3d} [{kind}] {text}")
        total_issues += len(issues)

print(f"\n\nTOTAL ISSUES: {total_issues}")
