import os
import re

# Fix Electricity.tsx
f = 'src/pages/Electricity.tsx'
with open(f, 'r') as file: content = file.read()
content = content.replace("'switching electricity providers' : 'Stromanbieter wechseln'", "'switching electricity providers' : 'Stromanbieter wechseln'")
with open(f, 'w') as file: file.write(content)

# Fix Gas.tsx
f = 'src/pages/Gas.tsx'
with open(f, 'r') as file: content = file.read()
content = content.replace("'Gas Comparison Guide'", "'gas comparison guide'")
content = content.replace("'Switching Gas Providers'", "'switching gas providers'")
with open(f, 'w') as file: file.write(content)

# Fix Contact.tsx
f = 'src/pages/Contact.tsx'
with open(f, 'r') as file: content = file.read()
content = content.replace("Leave this field blank", "Leave this field blank")
content = content.replace('label="Dieses Feld leer lassen"', 'label={i18n.language === "en" ? "Leave this field blank" : "Dieses Feld leer lassen"}')
with open(f, 'w') as file: file.write(content)

# Fix Gasvergleich.tsx
f = 'src/pages/Ratgeber/articles/Gasvergleich.tsx'
with open(f, 'r') as file: content = file.read()
content = content.replace("Zip code (PLZ):", "Zip code:")
with open(f, 'w') as file: file.write(content)

# Fix SEO.tsx
f = 'src/components/SEO.tsx'
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
    '/internetanbieter-wuerselen': 'Compare Internet Tariffs in Würselen | Energie Alemi'
  };"""
    content = re.sub(r'const enTitles: Record<string, string> = \{[^\}]+\};', en_titles, content)
    with open(f, 'w') as file: file.write(content)

print("Misc fixes applied.")
