# Mission AW-20260904-004: Integrate approved Homepage artwork and favicon

## Identity
- Actor: Implementation Actor (Claude Code)
- Mission type: implementation
- Issuer/reviewer: Codex
- Supersedes: `AW-20260904-003` — do not execute the favicon-only mission

## Authoritative starting state
- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `f84b61113b2455de5e0bc325d3e5898e4fc008d3`
- Main HEAD: `f84b61113b2455de5e0bc325d3e5898e4fc008d3`
- Expected working tree: clean
- Declared user-owned changes and overlap assessment: none; the three Esteban-supplied SVGs are checked into this mission's immutable `inputs/` directory by Codex at issuance
- Issuance reconciliation permitted: mission-control-only delta containing the supersession disposition, this immutable packet, and its three immutable input assets
- Runtime/deployment/base-path state: `origin/main` is at `3e5a9884f59023ca33e3aa65e073388996828081`; the current public site is live through GitHub Pages. This mission does not authorize publication.

## Controlling decisions and invariants
- Esteban approved the supplied artwork shown in `/Users/estebanaguilar/Downloads/alaya-preview.html` and provided the three standalone SVG originals. The checked-in mission inputs—not the preview HTML and not chat history—are the authoritative implementation assets.
- Section 05 must use the supplied desktop and mobile compositions at their intended responsive widths. Do not redraw, reinterpret, merge, or replace them.
- Section 07 must use the supplied single responsive horizon composition at desktop and mobile widths. Do not redraw or reinterpret it.
- Preserve the supplied SVG files byte-for-byte when copying them to the deployable asset directory, including their content-credential metadata. Do not inline them, convert them to base64, minify them, or strip provenance.
- The external originals in Downloads remain untouched. The immutable mission copies document the source snapshot and hashes.
- Existing Section 05 visible labels and all approved visible Homepage copy remain unchanged. The supplied SVGs carry the artwork; HTML remains responsible for adjacent visible text.
- Remove the current hand-authored inline SVG implementations and their now-unused CSS only to the extent directly required by this replacement.
- The Section 05 desktop/mobile selection must avoid downloading both artwork files in ordinary responsive rendering. Use appropriate native responsive-image markup.
- The Section 07 asset uses `preserveAspectRatio="xMidYMid slice"`; preserve its intended proportional cropping rather than stretching it.
- The favicon direction remains Esteban's approved warm ivory square with the small mountain shape from the existing header brand mark. It is separate from the supplied Section 07 horizon.
- All six generated routes must receive the same favicon from the shared layout in root and `/alaya-crafts-website` base-path modes.
- No other page, visible copy, navigation, route, feature, product behavior, or deployment setting may change.

## Linked QA records
- Workbook sheet/row or stable key: Review Log row for `AW-20260904-002` plus owner-approved replacement artwork and favicon enhancement dated 2026-09-04
- Current status/classification: accepted prior visual implementation now explicitly replaced by owner-supplied approved assets; favicon is an authorized small enhancement
- Candidate ID: none
- Required post-disposition update: Codex records final artwork and favicon acceptance in governed Session History and Review Log after independent review

## Authorized change
**IMPLEMENTATION AUTHORIZED:** Copy the three immutable supplied SVG inputs byte-for-byte into deployable repository assets, replace only Homepage Sections 05 and 07 artwork with those approved assets using correct responsive behavior, add the brand-derived SVG favicon across the shared site, and extend narrowly scoped regression proof.

## Why this exists

Esteban rejected the prior Section 05 relationship triangle and the geometric
Section 07 mountains. He approved a new design package: a refined Section 05
landscape with meaningful intersection nodes and a mature, atmospheric Section
07 horizon. He also approved a small browser-tab icon using the site's paper
background and existing header mountain mark. Combining the changes avoids an
overlap between two missions in the Homepage regression file.

