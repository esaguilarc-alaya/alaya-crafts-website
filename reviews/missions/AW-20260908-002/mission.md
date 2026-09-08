# Mission AW-20260908-002: Clarify the Homepage capability landscape, Capability Intelligence, and CIE

## Identity
- Actor: Implementation Actor (Claude Code)
- Mission type: implementation
- Issuer/reviewer: Codex
- Supersedes: `AW-20260908-001` — Codex dispatched a nonexistent full issuance hash; the actor correctly stopped before implementation and the original mission is dispositioned `SUPERSEDED`

## Authoritative starting state
- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `2be1983d8d9d22d20ae76cfe21616d5c920acd4b`
- Main HEAD: `2be1983d8d9d22d20ae76cfe21616d5c920acd4b`
- Expected working tree: clean
- Declared user-owned changes and overlap assessment: None; no Homepage implementation was attempted under the superseded mission and no overlapping active mission or working-tree change exists.
- Issuance reconciliation permitted: after issuance, the committed delta from the baseline may contain only `reviews/missions/AW-20260908-001/codex-disposition.md` and this `reviews/missions/AW-20260908-002/mission.md`, committed together as the replacement boundary.
- Runtime/deployment/base-path state: `origin/main` remains `23b0a24dd786703be4b708806176182288824f1b`; local `main` is ahead only by the original mission packet and its blocked actor return before this replacement boundary. The public site is live at `https://alayacrafts.com/`. Root and `/alaya-crafts-website` remain supported test modes. This mission does not authorize publication or any remote action.

## Controlling decisions and invariants
- `AW-20260908-001` is superseded and must not be resumed or executed.
- Esteban authorized this revision after reviewing the current public Homepage and explicitly approved the Section 05 and Section 06 wording recorded below.
- Capability is the living terrain. People’s experiences, repeated practice, and contributions form the capability field.
- Experience is where capability is developed and exercised. Practice is how capability is cultivated and renewed. Contribution is capability expressed through work that creates value.
- Knowledge preserves and carries forward what is learned. Curiosity keeps the field developing.
- Experiences, practices, and contributions leave evidence that can be connected and understood.
- Capability Intelligence is the holistic understanding formed across the capability landscape.
- CIE does not create capability, is not a layer of the landscape, and must not be presented as sitting above it.
- CIE works across the landscape by connecting its experiences, evidence, knowledge, contributions, objectives, and relationships.
- Section 05 must remove Technology and Intelligence as landscape labels. Its complete visible landscape set is Capability, Experience, Practice, Contribution, Knowledge, and Curiosity.
- Section 06 must explain the connecting activity before naming CIE. Its first prose paragraph must not use the name or acronym `Capability Intelligence Engine` / `CIE`; the second paragraph must introduce the proper name directly and must not first describe CIE as a generic “intelligence engine.”
- The owner-approved exact visible copy for the revised portions is fixed in **Required work**. The actor has only bounded compositional judgment for responsive label placement and restrained adaptation of the existing landscape artwork.
- Preserve the current section order and numbering, the existing Section 05/06 surrounding design language, the maturity composition below the Section 06 definition, and every Homepage section outside 05 and 06.
- The two immutable artwork inputs under `reviews/missions/AW-20260904-004/inputs/` remain untouched historical evidence. The prior byte-equality requirement between those inputs and the two deployed Section 05 assets is superseded only because this mission may adapt or replace the deployed Section 05 artwork to express the newly approved conceptual model. Do not carry forward content-credential metadata that would falsely claim an altered asset is byte-identical to or authenticated as the prior input.
- No change to Section 07 artwork, the favicon, shared shell, navigation, routes, metadata, other pages, or product behavior is authorized.

## Linked QA records
- Workbook sheet/row or stable key: `Session History` and `Review Log` — new owner-authorized Homepage conceptual revision dated 2026-09-08; historical Section 05 artwork acceptance remains valid for its former scope and is superseded only by this later product decision.
- Current status/classification: new owner-authorized content/design revision; not an existing defect and not linked to the optional route-helper improvement.
- Candidate ID: None — direct owner authorization creates the mission boundary.
- Required post-disposition update: after independent review, Codex must append a bounded Session History entry and a Review Log row recording the result, then update `reviews/qa/mission-candidates.md` only if the disposition creates a continuing candidate. The implementation actor must not edit QA records.

