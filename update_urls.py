import os
import re

pages = {
    'Home': '/',
    'Gas': '/gas',
    'Electricity': '/electricity',
    'Internet': '/internet',
    'About': '/about',
    'Contact': '/contact'
}

for page, url in pages.items():
    file_path = f"src/pages/{page}.tsx"
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r') as f:
        content = f.read()
        
    # Find the <SEO ... /> tag and add url="{url}" if not present
    if 'url="' not in content:
        content = re.sub(r'(<SEO [^>]*?)(\s*/>)', rf'\1 url="{url}"\2', content)
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"Updated URL for {page}.tsx")

