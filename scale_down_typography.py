import os
import re

def scale_typography():
    files_to_update = [
        'src/sections/HomeHero.tsx',
        'src/sections/HomeFeatures.tsx',
        'src/sections/HomeServices.tsx',
        'src/sections/HomeProcess.tsx',
        'src/sections/HomePromise.tsx',
        'src/sections/HomeMeeting.tsx'
    ]

    replacements = [
        # Hero specific
        (r'text-4xl sm:text-5xl md:text-6xl lg:text-\[5rem\]', r'text-4xl sm:text-5xl lg:text-6xl'),
        (r'text-base sm:text-lg md:text-xl', r'text-base md:text-lg'),
        
        # Section titles
        (r'text-3xl md:text-5xl', r'text-3xl md:text-4xl'),
        (r'text-4xl md:text-5xl', r'text-3xl md:text-4xl'),
        
        # Descriptions and card text
        (r'text-base md:text-lg', r'text-base'),
        (r'text-lg md:text-xl', r'text-base md:text-lg'),
        
        # Specific sub-headings
        (r'text-2xl font-bold', r'text-xl font-bold'),
    ]

    for filepath in files_to_update:
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r') as f:
            content = f.read()
            
        new_content = content
        for pattern, replacement in replacements:
            new_content = re.sub(pattern, replacement, new_content)
            
        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated typography in {filepath}")

if __name__ == '__main__':
    scale_typography()
