import json

# 1. Update ratgeberArticles.ts
with open('src/data/ratgeberArticles.ts', 'r') as f:
    ts_content = f.read()

if "'energieberater-aachen'" not in ts_content:
    idx = ts_content.rfind('];')
    entry = """  ,{
    id: '17',
    slug: 'energieberater-aachen',
    title: 'Energieberater Aachen: Hilfe beim Stromanbieterwechsel',
    description: 'Energieberater in Aachen gesucht? Wir zeigen, wer beim Stromanbieterwechsel wirklich hilft – Tarifberatung, Verbraucherzentrale & worauf Sie achten sollten.',
    category: 'Strom',
    publishedDate: '2026-09-28',
    componentName: 'EnergieberaterAachen'
  }"""
    updated_ts = ts_content[:idx] + entry + "\n" + ts_content[idx:]
    with open('src/data/ratgeberArticles.ts', 'w') as f:
        f.write(updated_ts)

# 2. Update routes-manifest.json
with open('src/routes-manifest.json', 'r') as f:
    manifest = json.load(f)

found = any(r['path'] == '/ratgeber/energieberater-aachen' for r in manifest)
if not found:
    manifest.append({
        "path": "/ratgeber/energieberater-aachen",
        "isPublic": True,
        "isIndexable": True,
        "title": "Energieberater Aachen: Hilfe beim Stromanbieterwechsel",
        "description": "Energieberater in Aachen gesucht? Wir zeigen, wer beim Stromanbieterwechsel wirklich hilft – Tarifberatung, Verbraucherzentrale & worauf Sie achten sollten.",
        "canonical": "/ratgeber/energieberater-aachen",
        "sitemapInclusion": True,
        "lastmod": "2026-09-28",
        "structuredDataType": "Article"
    })
    with open('src/routes-manifest.json', 'w') as f:
        json.dump(manifest, f, indent=2)

# 3. Update AppRoutes.tsx
with open('src/AppRoutes.tsx', 'r') as f:
    routes_ts = f.read()

if "EnergieberaterAachen" not in routes_ts:
    import_insert_pos = routes_ts.find('export default function AppRoutes()')
    routes_ts = routes_ts[:import_insert_pos] + "import EnergieberaterAachen from './pages/Ratgeber/articles/EnergieberaterAachen';\n" + routes_ts[import_insert_pos:]
    
    route_insert_pos = routes_ts.find('<Route path="*" element={<NotFound />} />')
    routes_ts = routes_ts[:route_insert_pos] + '      <Route path="/ratgeber/energieberater-aachen" element={<EnergieberaterAachen />} />\n' + routes_ts[route_insert_pos:]
    
    with open('src/AppRoutes.tsx', 'w') as f:
        f.write(routes_ts)

print("Added energieberater-aachen to manifests")
