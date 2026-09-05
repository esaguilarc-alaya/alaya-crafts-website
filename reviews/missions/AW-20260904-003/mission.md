# Mission AW-20260904-003: Add the Alaya Crafts browser-tab icon

## Identity
- Actor: Implementation Actor (Claude Code)
- Mission type: implementation
- Issuer/reviewer: Codex
- Supersedes: None — new mission

## Authoritative starting state
- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `3e5a9884f59023ca33e3aa65e073388996828081`
- Main HEAD: `3e5a9884f59023ca33e3aa65e073388996828081`
- Expected working tree: clean
- Declared user-owned changes and overlap assessment: none
- Issuance reconciliation permitted: mission-control-only delta consisting solely of this immutable `mission.md`
- Runtime/deployment/base-path state: `main` is synchronized with `origin/main`; GitHub Pages serves the site from the repository base path. This mission does not authorize publication.

## Controlling decisions and invariants
- Esteban selected a super-simple favicon using the website background color and the small mountain shape from the existing Alaya Crafts header logo.
- The existing brand mark in `src/shared/layout.mjs` is the authoritative shape source: the path within the header brand SVG, not the Section 07 landscape and not a newly invented mountain.
- The site palette in `src/assets/site.css` is authoritative: warm ivory `--paper` (`#f3efe4`) for the background and restrained sage/olive linework from the existing brand treatment.
- The icon must remain clear and balanced at browser-tab size. Simplification of the existing logo path is permitted only as required for tiny-size legibility; its distinctive central mountain rhythm must remain recognizable.
- Use a repository-native SVG favicon. Do not introduce an external asset, font, package, image-generation dependency, CDN, base64 payload, or unrelated branding system.
- All generated routes must receive the same favicon through the shared layout, with correct root and `/alaya-crafts-website` base-path resolution.
- Existing visible page content, logo, navigation, route structure, Section 05, Section 07, and other page styling must remain unchanged.

## Linked QA records
- Workbook sheet/row or stable key: no pre-existing defect row; owner-requested brand-polish enhancement dated 2026-09-04
- Current status/classification: authorized small enhancement
- Candidate ID: none
- Required post-disposition update: Codex records the result in governed Session History and Review Log only after independent review

## Authorized change
**IMPLEMENTATION AUTHORIZED:** Add one small SVG favicon derived from the existing Alaya Crafts header mountain mark, reference it from the shared document head for every route in both supported base-path modes, and add narrowly scoped regression proof.

## Why this exists

The public website currently has no intentional browser-tab icon. Esteban wants a quiet, brand-consistent favicon: the site's warm ivory background with the small mountain shape already used beneath the Alaya Crafts wordmark.

## Required reading
- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `src/shared/layout.mjs`
- `src/shared/routes.mjs`
- `src/assets/site.css`
- `scripts/build.mjs`
- `tests/homepage.spec.mjs`
- `tests/cie-professional.spec.mjs`
- `tests/organizations.spec.mjs`
- `tests/ideas.spec.mjs`
- `tests/contact.spec.mjs`

## Known evidence and limits
- `src/shared/layout.mjs` contains the existing brand SVG path: `M3 18 C55 18 93 19 123 17 L139 7 L149 14 L158 12 L173 19 L187 16 L205 20 C232 22 260 22 297 22`.
- `src/assets/site.css` defines the chosen background as `#f3efe4` and the header mark stroke as the sage palette token.
- `scripts/build.mjs` already copies all of `src/assets` into `dist/assets`, so a favicon placed there needs no new build mechanism.
- `renderLayout` is the single shared head generator for all six approved routes and already resolves assets with `hrefFor`.
- SVG favicons cover the requested browser-tab use case in current browsers. PNG touch icons, ICO compatibility files, web manifests, pinned-tab variants, and social-preview media are outside this mission.

