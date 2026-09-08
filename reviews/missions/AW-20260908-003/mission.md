# Mission AW-20260908-003: Publish the accepted Homepage Sections 05–06 revision

## Identity
- Actor: Implementation Actor (Claude Code)
- Mission type: production publication and verification
- Issuer/reviewer: Codex
- Supersedes: None — new production mission

## Authoritative starting state
- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `fc46efdc879fac319336c24059d184696ae8ae4a`
- Main HEAD: `fc46efdc879fac319336c24059d184696ae8ae4a`
- Expected working tree: clean; repository-standard ignored `dist/` or test output may exist and must remain untracked
- Declared user-owned changes and overlap assessment: None. `AW-20260908-002` is dispositioned `ACCEPTED`; no active mission or overlapping working-tree change exists. The temporary local preview used for owner review has been stopped.
- Issuance reconciliation permitted: after issuance, the committed delta from the baseline may contain only this `reviews/missions/AW-20260908-003/mission.md` packet.
- Runtime/deployment/base-path state: local `main` is five commits ahead of `origin/main`; the remote `main` was independently verified at `23b0a24dd786703be4b708806176182288824f1b` immediately before issuance. The public site at `https://alayacrafts.com/` is reachable over HTTPS and still serves the pre-revision Section 05/06 copy. `.github/workflows/pages.yml` deploys a root-built artifact to GitHub Pages after both root and `/alaya-crafts-website` suites pass.

## Controlling decisions and invariants
- Esteban reviewed the accepted revision locally, said it is solid, and explicitly authorized creating a mission to publish it to production.
- `AW-20260908-002` and its Codex disposition are the complete product/content authority for the revision. This mission must publish that accepted state exactly; it must not reopen, rewrite, or extend the design.
- The exact local release boundary before issuance is `fc46efdc879fac319336c24059d184696ae8ae4a`. The issuance commit adds only this packet. No other commit or working-tree content may be introduced into the production push.
- The remote must remain an ancestor of the issuance commit and must still equal the expected remote commit immediately before push. A divergent or unexpectedly advanced remote is a stop condition, not a rebase/pull/merge opportunity.
- Publication uses the existing push-triggered GitHub Pages workflow. Do not manually dispatch a workflow, modify repository settings, change DNS, change the custom domain, or alter HTTPS configuration.
- Production success requires both the GitHub Actions workflow/deploy result and direct verification of the public artifact. A successful push alone is not a successful publication.
- Do not claim deployment success from cached HTML. Verify the revised exact copy, removed old copy, responsive artwork requests, canonical routes/assets, and HTTPS against the live domain after the workflow completes.
- If publication fails after the authorized push, do not force-push, revert, roll back, retry by mutation, or make corrective changes. Capture the exact state and return it for Codex/Esteban disposition.

## Linked QA records
- Workbook sheet/row or stable key: `Session History!A29:E29` and `Review Log!A36:H36`, plus `reviews/missions/AW-20260908-002/codex-disposition.md`
- Current status/classification: accepted local Homepage Sections 05–06 revision; production publication pending
- Candidate ID: None — direct owner publication authorization
- Required post-disposition update: Codex must append a bounded production-publication checkpoint to `Session History` and `Review Log` after independently reviewing the return and live evidence. The actor must not edit QA records.

## Authorized change
**IMPLEMENTATION AUTHORIZED:** Publish the exact accepted repository state through this immutable issuance commit by one ordinary fast-forward push of local `main` to `origin/main`; observe the push-triggered GitHub Pages workflow; verify the resulting public deployment at `https://alayacrafts.com/`; then create one local, unpushed actor-return commit containing only this mission's `claude-return.md`.

## Why this exists

The owner has approved the local Sections 05–06 result, but production still
serves the earlier conceptual model. This mission creates a controlled
publication boundary: verify the accepted state again, push only the known
linear range, let the existing gated Pages workflow deploy it, and prove the
new public content without changing code, configuration, hosting settings, or
domain infrastructure.

## Required reading
- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `docs/engineering-control/qa-integration.md`
- `architecture/decisions/001-static-build-and-github-pages-routing.md`
- `.github/workflows/pages.yml`
- `package.json`
- `package-lock.json`
- `scripts/build.mjs`
- `scripts/serve.mjs`
- `reviews/missions/AW-20260908-001/mission.md`
- `reviews/missions/AW-20260908-001/claude-return.md`
- `reviews/missions/AW-20260908-001/codex-disposition.md`
- `reviews/missions/AW-20260908-002/mission.md`
- `reviews/missions/AW-20260908-002/claude-return.md`
- `reviews/missions/AW-20260908-002/codex-disposition.md`
- `reviews/qa/source-register.md`
- `reviews/qa/mission-candidates.md`
- `src/pages/home.mjs`
- `src/assets/home.css`
- `src/assets/alaya-05-living-field-desktop.svg`
- `src/assets/alaya-05-living-field-mobile.svg`
- `tests/homepage.spec.mjs`

