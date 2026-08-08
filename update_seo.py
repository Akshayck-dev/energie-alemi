import os
import re

pages = {
    'Home': {'title': 'Startseite', 'desc': 'Willkommen bei Energie Alemi. Vergleichen Sie jetzt Strom, Gas und Internet Tarife kostenlos und sparen Sie!'},
    'Gas': {'title': 'Gasvergleich', 'desc': 'Jetzt Gasanbieter vergleichen und wechseln. Wir finden den günstigsten und besten Gastarif für Sie.'},
    'Electricity': {'title': 'Stromvergleich', 'desc': 'Jetzt Stromanbieter vergleichen und sparen. Günstige Stromtarife für Ihren Haushalt oder Ihr Unternehmen.'},
    'Internet': {'title': 'Internet & Festnetz', 'desc': 'Vergleichen Sie Internet- und DSL-Anbieter. Sichern Sie sich den schnellsten und günstigsten Tarif.'},
    'About': {'title': 'Über uns', 'desc': 'Erfahren Sie mehr über Energie Alemi. Ihr zuverlässiger und unabhängiger Berater für Energie und Telekommunikation.'},
    'Contact': {'title': 'Kontakt', 'desc': 'Haben Sie Fragen? Kontaktieren Sie Energie Alemi. Wir beraten Sie gerne zu Strom, Gas und Internet.'}
}

for page, seo in pages.items():
    file_path = f"src/pages/{page}.tsx"
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r') as f:
        content = f.read()
        
    if 'import SEO' not in content:
        # Add import
        content = re.sub(r'(import.*?;?\n)(?!import)', r'\1import SEO from "../components/SEO";\n', content, count=1, flags=re.DOTALL)
        
        # Inject SEO component
        seo_tag = f'\n      <SEO title="{seo["title"]}" description="{seo["desc"]}" />'
        
        if '<main' in content:
            content = re.sub(r'(return\s*\(\s*<main[^>]*>)', rf'\1{seo_tag}', content, count=1)
        elif '<div' in content:
            content = re.sub(r'(return\s*\(\s*<div[^>]*>)', rf'\1{seo_tag}', content, count=1)
        else:
            content = re.sub(r'(return\s*\(\s*(?:<[^>]+>)?)', rf'\1{seo_tag}', content, count=1)
            
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"Updated {page}.tsx")

