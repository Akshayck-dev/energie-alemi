import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getEnvValue(key) {
  try {
    const envFile = fs.readFileSync(path.join(__dirname, '../.env'), 'utf-8');
    const match = envFile.match(new RegExp(`^${key}=(.*)$`, 'm'));
    return match ? match[1].trim() : undefined;
  } catch (e) {
    return undefined;
  }
}

const BASE_URL = process.env.VITE_SITE_URL || getEnvValue('VITE_SITE_URL') || 'PRODUCTION_DOMAIN';

const routes = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/gas', priority: 0.9, changefreq: 'weekly' },
  { url: '/electricity', priority: 0.9, changefreq: 'weekly' },
  { url: '/internet', priority: 0.9, changefreq: 'weekly' },
  { url: '/about', priority: 0.6, changefreq: 'monthly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' }
];

function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('✅ sitemap.xml generated in public/ directory.');
}

function generateRobotsTxt() {
  const txt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  const publicDir = path.join(__dirname, '../public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), txt);
  console.log('✅ robots.txt generated in public/ directory.');
}

generateSitemap();
generateRobotsTxt();
