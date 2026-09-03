# Mission exchange

## Issuance

1. Codex inspects `git status`, current branch/HEAD/main, current QA state, and
   controlling page-specific sources.
2. Codex fills the complete mission template and confirms every linked QA item
   exists and is still open/current.
3. Codex creates only `reviews/missions/<MISSION-ID>/mission.md` and commits it.
   That commit is the immutable issuance boundary.
4. Codex dispatches:

```text
Read docs/engineering-control/README.md and the implementation-actor contract.
Execute only mission <MISSION-ID> at <MISSION-PATH>, issued in commit
<ISSUANCE-COMMIT>. Verify the packet and repository state before substantive
work. Write the required actor return beside the packet; do not edit mission.md.
```

Dispatch does not add requirements. Never dispatch “the newest mission.”

## Starting-state reconciliation

The actor may read the packet from the issuance commit while working from the
authorized baseline, or start from the issuance commit only when the intervening
diff contains mission-control artifacts and no unauthorized product change.
The return records which method was used. Any other mismatch stops work.

## Execution and concurrency

Use one clean worktree/branch per state-changing mission. Name the exact baseline
and allowed branch behavior in the packet. Do not run two missions against
overlapping files or shared generated output. Before issuance, list active
missions and declared local changes; sequence overlapping work instead of
hoping Git will reconcile it. Isolation never grants permission to branch,
commit, push, merge, or deploy.

When a user-owned dirty checkout exists, prefer a separate clean worktree at the
authorized commit. Never absorb, stash, reset, or amend those changes without
the owner's explicit request.

## Return

The current executor writes `claude-return.md` from the return template in the
same directory. Future providers use `<actor>-return.md`. The return identifies
the packet and issuance commit, actual start/end state, exact changes/commits,
proof and limitations, deviations, reading expansion, out-of-scope findings,
and stop outcome. It does not approve itself or edit QA.

## Codex disposition

Codex verifies mission identity, packet immutability, actual diff, allowed
paths, proof sensitivity, regressions, return completeness, and QA impact. It
writes `codex-disposition.md` using the template. `ACCEPTED` accepts only the
bounded mission result; merge/deployment/product approval must be separately
stated. Codex then applies only evidence-supported QA updates.

## Correction and replacement

Never amend issued requirements in place. For a typo that changes no meaning,
Codex may issue a separate correction note only if the original packet already
defines that mechanism; v1 packets do not. Otherwise issue a new neutral mission
ID, include `Supersedes: <old ID>` and the reason, and disposition the old
mission `SUPERSEDED`. During execution, changed requirements require the actor
to stop before a replacement is issued. Returns and dispositions are historical
records; correct material errors with a new dated addendum, never silent rewrite.

