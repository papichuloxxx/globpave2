// Pre-generates resized WebP copies of site photos for next/image.
// GitHub Pages has no image optimisation server, so the custom loader in
// app/image-loader.ts points each <Image> at one of these files instead.
// Runs before `next dev` and `next build`; unchanged images are skipped.
import { readdir, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTHS = [384, 640, 828, 1080, 1280];
const SOURCE_DIRS = ['projects', 'services'];
const root = path.resolve('public/images');
const outRoot = path.join(root, 'opt');

let written = 0;
for (const dir of SOURCE_DIRS) {
  await mkdir(path.join(outRoot, dir), { recursive: true });
  for (const file of await readdir(path.join(root, dir))) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const source = path.join(root, dir, file);
    const sourceTime = (await stat(source)).mtimeMs;
    const base = file.replace(/\.[^.]+$/, '');
    for (const width of WIDTHS) {
      const target = path.join(outRoot, dir, `${base}-${width}.webp`);
      const targetTime = await stat(target).then(s => s.mtimeMs, () => 0);
      if (targetTime > sourceTime) continue;
      await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 74 }).toFile(target);
      written++;
    }
  }
}
console.log(`optimize-images: ${written} file(s) written to public/images/opt`);
