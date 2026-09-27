import json

# 1. Patch ratgeberArticles.ts
with open('src/data/ratgeberArticles.ts', 'r') as f:
    ts_content = f.read()

ts_content = ts_content.replace(
    "'Grundversorgung Aachen: Strom und Gas – Kündigung und Tarifwechsel'",
    "'Grundversorgung Aachen: Strom & Gas'"
)
ts_content = ts_content.replace(
    "'Stromvergleich: Worauf sollte man bei einem Stromtarif achten?'",
    "'Stromvergleich 2026: Tarife vergleichen'"
)
ts_content = ts_content.replace(
    "'Internetanbieter vergleichen: Darauf sollten Sie achten'",
    "'Internetanbieter vergleichen 2026'"
)

with open('src/data/ratgeberArticles.ts', 'w') as f:
    f.write(ts_content)

# 2. Patch routes-manifest.json
with open('src/routes-manifest.json', 'r') as f:
    manifest = json.load(f)

for route in manifest:
    if route['path'] == '/internet':
        route['title'] = "Internetanbieter vergleichen | DSL, Kabel, Glasfaser"
        route['description'] = "Internetanbieter vergleichen: Sichern Sie sich passende und schnelle Tarife für DSL, Kabel und Glasfaser zum besten Preis."
    elif route['path'] == '/ratgeber/grundversorgung-aachen-strom-gas':
        route['title'] = "Grundversorgung Aachen: Strom & Gas"
    elif route['path'] == '/ratgeber/stromvergleich':
        route['title'] = "Stromvergleich 2026: Tarife vergleichen"
    elif route['path'] == '/ratgeber/internetanbieter-vergleichen':
        route['title'] = "Internetanbieter vergleichen 2026"

with open('src/routes-manifest.json', 'w') as f:
    json.dump(manifest, f, indent=2)

# 3. Patch translation.json for /internet/ H1 and any "Aachen" text
with open('public/locales/de/translation.json', 'r') as f:
    translations = json.load(f)

translations['net_hero']['title'] = "Internetanbieter vergleichen: DSL, Kabel, Glasfaser"

with open('public/locales/de/translation.json', 'w') as f:
    json.dump(translations, f, indent=2, ensure_ascii=False)

print("SEO patched successfully.")
