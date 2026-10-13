export const languages = ["en", "es"];
export const defaultLanguage = "en";

const routeDefinitions = [
  { id: "home", path: "/", label: { en: "The Alaya Idea", es: "La idea de Alaya" } },
  { id: "cie", path: "/cie-professional/", label: { en: "CIE Professional", es: "CIE Professional" } },
  { id: "organizations", path: "/for-organizations/", label: { en: "For Organizations", es: "Para Organizaciones" } },
  { id: "ideas", path: "/ideas/", label: { en: "Ideas", es: "Ideas" } },
  { id: "contact", path: "/contact/", label: { en: "Contact", es: "Contacto" } },
];

// English routes keep their original shape so existing links and tests are unchanged.
export const routes = routeDefinitions.map(({ id, path, label }) => ({ id, path, label: label.en }));

// Spanish routes mirror the English paths under /es/.
export function routesFor(lang = defaultLanguage) {
  return routeDefinitions.map(({ id, path, label }) => ({ id, path: localizedPath(path, lang), label: label[lang] }));
}

export function localizedPath(path, lang = defaultLanguage) {
  if (lang === defaultLanguage) return path;
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}

// Map any page path to the same page in the other language.
export function alternatePath(path, lang) {
  if (lang === defaultLanguage) return localizedPath(path, "es");
  return path.replace(/^\/es(?=\/)/, "") || "/";
}

export function normalizeBasePath(value = "") {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

export function hrefFor(path, basePath = "") {
  const base = normalizeBasePath(basePath);
  return path === "/" ? `${base}/` : `${base}${path}`;
}
