import os
import re

def fix_file(filepath):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f:
        content = f.read()

    original = content
    # Replace <h3> eyebrow texts with <p> to fix hierarchy
    content = re.sub(r'<h3([^>]*(?:subtitle|eyebrow)[^>]*)>(.*?)</h3>', r'<p\1>\2</p>', content, flags=re.DOTALL)
    # Sometimes it's h4 eyebrow before h3
    content = re.sub(r'<h4([^>]*(?:subtitle|eyebrow)[^>]*)>(.*?)</h4>', r'<p\1>\2</p>', content, flags=re.DOTALL)
    
    # Add width/height to founder image in About.tsx
    if 'ownerImg' in content and '<img ' in content:
        content = re.sub(r'(<img\s+src=\{ownerImg\}[^>]*?)(/?>)', r'\1 width="500" height="600" \2', content)

    # Add width/height to smart-home image in HomeServices.tsx
    if 'smartHomeImg' in content and '<img ' in content:
        content = re.sub(r'(<img\s+src=\{smartHomeImg\}[^>]*?)(/?>)', r'\1 width="800" height="600" \2', content)

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))

