# Mission AW-20260903-005: Migrate the Contact page

## Identity

- Actor: Implementation Actor (Claude Code)
- Mission type: bounded implementation and proof
- Issuer/reviewer: Codex
- Supersedes: None

## Authoritative starting state

- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `1653e0679bb94b750e09551b1dbab42e2c3851f2`
- Main HEAD: `1653e0679bb94b750e09551b1dbab42e2c3851f2`
- Expected working tree: clean
- Existing Contact production draft: none; do not infer one from the independent design study
- Issuance reconciliation permitted: after issuance, the committed delta from baseline may contain only this `mission.md`
- Runtime/deployment/base-path state: local verification only; no deployment

## Controlling decisions and invariants

- Mission Control v1 governs execution and return.
- The Homepage Production Reference Gate applies to Contact.
- `design/slices/04-contact.md`, the dependency-free polished study, the route contract, and the cross-page coherence decision control Contact content and composition.
- The page must consume the existing shared shell. It must not reproduce header, footer, brand, route, or mobile-menu implementation.
- Contact is one compact direct-human-contact page, not an intake funnel, qualification mechanism, consulting-services prompt, or automated support surface.
- Preserve the exact approved headline, invitation, public email address, `Write to Alaya` label, and human-response statement.
- `mailto:curious@alayacrafts.com` is the only contact mechanism. Its address must be visible as text and usable as a direct email link.
- No additional contact path, product claim, service offer, response-time promise, or engagement workflow is authorized.
- No other page migration, shared-shell redesign, architecture change, QA disposition, push, merge, or deployment is authorized.

## Linked QA records

- Candidate IDs: `QA-CAND-004` and `QA-CAND-005`, limited to the Contact production checkpoint
- Current status/classification: approved Contact study and route contract exist; Contact has no production implementation or workbook-recorded production approval
- Required post-disposition update: Codex will update QA only after independent review; the actor must not change QA

## Authorized change

**IMPLEMENTATION AUTHORIZED:** Build the approved `/contact/` production route through the current shared shell; add only its page-owned CSS, page module, builder registration, and directly required tests; then return reproducible evidence for independent Codex review.

## Why this exists

Contact is the final approved V1 route without a production implementation. This
mission closes only that page boundary and ensures every existing site invitation
has a real, restrained destination without creating an intake or sales system.

## Required reading

- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/qa/mission-candidates.md` — `QA-CAND-004` and `QA-CAND-005` only
- `architecture/decisions/001-static-build-and-github-pages-routing.md`
- `docs/project-briefs/homepage-production-reference-gate.md`
- `design/slices/04-contact.md`
- `design/direction/public-site-route-contract-v1.md`
- `design/direction/public-website-design-thinking-v1.md` — Contact-related guidance only
- `design/cross-page-coherence-review.md` — Contact and shared production checkpoints only
- `design/studies/contact-polished-source.html`
- `design/studies/contact-polished.html` — dependency-free editable study; exclude its review controls and scripts
- `src/shared/layout.mjs`
- `src/shared/routes.mjs`
- `src/assets/site.css`
- `src/assets/site.js`
- all existing production page modules — shared-shell and relative-link precedent only
- all current checked-in Playwright tests — established proof patterns only

## Known evidence and limits

- `src/shared/routes.mjs` already defines `/contact/` as the canonical Contact route.
- The builder currently emits Homepage, CIE Professional, For Organizations, Ideas, and the launch article, but not Contact.
- Existing Homepage, For Organizations, and Ideas pages already contain relative links intended to resolve to `/contact/` once this route is built.
- No Contact production source, CSS, or test exists at issuance.
- The polished study contains the approved page composition and copy, plus design-review controls and scripts that are prohibited in production.

## Required work

1. Perform the absolute-repository preflight; verify the baseline, clean starting tree, issuance-only delta, and immutable packet before editing.
2. Implement `/contact/` with the approved composition and exact visitor-facing copy:
   - eyebrow/section identity: `Contact`;
   - headline: `Start a conversation.`;
   - invitation from `design/slices/04-contact.md`;
   - label: `Write to Alaya`;
   - visible linked address: `curious@alayacrafts.com` with exact `mailto:curious@alayacrafts.com` destination;
   - statement: `Your message will be read and answered by a person.`
3. Use the shared layout/routes/menu/footer/brand sources and identify `Contact` as the active global navigation item without reordering it.
4. Preserve the approved compact editorial composition, ivory/olive family resemblance, quiet prominence of the email address, and responsive two-column-to-one-column reflow. Do not style the email as a high-pressure button.
5. Register the page in the existing static builder without changing the route table or architecture.
6. Add failure-sensitive tests for: generated `/contact/index.html`; root and repository-base assets/links; canonical header/footer order; exactly one header `aria-current="page"` targeting Contact; exact approved copy; exactly one visible usable contact email link with the exact address and href; absence of every additional contact mechanism or field; existing Homepage, Organizations, and Ideas Contact links resolving to the canonical route; responsive menu behavior at 390px including Enter, Escape, focus return, nav-item close, and desktop-resize cleanup; zero horizontal overflow at 390px and 1440px; compact page composition; and forbidden study/preview scaffolding.
7. Run the full checked-in suite in root mode and with `BASE_PATH=/alaya-crafts-website`. Serve and verify the generated Contact page at its real corresponding path, never `file://`.
8. Perform a bounded visual comparison at 1440px and 390px covering hierarchy, typography, spacing, email prominence without button treatment, compactness, responsive reflow, and family resemblance.
9. Commit exactly the allowed implementation paths plus `reviews/missions/AW-20260903-005/claude-return.md` in one mission commit, then stop.

