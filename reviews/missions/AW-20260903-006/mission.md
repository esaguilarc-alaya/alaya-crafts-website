# Mission AW-20260903-006: Verify release and deployment readiness

## Identity

- Actor: Verification Actor (Claude Code)
- Mission type: verification-only
- Issuer/reviewer: Codex
- Supersedes: None

## Authoritative starting state

- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `50422251f17de0c64a18903ceaa8bb4a9a2ec125`
- Main HEAD: `50422251f17de0c64a18903ceaa8bb4a9a2ec125`
- Expected working tree: clean
- Declared user-owned changes and overlap assessment: none
- Issuance reconciliation permitted: after issuance, the committed delta from baseline may contain only this `mission.md`
- Runtime/deployment/base-path state: local repository only; no push, merge, GitHub setting change, workflow dispatch, deployment, DNS change, or production mutation is authorized

## Controlling decisions and invariants

- Mission Control v1 governs execution and return.
- This is an evidence mission, not an implementation or deployment mission.
- ADR 001 controls the static build, route shape, base-path behavior, GitHub Pages artifact, and workflow architecture.
- Every approved V1 route has a closed Codex acceptance disposition. This mission must verify the integrated release state without reopening settled page design decisions absent new contradictory evidence.
- The local branch is currently ahead of its recorded upstream. Readiness must distinguish local artifact readiness from remote/deployment readiness and identify the exact unpublished boundary.
- `QA-CAND-001` remains an optional non-blocking maintainability improvement unless current evidence proves a functional release defect.
- A passing local suite does not prove GitHub repository settings, Pages environment configuration, DNS, mailbox delivery, or a successful future GitHub-hosted deployment.

## Linked QA records

- Candidate IDs: `QA-CAND-001` through `QA-CAND-005`
- Current status/classification: `QA-CAND-002` through `QA-CAND-005` are closed; `QA-CAND-001` is open and explicitly non-blocking
- Production record: governed `reviews/qa/Alaya_Website_QA_Tracker.xlsx`, through the Contact acceptance rows recorded by `AW-20260903-005`
- Required post-disposition update: Codex will update QA only after independent review; the actor must not change QA or declare release approval

## Authorized change

**VERIFICATION AUTHORIZED:** Inspect and test the exact integrated repository state, then report whether it is locally release-ready, what remains unpublished or externally unproved, and the precise prerequisites for any later push/deployment authorization.

No website, configuration, workflow, dependency, documentation, QA, or mission-packet implementation change is authorized.

## Why this exists

All approved V1 pages now have accepted production implementations. Before the
owner decides whether to publish, the repository needs one integrated review of
the build, routes, tests, workflow, version-control boundary, generated artifact,
and external assumptions. The result must make a later release decision safe
without performing that release.

## Required reading

- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `docs/engineering-control/qa-integration.md`
- `reviews/qa/source-register.md`
- `reviews/qa/mission-candidates.md`
- `reviews/missions/AW-20260903-001/codex-disposition.md`
- `reviews/missions/AW-20260903-002/codex-disposition.md`
- `reviews/missions/AW-20260903-003/codex-disposition.md`
- `reviews/missions/AW-20260903-004/codex-disposition.md`
- `reviews/missions/AW-20260903-005/codex-disposition.md`
- `architecture/decisions/001-static-build-and-github-pages-routing.md`
- `docs/project-briefs/homepage-production-reference-gate.md`
- `package.json`
- `package-lock.json`
- `scripts/build.mjs`
- `scripts/serve.mjs`
- `.github/workflows/pages.yml`
- `src/shared/routes.mjs`
- `src/shared/layout.mjs`
- all production page modules and checked-in Playwright specifications

## Known evidence and limits

- Codex accepted Contact at commit `50422251f17de0c64a18903ceaa8bb4a9a2ec125`; the immediately preceding actor implementation is `10c086607e2b078e540f2425e94d8223a5ef2859`.
- Codex independently ran 22/22 tests successfully in root and `/alaya-crafts-website` base-path modes before issuance.
- The checked-in workflow deploys on pushes to `main` after its build-and-test job succeeds.
- At issuance, local `main` reports ahead of `origin/main` by 18 commits. The actor must report the exact relationship it observes and must not push or fetch merely to change that fact.
- Repository files cannot prove external GitHub Pages settings, environment protection, canonical-domain/DNS state, or mailbox delivery. Report these as external checks, not inferred passes or invented blockers.

## Required work

