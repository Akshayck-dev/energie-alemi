import re

def conditional(en, de):
    return f"{{i18n.language === 'en' ? '{en}' : '{de}'}}"

def conditional_jsx(en, de):
    # For rendering raw HTML/JSX if needed.
    return f"{{i18n.language === 'en' ? <>{en}</> : <>{de}</>}}"

# -----------------
# 1. SEO.tsx (Titles)
# -----------------
with open('src/components/SEO.tsx', 'r') as f:
    seo = f.read()

# I will add a dynamic title dictionary right before setting seoTitle
dynamic_title_injection = """
  const enTitles: Record<string, string> = {
    '/contact': 'Contact | Energie Alemi – Tariff Advice for Electricity, Gas & Internet Aachen',
    '/faq': 'FAQ | Energie Alemi',
    '/about': 'About Us | Energie Alemi – Tariff Advice Aachen',
    '/electricity': 'Compare Electricity Tariffs & Switch Provider | Energie Alemi'
  };
  
  const finalResolvedTitle = (lang === 'en' && url && enTitles[url]) ? enTitles[url] : resolvedTitle;
"""
seo = seo.replace("const seoTitle = (resolvedTitle.includes('Energie Alemi')", dynamic_title_injection + "\n  const seoTitle = (finalResolvedTitle.includes('Energie Alemi') || finalResolvedTitle.includes('ALEMI')) ? finalResolvedTitle : `${finalResolvedTitle} | Energie Alemi`;\n//")
# I just commented out the original line because the replacement string has a `//` at the end or I can do a proper replace:
seo = seo.replace("const seoTitle = (resolvedTitle.includes('Energie Alemi') || resolvedTitle.includes('ALEMI')) ? resolvedTitle : `${resolvedTitle} | Energie Alemi`;\n//", "")
with open('src/components/SEO.tsx', 'w') as f:
    f.write(seo)

# Let me fix SEO.tsx replacement properly:
with open('src/components/SEO.tsx', 'r') as f:
    seo = f.read()
if 'finalResolvedTitle' not in seo:
    seo = seo.replace("const seoTitle = (resolvedTitle.includes('Energie Alemi') || resolvedTitle.includes('ALEMI')) ? resolvedTitle : `${resolvedTitle} | Energie Alemi`;", """
  const enTitles: Record<string, string> = {
    '/contact': 'Contact | Energie Alemi – Tariff Advice for Electricity, Gas & Internet Aachen',
    '/faq': 'FAQ | Energie Alemi',
    '/about': 'About Us | Energie Alemi – Tariff Advice Aachen',
    '/electricity': 'Compare Electricity Tariffs & Switch Provider | Energie Alemi'
  };
  
  const finalResolvedTitle = (lang === 'en' && url && enTitles[url]) ? enTitles[url] : resolvedTitle;
  const seoTitle = (finalResolvedTitle.includes('Energie Alemi') || finalResolvedTitle.includes('ALEMI')) ? finalResolvedTitle : `${finalResolvedTitle} | Energie Alemi`;
""")
with open('src/components/SEO.tsx', 'w') as f:
    f.write(seo)


# -----------------
# 2. Contact.tsx
# -----------------
with open('src/pages/Contact.tsx', 'r') as f:
    contact = f.read()

de_contact_h2_1 = "Was passiert nach Ihrer Anfrage?"
en_contact_h2_1 = conditional("What happens after your request?", de_contact_h2_1)
contact = contact.replace(f">{de_contact_h2_1}<", f">{en_contact_h2_1}<")

de_contact_h3_1 = "1. Schnelle Rückmeldung"
en_contact_h3_1 = conditional("1. Fast Response", de_contact_h3_1)
contact = contact.replace(f">{de_contact_h3_1}<", f">{en_contact_h3_1}<")

de_contact_p_1 = "Wir sichten Ihre Anfrage und melden uns in der Regel innerhalb von 24 Stunden telefonisch oder per E-Mail bei Ihnen zurück."
en_contact_p_1 = conditional("We review your request and usually get back to you by phone or email within 24 hours.", de_contact_p_1)
contact = contact.replace(f">{de_contact_p_1}<", f">{en_contact_p_1}<")

de_contact_h3_2 = "2. Kostenloses Erstgespräch"
en_contact_h3_2 = conditional("2. Free Initial Consultation", de_contact_h3_2)
contact = contact.replace(f">{de_contact_h3_2}<", f">{en_contact_h3_2}<")

de_contact_p_2 = "In einem kurzen Gespräch klären wir Ihren aktuellen Energiebedarf, prüfen Ihren bestehenden Vertrag und besprechen Ihre Wünsche."
en_contact_p_2 = conditional("In a brief conversation, we clarify your current energy needs, check your existing contract, and discuss your wishes.", de_contact_p_2)
contact = contact.replace(f">{de_contact_p_2}<", f">{en_contact_p_2}<")

de_contact_h3_3 = "3. Unverbindliches Angebot"
en_contact_h3_3 = conditional("3. Non-Binding Offer", de_contact_h3_3)
contact = contact.replace(f">{de_contact_h3_3}<", f">{en_contact_h3_3}<")

