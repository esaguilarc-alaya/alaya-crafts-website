# QA tracker integration

## Source and provenance

Esteban supplied `/Users/estebanaguilar/Downloads/Alaya_Website_QA_Tracker.xlsx`.
It was read without modification. An exact repository snapshot is stored at
`reviews/qa/Alaya_Website_QA_Tracker.xlsx`; provenance, hashes, and import date
are in [`reviews/qa/source-register.md`](../../reviews/qa/source-register.md).

The repository copy is the governed working ledger after import. The Downloads
file remains the preserved external original and must never be silently
overwritten. Any later import/export must be explicit, hash-recorded, and
reconciled rather than replacing either side without review.

## What each record means

- **Session History** records what was reviewed and the bounded approval state.
- **Review Log** records findings/checkpoints. A historical `Open` row may be
  superseded by a later verified `Fixed` row; Codex must reconcile chronology
  and evidence before creating a mission.
- [`reviews/qa/mission-candidates.md`](../../reviews/qa/mission-candidates.md)
  is a derived planning view, not product authority and not permission to work.

## Mission linkage

Before issuance, Codex names the exact workbook sheet/row or stable descriptive
key in the mission and classifies it as defect, non-blocking improvement,
production checkpoint, or verification hardening. Similar-looking rows are not
automatically one requirement.

After review, Codex:

1. records the disposition and exact evidence in `codex-disposition.md`;
2. updates the governed workbook only for statuses proved by that disposition;
3. adds a Session History row identifying the mission ID, reviewed commit,
   checks, issues count, and bounded result;
4. updates the corresponding Review Log row or adds a new row without deleting
   history; and
5. updates the candidate list, preserving supersession/dependency notes.

If workbook editing is unavailable or unsafe, the disposition must contain a
precise proposed update and mark QA synchronization pending. It must not claim
the tracker was updated.

## Workbook edit discipline

Preserve all sheets, columns, styles, formulas, data types, and historical rows.
Append or target only the necessary cells, render and inspect all sheets, scan
for formula errors, save the governed repository copy, and record before/after
SHA-256 hashes in `source-register.md`. Never rewrite the external original.

QA closure is evidence-based: implementation return alone is insufficient;
Codex must independently verify the acceptance claim. “Approved” applies only
to the scope named in the row/session and does not waive later page-specific
review.

