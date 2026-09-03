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
- Homepage Production Reference Gate and ADR 001: approved/active.
- The gate explicitly retains page-specific review for For Organizations,
  Ideas, the launch article, and Contact. Approval of the shared pattern is not
  approval of those pages.

## Candidate list

| Candidate | Source record | Classification | Current evidence | Mission boundary / dependency |
|---|---|---|---|---|
| `QA-CAND-001` | Review Log: `src/pages/home.mjs`, 2026-09-03 | Non-blocking improvement | Seven body links work in both base-path modes but bypass the route helper. Status `Open (non-blocking)`. | First confirm whether full route-table usage is desired; this is not currently a defect. If authorized, bound changes to body-link generation and tests. |
| `QA-CAND-002` | Review Log: `src/pages/cie.mjs` closing quiet path, 2026-09-03 | Open content/product choice | `Explore CIE Professional` points to `#main`, effectively a self-jump. Status `Open (non-blocking)`. | **Esteban/product decision required before implementation:** intended destination/copy is not established in the tracker. Recommended first real mission is verification/decision framing, not a guessed fix. |
| `QA-CAND-003` | Review Log: capability-diagram z-index regression, 2026-09-03 | Verification hardening | Manual source/DOM/screenshot proof says fixed; regression class occurred twice. Existing test reportedly checks visibility, not paint order. | Re-check current test. If still absent and Esteban authorizes hardening, add a stable overlap/paint-order regression assertion only. Do not alter the approved diagram. |
| `QA-CAND-004` | Review Log rows for shared header/component plus active production gate | Production checkpoint, partly satisfied | Shared shell, canonical routes, `aria-current`, responsive menu, footer, and brand lockup are proved for Homepage and CIE Professional. Older “Open” rows are therefore superseded for those pages, not globally closed. | Apply as acceptance criteria within each remaining page migration; do not create a standalone rewrite mission or touch pending For Organizations work in another checkout. |
| `QA-CAND-005` | Session History and active gate | Remaining page-specific production reviews | For Organizations, Ideas, launch article, and Contact lack workbook-recorded production approval. | Each page gets a separately issued mission after its implementation baseline is committed/isolated. Preserve page-specific visual/content constraints. |

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

Issue a **verification/decision-framing mission for `QA-CAND-002`** after
confirming a clean isolated baseline. It is the smallest genuinely open item and
contains a product choice that must not be guessed. The actor should verify the
current rendered behavior and identify the accepted source(s) that could define
the intended destination; implementation should remain unauthorized until
Esteban selects or confirms the outcome.

