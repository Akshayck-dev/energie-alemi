import os
import re

for page in ['Gas', 'Electricity', 'Internet']:
    file_path = f"src/pages/{page}.tsx"
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r') as f:
        content = f.read()

    # Find where <SEO ... /> is.
    # Change it to <SEO ... faqs={faqs} />
    if 'faqs={faqs}' not in content:
        content = re.sub(r'(<SEO [^>]*?)(\s*/>)', r'\1 faqs={faqs}\2', content)
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"Updated {page}.tsx")

