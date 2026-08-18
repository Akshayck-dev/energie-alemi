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

// Match text content between JSX tags like >Some Text<
const jsxTextRegex = />\s*([A-Za-zÄÖÜäöüß]{2,}[^<>{}]*)\s*</g;

console.log('=== Checking Raw Text Nodes in JSX ===');
files.forEach(file => {
  if (file.includes('/Ratgeber/articles/')) return; // Article markdown/content can be in German
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = jsxTextRegex.exec(content)) !== null) {
    const text = match[1].trim();
    // Exclude common icons/numbers/code
    if (
      !text.startsWith('http') && 
      !text.startsWith('/') &&
      !text.includes('@') &&
      text.length > 2
    ) {
      console.log(`${file}: "${text}"`);
    }
  }
});