## Authorized change
**IMPLEMENTATION AUTHORIZED:** Revise only Homepage Sections 05 and 06 so the capability landscape contains Capability, Experience, Practice, Contribution, Knowledge, and Curiosity; remove Technology and Intelligence as landscape elements; introduce Capability Intelligence as the holistic understanding formed across the landscape; and introduce the Capability Intelligence Engine (CIE) as Alaya’s technology for making that understanding usable and able to evolve with the landscape.

## Why this exists

The current Homepage places Technology and Intelligence inside the Section 05
landscape and leads Section 06 with the CIE name. That composition obscures the
agreed relationship: people’s experience, practice, and contribution form the
living capability field; knowledge and curiosity carry and develop it;
Capability Intelligence is understanding across that field; and CIE works
across the field without creating capability or occupying a superior layer.

## Required reading
- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/missions/AW-20260908-001/mission.md`
- `reviews/missions/AW-20260908-001/claude-return.md`
- `reviews/missions/AW-20260908-001/codex-disposition.md`
- `design/direction/public-website-design-thinking-v1.md` — capability, technology-support, acronym-order, and Living Field guardrails only
- `design/cross-page-coherence-review.md` — Homepage coherence and responsive regression guardrails only
- `docs/project-briefs/homepage-production-reference-gate.md`
- `reviews/missions/AW-20260904-002/codex-disposition.md`
- `reviews/missions/AW-20260904-004/mission.md` — Section 05 responsive asset and immutable-input history only
- `reviews/missions/AW-20260904-004/codex-disposition.md`
- `reviews/qa/mission-candidates.md` — current approvals, boundaries, and recurring regression classes
- `src/pages/home.mjs`
- `src/assets/home.css`
- `src/assets/alaya-05-living-field-desktop.svg`
- `src/assets/alaya-05-living-field-mobile.svg`
- `tests/homepage.spec.mjs`
- `package.json`

## Known evidence and limits
- `AW-20260908-001` performed no implementation. Its actor return documents a correct pre-work stop caused solely by Codex dispatching a nonexistent full issuance hash; all other preflight state matched.
- At the baseline, Section 05 is headed `Capability becomes visible and actionable.` and its supporting copy names knowledge, technology, intelligence, and practice.
- At the baseline, the landscape has four HTML annotations: Capability / `The terrain.`, Knowledge / `Definition and memory.`, Technology / `Connection and use.`, and Intelligence / `Relationships becoming visible.`
- The deployed desktop and mobile SVGs also contain source-level descriptions of a technology path and visible intelligence relationships. Their visible marks are decorative because the HTML image is `alt=""` and `aria-hidden="true"`, but obsolete source semantics must not remain authoritative after the revision.
- At the baseline, Section 06 names `Capability Intelligence Engine (CIE)` in the heading before its prose explanation and uses three definition paragraphs.
- The current responsive Section 05 implementation selects distinct desktop and mobile SVGs at the established 820px breakpoint and existing tests prove that only the applicable asset is ordinarily fetched. Preserve this behavior unless an equivalent no-double-fetch native solution is demonstrably required within the same allowed paths.
- Existing Section 05 artwork and Section 07 artwork were previously accepted. This mission reopens only the conceptual/content mapping of Section 05 and the definition sequence in Section 06; Section 07 remains closed and unchanged.
- The QA ledger contains no existing candidate for this conceptual revision. The authority is Esteban’s explicit approval as durably recorded by this issued packet.

## Required work
1. Perform the absolute-repository preflight. Verify the exact repository root, branch, baseline/main/issuance relationship, clean working tree, immutable packet, upstream relationship, supersession of `AW-20260908-001`, and absence of overlapping active work before editing.
2. Capture and inspect the current served Sections 05 and 06 at 1440px and 390px as the before-state. Serve generated output through the repository’s real local route behavior, never `file://`.
3. Replace only the revised Section 05 visible copy with exactly:
   - Eyebrow: `05 — The Living Field`
   - Heading: `Capability is living terrain.`
   - Supporting text: `People’s experiences, repeated practice and contributions form a living capability field. Knowledge preserves what is learned, while curiosity keeps the field developing.`
