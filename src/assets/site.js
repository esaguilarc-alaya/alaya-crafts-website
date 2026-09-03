const header = document.querySelector("[data-site-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const label = document.querySelector("[data-menu-label]");
const nav = document.querySelector("#site-nav");

function setMenu(open) {
  header?.classList.toggle("nav-open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  if (label) label.textContent = open ? "Close" : "Explore";
}

toggle?.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toggle?.getAttribute("aria-expanded") === "true") {
    setMenu(false); toggle.focus();
  }
});
nav?.addEventListener("click", (event) => { if (event.target.closest("a")) setMenu(false); });
matchMedia("(min-width: 821px)").addEventListener("change", (event) => { if (event.matches) setMenu(false); });
