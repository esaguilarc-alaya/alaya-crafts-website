import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { expect, test } from "@playwright/test";

const labels = ["The Alaya Idea", "How it works", "CIE Professional", "For Organizations", "Ideas", "Contact"];

const assetsDir = fileURLToPath(new URL("../src/assets/", import.meta.url));
const routePaths = ["/", "/cie-professional/", "/for-organizations/", "/ideas/", "/ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/", "/contact/"];

const sha256 = async (path) => createHash("sha256").update(await readFile(path)).digest("hex");

test("Homepage uses the shared route contract", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page.locator(".site-header .site-nav a")).toHaveText(labels);
  await expect(page.locator(".site-footer nav a")).toHaveText(labels);
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveText("The Alaya Idea");
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveCount(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1440);
});

test("real 390px viewport has no overflow and an accessible menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator("[data-menu-toggle]");
  await expect(menu).toBeVisible();
  await expect(menu).toHaveAccessibleName("Explore");
  await expect(page.locator(".site-nav")).toBeHidden();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(menu).toHaveAccessibleName("Close");
  await expect(page.locator(".site-nav")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
});

test("production artifact excludes study scaffolding", async ({ request }) => {
  const html = await (await request.get("/")).text();
  for (const forbidden of ["unpkg.com", "floating-ui", "lucide", "srcdoc=", "Desktop study", "Mobile study", "data:image/png;base64", "class=\"inspector\""]) {
    expect(html.toLowerCase()).not.toContain(forbidden.toLowerCase());
  }
});

const landscapeLabels = [
  ["capability", "Capability The living terrain."],
  ["experience", "Experience Where capability is developed and exercised."],
  ["practice", "Practice How capability is cultivated and renewed."],
  ["contribution", "Contribution Capability expressed through work that creates value."],
  ["knowledge", "Knowledge Preserves and carries forward what is learned."],
  ["curiosity", "Curiosity Keeps the field developing."],
];

test("Section 05 selects the approved desktop artwork at 1440px without fetching the mobile artwork", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  const requested = [];
  page.on("request", (req) => requested.push(req.url()));
  await page.goto("/");
  const field = page.locator(".landscape");
  await expect(field).toHaveAttribute("aria-label", "The living capability landscape");
  const image = field.locator("img.field-svg");
  await expect(image).toHaveCount(1);
  await expect(image).toHaveAttribute("aria-hidden", "true");
  // No legacy inline visual hooks remain from the hand-authored SVG this replaces.
  await expect(field.locator("svg")).toHaveCount(0);
  await expect(page.locator(".field-terrain, .field-contours, .field-path, .field-relations, .field-cultivation")).toHaveCount(0);
  // No focusable/interactive elements inside the decorative landscape.
  await expect(field.locator("a, button, input, [tabindex]")).toHaveCount(0);
  // The browser resolved the desktop composition, not the mobile one, and fetched only it.
  await expect.poll(() => image.evaluate((el) => el.currentSrc)).toContain("alaya-05-living-field-desktop.svg");
  expect(requested.some((url) => url.includes("alaya-05-living-field-desktop.svg"))).toBe(true);
  expect(requested.some((url) => url.includes("alaya-05-living-field-mobile.svg"))).toBe(false);
  // Exactly the six approved landscape labels, in the approved order, with exact copy.
  await expect(field.locator("p.field-label")).toHaveCount(6);
  for (const [className, text] of landscapeLabels) {
    await expect(field.locator(`p.${className}`)).toHaveText(text);
  }
  // Technology and Intelligence are no longer landscape elements.
  await expect(page.locator(".field-label.technology, .field-label.intelligence")).toHaveCount(0);
  await expect(field).not.toContainText("Technology");
  await expect(field).not.toContainText("Intelligence");
  const box = await field.boundingBox();
  expect(box.x + box.width).toBeLessThanOrEqual(1440);
  // Every label stays inside the landscape container and the viewport: legible, unclipped.
  for (const [className] of landscapeLabels) {
    const labelBox = await field.locator(`p.${className}`).boundingBox();
    expect(labelBox.x).toBeGreaterThanOrEqual(box.x - 1);
    expect(labelBox.y).toBeGreaterThanOrEqual(box.y - 1);
    expect(labelBox.x + labelBox.width).toBeLessThanOrEqual(box.x + box.width + 1);
    expect(labelBox.y + labelBox.height).toBeLessThanOrEqual(box.y + box.height + 1);
  }
});