4. Replace the Section 05 landscape annotations with exactly these six label/annotation pairs:
   - `Capability` — `The living terrain.`
   - `Experience` — `Where capability is developed and exercised.`
   - `Practice` — `How capability is cultivated and renewed.`
   - `Contribution` — `Capability expressed through work that creates value.`
   - `Knowledge` — `Preserves and carries forward what is learned.`
   - `Curiosity` — `Keeps the field developing.`
5. Remove the Technology and Intelligence annotations, classes, positioned-label rules, and any obsolete Section 05 source description that represents either as a constituent or superior layer of the landscape.
6. Adapt the two deployed Section 05 SVGs only as needed to support the approved model. The visual must remain one living terrain rather than six cards or isolated icons. Capability is the terrain; experience, repeated practice, contribution, preserved knowledge, and renewing curiosity must read as related activity within that terrain. Do not depict CIE, Capability Intelligence, Technology, or Intelligence as a peak, canopy, controlling layer, or object above it. Preserve the restrained Alaya palette, topographic character, stillness, lightweight delivery, desktop/mobile compositions, and label legibility.
7. Keep the landscape image decorative to assistive technology and give the surrounding landscape container a concise accessible name consistent with the revised concept. Do not duplicate all annotation prose in an accessible image description and do not add focusable or interactive elements.
8. Replace only the opening definition area of Section 06 with exactly:
   - Eyebrow: `06 — Where the idea is taking form`
   - Heading: `Understanding the landscape as a whole.`
   - First paragraph: `Through continual reflection across the capability landscape, experiences, evidence, knowledge, contributions, objectives and relationships are connected to form a holistic understanding of capability. Alaya calls this understanding Capability Intelligence.`
   - Second paragraph: `The Capability Intelligence Engine (CIE) is the technology Alaya is building to make that understanding usable and allow it to evolve with the landscape.`
9. Preserve the exact order above. The first paragraph must precede and explain the named engine, must not contain `Capability Intelligence Engine` or `CIE`, and may name only the resulting understanding as `Capability Intelligence`. The second paragraph must begin with the proper name `The Capability Intelligence Engine (CIE)` rather than a generic category.
10. Preserve the Section 06 scale title and all CIE Professional, Teams, Organizations, and Collective Intelligence maturity copy and composition unchanged.
11. Update `tests/homepage.spec.mjs` with failure-sensitive assertions for the exact Section 05/06 copy and order; exactly six approved landscape labels; absence of the two removed landscape labels; Section 06’s two-paragraph introduction and name ordering; decorative-image/accessibility behavior; responsive asset selection; every label remaining within the landscape and legible at 1440px and 390px; no horizontal overflow; no generic-intelligence-engine introduction; and no change to Section 07’s accepted artwork and copy.
12. Remove or replace the historical Section 05 asset-byte-equality test only to the minimum extent required by the authorized artwork revision. Preserve the immutable historical inputs and keep the Section 07 byte-equality proof intact.
13. Run the complete checked-in suite in root mode and with `BASE_PATH=/alaya-crafts-website`. Capture and inspect after-state Sections 05 and 06 at 1440px and 390px for conceptual hierarchy, annotation anchoring, reading order, clipping, overlap, contrast, whitespace, and continuity into Section 07.
14. Verify that no Homepage section outside 05–06, no Section 06 maturity content, no shared shell, route, metadata, other page, build/deployment file, dependency, or QA/control artifact changed. Write the required return, commit exactly the allowed implementation and return paths in one actor commit, and stop.

