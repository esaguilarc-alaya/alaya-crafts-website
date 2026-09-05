import { expect, test } from "@playwright/test";

const labels = ["The Alaya Idea", "CIE Professional", "For Organizations", "Ideas", "Contact"];

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

test("Section 05 Living Field composes capability, knowledge, technology, and intelligence as one structure", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const field = page.locator(".landscape");
  await expect(field).toHaveAttribute("aria-label", "Conceptual capability landscape");
  await expect(field.locator("svg.field-svg")).toHaveAttribute("aria-hidden", "true");
  // Structural hooks: terrain (capability), contour lines (knowledge/definition), a
  // connecting path (technology/use), and a separate revealed-relationship mark (intelligence).
  await expect(field.locator(".field-terrain")).toHaveCount(1);
  await expect(field.locator(".field-contours path")).toHaveCount(3);
  await expect(field.locator(".field-path")).toHaveCount(1);
  await expect(field.locator(".field-relations circle")).toHaveCount(3);
  await expect(field.locator(".field-relations line")).toHaveCount(4);
  // Exact approved copy is unchanged.
  await expect(field.locator("p.capability")).toHaveText("Capability The terrain.");
  await expect(field.locator("p.knowledge")).toHaveText("Knowledge Definition and memory.");
  await expect(field.locator("p.technology")).toHaveText("Technology Connection and use.");
  await expect(field.locator("p.intelligence")).toHaveText("Intelligence Relationships becoming visible.");
  // The relationship marks must not sit on the connecting path itself, so the graphic
  // does not read as a single trend line with data-point markers.
  const relations = field.locator(".field-relations");
  await expect(relations).toHaveCount(1);
  const box = await field.boundingBox();
  expect(box.x + box.width).toBeLessThanOrEqual(1440);
});

test("Section 05 and Section 07 visuals stay legible and non-overflowing at 390px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const field = page.locator(".landscape");
  const mountain = page.locator(".product-mountain");
  await field.scrollIntoViewIfNeeded();
  await expect(field.locator("svg.field-svg")).toBeVisible();
  const fieldBox = await field.boundingBox();
  expect(fieldBox.x).toBeGreaterThanOrEqual(0);
  expect(fieldBox.x + fieldBox.width).toBeLessThanOrEqual(390);
  await mountain.scrollIntoViewIfNeeded();
  await expect(mountain.locator("svg.mountain-scene")).toBeVisible();
  const mountainBox = await mountain.boundingBox();
  expect(mountainBox.x).toBeGreaterThanOrEqual(0);
  expect(mountainBox.x + mountainBox.width).toBeLessThanOrEqual(390);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
});

test("Section 07 presents a recognizable mountain landscape without fabricated product UI", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const mountain = page.locator(".product-mountain svg.mountain-scene");
  await expect(mountain).toHaveAttribute("aria-hidden", "true");
  // Layered ridges at different depths, plus terrain-detail creases on the nearest ridge.
  await expect(page.locator(".mountain-ridge-far")).toHaveCount(1);
  await expect(page.locator(".mountain-ridge-mid")).toHaveCount(1);
  await expect(page.locator(".mountain-ridge-near")).toHaveCount(1);
  await expect(page.locator(".mountain-detail path")).toHaveCount(4);
  // Exact approved copy is unchanged and not obscured by the graphic.
  await expect(page.locator(".product-glimpse p").first()).toHaveText("Your understanding");
  await expect(page.locator(".product-glimpse blockquote")).toHaveText("A recurring theme is beginning to emerge from the work you’ve brought into view.");
  // No fabricated product interface: no controls, metrics, or progress affordances.
  await expect(page.locator(".product-glimpse button, .product-glimpse input, .product-glimpse progress, .product-glimpse meter, .product-glimpse [role=\"progressbar\"]")).toHaveCount(0);
  await expect(page.locator(".product-mountain")).toHaveText("");
});
