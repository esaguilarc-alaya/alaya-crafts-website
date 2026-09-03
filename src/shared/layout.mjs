import { hrefFor, routes } from "./routes.mjs";

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function brand(basePath) {
  return `<a class="brand" href="${hrefFor("/", basePath)}" aria-label="Alaya Crafts home">
    <span>Alaya Crafts</span><svg viewBox="0 0 300 30" aria-hidden="true"><path d="M3 18 C55 18 93 19 123 17 L139 7 L149 14 L158 12 L173 19 L187 16 L205 20 C232 22 260 22 297 22"/></svg>
  </a>`;
}

function navigation(activeRoute, basePath) {
  return routes.map((route) => `<a href="${hrefFor(route.path, basePath)}"${route.id === activeRoute ? ' aria-current="page"' : ""}>${route.label}</a>`).join("");
}

export function renderLayout({ title, description, activeRoute, body, pageClass = "", pageStyles = "", basePath = "" }) {
  const nav = navigation(activeRoute, basePath);
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${escapeHtml(description)}"><title>${escapeHtml(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${hrefFor("/assets/site.css", basePath)}">${pageStyles ? `<link rel="stylesheet" href="${hrefFor(pageStyles, basePath)}">` : ""}
<script src="${hrefFor("/assets/site.js", basePath)}" defer></script></head>
<body class="${pageClass}"><a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" data-site-header>${brand(basePath)}<nav class="site-nav" id="site-nav" aria-label="Public navigation">${nav}</nav>
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle><span data-menu-label>Explore</span></button></header>
<main id="main">${body}</main>
<footer class="site-footer"><span>Alaya Crafts</span><nav aria-label="Footer navigation">${nav}</nav><span>Capability is the enduring asset.</span></footer>
</body></html>`;
}
