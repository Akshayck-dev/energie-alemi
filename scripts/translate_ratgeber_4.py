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

# File 7: GasanbieterWechselnSchritt.tsx
faqs_en_7 = """[
    {
      question: "How long does a gas provider switch take?",
      answer: "According to § 20a EnWG, the supplier switching procedure must be completed within three weeks. In addition, the technical switch must be possible within 24 hours on working days from 2026. However, the actual start of delivery depends on the deadlines of your old contract."
    },
    {
      question: "Do I have to cancel my old gas provider myself?",
      answer: "No, as a rule, your new provider cancels for you. You should only cancel yourself if the notice period is very imminent, e.g., in the case of a special right of termination due to a price increase."
    },
    {
      question: "Will my gas supply be interrupted when switching providers?",
      answer: "No, an interruption is legally excluded. The local basic supplier secures the gas delivery via the substitute or basic supply according to § 36/38 EnWG at any time."
    },
    {
      question: "What data do I need for the gas provider switch?",
      answer: "You need your zip code, your annual consumption in kWh (from the last bill), your current provider, and your gas meter number."
    },
    {
      question: "Can I switch my gas provider when moving?",
      answer: "Yes, if your previous provider cannot offer you a comparable tariff at the new residence, you are entitled to a special right of termination with a notice period of six weeks (§ 41b Paragraph 4 EnWG)."
    }
  ]"""

jsx_en_7 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Switching gas providers works smoothly in the background. No technical adjustments to your heating or pipes are necessary.
      </p>

      <h2>What you should have ready for a gas provider switch</h2>
      <p>
        To carry out the gas provider switch quickly and easily, you should have the following documents and data at hand:
      </p>
      <ul>
        <li><strong>Zip code and city:</strong> Since network usage charges vary regionally, your address determines the available tariffs.</li>
        <li><strong>Annual gas consumption (in kWh):</strong> You can find this value on your last annual statement.</li>
        <li><strong>Previous gas supplier &amp; tariff name:</strong> Serves for a direct price comparison.</li>
        <li><strong>Gas meter number:</strong> Located directly on your gas meter.</li>
        <li><strong>Market Location ID (MaLo-ID):</strong> An 11-digit number sequence for the clear identification of your gas grid connection (if present on the invoice).</li>
        <li><strong>Desired delivery date / notice periods:</strong> Indicates when the switch should take place.</li>
      </ul>

      <h2>Procedure for switching gas providers: Step-by-Step</h2>
      
      <h3>Step 1: Compare tariffs</h3>
      <p>
        Compare different offers via our <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gas Tariff Comparison</Link>. Pay attention to contract terms and price guarantees. Further details on choosing a tariff are provided in our <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gas Comparison Guide</Link>.
      </p>

      <h3>Step 2: Sign a new contract</h3>
      <p>
        Once you have chosen a suitable tariff, fill out the online form. By doing so, you give the new provider a power of attorney to carry out the cancellation with the old supplier.
      </p>

      <h3>Step 3: Cancellation and handover</h3>
      <p>
        Your new provider will cancel the previous contract at the next possible date. Only cancel yourself if deadlines are very tight (e.g., in the case of a special right of termination).
      </p>

      <h2>Deadlines and special rights of termination</h2>
      
      <h3>Notice periods and contract term</h3>
      <p>
        In the statutory basic supply, the notice period is two weeks (§ 20 GasGVV). For special contracts (e.g., tariffs with a 12 or 24-month term), you must comply with the contractually agreed notice period. According to the regulations of the Act for Fair Consumer Contracts, the following applies to contracts concluded from March 1, 2022: After the initial term expires, they only extend for an indefinite period and can be terminated with a maximum notice period of one month.
      </p>

      <h3>Special right of termination in case of price increases</h3>
      <p>
        In the event of a price or contract change by your provider, you are entitled to a statutory special right of termination under § 41 Paragraph 5 EnWG. You can cancel the contract without notice until the change takes effect.
      </p>

      <h3>Switching when moving</h3>
      <p>
        When moving, you can cancel your gas contract according to § 41b Paragraph 4 EnWG with a notice period of six weeks if your previous provider cannot offer you a continuation of the contract under the same conditions at the new residence. Detailed information can be found in the <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Moving Guide</Link>.
      </p>

      <h2>Duration of switch and security of supply</h2>

      <h3>How long does the switch take?</h3>
      <p>
        According to § 20a EnWG, the procedure for switching energy suppliers must be completed within three weeks. In addition, from January 1, 2026, the requirement applies that the purely technical switch of the energy provider must be feasible on working days within 24 hours. Please note, however, that the actual start of delivery continues to depend on your notice periods and the regular end of the contract with the previous supplier.
      </p>

      <h3>Seamless gas supply is legally secured</h3>
      <p>
        The seamless energy supply is regulated by law in Germany. Should there be delays in the changeover, the local basic supplier is obliged according to § 36 and § 38 EnWG to supply you without interruption as part of the substitute or basic supply. The <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Federal Network Agency</a> provides further official consumer information on this.
      </p>

      <h2>Do I have to read the meter?</h2>
      <p>
        Yes. On the switching date, your network operator or the old provider will ask you to report the meter reading so that an accurate final billing can take place.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Check switch now</h3>
        <p className="mb-6">Compare tariffs now or contact us for personal support via our <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Contact form</Link>.</p>
        <Link to="/gas">
          <Button variant="primary">To the gas comparison</Button>
        </Link>
      </div>

      <h2>Frequently asked questions</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>
