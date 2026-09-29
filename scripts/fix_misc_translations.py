import re

# Electricity.tsx fixes
with open('src/pages/Electricity.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'Um zu beurteilen, ob Ihr aktueller Stromtarif zu teuer ist, hilft ein Blick auf die durchschnittlichen Verbrauchswerte. Der Stromverbrauch hängt stark von der Haushaltsgröße{i18n.language === \'en\' ? \' and \' : \' und \'}der Art der Warmwasserbereitung ab.',
    '{i18n.language === \'en\' ? \'To assess whether your current electricity tariff is too expensive, a look at average consumption values helps. Electricity consumption depends heavily on the household size and the type of water heating.\' : \'Um zu beurteilen, ob Ihr aktueller Stromtarif zu teuer ist, hilft ein Blick auf die durchschnittlichen Verbrauchswerte. Der Stromverbrauch hängt stark von der Haushaltsgröße und der Art der Warmwasserbereitung ab.\'}'
)

content = content.replace(
    'Liegt Ihr Verbrauch deutlich darüber, helfen Energiespartipps. Liegen Ihre Kosten pro kWh jedoch deutlich über dem Marktdurchschnitt, sollten Sie umgehend den Tarif wechseln.',
    '{i18n.language === \'en\' ? \'If your consumption is significantly higher, energy-saving tips can help. However, if your costs per kWh are significantly above the market average, you should switch your tariff immediately.\' : \'Liegt Ihr Verbrauch deutlich darüber, helfen Energiespartipps. Liegen Ihre Kosten pro kWh jedoch deutlich über dem Marktdurchschnitt, sollten Sie umgehend den Tarif wechseln.\'}'
)

content = content.replace(
    'Viele Kunden fragen uns, ob sich der Umstieg auf Ökostrom lohnt. Die Antwort lautet ganz klar: Ja. Strom aus erneuerbaren Energien (wie Wind-, Sonnen- oder Wasserkraft) ist in den letzten Jahren enorm konkurrenzfähig geworden.',
    '{i18n.language === \'en\' ? \'Many customers ask us if switching to green electricity is worth it. The answer is clearly: Yes. Electricity from renewable energies (such as wind, solar, or hydro power) has become enormously competitive in recent years.\' : \'Viele Kunden fragen uns, ob sich der Umstieg auf Ökostrom lohnt. Die Antwort lautet ganz klar: Ja. Strom aus erneuerbaren Energien (wie Wind-, Sonnen- oder Wasserkraft) ist in den letzten Jahren enorm konkurrenzfähig geworden.\'}'
)

content = content.replace(
    'Oftmals sind reine Ökostromtarife sogar günstiger als die klassischen Graustrom-Mixe der regionalen Grundversorger. Ein Wechsel zu Ökostrom bedeutet also nicht, dass Sie mehr bezahlen müssen. Im Gegenteil: Sie schonen die Umwelt{i18n.language === \'en\' ? \' and \' : \' und \'}entlasten gleichzeitig Ihren Geldbeutel.',
    '{i18n.language === \'en\' ? \'Often, pure green electricity tariffs are even cheaper than the classic grey electricity mixes of regional basic suppliers. Switching to green electricity therefore does not mean you have to pay more. On the contrary: you protect the environment and relieve your wallet at the same time.\' : \'Oftmals sind reine Ökostromtarife sogar günstiger als die klassischen Graustrom-Mixe der regionalen Grundversorger. Ein Wechsel zu Ökostrom bedeutet also nicht, dass Sie mehr bezahlen müssen. Im Gegenteil: Sie schonen die Umwelt und entlasten gleichzeitig Ihren Geldbeutel.\'}'
)

content = content.replace(
    'In unserer Tarifberatung weisen wir echte Ökotarife (mit Zertifikaten wie ok-power oder Grüner Strom Label) transparent aus, sodass Sie eine informierte Entscheidung treffen können.',
    '{i18n.language === \'en\' ? \'In our tariff advice, we transparently identify genuine eco-tariffs (with certificates like ok-power or Grüner Strom Label) so that you can make an informed decision.\' : \'In unserer Tarifberatung weisen wir echte Ökotarife (mit Zertifikaten wie ok-power oder Grüner Strom Label) transparent aus, sodass Sie eine informierte Entscheidung treffen können.\'}'
)

content = content.replace(
    'Das größte Sparpotenzial haben Haushalte, die noch nie ihren Stromanbieter gewechselt haben{i18n.language === \'en\' ? \' and \' : \' und \'}sich in der sogenannten Grundversorgung befinden. Die Grundversorgung ist zwar flexibel, aber strukturell oft sehr teuer.',
    '{i18n.language === \'en\' ? \'The greatest savings potential is found in households that have never switched their electricity provider and are in the so-called basic supply. Although the basic supply is flexible, it is structurally often very expensive.\' : \'Das größte Sparpotenzial haben Haushalte, die noch nie ihren Stromanbieter gewechselt haben und sich in der sogenannten Grundversorgung befinden. Die Grundversorgung ist zwar flexibel, aber strukturell oft sehr teuer.\'}'
)

content = content.replace(
    'Auch nach einer Preiserhöhung Ihres aktuellen Anbieters oder bei einem anstehenden Umzug ist der optimale Zeitpunkt gekommen, um aktiv zu werden. Sie profitieren dann nicht nur von besseren Kilowattstundenpreisen, sondern oft auch von attraktiven Neukundenboni.',
    '{i18n.language === \'en\' ? \'Even after a price increase from your current provider or an upcoming move, the optimal time has come to take action. You then benefit not only from better kilowatt-hour prices, but often also from attractive new customer bonuses.\' : \'Auch nach einer Preiserhöhung Ihres aktuellen Anbieters oder bei einem anstehenden Umzug ist der optimale Zeitpunkt gekommen, um aktiv zu werden. Sie profitieren dann nicht nur von besseren Kilowattstundenpreisen, sondern oft auch von attraktiven Neukundenboni.\'}'
)

content = content.replace(
    'Erfahren Sie in unserem Ratgeber mehr darüber, wie Sie den <a href="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === \'en\' ? \'switch electricity providers correctly\' : \'Stromanbieter richtig wechseln\'}</a>{i18n.language === \'en\' ? \' and \' : \' und \'}Fristen optimal nutzen.',
    '{i18n.language === \'en\' ? \'Find out more in our guide on how to \' : \'Erfahren Sie in unserem Ratgeber mehr darüber, wie Sie den \'}<a href="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === \'en\' ? \'switch electricity providers correctly\' : \'Stromanbieter richtig wechseln\'}</a>{i18n.language === \'en\' ? \' and make optimal use of deadlines.\' : \' und Fristen optimal nutzen.\'}'
)

content = content.replace(
    'Energie Alemi bietet Ihnen den Komfort, nicht nur Ihren Stromtarif zu optimieren. Wir prüfen auf Wunsch auch Ihre Verträge für andere grundlegende Haushaltsausgaben.',
    '{i18n.language === \'en\' ? \'Energie Alemi offers you the convenience of not only optimizing your electricity tariff. We can also check your contracts for other basic household expenses upon request.\' : \'Energie Alemi bietet Ihnen den Komfort, nicht nur Ihren Stromtarif zu optimieren. Wir prüfen auf Wunsch auch Ihre Verträge für andere grundlegende Haushaltsausgaben.\'}'
)

content = content.replace(
    'Mit einem kombinierten Blick auf Ihre Kosten für <a href="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === \'en\' ? \'gas\' : \'Gas\'}</a>{i18n.language === \'en\' ? \' and \' : \' und \'}<a href="/internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === \'en\' ? \'internet (DSL & fiber optics)\' : \'Internet (DSL & Glasfaser)\'}</a> lässt sich die Haushaltskasse oft um mehrere hundert Euro im Jahr entlasten. Wir sind Ihr zentraler Ansprechpartner für alle Versorgungsverträge in Aachen{i18n.language === \'en\' ? \' and \' : \' und \'}bundesweit.',
    '{i18n.language === \'en\' ? \'With a combined look at your costs for \' : \'Mit einem kombinierten Blick auf Ihre Kosten für \'}<a href="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === \'en\' ? \'gas\' : \'Gas\'}</a>{i18n.language === \'en\' ? \' and \' : \' und \'}<a href="/internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === \'en\' ? \'internet (DSL & fiber optics)\' : \'Internet (DSL & Glasfaser)\'}</a>{i18n.language === \'en\' ? \', the household budget can often be relieved by several hundred euros a year. We are your central contact for all supply contracts in Aachen and nationwide.\' : \' lässt sich die Haushaltskasse oft um mehrere hundert Euro im Jahr entlasten. Wir sind Ihr zentraler Ansprechpartner für alle Versorgungsverträge in Aachen und bundesweit.\'}'
)

# And one more mix in Electricity.tsx line 144
content = content.replace(
    "<span>{t('elec.cross_p5', i18n.language === 'en' ? ' or read our guide on ' : ' oder in unserem Ratgeber zum ')}</span>",
    "<span>{i18n.language === 'en' ? ' or read our guide on ' : t('elec.cross_p5', ' oder in unserem Ratgeber zum ')}</span>"
)

with open('src/pages/Electricity.tsx', 'w', encoding='utf-8') as f:
    f.write(content)


# Gas.tsx fixes
with open('src/pages/Gas.tsx', 'r', encoding='utf-8') as f:
    gas_content = f.read()

gas_content = gas_content.replace(
    "<span>{t('gas.cross_p5', i18n.language === 'en' ? ' or in our ' : ' oder in unserem ')}</span>",
    "<span>{i18n.language === 'en' ? ' or read our useful ' : t('gas.cross_p5', ' oder lesen Sie unseren nützlichen ')}</span>"
)

gas_content = gas_content.replace(
    "<span>{t('gas.cross_p6', i18n.language === 'en' ? ' as well as our guide on ' : ' sowie unserem Ratgeber zum ')}</span>",
    "<span>{i18n.language === 'en' ? ' as well as our guide on ' : t('gas.cross_p6', ' sowie unserem Ratgeber zum ')}</span>"
)
with open('src/pages/Gas.tsx', 'w', encoding='utf-8') as f:
    f.write(gas_content)

# Update SEO.tsx for gas and internet title tags
with open('src/components/SEO.tsx', 'r', encoding='utf-8') as f:
    seo = f.read()

seo = seo.replace(
    "'/gas': 'Gas Tariffs Aachen | Independent Advice & Comparison'",
    "'/gas': 'Compare Gas Tariffs & Switch Provider | Energie Alemi'"
)
seo = seo.replace(
    "'/internet': 'Internet Providers Aachen | DSL, Cable & Fiber Optic Comparison'",
    "'/internet': 'Compare Internet Providers | DSL, Cable, Fibre | Energie Alemi'"
)
with open('src/components/SEO.tsx', 'w', encoding='utf-8') as f:
    f.write(seo)

# Contact.tsx
with open('src/pages/Contact.tsx', 'r', encoding='utf-8') as f:
    contact = f.read()

contact = contact.replace(
    'Dieses Feld leer lassen',
    '{i18n.language === \'en\' ? \'Leave this field blank\' : \'Dieses Feld leer lassen\'}'
)
# Ensure i18n is available
if 'const { i18n } = useTranslation();' not in contact and 'const { t, i18n } = useTranslation();' not in contact:
    contact = contact.replace('const { t } = useTranslation();', 'const { t, i18n } = useTranslation();')

with open('src/pages/Contact.tsx', 'w', encoding='utf-8') as f:
    f.write(contact)


# Ratgeber Breadcrumbs and Tags
# Breadcrumbs in ArticleLayout.tsx
with open('src/pages/Ratgeber/ArticleLayout.tsx', 'r', encoding='utf-8') as f:
    article_layout = f.read()

if 'const { i18n } = useTranslation();' not in article_layout and 'const { t, i18n } = useTranslation();' not in article_layout:
    article_layout = article_layout.replace('const { t } = useTranslation();', 'const { t, i18n } = useTranslation();')
    
article_layout = article_layout.replace(
    '<span itemProp="name">Ratgeber</span>',
    '<span itemProp="name">{i18n.language === \'en\' ? \'Guide\' : \'Ratgeber\'}</span>'
)
article_layout = article_layout.replace(
    '<span itemProp="name">{article.category}</span>',
    '<span itemProp="name">{i18n.language === \'en\' ? (article.category === \'Strom\' ? \'Electricity\' : article.category === \'Gas\' ? \'Gas\' : \'Internet\') : article.category}</span>'
)
article_layout = article_layout.replace(
    '<span className="bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium">{article.category}</span>',
    '<span className="bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium">{i18n.language === \'en\' ? (article.category === \'Strom\' ? \'Electricity\' : article.category === \'Gas\' ? \'Gas\' : \'Internet\') : article.category}</span>'
)

with open('src/pages/Ratgeber/ArticleLayout.tsx', 'w', encoding='utf-8') as f:
    f.write(article_layout)

