import re
import os
import json

def parse_article(filepath, idx):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = [line.strip() for line in f.readlines() if line.strip()]

    # First line is Title (H1) e.g. "1. Strom anmelden beim Umzug: So klappt der Wechsel ohne Lücke"
    h1 = re.sub(r'^\d+\.\s*', '', lines[0])

    data = {
        'h1': h1,
        'slug': '',
        'seo_title': '',
        'meta_desc': '',
        'category': 'Strom', # default
        'faqs': [],
        'body': [],
        'internal_links': [],
        'cta': ''
    }

    state = 'META'
    i = 1
    while i < len(lines):
        line = lines[i]
        if line == 'Empfohlener Slug':
            data['slug'] = lines[i+1].replace('/ratgeber/', '').strip()
            i += 2
            continue
        elif line == 'SEO-Titel':
            data['seo_title'] = lines[i+1]
            i += 2
            continue
        elif line == 'Meta-Description':
            data['meta_desc'] = lines[i+1]
            i += 2
            continue
        elif line == 'Primärkeyword':
            i += 2
            continue
        elif line == 'Sekundärkeywords':
            i += 2
            state = 'BODY'
            continue
        elif line == 'Häufige Fragen':
            state = 'FAQ'
            i += 1
            continue
        elif line.startswith('CTA:'):
            data['cta'] = line.replace('CTA:', '').strip()
            i += 1
            continue
        elif line.startswith('Interne Links:'):
            links = line.replace('Interne Links:', '').split('·')
            data['internal_links'] = [l.strip() for l in links if l.strip()]
            i += 1
            continue
        
        if state == 'BODY':
            # Check if it's a heading (no punctuation at end, short)
            if not line.endswith('.') and len(line) < 80 and not line.startswith('CTA:'):
                # Is it H2 or H3? Let's just make it H2 unless it starts with a number or something
                data['body'].append({'type': 'h2', 'text': line})
            elif line.startswith('Beispiel:') or line.endswith(':'):
                data['body'].append({'type': 'p', 'text': line})
            else:
                data['body'].append({'type': 'p', 'text': line})
        elif state == 'FAQ':
            if line.endswith('?'):
                question = line
                # Read next lines until next question or Interne Links
                answer = ''
                i += 1
                while i < len(lines) and not lines[i].endswith('?') and not lines[i].startswith('Interne Links:'):
                    answer += lines[i] + ' '
                    i += 1
                data['faqs'].append({'q': question, 'a': answer.strip()})
                continue
        i += 1

    # Heuristic for Category
    if 'gas' in data['slug'].lower():
        data['category'] = 'Gas'
    elif 'internet' in data['slug'].lower():
        data['category'] = 'Internet'

    # Convert component name
    parts = data['slug'].split('-')
    comp_name = ''.join([p.capitalize() for p in parts])
    data['component_name'] = comp_name

    return data

def generate_tsx(data):
    tsx = f"""import {{ Link }} from 'react-router';
import ArticleLayout from '../ArticleLayout';
import {{ articles }} from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function {data['component_name']}() {{
  const article = articles.find(a => a.slug === '{data['slug']}')!;

  const faqs = [
"""
    for faq in data['faqs']:
        tsx += f"""    {{
      question: "{faq['q'].replace('"', '\\"')}",
      answer: "{faq['a'].replace('"', '\\"')}"
    }},
"""
    tsx += """  ];

  return (
    <ArticleLayout 
      article={article} 
      customH1=""" + f'"{data["h1"]}"' + """
      faqs={faqs}
    >
"""
    
    first_p = True
    for block in data['body']:
        if block['type'] == 'h2':
            tsx += f"      <h2>{block['text']}</h2>\n"
        elif block['type'] == 'p':
            if first_p:
                tsx += f"      <p className=\"lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8\">\n        {block['text']}\n      </p>\n"
                first_p = False
            else:
                tsx += f"      <p>\n        {block['text']}\n      </p>\n"

    if data['cta']:
        tsx += f"""
      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">{data['cta']}</p>
        <Link to="/contact">
          <Button variant="primary">Jetzt Kontakt aufnehmen</Button>
        </Link>
      </div>
"""

    if data['faqs']:
        tsx += """
      <h2>Häufige Fragen</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>
"""

    if data['internal_links']:
        tsx += """
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-4">Weitere Informationen</h3>
        <ul className="flex flex-col gap-2">
"""
        for link in data['internal_links']:
            name = link.split('/')[-1].replace('-', ' ').title()
            if not name: name = "Startseite"
            tsx += f"          <li><Link to=\"{link}\" className=\"text-[#0047AB] dark:text-[#60a5fa] hover:underline\">{name}</Link></li>\n"
        tsx += """        </ul>
      </div>
"""

    tsx += """
    </ArticleLayout>
  );
}
"""
    return tsx

articles_data = []
for i in range(1, 9):
    data = parse_article(f"src/article_{i}.txt", i)
    articles_data.append(data)
    with open(f"src/pages/Ratgeber/articles/{data['component_name']}.tsx", "w") as f:
        f.write(generate_tsx(data))

# Now generate RatgeberArticles entries and manifest updates.
with open('src/batch1_metadata.json', 'w') as f:
    json.dump(articles_data, f, indent=2)

print("Generated 8 components!")
