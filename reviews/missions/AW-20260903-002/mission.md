# Mission AW-20260903-002: Correct the CIE closing-link verification record

## Identity

- Actor: Implementation Actor (Claude Code), acting verification-only
- Mission type: correction of a rejected verification return
- Issuer/reviewer: Codex
- Supersedes: `AW-20260903-001` for further verification work; the original packet, return, and `REVISE` disposition remain immutable history

## Authoritative starting state

- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `1624b2c6cd1f4f2bb3344c0d244dff571ec0737e` (`Disposition mission AW-20260903-001 for revision`)
- Main HEAD: `1624b2c6cd1f4f2bb3344c0d244dff571ec0737e`
- Expected working tree: declared user-owned changes below; use a clean isolated checkout at the issuance commit for this mission
- Declared user-owned changes and overlap assessment: `scripts/build.mjs`, `src/assets/organizations.css`, `src/pages/organizations.mjs`, and `tests/organizations.spec.mjs` belong to a pending For Organizations implementation. They do not overlap this correction mission and must not be read as authority, modified, staged, stashed, reset, committed, or absorbed.
- Issuance reconciliation permitted: begin from the issuance commit only if its delta from `1624b2c6cd1f4f2bb3344c0d244dff571ec0737e` contains exactly this `mission.md`; otherwise stop
- Runtime/deployment/base-path state: no runtime, deployment, build, or product verification is required; this correction is repository-evidence-only

## Controlling decisions and invariants

- Mission Control v1 and the absolute-repository preflight in `mission-exchange.md` govern.
- `reviews/missions/AW-20260903-001/codex-disposition.md` is the controlling review of the rejected return.
- Accepted bounded fact: the exact production element `<a href="#main">Explore CIE Professional</a>` is absent at the issued state.
- Required correction: CIE design studies do contain `Explore CIE Professional` in the closing section as non-interactive spans; the production page instead uses `#understanding` and `../`.
- The actor must report actual Git state exactly. It must not claim that HEAD/main equals the issuance commit if it does not. Any separate checkout, detached HEAD, worktree, replay, cherry-pick, or later integration must be named with exact commits.
- Esteban retains any product decision. Codex retains QA disposition. No implementation or QA change is authorized.

## Linked QA records

- Workbook sheet/row or stable key: `Review Log`, row dated `2026-09-03`, area `Content note — self-referential closing link`, file `src/pages/cie.mjs — closing section quiet-paths`
- Current status/classification: `Open (non-blocking)`; candidate premise requires correction before disposition
- Candidate ID: `QA-CAND-002`
- Required post-disposition update: Codex will decide whether to correct/close/reframe the QA row only after accepting this return

## Authorized change

**IMPLEMENTATION IS NOT AUTHORIZED.** Produce a corrected, self-contained verification return that reconciles the production source, CIE design-study history, QA premise, and actual Git execution state. Do not change product or QA artifacts.

## Why this exists

The return for `AW-20260903-001` correctly found that the alleged production
anchor is absent, but falsely claimed that the phrase was absent from every CIE
design study and recorded a starting state inconsistent with its commit graph.
Codex dispositioned that mission `REVISE`. A fresh immutable correction mission
is required before QA can be dispositioned responsibly.

## Required reading

- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/missions/AW-20260903-001/mission.md`
- `reviews/missions/AW-20260903-001/claude-return.md`
- `reviews/missions/AW-20260903-001/codex-disposition.md`
- `reviews/qa/mission-candidates.md` — `QA-CAND-002` only
- `src/pages/cie.mjs`
- `src/shared/layout.mjs`
- `design/studies/cie-professional-low-fidelity-source.html` — closing section only
- `design/studies/cie-professional-polished-source.html` — closing section only
- `design/slices/01-cie-professional.md` — closing/return-to-Alaya intent only

## Known evidence and limits

- Production `src/pages/cie.mjs:13` uses `#understanding` with `Revisit how understanding grows` and `../` with `Return to Alaya Crafts`.
- `src/shared/layout.mjs` uses `href="#main"` only for the `Skip to content` link.
- Both named CIE source studies contain `Explore CIE Professional` in their closing sections as `<span>` text, not an anchor.
- No evidence accepted so far shows the exact pair `Explore CIE Professional` plus `href="#main"`.
- The prior return commit `d6b1a6e4ce8a07c03190cb26c456b80425433d59` has direct parent `a1b75650255406ca7daa9e71eca1e9921defa1f1`, contradicting its statement that the return was committed from HEAD/main `f2df16cc4b50c7933b5aeee4988ff07d2e7feeb4` unless an unrecorded integration step occurred.

## Required work

1. Perform the mandatory absolute-repository preflight and record the exact repository path, branch or detached state, HEAD, main, working tree, and issuance commit before reading mission evidence.
2. Verify packet integrity and the baseline-to-issuance delta.
3. Reconcile the three distinct representations without collapsing them:
   - CIE design-study closing text;
   - current production closing links;
   - QA's alleged `Explore CIE Professional` → `#main` production anchor.
4. State exactly which pieces are found, absent, or transformed, with file/line coordinates and element types.
5. Explain the prior return's Git-state discrepancy using durable evidence. If the cause cannot be proved, state `UNRESOLVED` and do not invent a workflow.
6. Produce a neutral QA decision frame based only on corrected evidence. Options may include closing as a stale/conflated record, correcting the record while retaining a separately evidenced issue, or requesting further investigation. Do not select an option.
7. Write the complete return to `reviews/missions/AW-20260903-002/claude-return.md`, commit exactly that file, and stop.

## Required proof

- Exact source coordinates for both CIE study closing spans, the production closing anchors, and the shared skip link.
- An exact-string/pair search distinguishing phrase presence from `href="#main"` presence; do not report independent matches as the same element.
- `git show -s --format='%H %P'` for the prior return commit and all current start/end commits relevant to the state explanation.
- A changed-file check proving the correction commit contains only the new return.
- Explicit claim boundaries and a latent-preference check over the complete QA decision frame.

## Allowed changes and return artifact

- Allowed paths: create only `reviews/missions/AW-20260903-002/claude-return.md`
- Required return: `reviews/missions/AW-20260903-002/claude-return.md`
- Commit boundary: one report-only commit containing exactly the return file is authorized
- Push/merge/deploy boundary: prohibited

## Prohibited work

- No edit to any prior mission packet, return, or disposition.
- No production, test, design-study, architecture, route, layout, QA workbook, candidate-list, or control-file change.
- No link/copy implementation, test change, adjacent remediation, or product recommendation.
- No reading or use of pending For Organizations work.
- No silent reconciliation of Git state and no unsupported explanation.
- No push, merge, deployment, new mission, or decision on behalf of Esteban/Codex.

## Stop conditions

- Stop on any repository, packet, issuance-delta, authority, overlap, or allowed-path mismatch.
- Stop if the correction requires modifying historical artifacts or if actual Git state cannot be reported truthfully.
- An unprovable explanation for the prior state discrepancy is not a reason to guess; record it as unresolved and continue the bounded evidence correction.
- Otherwise stop after committing exactly the complete return file and report the commit to Codex.
