#!/usr/bin/env python3
"""
Final v8: Load ALL remaining German strings from remaining_german.json,
manually provide English translations for EVERY single one,
then apply to all 15 files.
"""
import os, re, glob, json

# Load remaining strings
with open('scripts/remaining_german.json') as f:
    remaining = json.load(f)

# Build the COMPLETE translation map
# Every string from the remaining list gets its translation
T = {
    # === GasanbieterAachen unique content ===
    "Tarife verständlich vergleichen": "Compare tariffs comprehensibly",
    "Wir stellen Kosten und Vertragsbedingungen übersichtlich gegenüber.": "We compare costs and contract conditions clearly.",
    "Persönlich vor Ort beraten": "Personal on-site advice",
    "Passend zum Bedarf auswählen": "Select to match your needs",
    "Verbrauch, Haushaltssituation und gewünschte Flexibilität fließen in die Auswahl ein.": "Consumption, household situation and desired flexibility are taken into account in the selection.",
    "Wir unterstützen Sie von der Prüfung Ihrer Unterlagen bis zum neuen Liefervertrag.": "We support you from checking your documents to the new supply contract.",
    "Verbrauch und Vertrag erfassen": "Record consumption and contract",
    "Wir prüfen Ihre letzte Gasrechnung, den Jahresverbrauch, den aktuellen Tarif und die Vertragsfristen.": "We check your last gas bill, annual consumption, current tariff and contract deadlines.",
    "Verfügbare Tarife vergleichen": "Compare available tariffs",
    "Wir stellen passende Angebote für Ihre Lieferadresse in Aachen gegenüber und erklären Preis sowie Vertragsbedingungen.": "We compare suitable offers for your delivery address in Aachen and explain price and contract conditions.",
    "Tarif auswählen und Wechsel beauftragen": "Select tariff and initiate switch",
    "Sie entscheiden in Ruhe. Anschließend wird der Lieferantenwechsel mit den erforderlichen Angaben angestoßen.": "You decide at your own pace. Then the supplier switch is initiated with the required information.",
    "Bestätigung prüfen und weiter begleiten": "Check confirmation and continue support",
    "Wir achten auf Lieferbeginn, Abschlag und Vertragsbestätigung und bleiben bei Rückfragen erreichbar.": "We pay attention to delivery start, installment and contract confirmation and remain available for questions.",
    "Die STAWAG ist der örtliche Grundversorger für Gas in Aachen. Sie veröffentlicht dafür den Tarif 'STAWAG Gas Basis'. Die Grundversorgung ist vom frei gewählten Sondervertrag zu unterscheiden.": "STAWAG is the local basic gas supplier in Aachen. They publish the tariff 'STAWAG Gas Basis' for this purpose. Basic supply must be distinguished from a freely chosen special contract.",
    "Die Regionetz GmbH betreibt das Gasnetz in Aachen. Der Netzbetreiber ist für die technische Infrastruktur zuständig und bleibt auch dann derselbe, wenn Sie Ihren Gasanbieter wechseln.": "Regionetz GmbH operates the gas network in Aachen. The network operator is responsible for the technical infrastructure and remains the same even when you switch gas providers.",
    "Kann ich meinen Gasanbieter in Aachen frei wählen?": "Can I freely choose my gas provider in Aachen?",
    "Wenn Sie selbst Vertragspartner für die Gaslieferung sind, können Sie grundsätzlich einen verfügbaren Anbieter wählen. Bei einer Zentralheizung im Mietshaus schließt häufig die Vermietung oder Hausverwaltung den Gasvertrag ab.": "If you are the contract partner for gas delivery, you can generally choose an available provider. With central heating in a rental building, the landlord or property management often signs the gas contract.",
    "Ein regulärer Anbieterwechsel ist ein vertraglicher Vorgang; die Leitungen bleiben unverändert. Die Energieversorgung bleibt laut Verbraucherinformation des Bundes während des Wechsels sichergestellt.": "A regular provider switch is a contractual process; the lines remain unchanged. According to federal consumer information, the energy supply remains guaranteed during the switch.",
    "Sie können einen anderen Lieferanten wählen, während der Netzbetreiber gleich bleibt. Der Wechsel ist ein vertraglicher Vorgang; Ihr Gasanschluss bleibt unberührt.": "You can choose a different supplier while the network operator remains the same. The switch is a contractual process; your gas connection remains unaffected.",
    "Nicht jeder Haushalt kann den Gasanbieter selbst wechseln. In einem Gebäude mit zentraler Heizungsanlage wird der Liefervertrag häufig von der Hausverwaltung geführt. Der eigene Wechsel setzt einen individuellen Gasliefervertrag voraus.": "Not every household can switch gas providers themselves. In a building with central heating, the supply contract is often managed by the property management. Switching yourself requires an individual gas supply contract.",
    "Wer eine eigene Gastherme und einen eigenen Gasliefervertrag hat, kann den Anbieter in der Regel selbst wählen. Bei einer zentralen Heizungsanlage liegt der Vertrag häufig bei der Hausverwaltung.": "If you have your own gas boiler and your own gas supply contract, you can usually choose the provider yourself. With a central heating system, the contract is often held by the property management.",
    "Wichtig ist außerdem, wer den Gasliefervertrag abgeschlossen hat. Bei einer Wohnung mit Zentralheizung liegt der Vertrag oft nicht beim einzelnen Mieter, sondern bei der Hausverwaltung.": "It is also important who signed the gas supply contract. In an apartment with central heating, the contract is often not with the individual tenant, but with the property management.",
    "Ein Gas-Grundversorgungsvertrag kann nach § 20 GasGVV mit einer Frist von zwei Wochen gekündigt werden. Bei Sonderverträgen gelten die Laufzeit und Kündigungsfrist des jeweiligen Vertrags.": "A basic gas supply contract can be terminated with two weeks' notice according to § 20 GasGVV. For special contracts, the term and cancellation period of the respective contract apply.",
    "Ein Vergleich kann besonders sinnvoll sein, wenn Ihre Preisgarantie bald endet, eine Preiserhöhung angekündigt wurde, Sie umziehen oder zum ersten Mal einen eigenen Gasvertrag abschließen.": "A comparison can be particularly useful if your price guarantee is about to expire, a price increase has been announced, you are moving, or you are signing your own gas contract for the first time.",
    "Ist ein eigener Vertrag vorhanden, bilden Jahresverbrauch, Lieferadresse und bestehende Konditionen die Vergleichsbasis.": "If you have your own contract, annual consumption, delivery address and existing conditions form the basis for comparison.",
    "In Aachen übernimmt die STAWAG die Gas-Grundversorgung. Die Grundversorgung ist der gesetzlich geregelte Basistarif des zuständigen Grundversorgers. Sie können aber einen anderen Anbieter wählen, sofern Sie einen eigenen Gasliefervertrag haben.": "In Aachen, STAWAG handles basic gas supply. Basic supply is the legally regulated basic tariff of the responsible basic supplier. However, you can choose a different provider if you have your own gas supply contract.",
    "Für das Gasnetz in Aachen ist die Regionetz GmbH zuständig. Sie betreibt die Netzinfrastruktur; der gewählte Gasanbieter nutzt dieses Netz für die Belieferung.": "Regionetz GmbH is responsible for the gas network in Aachen. They operate the network infrastructure; the chosen gas provider uses this network for delivery.",
    "Sie möchten wissen, welcher Gastarif zu Ihrem Verbrauch passt?": "Would you like to know which gas tariff suits your consumption?",
    
    # === GasanbieterStolberg unique ===
    "Ein sinnvoller Gasvergleich beginnt mit Ihrer tatsächlichen Ausgangslage": "A meaningful gas comparison starts with your actual situation",
    "Gasverträge ohne Lockpreis-Falle vergleichen": "Compare gas contracts without promotional price traps",
    "Der Gasvergleich beginnt mit Verbrauch und Gebäudesituation": "The gas comparison starts with consumption and building situation",
    "Persönliche Gasberatung für Stolberg – erreichbar in Aachen": "Personal gas advice for Stolberg – reachable in Aachen",
    "Jetzt Gastarife für Stolberg vergleichen": "Compare gas tariffs for Stolberg now",
    "Ein Tarifvergleich sollte nicht bei einem einzelnen Cent-Wert enden. Erst aus Arbeitspreis, Grundpreis und dem erwarteten Jahresverbrauch ergeben sich die voraussichtlichen Gesamtkosten. Dazu kommen Vertragslaufzeit, Kündigungsfrist, Zahlungsweise und Preisgarantie.": "A tariff comparison should not end with a single cent value. Only from the energy price, basic price and expected annual consumption do the projected total costs result. Contract duration, cancellation period, payment method and price guarantee are also important.",
    "Ein hoher Neukundenbonus kann ein Angebot im ersten Jahr attraktiv wirken lassen, sagt aber wenig über die laufenden Kosten im zweiten Vertragsjahr aus. Deshalb werden Boni in der Beratung gesondert betrachtet.": "A high new customer bonus can make an offer look attractive in the first year, but says little about the running costs in the second contract year. That's why bonuses are considered separately in the consultation.",
    "Energie Alemi prüft Ihre letzte Gasrechnung und erklärt die verfügbaren Optionen verständlich. Die Beratung ist für Privathaushalte, Gewerbe und Industrie in Stolberg kostenlos.": "Energie Alemi checks your last gas bill and explains the available options clearly. The advice is free for private households, businesses and industry in Stolberg.",
    
    # === GasanbieterEschweiler unique ===
    "Ein Online-Rechner zeigt Zahlen. Eine persönliche Beratung hilft dabei, diese Zahlen richtig einzuordnen. Energie Alemi unterstützt Kundinnen und Kunden aus Eschweiler beim Vergleich von Gasangeboten – verständlich, sachlich und an Ihrem tatsächlichen Verbrauch orientiert.": "An online calculator shows numbers. Personal advice helps you put these numbers into the right context. Energie Alemi supports customers from Eschweiler in comparing gas offers – clearly, objectively and based on your actual consumption.",
    "Ein günstiger Arbeitspreis wirkt attraktiv, entscheidet aber nicht allein über die tatsächlichen Jahreskosten. Auch der Grundpreis, die Laufzeit, Kündigungsfrist, Zahlungsweise und der Umfang einer Preisgarantie spielen eine Rolle.": "A low energy price looks attractive, but does not alone determine the actual annual costs. The basic price, term, cancellation period, payment method and scope of a price guarantee also play a role.",
    "Entscheidend bleiben Mindestlaufzeit, Kündigungsfrist und ein möglicher Sonderkündigungsgrund.": "Minimum term, cancellation period and a possible special cancellation reason remain decisive.",
    "Energie Alemi berät Kundinnen und Kunden aus Eschweiler telefonisch und persönlich am Alexianergraben 9 in 52064 Aachen.": "Energie Alemi advises customers from Eschweiler by phone and in person at Alexianergraben 9 in 52064 Aachen.",
    
    # === GasanbieterHerzogenrath unique ===
    "Zuerst klären, wer den Gasvertrag abgeschlossen hat": "First clarify who signed the gas contract",
    "Preisgarantie und Flexibilität gemeinsam bewerten": "Evaluate price guarantee and flexibility together",
    "Gasberatung für Herzogenrath – persönlich aus Aachen": "Gas advice for Herzogenrath – personally from Aachen",
    "Gastarife für Herzogenrath vergleichen": "Compare gas tariffs for Herzogenrath",
    "Energie Alemi vergleicht Gastarife für Kundinnen und Kunden aus Herzogenrath und erklärt die relevanten Unterschiede ohne pauschale Empfehlungen.": "Energie Alemi compares gas tariffs for customers from Herzogenrath and explains the relevant differences without general recommendations.",
    "Dauer, Umfang und mögliche Ausnahmen müssen im jeweiligen Angebot gelesen werden, damit die Preisgarantie die gewünschte Sicherheit tatsächlich bietet.": "Duration, scope and possible exceptions must be read in the respective offer so that the price guarantee actually provides the desired security.",
    "Bringen Sie einfach Ihre letzte Gasrechnung mit oder halten Sie Jahresverbrauch und aktuelle Vertragsdaten bereit. Wir prüfen Ihre Situation, vergleichen Angebote und erklären alles Wichtige.": "Simply bring your last gas bill or have your annual consumption and current contract data ready. We check your situation, compare offers and explain everything important.",
    
    # === GasanbieterWürselen unique ===
    "Gasberatung für Würselen – persönlich aus Aachen": "Gas advice for Würselen – personally from Aachen",
    "Gastarife für Würselen vergleichen": "Compare gas tariffs for Würselen",
    "Energie Alemi vergleicht Gastarife für Kundinnen und Kunden aus Würselen und erklärt die relevanten Unterschiede ohne pauschale Empfehlungen.": "Energie Alemi compares gas tariffs for customers from Würselen and explains the relevant differences without general recommendations.",
    
    # === Strom Herzogenrath/Würselen unique ===
    "Für Privathaushalte zählen neben dem Verbrauch häufig flexible Vertragsbedingungen, nachvollziehbare Abschlagszahlungen und eine übersichtliche Jahresabrechnung. Energie Alemi ordnet die verfügbaren Angebote so ein, dass Sie die Kosten klar beurteilen können.": "For private households, in addition to consumption, flexible contract conditions, comprehensible installment payments and a clear annual statement are often important. Energie Alemi categorizes the available offers so that you can clearly assess the costs.",
    "Bei Gewerbe und Industrie können Lastprofil, planbare Kosten, Vertragslaufzeit und betriebliche Abläufe stärker ins Gewicht fallen. Energie Alemi bespricht diese Punkte mit Ihnen und ordnet Angebote in den betrieblichen Kontext ein.": "For business and industry, load profile, plannable costs, contract duration and operational processes can carry more weight. Energie Alemi discusses these points with you and puts offers in the operational context.",
    "Sie halten Jahresabrechnung, aktuellen Vertrag, Lieferadresse und möglichst Zählernummer oder Marktlokations-ID bereit.": "You keep your annual statement, current contract, delivery address and, if possible, meter number or market location ID ready.",
    "Gesamtkosten prüfen": "Check total costs",
    "Arbeitspreis, Grundpreis, Boni und Zahlungsweise werden für den erwarteten Jahresverbrauch betrachtet.": "Energy price, basic price, bonuses and payment method are considered for the expected annual consumption.",
    "Angebot auswählen": "Choose an offer",
    "Sie wählen selbst; Energie Alemi unterstützt auf Wunsch bei Beauftragung und weiteren Schritten.": "You choose yourself; Energie Alemi supports you with the order and further steps if you wish.",
    "Tarif vergleichen": "Compare tariff",
    "Laufzeit, Kündigungsfrist, Preisgarantie und möglicher Lieferbeginn werden verständlich gegenübergestellt.": "Term, cancellation period, price guarantee and possible start of delivery are compared clearly.",
    "Ist die Stromtarifberatung für Herzogenrath kostenlos?": "Is the electricity tariff advice for Herzogenrath free of charge?",
    "Ist die Stromtarifberatung für Würselen kostenlos?": "Is the electricity tariff advice for Würselen free of charge?",
    "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Vor einem Abschluss erhalten Sie die wesentlichen Preis- und Vertragsinformationen.": "Yes. Energie Alemi offers tariff advice free of charge. You will receive the essential price and contract information before signing.",
    "Welche Stromanbieter gibt es in Herzogenrath?": "Which electricity providers are there in Herzogenrath?",
    "Welche Stromanbieter gibt es in Würselen?": "Which electricity providers are there in Würselen?",
    "Die konkrete Auswahl hängt von Lieferadresse, Verbrauch und dem aktuellen Marktangebot ab. Deshalb werden für den Vergleich Ihre Adresse und Verbrauchsdaten benötigt.": "The specific selection depends on delivery address, consumption and the current market offer. That's why your address and consumption data are needed for the comparison.",
    "Welche Angaben brauche ich für einen Stromvergleich?": "What information do I need for an electricity comparison?",
    "Hilfreich sind die letzte Jahresabrechnung, der aktuelle Vertrag, Jahresverbrauch, Lieferadresse, bisherige Kundennummer und, wenn vorhanden, Zählernummer oder Marktlokations-ID.": "The last annual statement, current contract, annual consumption, delivery address, previous customer number and, if available, meter number or market location ID are helpful.",
    "Kann ich bei einem Umzug nach Herzogenrath rückwirkend Strom anmelden?": "Can I register electricity retroactively when moving to Herzogenrath?",
    "Kann ich bei einem Umzug nach Würselen rückwirkend Strom anmelden?": "Can I register electricity retroactively when moving to Würselen?",
    "Eine rückwirkende Zuordnung sollte nicht eingeplant werden. Melden Sie Einzug und gewünschte Belieferung möglichst rechtzeitig beim neuen Lieferanten an.": "A retroactive assignment should not be planned. Register your move-in and desired supply with the new supplier as early as possible.",
    "Wird die Stromversorgung durch den Anbieterwechsel unterbrochen?": "Will the electricity supply be interrupted by changing providers?",
    "Ein regulärer Wechsel betrifft den Liefervertrag; Netzanschluss und Zähler bleiben bestehen. Die gesetzlich geregelte Grund- oder Ersatzversorgung sichert die Versorgung ab.": "A regular switch affects the supply contract; network connection and meter remain. The legally regulated basic or replacement supply secures the supply.",
    "Wer kündigt meinen bisherigen Stromvertrag?": "Who cancels my current electricity contract?",
    "Im Normalfall übernimmt der neue Lieferant die Kündigung, wenn Sie ihn dazu bevollmächtigen. Bei Sonderkündigungen oder Umzug kann ein anderes Vorgehen nötig sein.": "Normally, the new supplier handles the cancellation if you authorize them. A different procedure may be necessary for special cancellations or moving.",
    "Kann ich Ökostromtarife für Herzogenrath vergleichen?": "Can I compare green electricity tariffs for Herzogenrath?",
    "Kann ich Ökostromtarife für Würselen vergleichen?": "Can I compare green electricity tariffs for Würselen?",
    "Ja. Wenn die Stromherkunft für Sie wichtig ist, können entsprechende Angebote berücksichtigt werden. Entscheidend sind Angaben und Bedingungen des jeweiligen Anbieters.": "Yes. If the origin of electricity is important to you, corresponding offers can be considered. The details and conditions of the respective provider are decisive.",
    "Berät Energie Alemi auch Betriebe in Herzogenrath?": "Does Energie Alemi also advise businesses in Herzogenrath?",
    "Berät Energie Alemi auch Betriebe in Würselen?": "Does Energie Alemi also advise businesses in Würselen?",
    "Ja. Die Beratung gilt für Privat-, Gewerbe- und Industriekunden und berücksichtigt Verbrauch, Vertragsziel und betriebliche Anforderungen.": "Yes. The advice is for private, commercial and industrial customers and takes into account consumption, contract goals and operational requirements.",
    "Ein aussagekräftiger Vergleich beginnt mit dem Jahresverbrauch aus Ihrer letzten Abrechnung. Erst wenn Arbeitspreis und Grundpreis zusammen auf den Verbrauch bezogen werden, ergibt sich ein realistisches Bild der Jahreskosten.": "A meaningful comparison starts with the annual consumption from your last statement. Only when energy price and basic price are related to consumption together does a realistic picture of the annual costs emerge.",
    "Zusätzlich gehören Mindestlaufzeit, Kündigungsfrist, Zahlungsweise, Preisgarantie und Bonusbedingungen in die Entscheidung. Energie Alemi ordnet diese Punkte ein, damit der Vergleich nicht nur am Preis hängt.": "Additionally, minimum term, cancellation period, payment method, price guarantee and bonus conditions should be part of the decision. Energie Alemi puts these points in context so that the comparison doesn't just depend on price.",
    "Das Angebot richtet sich an Kundinnen und Kunden aus Herzogenrath-Mitte, Kohlscheid und Merkstein. Die Beratung erfolgt telefonisch oder persönlich am Standort von Energie Alemi in Aachen.": "The offer is aimed at customers from Herzogenrath-Mitte, Kohlscheid and Merkstein. Advice is provided by phone or in person at the Energie Alemi location in Aachen.",
    "Das Angebot richtet sich an Kundinnen und Kunden aus Würselen-Mitte, Bardenberg und Broichweiden. Die Beratung erfolgt telefonisch oder persönlich am Standort von Energie Alemi in Aachen.": "The offer is aimed at customers from Würselen-Mitte, Bardenberg and Broichweiden. Advice is provided by phone or in person at the Energie Alemi location in Aachen.",
    "So läuft die Stromberatung in vier Schritten": "This is how the electricity consultation works in four steps",
    "So läuft der Stromvergleich in vier Schritten": "This is how the electricity comparison works in four steps",
    "Der technische Lieferantenwechsel und die vertragliche Kündigung sind zwei verschiedene Dinge. Auch bei einem schnelleren Wechseltermin muss der bisherige Vertrag fristgerecht enden.": "The technical supplier switch and the contractual cancellation are two different things. Even with a faster switching date, the previous contract must end on time.",
    "Energie Alemi unterstützt Privat-, Gewerbe- und Industriekunden aus Herzogenrath telefonisch und persönlich in Aachen. Für eine unverbindliche Erstprüfung können Sie Ihre letzte Jahresabrechnung mitbringen oder Verbrauchsdaten bereithalten.": "Energie Alemi supports private, commercial and industrial customers from Herzogenrath by phone and in person in Aachen. For a non-binding initial review, you can bring your last annual statement or have consumption data ready.",
    "Energie Alemi unterstützt Privat-, Gewerbe- und Industriekunden aus Würselen telefonisch und persönlich in Aachen. Für eine unverbindliche Erstprüfung können Sie Ihre letzte Jahresabrechnung mitbringen oder Verbrauchsdaten bereithalten.": "Energie Alemi supports private, commercial and industrial customers from Würselen by phone and in person in Aachen. For a non-binding initial review, you can bring your last annual statement or have consumption data ready.",
    "Wir beraten Sie nicht nur in Würselen, sondern in der gesamten Städteregion. Vergleichen Sie auch Tarife für Aachen, Stolberg, Eschweiler und Herzogenrath.": "We advise you not only in Würselen, but throughout the entire city region. Also compare tariffs for Aachen, Stolberg, Eschweiler and Herzogenrath.",
    "Stromtarife für Herzogenrath vergleichen: Energie Alemi prüft Jahreskosten, Vertragsdetails und Wechseltermine. Persönliche Beratung für Privathaushalte, Gewerbe und Industrie.": "Compare electricity tariffs for Herzogenrath: Energie Alemi checks annual costs, contract details and switching dates. Personal advice for private households, businesses and industry.",
    "Stromtarife in Würselen vergleichen: Kosten, Vertragsdetails und Kündigungsfrist prüfen. Energie Alemi berät Privathaushalte, Gewerbe und Industrie – persönlich und vor Ort.": "Compare electricity tariffs in Würselen: check costs, contract details and cancellation period. Energie Alemi advises private households, businesses and industry – personally and on site.",
    "Stromanbieter in Herzogenrath vergleichen – Jahreskosten realistisch bewerten": "Compare electricity providers in Herzogenrath – evaluate annual costs realistically",
    "Stromanbieter in Würselen vergleichen – Konditionen klar bewerten": "Compare electricity providers in Würselen – evaluate conditions clearly",
    "Stromtarife für Herzogenrath prüfen lassen": "Have electricity tariffs for Herzogenrath checked",
    "Stromtarife für Würselen prüfen lassen": "Have electricity tariffs for Würselen checked",
    "Stromberatung für Herzogenrath – erreichbar in Aachen": "Electricity advice for Herzogenrath – reachable in Aachen",
    "Stromberatung für Würselen – erreichbar in Aachen": "Electricity advice for Würselen – reachable in Aachen",
    "Stromtarife für Herzogenrath mit den richtigen Daten vergleichen": "Compare electricity tariffs for Herzogenrath with the right data",
    "Stromtarife für Würselen mit den richtigen Daten vergleichen": "Compare electricity tariffs for Würselen with the right data",
    "Haushalte und Unternehmen haben unterschiedliche Prioritäten": "Households and businesses have different priorities",
    "Beim Umzug rechtzeitig Lieferadresse und Termin festlegen": "Report your delivery address and date in time when moving",
    "Wer nach Herzogenrath zieht oder innerhalb der Stadt umzieht, sollte die neue Lieferstelle frühzeitig melden.": "Anyone moving to Herzogenrath or within the city should report the new delivery point early.",
    "Wer nach Würselen zieht oder innerhalb der Stadt umzieht, sollte die neue Lieferstelle frühzeitig melden. Benötigen Sie zuvor eine Übersicht über Stromtarife in der Region?": "Anyone moving to Würselen or within the city should report the new delivery point early. Do you need an overview of electricity tariffs in the region beforehand?",
    
    # === Internet pages unique ===
    "Es gibt keine pauschal beste Lösung. Glasfaser bietet hohe Leistungsreserven, Kabel kann hohe Bandbreiten bieten, DSL ist häufig breit verfügbar. Was an Ihrer Adresse anliegt, prüfen wir gemeinsam.": "There is no one-size-fits-all best solution. Fiber offers high performance reserves, cable can provide high bandwidth, DSL is often widely available. We check together what is available at your address.",
    "Internet für Zuhause und Unternehmen in Aachen": "Internet for home and business in Aachen",
    "Internet für Zuhause und Unternehmen in Stolberg": "Internet for home and business in Stolberg",
    "Für Privatkunden": "For private customers",
    "Für Gewerbe und Industrie": "For business and industry",
    "Streaming, Videotelefonie, Gaming, Homeoffice und viele gleichzeitig verbundene Geräte stellen unterschiedliche Anforderungen an eine Internetverbindung. Wir ordnen Ihr Nutzungsprofil ein und zeigen, welcher Tarif dazu passt.": "Streaming, video calls, gaming, home office and many simultaneously connected devices place different demands on an internet connection. We classify your usage profile and show which tariff suits it.",
    "Für Unternehmen zählen neben der Bandbreite auch Stabilität, Erreichbarkeit, Laufzeit und passende Servicebedingungen. Energie Alemi prüft die Optionen und berät sachlich.": "For businesses, in addition to bandwidth, stability, reachability, term and suitable service conditions also count. Energie Alemi checks the options and advises objectively.",
    "Lassen Sie Ihren aktuellen Internetvertrag unverbindlich prüfen.": "Have your current internet contract checked without obligation.",
    "Die richtige Internetwahl beginnt mit einer Adressprüfung": "The right internet choice starts with an address check",
    "DSL, Kabel, Glasfaser oder Mobilfunklösung": "DSL, cable, fiber or mobile solution",
    "Persönliche Internetberatung für Stolberg": "Personal internet advice for Stolberg",
    "Jetzt Internetverfügbarkeit in Stolberg prüfen lassen": "Check internet availability in Stolberg now",
    "Internetverfügbarkeit in Stolberg prüfen lassen": "Check internet availability in Stolberg now",
    "Die Verfügbarkeit kann sich in Stolberg von Straße zu Straße und sogar zwischen Gebäuden unterscheiden. Deshalb beginnt unsere Beratung immer mit einer Adressprüfung.": "Availability in Stolberg can differ from street to street and even between buildings. That's why our advice always starts with an address check.",
    "DSL nutzt die Telefonleitung; die erreichbare Leistung hängt von Leitung und Standort ab. Kabel kann hohe Bandbreiten bieten, setzt aber einen entsprechenden Anschluss voraus. Glasfaser liefert hohe Reserven, ist aber nicht flächendeckend verfügbar. LTE oder 5G können ergänzen, wenn Kabel oder DSL nicht ausreichen.": "DSL uses the telephone line; achievable performance depends on the line and location. Cable can offer high bandwidth but requires a corresponding connection. Fiber delivers high reserves but is not available everywhere. LTE or 5G can supplement when cable or DSL are not sufficient.",
    "Ob in Atsch, Büsbach, Breinig, Mausbach, Vicht oder Zweifall: Energie Alemi prüft die verfügbaren Optionen für den jeweiligen Standort und erklärt die Unterschiede verständlich.": "Whether in Atsch, Büsbach, Breinig, Mausbach, Vicht or Zweifall: Energie Alemi checks the available options for the respective location and explains the differences clearly.",
    "Die Hausnummer entscheidet über die verfügbaren Anschlüsse": "The house number determines the available connections",
    "Internetberatung für Eschweiler – telefonisch oder in Aachen": "Internet advice for Eschweiler – by phone or in Aachen",
    "Internetberatung für Herzogenrath – telefonisch oder in Aachen": "Internet advice for Herzogenrath – by phone or in Aachen",
    "Internetberatung für Würselen – telefonisch oder in Aachen": "Internet advice for Würselen – by phone or in Aachen",
    "Internetverfügbarkeit in Eschweiler prüfen lassen": "Check internet availability in Eschweiler now",
    "Internetverfügbarkeit in Herzogenrath prüfen lassen": "Check internet availability in Herzogenrath now",
    "Internetverfügbarkeit in Würselen prüfen lassen": "Check internet availability in Würselen now",
    "Internettarife lassen sich nicht allein nach beworbener Höchstgeschwindigkeit auswählen. Zuerst muss geklärt werden, welche Technologie an Ihrer Adresse überhaupt verfügbar ist.": "Internet tariffs cannot be selected based on advertised maximum speed alone. First, it must be clarified which technology is actually available at your address.",
    "Internettarife werden häufig mit einer maximalen Bandbreite beworben. Ob diese Leistung an einem konkreten Gebäude verfügbar ist, hängt jedoch vom Anschlusstyp und der Infrastruktur ab.": "Internet tariffs are often advertised with a maximum bandwidth. However, whether this performance is available at a specific building depends on the connection type and infrastructure.",
    "Ein reduzierter Monatspreis gilt häufig nur für einen Aktionszeitraum. Für einen fairen Vergleich werden daher regulärer Monatspreis, Bereitstellungsentgelt, Routerkosten, Versand, mögliche Anschlussarbeiten und die Vertragsdauer gemeinsam betrachtet.": "A reduced monthly price often only applies for a promotional period. For a fair comparison, the regular monthly price, provision fee, router costs, shipping, possible connection work and contract duration are considered together.",
    "Ein günstiger Monatspreis allein macht noch keinen passenden Internettarif. Entscheidend sind die Verfügbarkeit an Ihrer Adresse, die tatsächlich nutzbare Geschwindigkeit und die Gesamtkosten über die Vertragslaufzeit.": "A cheap monthly price alone does not make a suitable internet tariff. What matters is the availability at your address, the actually usable speed and the total costs over the contract term.",
    "Ein günstiger Monatspreis allein macht noch keinen passenden Internettarif. Entscheidend sind die tatsächlich verfügbare Leistung an Ihrer Adresse und die Gesamtkosten über die Vertragslaufzeit.": "A cheap monthly price alone does not make a suitable internet tariff. What matters is the actually available performance at your address and the total costs over the contract term.",
    "Die Verfügbarkeit kann zwischen Eschweiler-Mitte, Dürwiß, Weisweiler, Röhe, Bergrath, Nothberg und weiteren Stadtteilen erheblich variieren.": "Availability can vary considerably between Eschweiler-Mitte, Dürwiß, Weisweiler, Röhe, Bergrath, Nothberg and other districts.",
    "Deshalb beginnt die Beratung für Herzogenrath-Mitte, Kohlscheid und Merkstein immer mit der vollständigen Anschlussadresse.": "That's why the advice for Herzogenrath-Mitte, Kohlscheid and Merkstein always starts with the complete connection address.",
    "Deshalb beginnt die Beratung für Würselen-Mitte, Bardenberg und Broichweiden immer mit der vollständigen Anschlussadresse.": "That's why the advice for Würselen-Mitte, Bardenberg and Broichweiden always starts with the complete connection address.",
    "Für Privathaushalte bestimmen Nutzerzahl, Homeoffice, Streaming, Gaming, Videotelefonie und gleichzeitig verbundene Geräte den tatsächlichen Bedarf. Energie Alemi hilft, das passende Leistungsniveau auszuwählen.": "For private households, the number of users, home office, streaming, gaming, video calls and simultaneously connected devices determine the actual need. Energie Alemi helps to select the right performance level.",
    "Für Gewerbe und Industrie können neben Download und Upload auch Stabilität, feste Erreichbarkeit, Vertragslaufzeit, Servicelevel und Ausfallsicherheit entscheidend sein.": "For business and industry, in addition to download and upload, stability, fixed reachability, contract term, service level and failover protection can also be decisive.",
    "Energie Alemi prüft die Optionen für Privathaushalte, Gewerbe und Industrie und erklärt, welche Unterschiede im Alltag oder im Betrieb wirklich relevant sind.": "Energie Alemi checks the options for private households, businesses and industry and explains which differences are really relevant in everyday life or in operations.",
    "Energie Alemi berät Kundinnen und Kunden aus der Eschweiler Innenstadt ebenso wie aus Dürwiß, Weisweiler, Kinzweiler, Stolberg-nahen Gebieten und weiteren Stadtteilen – telefonisch oder persönlich in Aachen.": "Energie Alemi advises customers from Eschweiler city center as well as from Dürwiß, Weisweiler, Kinzweiler, areas near Stolberg and other districts – by phone or in person in Aachen.",
    "Je nach Adresse können DSL, Kabel, Glasfaser oder funkbasierte Lösungen infrage kommen. Deshalb beginnt unsere Beratung immer mit einer Verfügbarkeitsprüfung.": "Depending on the address, DSL, cable, fiber or wireless solutions may be an option. That's why our advice always starts with an availability check.",
    "LTE oder 5G kann eine Alternative sein, wenn kein geeigneter Festnetzanschluss vorhanden ist. Hier zählen Netzabdeckung, verfügbare Bandbreite und Vertragsbedingungen.": "LTE or 5G can be an alternative if there is no suitable fixed-line connection. Here, network coverage, available bandwidth and contract conditions count.",
    "Sie möchten nicht selbst zwischen Verfügbarkeitschecks, Aktionspreisen und Vertragsdetails wechseln? Energie Alemi berät Sie telefonisch oder vor Ort in Aachen.": "Don't want to switch between availability checks, promotional prices and contract details yourself? Energie Alemi advises you by phone or on site in Aachen.",
    "Persönliche Beratung in Aachen anfragen": "Request personal advice in Aachen",
    "Vereinbaren Sie jetzt Ihre kostenlose Beratung bei Energie Alemi in Aachen.": "Schedule your free consultation with Energie Alemi in Aachen now.",
    
    # Additional FAQ answers that appear across internet/gas pages
    "Anschlussarten und erreichbare Geschwindigkeiten können sich selbst innerhalb einer Straße unterscheiden. Erst eine Prüfung der exakten Adresse zeigt die tatsächlich verfügbaren Optionen.": "Connection types and achievable speeds can differ even within the same street. Only a check of the exact address shows the actually available options.",
    "Bei einem rechtzeitig eingeleiteten Wechsel muss der bisherige Anbieter grundsätzlich bis zum abgeschlossenen Wechsel weiterversorgen. Ein kurzer Parallelbetrieb kann bei Technologiewechseln (z. B. DSL auf Kabel) auftreten.": "With a timely initiated switch, the previous provider must generally continue to supply until the switch is complete. Short parallel operation can occur with technology changes (e.g. DSL to cable).",
    "Bei einem rechtzeitig eingeleiteten Wechsel muss der bisherige Anbieter grundsätzlich weiterversorgen, bis der neue Vertrag beginnt. Bei einem Technologiewechsel (z. B. DSL auf Glasfaser) kann es in Einzelfällen zu kurzen Überschneidungen kommen.": "With a timely initiated switch, the previous provider must generally continue to supply until the new contract begins. With a technology change (e.g. DSL to fiber), short overlaps may occur in individual cases.",
    
    # General shared
    "Kostenlose Beratung": "Free advice",
    "Für die erste Prüfung benötigt Energie Alemi die vollständige Anschlussadresse und möglichst die Daten des bestehenden Vertrags.": "For the initial review, Energie Alemi needs the complete connection address and, if possible, the data of the existing contract.",
    "Wer mehrere Tariflisten vergleicht, sieht viele Zahlen, aber nicht automatisch den passenden Vertrag. Energie Alemi ordnet die Angebote ein und erklärt, welche Konditionen langfristig zählen.": "Anyone comparing multiple tariff lists sees many numbers, but not automatically the right contract. Energie Alemi puts the offers in context and explains which conditions matter in the long term.",
    "Energie Alemi berücksichtigt außerdem Laufzeit, Kündigungsfrist, Zahlungsweise und Umfang der Preisgarantie. So lässt sich das gesamte Bild eines Angebots beurteilen.": "Energie Alemi also takes into account term, cancellation period, payment method and scope of the price guarantee. This allows the overall picture of an offer to be assessed.",
    "Die Beratung richtet sich an Kundinnen und Kunden aus dem gesamten Eschweiler Stadtgebiet – unter anderem aus Dürwiß, Weisweiler, Kinzweiler, Stolberg-nahen Gebieten und weiteren Stadtteilen. Die persönliche Beratung findet telefonisch oder am Standort von Energie Alemi in Aachen statt.": "The advice is aimed at customers from the entire Eschweiler city area – including Dürwiß, Weisweiler, Kinzweiler, areas near Stolberg and other districts. Personal advice takes place by phone or at the Energie Alemi location in Aachen.",
    "Ein Online-Rechner liefert viele Zahlen, aber nicht immer eine klare Entscheidung. Energie Alemi unterstützt Kundinnen und Kunden aus Stolberg beim Vergleich von Gasangeboten – verständlich, sachlich und an Ihrem tatsächlichen Verbrauch orientiert.": "An online calculator provides many numbers, but not always a clear decision. Energie Alemi supports customers from Stolberg in comparing gas offers – clearly, objectively and based on your actual consumption.",
}

