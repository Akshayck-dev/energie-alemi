import glob, re

for filepath in glob.glob("src/pages/*.tsx"):
    with open(filepath) as f:
        content = f.read()
    
    original = content
    
    # We are looking for lines that have {i18n.language === "en" ? "..." : "{i18n... : "..."}
    # Or lines that have `{i18n.language === "en" ? "..." : " ... <Link ... </Link>."}
    
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'i18n.language' in line and '<Link' in line and '?' in line:
            # If it's something like: {i18n.language === "en" ? "..." : " ... <Link ... </Link>."}
            # Or nested: {i18n.language === "en" ? "..." : "{i18n.language === "en" ? "..." : " ... <Link ... </Link>."}
            
            # Let's just fix it manually by reading the line and replacing the outermost quotes with <> </> if there is JSX
            # Wait, the easiest way is to use regex.
            pass

