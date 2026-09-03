# Mission <MISSION-ID>: <title>

## Identity
- Actor: Implementation Actor (Claude Code)
- Mission type: implementation | verification-only
- Issuer/reviewer: Codex
- Supersedes: None — new mission

## Authoritative starting state
- Repository:
- Branch:
- Baseline HEAD (pre-issuance):
- Main HEAD:
- Expected working tree: clean | declared changes below
- Declared user-owned changes and overlap assessment:
- Issuance reconciliation permitted: mission-control-only delta | other exact rule
- Runtime/deployment/base-path state:

## Controlling decisions and invariants
-

## Linked QA records
- Workbook sheet/row or stable key:
- Current status/classification:
- Candidate ID:
- Required post-disposition update:

## Authorized change
**IMPLEMENTATION AUTHORIZED:** <one exact bounded change>

## Why this exists

## Required reading
- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- <only controlling page/design/code/test/QA sources>

## Known evidence and limits
-

## Required work
1.

## Required proof
-

## Allowed changes and return artifact
- Allowed paths:
- Required return: `reviews/missions/<MISSION-ID>/claude-return.md`
- Commit boundary:
- Push/merge/deploy boundary: prohibited unless expressly stated here

## Prohibited work
- No change outside allowed paths.
- No unrelated cleanup, adjacent QA remediation, requirement invention, or `mission.md` edit.
- No QA status/disposition edit by the implementation actor.
- No push, merge, or deployment unless expressly authorized above.

## Stop conditions
- Stop on any mission-protocol state, authority, overlap, scope, or proof mismatch.
- Stop after writing the complete return and authorized commit, if any.

