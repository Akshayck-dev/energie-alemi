import re

def process_file(filepath, translated_faqs_str, translated_jsx_str, custom_h1_en):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "useTranslation" not in content:
        content = content.replace("import { Link }", "import { Link } from 'react-router';\nimport { useTranslation } from 'react-i18next';")
    
    match = re.search(r'export default function (\w+)\(\)', content)
    if not match: return
    comp_name = match.group(1)
    
    if "const { i18n } = useTranslation();" not in content:
        content = re.sub(r'(export default function ' + comp_name + r'\(\) \{\n)', r'\1  const { i18n } = useTranslation();\n', content)
        
    faq_pattern = r'(const faqs = \[.*?\];)'
    faq_match = re.search(faq_pattern, content, re.DOTALL)
    if faq_match:
        original_faqs = faq_match.group(1)
        new_faqs = f"const faqsDe = {original_faqs.replace('const faqs = ', '')}\n  const faqsEn = {translated_faqs_str};\n  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;"
        content = content.replace(original_faqs, new_faqs)
        
    # Replace ArticleLayout customH1 (if exists)
    content = re.sub(r'customH1="(.*?)"', r'customH1={i18n.language === \'en\' ? "' + custom_h1_en + r'" : "\1"}', content)
    
    layout_start_pattern = r'(<ArticleLayout[^>]*>)'
    layout_end_pattern = r'(</ArticleLayout>)'
    
    parts = re.split(layout_start_pattern, content)
    if len(parts) >= 3:
        before_layout = parts[0]
        layout_tag = parts[1]
        after_layout_tag = "".join(parts[2:])
        
        inner_parts = re.split(layout_end_pattern, after_layout_tag)
        if len(inner_parts) >= 3:
            original_inner = inner_parts[0]
            layout_end_tag = inner_parts[1]
            after_layout = "".join(inner_parts[2:])
            
            wrapped_inner = f"\n      {{i18n.language === 'en' ? (\n        <>\n{translated_jsx_str}\n        </>\n      ) : (\n        <>{original_inner}</>\n      )}}\n    "
            
            content = before_layout + layout_tag + wrapped_inner + layout_end_tag + after_layout
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# File 10: StromkostenBerechnen.tsx
faqs_en_10 = """[
    {
      question: "How do I calculate the monthly installment?",
      answer: "Divide the expected annual costs by twelve. Keep in mind that the provider may set the installment differently based on a consumption forecast and previous data."
    },
    {
      question: "Which price is more important: unit or base price?",
      answer: "With high consumption, the unit price usually has more weight. With very low consumption, a low base price can be decisive. The total annual costs are always decisive."
    },
    {
      question: "Does the bonus belong in the comparison?",
      answer: "Yes, but separately. Show the costs of the first year with the bonus and the regular costs without the bonus. This avoids a distorted long-term comparison."
    },
  ]"""

jsx_en_10 = """
      <h2>The annual costs consist of the unit price and the base price</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        The simple formula is: Annual consumption in kWh × Unit price in euros per kWh + annual base price = expected electricity costs per year. For a realistic calculation, both price components must be taken into account.
      </p>
      <p>
        Example: 2,500 kWh × 0.35 Euro/kWh + 120 Euro base price equals 995 Euros per year. The calculated monthly value is around 82.92 Euros. This example is not a tariff offer.
      </p>
      <h2>Convert cents to euros correctly</h2>
      <p>
        Tariffs usually state the unit price in cents per kilowatt-hour. Divide the cent value by 100. 35 cents/kWh becomes 0.35 euros/kWh. Only then is it multiplied by the annual consumption.
      </p>
      <h2>Formula: Annual costs = (Annual consumption × Unit price/100) + Base price</h2>
      <p>
        With a monthly base price, this is first multiplied by twelve. A base price of 10 euros per month equals 120 euros per year.
      </p>
      <h2>Calculation examples for different households</h2>
      <h2>With an example tariff of 35 cents/kWh and 120 euros base price, the results are:</h2>
      <h2>1,200 kWh: 540 euros/year</h2>
      <h2>1,900 kWh: 785 euros/year</h2>
      <h2>2,600 kWh: 1,030 euros/year</h2>
      <h2>3,800 kWh: 1,450 euros/year</h2>
      <p>
        The examples show: With low consumption, the base price weighs relatively heavier. With high consumption, the unit price is usually the larger lever.
      </p>
      <h2>Bonus and installment are not the same as tariff costs</h2>
      <p>
        An instant bonus or new customer bonus can lower the costs in the first year but is often not permanent. Therefore, compare both the costs in the first contract year and the costs without a bonus. Check the conditions for payout and minimum supply time.
      </p>
      <p>
        The monthly installment is only an advance payment. The final invoice is based on the actual consumption and the agreed prices. A low installment does not automatically make a tariff cheap; it can later lead to an additional payment.
      </p>
      <h2>Local example: Basic electricity supply in Aachen</h2>
      <p>
        The published STAWAG price sheet for "Strom Basis" states a gross unit price of 37.13 cents/kWh and a gross base price of 114 euros per year for household needs from January 1, 2026. For 2,500 kWh, this arithmetically results in 1,042.25 euros per year. Prices can change; always check the currently valid price sheet before making a decision.
      </p>
      <h2>How to compare two tariffs fairly</h2>
      <p>
        Use the same annual consumption for both tariffs.
      </p>
      <p>
        Add up the unit price and the base price.
      </p>
      <p>
        Compare costs with and without a bonus.
      </p>
      <p>
        Check the contract term, notice period, and price guarantee.
      </p>
      <p>
        Evaluate not only the first year but also the follow-up costs.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi calculates your expected annual costs based on the last bill and clearly explains the contract conditions.</p>
        <Link to="/contact">
          <Button variant="primary">Contact us now</Button>
        </Link>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-4">Further Information</h3>
        <ul className="flex flex-col gap-2">
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Comparison</Link></li>
          <li><Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Electricity Providers</Link></li>
          <li><Link to="/ratgeber/stromverbrauch-1-person" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Consumption 1 Person</Link></li>
          <li><Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Providers Aachen</Link></li>
        </ul>
      </div>
"""


