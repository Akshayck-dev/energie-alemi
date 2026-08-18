import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
const tFallbackRegex = /t\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]/g;

console.log('=== Checking t(...) default fallbacks in TSX ===');
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = tFallbackRegex.exec(content)) !== null) {
    console.log(`${file}: key="${match[1]}" fallback="${match[2]}"`);
  }
});
