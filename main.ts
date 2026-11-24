// The One-Line Exit — a single funny resignation letter in exactly one line.
// Gate: /output/entry.txt, UTF-8, 1-140 chars, one line, no padding.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I resign effective today. The only thing this job ever promoted was my blood pressure.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
