import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// Fridgeblank names the familiar lapse at the open fridge in one compact compound.
const entry = "fridgeblank — the blank moment when you open the fridge and forget what you came for.";
const characterCount = [...entry].length;

if (characterCount < 1 || characterCount > 140 || entry.trim().length === 0) {
  throw new Error("Entry must contain 1 to 140 non-whitespace characters.");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), entry, "utf8");
