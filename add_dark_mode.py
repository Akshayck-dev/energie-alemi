import os
import re

mapping = {
    'bg-slate-50': 'dark:bg-[#051024]',
    'bg-slate-100': 'dark:bg-[#0c1d3d]',
    'bg-slate-200': 'dark:bg-white/10',
    'bg-slate-300': 'dark:bg-white/20',
    'bg-white': 'dark:bg-[#0a1628]',
    'bg-slate-900': 'dark:bg-white',
    'text-slate-900': 'dark:text-white',
    'text-slate-800': 'dark:text-slate-200',
    'text-slate-700': 'dark:text-slate-300',
    'text-slate-600': 'dark:text-white/80',
    'text-slate-500': 'dark:text-white/60',
    'text-slate-400': 'dark:text-white/50',
    'border-slate-200': 'dark:border-white/10',
    'border-slate-300': 'dark:border-white/20',
    'text-[#101828]': 'dark:text-white',
    'text-[#475467]': 'dark:text-slate-300',
    'border-[#e5e9f0]': 'dark:border-white/10',
}

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for old, dark_class in mapping.items():
        # Using a regex callback to append the dark_class if it doesn't already exist right after
        def repl(match):
            original = match.group(0)
            # if dark_class is already somewhere nearby in the string, skip to avoid duplicates?
            # actually it's easier to just do a naive replace and then clean up duplicates
            return f"{old} {dark_class}"
            
        # Match the old class name, bounded by word boundaries or quotes/spaces
        # But ensure we don't match if it's ALREADY followed by dark:
        # Regex: find 'bg-white', but only if not followed by ' dark:bg-[#0a1628]'
        pattern = r'\b' + re.escape(old) + r'\b(?!\s+' + re.escape(dark_class) + r')'
        new_content = re.sub(pattern, f"{old} {dark_class}", new_content)
    
    # Clean up any potential duplicates caused by previous script or manual edits
    for old, dark_class in mapping.items():
        dup = f"{old} {dark_class} {dark_class}"
        new_content = new_content.replace(dup, f"{old} {dark_class}")
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            update_file(os.path.join(root, file))
