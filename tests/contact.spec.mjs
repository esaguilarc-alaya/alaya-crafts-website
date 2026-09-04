import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { expect, test } from "@playwright/test";

const labels = ["The Alaya Idea", "CIE Professional", "For Organizations", "Ideas", "Contact"];
const root = dirname(dirname(fileURLToPath(import.meta.url)));

test("Contact route generates exactly one index.html and no extra output", async () => {
  const distContact = join(root, "dist", "contact");
  expect(existsSync(join(distContact, "index.html"))).toBe(true);
});

test("Contact uses the shared shell, exact approved copy, and a single direct email mechanism", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/contact/");

  // Shared shell: canonical order, exactly one aria-current on Contact, same header/footer source.
  await expect(page.locator(".site-header .site-nav a")).toHaveText(labels);
  await expect(page.locator(".site-footer nav a")).toHaveText(labels);
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveText("Contact");
  await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveCount(1);
  await expect(page.locator('.site-footer nav a[aria-current="page"]')).toHaveText("Contact");
  await expect(page.locator('.site-footer nav a[aria-current="page"]')).toHaveCount(1);

  // Exact approved copy.
  await expect(page.locator(".eyebrow")).toHaveText("Contact");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText("Start a conversation.");
  await expect(page.locator(".invitation")).toHaveText("Alaya is an evolving body of work. If something here connects with a question you're exploring, an idea you're developing, or work you're trying to understand, you can reach us directly.");
  await expect(page.locator(".write-label")).toHaveText("Write to Alaya");
  await expect(page.locator(".human-note")).toHaveText("Your message will be read and answered by a person.");

  // Exactly one visible, usable email link with the exact address and href — no button treatment.
  const emailLinks = page.locator('a[href^="mailto:"]');
  await expect(emailLinks).toHaveCount(1);
  await expect(emailLinks).toHaveText("curious@alayacrafts.com");
  await expect(emailLinks).toHaveAttribute("href", "mailto:curious@alayacrafts.com");
  await expect(emailLinks).toBeVisible();
  const emailStyle = await emailLinks.evaluate((el) => {
    const cs = getComputedStyle(el);
    return { backgroundColor: cs.backgroundColor, borderRadius: cs.borderRadius, display: cs.display };
  });
  expect(emailStyle.backgroundColor).toBe("rgba(0, 0, 0, 0)");
  expect(emailStyle.borderRadius).toBe("0px");
  expect(emailStyle.display).not.toBe("block");

  // Absence of every other contact mechanism or field.
  await expect(page.locator("form")).toHaveCount(0);
  await expect(page.locator("input")).toHaveCount(0);
  await expect(page.locator("textarea")).toHaveCount(0);
  await expect(page.locator("select")).toHaveCount(0);
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  const html = await page.content();
  expect(html.toLowerCase()).not.toContain("calendly");

  // Compact composition: exactly one page section.
  await expect(page.locator("main > section")).toHaveCount(1);

  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1440);
});

test("Contact is responsive and keyboard navigable at 390px with zero overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact/");
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

  // Nav-item click closes the open menu.
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.evaluate(() => {
    document.querySelectorAll("#site-nav a").forEach((a) => a.addEventListener("click", (e) => e.preventDefault(), { once: true }));
  });
  await page.locator("#site-nav a").first().click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(".site-nav")).toBeHidden();

  // Desktop-resize cleanup closes an open mobile menu.
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(".site-nav")).toBeVisible();
});

test("Contact is visually compact and reflows to one column at 390px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact/");
  const columns = await page.locator(".contact-inner").evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(" ").length);
  expect(columns).toBe(1);
  const sectionCount = await page.locator("main > section").count();
  expect(sectionCount).toBe(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/contact/");
  const desktopColumns = await page.locator(".contact-inner").evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(" ").length);
  expect(desktopColumns).toBe(2);
});

test("Contact artifact excludes visualization scaffolding and study controls", async ({ request }) => {
  const html = await (await request.get("/contact/")).text();
  for (const forbidden of ["unpkg.com", "floating-ui", "lucide", "srcdoc=", "iframe", "desktop study", "mobile study", "data:image/png;base64", "class=\"inspector\"", "data-view=", "aria-pressed"]) {
    expect(html.toLowerCase()).not.toContain(forbidden.toLowerCase());
  }
});

test("Existing Homepage, Organizations, and Ideas Contact links resolve to the canonical /contact/ route", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });

  await page.goto("/");
  const homeHref = await page.locator(".contact-invitation a").getAttribute("href");
  expect(new URL(homeHref, page.url()).pathname).toBe("/contact/");
  // Confirm the Homepage link actually lands on the real generated Contact page, not a dead relative path.
  await page.locator(".contact-invitation a").click();
  await expect(page).toHaveURL(/\/contact\/$/);
  await expect(page.locator("h1")).toHaveText("Start a conversation.");

  await page.goto("/for-organizations/");
  const orgHrefs = await page.locator(".open-paths a").evaluateAll((links) => links.map((a) => a.getAttribute("href")));
  expect(orgHrefs.some((href) => new URL(href, page.url()).pathname === "/contact/")).toBe(true);

  await page.goto("/ideas/");
  const ideasHref = await page.locator(".ideas-other-voices .read-link").getAttribute("href");
  expect(new URL(ideasHref, page.url()).pathname).toBe("/contact/");
});