# File 11: Stromverbrauch1Person.tsx
faqs_en_11 = """[
    {
      question: "Are 1,500 kWh a lot for one person?",
      answer: "In an apartment without electrical water heating, the value is above the electricity mirror average of around 1,200 kWh, but can be plausible depending on the equipment. In a detached house, 1,500 kWh is rather low."
    },
    {
      question: "Why is the per-capita consumption higher alone?",
      answer: "Many devices cause a base load regardless of the number of people. A refrigerator, router, or stove are used together in larger households; a single person bears this consumption alone."
    },
    {
      question: "How do I recognize electrical hot water?",
      answer: "Typical indications are an instantaneous water heater in the bathroom or a boiler under the sink. In case of doubt, rental documents, the landlord, or property management can help."
    },
  ]"""

jsx_en_11 = """
      <h2>For one person, the type of housing and hot water are decisive</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        According to the comparative values of the electricity mirror, a 1-person household consumes on average around 1,200 kilowatt-hours (kWh) per year in an apartment and around 1,800 kWh in a detached house, each without electrical water heating. If hot water is generated via a boiler or instantaneous water heater, the comparative values increase to around 1,600 and 2,100 kWh per year, respectively.
      </p>
      <p>
        These figures are a guide, not a fixed upper limit. Working from home, old refrigerators, an aquarium, air conditioners, or frequent cooking can increase consumption. Conversely, a small, efficiently equipped apartment can be significantly lower.
      </p>
      <h2>Classifying benchmarks correctly</h2>
      <h2>Apartment, hot water not electrical: approx. 1,200 kWh/year</h2>
      <h2>Apartment, hot water electrical: approx. 1,600 kWh/year</h2>
      <h2>Detached house, hot water not electrical: approx. 1,800 kWh/year</h2>
      <h2>Detached house, hot water electrical: approx. 2,100 kWh/year</h2>
      <p>
        In a detached house, one person bears additional base loads alone, such as for a heating pump, exterior lighting, garage, or building services. Therefore, the consumption is usually higher there than in an apartment in a multi-family house.
      </p>
      <h2>How to read your own consumption</h2>
      <p>
        The most reliable value is on the last annual statement. Compare the reading period and actual days before comparing the value with an annual benchmark. With a shorter period, the consumption can only be roughly extrapolated, because winter and summer can turn out differently.
      </p>
      <p>
        If no statement is available, a monthly meter reading helps. The difference between two readings shows the consumption in the period. Noticeable jumps can then be compared with usage, vacation, new devices, or electrical water heating.
      </p>
      <h2>The biggest levers in a single household</h2>
      <p>
        Refrigerator, freezer, washing machine, dryer, and consumer electronics often make up a large part of household electricity. In a home office, a monitor, computer, and router are added. It makes sense to first check the continuous consumers:
      </p>
      <h2>Adjust the temperature of refrigerators and freezers appropriately;</h2>
      <h2>Check old devices with a power meter;</h2>
      <h2>Reduce stand-by consumption via switchable sockets;</h2>
      <h2>Fully load the washing machine and use eco programs;</h2>
      <h2>Heat water in the kettle instead of on the stove;</h2>
      <p>
        Consciously control shower duration and temperature with electrical hot water.
      </p>
      <p>
        Not every new purchase pays off immediately. First, measure the real consumption and compare acquisition costs with the potential annual savings.
      </p>
      <h2>Deriving electricity costs from consumption</h2>
      <p>
        The annual electricity costs consist of consumption multiplied by the unit price plus the base price. At 1,200 kWh, an example unit price of 0.35 Euro/kWh, and 120 Euros base price, the result is 540 Euros per year. This is a calculation example, not a current tariff offer.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Do you want to know which tariff fits your actual single consumption? Energie Alemi compares unit price, base price, and contract terms free of charge.</p>
        <Link to="/contact">
          <Button variant="primary">Contact us now</Button>
        </Link>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-4">Further Information</h3>
        <ul className="flex flex-col gap-2">
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Calculate Electricity Costs</Link></li>
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Comparison</Link></li>
          <li><Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Contact</Link></li>
        </ul>
      </div>
"""