de_contact_p_3 = "Sie erhalten von uns einen passgenauen Tarifvorschlag. Wenn Sie einverstanden sind, übernehmen wir die komplette Wechselabwicklung für Sie."
en_contact_p_3 = conditional("You will receive a tailor-made tariff proposal from us. If you agree, we will handle the entire switching process for you.", de_contact_p_3)
contact = contact.replace(f">{de_contact_p_3}<", f">{en_contact_p_3}<")

de_contact_h2_2 = "Persönliche Beratung vor Ort in Aachen"
en_contact_h2_2 = conditional("Personal Consultation on Site in Aachen", de_contact_h2_2)
contact = contact.replace(f">{de_contact_h2_2}<", f">{en_contact_h2_2}<")

de_contact_p_4 = "Wir glauben an den Wert des persönlichen Gesprächs. Anstatt sich durch unpersönliche Online-Portale zu klicken, laden wir Sie herzlich in unser Büro am Alexianergraben 9, 52064 Aachen ein. Bringen Sie einfach Ihre letzte Strom- oder Gasabrechnung mit. Wir schauen gemeinsam darauf und finden die besten Sparpotenziale für Sie."
en_contact_p_4 = conditional("We believe in the value of personal conversation. Instead of clicking through impersonal online portals, we cordially invite you to our office at Alexianergraben 9, 52064 Aachen. Just bring your latest electricity or gas bill. We will look at it together and find the best potential savings for you.", de_contact_p_4)
contact = contact.replace(f"{de_contact_p_4}", f"{en_contact_p_4}")

de_contact_p_5 = "Nutzen Sie unseren"
en_contact_p_5 = conditional("Use our", de_contact_p_5)
contact = contact.replace(f"{de_contact_p_5}", f"{en_contact_p_5}")

de_contact_p_6 = "Google Maps Link"
en_contact_p_6 = conditional("Google Maps link", de_contact_p_6)
contact = contact.replace(f">{de_contact_p_6}<", f">{en_contact_p_6}<")

de_contact_p_7 = ", um direkt den Weg zu uns zu finden."
en_contact_p_7 = conditional(" to find your way directly to us.", de_contact_p_7)
contact = contact.replace(f"{de_contact_p_7}", f"{en_contact_p_7}")

de_contact_h2_3 = "Häufige Anliegen unserer Kunden"
en_contact_h2_3 = conditional("Common Concerns of Our Customers", de_contact_h2_3)
contact = contact.replace(f">{de_contact_h2_3}<", f">{en_contact_h2_3}<")

de_contact_h3_4 = "Stromrechnung zu hoch?"
en_contact_h3_4 = conditional("Electricity bill too high?", de_contact_h3_4)
contact = contact.replace(f">{de_contact_h3_4}<", f">{en_contact_h3_4}<")

de_contact_p_8 = "Wir prüfen Ihren Tarif und vergleichen ihn mit aktuellen Angeboten. Erfahren Sie mehr auf unserer "
en_contact_p_8 = conditional("We check your tariff and compare it with current offers. Learn more on our ", de_contact_p_8)
contact = contact.replace(f">{de_contact_p_8}", f">{en_contact_p_8}")

de_contact_p_9 = "Seite zum Stromanbieterwechsel"
en_contact_p_9 = conditional("page for switching electricity providers", de_contact_p_9)
contact = contact.replace(f">{de_contact_p_9}<", f">{en_contact_p_9}<")

de_contact_h3_5 = "Sie planen einen Umzug?"
en_contact_h3_5 = conditional("Are you planning a move?", de_contact_h3_5)
contact = contact.replace(f">{de_contact_h3_5}<", f">{en_contact_h3_5}<")

de_contact_p_10 = "Ein Umzug ist der perfekte Zeitpunkt für einen Wechsel. Wir stellen sicher, dass Sie am neuen Wohnort direkt günstig versorgt sind. Tipps finden Sie im "
en_contact_p_10 = conditional("A move is the perfect time for a switch. We ensure that you are supplied affordably right away at your new home. You can find tips in the ", de_contact_p_10)
contact = contact.replace(f">{de_contact_p_10}", f">{en_contact_p_10}")

de_contact_p_11 = "Ratgeber Umzug in Aachen"
en_contact_p_11 = conditional("guide for moving in Aachen", de_contact_p_11)
contact = contact.replace(f">{de_contact_p_11}<", f">{en_contact_p_11}<")

de_contact_h3_6 = "Gasvergleich gewünscht?"
en_contact_h3_6 = conditional("Want a gas comparison?", de_contact_h3_6)
contact = contact.replace(f">{de_contact_h3_6}<", f">{en_contact_h3_6}<")

de_contact_p_12 = "Sichern Sie sich langfristige Preisgarantien und schützen Sie sich vor starken Preisschwankungen. Besuchen Sie unsere "
en_contact_p_12 = conditional("Secure long-term price guarantees and protect yourself against strong price fluctuations. Visit our ", de_contact_p_12)
contact = contact.replace(f">{de_contact_p_12}", f">{en_contact_p_12}")

de_contact_p_13 = "Gasanbieter-Seite"
en_contact_p_13 = conditional("gas provider page", de_contact_p_13)
contact = contact.replace(f">{de_contact_p_13}<", f">{en_contact_p_13}<")

