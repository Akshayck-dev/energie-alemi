import os

files = {
    'src/pages/GasanbieterHerzogenrath.tsx': [
        ('question: "Kann ich als Mieterin oder Mieter den Gas{i18n.language === \'en\' ? \'providers?\' : \'anbieter wechseln?\'}",',
         'question: i18n.language === "en" ? "Can I switch gas providers as a tenant?" : "Kann ich als Mieterin oder Mieter den Gasanbieter wechseln?",')
    ],
    'src/pages/GasanbieterStolberg.tsx': [
        ('question: "Kann jeder Haushalt in Stolberg den Gas{i18n.language === \'en\' ? \'providers?\' : \'anbieter wechseln?\'}",',
         'question: i18n.language === "en" ? "Can every household in Stolberg switch gas providers?" : "Kann jeder Haushalt in Stolberg den Gasanbieter wechseln?",')
    ],
    'src/pages/GasanbieterWuerselen.tsx': [
        ('question: "Kann ich als Mieterin oder Mieter den Gas{i18n.language === \'en\' ? \'providers?\' : \'anbieter wechseln?\'}",',
         'question: i18n.language === "en" ? "Can I switch gas providers as a tenant?" : "Kann ich als Mieterin oder Mieter den Gasanbieter wechseln?",')
    ],
    'src/pages/GasanbieterEschweiler.tsx': [
        ('question: "Kann ich in einer Mietwohnung den Gas{i18n.language === \'en\' ? \'providers?\' : \'anbieter wechseln?\'}",',
         'question: i18n.language === "en" ? "Can I switch gas providers in a rented apartment?" : "Kann ich in einer Mietwohnung den Gasanbieter wechseln?",')
    ],
    'src/pages/GasanbieterAachen.tsx': [
        ('description="Sie möchten Ihren Gastarif in Aachen prüfen oder den Gas{i18n.language === \'en\' ? \'providers?\' : \'anbieter wechseln?\'} Energie Alemi vergleicht verfügbare Angebote verschiedener Anbieter und erklärt Ihnen verständlich, worauf es bei Preis, Laufzeit und Vertragsbedingungen ankommt."',
         'description={i18n.language === "en" ? "Would you like to check your gas tariff in Aachen or switch gas providers? Energie Alemi compares available offers from different providers and explains understandably what is important regarding price, term and contract conditions." : "Sie möchten Ihren Gastarif in Aachen prüfen oder den Gasanbieter wechseln? Energie Alemi vergleicht verfügbare Angebote verschiedener Anbieter und erklärt Ihnen verständlich, worauf es bei Preis, Laufzeit und Vertragsbedingungen ankommt."}')
    ]
}

for f, replacements in files.items():
    if os.path.exists(f):
        with open(f, 'r') as file: content = file.read()
        for old, new in replacements:
            content = content.replace(old, new)
        with open(f, 'w') as file: file.write(content)

print("Leaks fixed.")