"""

# File 8: InternetanbieterVergleichen.tsx
faqs_en_8 = """[]"""

jsx_en_8 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        The selection of internet tariffs is huge. Whether DSL, cable, or fiber optics – the decision depends not only on the price but also on regional availability and your usage habits.
      </p>

      <h2>Technologies in comparison</h2>
      <ul>
        <li><strong>DSL (Copper cable):</strong> Available everywhere, but often limited to 50 to 250 Mbit/s. Very stable.</li>
        <li><strong>Cable internet:</strong> Via the TV cable connection. Often cheaper than DSL at very high speeds (up to 1,000 Mbit/s). In the evening hours ("Shared Medium"), however, the speed can fluctuate.</li>
        <li><strong>Fiber optics (FTTH):</strong> The most future-proof technology. Stable, extremely fast (upload and download), but not yet available everywhere.</li>
      </ul>

      <h2>What speed do I need?</h2>
      <p>
        Not everyone needs Gigabit internet. For a single household that watches Netflix and surfs in the evening, 50 Mbit/s is perfectly sufficient. For families with parallel streams, home office (video conferences), and large downloads (gaming), it should be at least 100 to 250 Mbit/s.
      </p>

      <h2>Router: Rent or buy?</h2>
      <p>
        Many providers charge a monthly rent (3 to 8 euros) for the WiFi router. Calculated over a term of 24 months, buying your own router is often cheaper. Thanks to statutory router freedom, you can use any compatible end device.
      </p>

      <h2>Check availability</h2>
      <p>
        Before you fall in love with a tariff, you must check the availability at your address. Our comparison calculator does this automatically for you. If you are moving soon, also read our guide on the topic of <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Moving and internet registration</Link> to use deadlines and special termination rights correctly.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Check availability at your location</h3>
        <p className="mb-6">Find out which providers deliver the best performance for you.</p>
        <Link to="/internet">
          <Button variant="primary">Compare internet providers now</Button>
        </Link>
      </div>
"""

