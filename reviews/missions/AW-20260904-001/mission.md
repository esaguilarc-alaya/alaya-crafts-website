# Mission AW-20260904-001: Refine two Homepage conceptual visuals

## Identity

- Actor: Implementation Actor (Claude Code)
- Mission type: bounded visual implementation and proof
- Issuer/reviewer: Codex
- Supersedes: None

## Authoritative starting state

- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `0a701da92af175b9cfe0779981eee607b7a87234`
- Main HEAD: `0a701da92af175b9cfe0779981eee607b7a87234`
- Expected working tree: clean
- Declared user-owned changes and overlap assessment: none
- Issuance reconciliation permitted: after issuance, the committed delta from baseline may contain only this `mission.md`
- Runtime/deployment/base-path state: the accepted V1 site is live through GitHub Actions at the GitHub Pages project-site base path; this mission does not authorize push, workflow dispatch, deployment, Pages configuration, DNS, or domain changes

## Controlling decisions and invariants

- Mission Control v1 governs execution and return.
- Esteban authorized refinement of exactly two Homepage visuals:
  1. Section 05, `The Living Field`, currently represented by the `.landscape` composition.
  2. Section 07, `CIE Professional`, specifically the small `Your understanding` visual currently represented by `.product-glimpse`.
- This is a visual-quality refinement, not a redesign of the Homepage, a product-interface specification, or a change to the Alaya/CIE conceptual model.
- Preserve every visitor-facing word, section number, section order, link destination, global shell behavior, route, metadata value, and approved page boundary unless a purely assistive label must be clarified without changing visible copy.
- The Living Field must continue to communicate one capability terrain with knowledge, technology, intelligence, and practice as relational layers. It must not become a dashboard, network chart, capability score, maturity model, concentric hierarchy, generic node graph, or decorative illustration with no legible conceptual relationship.
- The `Your understanding` glimpse must suggest evidence-grounded understanding emerging from work. It must remain an abstract, honest glimpse—not a fabricated CIE screenshot, invented product feature, fake metric, profile score, progress chart, AI claim, or promise about unavailable functionality.
- Both visuals must feel native to the approved ivory/olive/sage/amber editorial system, improve depth and legibility, remain restrained, and preserve the Homepage's quiet pacing.
- Use repository-native HTML/CSS and, if justified, lightweight inline semantic or decorative SVG. No raster image generation, external image, icon library, charting library, CDN, runtime dependency, canvas, animation framework, or embedded base64 asset is authorized.

## Linked QA records

- Source record: Esteban's 2026-09-04 post-launch visual review of the live Homepage
- Classification: bounded visual refinement; no current functional defect asserted
- Existing candidates: `QA-CAND-001` remains unrelated and non-blocking
- Required post-disposition update: Codex will update QA only after independent review; the actor must not change QA

## Authorized change

**IMPLEMENTATION AUTHORIZED:** Improve only the Section 05 Living Field visual and the Section 07 `Your understanding` glimpse within the existing Homepage composition, with directly required regression coverage and visual proof.

## Why this exists

The live Homepage's two conceptual graphics remain materially flatter and less
resolved than the surrounding typography and editorial composition. They should
carry the same precision and restraint as the rest of the accepted site before
the domain launch, without expanding the product story or revisiting settled
content and architecture.

## Required reading

- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/missions/AW-20260903-006/codex-disposition.md`
- `docs/project-briefs/homepage-production-reference-gate.md`
- `architecture/decisions/001-static-build-and-github-pages-routing.md`
- `design/direction/public-website-design-thinking-v1.md` — Homepage, capability-landscape, and product-expression guidance only
- `design/cross-page-coherence-review.md` — Homepage and CIE family-resemblance guidance only
- `design/studies/homepage-polished.html` — visual comparison only; do not copy export/preview scaffolding
- `src/pages/home.mjs`
- `src/assets/home.css`
- `src/shared/layout.mjs` and `src/shared/routes.mjs` — read-only shared-shell boundary
- `tests/homepage.spec.mjs`
- all other checked-in tests — regression expectations only

## Known evidence and limits

- The current Living Field uses three broad CSS arc layers with four positioned labels. Its semantics and wording are settled; its visual articulation is the refinement target.
- The current Section 07 glimpse is a quiet card with a simple gradient arc and the settled `Your understanding` and recurring-theme copy. It must become more intentional without pretending to show a finished application.
- The Homepage and complete V1 route set are already accepted, tested, and live. Changes here must not disturb any other section or route.
- No separate approved replacement artwork exists. The actor has bounded compositional judgment within the controlling concepts and prohibitions above; if a stronger result requires new meaning, copy, data, product behavior, or broader art direction, stop and report the decision needed.

## Required work

1. Perform the absolute-repository preflight. Verify repository identity, branch, baseline, clean tree, issuance-only delta, current upstream relationship, and immutable mission packet before editing.
2. Capture and inspect the current served Homepage at 1440px and 390px as the before-state, focusing only on Sections 05 and 07.
3. Refine the Living Field so it reads as one connected, layered terrain rather than three generic nested arcs. Preserve all four current concepts and descriptions. Improve spatial relationship, hierarchy, label legibility, line/field depth, and mobile recomposition without adding explanatory copy or interaction.
4. Refine the Section 07 `Your understanding` glimpse so it visually suggests evidence accumulating into an emerging pattern. Preserve its exact visible copy. Keep it abstract and credible; do not imitate a finished dashboard or invent interface controls, metrics, capability names, user data, status, or functionality.
5. Keep both visuals understandable without motion. If any motion is proposed, it must be nonessential, extremely restrained, CSS-only, disabled by `prefers-reduced-motion`, and justified in the return; no motion is required or preferred by default.
6. Use appropriate accessibility semantics. Decorative marks must be hidden from assistive technology; any meaningful graphic must have a concise accessible name without duplicating surrounding prose. Do not create keyboard focus targets unless there is genuine authorized interaction—none is currently expected.
7. Extend `tests/homepage.spec.mjs` with failure-sensitive assertions limited to the two refined visuals: presence and accessible/decorative semantics; retained exact visible copy; absence of unauthorized controls/data/claims; no horizontal overflow; and stable composition at 1440px and 390px. Preserve all existing tests.
8. Run the complete checked-in suite in root mode and with `BASE_PATH=/alaya-crafts-website`. Serve the generated page at its real paths, never `file://`.
9. Capture and inspect after-state screenshots at 1440px and 390px. Compare before/after for conceptual clarity, craft, hierarchy, label legibility, restraint, visual balance, mobile recomposition, and family resemblance. Report specific observable improvements, not subjective praise alone.
10. Verify that no other Homepage section, shared shell, route, page, copy, or deployment file changed. Commit exactly the allowed implementation paths plus `claude-return.md`, then stop.

## Required proof

- Exact baseline, issuance commit, start/end state, packet hash, upstream relationship, commit, and changed-file list.
- Before/after evidence at 1440px and 390px for both authorized visual regions, with temporary paths precisely identified.
- Markup/CSS trace showing how each visual expresses its already-approved concept without new product claims.
- Accessibility evidence distinguishing meaningful and decorative graphic elements.
- Exact-copy comparison proving all visible Section 05 and Section 07 text remains unchanged.
- Complete test commands and pass/fail counts in both base-path modes.
- Runtime evidence for no overflow, label legibility, correct assets/routes, absence of controls and unauthorized data/claims, and preserved shared shell.
- Repository-wide scope check, deviations, unproved items, reading expansion, and out-of-scope findings, or explicit `None`.

## Allowed changes and return artifact

- Allowed implementation paths:
  - `src/pages/home.mjs`
  - `src/assets/home.css`
  - `tests/homepage.spec.mjs`
- Required return: `reviews/missions/AW-20260904-001/claude-return.md`
- Commit boundary: one commit containing only the three allowed implementation paths that actually require changes plus the return artifact
- Evidence artifacts: before/after screenshots and logs remain temporary and outside the repository unless the actor stops and requests explicit durable-evidence authorization
- Push/merge/deploy boundary: prohibited

## Prohibited work

- No edit to visible copy, section order/numbering, metadata, routes, links, shared shell, other Homepage sections, other pages/tests, build/serve scripts, dependencies, lockfile, workflow, architecture, design studies, control documents, QA records, prior missions, Pages settings, domain, or DNS.
- No third graphic refinement. Hero trace, Practice sequence, thesis treatment, maturity composition, Organizations content, epilogue, and open paths are explicitly outside scope.
- No fabricated product screenshot, dashboard, card grid, chart, metric, score, progress bar, timeline, capability profile, AI output, user identity, interaction, tooltip, modal, carousel, autoplay, or hidden explanatory state.
- No stock art, generated raster, photo, external SVG/image, icon set, CDN, charting library, canvas, WebGL, new package, or base64 asset.
- No preview/inspector scaffolding, study controls, embedded study script, analytics, tracking, or unrelated cleanup.
- No `mission.md` edit, QA status change, push, merge, workflow dispatch, deployment, Pages setting change, or domain action.

## Stop conditions

- Stop on repository, packet, issuance, ancestry, working-tree, upstream, scope, or actor-overlap mismatch.
- Stop if the baseline-to-issuance delta contains anything except this mission packet.
- Stop if meaningful improvement requires changing approved copy, adding product meaning/data/functionality, redesigning another section, changing the shared shell, adding a dependency, or making an external asset.
- Stop if either visual cannot remain legible and non-overflowing at 390px without weakening its approved conceptual relationship.
- Stop if decisive before/after proof cannot be produced locally.
- Otherwise stop after committing exactly the authorized implementation and return paths and report the commit to Codex.
