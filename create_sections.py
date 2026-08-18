import os

def copy_and_modify(src, dest, replacements):
    with open(src, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(dest, 'w') as f:
        f.write(content)

base_dir = '/Users/akshay/Downloads/german/energie-alemi/src/sections'

# 1. Services
services_replacements = [
    ('HomeServices', 'TarifberatungServices'),
    ("id: 'electricity'", "id: 'strom'"),
    ("id: 'gas'", "id: 'gas'"),
    ("id: 'internet'", "id: 'internet'"),
    ("t('home_services.subtitle')", "t('tarifberatung.services_sub')"),
    ("t('home_services.title_part1')", "t('tarifberatung.services_title')"),
    ("<span className=\"text-slate-400 dark:text-white/50\">{t('home_services.title_part2')}</span>", ""),
    ("t(`home_services.items.${service.id}.title`)", "t(`tarifberatung.${service.id}_title`)"),
    ("t(`home_services.items.${service.id}.description`)", "t(`tarifberatung.${service.id}_desc`)"),
    ("to={'/' + service.id}", "to={'/tarifberatung-aachen'}") # or wherever it should link, maybe contact?
]
copy_and_modify(f'{base_dir}/HomeServices.tsx', f'{base_dir}/TarifberatungServices.tsx', services_replacements)

# 2. Process
process_replacements = [
    ('HomeProcess', 'TarifberatungProcess'),
    ("t('home_process.step1_title')", "t('tarifberatung.process_s1_t')"),
    ("t('home_process.step1_desc')", "t('tarifberatung.process_s1_d')"),
    ("t('home_process.step2_title')", "t('tarifberatung.process_s2_t')"),
    ("t('home_process.step2_desc')", "t('tarifberatung.process_s2_d')"),
    ("t('home_process.step3_title')", "t('tarifberatung.process_s3_t')"),
    ("t('home_process.step3_desc')", "t('tarifberatung.process_s3_d')"),
    ("t('home_process.step4_title')", "t('tarifberatung.process_s4_t')"),
    ("t('home_process.step4_desc')", "t('tarifberatung.process_s4_d')"),
    ("t('home_process.subtitle')", "t('tarifberatung.process_sub')"),
    ("t('home_process.title')", "t('tarifberatung.process_title')"),
]
copy_and_modify(f'{base_dir}/HomeProcess.tsx', f'{base_dir}/TarifberatungProcess.tsx', process_replacements)

# 3. Promise
promise_replacements = [
    ('HomePromise', 'TarifberatungPromise'),
    ("t('home_promise.subtitle')", "''"),
    ("t('home_promise.title_line1')", "t('tarifberatung.trust_title')"),
    ("<br />\\n              <span className=\"text-[#0047AB] dark:text-[#4F8CFF]\">{t('home_promise.title_line2')}</span>", ""),
    ("t('home_promise.description')", "t('tarifberatung.trust_desc')"),
    ("t('home_promise.quote')", "t('tarifberatung.trust_box_1')"),
]
copy_and_modify(f'{base_dir}/HomePromise.tsx', f'{base_dir}/TarifberatungPromise.tsx', promise_replacements)

print("Done")
