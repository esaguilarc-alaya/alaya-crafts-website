import { expect, test } from "@playwright/test";

const labels = ["The Alaya Idea", "How it works", "CIE Professional", "For Organizations", "Ideas", "Contact"];

test("CIE Professional uses the shared shell without flattening its composition", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/cie-professional/");
  await expect(page.locator(".site-header .site-nav a")).toHaveText(labels);
  await expect(page.locator(".site-footer nav a")).toHaveText(labels);
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveText("CIE Professional");
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveCount(1);
  await expect(page.locator(".trust")).toHaveCSS("background-color", "rgb(89, 99, 75)");
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1440);
});

test("CIE Professional is responsive and keyboard navigable at 390px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/cie-professional/");
  const menu = page.locator("[data-menu-toggle]");
  await expect(menu).toBeVisible();
  await expect(page.locator(".site-nav")).toBeHidden();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(".site-nav")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
});

test("CIE production artifact excludes visualization scaffolding", async ({ request }) => {
  const html = await (await request.get("/cie-professional/")).text();
  for (const forbidden of ["unpkg.com", "floating-ui", "lucide", "srcdoc=", "Desktop study", "Mobile study", "data:image/png;base64", "class=\"inspector\""]) {
    expect(html.toLowerCase()).not.toContain(forbidden.toLowerCase());
  }
});
