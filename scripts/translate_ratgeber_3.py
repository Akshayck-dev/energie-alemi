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

# File 4: GasverbrauchBerechnen.tsx
faqs_en_4 = """[
    {
      question: "How many kWh is one cubic meter of gas?",
      answer: "That depends on the calorific value and the state number. As a rough guide, about 10 kWh per m³ is often used; only the formula with the factors of your bill is exact."
    },
    {
      question: "Where can I find the calorific value and state number?",
      answer: "Both values can be found in the technical or consumption section of the annual statement. The calorific value can be stated differently for partial periods."
    },
    {
      question: "Can I check my bill with the formula?",
      answer: "Yes. Use the factors mentioned on the bill and the same billing period. Small deviations can arise from rounding."
    },
  ]"""

jsx_en_4 = """
      <h2>The gas meter measures m³, the bill uses kWh</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Gas consumption at the meter is recorded in cubic meters (m³). For billing, this volume is converted into kilowatt-hours (kWh). The exact formula is: Consumption in m³ × State number × Calorific value = Consumption in kWh.
      </p>
      <p>
        Calorific value and state number are stated on the gas bill. Without these values, only a rough estimate is possible. A common rule of thumb is m³ × 10, but this does not replace the exact billing.
      </p>
      <h2>The three values of the formula</h2>
      <p>
        Consumption in m³: Subtract the old meter reading from the new reading. The difference is the gas volume measured in the period.
      </p>
      <p>
        State number: It corrects the measured volume to a defined standard state, including pressure and temperature at the delivery point.
      </p>
      <p>
        Calorific value: It describes how much energy is contained in the delivered gas. The value is given in kWh per m³ and can vary depending on the gas properties and the billing period.
      </p>
      <h2>Example of the exact conversion</h2>
      <p>
        Assuming the meter shows a difference of 1,200 m³ for the billing period. The bill shows a state number of 0.95 and a calorific value of 11.1 kWh/m³.
      </p>
      <p>
        1,200 m³ × 0.95 × 11.1 kWh/m³ = 12,654 kWh.
      </p>
      <p>
        With the rule of thumb m³ × 10, it would be 12,000 kWh. The deviation shows why the real factors should be used for invoice verification.
      </p>
      <h2>From consumption to gas costs</h2>
      <h2>Once the kilowatt-hours are known, the cost formula is:</h2>
      <p>
        Annual consumption in kWh × Unit price in Euro/kWh + annual base price = expected annual costs.
      </p>
      <p>
        Example: 12,654 kWh × 0.10 Euro/kWh + 180 Euro base price equals 1,445.40 Euro per year. This is a calculation example and not a current tariff offer.
      </p>
      <h2>Why consumption fluctuates from year to year</h2>
      <p>
        Gas is often used for heating. A cold winter, longer presence, a higher room temperature, or changed hot water use can increase annual consumption. Living space, insulation, heating condition, and the number of residents also have an effect.
      </p>
      <p>
        Therefore, do not just compare two absolute annual values. Consider weather, billing duration, and changes in the household. Monthly meter readings can be helpful for early control.
      </p>
      <h2>Check gas bill</h2>
      <p>
        Check the initial and final meter readings, billing period, conversion factors, unit price, and base price. If the bill or provider indicates a meter reading as estimated, compare it with your own photos or notes.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi helps you understandably classify consumption and tariff costs and compare suitable gas tariffs.</p>
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
          <li><Link to="/ratgeber/gaspreise-verstehen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Understanding Gas Prices</Link></li>
          <li><Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas Comparison</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Gas Providers</Link></li>
          <li><Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas</Link></li>
        </ul>
      </div>
"""


# File 5: GasvergleichPassenderTarif.tsx
faqs_en_5 = """[
    {
      question: "When is the best time for a gas tariff comparison?",
      answer: "The best time is about 4 to 6 weeks before the notice period of your current contract expires, or immediately after an announced price increase. When moving, you should also compare in good time."
    },
    {
      question: "What do I need to be able to compare natural gas tariffs?",
      answer: "You only need your zip code and your approximate annual gas consumption in kilowatt-hours (kWh), which you can find on your last annual statement."
    },
    {
      question: "How are the costs calculated for 30,000 kWh of gas consumption?",
      answer: "The costs for 30,000 kWh are calculated from the base price (fixed monthly fee) and the unit price (price per kWh consumed). The exact costs vary depending on the chosen gas tariff."
    }
  ]"""