test("the living-field visual stays legible and non-overflowing at 390px, selecting the mobile composition", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const requested = [];
  page.on("request", (req) => requested.push(req.url()));
  await page.goto("/");
  const field = page.locator(".landscape");
  const fieldImage = field.locator("img.field-svg");
  await field.scrollIntoViewIfNeeded();
  await expect(fieldImage).toBeVisible();
  // The browser resolved the mobile composition at the existing 820px breakpoint and
  // fetched only it, never the desktop composition, under ordinary responsive loading.
  await expect.poll(() => fieldImage.evaluate((el) => el.currentSrc)).toContain("alaya-05-living-field-mobile.svg");
  expect(requested.some((url) => url.includes("alaya-05-living-field-mobile.svg"))).toBe(true);
  expect(requested.some((url) => url.includes("alaya-05-living-field-desktop.svg"))).toBe(false);
  const fieldBox = await field.boundingBox();
  expect(fieldBox.x).toBeGreaterThanOrEqual(0);
  expect(fieldBox.x + fieldBox.width).toBeLessThanOrEqual(390);
  // All six labels remain legible, unclipped, and inside the landscape at 390px.
  await expect(field.locator("p.field-label")).toHaveCount(6);
  for (const [className, text] of landscapeLabels) {
    const label = field.locator(`p.${className}`);
    await expect(label).toHaveText(text);
    const labelBox = await label.boundingBox();
    expect(labelBox.x).toBeGreaterThanOrEqual(fieldBox.x - 1);
    expect(labelBox.y).toBeGreaterThanOrEqual(fieldBox.y - 1);
    expect(labelBox.x + labelBox.width).toBeLessThanOrEqual(fieldBox.x + fieldBox.width + 1);
    expect(labelBox.y + labelBox.height).toBeLessThanOrEqual(fieldBox.y + fieldBox.height + 1);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
});

test("Section 05 artwork source no longer carries obsolete Technology/Intelligence descriptions or stale content-credential metadata", async () => {
  for (const file of ["alaya-05-living-field-desktop.svg", "alaya-05-living-field-mobile.svg"]) {
    const svg = await readFile(`${assetsDir}${file}`, "utf8");
    expect(svg.toLowerCase()).not.toContain("technology");
    expect(svg.toLowerCase()).not.toContain("intelligence");
    expect(svg.toLowerCase()).not.toContain("c2pa");
    expect(svg.toLowerCase()).not.toContain("<metadata>");
  }
});

test("homepage is the Alaya Idea page: one h1, the approved section order, and no leftover numbering before the closing sections", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText("Capability, read from the work itself.");
  await expect(page.locator(".idea-body h2")).toHaveText([
    "The hardest thing to see is what people can already do.",
    "Capability is cultivated, not counted.",
    "How Alaya sees capability.",
    "The problem is documented. The market is aimed somewhere else.",
    "The difference is not speed. It is where the instrument points.",
    "The flood is the reason, not the obstacle.",
    "CIE — the Capability Intelligence Engine.",
  ]);
  // The engine is the last idea section; the closing sections follow it unnumbered.
  await expect(page.locator("main > .idea-body + .section.epilogue + .section.paths")).toHaveCount(1);
  await expect(page.locator(".epilogue .eyebrow")).toHaveText("Epilogue");
  await expect(page.locator(".paths .eyebrow")).toHaveCount(0);
  await expect(page.locator(".open-paths")).toHaveCount(0);
  await expect(page.locator("main")).not.toContainText("Everything starts with curiosity");
});

test("the living-field graphic sits between the cultivation quote and the practices and dimensions heading", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const order = await page.evaluate(() => {
    const y = (sel) => document.querySelector(sel)?.getBoundingClientRect().top ?? -1;
    const quote = [...document.querySelectorAll(".pull p")].find((p) => p.textContent.includes("visibility to cultivate"));
    return { quote: quote.getBoundingClientRect().top, field: y(".landscape"), heading: y("h2.sub") };
  });
  expect(order.quote).toBeLessThan(order.field);
  expect(order.field).toBeLessThan(order.heading);
  await expect(page.locator("h2.sub")).toHaveText("How Alaya sees capability.");
  await expect(page.locator(".axc").first().locator(".row")).toHaveCount(7);
});