## Required proof
- Exact packet/issuance identity, packet SHA-256, repository root, baseline, start/end state, branch, main/upstream relationship, supersession check, actor commit, and single-parent ancestry.
- Complete changed-path list and baseline-to-actor diff proving allowed-path compliance.
- Before/after rendered evidence for Sections 05 and 06 at 1440px and 390px, with temporary artifact paths and concise comparison findings.
- Exact text and DOM-order evidence for every revised heading, paragraph, label, and annotation.
- Negative evidence that Section 05 contains no Technology or Intelligence annotation/class and Section 06 does not introduce CIE before the explanatory first paragraph or as a generic “intelligence engine.”
- Markup/CSS/artwork trace showing how Capability, Experience, Practice, Contribution, Knowledge, and Curiosity inhabit one landscape without placing CIE or Capability Intelligence above it.
- Paint-order and bounds evidence showing all six annotations are legible, unobscured, and inside the landscape at both required viewports.
- Accessibility evidence for the named landscape container and decorative non-interactive constituent artwork.
- Network/runtime evidence that the correct desktop/mobile Section 05 composition is selected without ordinary double fetching.
- Exact proof that the Section 06 maturity title/cards, Section 07 asset/copy, and all other Homepage sections remain unchanged.
- Complete test commands and exact pass/fail counts in root and repository-base-path modes.
- Repository-wide scope check, deviations, skipped/failed proof, limitations, reading expansion, and out-of-scope findings, or explicit `None`.

## Allowed changes and return artifact
- Allowed paths:
  - `src/pages/home.mjs`
  - `src/assets/home.css`
  - `src/assets/alaya-05-living-field-desktop.svg`
  - `src/assets/alaya-05-living-field-mobile.svg`
  - `tests/homepage.spec.mjs`
  - `reviews/missions/AW-20260908-002/claude-return.md`
- Required return: `reviews/missions/AW-20260908-002/claude-return.md`
- Commit boundary: exactly one actor commit containing only allowed implementation paths that require changes plus the return artifact, with the issuance commit as its sole parent.
- Evidence artifacts: before/after screenshots and logs remain temporary and outside the repository unless a stop condition requires a request for explicit durable-evidence authorization.
- Push/merge/deploy boundary: prohibited.

## Prohibited work
- No change outside allowed paths and no edit to this issued `mission.md`.
- No change to Sections 01–04 or 07–11, the Section 06 maturity title/cards, metadata, links, navigation, footer, shared layout, routes, other pages/tests, build/serve scripts, dependencies, lockfile, workflow, Pages settings, domain, or DNS.
- No edit to prior mission packets, prior returns, immutable files under `reviews/missions/AW-20260904-004/inputs/`, design studies, design-direction documents, project briefs, QA workbook, QA source register, or mission-candidate list.
- No representation of Capability Intelligence or CIE as creating capability, controlling it, sitting above it, or existing as a layer inside the landscape.
- No Technology or Intelligence annotation in Section 05 and no generic “intelligence engine” wording before the proper name.
- No cards, pillars, isolated feature icons, product screenshot, dashboard, metric, score, graph, progress display, user data, fabricated product output, interaction, tooltip, modal, carousel, autoplay, or hidden explanatory state.
- No photograph, raster, stock art, external image, icon library, CDN, font, package, canvas, WebGL, new runtime dependency, or base64 asset.
- No unrelated cleanup, optional route-helper change, adjacent QA remediation, requirement invention, QA status change, push, merge, deployment, workflow dispatch, or remote mutation.

## Stop conditions
- Stop on a repository-root, packet, issuance, ancestry, branch, main/upstream, working-tree, active-work overlap, supersession, or authority mismatch.
- Stop if the baseline-to-issuance delta contains anything except the `AW-20260908-001` supersession disposition and this replacement mission packet.
- Stop if any exact approved copy, conceptual relationship, or paragraph-order requirement is ambiguous or conflicts with another controlling source; do not substitute alternate wording.
- Stop if a coherent six-element landscape requires changing another section, introducing a new asset/dependency, or exceeding allowed paths.
- Stop if the implementation cannot preserve both native responsive asset selection and legible, non-overflowing annotations at 390px and 1440px.
- Stop if revising a deployed SVG would require preserving invalid or misleading content-credential metadata; retain the immutable historical input and return the exact provenance conflict rather than misrepresent it.
- Stop if decisive visual, accessibility, network, or full-suite proof cannot be produced locally.
- Otherwise stop after writing the complete return and committing exactly the authorized paths.