# File 12: Stromverbrauch2Personen.tsx
faqs_en_12 = """[
    {
      question: "Are 3,000 kWh too much for two people?",
      answer: "That depends on the type of housing and hot water. In a detached house or with electrical hot water, the value can be plausible. In an apartment without electrical water heating, it is significantly above average and should be checked."
    },
    {
      question: "Which consumption belongs in the tariff comparison?",
      answer: "Use the actual annual consumption from the last statement if possible. If it is missing, a suitable benchmark is better than an arbitrary estimate."
    },
    {
      question: "How often should I read the meter?",
      answer: "For ongoing control, a monthly reading makes sense. This way, changes become visible early and can be more easily assigned to a device or a change in usage."
    },
  ]"""

jsx_en_12 = """
      <h2>Two people do not consume twice as much as one</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        For two people, the electricity mirror states an average of around 1,900 kWh per year in an apartment and around 2,700 kWh in a detached house, each without electrical water heating. With a boiler or instantaneous water heater, the comparative values are around 2,500 and 3,200 kWh per year, respectively.
      </p>
      <p>
        Consumption does not increase proportionally to the number of people. Refrigerator, router, lighting, or television are used together. This reduces the average consumption per person compared to a single household.
      </p>
      <h2>Benchmarks for two people</h2>
      <h2>Apartment, hot water not electrical: approx. 1,900 kWh/year</h2>
      <h2>Apartment, hot water electrical: approx. 2,500 kWh/year</h2>
      <h2>Detached house, hot water not electrical: approx. 2,700 kWh/year</h2>
      <h2>Detached house, hot water electrical: approx. 3,200 kWh/year</h2>
      <p>
        For a fair classification, the type of housing and hot water type must match. A value of 2,800 kWh can be normal in an apartment with electrical hot water, but a reason for review in a comparable apartment without an instantaneous water heater.
      </p>
      <h2>Why consumption can be higher or lower</h2>
      <p>
        Working from home on several days, two powerful computers, a tumble dryer, or a second refrigerator increase consumption. Permanently running pumps, old freezers, and electrical auxiliary heaters also carry significant weight. The number of small chargers is often less relevant.
      </p>
      <p>
        With an unexpectedly high value, first check devices with high power or a long runtime. A simple power meter shows how much plug-in devices need within 24 hours or a week.
      </p>
      <h2>Four steps for a reliable comparison</h2>
      <p>
        Read the annual consumption on the last bill.
      </p>
      <p>
        Clarify whether hot water is generated electrically.
      </p>
      <p>
        Only compare with the same type of housing.
      </p>
      <p>
        Observe the meter monthly if the value is conspicuous.
      </p>
      <p>
        A single high monthly reading does not necessarily mean a problem. Season, vacation, home office, and new devices should also be considered. A permanently rising basic consumption, on the other hand, deserves attention.
      </p>
      <h2>Calculation example for the annual costs</h2>
      <p>
        At 1,900 kWh annual consumption, 0.35 euros unit price per kWh, and 120 euros base price, the arithmetical result is 785 euros per year. At 2,700 kWh, it would be 1,065 euros. The values serve only as calculation examples; for a real comparison, the current conditions of the respective tariff apply.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi compares electricity tariffs based on your real annual consumption and explains transparently how the unit price and base price affect it.</p>
        <Link to="/contact">
          <Button variant="primary">Contact us now</Button>
        </Link>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-4">Further Information</h3>
        <ul className="flex flex-col gap-2">
          <li><Link to="/ratgeber/stromverbrauch-1-person" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Consumption 1 Person</Link></li>
          <li><Link to="/ratgeber/stromverbrauch-4-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Consumption 4 People</Link></li>
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Calculate Electricity Costs</Link></li>
          <li><Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Providers Aachen</Link></li>
        </ul>
      </div>
"""

process_file('src/pages/Ratgeber/articles/StromkostenBerechnen.tsx', faqs_en_10, jsx_en_10, "Calculate Electricity Costs: Formula, Examples & Tariff Comparison")
process_file('src/pages/Ratgeber/articles/Stromverbrauch1Person.tsx', faqs_en_11, jsx_en_11, "Electricity Consumption in a 1-Person Household: What is Normal?")
process_file('src/pages/Ratgeber/articles/Stromverbrauch2Personen.tsx', faqs_en_12, jsx_en_12, "Electricity Consumption in a 2-Person Household: Benchmarks and Costs")
