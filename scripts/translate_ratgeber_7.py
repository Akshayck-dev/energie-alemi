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

# File 16: EnergieberaterAachen.tsx
faqs_en_16 = """[
    {
      question: "How much does an energy consultant cost for switching electricity providers?",
      answer: "At Energie Alemi, tariff advice is 100% free and without obligation. We finance ourselves via provider commissions – you don't pay a cent extra, the tariff costs you the same as if you signed up directly."
    },
    {
      question: "Do I really need a consultant, or is an online comparison portal enough?",
      answer: "Portals show prices – but no contract traps. Bonuses that only apply in the first year, automatic renewals at expensive conditions, and short price guarantees are easily overlooked. A consultant checks exactly that."
    },
    {
      question: "How fast can I switch electricity providers in Aachen?",
      answer: "Usually 2-4 weeks. The electricity supply is never interrupted at any time – this is legally guaranteed."
    },
    {
      question: "Do you also advise companies?",
      answer: "Yes. Especially for businesses with higher consumption, comparing tariffs is particularly worthwhile – we advise private customers and companies in Aachen and the region."
    },
    {
      question: "What do I need to bring to the consultation appointment?",
      answer: "Your last electricity bill (or the meter number) is sufficient. From this, we read consumption, current tariff, and notice period – we take care of the rest."
    }
  ]"""

jsx_en_16 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Anyone in Aachen who wants to <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">switch electricity providers</Link> is quickly faced with a confusing selection: Dozens of tariffs, bonuses, price guarantees, and contract clauses. An energy consultant can help – but not every consultant is the right one for every task. This guide shows what kind of help is available in Aachen and how you can recognize a good consultant for <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">switching electricity providers</Link>.
      </p>

      <h2>What kind of energy advice do you need?</h2>
      <p>The term "energy consultant" covers very different services:</p>
      <ul>
        <li><strong>Tariff and provider switch advice:</strong> Comparison of electricity, gas, and internet tariffs, review of contract terms, complete handling of the switch. This is exactly where the biggest savings lever for households lies – often several hundred euros per year.</li>
        <li><strong>Building energy advice:</strong> Renovation, insulation, heating replacement – mostly for owners and in connection with subsidy programs (BAFA, KfW).</li>
        <li><strong>Solar and photovoltaic advice:</strong> Planning of PV systems on your own roof.</li>
      </ul>
      <p>
        <strong>Important:</strong> Many classic energy consultants have their focus on buildings and renovations. Anyone who only wants to switch their electricity tariff needs a specialist for tariffs and contracts – otherwise, you pay for advice that misses your actual concern.
      </p>

      <h2>Tariff Advice: The specialist for switching providers</h2>
      <p>Tariff advice focuses on exactly one question: <em>How do you pay less for electricity, gas, and internet – without giving up anything?</em></p>
      <p>A good tariff consultant in Aachen should provide the following:</p>
      <ol>
        <li><strong>Independent comparison:</strong> Not just one or two providers, but a broad market overview – including new customer bonuses, price guarantees, and hidden costs.</li>
        <li><strong>Contract review:</strong> Term, notice period, price guarantee, and automatic contract extension are explained understandably.</li>
        <li><strong>Complete handling:</strong> Cancellation with the old provider, registration with the new one, deadline control – you don't have to worry about anything.</li>
        <li><strong>Free for you:</strong> Reputable tariff consultants finance themselves through provider commissions, not through customer fees.</li>
      </ol>
      <p>
        Energie Alemi in Aachen (Alexianergraben 9) specializes exactly in this tariff advice: We compare electricity, gas, and internet tariffs, advise personally on site or by phone – and the switching service is free and without obligation for you.
      </p>

      <h2>Consumer Center NRW: The independent alternative</h2>
      <p>
        Anyone who wants to get a completely provider-independent opinion will find a contact point in the <strong>Consumer Center NRW – Advisory Center Aachen</strong>. The consumer center helps with electricity and gas bills, price increases, provider switches, and contract problems – consumer-oriented and without sales interests.
      </p>
      <p>
        The difference to tariff advice: The consumer center advises and informs, but usually does not take over the complete switching process for you. Both offers complement each other well – many customers first use the independent information and then have the switch handled professionally.
      </p>

      <h2>How do you recognize a good consultant for switching electricity providers?</h2>
      <ul>
        <li><strong>Transparency:</strong> Costs, commissions, and process are explained openly – no hidden fees.</li>
        <li><strong>No sales pressure:</strong> A good consultant does not push for an immediate conclusion but gives you time to think.</li>
        <li><strong>Local availability:</strong> A local consultant in Aachen knows the regional providers (e.g., <Link to="/ratgeber/grundversorgung-aachen-strom-gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">STAWAG as the basic supplier</Link>) and is available for questions.</li>
        <li><strong>References and reviews:</strong> Real customer voices – such as Google reviews – say more than any advertisement.</li>
        <li><strong>Specialization:</strong> Ask directly: "Is switching electricity providers part of your core business?" If the answer is evasive, keep looking.</li>
      </ul>

      <h2>This is how the consultation at Energie Alemi works</h2>
      <ol>
        <li><strong>Free initial consultation:</strong> We record your current tariff, your consumption, and your wishes (eco-electricity? price guarantee?).</li>
        <li><strong>Individual comparison:</strong> We compare suitable tariffs – honestly, including the second-year price without sugarcoating bonuses.</li>
        <li><strong>Your decision:</strong> You choose in peace. No pressure, no obligation.</li>
        <li><strong>We handle the rest:</strong> Cancellation, registration, deadlines – the switch usually takes 2-4 weeks without your supply being interrupted.</li>
      </ol>

      <h2>Frequently asked questions about the energy consultant in Aachen</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Would you like to lower your electricity costs?</h3>
        <p className="mb-6">Arrange your free consultation now – personally in Aachen or by phone, throughout Germany.</p>
        <Link to="/contact">
          <Button variant="primary">Free Consultation</Button>
        </Link>
      </div>
