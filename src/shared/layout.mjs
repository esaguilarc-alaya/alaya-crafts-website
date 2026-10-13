import { alternatePath, hrefFor, routesFor } from "./routes.mjs";

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const SITE_ORIGIN = "https://alayacrafts.com";

const strings = {
  en: {
    skip: "Skip to content", brandLabel: "Alaya Crafts home", navLabel: "Public navigation", footerNavLabel: "Footer navigation",
    open: "Explore", close: "Close", tagline: "Capability is the enduring asset.",
    switchText: "Español", switchLabel: "Leer este sitio en español", switchLang: "es",
  },
  es: {
    skip: "Saltar al contenido", brandLabel: "Inicio de Alaya Crafts", navLabel: "Navegación pública", footerNavLabel: "Navegación del pie de página",
    open: "Explorar", close: "Cerrar", tagline: "La capacidad es el activo que perdura.",
    switchText: "English", switchLabel: "Read this site in English", switchLang: "en",
  },
};

function brand(basePath, lang) {
  return `<a class="brand" href="${hrefFor(lang === "es" ? "/es/" : "/", basePath)}" aria-label="${strings[lang].brandLabel}">
    <span>Alaya Crafts</span><svg viewBox="0 0 300 30" aria-hidden="true"><path d="M3 18 C55 18 93 19 123 17 L139 7 L149 14 L158 12 L173 19 L187 16 L205 20 C232 22 260 22 297 22"/></svg>
  </a>`;
}

function navigation(activeRoute, basePath, lang) {
  return routesFor(lang).map((route) => `<a href="${hrefFor(route.path, basePath)}"${route.id === activeRoute ? ' aria-current="page"' : ""}>${route.label}</a>`).join("");
}

export function renderLayout({ title, description, activeRoute, body, pageClass = "", pageStyles = "", basePath = "", lang = "en", pagePath = "" }) {
  const t = strings[lang];
  const nav = navigation(activeRoute, basePath, lang);
  const otherPath = pagePath ? alternatePath(pagePath, lang) : "";
  const switcher = otherPath
    ? `<a class="lang-switch" href="${hrefFor(otherPath, basePath)}" hreflang="${t.switchLang}" lang="${t.switchLang}" aria-label="${t.switchLabel}">${t.switchText}</a>`
    : "";
  const alternates = pagePath && !basePath
    ? [["en", lang === "en" ? pagePath : otherPath], ["es", lang === "es" ? pagePath : otherPath], ["x-default", lang === "en" ? pagePath : otherPath]]
        .map(([code, path]) => `<link rel="alternate" hreflang="${code}" href="${SITE_ORIGIN}${path}">`).join("")
    : "";
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${escapeHtml(description)}"><title>${escapeHtml(title)}</title>${alternates}
<link rel="icon" type="image/svg+xml" href="${hrefFor("/assets/favicon.svg", basePath)}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${hrefFor("/assets/site.css", basePath)}">${pageStyles ? `<link rel="stylesheet" href="${hrefFor(pageStyles, basePath)}">` : ""}
<script src="${hrefFor("/assets/site.js", basePath)}" defer></script></head>
<body class="${pageClass}"><a class="skip-link" href="#main">${t.skip}</a>
<header class="site-header" data-site-header>${brand(basePath, lang)}<nav class="site-nav" id="site-nav" aria-label="${t.navLabel}">${nav}</nav>${switcher}
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle data-label-open="${t.open}" data-label-close="${t.close}"><span data-menu-label>${t.open}</span></button></header>
<main id="main">${body}</main>
<footer class="site-footer"><span>Alaya Crafts</span><nav aria-label="${t.footerNavLabel}">${nav}</nav><span>${t.tagline}</span></footer>
</body></html>`;
}
