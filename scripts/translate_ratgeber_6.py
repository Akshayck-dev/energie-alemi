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


# File 13: Stromverbrauch4Personen.tsx
faqs_en_13 = """[
    {
      question: "Are 4,000 kWh normal for four people?",
      answer: "In an apartment with electrical hot water, this corresponds approximately to the benchmark. Without electrical water heating, the value would be above average for an apartment; in a detached house, it is close to the average."
    },
    {
      question: "Why does a house consume more than an apartment?",
      answer: "In a house, there are additional consumers such as pumps, exterior lighting, garage, or building services. In addition, the living area is often larger."
    },
    {
      question: "How can a family reliably track consumption?",
      answer: "Read the meter once a month on the same day. Also, make a note of longer absences and new devices. This creates a reliable consumption profile after a few months."
    },
  ]"""

jsx_en_13 = """
      <h2>For four people, the average varies widely depending on the housing type</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        The electricity mirror states around 2,600 kWh per year in an apartment and around 3,800 kWh in a detached house for four people, if hot water is not generated electrically. With electrical water heating, the comparative values are around 4,000 and 4,700 kWh per year, respectively.
      </p>
      <p>
        A single flat-rate value is therefore not very helpful. A family in an apartment with a central hot water supply has a different load profile than a household in a house with an instantaneous water heater, garden pump, freezer, and several home office workstations.
      </p>
      <h2>Benchmarks for a four-person household</h2>
      <h2>Apartment, hot water not electrical: approx. 2,600 kWh/year</h2>
      <h2>Apartment, hot water electrical: approx. 4,000 kWh/year</h2>
      <h2>Detached house, hot water not electrical: approx. 3,800 kWh/year</h2>
      <h2>Detached house, hot water electrical: approx. 4,700 kWh/year</h2>
      <p>
        The values are averages. A higher consumption does not automatically prove waste. It shows that it is worth taking a look at hot water, domestic technology, and larger devices.
      </p>
      <h2>Where families need a particularly large amount of electricity</h2>
      <p>
        Washing machine and dryer run more often, cooling and freezing capacity is larger, and multiple screens can be active at the same time. With electrical hot water, consumption also grows with the number and duration of showers. In a detached house, pumps, exterior lighting, garage, or ventilation are often added.
      </p>
      <p>
        A simple sequence helps for cause analysis: first check the hot water type, then heating and building services, then refrigerators, dryers, and consumer electronics. Small chargers are rarely the most important lever.
      </p>
      <h2>Reduce consumption without complicating everyday life</h2>
      <p>
        Fully load the washing machine and dishwasher and use eco programs.
      </p>
      <p>
        Air-dry laundry if possible and use the dryer selectively.
      </p>
      <p>
        Set the refrigerator to about 7 °C and the freezer compartment to about −18 °C.
      </p>
      <p>
        Turn off game consoles, televisions, and computers completely if they are not used for a longer period.
      </p>
      <p>
        Reduce shower time if hot water is generated electrically.
      </p>
      <p>
        Note monthly values and check unusual jumps immediately.
      </p>
      <p>
        A family does not have to change every habit at the same time. Two or three measurable measures are more effective than a long list without control.
      </p>
      <h2>Example: What a 1,000 kWh difference costs</h2>
      <p>
        With an example unit price of 0.35 Euro/kWh, 1,000 kWh additional consumption correspond to 350 Euros of additional consumption costs per year. The base price does not change as a result. The example shows why an instantaneous water heater or an old continuous device can noticeably affect the bill.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Bring your last annual statement with you. Energie Alemi classifies consumption and tariff and compares suitable offers for your household.</p>
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
          <li><Link to="/ratgeber/stromverbrauch-2-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Consumption 2 People</Link></li>
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Calculate Electricity Costs</Link></li>
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Comparison</Link></li>
          <li><Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity</Link></li>
        </ul>
      </div>
"""


# File 14: StromvergleichWoraufAchten.tsx
faqs_en_14 = """[]"""

