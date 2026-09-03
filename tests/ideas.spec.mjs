import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { expect, test } from "@playwright/test";

const labels = ["The Alaya Idea", "CIE Professional", "For Organizations", "Ideas", "Contact"];
const ARTICLE_SLUG = "the-rule-we-had-to-keep-re-learning-while-building-cie";
const root = dirname(dirname(fileURLToPath(import.meta.url)));

test("Ideas index generates exactly one launch item and no extra routes", async () => {
  const distIdeas = join(root, "dist", "ideas");
  const entries = readdirSync(distIdeas).sort();
  expect(entries).toEqual(["index.html", ARTICLE_SLUG].sort());
  const articleEntries = readdirSync(join(distIdeas, ARTICLE_SLUG));
  expect(articleEntries).toEqual(["index.html"]);
});

test("Ideas index uses the shared shell and the six-part index structure", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/ideas/");
  await expect(page.locator(".site-header .site-nav a")).toHaveText(labels);
  await expect(page.locator(".site-footer nav a")).toHaveText(labels);
  await expect(page.locator(".site-header .site-nav a[aria-current=\"page\"]")).toHaveText("Ideas");
  await expect(page.locator(".site-header .site-nav a[aria-current=\"page\"]")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText("An evolving body of thought.");

  // Exactly one real launch item, chronologically indexed with metadata as content.
  await expect(page.locator(".index-item")).toHaveCount(1);
  await expect(page.locator(".index-item .index-date")).toHaveText("27 Aug 2026");
  await expect(page.locator(".index-item .index-meta")).toContainText("Field Work");
  await expect(page.locator(".index-item .index-meta")).toContainText("Developed");

  // Featured item and chronological item are both real links to the launch article.
  const featuredHref = await page.locator(".feature-title a").getAttribute("href");
  const indexItemHref = await page.locator(".index-item .index-title a").getAttribute("href");
  const readLinkHref = await page.locator(".ideas-featured .read-link").getAttribute("href");
  for (const href of [featuredHref, indexItemHref, readLinkHref]) {
    expect(href.endsWith(`${ARTICLE_SLUG}/`)).toBe(true);
  }

  // Ways of reading names the three formats as content, not filter controls.
  await expect(page.locator(".format h3")).toHaveText(["Essays", "Notes", "Field Work"]);
  await expect(page.locator(".format button")).toHaveCount(0);

  // Honest empty Other Voices invitation, routed to canonical Contact.
  await expect(page.locator(".empty-status")).toHaveText("Nothing has been published here yet. If you're working through something that belongs in this kind of space, reach out.");
  const shareHref = await page.locator(".ideas-other-voices .read-link").getAttribute("href");
  expect(new URL(shareHref, page.url()).pathname.endsWith("/contact/")).toBe(true);

  // Open ending resolves back to the Ideas index itself.
  const followHref = await page.locator(".ideas-open-end .read-link").getAttribute("href");
  expect(new URL(followHref, page.url()).pathname.endsWith("/ideas/")).toBe(true);

  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1440);
});

test("Ideas index is responsive and keyboard navigable at 390px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ideas/");
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

  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.evaluate(() => {
    document.querySelectorAll("#site-nav a").forEach((a) => a.addEventListener("click", (e) => e.preventDefault(), { once: true }));
  });
  await page.locator("#site-nav a").first().click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(".site-nav")).toBeHidden();

  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(".site-nav")).toBeVisible();
});

test("Launch article uses the shared shell, complete body, and contextual destinations", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`/ideas/${ARTICLE_SLUG}/`);
  await expect(page.locator(".site-header .site-nav a")).toHaveText(labels);
  await expect(page.locator(".site-footer nav a")).toHaveText(labels);
  await expect(page.locator(".site-header .site-nav a[aria-current=\"page\"]")).toHaveText("Ideas");
  await expect(page.locator(".site-header .site-nav a[aria-current=\"page\"]")).toHaveCount(1);

  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText("The rule we had to keep re-learning while building CIE");
  await expect(page.locator(".article-meta")).toContainText("Developed");
  await expect(page.locator(".article-meta")).toContainText("27 August 2026");
  await expect(page.locator(".article-meta")).toContainText("Alaya Crafts");

  // The complete settled article body is present: dek + 11 body paragraphs + 5 section headings.
  await expect(page.locator(".reading .dek")).toHaveCount(1);
  await expect(page.locator(".article-body .reading > p")).toHaveCount(12);
  await expect(page.locator(".article-body .reading > h2")).toHaveCount(5);
  await expect(page.locator(".article-body")).toContainText("deferredContributions");
  await expect(page.locator(".article-body")).toContainText("13 to 15 real applications");

  // Contextual CIE connection and return-to-Ideas path.
  const cieHref = await page.locator(".article-connection .read-link:not(.back)").getAttribute("href");
  expect(new URL(cieHref, page.url()).pathname.endsWith("/cie-professional/")).toBe(true);
  const backHref = await page.locator(".article-connection .back").getAttribute("href");
  expect(new URL(backHref, page.url()).pathname.endsWith("/ideas/")).toBe(true);

  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1440);
});

test("Launch article reading measure is comfortable and template supports block quotations and references", async ({ page, request }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`/ideas/${ARTICLE_SLUG}/`);
  const readingWidth = await page.locator(".article-body .reading").evaluate((el) => el.getBoundingClientRect().width);
  expect(readingWidth).toBeGreaterThan(500);
  expect(readingWidth).toBeLessThan(760);

  const css = await (await request.get("/assets/ideas.css")).text();
  expect(css).toContain(".reading blockquote{");
  expect(css).toContain(".reference{");
});

test("Launch article is responsive at 390px with zero overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`/ideas/${ARTICLE_SLUG}/`);
  const menu = page.locator("[data-menu-toggle]");
  await expect(menu).toBeVisible();
  await expect(page.locator(".site-nav")).toBeHidden();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
});

test("Ideas artifacts exclude visualization scaffolding and study controls", async ({ request }) => {
  for (const path of ["/ideas/", `/ideas/${ARTICLE_SLUG}/`]) {
    const html = await (await request.get(path)).text();
    for (const forbidden of ["unpkg.com", "floating-ui", "lucide", "srcdoc=", "Desktop study", "Mobile study", "data:image/png;base64", "class=\"inspector\"", "data-document=", "data-view=", "aria-pressed"]) {
      expect(html.toLowerCase()).not.toContain(forbidden.toLowerCase());
    }
  }
});
