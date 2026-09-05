# Mission AW-20260904-002: Give two Homepage visuals explicit meaning

## Identity

- Actor: Implementation Actor (Claude Code)
- Mission type: bounded visual implementation and proof
- Issuer/reviewer: Codex
- Supersedes: `AW-20260904-001` — Esteban clarified the required art direction after issuance and before execution

## Authoritative starting state

- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `e15c5003e62c2f53cf15ae10648a53452288f1e9`
- Main HEAD: `e15c5003e62c2f53cf15ae10648a53452288f1e9`
- Expected working tree: clean
- Declared user-owned changes and overlap assessment: none
- Issuance reconciliation permitted: after issuance, the committed delta from baseline may contain only this `mission.md` and the `AW-20260904-001` supersession disposition committed in the same replacement boundary
- Runtime/deployment/base-path state: the accepted V1 site is live through GitHub Actions at the GitHub Pages project-site base path; this mission does not authorize push, workflow dispatch, deployment, Pages configuration, DNS, or domain changes

## Controlling decisions and invariants

- Mission Control v1 governs execution and return.
- `AW-20260904-001` is superseded and must not be executed.
- Esteban authorized refinement of exactly two Homepage visuals:
  1. Section 05, `The Living Field`: the current arcs do not communicate enough meaning and must be replaced or substantially recomposed into a legible conceptual visual.
  2. Section 07, `CIE Professional`: the `Your understanding` visual must look like a real mountain landscape rather than a generic gradient card.
- This is a visual-quality and conceptual-clarity refinement, not a Homepage redesign, copy rewrite, product-interface specification, or change to the Alaya/CIE model.
- Preserve every visitor-facing word, section number, section order, link destination, global shell behavior, route, and metadata value. Do not add visible explanatory copy unless the actor stops and requests a specific content decision.
- Section 05 must make the existing relationship understandable through composition:
  - Capability is the terrain/base.
  - Knowledge gives definition and memory.
  - Technology connects and enables use.
  - Intelligence makes relationships and patterns visible.
  - Practice cultivates the field, as already stated by the section lede and preceding section; it need not become a new visible label.
- Section 05 must not become four floating labels on arbitrary curves, a generic node graph, dashboard, capability score, maturity model, concentric hierarchy, process funnel, or decorative illustration detached from the concepts.
- Section 07 must present a recognizable, natural mountain landscape with credible ridge, slope, depth, and terrain relationships. It may remain stylized within the Alaya visual system, but it must clearly read as landscape rather than an abstract semicircle.
- The Section 07 landscape must still suggest evidence-grounded understanding emerging from work. It must not become a fabricated application screenshot, tourism image, stock-photo imitation, literal personal profile, invented product feature, fake metric, score, progress chart, AI claim, or promise about unavailable functionality.
- Use repository-native HTML/CSS and lightweight inline SVG where useful. No raster image generation, external image, icon library, charting library, CDN, runtime dependency, canvas, WebGL, animation framework, or embedded base64 asset is authorized.

## Linked QA records

- Source record: Esteban's 2026-09-04 post-launch visual review of the live Homepage
- Classification: bounded visual and conceptual refinement; no functional defect asserted
- Existing candidates: `QA-CAND-001` remains unrelated and non-blocking
- Required post-disposition update: Codex will update QA only after independent review; the actor must not change QA

## Authorized change

**IMPLEMENTATION AUTHORIZED:** Replace or substantially refine only the Section 05 Living Field graphic and the Section 07 `Your understanding` graphic so Section 05 communicates its stated conceptual relationships and Section 07 reads as a real mountain landscape, with directly required regression coverage and visual proof.

## Why this exists

The live Homepage's two conceptual graphics do not yet carry the meaning and
craft of the surrounding editorial design. Section 05 currently reads as broad
decorative arcs without a clear relationship between its named concepts.
Section 07 reads as an abstract placeholder rather than the landscape metaphor
central to CIE. Both need a resolved, restrained visual language before the
custom-domain launch.

## Required reading

- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/missions/AW-20260904-001/mission.md`
- `reviews/missions/AW-20260904-001/codex-disposition.md`
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

- Section 05 currently uses three broad CSS arc layers with four positioned labels. The wording is settled, but Esteban found that the graphic itself lacks meaning.
- Section 07 currently uses a quiet card with a simple gradient semicircle beneath `Your understanding`. Esteban requires a recognizable mountain landscape.
- No separate approved replacement artwork exists. The actor has bounded compositional judgment within the explicit conceptual mapping and prohibitions above.
- The Homepage and complete V1 route set are already accepted, tested, pushed, and live. No implementation from this mission may be pushed or deployed before a separate Codex disposition and owner authorization.

## Required work

1. Perform the absolute-repository preflight. Verify repository identity, branch, baseline, clean tree, exact replacement issuance delta, current upstream relationship, old-mission supersession, and immutable mission packet before editing.
2. Capture and inspect the current served Homepage at 1440px and 390px as the before-state, focusing only on Sections 05 and 07.
3. Redesign Section 05 as one coherent living field whose visual grammar makes the existing mapping legible: terrain/base for Capability, definition or memory traces for Knowledge, connective/use paths for Technology, and revealed relationships/patterns for Intelligence. Practice may be suggested through cultivation or repeated traces but must not require new copy.
4. Ensure Section 05's labels belong to the structures they describe through proximity, anchoring, line hierarchy, layering, or restrained annotation. A visitor should be able to infer why each concept occupies its place rather than seeing four captions placed over decoration.
5. Replace the Section 07 placeholder arc with a recognizable mountain landscape. Use credible ridge contours, foreground/background depth, slopes, and restrained terrain detail. Integrate the existing `Your understanding` label and recurring-theme statement without turning the landscape into an application dashboard or obscuring the text.
6. Keep both visuals still, lightweight, and understandable without interaction. Any nonessential CSS motion must be omitted unless separately authorized.
7. Use appropriate accessibility semantics. Decorative terrain marks must be hidden from assistive technology; a meaningful graphic must have a concise accessible name without duplicating the complete surrounding prose. Do not create keyboard focus targets because no interaction is authorized.
8. Extend `tests/homepage.spec.mjs` with failure-sensitive assertions limited to the two refined visuals: presence and accessible/decorative semantics; retained exact visible copy; meaningful structural hooks for terrain/definition/connection/revealed-pattern layers in Section 05; recognizable mountain-structure hooks in Section 07; absence of controls, fake data, metrics, scores, and product claims; and no horizontal overflow at 1440px or 390px. Preserve all existing tests.
9. Run the complete checked-in suite in root mode and with `BASE_PATH=/alaya-crafts-website`. Serve the generated page at its real paths, never `file://`.
10. Capture and inspect after-state screenshots at 1440px and 390px. Compare before/after for Section 05 conceptual legibility and label anchoring; Section 07 mountain recognizability, terrain depth, and integration with text; plus craft, restraint, balance, mobile recomposition, and Alaya family resemblance.
11. Verify that no other Homepage section, shared shell, route, page, visible copy, or deployment file changed. Commit exactly the allowed implementation paths plus `claude-return.md`, then stop.

## Required proof

- Exact baseline, issuance commit, start/end state, packet hash, upstream relationship, supersession check, commit, and changed-file list.
- Before/after evidence at 1440px and 390px for both authorized visual regions, with temporary paths precisely identified.
- Section 05 markup/CSS trace mapping each visual structure to Capability, Knowledge, Technology, Intelligence, and the already-stated role of practice.
- Section 07 markup/CSS trace proving a recognizable landscape grammar—ridge, depth, slopes, and terrain detail—without fabricated product UI or data.
- Accessibility evidence distinguishing meaningful containers and decorative constituent marks.
- Exact-copy comparison proving all visible Section 05 and Section 07 text remains unchanged.
- Complete test commands and pass/fail counts in both base-path modes.
- Runtime evidence for no overflow, label legibility, mountain/text separation, correct assets/routes, absence of controls and unauthorized claims, and preserved shared shell.
- Repository-wide scope check, deviations, unproved items, reading expansion, and out-of-scope findings, or explicit `None`.

## Allowed changes and return artifact

- Allowed implementation paths:
  - `src/pages/home.mjs`
  - `src/assets/home.css`
  - `tests/homepage.spec.mjs`
- Required return: `reviews/missions/AW-20260904-002/claude-return.md`
- Commit boundary: one commit containing only the three allowed implementation paths that actually require changes plus the return artifact
- Evidence artifacts: before/after screenshots and logs remain temporary and outside the repository unless the actor stops and requests explicit durable-evidence authorization
- Push/merge/deploy boundary: prohibited

## Prohibited work

- No edit to visible copy, section order/numbering, metadata, routes, links, shared shell, other Homepage sections, other pages/tests, build/serve scripts, dependencies, lockfile, workflow, architecture, design studies, control documents, QA records, prior mission packets/returns, Pages settings, domain, or DNS.
- No third graphic refinement. Hero trace, Practice sequence, thesis treatment, maturity composition, Organizations content, epilogue, and open paths are explicitly outside scope.
- No photograph, photorealistic raster, stock art, generated raster, external SVG/image, icon set, CDN, charting library, canvas, WebGL, new package, or base64 asset.
- No fabricated product screenshot, dashboard, card grid, metric, score, progress bar, timeline, capability profile, AI output, user identity, interaction, tooltip, modal, carousel, autoplay, or hidden explanatory state.
- No preview/inspector scaffolding, study controls, embedded study script, analytics, tracking, or unrelated cleanup.
- No edit to either issued `mission.md`, no QA status change, no push, merge, workflow dispatch, deployment, Pages setting change, or domain action.

## Stop conditions

- Stop on repository, packet, issuance, ancestry, working-tree, upstream, supersession, scope, or actor-overlap mismatch.
- Stop if the baseline-to-issuance delta contains anything except this replacement mission and the old mission's supersession disposition.
- Stop if meaningful improvement requires changing approved copy, adding product meaning/data/functionality, redesigning another section, changing the shared shell, adding a dependency, or using an external/raster asset.
- Stop if Section 05's conceptual mapping cannot be made legible without new content, or Section 07 cannot read as a mountain landscape without implying invented CIE data or interface behavior.
- Stop if either visual cannot remain legible and non-overflowing at 390px.
- Stop if decisive before/after proof cannot be produced locally.
- Otherwise stop after committing exactly the authorized implementation and return paths and report the commit to Codex.
