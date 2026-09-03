# Homepage Production Reference — Implementation Gate

Status: Active  
Applies to: the first production implementation of the Alaya Crafts Homepage and every page migrated after it

## Source boundary

Production is built from the editable study source and approved design/content documents. It must never be copied from a rendered Codex visualization export.

Rendered study files may be used only for visual comparison. They contain preview scaffolding that is not part of the website, including iframe/srcdoc wrappers and potentially injected third-party scripts.

The production output must contain none of the following:

- `unpkg.com` dependencies;
- Floating UI preview scripts;
- Lucide preview scripts;
- iframe or `srcdoc` visualization wrappers;
- `Desktop study` or `Mobile study` controls;
- design inspectors, numbered-section inspection behavior, or preview badges;
- embedded base64 brand raster data.

## Shared production shell

The Homepage reference implementation establishes one shared source for:

- the Alaya Crafts brand lockup;
- the canonical header and navigation;
- the responsive `Explore` / `Close` menu;
- the canonical footer;
- route definitions and active-route behavior.

Later pages must consume this shared shell. They must not reproduce matching header or footer markup by hand.

The seam is intentionally narrow: the shared shell owns document structure, metadata, brand, navigation, footer, routes, and common assets. Each page owns its complete body composition and page-specific styling; no generic section schema may flatten the approved differences between pages.

The active navigation link uses `aria-current="page"`. The mobile menu must support keyboard navigation, Enter/Space activation through a native button, Escape to close, accurate `aria-expanded`, and focusable semantic links.

## GitHub Pages route structure

Every clean trailing-slash route resolves through a real directory containing `index.html`:

```text
index.html
cie-professional/index.html
for-organizations/index.html
ideas/index.html
ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/index.html
contact/index.html
```

No server-side rewrites are assumed.

The repository-owned Node build writes these routes to `dist/`. GitHub Actions publishes that directory as the Pages artifact. The builder resolves links through a configurable base path so the GitHub project-site preview can live under `/alaya-crafts-website` without changing the canonical route definitions.

## Homepage acceptance checks

The Homepage reference implementation is not complete until an independent check confirms:

- at a real 390px viewport, with no simulation toggle, mobile layouts activate automatically;
- document width equals viewport width and there is no horizontal overflow;
- the header and footer originate from the shared implementation source;
- navigation order is exactly `The Alaya Idea · CIE Professional · For Organizations · Ideas · Contact`;
- the footer uses the same label set and order;
- the active Homepage route exposes `aria-current="page"` on `The Alaya Idea`;
- the mobile menu works with Tab, Enter, and Escape;
- all route strings match the V1 route contract;
- the output contains no study or visualization scaffolding and no embedded raster brand asset;
- the page remains visually faithful to the approved Homepage study without importing product-interface or consulting-site patterns.

Repeatable structural and interaction checks are implemented in a checked-in Playwright suite and run against the generated site. A failing test blocks the GitHub Pages deployment job. Manual browser review remains part of approval for visual hierarchy, typography, spacing, and family resemblance.

## Gate discipline

The Homepage is the reference implementation. Shared-shell decisions are corrected here before the remaining pages are migrated. Approval of this slice establishes the implementation pattern; it does not waive page-specific review for CIE Professional, For Organizations, Ideas, the launch article, or Contact.
