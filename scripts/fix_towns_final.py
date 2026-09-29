import os
import glob
import re

def fix_whitespace_strings(content, town, t_en):
    # Fix the long contact paragraph
    p_strom = f'Sie möchten Ihren Stromvertrag nicht allein anhand langer Vergleichslisten beurteilen\? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Bringen Sie Ihre letzte Stromrechnung mit oder halten Sie Jahresverbrauch und Vertragsdaten bereit.'
    p_strom_en = f'You don\'t want to evaluate your electricity contract based on long comparison lists alone? Energie Alemi advises customers from {t_en} by phone and in person at Alexianergraben 9 in 52064 Aachen. Bring your last electricity bill with you or have your annual consumption and contract data ready.'
    content = re.sub(rf'(\>\s*){p_strom}(\s*\<)', rf'\1{{i18n.language === "en" ? "{p_strom_en}" : "{p_strom.replace("?", "?")}"}}\2', content)

    p_gas = f'Sie möchten Ihren Gasvertrag nicht allein anhand langer Vergleichslisten beurteilen\? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Bringen Sie Ihre letzte Gasrechnung mit oder halten Sie Jahresverbrauch und Vertragsdaten bereit.'
    p_gas_en = f'You don\'t want to evaluate your gas contract based on long comparison lists alone? Energie Alemi advises customers from {t_en} by phone and in person at Alexianergraben 9 in 52064 Aachen. Bring your last gas bill with you or have your annual consumption and contract data ready.'
    content = re.sub(rf'(\>\s*){p_gas}(\s*\<)', rf'\1{{i18n.language === "en" ? "{p_gas_en}" : "{p_gas.replace("?", "?")}"}}\2', content)

    p_net = f'Sie möchten Ihren Internettarif nicht allein anhand reiner Geschwindigkeitsangaben auswählen\? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Wir prüfen gemeinsam die an Ihrer Adresse verfügbaren Technologien und finden das passende Angebot.'
    p_net_en = f'You don\'t want to choose your internet tariff based solely on speed specifications? Energie Alemi advises customers from {t_en} by phone and in person at Alexianergraben 9 in 52064 Aachen. Together we will check the technologies available at your address and find the right offer.'
    content = re.sub(rf'(\>\s*){p_net}(\s*\<)', rf'\1{{i18n.language === "en" ? "{p_net_en}" : "{p_net.replace("?", "?")}"}}\2', content)

    # Fix the buttons
    content = re.sub(rf'(\>\s*)Jetzt Stromtarife für {town} prüfen lassen(\s*\<)', rf'\1{{i18n.language === "en" ? "Have electricity tariffs for {t_en} checked now" : "Jetzt Stromtarife für {town} prüfen lassen"}}\2', content)
    content = re.sub(rf'(\>\s*)Jetzt Gastarife für {town} prüfen lassen(\s*\<)', rf'\1{{i18n.language === "en" ? "Have gas tariffs for {t_en} checked now" : "Jetzt Gastarife für {town} prüfen lassen"}}\2', content)
    content = re.sub(rf'(\>\s*)Jetzt Internettarife für {town} prüfen lassen(\s*\<)', rf'\1{{i18n.language === "en" ? "Have internet tariffs for {t_en} checked now" : "Jetzt Internettarife für {town} prüfen lassen"}}\2', content)

    # Fix "Kostenlose Beratung" link
    content = re.sub(r'(\>\s*)Kostenlose Beratung(\s*\<)', r'\1{i18n.language === "en" ? "Free advice" : "Kostenlose Beratung"}\2', content)

    return content

for f in glob.glob("src/pages/*anbieter*.tsx"):
    town = ""
    if "Aachen" in f: town = "Aachen"
    elif "Stolberg" in f: town = "Stolberg"
    elif "Eschweiler" in f: town = "Eschweiler"
    elif "Herzogenrath" in f: town = "Herzogenrath"
    elif "Wuerselen" in f: town = "Würselen"

    t_en = "Wuerselen" if town == "Würselen" else town

    if town:
        with open(f, 'r') as file:
            content = file.read()
        
        content = fix_whitespace_strings(content, town, t_en)
        
        with open(f, 'w') as file:
            file.write(content)

print("Final whitespace strings fixed.")