de_contact_h3_7 = "Internet zu langsam oder zu teuer?"
en_contact_h3_7 = conditional("Internet too slow or too expensive?", de_contact_h3_7)
contact = contact.replace(f">{de_contact_h3_7}<", f">{en_contact_h3_7}<")

de_contact_p_14 = "Wir prüfen die Verfügbarkeit von DSL, Kabel und Glasfaser an Ihrer Adresse. Infos gibt es in unserem Bereich für "
en_contact_p_14 = conditional("We check the availability of DSL, cable, and fiber optics at your address. Information is available in our section for ", de_contact_p_14)
contact = contact.replace(f">{de_contact_p_14}", f">{en_contact_p_14}")

de_contact_p_15 = "Internetverträge"
en_contact_p_15 = conditional("internet contracts", de_contact_p_15)
contact = contact.replace(f">{de_contact_p_15}<", f">{en_contact_p_15}<")

with open('src/pages/Contact.tsx', 'w') as f:
    f.write(contact)


# -----------------
# 3. FAQ.tsx
# -----------------
with open('src/pages/FAQ.tsx', 'r') as f:
    faq = f.read()

faq_cats = {
    '"Allgemeine Fragen"': 'i18n.language === "en" ? "General Questions" : "Allgemeine Fragen"',
    '"Strom & Tarife"': 'i18n.language === "en" ? "Electricity & Tariffs" : "Strom & Tarife"',
    '"Gas & Heizen"': 'i18n.language === "en" ? "Gas & Heating" : "Gas & Heizen"',
    '"Internet & DSL"': 'i18n.language === "en" ? "Internet & DSL" : "Internet & DSL"',
    '"Der Wechselprozess"': 'i18n.language === "en" ? "The Switching Process" : "Der Wechselprozess"'
}

for de, en in faq_cats.items():
    faq = faq.replace(f"title: {de}", f"title: {en}")

faq = faq.replace('question: "Beraten Sie auch auf Englisch?"', 'question: i18n.language === "en" ? "Do you also advise in English?" : "Beraten Sie auch auf Englisch?"')
faq = faq.replace('answer: "Ja, wir bieten unsere Tarifberatung auch auf Englisch an. Sprechen Sie uns einfach darauf an, und wir helfen Ihnen bei allen Fragen rund um Strom, Gas und Internet gerne auf Englisch weiter."', 'answer: i18n.language === "en" ? "Yes, we also offer our tariff consultancy in English. Just ask us about it, and we will gladly help you with any questions about electricity, gas, and internet in English." : "Ja, wir bieten unsere Tarifberatung auch auf Englisch an. Sprechen Sie uns einfach darauf an, und wir helfen Ihnen bei allen Fragen rund um Strom, Gas und Internet gerne auf Englisch weiter."')

faq = faq.replace('question: "Gibt es eine vertragliche Bindung an Ihre Beratung?"', 'question: i18n.language === "en" ? "Is there a contractual commitment to your advice?" : "Gibt es eine vertragliche Bindung an Ihre Beratung?"')
faq = faq.replace('answer: "Nein, unsere Beratung ist völlig unverbindlich und an keine Vertragslaufzeit gebunden. Sie binden sich an keinen Beratungsvertrag, sondern schließen lediglich den von Ihnen gewählten Energietarif ab."', 'answer: i18n.language === "en" ? "No, our advice is completely non-binding and not tied to any contract duration. You do not commit to any consulting contract; you merely take out the energy tariff you have chosen." : "Nein, unsere Beratung ist völlig unverbindlich und an keine Vertragslaufzeit gebunden. Sie binden sich an keinen Beratungsvertrag, sondern schließen lediglich den von Ihnen gewählten Energietarif ab."')

# Strom & Tarife
faq = faq.replace('question: "Was ist die Strom-Grundversorgung?"', 'question: i18n.language === "en" ? "What is the basic electricity supply?" : "Was ist die Strom-Grundversorgung?"')
faq = faq.replace('answer: "Die Grundversorgung ist der Tarif, in den Sie automatisch fallen, wenn Sie keinen aktiven Stromvertrag abschließen (z.B. beim Umzug). Sie ist sehr flexibel, gehört aber meist zu den teuersten Tarifen am Markt."', 'answer: i18n.language === "en" ? "The basic supply is the tariff you automatically fall into if you do not actively sign an electricity contract (e.g., when moving). It is very flexible but usually belongs to the most expensive tariffs on the market." : "Die Grundversorgung ist der Tarif, in den Sie automatisch fallen, wenn Sie keinen aktiven Stromvertrag abschließen (z.B. beim Umzug). Sie ist sehr flexibel, gehört aber meist zu den teuersten Tarifen am Markt."')

