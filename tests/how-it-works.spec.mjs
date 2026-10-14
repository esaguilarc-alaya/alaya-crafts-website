import { test, expect } from "@playwright/test";

const unbase = (p) => { const b = (process.env.BASE_PATH ?? "").trim(); return b && p.startsWith(b) ? p.slice(b.length) : p; };

test("How it works shows the example, the method, the steps, the FAQ and an early-access link", async ({ page }) => {
  await page.goto("/how-it-works/");
  await expect(page.locator("h1")).toHaveText("See how a reading is made.");
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveText("How it works");
  await expect(page.locator(".ex .xl")).toHaveText(["The account", "The reading", "Status"]);
  await expect(page.locator(".ex .st")).toContainText("Emerging");
  await expect(page.locator(".pull p")).toHaveText("Alaya does not ask you to trust the output. It shows you how it was reached.");
  await expect(page.locator(".steps li")).toHaveCount(3);
  await expect(page.locator(".faq dt")).toHaveCount(5);
  const mails = page.locator('a[href^="mailto:curious@alayacrafts.com"]');
  await expect(mails).toHaveCount(2);
  await expect(mails.first()).toHaveText("Request early access");
  const hrefs = await page.locator(".eng .more").evaluateAll((l) => l.map((a) => new URL(a.href).pathname));
  expect(hrefs.map(unbase)).toEqual(["/cie-professional/", "/for-organizations/"]);
  await expect(page.locator("main")).not.toContainText("AI-powered");
});

test("Get started on the home page lands on How it works, in both languages", async ({ page }) => {
  await page.goto("/");
  await page.locator(".hero-cta .btn").click();
  await expect(page).toHaveURL(/\/how-it-works\/$/);
  await page.goto("/es/");
  await page.locator(".hero-cta .btn").click();
  await expect(page).toHaveURL(/\/es\/how-it-works\/$/);
  await expect(page.locator("h1")).toHaveText("Vea cómo se hace una lectura.");
  await expect(page.locator(".lang-switch")).toHaveText("English");
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveText("Cómo funciona");
  await expect(page.locator("main")).not.toContainText("tú ");
});

test("How it works has no horizontal overflow and six nav links fit", async ({ page }) => {
  for (const path of ["/how-it-works/", "/es/how-it-works/", "/", "/es/"]) {
    for (const width of [390, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(path);
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(over, `${path} @${width}`).toBeLessThanOrEqual(0);
    }
  }
});
