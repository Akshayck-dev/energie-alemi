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
        
    content = re.sub(r'customH1="(.*?)"', r'customH1={i18n.language === \'en\' ? "' + custom_h1_en + r'" : "\1"}', content)
    
    layout_start_pattern = r'(<ArticleLayout[^>]*>)'
    layout_end_pattern = r'(</ArticleLayout>)'
    
    parts = re.split(layout_start_pattern, content)
    if len(parts) >= 3:
        before_layout = parts[0]
        layout_tag = parts[1]
        after_layout_tag = parts[2:]
        after_layout_tag = "".join(after_layout_tag)
        
        inner_parts = re.split(layout_end_pattern, after_layout_tag)
        if len(inner_parts) >= 3:
            original_inner = inner_parts[0]
            layout_end_tag = inner_parts[1]
            after_layout = inner_parts[2:]
            after_layout = "".join(after_layout)
            
            wrapped_inner = f"\n      {{i18n.language === 'en' ? (\n        <>\n{translated_jsx_str}\n        </>\n      ) : (\n        <>{original_inner}</>\n      )}}\n    "
            
            content = before_layout + layout_tag + wrapped_inner + layout_end_tag + after_layout
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# File 2: GasAnmeldenUmzug.tsx
faqs_en_2 = """[
    {
      question: "Do I have to register gas if the apartment has central heating?",
      answer: "Usually not. If the system is run by the landlord or property management, heating costs are billed via additional costs. Ask before moving in."
    },
    {
      question: "Can I take my current gas contract with me?",
      answer: "Often yes, if the provider supplies the new address and the contract allows continuation. The individual contract terms are decisive."
    },
    {
      question: "Which meter readings do I need?",
      answer: "Note the final reading of the old and the initial reading of the new delivery point. Meter number and photo help assign both values clearly."
    },
    {
      question: "Who cancels the old gas contract?",
      answer: "With a regular provider switch, the new supplier often handles the cancellation. In the case of a move, you should control the notification yourself, because delivery point, date, and new address must additionally be assigned."
    },
  ]"""

jsx_en_2 = """
      <h2>Before moving in, clarify who holds the gas contract</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        With their own gas boiler, tenants or owners usually sign a gas contract themselves. With central heating, however, the contract often runs via the landlord or property management; the costs then appear in the utility bill. Therefore, first clarify whether the new apartment even has its own gas delivery point.
      </p>
      <p>
        If a separate contract exists, you should inform the current provider about the move early on. Whether the contract is continued at the new address, terminated, or replaced by a new tariff depends on the contract, delivery options, and the moving clause.
      </p>
      <h2>You need this data</h2>
      <h2>Address of the old and new delivery point;</h2>
      <h2>Move-out and move-in date;</h2>
      <h2>Gas meter numbers and meter readings;</h2>
      <h2>Customer number and contract data;</h2>
      <h2>Desired delivery start date;</h2>
      <h2>Last annual statement or expected annual consumption;</h2>
      <p>
        New billing address.
      </p>
      <p>
        Photograph the meter when the keys are handed over and transfer the reading into the protocol. The photo should clearly document the number, reading, and ideally the date.
      </p>
      <h2>Take your gas contract with you or compare anew?</h2>
      <p>
        Many special contracts can be continued at the new residence, provided the provider can deliver there. Nevertheless, check the conditions: The tariff is not automatically the cheapest choice for the new living situation. With a larger area, different heating technology, or a better insulation standard, the expected consumption can also change.
      </p>
      <p>
        If the previous provider cannot supply the new delivery point, termination may be considered depending on the contract. Do not rely on assumptions; get the end of delivery and final invoice confirmed in writing.
      </p>
      <h2>What happens without a chosen gas tariff?</h2>
      <p>
        If gas is drawn at a separate gas delivery point, the legally secured supply by the local basic supplier regularly takes effect. This prevents a supply gap. Nevertheless, price and conditions should be compared promptly with available special tariffs.
      </p>
      <p>
        With central heating, residents usually do not have to register their own supply contract. Here the landlord or the community decides on the gas supplier.
      </p>
      <h2>Practical Moving Checklist</h2>
      <p>
        Clarify heating type and separate gas delivery point.
      </p>
      <p>
        Check existing contract including moving clause.
      </p>
      <p>
        Inform provider early about both addresses.
      </p>
      <p>
        Compare tariff for the new consumption.
      </p>
      <p>
        Photograph meter reading at move-out and move-in.
      </p>
      <p>
        Check delivery confirmation and later the final invoice.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi checks your gas contract and compares suitable tariffs for the new address in Aachen and the region.</p>
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
          <li><Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Moving to Aachen Electricity Gas Internet</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Gas Providers</Link></li>
          <li><Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas Providers Aachen</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Contact</Link></li>
        </ul>
      </div>
"""