# File 9: StromanbieterWechseln.tsx
faqs_en_9 = """[
    {
      question: "How can I switch my electricity provider?",
      answer: "The switch is straightforward: You compare electricity tariffs online, choose a new provider, and fill out the form. The new provider usually handles the cancellation with the previous supplier."
    },
    {
      question: "How long does an electricity provider switch take?",
      answer: "According to legal requirements (§ 20a EnWG), the technical switch of the electricity provider must be completed within three weeks. From January 1, 2026, the requirement also applies that the purely technical provider switch must be feasible on working days within 24 hours. Please note, however, that the actual start of delivery depends on your notice periods and contract terms with the previous supplier."
    },
    {
      question: "Do I have to cancel my old electricity contract myself?",
      answer: "No, generally not. If you regularly switch providers, your new provider will cancel for you. Only cancel yourself if you are using a special right of termination due to a price increase or if you are moving at very short notice."
    },
    {
      question: "Can I switch electricity providers despite an ongoing contract?",
      answer: "Yes, you can conclude the new tariff at any time. However, the actual provider switch only takes place after your current contract term and notice period have expired."
    },
    {
      question: "How much does it cost to switch electricity providers?",
      answer: "Switching electricity providers is always free. Neither the previous nor the future electricity provider may charge switching fees."
    },
    {
      question: "Is there an interruption in the electricity supply?",
      answer: "No, an interruption is legally excluded. The legislature guarantees continuous electricity supply via the so-called substitute or basic supply according to § 36 and § 38 of the Energy Industry Act (EnWG), so that you are never without electricity at any time."
    }
  ]"""

