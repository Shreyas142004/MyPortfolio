import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

async function optimizeImages() {
  console.log('🚀 Optimizing portfolio images with Sharp...\n');

  // 1. Optimize Hero Cutout
  const cutoutPng = path.join(publicDir, 'hero-cutout.png');
  const cutoutWebp = path.join(publicDir, 'hero-cutout.webp');
  if (fs.existsSync(cutoutPng)) {
    await sharp(cutoutPng)
      .webp({ quality: 85, effort: 6 })
      .toFile(cutoutWebp);
    const orig = fs.statSync(cutoutPng).size;
    const opt = fs.statSync(cutoutWebp).size;
    console.log(`✅ hero-cutout.webp: ${(orig / 1024).toFixed(1)} KB -> ${(opt / 1024).toFixed(1)} KB (-${((1 - opt / orig) * 100).toFixed(1)}%)`);
  }

  // 2. Optimize Hero Fallback Image
  const heroJpg = path.join(publicDir, 'Hero-Image.jpeg');
  const heroWebp = path.join(publicDir, 'Hero-Image.webp');
  if (fs.existsSync(heroJpg)) {
    await sharp(heroJpg)
      .webp({ quality: 85, effort: 5 })
      .toFile(heroWebp);
    const orig = fs.statSync(heroJpg).size;
    const opt = fs.statSync(heroWebp).size;
    console.log(`✅ Hero-Image.webp: ${(orig / 1024).toFixed(1)} KB -> ${(opt / 1024).toFixed(1)} KB (-${((1 - opt / orig) * 100).toFixed(1)}%)`);
  }

  // 3. Optimize Project Images
  const projectsDir = path.join(publicDir, 'projects');
  if (fs.existsSync(projectsDir)) {
    const pngs = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.png'));
    let totalOrig = 0;
    let totalWebp = 0;

    for (const f of pngs) {
      const src = path.join(projectsDir, f);
      const dest = path.join(projectsDir, f.replace(/\.png$/, '.webp'));
      const orig = fs.statSync(src).size;
      totalOrig += orig;

      await sharp(src)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(dest);

      const opt = fs.statSync(dest).size;
      totalWebp += opt;
      console.log(`✅ projects/${f}: ${(orig / 1024).toFixed(1)} KB -> ${(opt / 1024).toFixed(1)} KB (-${((1 - opt / orig) * 100).toFixed(0)}%)`);
    }

    console.log(`\n🎉 Project Images: ${(totalOrig / 1024).toFixed(1)} KB -> ${(totalWebp / 1024).toFixed(1)} KB (-${((1 - totalWebp / totalOrig) * 100).toFixed(1)}% total)\n`);
  }
}

optimizeImages().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
