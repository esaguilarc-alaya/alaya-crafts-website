import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { expect, test } from "@playwright/test";

const labels = ["The Alaya Idea", "CIE Professional", "For Organizations", "Ideas", "Contact"];
const FIELD_WORK_SLUG = "the-rule-we-had-to-keep-re-learning-while-building-cie";
const TECHNOLOGY_SLUG = "what-technology-extends-it-actually-means";
const root = dirname(dirname(fileURLToPath(import.meta.url)));

test("Ideas index generates exactly the two published article routes", async () => {
  const distIdeas = join(root, "dist", "ideas");
  const entries = readdirSync(distIdeas).sort();
  expect(entries).toEqual(["index.html", FIELD_WORK_SLUG, TECHNOLOGY_SLUG].sort());
  for (const slug of [FIELD_WORK_SLUG, TECHNOLOGY_SLUG]) {
    expect(readdirSync(join(distIdeas, slug))).toEqual(["index.html"]);
  }
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

  // Both real publications are indexed newest-first with accurate metadata.
  await expect(page.locator(".index-item")).toHaveCount(2);
  await expect(page.locator(".index-item .index-date")).toHaveText(["1 Oct 2026", "27 Aug 2026"]);
  await expect(page.locator(".index-item .index-title")).toHaveText([
    'What "technology extends it" actually means',
    "The rule we had to keep re-learning while building CIE",
  ]);
  await expect(page.locator(".index-item .index-meta")).toHaveText(["EssayDeveloped", "Field WorkDeveloped"]);

  // The newest essay is featured; both index entries link to their exact routes.
  await expect(page.locator(".ideas-featured .meta-line")).toHaveText("EssayDeveloped1 October 2026");
  await expect(page.locator(".feature-title")).toHaveText('What "technology extends it" actually means');
  const featuredHref = await page.locator(".feature-title a").getAttribute("href");
  const readLinkHref = await page.locator(".ideas-featured .read-link").getAttribute("href");
  for (const href of [featuredHref, readLinkHref]) {
    expect(href.endsWith(`${TECHNOLOGY_SLUG}/`)).toBe(true);
  }
  await expect(page.locator(".index-item .index-title a").nth(0)).toHaveAttribute("href", `./${TECHNOLOGY_SLUG}/`);
  await expect(page.locator(".index-item .index-title a").nth(1)).toHaveAttribute("href", `./${FIELD_WORK_SLUG}/`);

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

test("Field-work article retains its shared shell, complete body, and contextual destinations", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`/ideas/${FIELD_WORK_SLUG}/`);
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

test("Field-work article reading measure is comfortable and template supports block quotations and references", async ({ page, request }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`/ideas/${FIELD_WORK_SLUG}/`);
  const readingWidth = await page.locator(".article-body .reading").evaluate((el) => el.getBoundingClientRect().width);
  expect(readingWidth).toBeGreaterThan(500);
  expect(readingWidth).toBeLessThan(760);

  const css = await (await request.get("/assets/ideas.css")).text();
  expect(css).toContain(".reading blockquote{");
  expect(css).toContain(".reference{");
});

test("Field-work article is responsive at 390px with zero overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`/ideas/${FIELD_WORK_SLUG}/`);
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

test("Technology essay uses the shared shell, complete body, metadata, and contextual destinations", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`/ideas/${TECHNOLOGY_SLUG}/`);
  await expect(page.locator(".site-header .site-nav a")).toHaveText(labels);
  await expect(page.locator(".site-footer nav a")).toHaveText(labels);
  await expect(page.locator(".site-header .site-nav a[aria-current=\"page\"]")).toHaveText("Ideas");
  await expect(page.locator(".site-header .site-nav a[aria-current=\"page\"]")).toHaveCount(1);

  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText('What "technology extends it" actually means');
  await expect(page.locator(".article-head .eyebrow")).toHaveText("Essay");
  await expect(page.locator(".article-meta")).toContainText("Developed");
  await expect(page.locator(".article-meta")).toContainText("1 October 2026");
  await expect(page.locator(".article-meta")).toContainText("Alaya Crafts");

  // The complete supplied essay is present: dek + 12 body paragraphs + 3 section headings.
  await expect(page.locator(".reading .dek")).toHaveText('Most technology claims to extend you. A typewriter extends your hands. A calculator extends your arithmetic. The latest catchphrase, "AI amplifies human capability," claims the same lineage.');
  await expect(page.locator(".article-body .reading > p")).toHaveCount(13);
  await expect(page.locator(".article-body .reading > h2")).toHaveText([
    "A quick window into how that's actually built",
    "Why that constraint is the whole point",
    "What it hands back isn't a verdict. It's better material to think with.",
  ]);
  await expect(page.locator(".article-body .reading > p").last()).toHaveText("For an organization, the same shift happens at a higher level: the chance to honestly align what it does, what it wants to do, and how it can get there — by actually seeing and understanding its own landscape.");

  const cieHref = await page.getByRole("link", { name: "Explore CIE Professional" }).getAttribute("href");
  expect(new URL(cieHref, page.url()).pathname.endsWith("/cie-professional/")).toBe(true);
  const organizationsHref = await page.locator(".article-connection").getByRole("link", { name: "For Organizations", exact: true }).getAttribute("href");
  expect(new URL(organizationsHref, page.url()).pathname.endsWith("/for-organizations/")).toBe(true);
  const backHref = await page.getByRole("link", { name: "Return to Ideas" }).getAttribute("href");
  expect(new URL(backHref, page.url()).pathname.endsWith("/ideas/")).toBe(true);

  const readingWidth = await page.locator(".article-body .reading").evaluate((el) => el.getBoundingClientRect().width);
  expect(readingWidth).toBeGreaterThan(500);
  expect(readingWidth).toBeLessThan(760);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1440);
});

test("Technology essay is responsive at 390px with zero overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`/ideas/${TECHNOLOGY_SLUG}/`);
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
  for (const path of ["/ideas/", `/ideas/${FIELD_WORK_SLUG}/`, `/ideas/${TECHNOLOGY_SLUG}/`]) {
    const html = await (await request.get(path)).text();
    for (const forbidden of ["unpkg.com", "floating-ui", "lucide", "srcdoc=", "Desktop study", "Mobile study", "data:image/png;base64", "class=\"inspector\"", "data-document=", "data-view=", "aria-pressed"]) {
      expect(html.toLowerCase()).not.toContain(forbidden.toLowerCase());
    }
  }
});
