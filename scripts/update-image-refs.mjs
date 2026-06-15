/**
 * After running compress-images.mjs, run this to update all image
 * src references in src/ and index.html from .jpg/.jpeg/.png to .webp.
 */

import { readdir, readFile, writeFile } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "src");

async function findSourceFiles(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findSourceFiles(fullPath)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if ([".tsx", ".ts", ".jsx", ".js"].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

// Same skip list as compress-images.mjs
const SKIP_RE = /favicon|apple-touch-icon|mstile/i;
// Matches both double-quoted and single-quoted image paths
const IMAGE_RE = /(['"])(\/[^'"]+)\.(jpg|jpeg|JPG|png)\1/g;

async function updateFile(filePath, label) {
  const original = await readFile(filePath, "utf8");
  const updated = original.replace(IMAGE_RE, (match, quote, path) => {
    const filename = path.split("/").pop();
    if (SKIP_RE.test(filename)) return match;
    return `${quote}${path}.webp${quote}`;
  });
  if (updated !== original) {
    await writeFile(filePath, updated, "utf8");
    console.log(`✓ Updated: ${label}`);
    return 1;
  }
  return 0;
}

async function main() {
  let totalChanges = 0;

  // src/ files
  const srcFiles = await findSourceFiles(SRC);
  for (const file of srcFiles) {
    totalChanges += await updateFile(file, file.replace(ROOT + "/", ""));
  }

  // index.html (preload hrefs and og:image content attributes)
  totalChanges += await updateFile(join(ROOT, "index.html"), "index.html");

  console.log(`\nDone. Updated ${totalChanges} file(s).`);
  if (totalChanges === 0) {
    console.log("No changes — either already updated or no image references found.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
