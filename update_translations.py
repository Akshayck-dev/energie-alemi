import json
import glob

locales = glob.glob('public/locales/*/translation.json')
for file_path in locales:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    if 'nav' in data and 'ratgeber' not in data['nav']:
        # For simplicity, we just use "Ratgeber" in all languages, or translate if known
        if '/en/' in file_path:
            data['nav']['ratgeber'] = 'Guides'
        elif '/tr/' in file_path:
            data['nav']['ratgeber'] = 'Rehber'
        elif '/ar/' in file_path:
            data['nav']['ratgeber'] = 'دليل'
        else:
            data['nav']['ratgeber'] = 'Ratgeber'
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Updated {file_path}")

