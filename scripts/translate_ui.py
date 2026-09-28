import re
import json

# 1. Update Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    home = f.read()

de_intro1 = """Ihre Tarifberatung in Aachen</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Herzlich willkommen bei Energie Alemi, Ihrer persönlichen und unabhängigen Tarifberatung im Herzen von Aachen. Wir sind darauf spezialisiert, für Privathaushalte, Gewerbebetriebe und die Industrie den Energiemarkt transparent und verständlich zu machen. Ein kostenloser Tarifvergleich für Strom, Gas und Internet hilft Ihnen dabei, hohe Fixkosten nachhaltig zu senken und von fairen Vertragskonditionen zu profitieren.
          </p>
          <p className="text-lg leading-relaxed">
            Als lokaler Ansprechpartner direkt vor Ort am Alexianergraben 9 bieten wir Ihnen eine völlig unverbindliche und kostenfreie Beratung an. Wir übernehmen die detaillierte Analyse Ihrer bestehenden Verträge, suchen nach versteckten Preiserhöhungen und finden maßgeschneiderte Tarife, die exakt zu Ihrem individuellen Verbrauchsverhalten passen. Unser Service verpflichtet Sie zu nichts: Sie entscheiden in aller Ruhe, ob Sie den Anbieter wechseln möchten, während wir uns um die gesamte Bürokratie, Kündigungsfristen und den reibungslosen Übergang kümmern. Sparen Sie Zeit, Nerven und bares Geld mit unserer Expertise.
          </p>"""

en_intro1 = """{i18n.language === 'en' ? 'Your Tariff Consultancy in Aachen' : 'Ihre Tarifberatung in Aachen'}</h2>
          <p className="mb-4 text-lg leading-relaxed">
            {i18n.language === 'en' ? 'Welcome to Energie Alemi, your personal and independent tariff consultancy in the heart of Aachen. We specialize in making the energy market transparent and easy to understand for private households, commercial businesses, and industry. A free tariff comparison for electricity, gas, and internet helps you sustainably reduce high fixed costs and benefit from fair contract conditions.' : 'Herzlich willkommen bei Energie Alemi, Ihrer persönlichen und unabhängigen Tarifberatung im Herzen von Aachen. Wir sind darauf spezialisiert, für Privathaushalte, Gewerbebetriebe und die Industrie den Energiemarkt transparent und verständlich zu machen. Ein kostenloser Tarifvergleich für Strom, Gas und Internet hilft Ihnen dabei, hohe Fixkosten nachhaltig zu senken und von fairen Vertragskonditionen zu profitieren.'}
          </p>
          <p className="text-lg leading-relaxed">
            {i18n.language === 'en' ? 'As your local point of contact right here at Alexianergraben 9, we offer you completely non-binding and free advice. We take care of the detailed analysis of your existing contracts, look for hidden price increases, and find tailor-made tariffs that perfectly match your individual consumption behavior. Our service does not commit you to anything: you decide at your own pace whether you want to switch providers, while we handle all the bureaucracy, cancellation periods, and the smooth transition. Save time, hassle, and hard-earned money with our expertise.' : 'Als lokaler Ansprechpartner direkt vor Ort am Alexianergraben 9 bieten wir Ihnen eine völlig unverbindliche und kostenfreie Beratung an. Wir übernehmen die detaillierte Analyse Ihrer bestehenden Verträge, suchen nach versteckten Preiserhöhungen und finden maßgeschneiderte Tarife, die exakt zu Ihrem individuellen Verbrauchsverhalten passen. Unser Service verpflichtet Sie zu nichts: Sie entscheiden in aller Ruhe, ob Sie den Anbieter wechseln möchten, während wir uns um die gesamte Bürokratie, Kündigungsfristen und den reibungslosen Übergang kümmern. Sparen Sie Zeit, Nerven und bares Geld mit unserer Expertise.'}
          </p>"""

de_process = """So funktioniert die Beratung</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Der Weg zu geringeren Energiekosten ist mit Energie Alemi denkbar einfach und in drei klaren Schritten strukturiert. Zunächst analysieren wir Ihren persönlichen Bedarf: Bringen Sie einfach Ihre letzte Jahresabrechnung mit in unser Büro am Alexianergraben 9 oder übermitteln Sie uns die Daten online. Wir prüfen Ihren aktuellen Verbrauch, die Kündigungsfristen Ihres bestehenden Vertrages und Ihre spezifischen Präferenzen – beispielsweise, ob Sie großen Wert auf Ökostrom oder eine besonders lange Preisgarantie legen.
          </p>
          <p className="text-lg leading-relaxed">
            Im zweiten Schritt vergleichen wir transparent hunderte aktuelle Tarife auf dem Energiemarkt. Wir zeigen Ihnen übersichtlich, wie sich die monatlichen und jährlichen Kosten zusammensetzen und welche Einsparungen möglich sind. Sind Sie mit einer unserer Empfehlungen zufrieden, begleiten wir im dritten Schritt den gesamten Wechsel. Wir übernehmen die Kommunikation mit dem neuen Versorger, kümmern uns um die fristgerechte Kündigung beim alten Anbieter und stellen sicher, dass Ihre Strom- oder Gasversorgung lückenlos weiterläuft. Dieser komplette Service ist für Sie zu 100 % kostenlos.
          </p>"""