faq = faq.replace('question: "Lohnt sich der Wechsel zu Ökostrom?"', 'question: i18n.language === "en" ? "Is it worth switching to green electricity?" : "Lohnt sich der Wechsel zu Ökostrom?"')
faq = faq.replace('answer: "Absolut. Ökostrom aus erneuerbaren Energien ist heute oft genauso günstig oder sogar günstiger als Graustrom. Sie schonen die Umwelt, ohne mehr zu bezahlen."', 'answer: i18n.language === "en" ? "Absolutely. Green electricity from renewable energies is often just as cheap or even cheaper than grey electricity today. You protect the environment without paying more." : "Absolut. Ökostrom aus erneuerbaren Energien ist heute oft genauso günstig oder sogar günstiger als Graustrom. Sie schonen die Umwelt, ohne mehr zu bezahlen."')

faq = faq.replace('question: "Muss beim Anbieterwechsel der Stromzähler getauscht werden?"', 'question: i18n.language === "en" ? "Does the electricity meter need to be replaced when switching providers?" : "Muss beim Anbieterwechsel der Stromzähler getauscht werden?"')
faq = faq.replace('answer: "Nein, ein Zählertausch ist nicht nötig. Ihr Stromzähler und die Leitungen bleiben im Besitz des örtlichen Netzbetreibers, der weiterhin für die Wartung zuständig ist."', 'answer: i18n.language === "en" ? "No, replacing the meter is not necessary. Your electricity meter and the lines remain the property of the local network operator, who continues to be responsible for maintenance." : "Nein, ein Zählertausch ist nicht nötig. Ihr Stromzähler und die Leitungen bleiben im Besitz des örtlichen Netzbetreibers, der weiterhin für die Wartung zuständig ist."')

faq = faq.replace('question: "Was ist der Unterschied zwischen Grundversorgung und Sondervertrag?"', 'question: i18n.language === "en" ? "What is the difference between basic supply and a special contract?" : "Was ist der Unterschied zwischen Grundversorgung und Sondervertrag?"')
faq = faq.replace('answer: "Die Grundversorgung ist der Standardtarif, den Sie automatisch erhalten, wenn Sie keinen aktiven Vertrag abschließen. Sonderverträge werden aktiv abgeschlossen und bieten in der Regel deutlich günstigere Konditionen sowie Preisgarantien."', 'answer: i18n.language === "en" ? "The basic supply is the standard tariff you automatically receive if you do not actively sign a contract. Special contracts are actively signed and usually offer significantly cheaper conditions as well as price guarantees." : "Die Grundversorgung ist der Standardtarif, den Sie automatisch erhalten, wenn Sie keinen aktiven Vertrag abschließen. Sonderverträge werden aktiv abgeschlossen und bieten in der Regel deutlich günstigere Konditionen sowie Preisgarantien."')

faq = faq.replace('question: "Lohnt sich Ökostrom wirklich?"', 'question: i18n.language === "en" ? "Is green electricity really worth it?" : "Lohnt sich Ökostrom wirklich?"')
faq = faq.replace('answer: "Ja, Ökostrom ist heute oft genauso günstig wie herkömmlicher Strom. Zudem unterstützen Sie aktiv den Ausbau erneuerbarer Energien und senken Ihre CO2-Emissionen, ohne Abstriche bei der Versorgungssicherheit zu machen."', 'answer: i18n.language === "en" ? "Yes, green electricity is often just as cheap as conventional electricity today. Additionally, you actively support the expansion of renewable energies and reduce your CO2 emissions without compromising security of supply." : "Ja, Ökostrom ist heute oft genauso günstig wie herkömmlicher Strom. Zudem unterstützen Sie aktiv den Ausbau erneuerbarer Energien und senken Ihre CO2-Emissionen, ohne Abstriche bei der Versorgungssicherheit zu machen."')

# Gas & Heizen
faq = faq.replace('question: "Wie berechnet sich der Gaspreis?"', 'question: i18n.language === "en" ? "How is the gas price calculated?" : "Wie berechnet sich der Gaspreis?"')
faq = faq.replace('answer: "Der Gaspreis setzt sich aus einem festen Grundpreis (für Bereitstellung und Zähler) und einem variablen Arbeitspreis (Kosten pro verbrauchter Kilowattstunde) zusammen."', 'answer: i18n.language === "en" ? "The gas price consists of a fixed base price (for provision and meter) and a variable unit price (cost per consumed kilowatt-hour)." : "Der Gaspreis setzt sich aus einem festen Grundpreis (für Bereitstellung und Zähler) und einem variablen Arbeitspreis (Kosten pro verbrauchter Kilowattstunde) zusammen."')

faq = faq.replace('question: "Sollte ich einen Gastarif mit Preisgarantie wählen?"', 'question: i18n.language === "en" ? "Should I choose a gas tariff with a price guarantee?" : "Sollte ich einen Gastarif mit Preisgarantie wählen?"')
faq = faq.replace('answer: "In der Regel ja. Eine Preisgarantie über 12 oder 24 Monate schützt Sie vor unerwarteten Preiserhöhungen auf dem Energiemarkt."', 'answer: i18n.language === "en" ? "Usually, yes. A price guarantee for 12 or 24 months protects you from unexpected price increases on the energy market." : "In der Regel ja. Eine Preisgarantie über 12 oder 24 Monate schützt Sie vor unerwarteten Preiserhöhungen auf dem Energiemarkt."')

