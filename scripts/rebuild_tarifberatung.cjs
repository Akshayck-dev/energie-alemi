const fs = require('fs');

let content = fs.readFileSync('src/pages/Tarifberatung.tsx', 'utf8');

// 1. We need to add `import HomeHero from '../sections/HomeHero';` at the top
if (!content.includes('import HomeHero')) {
  content = content.replace("import SEO from '../components/SEO';", "import SEO from '../components/SEO';\nimport HomeHero from '../sections/HomeHero';");
}

// 2. Remove the old unused images since we use HomeHero now
content = content.replace(/import heroDesk from '\.\.\/assets\/hero_desk\.webp';\n/, '');
content = content.replace(/import heroMob from '\.\.\/assets\/hero_mob\.webp';\n/, '');

// 3. Find the main return statement: `return (\n    <div className="relative bg-white dark:bg-[#0a1628]">\n      <SEO`
const returnSplit = content.split('return (\n    <div className="relative bg-white dark:bg-[#0a1628]">\n      <SEO');
if (returnSplit.length !== 2) {
    throw new Error("Could not find the return statement");
}

const preReturn = returnSplit[0];
let body = 'return (\n    <div className="relative bg-white dark:bg-[#0a1628]">\n      <SEO' + returnSplit[1];

// 4. In `body`, replace the `<section className="relative min-h-[60vh]...` with `<div className="sticky top-0 z-0 md:relative">\n        <HomeHero />\n      </div>`
// We need to cut out the entire hero section. It ends right before `{/* Services Section -> Copied from HomeFeatures.tsx */}`
const heroEnd = body.indexOf('{/* Services Section');
if (heroEnd === -1) throw new Error("Could not find Services Section");

// The hero section starts right after SEO.
const seoEnd = body.indexOf('/>', body.indexOf('<SEO')) + 2;
const heroSectionContent = body.substring(seoEnd, heroEnd);
// Replace it with HomeHero wrapper
body = body.substring(0, seoEnd) + '\n\n      {/* Hero is sticky on mobile so the rest of the page slides over it */}\n      <div className="sticky top-0 z-0 md:relative">\n        <HomeHero />\n      </div>\n\n      ' + body.substring(heroEnd);

// 5. Now extract the 3 sections and wrap them.
const servicesStart = body.indexOf('{/* Services Section');
const processStart = body.indexOf('{/* Process Section');
const trustStart = body.indexOf('{/* Trust & Location Section');
const fileEnd = body.lastIndexOf('</section>') + 10;

let servicesSection = body.substring(servicesStart, processStart);
let processSection = body.substring(processStart, trustStart);
let trustSection = body.substring(trustStart, fileEnd);

const afterTrust = body.substring(fileEnd);

// Remove margin: "-100px" to fix animation hydration
servicesSection = servicesSection.replace(/margin: "-100px"/g, 'margin: "0px"');
processSection = processSection.replace(/margin: "-100px"/g, 'margin: "0px"');
trustSection = trustSection.replace(/margin: "-100px"/g, 'margin: "0px"');

const wrappedServices = `
      {/* Services Section */}
      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:shadow-none">
        ${servicesSection.trim()}
      </div>
`;

const wrappedProcess = `
      {/* Process Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        ${processSection.trim()}
      </div>
`;

const wrappedTrust = `
      {/* Trust Section */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        ${trustSection.trim()}
      </div>
`;

const finalBody = body.substring(0, servicesStart) + wrappedServices + wrappedProcess + wrappedTrust + '\n    ' + afterTrust.trim();

fs.writeFileSync('src/pages/Tarifberatung.tsx', preReturn + finalBody + '\n');
