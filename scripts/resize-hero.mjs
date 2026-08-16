import sharp from 'sharp';
import path from 'path';

const assetsDir = '/Users/akshay/Downloads/german/energie-alemi/src/assets';

async function resizeImage(src, width, format, destName) {
  const destPath = path.join(assetsDir, destName);
  try {
    let pipeline = sharp(path.join(assetsDir, src))
      .resize({ width });

    if (format === 'webp') {
      pipeline = pipeline.webp({ quality: 80 });
    } else if (format === 'avif') {
      pipeline = pipeline.avif({ quality: 75, effort: 4 });
    }

    await pipeline.toFile(destPath);
    console.log(`Successfully generated ${destName}`);
  } catch (error) {
    console.error(`Error generating ${destName}:`, error);
  }
}

async function run() {
  // Mobile - 640px wide (based on portrait hero_mob.webp)
  await resizeImage('hero_mob.webp', 640, 'webp', 'hero_mob_640.webp');
  await resizeImage('hero_mob.webp', 640, 'avif', 'hero_mob_640.avif');

  // Tablet - 1024px wide (based on landscape hero_desk.webp)
  await resizeImage('hero_desk.webp', 1024, 'webp', 'hero_tablet_1024.webp');
  await resizeImage('hero_desk.webp', 1024, 'avif', 'hero_tablet_1024.avif');

  // Desktop - 1672px wide (based on landscape hero_desk.webp)
  await resizeImage('hero_desk.webp', 1672, 'webp', 'hero_desk_1672.webp');
  await resizeImage('hero_desk.webp', 1672, 'avif', 'hero_desk_1672.avif');
}

run();