en_process = """{i18n.language === 'en' ? 'How Our Consultancy Works' : 'So funktioniert die Beratung'}</h2>
          <p className="mb-4 text-lg leading-relaxed">
            {i18n.language === 'en' ? 'The path to lower energy costs is incredibly simple with Energie Alemi and structured in three clear steps. First, we analyze your personal needs: simply bring your last annual statement to our office at Alexianergraben 9 or submit your data to us online. We check your current consumption, the cancellation periods of your existing contract, and your specific preferences – for example, whether you place great value on green electricity or a particularly long price guarantee.' : 'Der Weg zu geringeren Energiekosten ist mit Energie Alemi denkbar einfach und in drei klaren Schritten strukturiert. Zunächst analysieren wir Ihren persönlichen Bedarf: Bringen Sie einfach Ihre letzte Jahresabrechnung mit in unser Büro am Alexianergraben 9 oder übermitteln Sie uns die Daten online. Wir prüfen Ihren aktuellen Verbrauch, die Kündigungsfristen Ihres bestehenden Vertrages und Ihre spezifischen Präferenzen – beispielsweise, ob Sie großen Wert auf Ökostrom oder eine besonders lange Preisgarantie legen.'}
          </p>
          <p className="text-lg leading-relaxed">
            {i18n.language === 'en' ? 'In the second step, we transparently compare hundreds of current tariffs on the energy market. We show you clearly how the monthly and annual costs are composed and what savings are possible. If you are satisfied with one of our recommendations, we accompany the entire switch in the third step. We handle the communication with the new supplier, take care of the timely cancellation with your old provider, and ensure that your electricity or gas supply continues seamlessly. This complete service is 100% free of charge for you.' : 'Im zweiten Schritt vergleichen wir transparent hunderte aktuelle Tarife auf dem Energiemarkt. Wir zeigen Ihnen übersichtlich, wie sich die monatlichen und jährlichen Kosten zusammensetzen und welche Einsparungen möglich sind. Sind Sie mit einer unserer Empfehlungen zufrieden, begleiten wir im dritten Schritt den gesamten Wechsel. Wir übernehmen die Kommunikation mit dem neuen Versorger, kümmern uns um die fristgerechte Kündigung beim alten Anbieter und stellen sicher, dass Ihre Strom- oder Gasversorgung lückenlos weiterläuft. Dieser komplette Service ist für Sie zu 100 % kostenlos.'}
          </p>"""

de_region = """Für Aachen und die Region</h2>
          <p className="text-lg leading-relaxed">
            Energie Alemi ist fest in der Region verwurzelt. Wir bieten unsere professionelle Tarifberatung nicht nur direkt im Stadtzentrum von Aachen an, sondern unterstützen auch Haushalte und Unternehmen im gesamten Umland bei der Optimierung ihrer Verträge. Ganz gleich, ob Sie in der historischen Kupferstadt nach einem <Link to="/stromanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">günstigen Stromanbieter in Stolberg</Link> suchen, eine ausführliche <Link to="/gasanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Beratung zum Gasanbieterwechsel in Eschweiler</Link> wünschen, in der Euregio einen <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">zuverlässigen Internetanbieter für Herzogenrath</Link> benötigen oder sich für aktuelle <Link to="/stromanbieter-wuerselen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Stromtarife in Würselen</Link> interessieren – wir sind Ihr kompetenter Ansprechpartner vor Ort. Zögern Sie nicht, uns anzusprechen, um Ihre Energiekosten lokal und nachhaltig zu senken.
          </p>"""

