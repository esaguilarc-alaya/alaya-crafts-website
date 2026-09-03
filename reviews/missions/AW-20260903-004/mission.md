# Mission AW-20260903-004: Migrate the Ideas index and its approved launch article

## Identity

- Actor: Implementation Actor (Claude Code)
- Mission type: bounded implementation and proof
- Issuer/reviewer: Codex
- Supersedes: None

## Authoritative starting state

- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `4371999e063dbbb8217d153e2a7c3bc34fb9db92`
- Main HEAD: `4371999e063dbbb8217d153e2a7c3bc34fb9db92`
- Expected working tree: clean
- Existing Ideas production draft: none; do not infer one from the independent design studies
- Issuance reconciliation permitted: after issuance, the committed delta from baseline may contain only this `mission.md`
- Runtime/deployment/base-path state: local verification only; no deployment

## Controlling decisions and invariants

- Mission Control v1 governs execution and return.
- The Homepage Production Reference Gate applies to both routes.
- The resolved Ideas decisions, polished editable study, route contract, and approved launch article copy control the page-specific content and composition.
- This mission covers one editorial slice with two inseparable approved routes: the Ideas index and the one real launch article required to keep that index non-empty. It does not authorize additional publications.
- Both routes must consume the existing shared shell. They must not reproduce the header, footer, brand, route, or mobile-menu implementation.
- `Ideas` remains the public label. The index is a body of thought, not a marketing blog, content funnel, or empty category system.
- Preserve the three distinct concepts: format (`Essays`, `Notes`, `Field Work`), maturity (`Developed`, `Emerging`, `Exploratory`), and authorship (`Alaya Crafts` in third person for the launch piece).
- The index launches with exactly the approved Field Work piece, `The rule we had to keep re-learning while building CIE`, dated 27 August 2026 and marked Developed.
- The article copy in `design/studies/ideas-polished.html` is settled source content. Do not summarize, extend, fact-check into new claims, or silently rewrite it.
- No Contact implementation, additional page migration, shared-shell redesign, architecture change, QA disposition, push, merge, or deployment is authorized.

## Linked QA records

- Candidate ID: `QA-CAND-005`, limited to the Ideas index and approved launch article checkpoints
- Current status/classification: approved studies and route contract exist; neither route has production implementation or workbook-recorded production approval
- Required post-disposition update: Codex will update QA only after independent review; the actor must not change QA

## Authorized change

**IMPLEMENTATION AUTHORIZED:** Build the approved Ideas index and its one approved launch article as two static production routes through the current shared shell; add only the page-owned CSS, page modules, builder registration, and directly required tests; then return reproducible evidence for independent Codex review.

## Why this exists

The Ideas index is the next approved page awaiting production migration. Its
governing slice forbids launching an empty index, while the route contract and
polished study identify one real launch article. Implementing these two routes
together preserves that content boundary without inventing a corpus or widening
the mission into Contact or a publishing platform.

## Required reading

- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/qa/mission-candidates.md` — `QA-CAND-005` only
- `architecture/decisions/001-static-build-and-github-pages-routing.md`
- `docs/project-briefs/homepage-production-reference-gate.md`
- `design/slices/03-ideas.md`
- `design/slices/03-ideas-resolved-decisions.md`
- `design/direction/public-website-design-thinking-v1.md` — Ideas-related guidance only
- `design/direction/public-site-route-contract-v1.md`
- `design/cross-page-coherence-review.md` — Ideas and shared production checkpoints only
- `design/studies/ideas-polished-source.html`
- `design/studies/ideas-polished.html` — dependency-free editable study and settled index/article copy; exclude its review controls and scripts
- `src/shared/layout.mjs`
- `src/shared/routes.mjs`
- `src/assets/site.css`
- `src/assets/site.js`
- `src/pages/home.mjs`, `src/pages/cie.mjs`, and `src/pages/organizations.mjs` — production seam/reference only
- current checked-in Playwright tests — established proof patterns only

## Known evidence and limits

- `src/shared/routes.mjs` already defines `/ideas/` as the canonical Ideas route.
- ADR 001 and the route contract define `/ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/` for the launch article.
- The builder currently emits Homepage, CIE Professional, and For Organizations only.
- No Ideas production source, CSS, or test exists at issuance.
- The polished study contains both the approved index composition and complete article copy, but also contains design-review controls and scripts that are prohibited in production.
- The Contact route is approved but not yet implemented. The Ideas invitation must still point to the canonical `/contact/` destination without attempting to implement or simulate Contact here.

## Required work

1. Perform the absolute-repository preflight; verify the baseline, clean starting tree, issuance-only delta, and immutable packet before editing.
2. Implement `/ideas/` with the approved six-part index structure: restrained opening, one featured inquiry, ways of reading, chronological body-of-thought index, honest empty Other Voices invitation, and open ending.
3. Implement `/ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/` with the complete approved article title, metadata, body, heading hierarchy, block-quotation/reference support in the reading template whether or not the launch copy uses every supported element, contextual CIE connection, and return-to-Ideas path.
4. Make the featured item and chronological item real links to the launch article. Route `Share something you've written` to canonical Contact. Make `Follow the Ideas` and the article return path resolve to the Ideas index. Route the contextual article connection to CIE Professional.
5. Use the shared layout/routes/menu/footer/brand sources for both pages. Both routes must identify `Ideas` as the active global navigation item without reordering it.
6. Preserve format, maturity, date, and authorship metadata as content—not filter controls or decorative badges. Do not create empty category routes.
7. Preserve the approved long-form reading measure and page-specific visual identity without importing study controls, document toggles, inspectors, click-to-review behavior, or preview dependencies.
8. Add failure-sensitive tests for both routes: generated files; correct root and repository-base links/assets; canonical header/footer order; exactly one header `aria-current="page"` targeting Ideas on index and article; real featured/index/article navigation; Contact/CIE/return destinations; exact single launch item; maturity/format/date/author metadata; responsive menu behavior at 390px including Enter, Escape, focus return, nav-item close, and desktop-resize cleanup; zero horizontal overflow at 390px and 1440px; readable article measure; and forbidden scaffolding.
9. Run the full checked-in suite in root mode and with `BASE_PATH=/alaya-crafts-website`. Serve and verify generated pages at their real corresponding paths, never `file://`.
10. Perform bounded visual comparisons at 1440px and 390px for both index and article, covering hierarchy, typography, spacing, metadata, reading measure, link distinction, responsive reflow, and family resemblance.
11. Commit exactly the allowed implementation paths plus `reviews/missions/AW-20260903-004/claude-return.md` in one mission commit, then stop.

## Required proof

- Exact baseline, issuance, start/end state, commit, and changed-file list.
- Section-by-section index trace and article-content trace to the approved editable study, including explicit confirmation that the full settled article body is present without invented claims.
- Test commands and complete pass/fail counts for both base-path modes.
- Generated route and resolved asset/link evidence for `/ideas/`, the launch article route, and both `/alaya-crafts-website/...` equivalents.
- DOM/runtime evidence for both active-route states, shared shell, all named navigation paths, exact corpus size, metadata, interaction, accessibility, overflow, reading measure, and scaffolding claims.
- Desktop/mobile screenshots or precisely identified temporary visual evidence paths for both routes, with claims limited to what they show.
- Reading expansion, deviations, unproved items, and out-of-scope findings, or explicit `None`.

## Allowed changes and return artifact

- Allowed implementation paths:
  - `scripts/build.mjs`
  - `src/assets/ideas.css`
  - `src/pages/ideas.mjs`
  - `src/pages/idea-article.mjs`
  - `tests/ideas.spec.mjs`
- Required return: `reviews/missions/AW-20260903-004/claude-return.md`
- Commit boundary: one commit containing only the five allowed implementation paths and the return artifact
- Evidence artifacts: temporary screenshots/logs remain outside the repository unless the actor stops and requests explicit durable-evidence authorization
- Push/merge/deploy boundary: prohibited

## Prohibited work

- No edit to shared layout, routes, site CSS/JS, other pages/tests, design/architecture/control artifacts, QA workbook/candidates, prior missions, dependencies, workflow, or configuration.
- No Contact page, extra article, placeholder/Qwerty publication, empty category page, CMS, search, tags, filtering, recommendations, comments, accounts, personalization, newsletter, RSS, subscription form, publishing cadence, share controls, progress bar, read-time badge, related-content carousel, lead gate, or social proof.
- No study document toggle: index and article are separate production routes, not client-switched views.
- No first-person founder-blog rewrite, individual attribution, invented contributor, invented evidence, new product claim, or change in maturity state.
- No generic card wall, content-marketing funnel, banner CTA, organizational detour from the article, or duplicated global shell.
- No unrelated cleanup or adjacent QA remediation.
- No push, merge, deployment, QA status change, or next mission.

## Stop conditions

- Stop on repository/packet/issuance mismatch, dirty or changed starting state, undeclared working-tree change, controlling-source conflict, or overlap with another actor.
- Stop if compliance requires a shared-shell, route-table, architecture, dependency, workflow, configuration, Contact, or non-allowed-path change.
- Stop if the approved launch article is not considered authorized public content, if any article claim requires product-owner revalidation, or if another product/content/design choice is not resolved by controlling sources.
- Stop if exact study fidelity would violate the production gate or decisive proof cannot be produced locally.
- Otherwise stop after committing exactly the allowed implementation and return paths and report the commit to Codex.
