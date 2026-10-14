import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { expect, test } from "@playwright/test";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const esLabels = ["La idea de Alaya", "Cómo funciona", "CIE Professional", "Para Organizaciones", "Ideas", "Contacto"];
const basePath = (process.env.BASE_PATH ?? "").trim().replace(/\/+$/, "");
const unbase = (pathname) => (basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname) || "/";
const enLabels = ["The Alaya Idea", "How it works", "CIE Professional", "For Organizations", "Ideas", "Contact"];

// [english path, spanish path, spanish h1]
const pages = [
  ["/", "/es/", "La capacidad, leída desde el trabajo mismo."],
  ["/cie-professional/", "/es/cie-professional/", "Su carrera es más grande que su currículum."],
  ["/for-organizations/", "/es/for-organizations/", "Lo que CIE Professional comienza con una persona, Alaya está aprendiendo a comprenderlo a escala organizacional."],
  ["/ideas/", "/es/ideas/", "Un cuerpo de pensamiento en evolución."],
  ["/ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/", "/es/ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/", "La regla que tuvimos que seguir reaprendiendo mientras construíamos CIE"],
  ["/ideas/what-technology-extends-it-actually-means/", "/es/ideas/what-technology-extends-it-actually-means/", "Lo que realmente significa “la tecnología lo extiende”"],
  ["/contact/", "/es/contact/", "Inicie una conversación."],
];

test("every Spanish route is generated", () => {
  for (const [, es] of pages) {
    expect(existsSync(join(root, "dist", ...es.split("/").filter(Boolean), "index.html")), es).toBe(true);
  }
});

for (const [en, es, h1] of pages) {
  test(`Spanish page ${es} uses the Spanish shell and heading`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(es);
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText(h1);
    await expect(page.locator(".site-header .site-nav a")).toHaveText(esLabels);
    await expect(page.locator(".site-footer nav a")).toHaveText(esLabels);
    await expect(page.locator(".skip-link")).toHaveText("Saltar al contenido");
    await expect(page.locator(".site-footer > span").last()).toHaveText("La capacidad es el activo que perdura.");
    await expect(page.locator("nav.site-nav")).toHaveAttribute("aria-label", "Navegación pública");
    await expect(page.locator(".site-footer nav")).toHaveAttribute("aria-label", "Navegación del pie de página");
    await expect(page.locator(".brand")).toHaveAttribute("aria-label", "Inicio de Alaya Crafts");
    // Every nav link stays inside the Spanish site.
    const hrefs = await page.locator(".site-header .site-nav a").evaluateAll((links) => links.map((a) => new URL(a.href).pathname));
    for (const href of hrefs) expect(href).toMatch(/\/es\//);
  });

  test(`language switcher links ${es} and ${en} to each other`, async ({ page }) => {
    await page.goto(es);
    const toEn = page.locator(".lang-switch");
    await expect(toEn).toHaveCount(1);
    await expect(toEn).toHaveText("English");
    await expect(toEn).toHaveAttribute("hreflang", "en");
    expect(unbase(new URL(await toEn.evaluate((a) => a.href)).pathname)).toBe(en);
    await page.goto(en);
    const toEs = page.locator(".lang-switch");
    await expect(toEs).toHaveCount(1);
    await expect(toEs).toHaveText("Español");
    await expect(toEs).toHaveAttribute("hreflang", "es");
    expect(unbase(new URL(await toEs.evaluate((a) => a.href)).pathname)).toBe(es);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });
}

test("Spanish current-page state and mobile menu labels", async ({ page }) => {
  await page.goto("/es/for-organizations/");
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveText("Para Organizaciones");
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveCount(1);
  await page.setViewportSize({ width: 390, height: 844 });
  const toggle = page.locator("[data-menu-toggle]");
  await expect(toggle).toHaveText("Explorar");
  await toggle.click();
  await expect(toggle).toHaveText("Cerrar");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveText("Explorar");
  // English menu label is unchanged.
  await page.goto("/");
  await expect(page.locator("[data-menu-toggle]")).toHaveText("Explore");
});

test("English shell is unchanged by the language support", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page.locator(".site-header .site-nav a")).toHaveText(enLabels);
  await expect(page.locator(".skip-link")).toHaveText("Skip to content");
  await expect(page.locator(".brand")).toHaveAttribute("aria-label", "Alaya Crafts home");
});

test("approved Spanish terminology is used and the retired terms are gone", async ({ page }) => {
  await page.goto("/es/");
  const text = await page.locator("main").innerText();
  for (const present of ["Validación", "Formación", "Respaldo", "relatos profesionales", "Indagación", "establecido", "emergente", "desconocido", "currículum"]) {
    expect(text).toContain(present);
  }
  for (const gone of ["Aseguramiento", "Acompañamiento", "Sostén", "relatos del trabajo", "reinvindicar", "Stewardship", "Steadying", "Assurance"]) {
    expect(text).not.toContain(gone);
  }
  await expect(page.locator(".eb").first()).toHaveText("Capability intelligence");
  await expect(page.locator(".stats .sx .v").nth(2)).toHaveText("75/43");
  await expect(page.locator(".stats .sx")).toHaveCount(3);
  await expect(page.locator(".hero-cta .btn")).toHaveText("Comenzar");
  await expect(page.locator("main")).not.toContainText("tú ");
});

test("Spanish contact keeps the exact email address and single mailto link", async ({ page }) => {
  await page.goto("/es/contact/");
  const links = page.locator('a[href^="mailto:"]');
  await expect(links).toHaveCount(1);
  await expect(links).toHaveText("curious@alayacrafts.com");
  await expect(links).toHaveAttribute("href", "mailto:curious@alayacrafts.com");
  await expect(page.locator(".write-label")).toHaveText("Escríbale a Alaya");
  await expect(page.locator(".human-note")).toHaveText("Su mensaje será leído y respondido por una persona.");
});

test("Spanish pages link onward inside /es/ and carry hreflang alternates", async ({ page }) => {
  await page.goto("/es/");
  const hrefs = await page.locator(".hero-cta a, .contact-invitation a").evaluateAll((links) => links.map((a) => new URL(a.href).pathname));
  expect(hrefs.length).toBe(2);
  for (const href of hrefs) expect(unbase(href)).toMatch(/^\/es\//);
  const base = (process.env.BASE_PATH ?? "").trim();
  if (!base) {
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", "https://alayacrafts.com/");
    await expect(page.locator('link[rel="alternate"][hreflang="es"]')).toHaveAttribute("href", "https://alayacrafts.com/es/");
  }
  await page.goto("/es/ideas/");
  const articleLinks = await page.locator(".index-title a").evaluateAll((links) => links.map((a) => new URL(a.href).pathname));
  for (const href of articleLinks) expect(unbase(href)).toMatch(/^\/es\/ideas\//);
});

test("Spanish pages have no horizontal overflow at 390, 1024 and 1440px", async ({ page }) => {
  for (const [, es] of pages) {
    for (const width of [390, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(es);
      expect(await page.evaluate(() => document.documentElement.scrollWidth), `${es} @ ${width}`).toBe(width);
    }
  }
});

test("Spanish pages do not leak English headings", async ({ page }) => {
  const englishLeaks = ["Skip to content", "Public navigation", "Footer navigation", "Return to Ideas", "Read the essay", "Write to Alaya", "Open paths", "Related paths"];
  for (const [, es] of pages) {
    await page.goto(es);
    const text = await page.locator("body").innerText();
    for (const leak of englishLeaks) expect(text, `${es} contains "${leak}"`).not.toContain(leak);
  }
});