jsx_en_5 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Heating costs often make up the largest part of a household's energy costs. Those who regularly <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">compare gas tariffs</Link> can save several hundred euros a year. Find out how to choose the optimal gas tariff and permanently reduce your costs.
      </p>

      <h2>Why is a gas tariff comparison worthwhile?</h2>
      <p>
        The energy market is constantly moving. Many households remain in the local basic supplier's tariff for years out of convenience. This loyalty can be expensive, as new customer tariffs from alternative providers often offer significantly cheaper conditions and attractive switching bonuses. A regular <strong>gas tariff comparison</strong> helps you keep an eye on price developments and ensure that you don't pay more for your natural gas than necessary.
      </p>

      <h2>How do I find the right gas tariff?</h2>
      <p>
        To find the right tariff, you only need two pieces of information: Your zip code and your annual gas consumption in kilowatt-hours (kWh). You can easily take the latter from your last annual statement. If you do not have a previous year's bill, you can use the following benchmarks for the <strong>gas consumption comparison</strong>:
      </p>
      <ul>
        <li>30 m² apartment: approx. 4,000 kWh</li>
        <li>50 m² apartment: approx. 7,000 kWh</li>
        <li>100 m² apartment: approx. 14,000 kWh</li>
        <li>Terraced / detached house: approx. 20,000 to 30,000 kWh</li>
      </ul>

      <h2>Which factors influence the gas price?</h2>
      <p>
        When comparing different <strong>gas tariffs</strong>, you will always encounter two central price components. It is important to know the difference to estimate the actual costs.
      </p>

      <h3>Unit price</h3>
      <p>
        The unit price (consumption price) is stated in cents per kilowatt-hour (ct/kWh). It indicates how much you pay for the actual amount of gas consumed. If you have high gas consumption, a tariff with a particularly low unit price is crucial for your savings.
      </p>

      <h3>Base price</h3>
      <p>
        The base price is a consumption-independent, fixed fee, which is mostly calculated monthly (e.g., 10 to 15 euros per month). It covers the costs for provision, the gas meter, and network usage. With low consumption (e.g., in a small apartment), a low base price is often more important than a minimally cheaper unit price.
      </p>

      <h3>Gas consumption</h3>
      <p>
        Depending on whether you only generate hot water, also heat, or even supply a whole house, your consumption changes drastically. Your individual consumption behavior determines whether a tariff with a high base price and low unit price is more worthwhile or vice versa.
      </p>

      <h3>State levies and network charges</h3>
      <p>
        In addition to the provider's procurement costs, the gas price is also influenced by state-determined price components and regulated network charges. The CO₂ pricing of fossil fuels is a cost factor that can affect gas prices for consumers. Information on regulatory frameworks and network charges is provided by the <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Federal Network Agency</a>, among others.
      </p>

      <h2>How much does gas cost at 30,000 kWh?</h2>
      <p>
        Many homeowners wonder: "What are my <strong>30000 kWh gas costs</strong>?" The exact costs cannot be quantified across the board, as they depend on your current tariff. To calculate, simply multiply the annual consumption (30,000 kWh) by the unit price of your tariff and then add the annual base price (12 months × monthly base price).
      </p>
      <p>
        Example with a unit price of 10 cents/kWh and a base price of 15 euros per month:
        <br/><em>(30,000 kWh × € 0.10) + (12 × € 15) = € 3,000 + € 180 = € 3,180 per year.</em>
      </p>
      <p>
        Even a difference of a few cents in the unit price amounts to hundreds of euros a year with this volume, making a switch particularly lucrative.
      </p>

      <h2>Compare natural gas tariffs</h2>
      <p>
        When you compare <strong>natural gas tariffs</strong>, you should not only look at the pure price. Pay attention to the origin of the gas. In addition to classic natural gas, many suppliers now offer "eco-gas". With pure climate tariffs, conventional natural gas is usually supplied, but the CO2 emissions are compensated by climate protection projects. If you want to make a real contribution to the energy transition, you should look for tariffs with a real biogas share.
      </p>

      <h2>What should one look out for with a gas provider?</h2>
      <p>
        The cheapest price is worthless if the contract conditions are bad. Pay attention to the following criteria when selecting your new provider:
      </p>
      <ul>
        <li><strong>Price guarantee:</strong> Look for tariffs with a limited or full price guarantee of at least 12 months. It protects you from surprising price increases.</li>
        <li><strong>Contract term:</strong> Do not commit to a supplier for longer than 12 months to be able to react flexibly to the market.</li>
        <li><strong>Notice period:</strong> The period should be a maximum of four weeks to the end of the contract.</li>
        <li><strong>Bonuses and premiums:</strong> New customer bonuses often make the first year very cheap but are omitted in the second year. Check whether the tariff makes economic sense even without a bonus.</li>
      </ul>

      <h2>What you should have ready for a gas tariff comparison</h2>
      <p>
        To be able to compare tariffs quickly and accurately, you should have the following documents or information at hand:
      </p>
      <ul>
        <li><strong>Zip code (PLZ):</strong> Since network usage charges vary regionally, your place of residence determines the available tariffs.</li>
        <li><strong>Annual consumption in kWh:</strong> You will find this on your last annual statement. Alternatively, you can use benchmarks based on living space.</li>
        <li><strong>Current provider &amp; tariff name:</strong> Helps with the direct comparison of your existing unit price (cents/kWh) and base price (euros/month).</li>
        <li><strong>Contract term &amp; notice period:</strong> So that you know by which desired date the switch can be carried out.</li>
      </ul>

      <h2>Switching gas providers – how it works</h2>
      <p>
        Once you have decided on a new tariff, the switching process is completely straightforward. As a rule, your new provider takes over the cancellation with your old supplier. You hardly have to worry about anything and your gas supply is legally guaranteed without interruption. For detailed instructions, read our article: <Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Switching gas providers</Link>.
      </p>
      <p>
        If you are unsure about the tariff selection or do not want to carry out the switch yourself online, we are happy to offer you our <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">personal tariff advice</Link>. We independently compare all conditions and find the best gas tariff for your individual situation.
      </p>

      <h2>Frequently asked questions about gas tariffs</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Start your gas comparison now</h3>
        <p className="mb-6">Use our free service and secure cheap gas prices.</p>
        <Link to="/gas">
          <Button variant="primary">Compare gas prices</Button>
        </Link>
      </div>