def process_file(filepath, town_de, town_en):
    with open(filepath, 'r') as f:
        content = f.read()
    original = content
    
    # PASS 1: Object literal values
    def replace_obj_val(match):
        key = match.group(1)
        text = match.group(2)
        if 'i18n' in match.group(0):
            return match.group(0)
        en = T.get(text)
        if en:
            escaped_text = text.replace('"', '\\"')
            escaped_en = en.replace('"', '\\"')
            return f'{key}: i18n.language === "en" ? "{escaped_en}" : "{escaped_text}"'
        return match.group(0)
    
    content = re.sub(r'((?:title|description|question|answer|subtitle|desc)): "([^"]+)"', replace_obj_val, content)
    
    # PASS 2: JSX prop values
    def replace_prop_val(match):
        prop = match.group(1)
        text = match.group(2)
        if 'i18n' in text:
            return match.group(0)
        en = T.get(text)
        if en:
            return f'{prop}={{i18n.language === "en" ? "{en}" : "{text}"}}'
        return match.group(0)
    
    content = re.sub(r'((?:title|description|subtitle|badgeText|buttonText))="([^"]+)"', replace_prop_val, content)
    
    # PASS 3: Bare JSX text nodes
    lines = content.split('\n')
    for i, line in enumerate(lines):
        s = line.strip()
        if not s or len(s) < 5: continue
        if 'i18n' in line or s.startswith('<') or s.startswith('{') or s.startswith('//') or s.startswith('import') or s.startswith('const') or s.startswith('export') or s.startswith('return') or s.startswith('}') or s.startswith(')') or s.startswith('];') or s.startswith('onClick'): continue
        if '<Link' in line or '<span' in line or 'className' in line: continue
        en = T.get(s)
        if en:
            indent = re.match(r'^(\s*)', line).group(1)
            lines[i] = f'{indent}{{i18n.language === "en" ? "{en}" : "{s}"}}'
    content = '\n'.join(lines)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

towns = [('Aachen','Aachen'),('Stolberg','Stolberg'),('Eschweiler','Eschweiler'),('Herzogenrath','Herzogenrath'),('Würselen','Würselen')]
for prefix in ['Stromanbieter','Gasanbieter','Internetanbieter']:
    for td,te in towns:
        fname = f"{prefix}{'Wuerselen' if td=='Würselen' else td}"
        fpath = f"src/pages/{fname}.tsx"
        if os.path.exists(fpath):
            changed = process_file(fpath, td, te)
            print(f"{'✅' if changed else '⏭️ '} {os.path.basename(fpath)}")

print("\nDone.")
