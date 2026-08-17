import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  console.log('🚀 Starting static prerendering...');

  // 1. Build the SSR bundle for static prerendering
  await build({
    build: {
      ssr: true,
      outDir: 'dist-ssr',
      rollupOptions: {
        input: 'src/entry-server.tsx'
      }
    }
  });

  console.log('✅ Server-side bundle for static prerendering compiled in dist-ssr/');

  // 2. Import the render function from compiled bundle
  const serverBundlePath = path.join(__dirname, '../dist-ssr/entry-server.js');
  const { render } = await import(`file://${serverBundlePath}`);

  // 3. Read sitemap manifest and index template
  const manifestPath = path.join(__dirname, '../src/routes-manifest.json');
  const routes = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  const templatePath = path.join(__dirname, '../dist/index.html');
  
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Error: dist/index.html template not found. Run client build first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // 4. Render each public and indexable route
  const publicRoutes = routes.filter(r => r.isPublic && r.isIndexable);

  for (const route of publicRoutes) {
    const url = route.path;
    console.log(`Prerendering route: ${url}`);

    const helmetContext = {};
    const appHtml = render(url, helmetContext);

    // Extract SEO tags from the rendered string (due to React 19/Vite SSR context behavior)
    let headTags = [];
    let cleanedAppHtml = appHtml;

    // 1. Title tags
    const titleRegex = /<title[^>]*>([\s\S]*?)<\/title>/gi;
    const titles = cleanedAppHtml.match(titleRegex);
    if (titles) {
      headTags.push(...titles.map(t => t.replace('<title', '<title data-rh="true"')));
      cleanedAppHtml = cleanedAppHtml.replace(titleRegex, '');
    }

    // 2. Meta tags
    const metaRegex = /<meta[^>]*\/?>/gi;
    const metas = cleanedAppHtml.match(metaRegex);
    if (metas) {
      headTags.push(...metas.map(m => m.includes('data-rh') ? m : m.replace('<meta', '<meta data-rh="true"')));
      cleanedAppHtml = cleanedAppHtml.replace(metaRegex, '');
    }

    // 3. Link tags (e.g. canonical)
    const linkRegex = /<link[^>]*\/?>/gi;
    const links = cleanedAppHtml.match(linkRegex);
    if (links) {
      headTags.push(...links.map(l => l.includes('data-rh') ? l : l.replace('<link', '<link data-rh="true"')));
      cleanedAppHtml = cleanedAppHtml.replace(linkRegex, '');
    }

    // 4. Structured data script tags
    const scriptRegex = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
    const scripts = cleanedAppHtml.match(scriptRegex);
    if (scripts) {
      headTags.push(...scripts.map(s => s.includes('data-rh') ? s : s.replace('<script', '<script data-rh="true"')));
      cleanedAppHtml = cleanedAppHtml.replace(scriptRegex, '');
    }

    const headContent = headTags.join('\n');

    // Replace placeholders in index.html template
    let html = template;
    
    // Inject HTML lang attribute from Helmet if available, else fallback
    html = html.replace(/<html[^>]*>/, `<html lang="de">`);
    
    // Remove the default dev title in index.html to prevent duplication
    html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
    
    // Inject Helmet head tags inside <head>
    html = html.replace('</head>', `${headContent}\n</head>`);
    
    // Inject cleaned rendered application HTML inside root div
    html = html.replace('<div id="root"></div>', `<div id="root">${cleanedAppHtml}</div>`);

    if (url === '/') {
      const outputDir = path.join(__dirname, '../dist');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      fs.writeFileSync(path.join(outputDir, 'index.html'), html);
    } else {
      const outPath = path.join(__dirname, '../dist', `${url}.html`);
      const outputDir = path.dirname(outPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      fs.writeFileSync(outPath, html);
    }
  }

  // 5. Clean up temporary SSR build directory used for prerendering
  fs.rmSync(path.join(__dirname, '../dist-ssr'), { recursive: true, force: true });
  
  // 6. Clean up macOS metadata .DS_Store if present in dist
  const dsStorePath = path.join(__dirname, '../dist/.DS_Store');
  if (fs.existsSync(dsStorePath)) {
    fs.unlinkSync(dsStorePath);
    console.log('🧹 Cleaned up dist/.DS_Store');
  }

  console.log('✅ Static prerendering completed successfully!');
}

run().catch((e) => {
  console.error('❌ Prerendering failed:', e);
  process.exit(1);
});
