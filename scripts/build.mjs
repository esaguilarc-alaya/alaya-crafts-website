import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { homePage } from "../src/pages/home.mjs";
import { ciePage } from "../src/pages/cie.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "dist");
const basePath = process.env.BASE_PATH ?? "";

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const page of [homePage, ciePage]) {
  const directory = page.outputPath === "/" ? output : join(output, page.outputPath);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), page.render(basePath));
}

await cp(join(root, "src", "assets"), join(output, "assets"), { recursive: true });
console.log(`Built ${output}${basePath ? ` for base path ${basePath}` : ""}`);
