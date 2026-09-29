import os
import glob
import re

base_replacements = [
    # Features
    (r'"Privathaushalte profitieren von einem Vergleich, der Haushaltsgröße, Jahresverbrauch und persönliche Prioritäten berücksichtigt. Wer Wert auf erneuerbare Energien legt, kann die ausgewiesene Stromherkunft und die Bedingungen entsprechender Tarife in die Auswahl einbeziehen."',
     r'i18n.language === "en" ? "Private households benefit from a comparison that takes into account household size, annual consumption and personal priorities. Those who value renewable energies can include the stated origin of electricity and the conditions of corresponding tariffs in the selection." : "Privathaushalte profitieren von einem Vergleich, der Haushaltsgröße, Jahresverbrauch und persönliche Prioritäten berücksichtigt. Wer Wert auf erneuerbare Energien legt, kann die ausgewiesene Stromherkunft und die Bedingungen entsprechender Tarife in die Auswahl einbeziehen."'),
    
    (r'title: "Gewerbe & Industrie"',
     r'title: i18n.language === "en" ? "Business & Industry" : "Gewerbe & Industrie"'),
     
    (r'"Bei Gewerbe- und Industriekunden stehen Verbrauchsprofil, Planungssicherheit und passende Vertragskonditionen im Vordergrund. Energie Alemi erfasst die betriebliche Situation und bespricht die verfügbaren Optionen verständlich und strukturiert."',
     r'i18n.language === "en" ? "For commercial and industrial customers, the consumption profile, planning security and suitable contract conditions are paramount. Energie Alemi records the operational situation and discusses the available options in a clear and structured manner." : "Bei Gewerbe- und Industriekunden stehen Verbrauchsprofil, Planungssicherheit und passende Vertragskonditionen im Vordergrund. Energie Alemi erfasst die betriebliche Situation und bespricht die verfügbaren Optionen verständlich und strukturiert."'),

    # Steps
    (r'title: "Vertrag und Verbrauch prüfen"',
     r'title: i18n.language === "en" ? "Check contract and consumption" : "Vertrag und Verbrauch prüfen"'),
     
    (r'"Halten Sie Ihre letzte Jahresabrechnung, den aktuellen Vertrag und möglichst Zählernummer oder Marktlokations-ID bereit."',
     r'i18n.language === "en" ? "Keep your last annual statement, current contract and, if possible, meter number or market location ID ready." : "Halten Sie Ihre letzte Jahresabrechnung, den aktuellen Vertrag und möglichst Zählernummer oder Marktlokations-ID bereit."'),

    (r'"Wir betrachten Jahreskosten, Laufzeit, Kündigungsfrist, Preisgarantie, Zahlungsweise und Bonusregeln gemeinsam."',
     r'i18n.language === "en" ? "We consider annual costs, term, cancellation period, price guarantee, payment method and bonus rules together." : "Wir betrachten Jahreskosten, Laufzeit, Kündigungsfrist, Preisgarantie, Zahlungsweise und Bonusregeln gemeinsam."'),

    (r'"Sie entscheiden, welches Angebot zu Ihren Anforderungen passt und erhalten vor dem Abschluss die relevanten Vertragsinformationen."',
     r'i18n.language === "en" ? "You decide which offer suits your requirements and receive the relevant contract information before signing." : "Sie entscheiden, welches Angebot zu Ihren Anforderungen passt und erhalten vor dem Abschluss die relevanten Vertragsinformationen."'),

    (r'"Auf Wunsch unterstützen wir die notwendigen Schritte und bleiben auch nach dem Wechsel Ihr Ansprechpartner."',
     r'i18n.language === "en" ? "If you wish, we can support you with the necessary steps and remain your contact person even after the switch." : "Auf Wunsch unterstützen wir die notwendigen Schritte und bleiben auch nach dem Wechsel Ihr Ansprechpartner."'),

    # Bullet points
    (r'title: "Kostenlose Tarifberatung"',
     r'title: i18n.language === "en" ? "Free tariff advice" : "Kostenlose Tarifberatung"'),
     
    (r'title: "Persönlicher Ansprechpartner in Aachen"',
     r'title: i18n.language === "en" ? "Personal contact in Aachen" : "Persönlicher Ansprechpartner in Aachen"'),
     
    (r'title: "Begleitung beim Anbieterwechsel"',
     r'title: i18n.language === "en" ? "Support when switching providers" : "Begleitung beim Anbieterwechsel"'),

    # Headings
    (r'>Ein guter Stromtarif passt zu Verbrauch und Vertragsziel<',
     r'>{i18n.language === "en" ? "A good electricity tariff matches consumption and contract goals" : "Ein guter Stromtarif passt zu Verbrauch und Vertragsziel"}<'),
     
    (r'>Ein guter Gastarif passt zu Verbrauch und Vertragsziel<',
     r'>{i18n.language === "en" ? "A good gas tariff matches consumption and contract goals" : "Ein guter Gastarif passt zu Verbrauch und Vertragsziel"}<'),
     
    (r'>Ein passender Internettarif hängt vom Nutzungsverhalten ab<',
     r'>{i18n.language === "en" ? "A suitable internet tariff depends on usage behavior" : "Ein passender Internettarif hängt vom Nutzungsverhalten ab"}<'),
     
    (r'title="Stromtarife für Privathaushalte, Gewerbe und Industrie"',
     r'title={i18n.language === "en" ? "Electricity tariffs for private households, businesses and industry" : "Stromtarife für Privathaushalte, Gewerbe und Industrie"}'),
     
    (r'title="Gastarife für Privathaushalte, Gewerbe und Industrie"',
     r'title={i18n.language === "en" ? "Gas tariffs for private households, businesses and industry" : "Gastarife für Privathaushalte, Gewerbe und Industrie"}'),
     
    (r'title="Internettarife für Privathaushalte, Gewerbe und Industrie"',
     r'title={i18n.language === "en" ? "Internet tariffs for private households, businesses and industry" : "Internettarife für Privathaushalte, Gewerbe und Industrie"}'),

    # Criteria
    (r'desc: "Grundpreis und Arbeitspreis gemeinsam auf den erwarteten Jahresverbrauch beziehen."',
     r'desc: i18n.language === "en" ? "Relate the basic price and energy price together to the expected annual consumption." : "Grundpreis und Arbeitspreis gemeinsam auf den erwarteten Jahresverbrauch beziehen."'),
     
    (r'desc: "Prüfen, wie lange Sie gebunden sind und wann ein weiterer Wechsel möglich wäre."',
     r'desc: i18n.language === "en" ? "Check how long you are bound and when another switch would be possible." : "Prüfen, wie lange Sie gebunden sind und wann ein weiterer Wechsel möglich wäre."'),
     
    (r'desc: "Einmalige Boni getrennt von den laufenden Kosten im Folgejahr bewerten."',
     r'desc: i18n.language === "en" ? "Evaluate one-off bonuses separately from the running costs in the following year." : "Einmalige Boni getrennt von den laufenden Kosten im Folgejahr bewerten."'),

    # Paragraphs (shared)
    (r'>Ein niedriger Arbeitspreis allein macht noch keinen guten Stromvertrag. Für einen belastbaren Vergleich zählen die voraussichtlichen Jahreskosten: Arbeitspreis, Grundpreis und mögliche Boni müssen gemeinsam betrachtet werden. Ebenso wichtig sind Laufzeit, Kündigungsfrist, Zahlungsweise und der genaue Umfang einer Preisgarantie.<',
     r'>{i18n.language === "en" ? "A low energy price alone does not make a good electricity contract. For a reliable comparison, the prospective annual costs count: energy price, basic price and possible bonuses must be considered together. Term, cancellation period, payment method and the exact scope of a price guarantee are equally important." : "Ein niedriger Arbeitspreis allein macht noch keinen guten Stromvertrag. Für einen belastbaren Vergleich zählen die voraussichtlichen Jahreskosten: Arbeitspreis, Grundpreis und mögliche Boni müssen gemeinsam betrachtet werden. Ebenso wichtig sind Laufzeit, Kündigungsfrist, Zahlungsweise und der genaue Umfang einer Preisgarantie."}<'),
     
    (r'>Energie Alemi prüft Ihre aktuelle Rechnung und ordnet die Angebote so ein, dass Sie nicht nur einen kurzfristigen Aktionspreis sehen. Ziel ist eine nachvollziehbare Entscheidung, die zu Ihrem Verbrauch und Ihrer gewünschten Flexibilität passt.<',
     r'>{i18n.language === "en" ? "Energie Alemi checks your current bill and categorizes the offers so that you don\'t just see a short-term promotional price. The goal is a comprehensible decision that suits your consumption and your desired flexibility." : "Energie Alemi prüft Ihre aktuelle Rechnung und ordnet die Angebote so ein, dass Sie nicht nur einen kurzfristigen Aktionspreis sehen. Ziel ist eine nachvollziehbare Entscheidung, die zu Ihrem Verbrauch und Ihrer gewünschten Flexibilität passt."}<'),

    (r'>Ein niedriger Arbeitspreis pro kWh allein macht noch keinen guten Gasvertrag. Für einen aussagekräftigen Vergleich zählen die voraussichtlichen Jahreskosten: Arbeitspreis, Grundpreis und mögliche Boni müssen gemeinsam betrachtet werden. Ebenso wichtig sind Laufzeit, Kündigungsfrist, Zahlungsweise und der genaue Umfang einer Preisgarantie.<',
     r'>{i18n.language === "en" ? "A low energy price per kWh alone does not make a good gas contract. For a meaningful comparison, the prospective annual costs count: energy price, basic price and possible bonuses must be considered together. Term, cancellation period, payment method and the exact scope of a price guarantee are equally important." : "Ein niedriger Arbeitspreis pro kWh allein macht noch keinen guten Gasvertrag. Für einen aussagekräftigen Vergleich zählen die voraussichtlichen Jahreskosten: Arbeitspreis, Grundpreis und mögliche Boni müssen gemeinsam betrachtet werden. Ebenso wichtig sind Laufzeit, Kündigungsfrist, Zahlungsweise und der genaue Umfang einer Preisgarantie."}<'),

    (r'>Die beworbene Maximalgeschwindigkeit eines Internettarifs ist nur ein Faktor. Für eine belastbare Entscheidung sollten die voraussichtlichen Gesamtkosten über die Vertragslaufzeit betrachtet werden: Grundgebühr, Router-Miete, Bereitstellungsentgelte und mögliche Boni fließen in den Vergleich ein. Ebenso wichtig ist die Prüfung der am jeweiligen Wohn- oder Geschäftsstandort verfügbaren Technologien \(DSL, Kabel, Glasfaser\).<',
     r'>{i18n.language === "en" ? "The advertised maximum speed of an internet tariff is only one factor. For a reliable decision, the prospective total costs over the contract term should be considered: basic fee, router rental, provision fees and possible bonuses flow into the comparison. Equally important is checking the available technologies (DSL, cable, fiber) at the respective residential or business location." : "Die beworbene Maximalgeschwindigkeit eines Internettarifs ist nur ein Faktor. Für eine belastbare Entscheidung sollten die voraussichtlichen Gesamtkosten über die Vertragslaufzeit betrachtet werden: Grundgebühr, Router-Miete, Bereitstellungsentgelte und mögliche Boni fließen in den Vergleich ein. Ebenso wichtig ist die Prüfung der am jeweiligen Wohn- oder Geschäftsstandort verfügbaren Technologien (DSL, Kabel, Glasfaser)."}<'),
     
    (r'>Energie Alemi ordnet die verfügbaren Angebote so ein, dass Sie ein klares Bild der tatsächlichen Kosten und Leistungen erhalten. Ziel ist eine nachvollziehbare Entscheidung, die zu Ihrem Nutzungsverhalten und Ihrer gewünschten Flexibilität passt.<',
     r'>{i18n.language === "en" ? "Energie Alemi categorizes the available offers so that you get a clear picture of the actual costs and services. The goal is a comprehensible decision that suits your usage behavior and your desired flexibility." : "Energie Alemi ordnet die verfügbaren Angebote so ein, dass Sie ein klares Bild der tatsächlichen Kosten und Leistungen erhalten. Ziel ist eine nachvollziehbare Entscheidung, die zu Ihrem Nutzungsverhalten und Ihrer gewünschten Flexibilität passt."}<'),

    (r'Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite.',
     r'{i18n.language === "en" ? "Free advice at 0176 659 493 90 or via the contact page." : "Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite."}'),

    (r'>Kostenlose Beratung<',
     r'>{i18n.language === "en" ? "Free advice" : "Kostenlose Beratung"}<')
]

