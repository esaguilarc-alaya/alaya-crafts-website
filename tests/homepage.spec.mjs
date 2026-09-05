import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { expect, test } from "@playwright/test";

const labels = ["The Alaya Idea", "CIE Professional", "For Organizations", "Ideas", "Contact"];

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

test("Section 05 selects the approved desktop artwork at 1440px without fetching the mobile artwork", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  const requested = [];
  page.on("request", (req) => requested.push(req.url()));
  await page.goto("/");
  const field = page.locator(".landscape");
  await expect(field).toHaveAttribute("aria-label", "Conceptual capability landscape");
  const image = field.locator("img.field-svg");
  await expect(image).toHaveCount(1);
  await expect(image).toHaveAttribute("aria-hidden", "true");
  // No legacy inline visual hooks remain from the hand-authored SVG this replaces.
  await expect(field.locator("svg")).toHaveCount(0);
  await expect(page.locator(".field-terrain, .field-contours, .field-path, .field-relations, .field-cultivation")).toHaveCount(0);
  // The browser resolved the desktop composition, not the mobile one, and fetched only it.
  await expect.poll(() => image.evaluate((el) => el.currentSrc)).toContain("alaya-05-living-field-desktop.svg");
  expect(requested.some((url) => url.includes("alaya-05-living-field-desktop.svg"))).toBe(true);
  expect(requested.some((url) => url.includes("alaya-05-living-field-mobile.svg"))).toBe(false);
  // Exact approved copy is unchanged.
  await expect(field.locator("p.capability")).toHaveText("Capability The terrain.");
  await expect(field.locator("p.knowledge")).toHaveText("Knowledge Definition and memory.");
  await expect(field.locator("p.technology")).toHaveText("Technology Connection and use.");
  await expect(field.locator("p.intelligence")).toHaveText("Intelligence Relationships becoming visible.");
  const box = await field.boundingBox();
  expect(box.x + box.width).toBeLessThanOrEqual(1440);
});

test("Section 05 and Section 07 visuals stay legible and non-overflowing at 390px, selecting the mobile composition", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const requested = [];
  page.on("request", (req) => requested.push(req.url()));
  await page.goto("/");
  const field = page.locator(".landscape");
  const mountain = page.locator(".product-mountain");
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
  await mountain.scrollIntoViewIfNeeded();
  await expect(mountain.locator("img.mountain-scene")).toBeVisible();
  const mountainBox = await mountain.boundingBox();
  expect(mountainBox.x).toBeGreaterThanOrEqual(0);
  expect(mountainBox.x + mountainBox.width).toBeLessThanOrEqual(390);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
});

test("Section 07 presents the approved horizon artwork, proportionally cropped, without fabricated product UI", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const mountainContainer = page.locator(".product-mountain");
  const mountain = mountainContainer.locator("img.mountain-scene");
  await expect(mountain).toHaveCount(1);
  await expect(mountain).toHaveAttribute("aria-hidden", "true");
  await expect(mountain).toHaveAttribute("src", /alaya-07-horizon\.svg$/);
  // No legacy inline ridge/detail hooks remain from the hand-authored SVG this replaces.
  await expect(page.locator(".mountain-ridge-far, .mountain-ridge-mid, .mountain-ridge-near, .mountain-detail, .mountain-glow")).toHaveCount(0);
  // The asset's own intrinsic 600x250 (2.4:1) size is preserved, so the container's
  // differently-proportioned box relies on the file's embedded xMidYMid slice cropping
  // rather than CSS stretching it.
  const naturalSize = await mountain.evaluate((el) => ({ w: el.naturalWidth, h: el.naturalHeight }));
  expect(naturalSize).toEqual({ w: 600, h: 250 });
  const objectFit = await mountain.evaluate((el) => getComputedStyle(el).objectFit);
  expect(objectFit).toBe("fill"); // default: no CSS-level fit override competes with the file's own preserveAspectRatio
  const containerBox = await mountainContainer.boundingBox();
  const mountainBox = await mountain.boundingBox();
  expect(Math.abs(mountainBox.width - containerBox.width)).toBeLessThanOrEqual(2);
  expect(Math.abs(mountainBox.height - containerBox.height)).toBeLessThanOrEqual(2);
  // Exact approved copy is unchanged and not obscured by the graphic.
  await expect(page.locator(".product-glimpse p").first()).toHaveText("Your understanding");
  await expect(page.locator(".product-glimpse blockquote")).toHaveText("A recurring theme is beginning to emerge from the work you’ve brought into view.");
  // No fabricated product interface: no controls, metrics, or progress affordances.
  await expect(page.locator(".product-glimpse button, .product-glimpse input, .product-glimpse progress, .product-glimpse meter, .product-glimpse [role=\"progressbar\"]")).toHaveCount(0);
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

test("deployed Section 05/07 assets are byte-identical to the immutable mission inputs", async () => {
  const missionInputsDir = fileURLToPath(new URL("../reviews/missions/AW-20260904-004/inputs/", import.meta.url));
  for (const file of ["alaya-05-living-field-desktop.svg", "alaya-05-living-field-mobile.svg", "alaya-07-horizon.svg"]) {
    const [inputBytes, deployedBytes] = await Promise.all([readFile(`${missionInputsDir}${file}`), readFile(`${assetsDir}${file}`)]);
    expect(Buffer.compare(inputBytes, deployedBytes)).toBe(0);
    expect(await sha256(`${assetsDir}${file}`)).toBe(await sha256(`${missionInputsDir}${file}`));
  }
});
