import fs from 'fs';
import path from 'path';

const distDir = './dist';

function walkHtmlFiles(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      files = files.concat(walkHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  return files;
}

const htmlFiles = walkHtmlFiles(distDir);

console.log('=== Verifying Prerendered HTML Files for https://energie-alemi.de ===');
let allValid = true;

htmlFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(distDir, filePath);
  
  // Extract canonical tag
  const canonicalMatch = content.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i) || content.match(/<link[^>]*href="([^"]+)"[^>]*rel="canonical"/i);
  const ogUrlMatch = content.match(/<meta[^>]*property="og:url"[^>]*content="([^"]+)"/i) || content.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:url"/i);
  
  const canonical = canonicalMatch ? canonicalMatch[1] : 'MISSING';
  const ogUrl = ogUrlMatch ? ogUrlMatch[1] : 'MISSING';
  
  const isValidCanonical = canonical.startsWith('https://energie-alemi.de');
  const isValidOgUrl = ogUrl.startsWith('https://energie-alemi.de');
  
  if (!isValidCanonical || !isValidOgUrl) {
    allValid = false;
    console.error(`❌ INVALID [${relPath}]: canonical="${canonical}", og:url="${ogUrl}"`);
  } else {
    console.log(`✅ [${relPath}]: canonical="${canonical}"`);
  }
});

if (allValid) {
  console.log('\n🎉 ALL prerendered pages have valid www.energie-alemi.de canonicals and OpenGraph URLs!');
}