test("approved copy corrections are present and retired wording is gone", async ({ page }) => {
  await page.goto("/");
  const text = await page.locator("main").innerText();
  for (const gone of ["74 countries", "known absent", "nobody has looked", "Refuses to", "The refusals are the product", "visibility gap is not closing", "Hundreds of funded", "Everything below is a way", "no training at all"]) {
    expect(text).not.toContain(gone);
  }
  for (const present of ["72 countries", "A statement someone is a strong communicator.", "75% of executives", "Only 43% of individual contributors agree.", "almost no one ever does", "A record built with the professionals, which they keep and maintain.", "recognizes the capability", "CIE is the engine that allows this to be possible at scale", "Many funded companies claim to help fix this problem"]) {
    expect(text).toContain(present);
  }
  await expect(page.locator(".stats .sx .v").nth(2)).toHaveText("75/43");
  await expect(page.locator(".stats .sx")).toHaveCount(3);
  await expect(page.locator(".hero-cta .btn")).toHaveText("Get started");
  await expect(page.locator(".hero-cta .btn")).toHaveAttribute("href", /\/how-it-works\/$/);
  await expect(page.locator(".src a", { hasText: "State of Learning and Development" })).toHaveAttribute("href", /perceptyx\.com\/state-of-learning-and-development-2026/);
});

test("homepage has no horizontal overflow at 390, 1024 and 1440px", async ({ page }) => {
  for (const width of [390, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
  }
});

test("every generated route emits exactly one favicon link that resolves under the current base path", async ({ page, request }) => {
  const basePath = (process.env.BASE_PATH ?? "").trim().replace(/\/+$/, "");
  const expectedHref = `${basePath}/assets/favicon.svg`;
  const expectedBytes = await readFile(`${assetsDir}favicon.svg`);
  for (const routePath of routePaths) {
    await page.goto(routePath);
    const icons = page.locator('head link[rel="icon"]');
    await expect(icons).toHaveCount(1);
    await expect(icons).toHaveAttribute("href", expectedHref);
    await expect(icons).toHaveAttribute("type", "image/svg+xml");
    const response = await request.get(expectedHref);
    expect(response.ok()).toBe(true);
    expect(Buffer.compare(await response.body(), expectedBytes)).toBe(0);
  }
});

test("favicon is a restrained warm-ivory square derived from the header brand mark, with no disallowed motifs", async () => {
  const svg = await readFile(`${assetsDir}favicon.svg`, "utf8");
  expect(svg).toMatch(/viewBox="0 0 (\d+) \1"/); // square
  expect(svg).toContain('fill="#f3efe4"');
  expect(svg.toLowerCase()).not.toContain("<text");
  expect(svg.toLowerCase()).not.toContain("gradient");
  expect(svg.toLowerCase()).not.toContain("<animate");
  expect(svg.toLowerCase()).not.toContain("filter");
  expect(svg).not.toMatch(/<rect[^>]*\bstroke=/); // background rect carries no border
  expect((svg.match(/<path/g) ?? []).length).toBe(1); // exactly one motif
});

test("shared header brand mark path is unchanged", async ({ page }) => {
  await page.goto("/");
  const brandPath = page.locator(".brand svg path");
  await expect(brandPath).toHaveAttribute("d", "M3 18 C55 18 93 19 123 17 L139 7 L149 14 L158 12 L173 19 L187 16 L205 20 C232 22 260 22 297 22");
});

test("deployed Section 07 asset remains byte-identical to its immutable mission input", async () => {
  // Section 05's artwork was deliberately revised under AW-20260908-002 to express the
  // owner-approved six-element landscape model; only Section 07 retains the prior
  // byte-equality guarantee from AW-20260904-004.
  const missionInputsDir = fileURLToPath(new URL("../reviews/missions/AW-20260904-004/inputs/", import.meta.url));
  const file = "alaya-07-horizon.svg";
  const [inputBytes, deployedBytes] = await Promise.all([readFile(`${missionInputsDir}${file}`), readFile(`${assetsDir}${file}`)]);
  expect(Buffer.compare(inputBytes, deployedBytes)).toBe(0);
  expect(await sha256(`${assetsDir}${file}`)).toBe(await sha256(`${missionInputsDir}${file}`));
});
