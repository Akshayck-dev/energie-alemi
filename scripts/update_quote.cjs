const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'public/locales');
const locales = ['de', 'en', 'ar', 'fa'];

const germanText = "Unser Ziel ist es, Energie für Privat-, Gewerbe- und Industriekunden einfach, transparent und kostengünstig zu machen.";
const englishText = "Our goal is to make energy simple, transparent, and cost-effective for private, commercial, and industrial customers.";

for (const locale of locales) {
  const filePath = path.join(localesDir, locale, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Update home_promise.quote
    if (data.home_promise) {
      if (locale === 'de') {
        data.home_promise.quote = germanText;
      } else {
        data.home_promise.quote = englishText; // Use English for ar/fa as requested previously
      }
    }
    
    // Also update tarifberatung if they want it there
    if (data.tarifberatung) {
      if (locale === 'de') {
        data.tarifberatung.trust_box_1 = germanText;
        data.tarifberatung.trust_box_2 = ""; // clear second part
      } else {
        data.tarifberatung.trust_box_1 = englishText;
        data.tarifberatung.trust_box_2 = "";
      }
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`Updated ${locale}`);
  }
}
