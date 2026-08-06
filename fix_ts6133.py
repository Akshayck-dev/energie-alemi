import re

def replace_in_file(filepath, pattern, replacement):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = re.sub(pattern, replacement, content, count=1)
    
    with open(filepath, 'w') as f:
        f.write(new_content)

replace_in_file('src/components/FloatingActionButtons.tsx', r'import React, ', 'import ')

replace_in_file('src/components/Footer.tsx', r', Zap', '')

replace_in_file('src/components/ui/FAQ.tsx', r'import React, ', 'import ')

replace_in_file('src/layouts/MainLayout.tsx', r', useRef', '')
