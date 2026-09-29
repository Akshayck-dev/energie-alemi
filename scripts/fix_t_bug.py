import os

def fix_gas():
    f = 'src/pages/Gas.tsx'
    if not os.path.exists(f): return
    with open(f, 'r') as file: content = file.read()
    
    # We need to replace:
    # {t('gas.cross_l5', i18n.language === 'en' ? 'gas comparison guide' : 'Gasvergleich-Ratgeber')}
    # with just:
    # {i18n.language === 'en' ? 'gas comparison guide' : 'Gasvergleich-Ratgeber'}
    content = content.replace(
        "{t('gas.cross_l5', i18n.language === 'en' ? 'gas comparison guide' : 'Gasvergleich-Ratgeber')}",
        "{i18n.language === 'en' ? 'gas comparison guide' : 'Gasvergleich-Ratgeber'}"
    )
    content = content.replace(
        "{t('gas.cross_l6', i18n.language === 'en' ? 'switching gas providers' : 'Gasanbieter wechseln')}",
        "{i18n.language === 'en' ? 'switching gas providers' : 'Gasanbieter wechseln'}"
    )
    with open(f, 'w') as file: file.write(content)

def fix_elec():
    f = 'src/pages/Electricity.tsx'
    if not os.path.exists(f): return
    with open(f, 'r') as file: content = file.read()
    
    content = content.replace(
        "{t('elec.cross_l5', i18n.language === 'en' ? 'switching electricity providers' : 'Stromanbieter wechseln')}",
        "{i18n.language === 'en' ? 'switching electricity providers' : 'Stromanbieter wechseln'}"
    )
    with open(f, 'w') as file: file.write(content)

fix_gas()
fix_elec()
print("Fixed t() bug")