## Required reading
- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/missions/AW-20260904-003/codex-disposition.md`
- `reviews/missions/AW-20260904-004/inputs/README.md`
- all three files in `reviews/missions/AW-20260904-004/inputs/`
- `src/shared/layout.mjs`
- `src/shared/routes.mjs`
- `src/assets/site.css`
- `src/assets/home.css`
- `src/pages/home.mjs`
- `scripts/build.mjs`
- `tests/homepage.spec.mjs`

## Known evidence and limits
- Input `alaya-05-living-field-desktop.svg`: 1200×460, `preserveAspectRatio="none"`, SHA-256 `ce4f1be3f75de7ee012e94a2092daea7f23d282cd451e57aba4e7bf7c166f44a`.
- Input `alaya-05-living-field-mobile.svg`: 360×470, `preserveAspectRatio="none"`, SHA-256 `a4c4dd55bf79cde37f3b150fc350422dc9d4808c044d8cb9370934785f1a5498`.
- Input `alaya-07-horizon.svg`: 600×250, `preserveAspectRatio="xMidYMid slice"`, SHA-256 `396be33497eb4a9751df1ed1311be12d2d9f3ae6aaa1f380d202316ea75c0631`.
- The supplied preview uses the Section 05 breakpoint at the site's existing 820px mobile boundary and uses the same Section 07 asset in both cards.
- The SVGs use only the existing Alaya palette and internal SVG definitions; no external runtime resource is required.
- The current inline visuals were accepted under `AW-20260904-002`, but Esteban's later direct design decision supersedes their visual direction.
- `scripts/build.mjs` already copies `src/assets` into `dist/assets`; no build-system change is expected.
- The existing header brand path in `src/shared/layout.mjs` is the favicon's authoritative mark source.

## Required work
1. Verify the exact mission path and issuance commit dispatched by Codex. Confirm this mission's issuance commit is current `main`, the worktree is clean, and all three input hashes match the values above.
2. Copy the three inputs byte-for-byte into `src/assets/` with clear stable filenames. Prove the deployed copies retain the exact input hashes.
3. Replace Section 05's inline SVG with native responsive-image markup selecting the supplied mobile SVG at the existing mobile breakpoint and the desktop SVG otherwise. Keep the four existing HTML labels and exact label copy. Ensure ordinary responsive loading does not fetch both assets.
4. Replace Section 07's inline SVG with the supplied horizon asset. Preserve its proportional crop behavior and the existing `Your understanding` and blockquote copy.
5. Remove only CSS selectors made obsolete by removal of the two inline SVGs. Add only the minimal image sizing/display rules needed to reproduce the approved preview within the existing containers.
6. Create `src/assets/favicon.svg` as a small square with `#f3efe4` background and a centered restrained mountain/ground line derived from the existing header brand path. No text, gradients, shadow, border, animation, or extra motif.
7. Add exactly one shared SVG favicon link in `renderLayout` using `hrefFor("/assets/favicon.svg", basePath)`.
8. Update `tests/homepage.spec.mjs` with failure-sensitive assertions for: exact asset selection at desktop and 390px; source hashes or byte equality; no legacy inline visual hooks; retained exact visible copy; Section 05 label legibility and bounds; Section 07 proportional, unclipped rendering; no horizontal overflow; exactly one favicon link on every generated route; correct root/base-path favicon resolution; and generated asset existence.
9. Preserve all existing tests that remain truthful. Revise only assertions that explicitly target the replaced inline structures.
10. Run `npm test` and `BASE_PATH=/alaya-crafts-website npm test`.
11. Capture and inspect after-state rendering at 1440px and 390px. Compare Section 05 and Section 07 against the approved input/preview intent, checking responsive asset choice, label anchoring, proportional horizon crop, text separation, balance, and Alaya family resemblance. Inspect the favicon at 16×16, 32×32, and a larger diagnostic size.
12. Write `reviews/missions/AW-20260904-004/claude-return.md`, commit the implementation and return together as one actor commit whose sole parent is the issuance commit, then stop.

## Required proof
- Exact actor commit and sole-parent ancestry to the issuance commit.
- SHA-256 of unchanged `mission.md`, each immutable input, each corresponding deployed copy, the favicon, and `claude-return.md`.
- Complete changed-path list proving allowed-path compliance.
- Byte-equality proof between each immutable input and its deployable copy.
- Runtime evidence that Section 05 selects desktop artwork at 1440px and mobile artwork at 390px without fetching both under ordinary responsive loading.
- Runtime evidence that Section 07 uses the approved horizon asset proportionally at both widths.
- Desktop/mobile screenshots and comparison notes for both sections.
- Evidence that all existing visible copy, HTML labels, shared shell, routes, and header brand mark remain unchanged.
- Root and repository-base-path proof that all six routes emit exactly one correct favicon link and the generated favicon resolves.
- Favicon inspection evidence at 16×16, 32×32, and diagnostic size.
- Exact results from both complete test commands.
- Confirmation that no push, merge, deployment, external-file overwrite, or external asset operation occurred.

## Allowed changes and return artifact
- Allowed paths:
  - `src/assets/alaya-05-living-field-desktop.svg`
  - `src/assets/alaya-05-living-field-mobile.svg`
  - `src/assets/alaya-07-horizon.svg`
  - `src/assets/favicon.svg`
  - `src/assets/home.css`
  - `src/pages/home.mjs`
  - `src/shared/layout.mjs`
  - `tests/homepage.spec.mjs`
  - `reviews/missions/AW-20260904-004/claude-return.md`
- Required return: `reviews/missions/AW-20260904-004/claude-return.md`
- Commit boundary: exactly one actor implementation commit, containing only allowed paths, with the issuance commit as its sole parent
- Push/merge/deploy boundary: prohibited

## Prohibited work
- No change outside allowed paths.
- No edit to this `mission.md`, its `inputs/README.md`, or the three immutable files under `inputs/`.
- No redraw, reinterpretation, optimization, minification, metadata removal, conversion, or base64 embedding of the supplied artwork.
- No use of the current Section 07 inline mountain as the favicon.
- No edit to the existing header brand path or wordmark.
- No PNG, ICO, Apple touch icon, web manifest, pinned-tab icon, social-preview asset, external image, stock asset, icon library, CDN, font, package, build dependency, or runtime dependency.
- No visible copy, label text, layout, navigation, route, footer, typography, palette, or product behavior change beyond direct image fitting within the existing containers.
- No work on pages other than the Homepage artwork and shared-head favicon link.
- No unrelated cleanup, adjacent QA remediation, requirement invention, or QA status edit.
- No push, merge, deployment, Pages setting, DNS change, or remote mutation.

## Stop conditions
- Stop if the dispatched mission path or issuance commit does not match repository state.
- Stop if the worktree is not clean or authoritative `main` no longer matches the issued state.
- Stop if any immutable input hash differs from the recorded value.
- Stop if the approved artwork cannot be integrated byte-for-byte within the allowed paths and responsive requirements.
- Stop if correct base-path behavior or favicon support requires a change outside allowed paths.
- Stop rather than silently altering supplied artwork or expanding the product/design scope.
- Stop on any other mission-protocol state, authority, overlap, scope, or proof mismatch.
- Stop after writing the complete return and authorized actor commit.
