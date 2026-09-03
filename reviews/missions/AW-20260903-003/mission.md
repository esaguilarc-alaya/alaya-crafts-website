# Mission AW-20260903-003: Complete the For Organizations production migration

## Identity

- Actor: Implementation Actor (Claude Code)
- Mission type: bounded implementation and proof
- Issuer/reviewer: Codex
- Supersedes: None — first governed mission for the pre-existing Organizations draft

## Authoritative starting state

- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `97207e958164aa66b01e11fd6f9c76cc193279e0`
- Main HEAD: `97207e958164aa66b01e11fd6f9c76cc193279e0`
- Expected working tree: the four declared pre-existing Organizations draft changes below, and no others
- Declared pre-existing draft changes:
  - modified `scripts/build.mjs`; binary-diff SHA-256 `5178ec2fc61b108b5396f0eb089128a5f93c9cc8e735f83e9a484bbf0cb0d5d8`
  - untracked `src/assets/organizations.css`; SHA-256 `facd29e4e80d1d2faef23fccc6d9a83dfdde9cc0ca80c8913ff5689b9b1e48e2`
  - untracked `src/pages/organizations.mjs`; SHA-256 `8ae9dd1050fa887dc2c6f2ffefd3af979fdd2614dd070facc5fd9e102bd74cb5`
  - untracked `tests/organizations.spec.mjs`; SHA-256 `1fdbbd9f288867215a6e247551bf31f68dd45175a4ce85a2fbf159e09e1bcc39`
- Draft provenance/authority: these files predate this mission and are supplied implementation input, not retrospectively mission-authorized work or accepted evidence. This mission authorizes bounded reconciliation and completion from their exact recorded state.
- Issuance reconciliation permitted: after issuance, the committed delta from baseline may contain only this `mission.md`; the four declared working-tree changes must match the hashes above before substantive work
- Runtime/deployment/base-path state: local verification only; no deployment

## Controlling decisions and invariants

- Mission Control v1 governs execution and return.
- The Homepage Production Reference Gate applies to every migrated page.
- The resolved For Organizations decisions and approved studies control page-specific content and composition.
- The page must consume the existing shared shell; it must not reproduce header, footer, brand, route, or mobile-menu implementation.
- CIE Organization remains a direction under development, not a launched product or present service offering.
- Preserve the approved CDN/network-operations example, both-directions capability miscalibration, questions-not-services framing, technology as support, human provenance, four-ring landscape, and two distinct human contact mechanisms.
- The pre-existing draft may be changed only where required to satisfy these controls and proof. Existing draft presence is not proof of correctness.
- No other page migration, shared-shell redesign, architecture change, QA disposition, merge, push, or deployment is authorized.

## Linked QA records

- Candidate IDs: `QA-CAND-004` and `QA-CAND-005`, limited to the For Organizations production checkpoint
- Current status/classification: implementation draft present; no workbook-recorded production approval
- Required post-disposition update: Codex will update QA only after independent review; the actor must not change QA

## Authorized change

**IMPLEMENTATION AUTHORIZED:** Reconcile and complete the supplied For Organizations production migration using only the four declared implementation paths, add directly required assertions within the existing Organizations test file, produce reproducible proof in both supported base-path modes, and return the exact result for independent Codex review.

## Why this exists

For Organizations is the next approved design page awaiting production migration.
A draft already exists in the working tree outside Mission Control. This packet
establishes its exact starting state, bounds any remaining implementation, and
requires evidence before Codex can accept it or update QA.

## Required reading

- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/qa/mission-candidates.md` — `QA-CAND-004` and `QA-CAND-005` only
- `architecture/decisions/001-static-build-and-github-pages-routing.md`
- `docs/project-briefs/homepage-production-reference-gate.md`
- `design/slices/02-for-organizations.md`
- `design/slices/02-for-organizations-resolved-decisions.md`
- `design/direction/for-organizations-design-thinking-v1.md`
- `design/direction/public-site-route-contract-v1.md`
- `design/cross-page-coherence-review.md` — Organizations and shared production checkpoints only
- `design/studies/for-organizations-polished-source.html` — editable visual/content reference
- `src/shared/layout.mjs`
- `src/shared/routes.mjs`
- `src/assets/site.css`
- `src/assets/site.js`
- `src/pages/home.mjs` and `src/pages/cie.mjs` — composition seam/reference only
- `tests/homepage.spec.mjs` and `tests/cie-professional.spec.mjs` — established proof patterns only
- the four declared draft paths

## Known evidence and limits

- The draft registers `/for-organizations/` in the builder, uses `renderLayout`, names `activeRoute: "organizations"`, supplies page-specific CSS, and includes three Playwright tests.
- Static inspection suggests the approved nine-section narrative and four-ring diagram are present.
- No draft claim is accepted until the actor verifies it against controlling sources and generated behavior.
- Existing Homepage/CIE approvals prove the shared pattern, not this page's fidelity or runtime behavior.

## Required work

1. Perform the absolute-repository preflight; verify baseline, issuance delta, and every declared draft hash before editing.
2. Compare the draft section-by-section with the resolved decisions, design direction, polished editable source, route contract, coherence review, and production gate. Preserve settled copy and visual intent unless a production-boundary adaptation is required and explicitly reported.
3. Confirm the page uses the shared layout/routes/menu/footer/brand sources without duplication.
4. Correct only defects necessary for the authorized page to satisfy the governing sources and acceptance proof.
5. Ensure tests are failure-sensitive for: real route generation; canonical header/footer order; exactly one header `aria-current="page"`; responsive menu behavior at 390px including Enter, Escape, focus return, nav-item close, and desktop-resize cleanup; zero horizontal overflow at 390px and 1440px; both distinct contact links; four-ring order/labels and label paint order; correct single dark thesis surface; honest not-yet-launched language; and forbidden preview/export scaffolding.
6. Run the full checked-in suite in root mode and with `BASE_PATH=/alaya-crafts-website`. Serve and verify the generated page from the real corresponding path, never `file://`.
7. Perform a bounded visual comparison at 1440px and 390px covering hierarchy, typography, spacing, diagram integrity, contact distinction, and family resemblance. Record exact limitations; do not claim visual approval from tests alone.
8. Commit exactly the four allowed implementation paths plus `reviews/missions/AW-20260903-003/claude-return.md` in one mission commit, then stop.

## Required proof

- Exact baseline, issuance, start/end state, draft-hash reconciliation, commit, and changed-file list.
- Test commands and complete pass/fail counts for both base-path modes.
- Generated route/asset resolution evidence for `/for-organizations/` and `/alaya-crafts-website/for-organizations/`.
- DOM/runtime evidence for every interaction, accessibility, overflow, shared-shell, contact, diagram, maturity-language, dark-surface, and scaffolding claim above.
- Desktop/mobile screenshots or precisely identified visual evidence paths, with claims limited to what they show.
- Section-by-section trace to the resolved decisions and disclosure of any production adaptation from the approved study.
- Reading expansion, deviations, unproved items, and out-of-scope findings, or explicit `None`.

## Allowed changes and return artifact

- Allowed implementation paths:
  - `scripts/build.mjs`
  - `src/assets/organizations.css`
  - `src/pages/organizations.mjs`
  - `tests/organizations.spec.mjs`
- Required return: `reviews/missions/AW-20260903-003/claude-return.md`
- Commit boundary: one commit containing only the four allowed implementation paths and the return artifact
- Evidence artifacts: temporary screenshots/logs remain outside the repository unless the actor stops and requests explicit durable-evidence authorization
- Push/merge/deploy boundary: prohibited

## Prohibited work

- No edit to shared layout, routes, site CSS/JS, other pages/tests, design/architecture/control artifacts, QA workbook/candidates, prior missions, dependencies, workflow, or configuration.
- No new page, route, content claim, service, product-maturity claim, contact mechanism, framework, component abstraction, or generalized refactor.
- No silent rewrite of settled copy/design to suit implementation convenience.
- No unrelated cleanup or adjacent QA remediation.
- No push, merge, deployment, QA status change, or next mission.

## Stop conditions

- Stop on repository/packet/issuance mismatch, changed draft hash, undeclared working-tree change, controlling-source conflict, or overlap with another actor.
- Stop if compliance requires a shared-shell, route, architecture, dependency, workflow, or non-allowed-path change.
- Stop if a product/content/design choice is not resolved by controlling sources, if exact study fidelity would violate the production gate, or if decisive proof cannot be produced locally.
- Otherwise stop after committing exactly the allowed implementation and return paths and report the commit to Codex.
