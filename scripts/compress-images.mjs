/**
 * Converts all JPG/JPEG/PNG images in public/ to WebP.
 * - Skips favicons (favicon-*.png)
 * - Skips files already converted (if .webp already exists)
 * - Max width 1200px for content images (celeb, instagram, muskaan, category)
 * - Max width 800px for logos (lms-800_800, ibtida-800_800)
 * - 80% quality for photos, 90% quality for logos/PNGs with transparency
 * - Deletes the original after successful conversion
 * - Prints a size comparison for each file
 *
 * Run once: node scripts/compress-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, unlink, rename } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "../public");

const SKIP_PATTERNS = [/^favicon/i, /^apple-touch-icon/i, /^mstile/i];

const MAX_WIDTH = {
  default: 1200,
  logos: 800,
};

function isLogo(file) {
  return file.includes("800_800") || file.includes("lms-") || file.includes("ibtida-");
}

function shouldSkip(filename) {
  return SKIP_PATTERNS.some((p) => p.test(filename));
}

async function findImages(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findImages(fullPath)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext) && !shouldSkip(entry.name)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

function fmt(bytes) {
  return (bytes / 1024).toFixed(0) + " KB";
}

async function compress(inputPath) {
  const ext = extname(inputPath).toLowerCase();
  const base = basename(inputPath, ext);
  const dir = dirname(inputPath);
  const outputPath = join(dir, base + ".webp");

  const inputStat = await stat(inputPath);
  const maxWidth = isLogo(base) ? MAX_WIDTH.logos : MAX_WIDTH.default;
  const quality = ext === ".png" ? 90 : 80;

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);

  const outputStat = await stat(outputPath);
  const saving = (((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(0);
  const rel = inputPath.replace(PUBLIC, "public");

  console.log(`✓ ${rel}`);
  console.log(`  ${fmt(inputStat.size)} → ${fmt(outputStat.size)}  (${saving}% smaller)`);

  await unlink(inputPath);
}

async function main() {
  console.log("Finding images...\n");
  const images = await findImages(PUBLIC);
  console.log(`Found ${images.length} images to convert.\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    const ext = extname(img).toLowerCase();
    const base = basename(img, ext);
    const webpPath = join(dirname(img), base + ".webp");

    const beforeStat = await stat(img);
    totalBefore += beforeStat.size;

    await compress(img);

    const afterStat = await stat(webpPath);
    totalAfter += afterStat.size;
  }

  console.log("\n─────────────────────────────────────");
  console.log(`Total before: ${fmt(totalBefore)}`);
  console.log(`Total after:  ${fmt(totalAfter)}`);
  console.log(`Saved:        ${fmt(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`);
  console.log("\nDone. Now update image references in src/ to use .webp extensions.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
