import glob

def conditional(en, de):
    return f"{{i18n.language === 'en' ? '{en}' : '{de}'}}"

files = glob.glob('src/pages/*anbieter*.tsx')

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Determine service type
    service = "Strom"
    service_en = "Electricity"
    if "Gasanbieter" in file:
        service = "Gas"
        service_en = "Gas"
    elif "Internetanbieter" in file:
        service = "Internet"
        service_en = "Internet"

    town = file.split('/')[-1].split('.')[0].replace('Stromanbieter', '').replace('Gasanbieter', '').replace('Internetanbieter', '')
    if town == "Wuerselen": town = "Würselen"

    # Common strings to replace
    # "Unser Angebot für [Town]" -> "Our Offer for [Town]"
    # "Persönliche Beratung in [Town]" -> "Personal Consultation in [Town]"
    # "Wir helfen Ihnen beim Anbieterwechsel" -> "We help you switch providers"
    
    # Just generic regex replacement for any hardcoded German text inside the town pages that aren't already translated.
    # Actually, it's safer to do exact string replacement based on what is commonly found in those templates.
    
    # Hero Title
    de_title = f"{service}anbieter {town}"
    en_title = conditional(f"{service_en} Providers {town}", de_title)
    content = content.replace(f"title={{'{de_title}'}}", f"title={{{en_title}}}")

    de_tl1 = f"Warum den {service}anbieter wechseln?"
    en_tl1 = conditional(f"Why switch {service_en.lower()} providers?", de_tl1)
    content = content.replace(f"title={{\n                      <>\n                        {de_tl1}", f"title={{\n                      <>\n                        {en_tl1}")

    # I'll just rely on a set of known strings
    replacements = {
        "Wir vergleichen Tarife unabhängig und finden das beste Angebot für Sie.": conditional("We compare tariffs independently and find the best offer for you.", "Wir vergleichen Tarife unabhängig und finden das beste Angebot für Sie."),
        "Erhalten Sie einen kostenlosen und unverbindlichen Tarifvergleich.": conditional("Receive a free and non-binding tariff comparison.", "Erhalten Sie einen kostenlosen und unverbindlichen Tarifvergleich."),
        "Wir übernehmen den gesamten Wechselprozess – Sie müssen sich um nichts kümmern.": conditional("We handle the entire switching process – you don't have to worry about anything.", "Wir übernehmen den gesamten Wechselprozess – Sie müssen sich um nichts kümmern."),
        "Lokaler Ansprechpartner": conditional("Local Contact Person", "Lokaler Ansprechpartner"),
        "Persönliche Beratung direkt vor Ort in Aachen und Umgebung.": conditional("Personal consultation directly on site in Aachen and the surrounding area.", "Persönliche Beratung direkt vor Ort in Aachen und Umgebung."),
        "Häufige Fragen zum Anbieterwechsel": conditional("Frequently Asked Questions About Switching Providers", "Häufige Fragen zum Anbieterwechsel"),
        "Hier finden Sie Antworten auf die wichtigsten Fragen.": conditional("Here you will find answers to the most important questions.", "Hier finden Sie Antworten auf die wichtigsten Fragen."),
        "Ist der Anbieterwechsel kostenlos?": conditional("Is switching providers free?", "Ist der Anbieterwechsel kostenlos?"),
        "Ja, unser Service und der Anbieterwechsel sind für Sie zu 100% kostenlos.": conditional("Yes, our service and the provider switch are 100% free for you.", "Ja, unser Service und der Anbieterwechsel sind für Sie zu 100% kostenlos."),
        "Wie lange dauert der Wechsel?": conditional("How long does the switch take?", "Wie lange dauert der Wechsel?"),
        "Der Wechsel dauert in der Regel 2-4 Wochen. Ihre Versorgung wird dabei nicht unterbrochen.": conditional("The switch usually takes 2-4 weeks. Your supply will not be interrupted.", "Der Wechsel dauert in der Regel 2-4 Wochen. Ihre Versorgung wird dabei nicht unterbrochen.")
    }

    for de, en in replacements.items():
        content = content.replace(f">{de}<", f">{en}<")
        content = content.replace(f'"{de}"', f'"{en}"')
        content = content.replace(f"'{de}'", f"'{en}'")
        
    # Some other common text
    content = content.replace("Warum den", "{i18n.language === 'en' ? 'Why switch' : 'Warum den'}")
    content = content.replace("anbieter wechseln?", "{i18n.language === 'en' ? 'providers?' : 'anbieter wechseln?'}")

    with open(file, 'w') as f:
        f.write(content)

