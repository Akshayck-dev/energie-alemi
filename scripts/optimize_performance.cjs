const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Optimize large section overlap shadows
  content = content.replace(/shadow-\[0_-20px_50px_rgba\(0,0,0,0\.15\)\]/g, 'shadow-[0_-5px_15px_rgba(0,0,0,0.05)]');
  content = content.replace(/dark:shadow-\[0_-20px_50px_rgba\(0,0,0,0\.5\)\]/g, 'dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)]');
  content = content.replace(/shadow-\[0_-20px_50px_rgba\(0,0,0,0\.1\)\]/g, 'shadow-[0_-5px_15px_rgba(0,0,0,0.05)]');
  content = content.replace(/dark:shadow-\[0_-20px_50px_rgba\(0,0,0,0\.3\)\]/g, 'dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)]');

  // 2. Optimize sticky card shadows
  content = content.replace(/shadow-\[0_-10px_40px_rgba\(0,0,0,0\.06\)\]/g, 'shadow-md');
  content = content.replace(/dark:shadow-\[0_-10px_40px_rgba\(0,0,0,0\.3\)\]/g, 'dark:shadow-[0_5px_15px_rgba(0,0,0,0.3)]');

  // 3. Optimize massive blurs (replace blur-[100px] with a simple radial gradient, removing the blur)
  content = content.replace(/bg-\[#0047AB\]\/5 rounded-full blur-\[100px\]/g, 'bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#0047AB]/10 to-transparent');
  content = content.replace(/bg-slate-50\/50 dark:bg-white\/5 backdrop-blur-sm/g, 'bg-slate-50/90 dark:bg-[#0a1628]/90');

  // 4. Optimize Navbar and Bottom Nav (remove backdrop-blur for performance, use solid opacity)
  // Actually, we can keep backdrop-blur-md instead of xl, or just use bg-white/95
  // For now, let's change backdrop-blur-xl to backdrop-blur-md and bg-opacity up to avoid repaints
  if (file.includes('Navbar.tsx')) {
    content = content.replace(/backdrop-blur-xl/g, 'backdrop-blur-md');
  }
  if (file.includes('MobileBottomNav.tsx')) {
    content = content.replace(/backdrop-blur-lg/g, 'backdrop-blur-md');
  }

  // 5. Add will-change-transform to motion.div sticky elements to prevent scroll lag
  // in HomeProcess.tsx and Tarifberatung.tsx
  if (file.includes('HomeProcess.tsx') || file.includes('Tarifberatung.tsx')) {
    content = content.replace(/className="sticky md:relative /g, 'className="sticky md:relative will-change-transform ');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Optimized:', file);
  }
});