jsx_en_9 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Energy prices fluctuate, and many households pay too much for their electricity. Those who want to <strong>switch their electricity provider</strong> can save several hundred euros a year. In this guide, we explain the exact procedure, which notice periods are important, and how you can safely find a cheap electricity tariff.
      </p>

      <h2>When is a switch worthwhile?</h2>
      <p>
        An <strong>electricity provider switch</strong> is worthwhile for almost everyone, but especially for households that are still in the expensive basic supply. Basic supply tariffs are flexible but often the most expensive option on the market. Even if your price guarantee with an alternative provider expires or you have received a price increase, it is the perfect time to switch electricity providers. New customers also frequently benefit from attractive switching premiums.
      </p>

      <h2>How does the electricity provider switch work?</h2>
      <p>
        The process to be able to <strong>switch electricity tariffs</strong> is legally standardized in Germany and extremely simple for you as a consumer:
      </p>

      <h3>Compare electricity tariffs</h3>
      <p>
        Use our free <Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">electricity tariff comparison</Link> to compare the offers of different providers. You only need your zip code and your approximate annual consumption in kWh, which you can find on your last annual statement.
      </p>

      <h3>Select a new electricity provider</h3>
      <p>
        Decide on a tariff that combines good prices with fair contract conditions (such as a price guarantee and short term).
      </p>

      <h3>Sign the contract and start the switch</h3>
      <p>
        Enter your data, your meter number, and the name of your previous provider online. By concluding, you instruct the new provider to carry out the switching process for you.
      </p>

      <h2>What you should have ready for an electricity provider switch</h2>
      <p>
        To carry out the switch quickly and smoothly online, you should have the following information and documents ready:
      </p>
      <ul>
        <li><strong>Zip code and city:</strong> Enables the determination of network usage charges at your address.</li>
        <li><strong>Annual electricity consumption in kWh:</strong> To be found on your last annual statement.</li>
        <li><strong>Current provider &amp; contract data:</strong> Important for timely cancellation.</li>
        <li><strong>Meter number:</strong> This is located directly on your electricity meter.</li>
        <li><strong>Market Location ID (MaLo-ID):</strong> An 11-digit number that identifies your specific grid connection and can be found on your electricity bill (not to be confused with the meter number).</li>
        <li><strong>Personal customer data:</strong> Including your customer number with the current electricity provider.</li>
      </ul>

      <h2>Which deadlines apply when switching electricity providers?</h2>
      <p>
        Before you switch providers, you should know the deadlines of your current contract.
      </p>

      <h3>Notice period and contract term</h3>
      <p>
        Every electricity contract has a specific notice period. In the basic supply, this is legally two weeks (§ 36 EnWG). For special contracts, since the Act for Fair Consumer Contracts, the following applies to many electricity contracts concluded after March 1, 2022: After the end of the initial contractual term, they only extend for an indefinite period and can be canceled with a maximum notice period of one month. Older contracts or different tariff structures may have different deadlines. Therefore, check your individual contract data.
      </p>

      <h3>Switch electricity providers despite an ongoing contract</h3>
      <p>
        Many consumers wonder: Can I <strong>switch electricity providers despite a contract</strong>? Yes, you can secure a cheap tariff for the future today. The actual start of delivery then takes place seamlessly after the expiration of your current contract. An exception is made for price increases: Here, a statutory special right of termination according to § 41 Paragraph 5 EnWG takes effect, allowing you to terminate the contract immediately without observing the regular notice period.
      </p>

      <h2>What happens to the old electricity contract?</h2>
      <p>
        The most important thing with a regular provider switch: Never cancel your old contract yourself. Your new supplier takes over the cancellation for you to ensure a smooth handover of the electricity supply. Only if the deadline for a special right of termination is very tight should you cancel in writing yourself and inform the new provider of this upon conclusion of the contract.
      </p>

      <h2>How much does an electricity provider switch cost?</h2>
      <p>
        An <strong>electricity provider switch</strong> is basically and legally required to be free of charge. No switching or processing fees are charged by the energy suppliers. 
      </p>

      <h2>What should one look out for with the new electricity tariff?</h2>
      <p>
        To really save, a look at the monthly installments is not enough. Pay attention to the following details before you <strong>switch electricity contracts</strong>. For a detailed explanation of all tariff details, also read our article: <Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Compare electricity contracts correctly</Link>.
      </p>

      <h3>Unit price and base price</h3>
      <p>
        The unit price (cents per kWh) is crucial if you consume a lot of electricity. The base price (euros per month) is a fixed fee that carries weight especially with very low electricity consumption.
      </p>

      <h3>Contract term</h3>
      <p>
        Choose terms of a maximum of 12 months. This way you remain flexible and can again benefit from market fluctuations and bonuses next year.
      </p>

      <h3>Price guarantee</h3>
      <p>
        A price guarantee that extends over the entire first contract term reliably protects you from surprising cost increases on the energy market.
      </p>

      <h3>Bonus and new customer offers</h3>
      <p>
        Many providers lure with high bonuses. These are usually paid out after the first year and make the tariff very cheap in the first year. Pay attention to how the price develops in the second year if you forget to switch again.
      </p>

      <h2>What happens during the provider switch?</h2>
      <p>
        During the switch, you notice absolutely nothing in your household. The electricity meter and the lines remain untouched. There are no technician visits and above all no power outage. In the background, your new provider re-registers your meter with the network operator. The seamless electricity supply is legally regulated in Germany. Should the switch be delayed, the statutory basic and substitute supply according to the Energy Industry Act (EnWG) takes effect, as also confirmed by the <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Federal Network Agency</a>.
      </p>

      <h2>Avoid common mistakes when switching electricity providers</h2>
      <p>
        The most common mistake is independent cancellation during a regular switch, which can lead to delays. Another mistake is ignoring price increases. When you receive a letter from your provider, immediately check your special right of termination. Should you need support with the comparison or the switching process, we will gladly help you in our <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">personal tariff advice</Link> or directly via our <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">contact form</Link>.
      </p>

      <h2>Frequently asked questions about switching electricity providers</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Ready for cheaper electricity prices?</h3>
        <p className="mb-6">Compare current tariffs now and permanently reduce your electricity costs.</p>
        <Link to="/electricity">
          <Button variant="primary">Compare electricity tariffs now</Button>
        </Link>
      </div>
"""


process_file('src/pages/Ratgeber/articles/GasanbieterWechselnSchritt.tsx', faqs_en_7, jsx_en_7, "Switching Gas Providers: Step-by-Step Guide")
process_file('src/pages/Ratgeber/articles/InternetanbieterVergleichen.tsx', faqs_en_8, jsx_en_8, "Compare Internet Providers: DSL, Cable & Fiber Optics")
process_file('src/pages/Ratgeber/articles/StromanbieterWechseln.tsx', faqs_en_9, jsx_en_9, "Switching Electricity Providers: How the Switch Works")
