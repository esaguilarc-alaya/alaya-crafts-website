import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { homePage } from "../src/pages/home.mjs";
import { ciePage } from "../src/pages/cie.mjs";
import { organizationsPage } from "../src/pages/organizations.mjs";
import { ideasPage } from "../src/pages/ideas.mjs";
import { ideaArticlePage } from "../src/pages/idea-article.mjs";
import { ideaTechnologyExtendsItPage } from "../src/pages/idea-technology-extends-it.mjs";
import { contactPage } from "../src/pages/contact.mjs";
import { homePageEs } from "../src/pages/es/home.mjs";
import { ciePageEs } from "../src/pages/es/cie.mjs";
import { organizationsPageEs } from "../src/pages/es/organizations.mjs";
import { ideasPageEs } from "../src/pages/es/ideas.mjs";
import { ideaArticlePageEs } from "../src/pages/es/idea-article.mjs";
import { ideaTechnologyExtendsItPageEs } from "../src/pages/es/idea-technology-extends-it.mjs";
import { howItWorksPage } from "../src/pages/how-it-works.mjs";
import { howItWorksPageEs } from "../src/pages/es/how-it-works.mjs";
import { contactPageEs } from "../src/pages/es/contact.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "dist");
const basePath = process.env.BASE_PATH ?? "";

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const page of [homePage, ciePage, organizationsPage, ideasPage, ideaArticlePage, ideaTechnologyExtendsItPage, contactPage, howItWorksPage, homePageEs, ciePageEs, organizationsPageEs, ideasPageEs, ideaArticlePageEs, ideaTechnologyExtendsItPageEs, contactPageEs, howItWorksPageEs]) {
  const directory = page.outputPath === "/" ? output : join(output, page.outputPath);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), page.render(basePath));
}

await cp(join(root, "src", "assets"), join(output, "assets"), { recursive: true });
await cp(join(root, "cie"), join(output, "cie"), { recursive: true });
console.log(`Built ${output}${basePath ? ` for base path ${basePath}` : ""}`);
