const fs = require('fs');

const pages = {
  'Home': { title: 'Startseite', desc: 'Willkommen bei Energie Alemi. Vergleichen Sie jetzt Strom, Gas und Internet Tarife kostenlos und sparen Sie!' },
  'Gas': { title: 'Gasvergleich', desc: 'Jetzt Gasanbieter vergleichen und wechseln. Wir finden den günstigsten und besten Gastarif für Sie.' },
  'Electricity': { title: 'Stromvergleich', desc: 'Jetzt Stromanbieter vergleichen und sparen. Günstige Stromtarife für Ihren Haushalt oder Ihr Unternehmen.' },
  'Internet': { title: 'Internet & Festnetz', desc: 'Vergleichen Sie Internet- und DSL-Anbieter. Sichern Sie sich den schnellsten und günstigsten Tarif.' },
  'About': { title: 'Über uns', desc: 'Erfahren Sie mehr über Energie Alemi. Ihr zuverlässiger und unabhängiger Berater für Energie und Telekommunikation.' },
  'Contact': { title: 'Kontakt', desc: 'Haben Sie Fragen? Kontaktieren Sie Energie Alemi. Wir beraten Sie gerne zu Strom, Gas und Internet.' },
};

Object.entries(pages).forEach(([page, seo]) => {
  const filePath = `src/pages/${page}.tsx`;
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Only add SEO if it doesn't already exist
  if (!content.includes('import SEO')) {
    // Add import after the last import
    content = content.replace(/(import.*?;?\n)(?!import)/s, `$1import SEO from '../components/SEO';\n`);
    
    // Add SEO component right after the main return
    content = content.replace(/(return\s*\(\s*<div[^>]*>)/, `$1\n      <SEO title="${seo.title}" description="${seo.desc}" />`);
    // Or if it returns <> or <main>
    if (!content.includes('<SEO')) {
      content = content.replace(/(return\s*\(\s*<(?:main|Fragment|)>)/, `$1\n      <SEO title="${seo.title}" description="${seo.desc}" />`);
    }
    // Final fallback
    if (!content.includes('<SEO')) {
      content = content.replace(/(return\s*\(\s*(?:<[^>]+>)?)/, `$1\n      <SEO title="${seo.title}" description="${seo.desc}" />`);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${page}.tsx`);
  }
});
