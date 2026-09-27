import json
import re

with open('src/batch1_metadata.json', 'r') as f:
    articles = json.load(f)

# 1. Update ratgeberArticles.ts
with open('src/data/ratgeberArticles.ts', 'r') as f:
    ts_content = f.read()

# Find the array end `];`
idx = ts_content.rfind('];')
new_entries = []
start_id = 9
for a in articles:
    entry = f"""  {{
    id: '{start_id}',
    slug: '{a["slug"]}',
    title: '{a["seo_title"].replace("'", "\\'")}',
    description: '{a["meta_desc"].replace("'", "\\'")}',
    category: '{a["category"]}',
    publishedDate: '2026-09-27',
    componentName: '{a["component_name"]}'
  }}"""
    new_entries.append(entry)
    start_id += 1

updated_ts = ts_content[:idx] + ",\n" + ",\n".join(new_entries) + "\n" + ts_content[idx:]
with open('src/data/ratgeberArticles.ts', 'w') as f:
    f.write(updated_ts)

# 2. Update routes-manifest.json
with open('src/routes-manifest.json', 'r') as f:
    manifest = json.load(f)

for a in articles:
    manifest.append({
        "path": f"/ratgeber/{a['slug']}",
        "isPublic": True,
        "isIndexable": True,
        "title": a["seo_title"],
        "description": a["meta_desc"],
        "canonical": f"/ratgeber/{a['slug']}",
        "sitemapInclusion": True,
        "lastmod": "2026-09-27",
        "structuredDataType": "Article"
    })

with open('src/routes-manifest.json', 'w') as f:
    json.dump(manifest, f, indent=2)

# 3. Update AppRoutes.tsx
with open('src/AppRoutes.tsx', 'r') as f:
    routes_ts = f.read()

imports = []
routes = []
for a in articles:
    imports.append(f"import {a['component_name']} from './pages/Ratgeber/articles/{a['component_name']}';")
    routes.append(f"      <Route path=\"/ratgeber/{a['slug']}\" element={{<{a['component_name']} />}} />")

# Insert imports
import_insert_pos = routes_ts.find('export default function AppRoutes()')
routes_ts = routes_ts[:import_insert_pos] + "\n".join(imports) + "\n\n" + routes_ts[import_insert_pos:]

# Insert routes
route_insert_pos = routes_ts.find('<Route path="*" element={<NotFound />} />')
routes_ts = routes_ts[:route_insert_pos] + "\n".join(routes) + "\n      " + routes_ts[route_insert_pos:]

with open('src/AppRoutes.tsx', 'w') as f:
    f.write(routes_ts)

print("Updated manifests and routes!")