"""

# File 6: GrundversorgungAachenStromGas.tsx
faqs_en_6 = """[
    {
      question: "Do I automatically get into the basic supply?",
      answer: "Yes. If you move into a new apartment or house and consume electricity or gas (e.g., by turning on the light) without having previously signed your own contract, the basic supply contract automatically comes into being by taking energy. This is legally regulated in § 36 Paragraph 1 of the Energy Industry Act (EnWG)."
    },
    {
      question: "How long is the notice period in the basic supply?",
      answer: "A basic supply contract has no fixed term and can be canceled at any time with a legal notice period of two weeks. This is anchored in § 20 Paragraph 1 of the Electricity Basic Supply Ordinance (StromGVV) and the Gas Basic Supply Ordinance (GasGVV). The cancellation must be in text form (e.g., email or letter)."
    },
    {
      question: "What is the difference between basic supply and substitute supply?",
      answer: "The basic supply is an open-ended supply relationship for household customers. The substitute supply is a legal emergency supply that steps in when an energy purchase cannot be clearly assigned to a supply contract (e.g., in the event of a sudden insolvency of the previous provider). The substitute supply is limited to a maximum of three months. During this time, it can be terminated at any time by signing a new contract without observing a notice period."
    },
    {
      question: "Can I switch to another provider at any time?",
      answer: "Yes, if you are in the basic supply, you can cancel it with a notice period of two weeks and switch to another tariff or provider. With a regular switch, your new provider usually takes over the cancellation with the basic supplier as a service."
    },
    {
      question: "What data do I need for a provider switch?",
      answer: "For a smooth switch, you need your full name, the delivery address, the meter number (to be found on your electricity or gas meter or in the handover protocol), the current meter reading, and your estimated annual consumption. If you are already with an alternative provider, stating the previous customer number is also helpful."
    }
  ]"""

jsx_en_6 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Anyone who moves into a new apartment or forgets to look for a suitable electricity or gas tariff in good time is not left in the dark. The Energy Industry Act ensures that every household is reliably supplied with energy. But beware: This protection is often associated with high costs. Find out everything important about the basic supply, the legal notice periods, and how you can easily switch to a cheaper tariff here.
      </p>

      <h2>What does basic supply mean?</h2>
      <p>
        The basic supply is the legal obligation of energy supply companies to supply household customers with electricity and gas under general conditions and prices. The legal basis for this is <strong>§ 36 Paragraph 1 of the Energy Industry Act (EnWG)</strong>. 
      </p>
      <p>
        By definition, a household customer is any end consumer who purchases energy predominantly for their own consumption in the household or for professional, agricultural, or commercial purposes not exceeding an annual consumption of 10,000 kWh. 
      </p>
      <p>
        The contract for the basic supply comes into being automatically as soon as you consume electricity or gas in an apartment (implied action), without you explicitly signing a contract with a specific provider.
      </p>

      <h3>Comparison: Basic supply, substitute supply, and special contract</h3>
      <p>
        A strict legal distinction is made between different types of contracts. Each form has specific advantages and disadvantages in terms of flexibility and pricing. The following table provides a detailed overview:
      </p>

      <div className="overflow-x-auto my-8 border border-slate-200 dark:border-white/10 rounded-xl">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-white/10 text-sm md:text-base">
          <thead className="bg-slate-50 dark:bg-slate-800/50 font-heading">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Feature</th>
              <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Basic Supply</th>
              <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Substitute Supply</th>
              <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Special Contract</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Formation</td>
              <td className="px-4 py-3">Automatically by drawing electricity/gas (implied) or formal registration.</td>
              <td className="px-4 py-3">Automatically when there is no supply contract (e.g., after provider insolvency).</td>
              <td className="px-4 py-3">Through active conclusion of a tariff (e.g., eco-electricity) online or in writing.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Contract term</td>
              <td className="px-4 py-3">Open-ended, no fixed minimum term.</td>
              <td className="px-4 py-3">Limited to a maximum of 3 months (regulated by law).</td>
              <td className="px-4 py-3">Often 12 to 24 months fixed term.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Notice period</td>
              <td className="px-4 py-3">Anytime 2 weeks (§ 20 StromGVV / GasGVV).</td>
              <td className="px-4 py-3">No notice period. Can be terminated at any time without notice by a new contract.</td>
              <td className="px-4 py-3">Usually 1 month to the end of the agreed term.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Price development</td>
              <td className="px-4 py-3">Publicly announced, often more expensive than special tariffs of the same provider.</td>
              <td className="px-4 py-3">Calculated separately, often daily price fluctuations.</td>
              <td className="px-4 py-3">Often cheaper, frequently with a fixed price guarantee during the term.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How can you cancel the basic supply?</h2>
      <p>
        The cancellation of the basic supply is consumer-friendly and simple. According to <strong>§ 20 Paragraph 1 of the Electricity Basic Supply Ordinance (StromGVV)</strong> and the <strong>Gas Basic Supply Ordinance (GasGVV)</strong>, the notice period is uniformly <strong>two weeks</strong>. 
      </p>
      <p>
        The following points are important here:
      </p>
      <ul>
        <li><strong>Text form required:</strong> The cancellation does not necessarily have to be a handwritten letter. A cancellation in text form (e.g., by email or via an online cancellation form of the supplier) is sufficient and legally binding.</li>
        <li><strong>Automatic switching process:</strong> If you switch to another electricity or gas provider, you usually do not have to carry out the cancellation yourself. Your new provider takes over this step in the course of the switch application as a free service for you. The switching process runs fully automatically in the background.</li>
        <li><strong>Special cancellation when moving out:</strong> When you move out of your apartment, you can cancel the basic supply with a notice period of two weeks to the move-out date to avoid double payment.</li>
      </ul>

      <h2>What information is needed for a switch?</h2>
      <p>
        If you want to switch from the expensive basic supply to a cheaper special tariff, the effort is minimal. You do not have to have any lines modified, and the physical supply is legally guaranteed without a gap during the transition. You should have the following information ready:
      </p>
      <ol>
        <li><strong>Personal data:</strong> Full name and date of birth of the contracting party.</li>
        <li><strong>Delivery address:</strong> Your exact address in Aachen (if applicable, with floor).</li>
        <li><strong>Meter number:</strong> The number of your electricity or gas meter. You can find this directly on the meter housing (often in the basement or hallway) as well as in the handover protocol of your apartment.</li>
        <li><strong>Current meter reading:</strong> The meter reading on the day of the switch or key handover.</li>
        <li><strong>Estimated annual consumption:</strong> In kilowatt-hours (kWh). You can find a benchmark on old bills. If you do not have these at hand (e.g., when moving in for the first time), you can use average values as a guide (e.g., approx. 1,500 kWh for a single household or 3,500 kWh for a family).</li>
        <li><strong>Desired date:</strong> The date on which the supply by the new provider should start.</li>
      </ol>

      <h2>Basic supply when moving to Aachen</h2>
      <p>
        A move is the ideal time to put energy costs to the test. If you use electricity or gas in Aachen without registering beforehand, you automatically slip into the STAWAG basic supply tariff. 
      </p>
      <p>
        To avoid unnecessary expenses right from the start, you should compare tariffs four to six weeks before the move date and initiate the registration. In our detailed <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Moving Guide for Aachen</Link>, we have summarized a practical checklist and important legal regulations (such as your special right of termination when moving according to § 41b EnWG) for you.
      </p>

      <h2>Compare electricity and gas tariffs in Aachen</h2>
      <p>
        By switching from the basic supply to an optimized special contract, households in Aachen can save several hundred euros annually. Since the prices of the basic supply are usually set higher compared to alternative providers, a regular comparison is worthwhile.
      </p>
      <p>
        Use our free and neutral comparison tools:
      </p>
      <ul>
        <li>Carry out a quick <Link to="/electricity" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">electricity comparison for Aachen</Link> (details on the procedure are provided by our <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">guide to switching providers</Link>).</li>
        <li>Use the <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">gas comparison for Aachen</Link> to reduce heating costs (valuable information is offered by our <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gas Comparison Guide</Link> as well as our <Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">guide to switching providers</Link>).</li>
        <li>Find out about our local <Link to="/contact" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">tariff advice on site in Aachen</Link>.</li>
      </ul>
      <p>
        Do you have questions about the switching process or need help canceling your old contract? Just <Link to="/contact" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">contact us directly</Link>. We will gladly support you without obligation.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Switch from the expensive basic supply now</h3>
        <p className="mb-6">
          Don't leave any money behind. We check your current electricity and gas contracts in Aachen, determine your savings potential, and take over the entire switching process for you – completely free of charge and stress-free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" onClick={() => handleCtaClick('/contact')}>
            <Button variant="primary">Request free advice</Button>
          </Link>
          <Link to="/contact" onClick={() => handleCtaClick('/contact')}>
            <Button variant="outline">Tariff Advice Details</Button>
          </Link>
        </div>
      </div>

      <hr className="my-8 border-slate-200 dark:border-white/10" />

      {/* Visibly Rendered FAQs for SEO/User readability */}
      <h2 className="mt-8 mb-4">Frequently Asked Questions (FAQ)</h2>
      <div className="space-y-6 mb-10">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-slate-100 dark:border-white/5 pb-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-slate-200 dark:border-white/10" />

      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Consumer and Regulatory Portals</h3>
      <ul className="text-sm text-slate-500 dark:text-slate-400 list-none pl-0 space-y-2">
        <li>
          - <strong>Federal Network Agency:</strong> Information on basic and substitute supply at <a href="https://www.bundesnetzagentur.de/DE/Vportal/Energie/Vertragsarten/Grundversorgung/start.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.bundesnetzagentur.de</a>
        </li>
        <li>
          - <strong>Laws on the Internet:</strong> Electricity Basic Supply Ordinance (StromGVV) § 20 at <a href="https://www.gesetze-im-internet.de/stromgvv/__20.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.gesetze-im-internet.de</a>
        </li>
        <li>
          - <strong>Consumer Center:</strong> Guide to tariffs, basic supply, and special contracts at <a href="https://www.verbraucherzentrale.de/wissen/energie/preise-tarife-anbieterwechsel/grundversorgung-oder-sondervertrag-vertraege-bei-strom-und-gas-10912" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.verbraucherzentrale.de</a>
        </li>
        <li>
          - <strong>STAWAG:</strong> Details on prices for basic and substitute supply at <a href="https://www.stawag.de/produkte/grund-und-ersatzversorgung" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.stawag.de</a>
        </li>
      </ul>

      <p className="text-xs text-slate-400 mt-8 italic">
        Important note: This guide is for general information and orientation purposes only. It does not constitute legal advice. The legal and tariff conditions may change. Please check the current contract details directly with your respective basic supplier. Last checked: August 2026.
      </p>
"""

process_file('src/pages/Ratgeber/articles/GasverbrauchBerechnen.tsx', faqs_en_4, jsx_en_4, "Calculate Gas Consumption: Convert Cubic Meters to kWh")
process_file('src/pages/Ratgeber/articles/GasvergleichPassenderTarif.tsx', faqs_en_5, jsx_en_5, "Compare Gas Tariffs and Find a Cheap Gas Tariff")
process_file('src/pages/Ratgeber/articles/GrundversorgungAachenStromGas.tsx', faqs_en_6, jsx_en_6, "Basic Supply for Electricity & Gas in Aachen Explained")
