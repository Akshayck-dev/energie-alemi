import os
import re

# Fix Contact.tsx
f = 'src/components/ContactForm.tsx'
if os.path.exists(f):
    with open(f, 'r') as file: content = file.read()
    content = content.replace('placeholder="Dieses Feld leer lassen"', 'placeholder={i18n.language === "en" ? "Leave this field blank" : "Dieses Feld leer lassen"}')
    content = content.replace('label="Dieses Feld leer lassen"', 'label={i18n.language === "en" ? "Leave this field blank" : "Dieses Feld leer lassen"}')
    content = content.replace('ourtariff', 'our tariff')
    with open(f, 'w') as file: file.write(content)

# Fix StromanbieterAachen.tsx
f = 'src/pages/StromanbieterAachen.tsx'
if os.path.exists(f):
    with open(f, 'r') as file: content = file.read()
    content = content.replace('</Link> und <Link', '</Link> {i18n.language === "en" ? "and" : "und"} <Link')
    content = content.replace('in vier Schritten</span>', '</span> {i18n.language === "en" ? "in four steps" : "in vier Schritten"}')
    content = content.replace('in vier Schritten<', ' {i18n.language === "en" ? "in four steps" : "in vier Schritten"}<')
    with open(f, 'w') as file: file.write(content)

# Fix Wuerselen districts
for prefix in ['Stromanbieter', 'Gasanbieter', 'Internetanbieter']:
    f = f'src/pages/{prefix}Wuerselen.tsx'
    if os.path.exists(f):
        with open(f, 'r') as file: content = file.read()
        content = re.sub(
            r'etwa in Kohlscheid, Merkstein[^<]+',
            r'etwa in Würselen-Mitte, Bardenberg, Broichweiden. ',
            content
        )
        with open(f, 'w') as file: file.write(content)

print("Minor fixes done")
