import os, glob

replacements = {
    'So läuft die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Internetberatung</span> in vier Schritten':
    '{i18n.language === "en" ? "This is how the " : "So läuft die "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "internet advice" : "Internetberatung"}</span>{i18n.language === "en" ? " works in four steps" : " in vier Schritten"}',

    'So läuft der <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Gasvergleich</span> in vier klaren Schritten':
    '{i18n.language === "en" ? "This is how the " : "So läuft der "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "gas comparison" : "Gasvergleich"}</span>{i18n.language === "en" ? " works in four clear steps" : " in vier klaren Schritten"}',

    'So funktioniert die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Gas-Tarifberatung</span>':
    '{i18n.language === "en" ? "This is how the " : "So funktioniert die "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "gas tariff advice" : "Gas-Tarifberatung"}</span>{i18n.language === "en" ? " works" : ""}',

    'So funktioniert die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Internet-Tarifberatung</span>':
    '{i18n.language === "en" ? "This is how the " : "So funktioniert die "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "internet tariff advice" : "Internet-Tarifberatung"}</span>{i18n.language === "en" ? " works" : ""}',

    'So läuft der <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Stromvergleich</span> in vier Schritten':
    '{i18n.language === "en" ? "This is how the " : "So läuft der "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "electricity comparison" : "Stromvergleich"}</span>{i18n.language === "en" ? " works in four steps" : " in vier Schritten"}',

    'So läuft die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Stromberatung</span> in vier Schritten':
    '{i18n.language === "en" ? "This is how the " : "So läuft die "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "electricity advice" : "Stromberatung"}</span>{i18n.language === "en" ? " works in four steps" : " in vier Schritten"}',

    'So läuft die <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">Internet-Tarifberatung</span> ab':
    '{i18n.language === "en" ? "This is how the " : "So läuft die "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "internet tariff advice" : "Internet-Tarifberatung"}</span>{i18n.language === "en" ? " works" : " ab"}',
}

for filepath in glob.glob("src/pages/*anbieter*.tsx"):
    with open(filepath) as f:
        content = f.read()
    
    original = content
    for old, new in replacements.items():
        if old in content:
            content = content.replace(old, new)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed spans in {os.path.basename(filepath)}")