## Known evidence and limits
- `AW-20260908-002` is accepted at actor commit `5db4b630896bfb0a4e5289fb72b5ea9164b4cad1`, with Codex disposition/QA commit `fc46efdc879fac319336c24059d184696ae8ae4a`.
- Codex independently reran the complete checked-in suite immediately before that disposition: 31/31 passed in root mode and 31/31 passed with `BASE_PATH=/alaya-crafts-website`.
- The unpublished `origin/main..fc46efd` range is five linear, single-parent commits: the original `AW-20260908-001` packet, its correct blocked return, the supersession/replacement issuance, the accepted implementation, and the Codex acceptance/QA record. All are governed and accounted for.
- Immediately before issuance, `git ls-remote origin refs/heads/main` returned `23b0a24dd786703be4b708806176182288824f1b`, matching the local remote-tracking ref.
- Immediately before issuance, the public root document still contained `Capability becomes visible and actionable.`, Technology and Intelligence landscape labels, and the prior three-paragraph CIE introduction. It did not yet contain `Capability is living terrain.`
- Local tests and workflow inspection cannot prove the future GitHub-hosted run, CDN propagation, or final public bytes. Those must be verified after the authorized push.
- No authority is granted to change GitHub Pages settings, repository/environment permissions, DNS, `CNAME`, domain redirects, certificates, or secrets. If those prevent publication, return the failure without remediation.

## Required work
1. Perform the absolute-repository preflight. Verify the exact repository root, `main` branch, baseline-to-issuance packet-only delta, immutable packet hash, clean tracked working tree, no active overlapping mission, and exact single-parent ancestry from `origin/main` through the issuance commit.
2. Query the remote directly immediately before any push. Require `refs/heads/main` to equal `23b0a24dd786703be4b708806176182288824f1b`, require it to be an ancestor of the issuance commit, and require local `HEAD` to equal the dispatched issuance commit. Stop on any mismatch; do not fetch-and-integrate, pull, merge, rebase, reset, amend, or force.
3. Audit the complete `origin/main..HEAD` release range. Confirm it contains only the five previously governed commits described above plus this issuance commit; all commits are linear and single-parent; no unexpected path, secret-like changed text/filename, large unexplained binary, generated artifact, or unreviewed implementation exists.
4. Rerun `npm test` and `BASE_PATH=/alaya-crafts-website npm test`. Require 31/31 passing in each mode. Confirm the tracked tree remains clean and generated output remains ignored.
5. Build the root-mode artifact and serve it locally through `scripts/serve.mjs`, never `file://`. Verify the exact approved Section 05/06 copy and order, exactly six approved landscape labels, absence of the two removed labels and old copy, desktop/mobile asset selection, all six canonical routes, required assets, and no broken local references or horizontal overflow at 1440px and 390px.
6. Immediately recheck the remote branch and local issuance identity. If still exact, perform one ordinary fast-forward push of the issuance commit using `git push origin main:main`. No other ref, tag, force option, lease, deletion, branch creation, or workflow command is authorized.
7. Identify the GitHub Actions run triggered by that exact pushed issuance commit. Observe it to a terminal state using authenticated read-only GitHub tooling or the public Actions interface. Require the root suite, repository-subpath suite, final root build, artifact upload, and Pages deploy job to succeed. Do not manually rerun or dispatch a workflow.
8. After the Pages deployment reports success, poll the public site for bounded propagation: up to 10 minutes, at intervals no shorter than 20 seconds. Use cache-bypassing requests where supported without changing server state. Stop polling once decisive current content is observed.
9. Verify production at `https://alayacrafts.com/`: HTTPS succeeds; the root document contains the exact accepted Section 05 heading/supporting copy, six exact label/annotation pairs, Section 06 heading and two exact paragraphs in order; the old Section 05 heading/supporting copy, Technology/Intelligence landscape labels, and old CIE introduction are absent; the two revised Section 05 SVG assets return successfully and contain no obsolete Technology/Intelligence source description or C2PA metadata.
10. Verify representative production continuity: `/`, `/cie-professional/`, `/for-organizations/`, `/ideas/`, `/ideas/launching-alaya-crafts/`, and `/contact/` return successfully over HTTPS; root-relative shared CSS, JavaScript, favicon, and Homepage artwork assets return successfully; generated public HTML does not contain `/alaya-crafts-website/` asset or route prefixes; `www.alayacrafts.com` behavior is observed and reported without changing it.
11. Capture production screenshots of Sections 05–06 at 1440px and 390px after the live content is current. Inspect conceptual hierarchy, label anchoring, overlap, clipping, contrast, whitespace, continuity into Section 07, and horizontal overflow. Keep screenshots temporary outside the repository.
12. Write `reviews/missions/AW-20260908-003/claude-return.md` with complete preflight, push, workflow, deployment, HTTP/content, responsive, and limitation evidence. Commit that return locally as one commit whose sole parent is the issuance commit. Do not push the return commit. Stop for Codex disposition.