1. Perform the absolute-repository preflight. Verify repository identity, branch, baseline, clean tree, issuance-only delta, upstream relationship, and immutable packet before any generated operation.
2. Audit the complete commit range that is present locally but not in the recorded upstream ref. Report commit count and subjects, whether history is linear, and whether any merge, unexpected generated artifact, secret-like file, large binary, unrelated checkout content, or unreviewed implementation appears in that range. Do not rewrite history or fetch/push.
3. Verify package/build reproducibility using the checked-in lockfile and scripts. Run the full checked-in suite in root mode and with `BASE_PATH=/alaya-crafts-website`. Temporary ignored build/test artifacts are permitted only as verification output and must not enter the mission commit.
4. Inspect the complete root-mode and repository-base-path `dist/` artifacts. Confirm the exact six-route ADR structure, required CSS/JavaScript assets, internal-link resolution, absence of broken local asset references, correct route-specific active navigation, and absence of prohibited study/preview scaffolding.
5. Serve the generated artifact at its real root and project-site paths, never `file://`. Verify representative direct URLs and local assets return successfully in both modes.
6. Audit `.github/workflows/pages.yml` against `package.json`, the lockfile, ADR 001, and current official-action structure already checked into the repository. Verify trigger, permissions, dependency installation, browser setup, build/test gate, artifact path, deploy dependency, environment, base-path propagation, and whether the workflow would deploy only after the unpublished commits reach the configured remote `main` branch. Do not edit or dispatch the workflow.
7. Check release hygiene: tracked/untracked state after verification, ignored generated output, repository size anomalies within the unpublished range, obvious credential/private-key patterns in tracked filenames and changed text, and consistency between accepted mission dispositions, candidate status, route contract, and emitted routes. Do not inspect user credential stores, environment secrets, browser sessions, or unrelated directories.
8. Treat `QA-CAND-001` explicitly: prove whether the current handwritten body links resolve correctly in both supported base-path modes. Keep it non-blocking if they do; escalate only with reproducible contrary evidence.
9. Produce a readiness matrix with separate outcomes for: local source state, reproducible build, integrated tests, generated artifact, routing/base paths, workflow definition, version-control publication boundary, and external hosting/domain settings. Use only `READY`, `NOT READY`, or `EXTERNAL CHECK REQUIRED`, supported by evidence.
10. Write `claude-return.md`, commit only that return file, and stop. Request an independent Codex disposition; do not label the repository released or deployed.

## Required proof

- Exact baseline, issuance commit, packet hash, start/end state, upstream ref, ahead/behind counts, and reviewed unpublished commit list.
- Exact changed-file audit for the unpublished range, including any binaries and size anomalies.
- Exact test commands and complete pass/fail counts in both base-path modes.
- Exact generated route and asset inventories for both modes, plus a broken-reference check with method and result.
- Real local HTTP evidence for representative root and project-site URLs and assets.
- Workflow-to-package/ADR trace covering each release gate named in Required Work item 6.
- Secret-like filename and changed-text scan method, results, false-positive handling, and explicit limits. Do not print any discovered secret value into the return.
- Proof that `QA-CAND-001` links resolve in both modes or exact failure evidence.
- Readiness matrix with evidence and limitations; external checks must remain distinct from local failures.
- Final `git status`, committed return hash, reading expansion, deviations, unproved items, and out-of-scope findings, or explicit `None`.

## Allowed changes and return artifact

- Allowed tracked path: `reviews/missions/AW-20260903-006/claude-return.md`
- Required return: `reviews/missions/AW-20260903-006/claude-return.md`
- Temporary ignored output: repository-standard `dist/`, Playwright/test output, and dependency caches only as directly required for verification; none may be staged or committed
- Commit boundary: one commit containing only `claude-return.md`; no implementation or configuration commit
- Push/merge/deploy boundary: prohibited

## Prohibited work

- No change to website source, shared code, tests, build/serve scripts, dependencies, lockfile, workflow, architecture, design, documentation, QA records, candidates, prior missions, ignore rules, Git configuration, remotes, branches, tags, or release metadata.
- No correction, cleanup, reformat, version bump, dependency update, generated artifact commit, release commit, tag, push, merge, pull, fetch, rebase, force operation, workflow dispatch, Pages setting change, environment change, deployment, DNS change, canonical-domain change, or mailbox test.
- No access to credential stores, environment secrets, unrelated checkouts, browser sessions, or private external account settings.
- No invention of release requirements, product requirements, domains, secrets, analytics, consent tooling, or hosting assumptions not present in controlling sources.
- No `mission.md` edit and no QA status/disposition edit by the verification actor.

## Stop conditions

- Stop on repository, packet, issuance, ancestry, working-tree, scope, or actor-overlap mismatch.
- Stop before verification if the baseline-to-issuance delta contains anything except this mission packet.
- Stop and report without fixing if a tracked change, failing test, broken internal route/asset, workflow contradiction, suspected credential exposure, unexpected binary, nonlinear/unexplained unpublished history, or controlling-source conflict appears.
- Stop if proving an external setting would require account access, credentials, network mutation, push, workflow dispatch, deployment, DNS action, or any prohibited work; classify it as `EXTERNAL CHECK REQUIRED`.
- Otherwise stop after committing only the complete return artifact and report the commit to Codex.