faq = faq.replace('question: "Wie finde ich einen günstigeren Gastarif?"', 'question: i18n.language === "en" ? "How do I find a cheaper gas tariff?" : "Wie finde ich einen günstigeren Gastarif?"')
faq = faq.replace('answer: "Am besten durch einen unabhängigen Vergleich der verschiedenen Angebote. Wir prüfen aktuelle Tarife, achten auf versteckte Kosten und empfehlen Ihnen Optionen, die exakt zu Ihrem Verbrauchsverhalten passen."', 'answer: i18n.language === "en" ? "Best through an independent comparison of the different offers. We check current tariffs, watch out for hidden costs, and recommend options that exactly match your consumption behavior." : "Am besten durch einen unabhängigen Vergleich der verschiedenen Angebote. Wir prüfen aktuelle Tarife, achten auf versteckte Kosten und empfehlen Ihnen Optionen, die exakt zu Ihrem Verbrauchsverhalten passen."')

faq = faq.replace('question: "Was passiert bei einer Gaspreiserhöhung?"', 'question: i18n.language === "en" ? "What happens if gas prices increase?" : "Was passiert bei einer Gaspreiserhöhung?"')
faq = faq.replace('answer: "Bei einer Preiserhöhung haben Sie ein gesetzliches Sonderkündigungsrecht. Sie können Ihren Vertrag kurzfristig beenden, und wir helfen Ihnen sofort dabei, einen neuen und günstigeren Anbieter zu finden."', 'answer: i18n.language === "en" ? "In the event of a price increase, you have a legal right of special termination. You can end your contract at short notice, and we will immediately help you find a new and cheaper provider." : "Bei einer Preiserhöhung haben Sie ein gesetzliches Sonderkündigungsrecht. Sie können Ihren Vertrag kurzfristig beenden, und wir helfen Ihnen sofort dabei, einen neuen und günstigeren Anbieter zu finden."')

# Internet & DSL
faq = faq.replace('question: "Was ist besser: DSL, Kabel oder Glasfaser?"', 'question: i18n.language === "en" ? "What is better: DSL, cable, or fiber optics?" : "Was ist besser: DSL, Kabel oder Glasfaser?"')
faq = faq.replace('answer: "Das hängt von der lokalen Verfügbarkeit ab. Glasfaser bietet die stabilsten und höchsten Geschwindigkeiten, ist aber noch nicht überall verfügbar. Kabel ist oft schneller als DSL, kann aber zu Stoßzeiten Schwankungen unterliegen."', 'answer: i18n.language === "en" ? "That depends on local availability. Fiber optics offer the most stable and highest speeds but are not yet available everywhere. Cable is often faster than DSL but can be subject to fluctuations during peak times." : "Das hängt von der lokalen Verfügbarkeit ab. Glasfaser bietet die stabilsten und höchsten Geschwindigkeiten, ist aber noch nicht überall verfügbar. Kabel ist oft schneller als DSL, kann aber zu Stoßzeiten Schwankungen unterliegen."')

faq = faq.replace('question: "Brauche ich einen neuen Router beim Anbieterwechsel?"', 'question: i18n.language === "en" ? "Do I need a new router when switching providers?" : "Brauche ich einen neuen Router beim Anbieterwechsel?"')
faq = faq.replace('answer: "Das kommt auf Ihren aktuellen Router und die neue Technologie an. Viele Anbieter stellen bei Vertragsabschluss kostenlos oder zur Miete einen passenden Router zur Verfügung. Bei einem reinen Anbieterwechsel ohne Technologiewechsel können Sie moderne Geräte oft weiter nutzen."', 'answer: i18n.language === "en" ? "That depends on your current router and the new technology. Many providers offer a suitable router free of charge or for rent when signing a contract. When simply switching providers without changing technology, you can often continue using modern devices." : "Das kommt auf Ihren aktuellen Router und die neue Technologie an. Viele Anbieter stellen bei Vertragsabschluss kostenlos oder zur Miete einen passenden Router zur Verfügung. Bei einem reinen Anbieterwechsel ohne Technologiewechsel können Sie moderne Geräte oft weiter nutzen."')

faq = faq.replace('question: "Wann ist Glasfaser in Aachen verfügbar?"', 'question: i18n.language === "en" ? "When will fiber optics be available in Aachen?" : "Wann ist Glasfaser in Aachen verfügbar?"')
faq = faq.replace('answer: "Der Glasfaserausbau in Aachen und der Städteregion schreitet stetig voran. Wir prüfen gerne adressgenau für Sie, ob ein Anschluss bei Ihnen bereits möglich ist oder ab wann dieser ausgebaut wird."', 'answer: i18n.language === "en" ? "The fiber optic expansion in Aachen and the city region is progressing steadily. We would be happy to check your exact address to see if a connection is already possible or when it will be expanded." : "Der Glasfaserausbau in Aachen und der Städteregion schreitet stetig voran. Wir prüfen gerne adressgenau für Sie, ob ein Anschluss bei Ihnen bereits möglich ist oder ab wann dieser ausgebaut wird."')