"""


# File 17: DslVsGlasfaserAachen.tsx
faqs_en_17 = """[]"""

jsx_en_17 = """
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Aachen is massively expanding its fiber optic network. But is the switch from DSL to fiber optics really worthwhile for every household? We clarify the most important differences and show when the switch is worthwhile.
      </p>

      <h2>The technical difference</h2>
      <p>
        <strong>DSL (VDSL):</strong> Data is transmitted over the old copper cables of the telephone network. The further your house is from the nearest distribution box, the slower the connection becomes.
      </p>
      <p>
        <strong>Fiber optics (FTTH - Fiber to the Home):</strong> Data travels as light signals through wafer-thin fiber optic cables directly into your apartment. There are no speed losses, no matter how far away the nearest node is.
      </p>

      <h2>Advantages of fiber optics in Aachen</h2>
      <ul>
        <li><strong>Stable performance:</strong> Even in the evening hours, when all of Aachen is streaming, the speed remains constant.</li>
        <li><strong>Symmetrical bandwidths:</strong> Upload is often just as fast as download – perfect for home office and video conferences.</li>
        <li><strong>Future-proofing:</strong> Fiber optics already offer speeds of up to 1,000 Mbit/s (Gigabit) today and still have plenty of room for improvement.</li>
      </ul>

      <h2>Do I really need fiber optics?</h2>
      <p>
        For a 1- to 2-person household that streams a movie in the evening and surfs the internet a bit, a good VDSL connection (50 to 100 Mbit/s) is perfectly sufficient. However, if you regularly upload large amounts of data, live in a smart home, or intensively use the internet with several people at the same time (4K streaming, gaming, home office), fiber optics is the much better choice.
      </p>

      <h2>What is the expansion status in Aachen?</h2>
      <p>
        Local providers like NetAachen as well as big players like Telekom and Deutsche Glasfaser are driving the expansion in various districts of Aachen. There are often pre-marketing phases where the house connection is free if you sign a contract early.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Is fiber optic available at your location?</h3>
        <p className="mb-6">Use our internet comparison or visit us in our Aachen branch to check availability at your address.</p>
        <Link to="/internet">
          <Button variant="primary">Compare Internet Providers</Button>
        </Link>
      </div>
"""

process_file('src/pages/Ratgeber/articles/EnergieberaterAachen.tsx', faqs_en_16, jsx_en_16, "Energy Consultant in Aachen: Who Helps Switch Electricity Providers?")
process_file('src/pages/Ratgeber/articles/DslVsGlasfaserAachen.tsx', faqs_en_17, jsx_en_17, "DSL vs. Fiber Optic in Aachen: When is the Switch Worthwhile?")
