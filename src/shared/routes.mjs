export const routes = [
  { id: "home", label: "The Alaya Idea", path: "/" },
  { id: "cie", label: "CIE Professional", path: "/cie-professional/" },
  { id: "organizations", label: "For Organizations", path: "/for-organizations/" },
  { id: "ideas", label: "Ideas", path: "/ideas/" },
  { id: "contact", label: "Contact", path: "/contact/" },
];

export function normalizeBasePath(value = "") {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

export function hrefFor(path, basePath = "") {
  const base = normalizeBasePath(basePath);
  return path === "/" ? `${base}/` : `${base}${path}`;
}
