import os
import re

def fix_ts_errors():
    for root, _, files in os.walk('src'):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                new_content = re.sub(r'\s+defaultMuted={?(true|false)?}?', '', content)
                new_content = re.sub(r'\s+defaultMuted', '', new_content)
                
                if new_content != content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                        print(f"Fixed defaultMuted in {filepath}")

    files_to_fix = [
        'src/components/MobileBottomNav.tsx',
        'src/sections/HomeProcess.tsx'
    ]
    
    for filepath in files_to_fix:
        if os.path.exists(filepath):
            with open(filepath, 'r') as f:
                content = f.read()
            
            new_content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"];?\n?', '', content)
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                    print(f"Fixed unused React import in {filepath}")

if __name__ == '__main__':
    fix_ts_errors()
