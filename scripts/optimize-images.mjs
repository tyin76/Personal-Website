// Converts the project screenshots and portrait to resized WebP files in src/images/web.
// Run with: npm run optimize-images
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const outDir = path.join(root, 'src/images/web');
const sources = [
  { dir: 'src/images', width: 1600, match: /^(sum|Scriber|Insight)-.*\.(png|jpe?g)$/i },
  { dir: 'src/images', width: 900, match: /^cropped portrait\.jpg$/i },
  { dir: 'src/F1 Showcase Demo Photos', width: 1600, match: /\.png$/i },
  { dir: 'src/VitAlert Demo Photos', width: 1600, match: /\.png$/i },
];

await mkdir(outDir, { recursive: true });
let before = 0;
let after = 0;
for (const { dir, width, match } of sources) {
  const files = (await readdir(path.join(root, dir))).filter((f) => match.test(f));
  for (const file of files) {
    const input = path.join(root, dir, file);
    const name = path.parse(file).name.replace(/\s+/g, '-').toLowerCase();
    const output = path.join(outDir, `${name}.webp`);
    await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
    before += (await stat(input)).size;
    after += (await stat(output)).size;
    console.log(`${file} -> web/${name}.webp`);
  }
}
console.log(`total ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`);
