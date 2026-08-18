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

const DEPLOYMENT_ENV = process.env.VITE_DEPLOYMENT_ENV || getEnvValue('VITE_DEPLOYMENT_ENV') || 'production';
const ALLOW_INDEXING = process.env.VITE_ALLOW_INDEXING || getEnvValue('VITE_ALLOW_INDEXING') || 'true';
const SITE_URL = process.env.VITE_SITE_URL || getEnvValue('VITE_SITE_URL');

console.log(`🔍 Running build validation: ENV=${DEPLOYMENT_ENV}, ALLOW_INDEXING=${ALLOW_INDEXING}, SITE_URL=${SITE_URL}`);

// 1. Strict production indexing check
const isProdEnv = DEPLOYMENT_ENV === 'production';
const isAllowIndexing = ALLOW_INDEXING === 'true';
const isProdUrl = SITE_URL === 'https://www.energie-alemi.de' || SITE_URL === 'https://energie-alemi.de';

if (isProdEnv) {
  if (!isAllowIndexing || !isProdUrl) {
    console.error(`❌ Error: Production environment requires ALLOW_INDEXING=true and correct SITE_URL.`);
    console.error(`Details: ALLOW_INDEXING="${ALLOW_INDEXING}" (expected "true"), SITE_URL="${SITE_URL}"`);
    process.exit(1);
  }
}

if (isAllowIndexing) {
  if (!isProdEnv || !isProdUrl) {
    console.error(`❌ Error: Indexing is allowed (VITE_ALLOW_INDEXING=true) but environment is not production.`);
    console.error(`Details: DEPLOYMENT_ENV="${DEPLOYMENT_ENV}" (expected "production"), SITE_URL="${SITE_URL}"`);
    process.exit(1);
  }
}

// 2. Validate VITE_SITE_URL format
if (isProdEnv) {
  if (!SITE_URL) {
    console.error('❌ Error: VITE_SITE_URL is required for production builds');
    process.exit(1);
  }
  if (SITE_URL.includes('localhost') || SITE_URL.includes('vercel.app')) {
    console.error('❌ Error: VITE_SITE_URL must not contain localhost or vercel.app in production');
    process.exit(1);
  }
}

// 3. Scan generated dist/index.html to ensure template does not conflict
const distIndexHtmlPath = path.join(__dirname, '../dist/index.html');
if (fs.existsSync(distIndexHtmlPath)) {
  const html = fs.readFileSync(distIndexHtmlPath, 'utf-8');
  if (html.includes('noindex') && ALLOW_INDEXING === 'true') {
    console.error('❌ Error: dist/index.html contains raw "noindex" but indexing is allowed in production');
    process.exit(1);
  }
}

console.log('✅ Build validation passed successfully!');
process.exit(0);
