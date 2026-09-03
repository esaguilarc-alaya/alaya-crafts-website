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
- Homepage Production Reference Gate and ADR 001: approved/active.
- The gate explicitly retains page-specific review for Ideas, the launch
  article, and Contact. Approval of the shared pattern is not
  approval of those pages.

## Candidate list

| Candidate | Source record | Classification | Current evidence | Mission boundary / dependency |
|---|---|---|---|---|
| `QA-CAND-001` | Review Log: `src/pages/home.mjs`, 2026-09-03 | Non-blocking improvement | Seven body links work in both base-path modes but bypass the route helper. Status `Open (non-blocking)`. | First confirm whether full route-table usage is desired; this is not currently a defect. If authorized, bound changes to body-link generation and tests. |
| `QA-CAND-002` | Review Log: `src/pages/cie.mjs` closing quiet path, 2026-09-03 | **Closed — described production state not found** | Missions `AW-20260903-001` and `AW-20260903-002` established that the CIE studies contain `Explore CIE Professional` as inert closing spans, while production uses `#understanding` and `../`. No source contains the alleged combined production anchor. | No code change. Closed by Codex disposition of `AW-20260903-002`; the origin of the tracker's `#main` combination remains unproved and is not asserted. |
| `QA-CAND-003` | Review Log: capability-diagram z-index regression, 2026-09-03 | Verification hardening | Manual source/DOM/screenshot proof says fixed; regression class occurred twice. Existing test reportedly checks visibility, not paint order. | Re-check current test. If still absent and Esteban authorizes hardening, add a stable overlap/paint-order regression assertion only. Do not alter the approved diagram. |
| `QA-CAND-004` | Review Log rows for shared header/component plus active production gate | Production checkpoint, partly satisfied | Shared shell, canonical routes, `aria-current`, responsive menu, footer, and brand lockup are proved for Homepage, CIE Professional, and For Organizations. Older “Open” rows are superseded for those pages, not globally closed. | Apply as acceptance criteria within each remaining page migration; do not create a standalone rewrite mission. |
| `QA-CAND-005` | Session History and active gate | Remaining page-specific production reviews | Ideas, launch article, and Contact lack workbook-recorded production approval. For Organizations was accepted by `AW-20260903-003`. | Each remaining page gets a separately issued mission after its implementation baseline is committed/isolated. Preserve page-specific visual/content constraints. |

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

## Recommended first real mission

Consider a bounded verification-hardening mission for `QA-CAND-003`. First
confirm that the current CIE test still lacks a failure-sensitive paint-order
assertion; if so, authorize only the smallest stable regression check and no
diagram implementation change.
