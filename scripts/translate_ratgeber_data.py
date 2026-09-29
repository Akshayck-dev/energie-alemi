import re
import os

with open('src/data/ratgeberArticles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Add new interface fields
content = content.replace(
    '  title: string;\n  description: string;',
    '  title: string;\n  titleEn?: string;\n  description: string;\n  descriptionEn?: string;'
)

translations = {
    'Stromanbieter wechseln 2026: So einfach geht der Wechsel | ALEMI': ('Switching Electricity Providers 2026: It\'s That Easy | ALEMI', 'Switching electricity providers made easy: Find out how the switch works, which deadlines apply, what you should consider and how to find a suitable electricity tariff.'),
    'Stromvergleich 2026: Tarife vergleichen': ('Electricity Comparison 2026: Compare Tariffs', 'The most important criteria when comparing electricity: Energy price, basic price, price guarantee and contract term explained simply.'),
    'Gastarife vergleichen 2026: Günstigen Gastarif finden | ALEMI': ('Compare Gas Tariffs 2026: Find a Cheap Gas Tariff | ALEMI', 'Compare gas tariffs and find the right gas tariff. Find out what you should look out for regarding gas prices, consumption, contract terms and switching providers.'),
    'Gasanbieter wechseln: Schritt für Schritt erklärt': ('Switching Gas Providers: Explained Step by Step', 'Switching gas providers is easy and safe. Find out step by step what information you need.'),
    'Internetanbieter vergleichen 2026': ('Compare Internet Providers 2026', 'DSL, cable or fiber optic? What really matters when comparing internet to find suitable and cheap tariffs.'),
    'Umzug nach Aachen: Strom, Gas und Internet richtig anmelden': ('Moving to Aachen: Registering Electricity, Gas and Internet Correctly', 'Practical guide for your move to Aachen. Learn everything about registration deadlines, special termination rights (EnWG & TKG) and how to avoid typical mistakes.'),
    'Grundversorgung Aachen: Strom & Gas': ('Basic Supply Aachen: Electricity & Gas', 'Basic supply in Aachen explained understandably: Providers, notice periods, moving and switching options for electricity and gas.'),
    'DSL vs. Glasfaser in Aachen: Lohnt sich der Wechsel?': ('DSL vs. Fiber Optics in Aachen: Is It Worth Switching?', 'Aachen is expanding its fiber optic network. We clarify the differences to DSL and show who the fast connection is really worth for.'),
    'Strom anmelden beim Umzug: Checkliste 2026 | Energie Alemi': ('Registering Electricity When Moving: Checklist 2026 | Energie Alemi', 'Registering and deregistering electricity correctly when moving: Deadlines, meter readings, MaLo ID and choice of provider explained understandably. Personal help in Aachen.'),
    'Stromverbrauch 1 Person: Richtwerte & Spartipps | Energie Alemi': ('Electricity Consumption 1 Person: Benchmarks & Saving Tips | Energie Alemi', 'How much electricity does one person consume? Benchmarks for apartments and houses, with or without electric water heating, plus simple saving tips.'),
    'Stromverbrauch 2 Personen: kWh, Kosten & Tipps | Energie Alemi': ('Electricity Consumption 2 Persons: kWh, Costs & Tips | Energie Alemi', 'Classifying electricity consumption for 2 people: Benchmarks for apartments and houses, influence of water heating and practical saving tips.'),
    'Stromverbrauch 4 Personen: Richtwerte & Kosten | Energie Alemi': ('Electricity Consumption 4 Persons: Benchmarks & Costs | Energie Alemi', 'How much electricity does a family of four need? Benchmarks by housing type and water heating type as well as tips for lower electricity costs.'),
    'Stromkosten berechnen: Formel & Beispiele 2026 | Energie Alemi': ('Calculate Electricity Costs: Formula & Examples 2026 | Energie Alemi', 'Calculate electricity costs easily: correctly apply annual consumption, energy price and basic price and realistically compare tariffs.'),
    'Gas anmelden beim Umzug: Schritt-für-Schritt | Energie Alemi': ('Registering Gas When Moving: Step-by-Step | Energie Alemi', 'Registering gas correctly when moving: check contract, secure meter reading, choose new tariff and avoid double costs.'),
    'Gasverbrauch berechnen: m³ in kWh umrechnen | Energie Alemi': ('Calculate Gas Consumption: Convert m³ to kWh | Energie Alemi', 'Calculate gas consumption correctly: read meter reading in m³, convert to kWh with calorific value and condition number and estimate costs.'),
    'Gaspreise verstehen: Arbeitspreis & Grundpreis | Energie Alemi': ('Understand Gas Prices: Energy Price & Basic Price | Energie Alemi', 'Gas prices explained understandably: correctly compare energy price, basic price, price guarantee, bonus and annual costs.'),
    'Energieberater Aachen: Hilfe beim Stromanbieterwechsel': ('Energy Consultant Aachen: Help with Switching Electricity Providers', 'Looking for an energy consultant in Aachen? We show who really helps with switching electricity providers – tariff advice, consumer advice center & what you should look out for.')
}

for title_de, (title_en, desc_en) in translations.items():
    content = content.replace(f"title: '{title_de}',", f"title: '{title_de}',\n    titleEn: '{title_en}',")
    # Finding the description line right after it. Since description text can be long, let's use regex.
    # Actually, we can just replace the description line for that specific article block.
    # It's safer to just inject descriptionEn under category.
    # We will do a generic replacement for this block.

for de_title, (en_title, en_desc) in translations.items():
    content = re.sub(
        rf"(title: '{re.escape(de_title)}',\s*titleEn: '{re.escape(en_title)}',\s*description: ')([^']+)(')",
        r"\1\2\3,\n    descriptionEn: '" + en_desc + r"'",
        content
    )

with open('src/data/ratgeberArticles.ts', 'w', encoding='utf-8') as f:
    f.write(content)


# Update RatgeberIndex.tsx
with open('src/pages/Ratgeber/RatgeberIndex.tsx', 'r', encoding='utf-8') as f:
    ri_content = f.read()

ri_content = ri_content.replace('{article.category}', '{i18n.language === \'en\' ? (article.category === \'Strom\' ? \'Electricity\' : article.category === \'Gas\' ? \'Gas\' : \'Internet\') : article.category}')
ri_content = ri_content.replace('{article.title}', '{i18n.language === \'en\' && article.titleEn ? article.titleEn : article.title}')
ri_content = ri_content.replace('{article.description}', '{i18n.language === \'en\' && article.descriptionEn ? article.descriptionEn : article.description}')

# Specific for Energie-Fragen block
ri_content = ri_content.replace(
    'Energie-Fragen & Antworten',
    '{i18n.language === \'en\' ? \'Energy Questions & Answers\' : \'Energie-Fragen & Antworten\'}'
)
ri_content = ri_content.replace(
    'Klare, eigenständige Antworten rund um Strom, Gas und Internet, die Nutzer sofort verstehen.',
    '{i18n.language === \'en\' ? \'Clear, independent answers about electricity, gas and internet that users understand immediately.\' : \'Klare, eigenständige Antworten rund um Strom, Gas und Internet, die Nutzer sofort verstehen.\'}'
)

with open('src/pages/Ratgeber/RatgeberIndex.tsx', 'w', encoding='utf-8') as f:
    f.write(ri_content)


# Update ArticleLayout.tsx
with open('src/pages/Ratgeber/ArticleLayout.tsx', 'r', encoding='utf-8') as f:
    al_content = f.read()

al_content = al_content.replace(
    '<span className="text-slate-800 dark:text-slate-200 truncate">{article.title}</span>',
    '<span className="text-slate-800 dark:text-slate-200 truncate">{i18n.language === \'en\' && article.titleEn ? article.titleEn : article.title}</span>'
)
al_content = al_content.replace(
    '{article.category}',
    '{i18n.language === \'en\' ? (article.category === \'Strom\' ? \'Electricity\' : article.category === \'Gas\' ? \'Gas\' : \'Internet\') : article.category}'
)
al_content = al_content.replace(
    'title={article.title}',
    'title={i18n.language === \'en\' && article.titleEn ? article.titleEn : article.title}'
)
al_content = al_content.replace(
    'description={article.description}',
    'description={i18n.language === \'en\' && article.descriptionEn ? article.descriptionEn : article.description}'
)

with open('src/pages/Ratgeber/ArticleLayout.tsx', 'w', encoding='utf-8') as f:
    f.write(al_content)

