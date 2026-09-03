# Mission protocol

## Identity and directory convention

Use `AW-YYYYMMDD-NNN`, where `NNN` is the next unused sequence for that date.
`AW` means only “Alaya Website”; IDs must not encode page, actor, priority,
status, slice, or outcome. Issued missions live at:

```text
reviews/missions/AW-YYYYMMDD-NNN/
  mission.md
  claude-return.md        # current actor; another actor uses <actor>-return.md
  codex-disposition.md
```

Do not create speculative mission directories. Candidates belong in the QA
candidate list, not under `reviews/missions/`.

## Lifecycle and statuses

- **Candidate:** potential work only; no authorization.
- **Draft:** packet outside the issued directory; no authorization.
- **Issued:** committed immutable `mission.md`; not yet a claim of execution.
- **Returned:** actor return exists; implementation and proof are unaccepted.
- **Dispositioned — ACCEPTED:** bounded mission result and proof accepted.
- **Dispositioned — REVISE:** actor work needs correction; no in-place packet amendment.
- **Dispositioned — BLOCKED:** stated stop condition prevents completion.
- **Dispositioned — DEFERRED:** owner accepts postponement, not completion.
- **SUPERSEDED:** a replacement mission identifies this mission; history remains.

Status is inferred from durable artifacts and the disposition decision. Do not
edit an issued packet merely to change status.

## Mandatory packet fields

Every field in [`templates/mission.md`](templates/mission.md) is required. Use
`None — <reason>` rather than omitting a field. In particular, a packet must
state:

- actor and mission type;
- repository, branch, baseline HEAD, main HEAD, expected working tree, declared user-owned changes, and other environment state;
- controlling decisions/invariants and exact bounded required reading;
- one explicit authorized change, using `IMPLEMENTATION AUTHORIZED`;
- known evidence with limits;
- finite required work and required proof;
- allowed paths and artifact/commit/push boundaries;
- prohibited work and stop conditions;
- linked QA item IDs and update expectation.

The baseline commit is the code/evidence state before issuance. The issuance
commit cannot be written into its own packet and is supplied in dispatch.

## Evidence and commit expectations

Evidence must be reproducible and proportionate to the claim. Name commands,
test files, URLs/base-path mode, viewports, browser/runtime state, and artifact
paths as applicable. Record both successful and skipped/failed checks and their
limits. Generated `dist/` evidence does not substitute for source review.

An implementation mission should normally authorize one actor commit containing
only allowed paths plus its return. Push remains prohibited unless explicitly
authorized. Codex records the reviewed commit and its own verification in the
disposition. Commit hashes are evidence coordinates, not approval.

## Stop rule

Stop before substantive work on a missing/modified/superseded packet; wrong
repo/branch/baseline/main; undeclared or overlapping working-tree change;
conflicting authority; unresolved product/design choice; required out-of-scope
change; unavailable decisive proof; or need to exceed allowed paths/actions.
Return the exact mismatch; do not reconcile it unless the packet explicitly
defines a safe procedure.