jsx_en_14 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        The electricity market offers hundreds of different tariffs. But the cheapest tariff is not always the best. Anyone who understands the price structures and contract conditions avoids nasty surprises in the second contract year. Once you have found the right tariff, you can <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">switch your electricity provider</Link> – we explain the exact procedure to you.
      </p>

      <h2>Unit price vs. Base price</h2>
      <p>
        Your electricity bill consists of two main components:
      </p>
      <ul>
        <li><strong>The unit price (cents/kWh):</strong> This is the price you pay for every kilowatt-hour consumed. Those who consume a lot of electricity should look for a low unit price.</li>
        <li><strong>The base price (euros/month):</strong> A fixed monthly fee, independent of consumption. Single households with low consumption benefit from a low base price.</li>
      </ul>

      <h2>Contract term and notice period</h2>
      <p>
        We recommend contract terms of a maximum of 12 months. This keeps you flexible and allows you to benefit from new switching bonuses annually. Under current law, contracts that automatically extend after the initial term can now be canceled monthly.
      </p>

      <h2>The price guarantee</h2>
      <p>
        Make sure that the tariff includes a price guarantee that is valid at least for the duration of the initial term (e.g., 12 months). A <em>limited price guarantee</em> covers the energy price and grid fees, but not state taxes.
      </p>

      <h2>Eco-electricity</h2>
      <p>
        If sustainability is important to you, look for certified eco-electricity (e.g., ok-power label or Grüner Strom label), which not only comes from renewable energies but also promotes the expansion of new plants.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Compare tariffs transparently</h3>
        <p className="mb-6">Find the tariff that perfectly matches your consumption.</p>
        <Link to="/electricity">
          <Button variant="primary">To the free electricity comparison</Button>
        </Link>
      </div>
