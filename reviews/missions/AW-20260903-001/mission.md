# Mission AW-20260903-001: CIE Professional closing-link intent verification

## Identity

- Actor: Implementation Actor (Claude Code), acting verification-only
- Mission type: verification-only and decision framing
- Issuer/reviewer: Codex
- Supersedes: None — new mission

## Authoritative starting state

- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `863a7da34da8485f45011c639e49831d1e1182e4` (`Establish website mission control`)
- Main HEAD: `863a7da34da8485f45011c639e49831d1e1182e4`
- Expected working tree: declared user-owned changes below; use a clean isolated checkout at the issuance commit for this mission
- Declared user-owned changes and overlap assessment: `scripts/build.mjs`, `src/assets/organizations.css`, `src/pages/organizations.mjs`, and `tests/organizations.spec.mjs` belong to a pending For Organizations implementation. They do not overlap this verification mission and must not be read as mission authority, modified, staged, stashed, reset, committed, or absorbed.
- Issuance reconciliation permitted: begin from the issuance commit only if its delta from `863a7da34da8485f45011c639e49831d1e1182e4` contains exactly this `mission.md`; otherwise stop
- Runtime/deployment/base-path state: no deployment work; verification may use the repository's local build/test facilities only if it does not require or consume the declared Organizations changes

## Controlling decisions and invariants

- The mission-control system committed at `863a7da` governs this mission.
- The Homepage and CIE Professional production migrations are recorded as approved in the governed QA workbook; this mission must not reopen those approvals broadly.
- The tracker describes the closing link as a non-blocking content choice, not a shared-shell/build defect.
- The intended destination or replacement copy is not established by the tracker. Esteban retains that product decision.
- Design studies and accepted repository documents may supply evidence, but preview/export scaffolding is never production authority.
- No implementation, QA status change, merge, push, deployment, or adjacent remediation is authorized.

## Linked QA records

- Workbook sheet/row or stable key: `Review Log`, row whose date is `2026-09-03`, area is `Content note — self-referential closing link`, and file is `src/pages/cie.mjs — closing section quiet-paths`
- Current status/classification: `Open (non-blocking)`; product/content choice
- Candidate ID: `QA-CAND-002`
- Required post-disposition update: none unless Codex independently accepts new evidence; this mission should normally leave the item open pending Esteban's decision

## Authorized change

**IMPLEMENTATION IS NOT AUTHORIZED.** Verify the current source and rendered behavior of the CIE Professional closing link, trace the accepted repository sources that could define its intended purpose, and return a neutral decision frame for Esteban without selecting or implementing an outcome.

## Why this exists

The QA tracker records that `Explore CIE Professional` links to `#main`, which
appears to jump to the page's own main wrapper. The behavior is non-blocking,
but the correct destination or wording is not recorded. A factual check and
bounded source trace are required before any product choice or implementation.

## Required reading

- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `reviews/qa/mission-candidates.md` — `QA-CAND-002` only
- `design/slices/01-cie-professional.md`
- `design/cross-page-coherence-review.md`
- `design/direction/public-site-route-contract-v1.md`
- `docs/project-briefs/homepage-production-reference-gate.md`
- `src/pages/cie.mjs`
- `src/shared/routes.mjs`
- `src/shared/layout.mjs`
- `tests/cie-professional.spec.mjs`

## Known evidence and limits

- QA says the closing link is `<a href="#main">Explore CIE Professional</a>` and behaves as an effective self-jump.
- The finding is non-blocking and page-owned.
- QA does not define a replacement destination or copy.
- These are supplied observations, not inherited proof; verify them at the issued state.

## Required work

1. Verify the exact current source coordinate, rendered `href`, target element, and observable browser behavior in an isolated checkout at the authorized state.
2. Determine whether the link is genuinely a no-op/self-jump, a deliberate return-to-start interaction, or has another behavior, without inferring intent from behavior alone.
3. Search only the required reading for explicit language governing the closing link's purpose, destination, or copy. Quote minimally and cite exact file/section/line coordinates.
4. If no controlling answer exists, present the smallest neutral decision frame: retain the current link, change its destination, change/remove the link or copy, or another option only if directly evidenced. State consequences and the exact decision Esteban must make. Do not favor an option.
5. Identify the smallest likely implementation/test boundary for each viable option, clearly marked as non-authorizing planning evidence.
6. Write the complete return to `reviews/missions/AW-20260903-001/claude-return.md` and stop.

## Required proof

- Exact source and rendered DOM coordinates for the link and target.
- Reproducible local verification with base-path mode stated.
- Exact required-reading coordinates for any claimed design/content authority, or an explicit `None found in required reading` result.
- Clear separation among observed behavior, documented authority, inference, options, and unresolved product decision.
- A latent-preference check confirming that no option is framed as the default, primary, fallback-only, or otherwise selected indirectly.

## Allowed changes and return artifact

- Allowed paths: create only `reviews/missions/AW-20260903-001/claude-return.md`
- Required return: `reviews/missions/AW-20260903-001/claude-return.md`
- Commit boundary: one report-only commit containing exactly the return file is authorized
- Push/merge/deploy boundary: prohibited

## Prohibited work

- No production, test, design, architecture, route, layout, QA workbook, candidate-list, or existing mission-file change.
- No correction of the link, copy, destination, test coverage, or adjacent finding.
- No reading or use of pending For Organizations work.
- No unrelated cleanup, requirement invention, or `mission.md` edit.
- No QA status/disposition edit by the implementation actor.
- No push, merge, deployment, new mission, or selection on Esteban's behalf.

## Stop conditions

- Stop on any mission-protocol state, authority, packet, overlap, scope, or proof mismatch.
- Stop if the required reading conflicts, if verification requires the user-owned Organizations changes, if a product choice must be guessed, or if broader repository archaeology would be required.
- Otherwise stop after committing exactly the complete return file and report its commit to Codex.
