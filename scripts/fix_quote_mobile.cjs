const fs = require('fs');

const files = ['src/sections/HomePromise.tsx', 'src/pages/Tarifberatung.tsx'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the blockquote div classes
    content = content.replace(
      /className="absolute bottom-12 rtl:-right-4 ltr:-left-4 lg:rtl:-right-12 lg:ltr:-left-12 z-20 bg-white dark:bg-\[#0a1628\] rounded-2xl p-8 max-w-sm border border-slate-100 shadow-xl"/g,
      'className="absolute bottom-4 md:bottom-12 left-2 right-2 md:left-auto md:right-auto rtl:md:-right-4 ltr:md:-left-4 lg:rtl:-right-12 lg:ltr:-left-12 z-20 bg-white/95 dark:bg-[#0a1628]/95 md:bg-white md:dark:bg-[#0a1628] backdrop-blur-md md:backdrop-blur-none rounded-2xl p-6 md:p-8 w-auto md:max-w-sm border border-slate-100 dark:border-white/10 shadow-xl"'
    );
    
    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('Fixed mobile quote block layout');