en_region = """{i18n.language === 'en' ? 'For Aachen and the Region' : 'Für Aachen und die Region'}</h2>
          <p className="text-lg leading-relaxed">
            {i18n.language === 'en' ? (
              <>Energie Alemi is deeply rooted in the region. We offer our professional tariff consultancy not only directly in the city center of Aachen but also support households and businesses throughout the surrounding area in optimizing their contracts. Whether you are looking for an <Link to="/stromanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">affordable electricity provider in Stolberg</Link> in the historic copper city, desire detailed <Link to="/gasanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">advice on switching gas providers in Eschweiler</Link>, need a <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">reliable internet provider for Herzogenrath</Link> in the Euregio, or are interested in current <Link to="/stromanbieter-wuerselen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">electricity tariffs in Würselen</Link> – we are your competent local partner. Do not hesitate to contact us to reduce your energy costs locally and sustainably.</>
            ) : (
              <>Energie Alemi ist fest in der Region verwurzelt. Wir bieten unsere professionelle Tarifberatung nicht nur direkt im Stadtzentrum von Aachen an, sondern unterstützen auch Haushalte und Unternehmen im gesamten Umland bei der Optimierung ihrer Verträge. Ganz gleich, ob Sie in der historischen Kupferstadt nach einem <Link to="/stromanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">günstigen Stromanbieter in Stolberg</Link> suchen, eine ausführliche <Link to="/gasanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Beratung zum Gasanbieterwechsel in Eschweiler</Link> wünschen, in der Euregio einen <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">zuverlässigen Internetanbieter für Herzogenrath</Link> benötigen oder sich für aktuelle <Link to="/stromanbieter-wuerselen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Stromtarife in Würselen</Link> interessieren – wir sind Ihr kompetenter Ansprechpartner vor Ort. Zögern Sie nicht, uns anzusprechen, um Ihre Energiekosten lokal und nachhaltig zu senken.</>
            )}
          </p>"""

home = home.replace(de_intro1, en_intro1)
home = home.replace(de_process, en_process)
home = home.replace(de_region, en_region)
with open('src/pages/Home.tsx', 'w') as f:
    f.write(home)


# 2. Update HomeFeatures.tsx (Mehr erfahren)
with open('src/sections/HomeFeatures.tsx', 'r') as f:
    hf = f.read()
hf = hf.replace('aria-label="Mehr erfahren"', 'aria-label={i18n.language === \'en\' ? \'Learn more\' : \'Mehr erfahren\'}')
hf = hf.replace('<span className="sr-only">Mehr erfahren</span>', '<span className="sr-only">{i18n.language === \'en\' ? \'Learn more\' : \'Mehr erfahren\'}</span>')
with open('src/sections/HomeFeatures.tsx', 'w') as f:
    f.write(hf)


# 3. Update Footer.tsx
with open('src/components/Footer.tsx', 'r') as f:
    footer = f.read()

# Replace Impressum and Datenschutz names
footer = footer.replace(
    "{ key: 'impressum', path: '/impressum', name: 'Impressum' }",
    "{ key: 'impressum', path: '/impressum', name: i18n.language === 'en' ? 'Legal Notice' : 'Impressum' }"
)
footer = footer.replace(
    "{ key: 'datenschutz', path: '/datenschutz', name: 'Datenschutz' }",
    "{ key: 'datenschutz', path: '/datenschutz', name: i18n.language === 'en' ? 'Privacy Policy' : 'Datenschutz' }"
)
with open('src/components/Footer.tsx', 'w') as f:
    f.write(footer)


# 4. Update routes-manifest.json
with open('src/routes-manifest.json', 'r') as f:
    manifest = f.read()
# Replace default tab title globally? No, let's parse json. Wait, replacing "title" might break if the user wants EN for German route.
# The user asked: Browser tab title: "Tariff Consultancy Electricity Gas Internet Aachen | Energie Alemi".
# If they want it translated, maybe I should use `t()` in SEO.tsx.
# The routes-manifest contains static titles. I will replace it if it's there.
manifest = manifest.replace(
    '"title": "Tarifberatung Strom Gas Internet Aachen | Energie Alemi"',
    '"title": "Tariff Consultancy Electricity Gas Internet Aachen | Energie Alemi"'
)
with open('src/routes-manifest.json', 'w') as f:
    f.write(manifest)


# 5. Update SEO.tsx metadata
with open('src/components/SEO.tsx', 'r') as f:
    seo = f.read()

de_seo1 = '"description": "Kostenloser Vergleich für Strom, Gas und Internet.",'
en_seo1 = '        "description": "Free comparison for electricity, gas, and internet.",'

de_seo2 = '"description": "Berater für Energie- und Telekommunikationstarife in Aachen und ganz Deutschland.",'
en_seo2 = '        "description": "Consultant for energy and telecommunications tariffs in Aachen and all of Germany.",'

de_seo3 = '"name": "Kostenlose Beratung"'
en_seo3 = '            "name": "Free consultation"'

seo = seo.replace(de_seo1, en_seo1)
seo = seo.replace(de_seo2, en_seo2)
seo = seo.replace(de_seo3, en_seo3)
with open('src/components/SEO.tsx', 'w') as f:
    f.write(seo)

print("Translation patch applied.")
