# Codex disposition — AW-20260908-002

## Decision

**ACCEPTED**

The implementation presents Capability as the living terrain and places Experience, Practice, Contribution, Knowledge, and Curiosity within one capability landscape. Technology and Intelligence are no longer landscape elements. Section 06 now explains the holistic understanding first, names it Capability Intelligence, and only then introduces the Capability Intelligence Engine (CIE) by its proper name. The accepted result is local only; no push or deployment is authorized or implied.

## Authoritative record

- Issuance commit: `07df6fc21840a4ec3197bf5010fd03b0fe620d7d`
- Issued mission SHA-256: `f2e789f0a37f013edf9075b4a4ef9f4918bea856a8a166bd6bea76180c497b1e`
- Actor commit: `5db4b630896bfb0a4e5289fb72b5ea9164b4cad1`
- Actor commit parent: exact issuance commit
- Actor return SHA-256: `17eee1d53b58af67349a1a2f4f5da72b3a145b5082ecb106384000da46669127`
- Reviewed actor range: `07df6fc21840a4ec3197bf5010fd03b0fe620d7d..5db4b630896bfb0a4e5289fb72b5ea9164b4cad1`

## Independent review

| Check | Result |
|---|---|
| Packet and ancestry | Pass — the immutable mission hash matches, and the actor commit has the issuance commit as its sole parent |
| Changed-path boundary | Pass — only the five authorized Homepage implementation/test paths and `claude-return.md` changed |
| Section 05 exact copy and order | Pass — the approved eyebrow, heading, supporting paragraph, and six label/annotation pairs are present in the required DOM order |
| Landscape model | Pass — exactly Capability, Experience, Practice, Contribution, Knowledge, and Curiosity are annotated; Technology, Intelligence, Capability Intelligence, and CIE are absent as landscape labels or superior layers |
| Artwork and accessibility | Pass — the two responsive SVGs retain one continuous terrain composition, remove obsolete source semantics and stale C2PA metadata, remain decorative, and add no interaction or duplicated accessible prose |
| Section 06 definition sequence | Pass — the first paragraph explains the connecting activity and names Capability Intelligence; the second begins with `The Capability Intelligence Engine (CIE)`; no generic “intelligence engine” introduction appears |
| Preserved scope | Pass — Section 06 maturity content, Section 07, other Homepage sections, shared shell, routes, metadata, dependencies, build/deployment files, and prior immutable inputs are unchanged |
| Responsive containment | Pass — checked-in browser assertions prove all six labels remain inside the landscape, the correct desktop/mobile asset is selected without ordinary double fetching, and the page has no horizontal overflow at 1440px or 390px |
| Root-mode regression suite | Pass — 31/31 |
| Repository-subpath suite | Pass — 31/31 with `BASE_PATH=/alaya-crafts-website` |
| Diff hygiene | Pass — `git diff --check` reports no whitespace errors |

The actor supplied before/after screenshot findings for both required viewports. During disposition, Codex's in-app preview was unavailable because its browser security policy could not be verified. Codex did not bypass that control. Acceptance therefore relies on independent source/diff review, independent execution of both complete browser suites, their viewport and bounding-box assertions, and the actor's recorded visual evidence. This limitation does not change the bounded acceptance result.

## QA integration

- Governed workbook before SHA-256: `e7a7953bafd2946fd7c3c4ec1dad1d050870d630c06e232893274d17996340e7`
- Governed workbook after SHA-256: `7a4db94ee3f444c74a322f53fc00d2b3efb16441c7911c37ba37b81545b13f19`
- Added `Session History` row 29 and `Review Log` row 36.
- Rendered and inspected all three worksheets; the appended rows are readable and the formula-error scan returned no matches.
- External source workbook remains unchanged at SHA-256 `818e22c31929a176b5378ef52c2a0fe81b1ae4297ef2e046b127fc480e238e88`.

## Publication boundary

The accepted revision is committed only in the local repository. `origin/main` remains unchanged, and no push, merge, workflow dispatch, or deployment was performed.