"""

# File 15: UmzugAachenStromGasInternet.tsx
faqs_en_15 = """[]"""

jsx_en_15 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Moving to a new city like Aachen brings many changes. Besides packing boxes and changing your address, you should not neglect registering electricity, gas, and the internet. Timely planning protects you from unnecessary costs and ensures that the lights are on, the heating works, and the WiFi functions on move-in day.
      </p>

      <h2>1. Practical checklist for moving</h2>
      <p>
        To ensure a smooth transition, a structured process is recommended. Use this short overview for your scheduling:
      </p>
      <ul>
        <li><strong>4 to 6 weeks before moving:</strong> Check the cancellation and portability options of your existing contracts for electricity, gas, and internet.</li>
        <li><strong>2 weeks before moving:</strong> Register your internet connection for the new address, as connections often require several weeks of lead time.</li>
        <li><strong>On the day of the key handover:</strong> Note all meter readings for electricity and gas in the handover protocol and photograph the meters as proof.</li>
        <li><strong>Within the first few days after moving in:</strong> Register electricity and, if applicable, gas with the chosen provider to avoid remaining in the expensive basic supply.</li>
      </ul>

      <h2>2. Registering electricity in Aachen: What to look out for?</h2>
      <p>
        As soon as you turn on the first light bulb or use electricity, you draw energy. If you do not decide on a tariff in advance, you automatically fall into the so-called <Link to="/ratgeber/grundversorgung-aachen-strom-gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Basic Supply</Link>. In Aachen, the <i>STAWAG (Stadtwerke Aachen AG)</i> is the local basic supplier.
      </p>
      <p>
        The basic supply offers maximum flexibility (it can legally be canceled at any time with a notice period of two weeks), but is usually noticeably more expensive compared to special tariffs. Therefore, a timely <Link to="/electricity" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Electricity Comparison</Link> is worthwhile to find a suitable and cheaper tariff. You can read exactly how the <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">switching electricity provider process</Link> works in our guide.
      </p>
      <h3>Special right of termination when moving</h3>
      <p>
        According to § 41b Paragraph 4 of the Energy Industry Act (EnWG), you can cancel your current electricity contract when moving with a notice period of six weeks. However, this special right of termination only applies if your previous supplier cannot offer you a comparable contract under the same conditions at the new address. If they offer to supply you at the new residence, the contract continues unchanged.
      </p>

      <h2>3. Registering gas when using it in the new home</h2>
      <p>
        If your new apartment in Aachen has gas floor heating or a gas connection, the same principle applies here as for electricity. Without your own registration, STAWAG takes over the basic supply.
      </p>
      <p>
        Due to the often higher consumption when heating, the savings potential with gas is particularly high. Ideally, carry out a neutral <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gas Comparison</Link> before moving in by <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">comparing gas tariffs</Link> to avoid high advance payments in the basic supply. Our <Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Provider Switch Guide</Link> provides helpful details on the process.
      </p>

      <h2>4. Registering internet: Availability and deadlines</h2>
      <p>
        Unlike the energy supply, there is no automatic "basic supply" for the internet – if you don't take care of it, you stay offline. 
      </p>
      <h3>Taking the existing contract with you (§ 60 TKG)</h3>
      <p>
        According to the Telecommunications Act (TKG), providers are obliged to continue the contractually agreed service at the new residence without additional costs and without extending the minimum contract term – provided that the transmission is technically possible there.
      </p>
      <p>
        If the provider cannot provide the service at the new residence or can only provide it with a lower bandwidth, you have a <strong>special right of termination with a notice period of one month</strong> according to § 60 Paragraph 2 TKG. The notice period begins on the day of the actual move at the earliest.
      </p>
      <p>
        We recommend that you check the availability at your new address in Aachen in good time and initiate the contract changeover at least four weeks in advance. Use our <Link to="/internet" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Internet Comparison</Link> to determine DSL, cable, or fiber optic options for Aachen.
      </p>

      <h2>5. What data should you prepare?</h2>
      <p>
        For the smooth registration of the contracts, you should have the following documents and details ready:
      </p>
      <ul>
        <li><strong>Your new address</strong> (including floor details or apartment number)</li>
        <li><strong>The official move-in date</strong> (usually the start of the rental agreement)</li>
        <li><strong>Meter number (Electricity &amp; Gas):</strong> You will find this directly on the meter in the basement or hallway, as well as frequently in the handover protocol.</li>
        <li><strong>Meter reading on the day of key handover:</strong> Note this down precisely.</li>
        <li><strong>Existing contract data:</strong> Customer number and name of the previous provider, if you wish to cancel or take contracts with you.</li>
      </ul>

      <h2>6. Common mistakes you should avoid</h2>
      <p>
        Many people who move make mistakes that lead to unnecessary costs. Pay attention to the following:
      </p>
      <ul>
        <li><strong>Premature cancellation of the internet contract:</strong> Do not cancel yourself if the provider can provide the service at the new address. Otherwise, you violate the contract term.</li>
        <li><strong>Missing meter photos:</strong> Without documented meter readings, you risk being billed for the previous tenant's consumption values.</li>
        <li><strong>Relying on verbal promises:</strong> Always get special agreements or cancellation confirmations in writing or by email.</li>
      </ul>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">We help you with a stress-free provider switch</h3>
        <p className="mb-6">
          Our service takes the paperwork off your hands. We compare tariffs for electricity, gas, and internet in Aachen and support you free of charge with registration and switching.
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

      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Consumer and Regulatory Portals</h3>
      <ul className="text-sm text-slate-500 dark:text-slate-400 list-none pl-0">
        <li>
          - <strong>Federal Network Agency:</strong> Information on consumer rights when moving at <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.bundesnetzagentur.de</a>
        </li>
        <li>
          - <strong>Consumer Center NRW:</strong> Helpful guides to switching electricity and gas providers at <a href="https://www.verbraucherzentrale.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.verbraucherzentrale.de</a>
        </li>
      </ul>

      <p className="text-xs text-slate-400 mt-8 italic">
        Important Note: This guide is intended solely for general information and orientation. It does not constitute legal advice. The legal regulations were last carefully checked on August 11, 2026.
      </p>
"""

process_file('src/pages/Ratgeber/articles/Stromverbrauch4Personen.tsx', faqs_en_13, jsx_en_13, "Electricity Consumption in a 4-Person Household: Benchmarks for Families")
process_file('src/pages/Ratgeber/articles/StromvergleichWoraufAchten.tsx', faqs_en_14, jsx_en_14, "Electricity Comparison: What to Look Out For?")
process_file('src/pages/Ratgeber/articles/UmzugAachenStromGasInternet.tsx', faqs_en_15, jsx_en_15, "Moving to Aachen: Registering Electricity, Gas, and Internet")