faq = faq.replace('question: "Was tun bei zu langsamem Internet?"', 'question: i18n.language === "en" ? "What to do if the internet is too slow?" : "Was tun bei zu langsamem Internet?"')
faq = faq.replace('answer: "Oft liegt es am veralteten Router oder einem Tarif, der nicht mehr zu Ihren aktuellen Anforderungen passt. Ein Wechsel zu einem modernen Tarif, beispielsweise über Kabel oder Glasfaser, kann das Problem der langsamen Internetverbindung meist schnell beheben."', 'answer: i18n.language === "en" ? "It is often due to an outdated router or a tariff that no longer fits your current requirements. A switch to a modern tariff, for example via cable or fiber optics, can usually solve the problem of a slow internet connection quickly." : "Oft liegt es am veralteten Router oder einem Tarif, der nicht mehr zu Ihren aktuellen Anforderungen passt. Ein Wechsel zu einem modernen Tarif, beispielsweise über Kabel oder Glasfaser, kann das Problem der langsamen Internetverbindung meist schnell beheben."')

# Der Wechselprozess
faq = faq.replace('question: "Kann mir bei einem Wechsel der Strom oder das Gas abgestellt werden?"', 'question: i18n.language === "en" ? "Can my electricity or gas be shut off during a switch?" : "Kann mir bei einem Wechsel der Strom oder das Gas abgestellt werden?"')
faq = faq.replace('answer: "Nein. Die durchgängige Energieversorgung ist in Deutschland gesetzlich garantiert. Sie stehen zu keinem Zeitpunkt ohne Strom oder Gas da."', 'answer: i18n.language === "en" ? "No. Continuous energy supply is legally guaranteed in Germany. You will never be without electricity or gas at any point." : "Nein. Die durchgängige Energieversorgung ist in Deutschland gesetzlich garantiert. Sie stehen zu keinem Zeitpunkt ohne Strom oder Gas da."')

faq = faq.replace('question: "Gibt es beim Wechseln Kündigungsfristen?"', 'question: i18n.language === "en" ? "Are there notice periods when switching?" : "Gibt es beim Wechseln Kündigungsfristen?"')
faq = faq.replace('answer: "Ja, diese hängen von Ihrem aktuellen Vertrag ab. In der Grundversorgung beträgt die Frist meist 2 Wochen. Sonderverträge haben längere Laufzeiten – wir prüfen das gerne für Sie und übernehmen die fristgerechte Kündigung."', 'answer: i18n.language === "en" ? "Yes, these depend on your current contract. In the basic supply, the period is usually 2 weeks. Special contracts have longer terms – we are happy to check this for you and take care of the timely cancellation." : "Ja, diese hängen von Ihrem aktuellen Vertrag ab. In der Grundversorgung beträgt die Frist meist 2 Wochen. Sonderverträge haben längere Laufzeiten – wir prüfen das gerne für Sie und übernehmen die fristgerechte Kündigung."')

faq = faq.replace('question: "Kann der Wechsel schiefgehen?"', 'question: i18n.language === "en" ? "Can the switch go wrong?" : "Kann der Wechsel schiefgehen?"')
faq = faq.replace('answer: "Nein, der Prozess ist in Deutschland extrem stark reguliert und sehr sicher. Wir überwachen alle Fristen und stellen sicher, dass Ihre Energie- oder Internetversorgung zu jedem Zeitpunkt vollständig aufrechterhalten bleibt."', 'answer: i18n.language === "en" ? "No, the process is extremely strictly regulated and very secure in Germany. We monitor all deadlines and ensure that your energy or internet supply is fully maintained at all times." : "Nein, der Prozess ist in Deutschland extrem stark reguliert und sehr sicher. Wir überwachen alle Fristen und stellen sicher, dass Ihre Energie- oder Internetversorgung zu jedem Zeitpunkt vollständig aufrechterhalten bleibt."')

faq = faq.replace('question: "Was ist eine Preisgarantie wert?"', 'question: i18n.language === "en" ? "What is a price guarantee worth?" : "Was ist eine Preisgarantie wert?"')
faq = faq.replace('answer: "Eine Preisgarantie schützt Sie effektiv vor steigenden Energiepreisen auf dem Beschaffungsmarkt. Besonders in unruhigen Marktphasen bietet sie Ihnen wertvolle Planungssicherheit über 12 oder 24 Monate."', 'answer: i18n.language === "en" ? "A price guarantee effectively protects you from rising energy prices on the procurement market. Especially in turbulent market phases, it offers you valuable planning security for 12 or 24 months." : "Eine Preisgarantie schützt Sie effektiv vor steigenden Energiepreisen auf dem Beschaffungsmarkt. Besonders in unruhigen Marktphasen bietet sie Ihnen wertvolle Planungssicherheit über 12 oder 24 Monate."')

with open('src/pages/FAQ.tsx', 'w') as f:
    f.write(faq)


# -----------------
# 4. Electricity.tsx
# -----------------
with open('src/pages/Electricity.tsx', 'r') as f:
    elec = f.read()