## Required work
1. Confirm the exact issuance path and commit dispatched by Codex before starting. Treat this `mission.md` as immutable.
2. Create `src/assets/favicon.svg` as a compact square icon with a solid `#f3efe4` background and a centered, restrained mountain/ground line derived directly from the existing header brand SVG path.
3. Use a square `viewBox` and sufficient internal padding. Tune stroke weight and path simplification only enough for the mark to remain distinct at 16×16 and 32×32 CSS-pixel presentation. Avoid text, initials, gradients, shadows, borders, animation, and extra decoration.
4. Add one shared `<link rel="icon" href="…" type="image/svg+xml">` in `renderLayout`, using `hrefFor("/assets/favicon.svg", basePath)` so every route emits the correct URL in root and repository base-path builds.
5. Add failure-sensitive regression coverage proving that every generated route has exactly one SVG favicon link, every link resolves to the generated asset in both supported base-path modes, the asset has a square viewBox and the approved paper background, and its visible mark is derived from the header mountain rather than Section 07 artwork or text.
6. Run `npm test` and `BASE_PATH=/alaya-crafts-website npm test`.
7. Build both modes and inspect the generated head and favicon file. Use a browser or SVG raster preview to inspect the icon at 16×16, 32×32, and a larger diagnostic size; verify it is centered, unclipped, and still reads as the small Alaya mountain mark.
8. Write `reviews/missions/AW-20260904-003/claude-return.md`, commit the authorized implementation and return together as one actor commit whose sole parent is this issuance commit, then stop.

## Required proof
- Exact actor commit and sole-parent ancestry to the issuance commit.
- SHA-256 of this unchanged `mission.md` and of `claude-return.md`.
- Complete changed-path list proving allowed-path compliance.
- Source and generated-artifact evidence for exactly one shared SVG favicon reference on every approved route in both base-path modes.
- Evidence that the favicon asset exists at the referenced generated path and contains a square viewBox, `#f3efe4` background, and a mountain line derived from the existing header brand mark.
- Visual inspection evidence at 16×16, 32×32, and larger diagnostic size, including legibility, centering, clipping, and contrast.
- Exact results from both complete test commands.
- Confirmation that visible page content and the header brand SVG remain unchanged.
- Confirmation that no push, merge, deployment, or external asset operation occurred.

## Allowed changes and return artifact
- Allowed paths:
  - `src/assets/favicon.svg`
  - `src/shared/layout.mjs`
  - `tests/homepage.spec.mjs`
  - `reviews/missions/AW-20260904-003/claude-return.md`
- Required return: `reviews/missions/AW-20260904-003/claude-return.md`
- Commit boundary: exactly one actor implementation commit, containing only the allowed paths, with the issuance commit as its sole parent
- Push/merge/deploy boundary: prohibited

## Prohibited work
- No change outside the allowed paths.
- No edit to the existing header brand path or visible wordmark.
- No Homepage Section 05 or Section 07 visual change.
- No PNG, ICO, Apple touch icon, web manifest, pinned-tab icon, social-preview asset, or alternate logo.
- No external, stock, generated, or downloaded image; no font, icon library, CDN, base64 payload, package, build dependency, or runtime dependency.
- No text or initials inside the favicon.
- No visible page-copy, layout, navigation, route, footer, typography, palette, or behavior change.
- No unrelated cleanup, adjacent QA remediation, requirement invention, or `mission.md` edit.
- No QA status/disposition edit by the implementation actor.
- No push, merge, deployment, Pages setting, DNS change, or remote mutation.

## Stop conditions
- Stop if the dispatched mission path or issuance commit does not match repository state.
- Stop if the working tree is not clean or authoritative `main` no longer matches the issued state, unless Codex supplies a new disposition.
- Stop if the favicon cannot be derived from the existing header mountain without changing that authoritative brand mark.
- Stop if correct root and repository-base-path references require a change outside the allowed paths.
- Stop if meaningful browser-tab support requires additional file formats or metadata outside this mission; report the evidence instead of expanding scope.
- Stop on any other mission-protocol state, authority, overlap, scope, or proof mismatch.
- Stop after writing the complete return and authorized commit.
