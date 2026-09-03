# ADR 001 — Static Build and GitHub Pages Routing

Status: Approved  
Date: 2026-09-02

## Context

The Alaya Crafts public website has six V1 route surfaces: the Homepage, CIE Professional, For Organizations, Ideas, one launch article, and Contact. GitHub Pages serves static files and does not provide application-style server rewrites. At the same time, the header, footer, brand lockup, navigation behavior, route definitions, and accessibility behavior must be genuinely shared rather than manually repeated.

## Decision

Use a dependency-free Node.js ESM build script that composes static pages from shared source modules. This is deliberately a small repository-owned build tool, not Eleventy or another static-site framework.

- Shared route definitions, document structure, header, footer, brand lockup, metadata helpers, and asset references live once under `src/shared/`.
- Each page lives in its own module under `src/pages/` and exports its metadata, route, and complete semantic body markup.
- The shared layout accepts the page body as an intentionally open composition boundary. It does not translate pages into a generic section, card, or content-block schema.
- Global tokens, typography, navigation, footer, and baseline responsive behavior live in shared CSS. Distinct compositions—including page-specific dark surfaces, the Organizations capability-landscape diagram, and the Ideas article-reading template—remain in page-owned markup and CSS.
- The build emits plain HTML, CSS, and restrained JavaScript.
- Each trailing-slash public route emits to a matching directory with an `index.html`.
- GitHub Pages serves the generated static output without relying on rewrites.
- The generated HTML contains semantic links and the correct per-page `aria-current="page"` value.

This seam intentionally shares site behavior without forcing the approved pages into one visual template.

## Build output and publishing

- The build writes generated files to `dist/`.
- `dist/` is disposable build output and is not committed.
- A GitHub Actions workflow builds from `main`, uploads `dist/` with the official GitHub Pages artifact action, and deploys it with the official Pages deployment action.
- Source documentation remains under `docs/`; that directory is never used as generated hosting output.
- The repository root remains source-controlled project material rather than a mixture of source and generated pages.
- The build supports a configurable base path. The GitHub Pages project-site deployment uses `/alaya-crafts-website`; the eventual canonical-domain build uses `/`. Internal links are generated from the route table plus that base path rather than hard-coded independently in page modules.

The resulting artifact contains this route structure:

```text
dist/index.html
dist/cie-professional/index.html
dist/for-organizations/index.html
dist/ideas/index.html
dist/ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/index.html
dist/contact/index.html
```

## Verification strategy

Acceptance is both automated and manual.

- A checked-in Playwright test suite runs against the built `dist/` artifact.
- The deployment job depends on the build-and-test job and does not run when any acceptance test fails.
- Every route is exercised at desktop and a real 390px viewport without any study toggle.
- Tests assert no horizontal overflow, canonical navigation order, correct footer labels, correct links after base-path resolution, and exactly one correct `aria-current="page"` value.
- Mobile navigation tests exercise keyboard focus, Enter/Space through the native menu button, Escape to close, and accurate `aria-expanded` state.
- Artifact checks reject `unpkg.com`, Floating UI, Lucide preview scripts, iframe/srcdoc wrappers, study controls, inspector markup, and embedded base64 brand images.
- Automated checks protect repeatable behavior and structural guardrails. Manual browser review remains required for typography, spacing, visual hierarchy, diagram rendering, page-specific emphasis, and family resemblance.

The Homepage establishes this test harness before the remaining pages are migrated, so later routes inherit the same executable gate rather than relying on repeated manual recollection.

## Consequences

- Header and footer fixes propagate to every generated page.
- The deployed site remains lightweight and host-independent.
- Generated output is reviewable as ordinary HTML.
- Contributors must run the build after source changes and verify that generated output is current.
- The project owns a small amount of build code rather than depending on a static-site-generator abstraction.
- Browser-test tooling is a development dependency only; it does not appear in the deployed website.

## Rejected alternatives

- Hand-copying header and footer markup into each route: too likely to recreate the drift already found in the studies.
- Runtime iframe or visualization reuse: carries study scaffolding into production and weakens semantics and accessibility.
- Client-only routing: unnecessary for a small editorial site and complicates GitHub Pages behavior, direct URLs, and progressive enhancement.
