import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to read config from .env
function getEnvValue(key) {
  try {
    const envFile = fs.readFileSync(path.join(__dirname, '../.env'), 'utf-8');
    const match = envFile.match(new RegExp(`^${key}=(.*)$`, 'm'));
    return match ? match[1].trim() : undefined;
  } catch (e) {
    return undefined;
  }
}

const BASE_URL = process.env.VITE_SITE_URL || getEnvValue('VITE_SITE_URL') || 'https://www.energie-alemi.de';
const DEPLOYMENT_ENV = process.env.VITE_DEPLOYMENT_ENV || getEnvValue('VITE_DEPLOYMENT_ENV') || 'production';

// Read manifest
const manifestPath = path.join(__dirname, '../src/routes-manifest.json');
const routes = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

function generateSitemap() {
  // Filter for indexable routes included in sitemap
  const sitemapRoutes = routes.filter(route => route.sitemapInclusion && route.isIndexable);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  sitemapRoutes.forEach(route => {
    const loc = `${BASE_URL.replace(/\/$/, '')}${route.path === '/' ? '' : route.path}`;
    xml += `  <url>\n`;
    xml += `    <loc>${loc}</loc>\n`;
    if (route.lastmod) {
      xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    }
    xml += `  </url>\n`;
  });
  
  xml += `</urlset>\n`;

  // Write to public/
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('✅ sitemap.xml generated in public/ directory.');

  // Write to dist/ (if it exists)
  const distDir = path.join(__dirname, '../dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
    console.log('✅ sitemap.xml copied to dist/ directory.');
  }
}

function generateRobotsTxt() {
  const allow = DEPLOYMENT_ENV === 'production' ? 'Allow: /' : 'Allow: /'; // Staging must be crawlable in robots.txt to read noindex meta, per instruction
  const sitemapUrl = `${BASE_URL.replace(/\/$/, '')}/sitemap.xml`;
  
  const txt = `User-agent: *
${allow}

Sitemap: ${sitemapUrl}
`;

  // Write to public/
  const publicDir = path.join(__dirname, '../public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), txt);
  console.log('✅ robots.txt generated in public/ directory.');

  // Write to dist/ (if it exists)
  const distDir = path.join(__dirname, '../dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'robots.txt'), txt);
    console.log('✅ robots.txt copied to dist/ directory.');
  }
}

generateSitemap();
generateRobotsTxt();