# Fix the mixed sentence fragment:
# <span>{t('elec.cross_p5', ' oder in unserem Ratgeber zum ')}</span>
# <Link to="/ratgeber/stromanbieter-wechseln" ...>{t('elec.cross_l5', 'Stromanbieter wechseln')}</Link>
# <span>.</span>
old_mix = "<span>{t('elec.cross_p5', ' oder in unserem Ratgeber zum ')}</span>\n                    <Link to=\"/ratgeber/stromanbieter-wechseln\" className=\"text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold\">{t('elec.cross_l5', 'Stromanbieter wechseln')}</Link>\n                    <span>.</span>"
new_mix = "<span>{t('elec.cross_p5', i18n.language === 'en' ? ' or read our guide on ' : ' oder in unserem Ratgeber zum ')}</span>\n                    <Link to=\"/ratgeber/stromanbieter-wechseln\" className=\"text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold\">{t('elec.cross_l5', i18n.language === 'en' ? 'switching electricity providers' : 'Stromanbieter wechseln')}</Link>\n                    <span>.</span>"
elec = elec.replace(old_mix, new_mix)

# Sections
de_h2_1 = "Stromkosten in Aachen: Was ist normal?"
en_h2_1 = conditional("Electricity Costs in Aachen: What is Normal?", de_h2_1)
elec = elec.replace(f">{de_h2_1}<", f">{en_h2_1}<")

de_p_1 = "Um zu beurteilen, ob Ihr aktueller Stromtarif zu teuer ist, hilft ein Blick auf die durchschnittlichen Verbrauchswerte. Der Stromverbrauch hängt stark von der Haushaltsgröße und der Art der Warmwasserbereitung ab."
en_p_1 = conditional("To judge whether your current electricity tariff is too expensive, a look at average consumption values helps. Electricity consumption depends strongly on the household size and the type of water heating.", de_p_1)
elec = elec.replace(f">{de_p_1}<", f">{en_p_1}<")

de_li_1 = "1-Personen-Haushalt:</strong> ca. 1.500 kWh pro Jahr. ("
en_li_1 = conditional_jsx("1-Person Household:</strong> approx. 1,500 kWh per year. (", "1-Personen-Haushalt:</strong> ca. 1.500 kWh pro Jahr. (")
elec = elec.replace(f"1-Personen-Haushalt:</strong> ca. 1.500 kWh pro Jahr. (", f"{en_li_1}")

de_a_1 = "Details zum Single-Haushalt"
en_a_1 = conditional("Details for single households", de_a_1)
elec = elec.replace(f">{de_a_1}<", f">{en_a_1}<")

de_li_2 = "2-Personen-Haushalt:</strong> ca. 2.500 kWh pro Jahr. ("
en_li_2 = conditional_jsx("2-Person Household:</strong> approx. 2,500 kWh per year. (", "2-Personen-Haushalt:</strong> ca. 2.500 kWh pro Jahr. (")
elec = elec.replace(f"2-Personen-Haushalt:</strong> ca. 2.500 kWh pro Jahr. (", f"{en_li_2}")

de_a_2 = "Details für Paare"
en_a_2 = conditional("Details for couples", de_a_2)
elec = elec.replace(f">{de_a_2}<", f">{en_a_2}<")

de_li_3 = "4-Personen-Haushalt:</strong> ca. 4.000 kWh pro Jahr. ("
en_li_3 = conditional_jsx("4-Person Household:</strong> approx. 4,000 kWh per year. (", "4-Personen-Haushalt:</strong> ca. 4.000 kWh pro Jahr. (")
elec = elec.replace(f"4-Personen-Haushalt:</strong> ca. 4.000 kWh pro Jahr. (", f"{en_li_3}")

de_a_3 = "Details für Familien"
en_a_3 = conditional("Details for families", de_a_3)
elec = elec.replace(f">{de_a_3}<", f">{en_a_3}<")

de_p_2 = "Liegt Ihr Verbrauch deutlich darüber, helfen Energiespartipps. Liegen Ihre Kosten pro kWh jedoch deutlich über dem Marktdurchschnitt, sollten Sie umgehend den Tarif wechseln."
en_p_2 = conditional("If your consumption is significantly higher, energy-saving tips will help. However, if your costs per kWh are significantly above the market average, you should switch tariffs immediately.", de_p_2)
elec = elec.replace(f">{de_p_2}<", f">{en_p_2}<")

de_h2_2 = "Ökostrom oder Normalstrom?"
en_h2_2 = conditional("Green Electricity or Normal Electricity?", de_h2_2)
elec = elec.replace(f">{de_h2_2}<", f">{en_h2_2}<")

de_p_3 = "Viele Kunden fragen uns, ob sich der Umstieg auf Ökostrom lohnt. Die Antwort lautet ganz klar: Ja. Strom aus erneuerbaren Energien (wie Wind-, Sonnen- oder Wasserkraft) ist in den letzten Jahren enorm konkurrenzfähig geworden."
en_p_3 = conditional("Many customers ask us if switching to green electricity is worth it. The answer is clearly: Yes. Electricity from renewable energies (like wind, solar, or hydropower) has become enormously competitive in recent years.", de_p_3)
elec = elec.replace(f">{de_p_3}<", f">{en_p_3}<")

