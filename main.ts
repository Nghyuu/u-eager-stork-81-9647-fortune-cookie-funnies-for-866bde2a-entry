import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Writes exactly one fortune-cookie line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// No fallback path: the program throws if MAKEFUN_OUTPUT_DIR is unset.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "You will find love, wealth, and inner peace, right after this one last hotfix.";

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