for town in ['Stolberg', 'Eschweiler', 'Herzogenrath', 'Würselen', 'Aachen']:
    t_en = town if town != 'Würselen' else 'Wuerselen'
    base_replacements.extend([
        # FAQs
        (rf'"Ist die Tarifberatung für Kundinnen und Kunden aus {town} kostenlos\?"',
         rf'i18n.language === "en" ? "Is the tariff advice for customers from {t_en} free of charge?" : "Ist die Tarifberatung für Kundinnen und Kunden aus {town} kostenlos?"'),
         
        (rf'"Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Vertragsabschluss erhalten Sie die relevanten Tarif- und Vertragsinformationen."',
         rf'i18n.language === "en" ? "Yes. Energie Alemi offers tariff advice free of charge. You will receive the relevant tariff and contract information before signing a contract." : "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Vertragsabschluss erhalten Sie die relevanten Tarif- und Vertragsinformationen."'),

        (rf'"Welche Stromanbieter sind an meiner Adresse in {town} verfügbar\?"',
         rf'i18n.language === "en" ? "Which electricity providers are available at my address in {t_en}?" : "Welche Stromanbieter sind an meiner Adresse in {town} verfügbar?"'),

        (rf'"Welche Gasanbieter sind an meiner Adresse in {town} verfügbar\?"',
         rf'i18n.language === "en" ? "Which gas providers are available at my address in {t_en}?" : "Welche Gasanbieter sind an meiner Adresse in {town} verfügbar?"'),

        (rf'"Welche Internetanbieter sind an meiner Adresse in {town} verfügbar\?"',
         rf'i18n.language === "en" ? "Which internet providers are available at my address in {t_en}?" : "Welche Internetanbieter sind an meiner Adresse in {town} verfügbar?"'),
         
        (rf'"Die verfügbaren Angebote hängen von der Lieferadresse und den aktuellen Tarifbedingungen ab. Für einen konkreten Vergleich werden deshalb Ihre Adresse und Verbrauchsdaten benötigt."',
         rf'i18n.language === "en" ? "The available offers depend on the delivery address and current tariff conditions. Your address and consumption data are therefore required for a concrete comparison." : "Die verfügbaren Angebote hängen von der Lieferadresse und den aktuellen Tarifbedingungen ab. Für einen konkreten Vergleich werden deshalb Ihre Adresse und Verbrauchsdaten benötigt."'),

        (rf'"Die verfügbaren Technologien \(DSL, Kabel, Glasfaser\) und Anbieter hängen von der genauen Adresse ab. Für einen konkreten Vergleich wird deshalb Ihr Standort in {town} benötigt."',
         rf'i18n.language === "en" ? "The available technologies (DSL, cable, fiber) and providers depend on the exact address. Your location in {t_en} is therefore required for a concrete comparison." : "Die verfügbaren Technologien (DSL, Kabel, Glasfaser) und Anbieter hängen von der genauen Adresse ab. Für einen konkreten Vergleich wird deshalb Ihr Standort in {town} benötigt."'),

        (rf'"Ein regulärer Lieferantenwechsel ist ein vertraglicher Vorgang; Netz und Zähler bleiben bestehen. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Stromlieferung ab."',
         rf'i18n.language === "en" ? "A regular change of supplier is a contractual process; network and meter remain. The statutory basic or replacement supply secures the electricity supply." : "Ein regulärer Lieferantenwechsel ist ein vertraglicher Vorgang; Netz und Zähler bleiben bestehen. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Stromlieferung ab."'),
         
        (rf'"Ein regulärer Lieferantenwechsel ist ein vertraglicher Vorgang; Netz und Zähler bleiben bestehen. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Gaslieferung ab."',
         rf'i18n.language === "en" ? "A regular change of supplier is a contractual process; network and meter remain. The statutory basic or replacement supply secures the gas supply." : "Ein regulärer Lieferantenwechsel ist ein vertraglicher Vorgang; Netz und Zähler bleiben bestehen. Die gesetzlich vorgesehene Grund- oder Ersatzversorgung sichert die Gaslieferung ab."'),
         
        (rf'"In den meisten Fällen kann ein nahtloser Übergang organisiert werden. Der neue Anbieter stimmt sich dafür mit dem bisherigen Versorger ab. Bei einem Wechsel der Technologie \(z. B. von DSL auf Kabel\) kann es in Ausnahmefällen zu kurzen Überschneidungen kommen."',
         rf'i18n.language === "en" ? "In most cases, a seamless transition can be organized. The new provider coordinates this with the previous supplier. When changing technology (e.g. from DSL to cable), short overlaps can occur in exceptional cases." : "In den meisten Fällen kann ein nahtloser Übergang organisiert werden. Der neue Anbieter stimmt sich dafür mit dem bisherigen Versorger ab. Bei einem Wechsel der Technologie (z. B. von DSL auf Kabel) kann es in Ausnahmefällen zu kurzen Überschneidungen kommen."'),

        (rf'"Im Normalfall übernimmt der neue Lieferant die Kündigung, wenn Sie ihn bevollmächtigen. Bei Sonderkündigungen, einem Umzug oder sehr kurzen Fristen kann ein anderes Vorgehen nötig sein."',
         rf'i18n.language === "en" ? "Normally, the new supplier takes over the cancellation if you authorize them to do so. A different procedure may be necessary for special cancellations, moving house or very short notice periods." : "Im Normalfall übernimmt der neue Lieferant die Kündigung, wenn Sie ihn bevollmächtigen. Bei Sonderkündigungen, einem Umzug oder sehr kurzen Fristen kann ein anderes Vorgehen nötig sein."'),

        (rf'"Der mögliche Lieferbeginn hängt vor allem von der Restlaufzeit, der Kündigungsfrist und vollständig vorliegenden Daten ab. Der technische Wechselprozess ersetzt keine vertragliche Kündigungsfrist."',
         rf'i18n.language === "en" ? "The possible start of delivery depends mainly on the remaining term, cancellation period and complete data. The technical switching process does not replace a contractual cancellation period." : "Der mögliche Lieferbeginn hängt vor allem von der Restlaufzeit, der Kündigungsfrist und vollständig vorliegenden Daten ab. Der technische Wechselprozess ersetzt keine vertragliche Kündigungsfrist."'),

        (rf'"Der Anschalttermin hängt von der verbleibenden Laufzeit des alten Vertrags, der Kündigungsfrist und der Art des Anschlusses ab. Ein Anbieterwechsel sollte deshalb mit ausreichendem Vorlauf geplant werden."',
         rf'i18n.language === "en" ? "The activation date depends on the remaining term of the old contract, the cancellation period and the type of connection. A change of provider should therefore be planned well in advance." : "Der Anschalttermin hängt von der verbleibenden Laufzeit des alten Vertrags, der Kündigungsfrist und der Art des Anschlusses ab. Ein Anbieterwechsel sollte deshalb mit ausreichendem Vorlauf geplant werden."'),

        (rf'"Berät Energie Alemi auch Gewerbe- und Industriekunden in {town}\?"',
         rf'i18n.language === "en" ? "Does Energie Alemi also advise commercial and industrial customers in {t_en}?" : "Berät Energie Alemi auch Gewerbe- und Industriekunden in {town}?"'),
         
        (rf'"Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden. Der Vergleich wird an Verbrauch, Vertragsziel und betriebliche Anforderungen angepasst."',
         rf'i18n.language === "en" ? "Yes. The advice is aimed at private, commercial and industrial customers. The comparison is adapted to consumption, contract goals and operational requirements." : "Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden. Der Vergleich wird an Verbrauch, Vertragsziel und betriebliche Anforderungen angepasst."'),
         
        (rf'"Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden. Der Vergleich wird an Nutzungsverhalten, Standort und betriebliche Anforderungen angepasst."',
         rf'i18n.language === "en" ? "Yes. The advice is aimed at private, commercial and industrial customers. The comparison is adapted to usage behavior, location and operational requirements." : "Ja. Die Beratung richtet sich an Privat-, Gewerbe- und Industriekunden. Der Vergleich wird an Nutzungsverhalten, Standort und betriebliche Anforderungen angepasst."'),

        (rf'"Kann ich beim Vergleich Ökostrom berücksichtigen\?"',
         rf'i18n.language === "en" ? "Can I consider green electricity in the comparison?" : "Kann ich beim Vergleich Ökostrom berücksichtigen?"'),
         
        (rf'"Kann ich beim Vergleich Ökogas oder Biogas berücksichtigen\?"',
         rf'i18n.language === "en" ? "Can I consider eco-gas or biogas in the comparison?" : "Kann ich beim Vergleich Ökogas oder Biogas berücksichtigen?"'),
         
        (rf'"Ja. Wenn Ihnen die Stromherkunft wichtig ist, können entsprechende Tarife in die Auswahl einbezogen werden. Entscheidend sind die konkreten Angaben und Bedingungen des jeweiligen Angebots."',
         rf'i18n.language === "en" ? "Yes. If the origin of electricity is important to you, corresponding tariffs can be included in the selection. The specific details and conditions of the respective offer are decisive." : "Ja. Wenn Ihnen die Stromherkunft wichtig ist, können entsprechende Tarife in die Auswahl einbezogen werden. Entscheidend sind die konkreten Angaben und Bedingungen des jeweiligen Angebots."'),
         
        (rf'"Ja. Tarife mit Biogas-Anteil oder Ökogas-Zertifikaten können in die Auswahl einbezogen werden. Entscheidend sind auch hier die konkreten Angaben und Bedingungen des jeweiligen Angebots."',
         rf'i18n.language === "en" ? "Yes. Tariffs with a biogas share or eco-gas certificates can be included in the selection. Here too, the specific details and conditions of the respective offer are decisive." : "Ja. Tarife mit Biogas-Anteil oder Ökogas-Zertifikaten können in die Auswahl einbezogen werden. Entscheidend sind auch hier die konkreten Angaben und Bedingungen des jeweiligen Angebots."'),

        # Section Headers & CTAs
        (rf'buttonText="Jetzt Stromtarife für {town} prüfen lassen"',
         rf'buttonText={{i18n.language === "en" ? "Have electricity tariffs for {t_en} checked now" : "Jetzt Stromtarife für {town} prüfen lassen"}}'),
         
        (rf'buttonText="Jetzt Gastarife für {town} prüfen lassen"',
         rf'buttonText={{i18n.language === "en" ? "Have gas tariffs for {t_en} checked now" : "Jetzt Gastarife für {town} prüfen lassen"}}'),
         
        (rf'buttonText="Jetzt Internettarife für {town} prüfen lassen"',
         rf'buttonText={{i18n.language === "en" ? "Have internet tariffs for {t_en} checked now" : "Jetzt Internettarife für {town} prüfen lassen"}}'),

        (rf'>Persönliche Tarifberatung für {town} – direkt aus Aachen<',
         rf'>{{i18n.language === "en" ? "Personal tariff advice for {t_en} – directly from Aachen" : "Persönliche Tarifberatung für {town} – direkt aus Aachen"}}<'),
         
        (rf'>Sie möchten Ihren Stromvertrag nicht allein anhand langer Vergleichslisten beurteilen\? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Bringen Sie Ihre letzte Stromrechnung mit oder halten Sie Jahresverbrauch und Vertragsdaten bereit.<',
         rf'>{{i18n.language === "en" ? "You don\'t want to evaluate your electricity contract based on long comparison lists alone? Energie Alemi advises customers from {t_en} by phone and in person at Alexianergraben 9 in 52064 Aachen. Bring your last electricity bill with you or have your annual consumption and contract data ready." : "Sie möchten Ihren Stromvertrag nicht allein anhand langer Vergleichslisten beurteilen? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Bringen Sie Ihre letzte Stromrechnung mit oder halten Sie Jahresverbrauch und Vertragsdaten bereit."}}<'),
         
        (rf'>Sie möchten Ihren Gasvertrag nicht allein anhand langer Vergleichslisten beurteilen\? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Bringen Sie Ihre letzte Gasrechnung mit oder halten Sie Jahresverbrauch und Vertragsdaten bereit.<',
         rf'>{{i18n.language === "en" ? "You don\'t want to evaluate your gas contract based on long comparison lists alone? Energie Alemi advises customers from {t_en} by phone and in person at Alexianergraben 9 in 52064 Aachen. Bring your last gas bill with you or have your annual consumption and contract data ready." : "Sie möchten Ihren Gasvertrag nicht allein anhand langer Vergleichslisten beurteilen? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Bringen Sie Ihre letzte Gasrechnung mit oder halten Sie Jahresverbrauch und Vertragsdaten bereit."}}<'),
         
        (rf'>Sie möchten Ihren Internettarif nicht allein anhand reiner Geschwindigkeitsangaben auswählen\? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Wir prüfen gemeinsam die an Ihrer Adresse verfügbaren Technologien und finden das passende Angebot.<',
         rf'>{{i18n.language === "en" ? "You don\'t want to choose your internet tariff based solely on speed specifications? Energie Alemi advises customers from {t_en} by phone and in person at Alexianergraben 9 in 52064 Aachen. Together we will check the technologies available at your address and find the right offer." : "Sie möchten Ihren Internettarif nicht allein anhand reiner Geschwindigkeitsangaben auswählen? Energie Alemi berät Kundinnen und Kunden aus {town} telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen. Wir prüfen gemeinsam die an Ihrer Adresse verfügbaren Technologien und finden das passende Angebot."}}<'),

        (rf'title="Häufige Fragen zu Stromtarifen in {town}"',
         rf'title={{i18n.language === "en" ? "Frequently asked questions about electricity tariffs in {t_en}" : "Häufige Fragen zu Stromtarifen in {town}"}}'),
         
        (rf'title="Häufige Fragen zu Gastarifen in {town}"',
         rf'title={{i18n.language === "en" ? "Frequently asked questions about gas tariffs in {t_en}" : "Häufige Fragen zu Gastarifen in {town}"}}'),
         
        (rf'title="Häufige Fragen zu Internettarifen in {town}"',
         rf'title={{i18n.language === "en" ? "Frequently asked questions about internet tariffs in {t_en}" : "Häufige Fragen zu Internettarifen in {town}"}}'),

        (rf'>Jetzt Stromtarife für {town} prüfen lassen<',
         rf'>{{i18n.language === "en" ? "Have electricity tariffs for {t_en} checked now" : "Jetzt Stromtarife für {town} prüfen lassen"}}<'),
         
        (rf'>Jetzt Gastarife für {town} prüfen lassen<',
         rf'>{{i18n.language === "en" ? "Have gas tariffs for {t_en} checked now" : "Jetzt Gastarife für {town} prüfen lassen"}}<'),
         
        (rf'>Jetzt Internettarife für {town} prüfen lassen<',
         rf'>{{i18n.language === "en" ? "Have internet tariffs for {t_en} checked now" : "Jetzt Internettarife für {town} prüfen lassen"}}<'),
         
        (rf'description="Stromtarife in {town} persönlich vergleichen: Energie Alemi prüft Vertrag, Verbrauch und Konditionen und begleitet auf Wunsch den Anbieterwechsel."',
         rf'description={{i18n.language === "en" ? "Compare electricity tariffs in {t_en} personally: Energie Alemi checks contract, consumption and conditions and accompanies the change of provider if desired." : "Stromtarife in {town} persönlich vergleichen: Energie Alemi prüft Vertrag, Verbrauch und Konditionen und begleitet auf Wunsch den Anbieterwechsel."}}'),
         
        (rf'description="Gastarife in {town} persönlich vergleichen: Energie Alemi prüft Vertrag, Verbrauch und Konditionen und begleitet auf Wunsch den Anbieterwechsel."',
         rf'description={{i18n.language === "en" ? "Compare gas tariffs in {t_en} personally: Energie Alemi checks contract, consumption and conditions and accompanies the change of provider if desired." : "Gastarife in {town} persönlich vergleichen: Energie Alemi prüft Vertrag, Verbrauch und Konditionen und begleitet auf Wunsch den Anbieterwechsel."}}'),
         
        (rf'description="Internettarife in {town} vergleichen: persönliche Beratung für DSL, Kabel und Glasfaser. Kostenlose Bedarfsanalyse bei Energie Alemi."',
         rf'description={{i18n.language === "en" ? "Compare internet tariffs in {t_en}: personal advice for DSL, cable and fiber. Free needs analysis at Energie Alemi." : "Internettarife in {town} vergleichen: persönliche Beratung für DSL, Kabel und Glasfaser. Kostenlose Bedarfsanalyse bei Energie Alemi."}}'),
    ])

for f in glob.glob("src/pages/*anbieter*.tsx"):
    with open(f, 'r') as file:
        content = file.read()
    
    for old, new in base_replacements:
        content = re.sub(old, new, content)
        
    with open(f, 'w') as file:
        file.write(content)

print("Remaining translations applied to town pages.")
