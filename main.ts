import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}
const MAX_BYTES = 1_048_576;
const size = statSync(source).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the ${MAX_BYTES} byte limit`);
}
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const head = readFileSync(source).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file (bad magic bytes)");
}
const ihdr = readFileSync(source).subarray(16, 24);
const width = ihdr.readUInt32BE(0);
const height = ihdr.readUInt32BE(4);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 dimension limit`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
