import os
import re

# 1. Fix Misc files
f = 'src/pages/Electricity.tsx'
if os.path.exists(f):
    with open(f, 'r') as file: content = file.read()
    content = content.replace("'switching electricity providers' : 'Stromanbieter wechseln'", "'switching electricity providers' : 'Stromanbieter wechseln'")
    with open(f, 'w') as file: file.write(content)

f = 'src/pages/Gas.tsx'
if os.path.exists(f):
    with open(f, 'r') as file: content = file.read()
    content = content.replace("'Gas Comparison Guide'", "'gas comparison guide'")
    content = content.replace("'Switching Gas Providers'", "'switching gas providers'")
    with open(f, 'w') as file: file.write(content)

f = 'src/pages/Contact.tsx'
if os.path.exists(f):
    with open(f, 'r') as file: content = file.read()
    content = content.replace('label="Dieses Feld leer lassen"', 'label={i18n.language === "en" ? "Leave this field blank" : "Dieses Feld leer lassen"}')
    with open(f, 'w') as file: file.write(content)

f = 'src/pages/Ratgeber/articles/GasvergleichPassenderTarif.tsx'
if os.path.exists(f):
    with open(f, 'r') as file: content = file.read()
    content = content.replace("Zip code (PLZ):", "Zip code:")
    with open(f, 'w') as file: file.write(content)

# 2. SEO.tsx
f = 'src/components/SEO.tsx'
if os.path.exists(f):
    with open(f, 'r') as file: content = file.read()
    if "'/gas':" not in content:
        en_titles = """  const enTitles: Record<string, string> = {
    '/contact': 'Contact | Energie Alemi – Tariff Advice for Electricity, Gas & Internet Aachen',
    '/faq': 'FAQ | Energie Alemi',
    '/about': 'About Us | Energie Alemi – Tariff Advice Aachen',
    '/electricity': 'Compare Electricity Tariffs & Switch Provider | Energie Alemi',
    '/gas': 'Compare Gas Tariffs & Switch Provider | Energie Alemi',
    '/internet': 'Compare Internet Providers | DSL, Cable, Fibre | Energie Alemi',
    '/internetanbieter-aachen': 'Compare Internet Providers in Aachen | Energie Alemi',
    '/internetanbieter-wuerselen': 'Compare Internet Tariffs in Würselen | Energie Alemi',
    '/internetanbieter-stolberg': 'Compare Internet Tariffs in Stolberg | Energie Alemi',
    '/internetanbieter-eschweiler': 'Compare Internet Tariffs in Eschweiler | Energie Alemi',
    '/internetanbieter-herzogenrath': 'Compare Internet Tariffs in Herzogenrath | Energie Alemi'
  };"""
        content = re.sub(r'const enTitles: Record<string, string> = \{[^\}]+\};', en_titles, content)
        with open(f, 'w') as file: file.write(content)

print("Part 1 complete.")
