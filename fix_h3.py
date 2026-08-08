import os
import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    original = content
    # Look for h3 with specific classes that indicate it's a subtitle/eyebrow above a h2
    content = re.sub(r'<h3 className="text-\[#0047AB\] font-heading font-medium tracking-wider uppercase text-sm mb-2">(.*?)</h3>', r'<p className="text-[#0047AB] font-heading font-medium tracking-wider uppercase text-sm mb-2">\1</p>', content, flags=re.DOTALL)

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed h3 in {filepath}")

for root, _, files in os.walk('src/sections'):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))
