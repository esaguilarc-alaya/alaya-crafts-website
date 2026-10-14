import { test, expect } from "@playwright/test";

const unbase = (p) => { const b = (process.env.BASE_PATH ?? "").trim(); return b && p.startsWith(b) ? p.slice(b.length) : p; };

const cases = [
  ["/cie-professional/", "Take back the story of what you can do.", "In production", "Start with your résumé", "/how-it-works/"],
  ["/es/cie-professional/", "Recupere la historia de lo que usted es capaz de hacer.", "En producción", "Comience con su currículum", "/es/how-it-works/"],
  ["/for-organizations/", "Transformations do not start from zero.", "In production", "Request an organization pilot", "/how-it-works/"],
  ["/es/for-organizations/", "Las transformaciones no empiezan de cero.", "En producción", "Solicite un piloto organizacional", "/es/how-it-works/"],
];

for (const [path, h1, tag, cta, how] of cases) {
  test(`${path} opens with the commercial hook and keeps the existing sections`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText(h1);
    await expect(page.locator(".tag").first()).toHaveText(tag);
    await expect(page.locator(".cta", { hasText: cta }).first()).toBeVisible();
    const hows = await page.locator('a[href$="how-it-works/"]').evaluateAll((l) => l.map((a) => new URL(a.href).pathname));
    expect(hows.length).toBeGreaterThan(0);
    for (const h of hows) expect(unbase(h)).toBe(how);
    const mails = await page.locator('a.cta[href^="mailto:"]').evaluateAll((l) => l.map((a) => a.getAttribute("href")));
    for (const m of mails) expect(m).toMatch(/^mailto:curious@alayacrafts\.com\?subject=/);
    // existing sections are still present below the new opening
    await expect(page.locator(".eyebrow").last()).toBeVisible();
    for (const w of [390, 1024, 1440]) {
      await page.setViewportSize({ width: w, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(w);
    }
  });
}

test("Organizations example is labelled illustrative and Professional keeps its trust block", async ({ page }) => {
  await page.goto("/for-organizations/");
  await expect(page.locator(".tag", { hasText: "Illustrative example" })).toHaveCount(1);
  await expect(page.locator(".qtable .qr")).toHaveCount(7);
  await expect(page.locator(".paths .open-paths a")).toHaveCount(2);
  await expect(page.locator(".thesis, .onion-field")).toHaveCount(0);
  await page.goto("/cie-professional/");
  await expect(page.locator(".tag", { hasText: "Illustrative example" })).toHaveCount(1);
  await expect(page.locator(".trust")).toHaveCount(1);
  await expect(page.locator(".benefits li")).toHaveCount(8);
});
