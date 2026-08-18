import fs from 'fs';
import path from 'path';

const dePath = './public/locales/de/translation.json';
const enPath = './public/locales/en/translation.json';
const arPath = './public/locales/ar/translation.json';
const faPath = './public/locales/fa/translation.json';

const de = JSON.parse(fs.readFileSync(dePath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));
const fa = JSON.parse(fs.readFileSync(faPath, 'utf8'));

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const k in obj) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys = keys.concat(getKeys(obj[k], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const deKeys = new Set(getKeys(de));
const enKeys = new Set(getKeys(en));
const arKeys = new Set(getKeys(ar));
const faKeys = new Set(getKeys(fa));

console.log(`DE total keys: ${deKeys.size}`);
console.log(`EN total keys: ${enKeys.size}`);

const missingInEn = [...deKeys].filter(k => !enKeys.has(k));
const missingInDe = [...enKeys].filter(k => !deKeys.has(k));

console.log('\n--- Missing in EN ---');
console.log(missingInEn);

console.log('\n--- Missing in DE ---');
console.log(missingInDe);