# File 3: GaspreiseVerstehen.tsx
faqs_en_3 = """[
    {
      question: "What is more important: unit price or base price?",
      answer: "That depends on consumption. With high consumption, the unit price has a stronger effect. With low consumption, a low base price can tip the scales. Always compare the total costs."
    },
    {
      question: "Is the installment the monthly price?",
      answer: "No. The installment is an advance payment. The final costs are based on actual consumption, unit price, and base price."
    },
    {
      question: "What happens in case of a price increase?",
      answer: "Check the letter, the effective date, and a possible special right of termination. In addition, read the meter at the time of the change so that consumption can be cleanly demarcated."
    },
    {
      question: "Are tariffs with a bonus always cheaper?",
      answer: "No. The bonus can only make the first year cheaper. The regular costs, conditions, and follow-up costs are also decisive."
    },
  ]"""

jsx_en_3 = """
      <h2>The cheapest unit price is not automatically the cheapest tariff</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        A gas tariff usually consists of a consumption-dependent unit price and a fixed base price. Only the sum of both components shows the expected annual costs. With high consumption, the unit price has a stronger effect; with low consumption, the base price can be decisive.
      </p>
      <p>
        The comparison formula is: Annual consumption in kWh × Unit price in Euro/kWh + Base price per year = expected annual costs.
      </p>
      <h2>Unit price and base price simply explained</h2>
      <p>
        The unit price is calculated for every kilowatt-hour consumed. A difference of 1 Cent/kWh amounts to 150 Euro at 15,000 kWh annual consumption.
      </p>
      <p>
        The base price is incurred regardless of consumption. It covers fixed cost components of the tariff. A base price of 15 Euro per month equals 180 Euro per year.
      </p>
      <p>
        Example A: 15,000 kWh × 0.10 Euro + 180 Euro = 1,680 Euro/year.
      </p>
      <p>
        Example B: 15,000 kWh × 0.095 Euro + 260 Euro = 1,685 Euro/year.
      </p>
      <p>
        Although Tariff B has the lower unit price, Tariff A is mathematically cheaper with this consumption. The example is not a current offer.
      </p>
      <h2>What a price guarantee actually covers</h2>
      <p>
        A price guarantee is not always the same. A complete guarantee can cover more price components than a limited guarantee, which, for example, only protects procurement and distribution. Taxes, levies, or regulated charges can be excluded depending on the contract clause.
      </p>
      <p>
        Therefore, read the duration and scope of the guarantee. A long guarantee is only valuable if it matches the planned contract period and includes the important components.
      </p>
      <h2>Consider bonuses separately</h2>
      <p>
        Instant and new customer bonuses can lower the costs of the first year. Check payout requirements, minimum supply time, and regular costs without a bonus. A tariff should not be chosen solely because of a high bonus.
      </p>
      <p>
        The monthly installment is also not a tariff price. It is an advance payment on the later billing. Actual consumption and agreed price components remain decisive.
      </p>
      <h2>Other contract features in comparison</h2>
      <h2>Minimum contract term and automatic extension;</h2>
      <h2>Notice period;</h2>
      <h2>Price guarantee and exceptions;</h2>
      <h2>Advance payment or deposit;</h2>
      <h2>Package quantities and consequences in case of over- or under-consumption;</h2>
      <h2>Contract conditions for moving and price changes;</h2>
      <p>
        Customer service and accessibility.
      </p>
      <p>
        Tariffs with advance payment or large package quantities can pose additional risks. A transparent comparison therefore evaluates not only the calculated price.
      </p>
      <h2>How to use your annual statement</h2>
      <p>
        On the statement, you will find annual consumption, previous unit price, base price, and installments paid. Use the consumption for a current tariff comparison. If the living space, heating behavior, or number of people has changed, carefully adjust the forecast.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi compares gas tariffs based on your consumption and shows annual costs, bonus effects, and contract conditions separately.</p>
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
          <li><Link to="/ratgeber/gasverbrauch-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Calculate Gas Consumption</Link></li>
          <li><Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas Comparison</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Gas Providers</Link></li>
          <li><Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas Providers Aachen</Link></li>
        </ul>
      </div>
"""

process_file('src/pages/Ratgeber/articles/GasAnmeldenUmzug.tsx', faqs_en_2, jsx_en_2, "Register Gas when Moving: Contract, Meter and Deadlines")
process_file('src/pages/Ratgeber/articles/GaspreiseVerstehen.tsx', faqs_en_3, jsx_en_3, "Understanding Gas Prices: Unit Price, Base Price and Total Costs")