## Required proof
- Exact repository root, branch, baseline, issuance commit, mission SHA-256, start/end state, remote-tracking ref, direct remote ref before push, ahead/behind counts, and single-parent ancestry.
- Exact release commit list and changed-path audit from remote `23b0a24dd786703be4b708806176182288824f1b` through the issuance commit, including binary/size and secret-like scan results with false-positive handling.
- Exact root and repository-base-path test commands and 31/31 results for each, or the complete failure result.
- Local generated-route/asset inventory, broken-reference result, exact Section 05/06 content assertions, responsive selection/containment evidence, and tracked-tree status before push.
- Exact authorized push command, its output, remote ref immediately after push, and proof that only `refs/heads/main` advanced from the expected remote commit to the issuance commit.
- GitHub Actions run URL/ID, workflow name, triggering event, branch, exact head SHA, job/step conclusions, Pages deployment/environment conclusion, and terminal timestamp. If authenticated tooling is unavailable, use public read-only evidence; if decisive run identity or status cannot be established, return the limitation and do not claim success.
- Public HTTP status, final URL, cache/response headers useful to freshness, and exact positive/negative content evidence for the Homepage, revised SVGs, representative routes, and required assets.
- Production screenshots and inspection findings at 1440px and 390px, retained only as temporary evidence.
- Exact `www` behavior and HTTPS observation, without inferring or modifying configuration.
- Final local and remote commit relationship: remote `main` at the issuance commit; local `main` at the unpushed actor-return commit with the issuance commit as sole parent; clean tracked working tree; no other local or remote mutation.
- Deviations, failed/skipped proof, limitations, reading expansion, and out-of-scope findings, or explicit `None`.

## Allowed changes and return artifact
- Allowed tracked local path: `reviews/missions/AW-20260908-003/claude-return.md`
- Required return: `reviews/missions/AW-20260908-003/claude-return.md`
- Temporary ignored/local evidence: repository-standard `dist/`, Playwright/test output, and screenshots/logs outside the repository only; none may be staged or pushed as generated evidence
- Commit boundary: after production verification, exactly one local actor commit containing only `claude-return.md`, with the issuance commit as its sole parent; this return commit must remain unpushed
- Push/merge/deploy boundary: exactly one ordinary fast-forward `git push origin main:main` is authorized, and only while local `HEAD` equals the exact issuance commit and remote `main` equals `23b0a24dd786703be4b708806176182288824f1b`. The existing push-triggered workflow may build and deploy that commit. No merge, manual workflow dispatch, rerun, settings change, rollback, or second push is authorized.

## Prohibited work
- No tracked change before the authorized production push and no tracked change after it except the required local `claude-return.md`.
- No edit to website source, CSS, SVGs, tests, shared code, copy, routes, metadata, dependencies, lockfile, build/serve scripts, workflow, architecture, design records, QA workbook/register/candidates, prior mission artifacts, ignore rules, Git configuration, remotes, branches, tags, or this immutable `mission.md`.
- No pull, merge, rebase, cherry-pick, reset, amend, force push, force-with-lease, ref deletion, branch/tag creation, release object, manual workflow dispatch/rerun/cancel, Pages setting/environment change, secret access/change, custom-domain change, DNS change, certificate action, CDN purge, or rollback/revert.
- No publication of the local actor-return commit. No second push.
- No credential-store, browser-cookie, token, secret-value, or unrelated-directory inspection. Normal use of already configured Git/GitHub authentication for the authorized push and read-only run observation is permitted; never print credential material.
- No unrelated cleanup, adjacent QA remediation, optional route-helper work, requirement invention, or QA status/disposition edit by the actor.

## Stop conditions
- Stop before testing or push on any repository-root, branch, packet, baseline, issuance, ancestry, working-tree, active-work, accepted-scope, or authority mismatch.
- Stop before push if the direct remote `main` ref differs from `23b0a24dd786703be4b708806176182288824f1b`, is not an ancestor of the issuance commit, or the release audit/test/local-artifact proof fails.
- Stop if authentication is unavailable, the push would not be an ordinary fast-forward of only `main`, or any command requests force, merge, rebase, history rewrite, another ref, or broader remote mutation.
- After a successful push, do not attempt corrective mutation. If the workflow does not appear, cannot be tied to the issuance SHA, fails, is cancelled, or cannot be decisively observed, capture evidence and return the exact state.
- If the workflow succeeds but production does not show the exact accepted content within the bounded propagation window, capture response/workflow evidence and return without rollback, redeploy, settings, DNS, or code changes.
- Stop if decisive public content, route/asset, responsive visual, or HTTPS proof cannot be produced without exceeding authority.
- Otherwise stop after writing and locally committing the complete return. Do not push that return commit.
