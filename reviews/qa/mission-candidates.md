# Initial mission candidates from the QA tracker

**Derived:** 2026-09-03 from the workbook snapshot registered in
[`source-register.md`](source-register.md).  
**Authority:** Planning view only. A row here is not a product requirement or
implementation authorization. Codex must re-check current repository and QA
state before issuing a mission.

## Current approvals and boundaries

- Five-page polished design set: approved; design-study phase closed at the
  workbook-recorded `ce4a943` milestone.
- Homepage production reference: approved in empty and repository base-path modes.
- CIE Professional production migration: approved under the production gate.
- For Organizations production migration: accepted by Codex disposition of
  `AW-20260903-003` in both supported base-path modes.
- Ideas index and launch article: accepted by Codex disposition of
  `AW-20260903-004` in both supported base-path modes.
- Contact: accepted by Codex disposition of `AW-20260903-005` in both supported
  base-path modes. Esteban confirmed `curious@alayacrafts.com` as the official
  address before acceptance.
- Homepage Production Reference Gate and ADR 001: approved/active.
- All approved V1 routes have now completed their page-specific production
  reviews. This does not itself authorize deployment.
- Release readiness was verified and accepted by `AW-20260903-006`: local
  source, build, tests, generated artifacts, routing, and the checked-in workflow
  definition are ready. The accepted commit range remains unpublished.

## Candidate list

| Candidate | Source record | Classification | Current evidence | Mission boundary / dependency |
|---|---|---|---|---|
| `QA-CAND-001` | Review Log: `src/pages/home.mjs`, 2026-09-03 | Non-blocking improvement | Seven body links work in both base-path modes but bypass the route helper. Status `Open (non-blocking)`. | First confirm whether full route-table usage is desired; this is not currently a defect. If authorized, bound changes to body-link generation and tests. |
| `QA-CAND-002` | Review Log: `src/pages/cie.mjs` closing quiet path, 2026-09-03 | **Closed — described production state not found** | Missions `AW-20260903-001` and `AW-20260903-002` established that the CIE studies contain `Explore CIE Professional` as inert closing spans, while production uses `#understanding` and `../`. No source contains the alleged combined production anchor. | No code change. Closed by Codex disposition of `AW-20260903-002`; the origin of the tracker's `#main` combination remains unproved and is not asserted. |
| `QA-CAND-003` | Review Log: capability-diagram z-index regression, 2026-09-03 | **Closed — regression assertion already present** | Issuance preflight confirmed `tests/cie-professional.spec.mjs` already scrolls the diagram into view, samples every label with `elementFromPoint`, rejects `.diagram-path` as topmost, and requires the sampled element inside its card. Git history traces the assertion to `bf9518a`. | No mission or code change. Retain the existing assertion in the full suite; reopen only on new failure evidence. |
| `QA-CAND-004` | Review Log rows for shared header/component plus active production gate | **Closed — production checkpoint satisfied** | Shared shell, canonical routes, `aria-current`, responsive menu, footer, and brand lockup are proved across every approved V1 route. Contact completed the final page-specific check under `AW-20260903-005`. | Retain the shared-shell assertions in the full regression suite. Reopen only on new failure evidence. |
| `QA-CAND-005` | Session History and active gate | **Closed — all page-specific production reviews accepted** | Homepage, CIE Professional, For Organizations, Ideas, the launch article, and Contact have accepted production implementations. Contact was accepted by `AW-20260903-005` with its compact direct-human-contact constraints intact. | No further page-migration mission. Deployment remains a separate owner decision and authorization boundary. |

## Recurring regression classes to carry into relevant missions

1. Real-viewport behavior: 390px overflow, breakpoint activation, keyboard
   open/close, Escape/refocus, nav-item close, and desktop-resize cleanup.
2. Shared-shell drift: canonical order, one route source, one brand/header/footer
   implementation, and exactly one accessible `aria-current="page"`.
3. Study/export contamination: never copy preview wrappers; reject `unpkg.com`,
   Floating UI, Lucide, `srcdoc`, study controls, and base64 raster lockups unless
   separately authorized.
4. Visual stacking: connector lines must remain behind opaque diagram labels;
   use failure-sensitive paint-order evidence where the component exists.
5. Documentation/file divergence: a documented resolution is not closed until
   the actual relevant file/runtime behavior is independently verified.

## Reconciled historical rows

- Homepage embedded contact behavior: later file/DOM verification marks it fixed;
  do not reopen from the earlier `Open` row without new evidence.
- CIE active-page accessibility gap: later production approval proves exactly one
  correct `aria-current`; retain as a regression criterion, not an open CIE defect.
- CI build-step question: later package-script review marks it closed.
- Study-stage mobile-nav failures and preview dependency note: fixed/closed as
  historical findings; carry only their regression guardrails into relevant work.

## Recommended next real mission

No further page-migration or readiness mission is required. The next action is
an owner decision, not an automatically authorized mission: Esteban may
authorize a controlled pre-push upstream reconciliation and push of `main`.
Codex must re-check the current remote state and exact outgoing range before
that push, then verify the GitHub Pages workflow and published routes after it.
`QA-CAND-001` remains an optional non-blocking maintainability improvement and
must not be represented as a release defect.
