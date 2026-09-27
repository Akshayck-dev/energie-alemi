import re

def create_page(service, hr_file, wr_file, title, desc):
    with open(hr_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Generic replacements
    content = content.replace('Herzogenrath', 'Würselen')
    content = content.replace('herzogenrath', 'wuerselen')
    content = content.replace('StromanbieterHerzogenrath', 'StromanbieterWuerselen')
    content = content.replace('GasanbieterHerzogenrath', 'GasanbieterWuerselen')
    content = content.replace('InternetanbieterHerzogenrath', 'InternetanbieterWuerselen')
    content = content.replace('Herzogenrath-Mitte, Kohlscheid und Merkstein', 'Würselen-Mitte, Bardenberg und Broichweiden')
    
    # Specific SEO Replacements
    content = re.sub(r'title="[^"]+"', f'title="{title}"', content, count=1)
    content = re.sub(r'description="[^"]+"', f'description="{desc}"', content, count=1)
    
    with open(wr_file, 'w', encoding='utf-8') as f:
        f.write(content)

create_page(
    'Strom',
    'src/pages/StromanbieterHerzogenrath.tsx',
    'src/pages/StromanbieterWuerselen.tsx',
    'Stromanbieter Würselen vergleichen | Energie Alemi',
    'Stromtarife in Würselen vergleichen: Kosten, Vertragsdetails und Kündigungsfrist prüfen. Energie Alemi berät Haushalte und Unternehmen persönlich.'
)

create_page(
    'Gas',
    'src/pages/GasanbieterHerzogenrath.tsx',
    'src/pages/GasanbieterWuerselen.tsx',
    'Gasanbieter Würselen vergleichen | Energie Alemi',
    'Gastarife in Würselen vergleichen: Jahreskosten, Preisgarantie und Laufzeit auswerten. Kostenlose Tarifberatung für Privat- und Gewerbekunden.'
)

create_page(
    'Internet',
    'src/pages/InternetanbieterHerzogenrath.tsx',
    'src/pages/InternetanbieterWuerselen.tsx',
    'Internettarife Würselen vergleichen | Energie Alemi',
    'Internettarife in Würselen vergleichen: Verfügbarkeit, Geschwindigkeit, Kosten und Laufzeit prüfen – mit persönlicher Beratung von Energie Alemi.'
)
