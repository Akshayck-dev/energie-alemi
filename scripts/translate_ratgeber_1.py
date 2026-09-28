import re
import os

def process_file(filepath, translated_faqs_str, translated_jsx_str, custom_h1_en):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We will inject the useTranslation hook if missing
    if "useTranslation" not in content:
        content = content.replace("import { Link }", "import { Link } from 'react-router';\nimport { useTranslation } from 'react-i18next';")
    
    # We will grab the component name
    match = re.search(r'export default function (\w+)\(\)', content)
    if not match: return
    comp_name = match.group(1)
    
    # Add i18n hook
    if "const { i18n } = useTranslation();" not in content:
        content = re.sub(r'(export default function ' + comp_name + r'\(\) \{\n)', r'\1  const { i18n } = useTranslation();\n', content)
        
    # Replace FAQs definition
    # Find const faqs = [ ... ];
    faq_pattern = r'(const faqs = \[.*?\];)'
    faq_match = re.search(faq_pattern, content, re.DOTALL)
    if faq_match:
        original_faqs = faq_match.group(1)
        new_faqs = f"const faqsDe = {original_faqs.replace('const faqs = ', '')}\n  const faqsEn = {translated_faqs_str};\n  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;"
        content = content.replace(original_faqs, new_faqs)
        
    # Replace ArticleLayout customH1
    content = re.sub(r'customH1="(.*?)"', r'customH1={i18n.language === \'en\' ? "' + custom_h1_en + r'" : "\1"}', content)
    
    # Replace children of ArticleLayout
    # We will extract everything between <ArticleLayout ... > and </ArticleLayout>
    # This requires careful regex
    layout_start_pattern = r'(<ArticleLayout[^>]*>)'
    layout_end_pattern = r'(</ArticleLayout>)'
    
    parts = re.split(layout_start_pattern, content, 1)
    if len(parts) == 3:
        before_layout = parts[0]
        layout_tag = parts[1]
        after_layout_tag = parts[2]
        
        inner_parts = re.split(layout_end_pattern, after_layout_tag, 1)
        if len(inner_parts) == 3:
            original_inner = inner_parts[0]
            layout_end_tag = inner_parts[1]
            after_layout = inner_parts[2]
            
            # Now we wrap the inner content
            wrapped_inner = f"\n      {{i18n.language === 'en' ? (\n        <>\n{translated_jsx_str}\n        </>\n      ) : (\n        <>{original_inner}</>\n      )}}\n    "
            
            content = before_layout + layout_tag + wrapped_inner + layout_end_tag + after_layout
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# File 1: StromAnmeldenUmzug.tsx
faqs_en_1 = """[
    {
      question: "How early should I register electricity for the new apartment?",
      answer: "It is best to organize the registration about two weeks before the key handover. This leaves time to clarify missing data. The crucial factor is that the desired delivery start is in the future."
    },
    {
      question: "Will the electricity be interrupted when switching providers?",
      answer: "No. The physical supply continues through the existing network. The contract partner for the delivery is switched, not the line."
    },
    {
      question: "What happens if I haven't signed a contract yet?",
      answer: "If you draw electricity, a delivery by the local basic supplier is regularly established. You can subsequently switch to another tariff, observing the applicable notice periods."
    },
    {
      question: "Do I have to cancel the old contract myself?",
      answer: "That depends on the case. In a regular supplier switch, the new provider often handles the cancellation. In case of moving, special cancellation, or very short notice, you should control the deregistration and cancellation yourself and get a written confirmation."
    },
  ]"""

jsx_en_1 = """
          <h2>Electricity should be registered before moving in</h2>
          <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
            Anyone moving should organize the electricity contract for the new apartment before moving in and inform the previous provider in good time about the move-out. Since June 6, 2025, registrations and deregistrations in the electricity market can no longer be made retroactively. Although the technical supplier switch can be processed within 24 hours on working days, contract terms and notice periods still apply.
          </p>
          <p>
            Without a chosen tariff, the new apartment will not remain dark: As a rule, drawing electricity creates a contract with the local basic supplier. This secures the supply, but is not automatically the most economical solution. A timely comparison provides clarity on unit price, base price, term, and price guarantee.
          </p>
          <h2>These details are needed for registration</h2>
          <h2>For a clear assignment, the following data should be ready:</h2>
          <h2>complete address of the new delivery point;</h2>
          <h2>move-in date or date of key handover;</h2>
          <h2>meter number and meter reading on the handover day;</h2>
          <h2>Market Location Identification Number (MaLo-ID), if available;</h2>
          <h2>name of the previous contracting party and customer number for the old contract;</h2>
          <h2>estimated annual consumption or last annual statement;</h2>
          <p>
            bank details for direct debit, if desired.
          </p>
          <p>
            The MaLo-ID is an eleven-digit identifier of the consumption point. It is often found on the electricity bill. If it is not at hand, the address and meter number usually help with the assignment.
          </p>
          <h2>The moving checklist in five steps</h2>
          <p>
            Check contract: Control the term, notice period, and moving clause of the existing contract. A move does not automatically end a special contract in every case.
          </p>
          <p>
            Inform provider early: Report move-out and new address as early as possible. A lead time of about two weeks gives room for queries.
          </p>
          <p>
            Compare new tariff: Compare not only the unit price, but the expected annual costs including the base price. Also check the term, extension, and warranty scope.
          </p>
          <p>
            Document meter readings: Photograph the meters in the old and new apartment on the day of handover. Note the meter number, date, and reading in the handover protocol.
          </p>
          <p>
            Check confirmations: Control delivery start, contract account, and installment. If the address or meter number are incorrect, the provider should be informed immediately.
          </p>
          <h2>24-hour switch does not mean 24-hour cancellation</h2>
          <p>
            The rule applicable since June 2025 accelerates the electronic data exchange between supplier, network operator, and meter operator. It does not cancel any minimum contract term or contractual notice period. The possible delivery start therefore still depends on the existing contract and on complete information.
          </p>
          <p>
            Particularly important: A delayed move-out notification cannot be retroactively set back to an earlier date. As a result, costs at the old delivery point can continue to run. Meter photo and handover protocol protect in case of later queries.
          </p>
          <h2>Personal support in Aachen</h2>
          <p>
            Energie Alemi checks existing contract data, compares suitable tariffs, and supports in preparing the provider switch. The consultation in Aachen is free of charge; the tariff decision remains transparently with you.
          </p>

          <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
            <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
            <p className="mb-6">Planning a move? Have your electricity tariff checked for free before moving in: Phone 0176 659 493 90 or via the contact page.</p>
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
              <li><Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Electricity Providers</Link></li>
              <li><Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Providers Aachen</Link></li>
              <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Contact</Link></li>
            </ul>
          </div>
"""

process_file('src/pages/Ratgeber/articles/StromAnmeldenUmzug.tsx', faqs_en_1, jsx_en_1, "Register Electricity when Moving: How to Switch Without a Gap")
