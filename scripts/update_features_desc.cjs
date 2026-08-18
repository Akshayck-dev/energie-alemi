const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'public', 'locales');
const locales = ['de', 'en', 'ar', 'fa'];

const germanText = "Wir analysieren Ihre bestehenden Strom-, Gas- und Telekommunikationsverträge und vergleichen für Sie zahlreiche Tarife verschiedener Anbieter. So finden wir eine passende und wirtschaftliche Lösung – individuell abgestimmt auf Ihren Bedarf, egal ob Privat, Gewerbe oder Industrie.";
const englishText = "We analyze your existing electricity, gas, and telecommunications contracts and compare numerous tariffs from different providers for you. This allows us to find a suitable and economical solution – individually tailored to your needs, whether for private, commercial, or industrial customers.";

for (const locale of locales) {
  const filePath = path.join(localesDir, locale, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    if (data.home_features) {
      if (locale === 'de') {
        data.home_features.description = germanText;
      } else {
        data.home_features.description = englishText;
      }
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`Updated ${locale}`);
  }
}