## Required proof

- Exact baseline, issuance, start/end state, commit, and changed-file list.
- Content and composition trace to the approved Contact slice and polished editable study.
- Test commands and complete pass/fail counts for both base-path modes.
- Generated route and resolved asset/link evidence for `/contact/` and `/alaya-crafts-website/contact/`.
- DOM/runtime evidence for active state, shared shell, exact copy, direct email href, single contact mechanism, inbound Contact paths, interaction, accessibility, overflow, compactness, and scaffolding claims.
- Desktop/mobile screenshots or precisely identified temporary visual evidence paths, with claims limited to what they show.
- Reading expansion, deviations, unproved items, and out-of-scope findings, or explicit `None`.

## Allowed changes and return artifact

- Allowed implementation paths:
  - `scripts/build.mjs`
  - `src/assets/contact.css`
  - `src/pages/contact.mjs`
  - `tests/contact.spec.mjs`
- Required return: `reviews/missions/AW-20260903-005/claude-return.md`
- Commit boundary: one commit containing only the four allowed implementation paths and the return artifact
- Evidence artifacts: temporary screenshots/logs remain outside the repository unless the actor stops and requests explicit durable-evidence authorization
- Push/merge/deploy boundary: prohibited

## Prohibited work

- No edit to shared layout, routes, site CSS/JS, other pages/tests, design/architecture/control artifacts, QA workbook/candidates, prior missions, dependencies, workflow, or configuration.
- No form, input, textarea, select, qualification question, topic/company-size/budget/urgency field, chatbot, AI intermediary, Calendly, scheduler, phone number, physical address, social channel, newsletter capture, contributor workflow, response-time promise, service catalogue, consultation offer, lead-generation language, analytics, or tracking.
- No second email address, contact mechanism, contact modal, Homepage contact surface, or client-side Contact view.
- No button-like treatment or high-pressure CTA treatment for the email address.
- No study controls, inspector behavior, simulation toggles, preview dependencies, embedded raster brand data, or copied study script.
- No unrelated cleanup or adjacent QA remediation.
- No push, merge, deployment, QA status change, or next mission.

## Stop conditions

- Stop on repository/packet/issuance mismatch, dirty or changed starting state, undeclared working-tree change, controlling-source conflict, or overlap with another actor.
- Stop if compliance requires a shared-shell, route-table, architecture, dependency, workflow, configuration, other-page, or non-allowed-path change.
- Stop if any approved copy, contact mechanism, privacy expectation, response commitment, or design choice is ambiguous or conflicts across controlling sources.
- Stop if exact study fidelity would violate the production gate or decisive proof cannot be produced locally.
- Otherwise stop after committing exactly the allowed implementation and return paths and report the commit to Codex.