de_p_4 = "Oftmals sind reine Ökostromtarife sogar günstiger als die klassischen Graustrom-Mixe der regionalen Grundversorger. Ein Wechsel zu Ökostrom bedeutet also nicht, dass Sie mehr bezahlen müssen. Im Gegenteil: Sie schonen die Umwelt und entlasten gleichzeitig Ihren Geldbeutel."
en_p_4 = conditional("Often, pure green electricity tariffs are even cheaper than the classic grey electricity mixes of regional basic suppliers. So a switch to green electricity does not mean you have to pay more. On the contrary: you protect the environment and relieve your wallet at the same time.", de_p_4)
elec = elec.replace(f">{de_p_4}<", f">{en_p_4}<")

de_p_5 = "In unserer Tarifberatung weisen wir echte Ökotarife (mit Zertifikaten wie ok-power oder Grüner Strom Label) transparent aus, sodass Sie eine informierte Entscheidung treffen können."
en_p_5 = conditional("In our tariff advice, we transparently identify true green tariffs (with certificates like ok-power or Grüner Strom Label) so that you can make an informed decision.", de_p_5)
elec = elec.replace(f">{de_p_5}<", f">{en_p_5}<")

de_h2_3 = "Für wen lohnt sich der Wechsel besonders?"
en_h2_3 = conditional("Who benefits most from switching?", de_h2_3)
elec = elec.replace(f">{de_h2_3}<", f">{en_h2_3}<")

de_p_6 = "Das größte Sparpotenzial haben Haushalte, die noch nie ihren Stromanbieter gewechselt haben und sich in der sogenannten Grundversorgung befinden. Die Grundversorgung ist zwar flexibel, aber strukturell oft sehr teuer."
en_p_6 = conditional("Households that have never switched their electricity provider and are in the so-called basic supply have the greatest savings potential. The basic supply is flexible, but structurally often very expensive.", de_p_6)
elec = elec.replace(f">{de_p_6}<", f">{en_p_6}<")

de_p_7 = "Auch nach einer Preiserhöhung Ihres aktuellen Anbieters oder bei einem anstehenden Umzug ist der optimale Zeitpunkt gekommen, um aktiv zu werden. Sie profitieren dann nicht nur von besseren Kilowattstundenpreisen, sondern oft auch von attraktiven Neukundenboni."
en_p_7 = conditional("Even after a price increase from your current provider or with an upcoming move, the optimal time has come to take action. You then benefit not only from better kilowatt-hour prices but often also from attractive new customer bonuses.", de_p_7)
elec = elec.replace(f">{de_p_7}<", f">{en_p_7}<")

de_p_8 = "Erfahren Sie in unserem Ratgeber mehr darüber, wie Sie den "
en_p_8 = conditional("Learn more in our guide about how to ", de_p_8)
elec = elec.replace(f">{de_p_8}", f">{en_p_8}")

de_a_4 = "Stromanbieter richtig wechseln"
en_a_4 = conditional("switch electricity providers correctly", de_a_4)
elec = elec.replace(f">{de_a_4}<", f">{en_a_4}<")

de_p_9 = " und Fristen optimal nutzen."
en_p_9 = conditional(" and make optimal use of deadlines.", de_p_9)
elec = elec.replace(f"{de_p_9}<", f"{en_p_9}<")

de_h2_4 = "Strom, Gas & Internet aus einer Hand"
en_h2_4 = conditional("Electricity, Gas & Internet from a Single Source", de_h2_4)
elec = elec.replace(f">{de_h2_4}<", f">{en_h2_4}<")

de_p_10 = "Energie Alemi bietet Ihnen den Komfort, nicht nur Ihren Stromtarif zu optimieren. Wir prüfen auf Wunsch auch Ihre Verträge für andere grundlegende Haushaltsausgaben."
en_p_10 = conditional("Energie Alemi offers you the convenience of not only optimizing your electricity tariff. Upon request, we also check your contracts for other basic household expenses.", de_p_10)
elec = elec.replace(f">{de_p_10}<", f">{en_p_10}<")

de_p_11 = "Mit einem kombinierten Blick auf Ihre Kosten für "
en_p_11 = conditional("With a combined look at your costs for ", de_p_11)
elec = elec.replace(f">{de_p_11}", f">{en_p_11}")

de_a_5 = "Gas"
en_a_5 = conditional("gas", de_a_5)
elec = elec.replace(f">{de_a_5}<", f">{en_a_5}<")

de_p_12 = " und "
en_p_12 = conditional(" and ", de_p_12)
elec = elec.replace(f"{de_p_12}", f"{en_p_12}")

de_a_6 = "Internet (DSL & Glasfaser)"
en_a_6 = conditional("internet (DSL & fiber optics)", de_a_6)
elec = elec.replace(f">{de_a_6}<", f">{en_a_6}<")

de_p_13 = " lässt sich die Haushaltskasse oft um mehrere hundert Euro im Jahr entlasten. Wir sind Ihr zentraler Ansprechpartner für alle Versorgungsverträge in Aachen und bundesweit."
en_p_13 = conditional(" the household budget can often be relieved by several hundred euros a year. We are your central point of contact for all utility contracts in Aachen and nationwide.", de_p_13)
elec = elec.replace(f"{de_p_13}<", f"{en_p_13}<")

with open('src/pages/Electricity.tsx', 'w') as f:
    f.write(elec)

print("Contact, FAQ, Electricity, and SEO translations applied.")
