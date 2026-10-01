# Mission AW-20261001-001: Publish second Ideas essay

## Identity
- Actor: Implementation Actor (Codex sub-agent)
- Mission type: implementation
- Issuer/reviewer: Codex
- Supersedes: None — new mission

## Authoritative starting state
- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts/CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`; implementation must use an isolated branch/worktree from the authorized baseline
- Baseline HEAD (pre-issuance): `eeb8058ca8be51710ccce3e10ded5ae2ebb99571`
- Main HEAD: `eeb8058ca8be51710ccce3e10ded5ae2ebb99571`
- Expected working tree: declared changes below
- Declared user-owned changes and overlap assessment: untracked `cie/`; no overlap with authorized paths; preserve it untouched by using an isolated checkout
- Issuance reconciliation permitted: mission-control-only delta containing this packet and no product change
- Runtime/deployment/base-path state: framework-free Node static build; verify both the default local route behavior and the existing test suite; deployment is not authorized

## Controlling decisions and invariants
- The owner supplied the complete article text on 1 October 2026 with working title `What "technology extends it" actually means`, category `Essay`, and maturity `Developed`.
- Treat the supplied working title as the publication title and 1 October 2026 as the publication date for this requested posting.
- Preserve the authorial voice as `Alaya Crafts` and the supplied prose verbatim except for HTML punctuation encoding where required; do not rewrite editorial content.
- Follow the approved `/ideas/{slug}/` route pattern and the existing shared article template.
- The Ideas index remains a quiet chronological list, with the newest real publication featured.
- Do not add a CMS, filters, sharing controls, reading-time badge, newsletter, fabricated cadence, or unrelated content.

## Linked QA records
- Workbook sheet/row or stable key: None — owner-requested new publication, not an existing QA remediation
- Current status/classification: None — no linked QA item
- Candidate ID: None — direct owner-authorized publication
- Required post-disposition update: None — do not modify the governed QA workbook or candidate list

## Authorized change
**IMPLEMENTATION AUTHORIZED:** Add the supplied essay as the second real Ideas publication, make it the featured/current inquiry, preserve the existing field-work article in the chronological index, and add focused route/content tests.

## Why this exists

The owner requested publication of a second substantive Ideas article. The site currently hard-codes a single article and its index entry, so the new page, build registration, index ordering, and route assertions must be updated together.

## Required reading
- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `design/direction/public-site-route-contract-v1.md`
- `design/slices/03-ideas-resolved-decisions.md`
- `src/pages/ideas.mjs`
- `src/pages/idea-article.mjs`
- `src/assets/ideas.css`
- `scripts/build.mjs`
- `tests/ideas.spec.mjs`
- `/Users/estebanaguilar/.codex/attachments/a23e9e80-5785-4a75-b7f0-71847902fbf4/Pasted text.txt`

## Known evidence and limits
- The current production source and tests support one hard-coded Ideas article and one generated article route.
- The shared article CSS already supports the requested essay structure; no style change is expected unless runtime proof exposes a concrete defect.
- The supplied attachment contains no explicit publication date, excerpt, slug, or contextual-link instruction. This packet fixes the date as `1 October 2026`, the slug as `what-technology-extends-it-actually-means`, and permits a faithful excerpt derived from the opening; contextual links must remain restrained and limited to existing canonical Alaya pages.

## Required work
1. Add a new page module for `/ideas/what-technology-extends-it-actually-means/` using the shared layout and article template.
2. Preserve the supplied title and prose, structuring the three supplied section headings as `h2` elements and the opening passage as the article dek/body without editorial rewriting.
3. Display `Essay`, `Developed`, `1 October 2026`, and `Alaya Crafts` near the article title.
4. Register the page in the static build.
5. Update the Ideas page so the new essay is the featured current inquiry and the body-of-thought index contains both publications in reverse chronological order with accurate category, status, date, title, link, and restrained excerpts.
6. Update focused Ideas tests to prove both exact generated routes, index ordering/metadata/links, new article title/body/metadata, shared-shell behavior, contextual destinations, and 390px no-overflow behavior while preserving coverage of the existing article.
7. Write the required actor return and create one implementation commit containing only allowed paths.

## Required proof
- `npm test`
- Direct source/diff inspection confirming the supplied prose is complete and the existing article remains unchanged.
- Runtime checks at `/ideas/`, `/ideas/what-technology-extends-it-actually-means/`, and `/ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/` at 1440px and 390px as covered by Playwright.
- `git diff --check` and an allowed-path diff audit.

## Allowed changes and return artifact
- Allowed paths: `src/pages/ideas.mjs`; `src/pages/idea-technology-extends-it.mjs`; `scripts/build.mjs`; `tests/ideas.spec.mjs`; `reviews/missions/AW-20261001-001/codex-subagent-return.md`
- Required return: `reviews/missions/AW-20261001-001/codex-subagent-return.md`
- Commit boundary: one actor commit based on the issuance commit, containing only allowed paths and the required return; do not amend the issuance commit
- Push/merge/deploy boundary: prohibited

## Prohibited work
- No change outside allowed paths.
- No unrelated cleanup, adjacent QA remediation, requirement invention, or `mission.md` edit.
- No QA status/disposition edit by the implementation actor.
- No push, merge, or deployment unless expressly authorized above.

## Stop conditions
- Stop on any mission-protocol state, authority, overlap, scope, or proof mismatch.
- Stop if preserving the supplied article faithfully requires a material editorial decision not fixed above.
- Stop after writing the complete return and authorized commit, if any.
