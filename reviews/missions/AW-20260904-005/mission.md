# Mission AW-20260904-005: Correct Pages artifact for the custom domain root

## Identity
- Actor: Implementation Actor (Claude Code)
- Mission type: implementation
- Issuer/reviewer: Codex
- Supersedes: None — corrective deployment mission

## Authoritative starting state
- Repository: `/Users/estebanaguilar/Documents/Pathless path/AlayaCrafts /CIE Professional Architecture/Implementation/alaya-crafts-website`
- Branch: `main`
- Baseline HEAD (pre-issuance): `fcdcb8a2a6609b53355520d56c34d3ac9c386625`
- Main HEAD: `fcdcb8a2a6609b53355520d56c34d3ac9c386625`
- Expected working tree: clean
- Declared user-owned changes and overlap assessment: none
- Issuance reconciliation permitted: mission-control-only delta consisting solely of this immutable `mission.md`
- Runtime/deployment/base-path state: `main` equals `origin/main`; GitHub Pages custom domain is set to `alayacrafts.com`; DNS is correct; HTTP serves the root document, but its `/alaya-crafts-website/...` asset and route URLs return 404; GitHub has not yet issued the HTTPS certificate

## Controlling decisions and invariants
- `alayacrafts.com` is now the canonical public deployment target and serves the Pages artifact at `/`, not `/alaya-crafts-website`.
- The checked-in workflow currently runs `npm test` with `BASE_PATH=/alaya-crafts-website` and uploads the resulting `dist`; this produces the wrong artifact for the custom domain.
- The production artifact uploaded to Pages must be built last with an empty/root base path.
- Both root-mode and repository-base-path test modes remain required regression coverage. The correction must not weaken either mode.
- Preserve the existing dependency installation, Chromium installation, Pages artifact upload, deploy dependency, permissions, concurrency, triggers, and environment behavior unless a directly necessary ordering/name clarification is required.
- No website source, design, content, route definition, package, dependency, DNS, Pages setting, or custom-domain setting change is authorized.

## Linked QA records
- Workbook sheet/row or stable key: post-publication custom detected 2026-09-04; custom-domain asset/navigation base-path mismatch
- Current status/classification: blocking custom for custom-domain readiness; GitHub project URL remains functional
- Candidate ID: none
- Required post-disposition update: Codex records the corrective result and external verification after review and deployment

## Authorized change
**IMPLEMENTATION AUTHORIZED:** Change only the GitHub Pages workflow so it proves both supported base-path modes but uploads a freshly generated root-base-path `dist` artifact suitable for `alayacrafts.com`.

## Why this exists

After the custom domain was registered and DNS propagated, independent checks
showed that `http://alayacrafts.com/` serves HTML containing
`/alaya-crafts-website/...` URLs. Those asset and nested-route URLs return 404
because the custom domain maps the Pages project to `/`. The workflow must test
both modes and then regenerate the final artifact specifically for the root
domain before upload.

## Required reading
- `docs/engineering-control/README.md`
- `docs/engineering-control/actor-contracts.md`
- `docs/engineering-control/mission-protocol.md`
- `docs/engineering-control/mission-exchange.md`
- `.github/workflows/pages.yml`
- `package.json`
- `scripts/build.mjs`
- `scripts/serve.mjs`
- `src/shared/routes.mjs`
- `docs/project-briefs/homepage-production-reference-gate.md`
- `reviews/missions/AW-20260903-006/codex-disposition.md`
- `reviews/missions/AW-20260904-004/codex-disposition.md`

## Known evidence and limits
- Public DNS resolves `alayacrafts.com` to all four GitHub Pages IPv4 addresses; `www.alayacrafts.com` is a CNAME to `esaguilarc-alaya.github.io`.
- GitHub Pages reports custom domain `alayacrafts.com`, status `built`, and HTTPS not yet enforced because the certificate does not yet exist.
- `http://alayacrafts.com/` returns 200, while `/alaya-crafts-website/assets/site.css` and `/alaya-crafts-website/cie-professional/` return 404. `/cie-professional/` returns 200.
- The current workflow has one test/build step with `BASE_PATH=/alaya-crafts-website`, immediately followed by artifact upload.
- `npm test` always builds before running Playwright; therefore the last test mode determines the current `dist` unless a final explicit build follows it.

## Required work
1. Verify the dispatched mission path and issuance commit, clean worktree, current `main`, and mission-only issuance delta.
2. Modify `.github/workflows/pages.yml` so CI runs the complete suite in root mode and in `BASE_PATH=/alaya-crafts-website` mode.
3. After both test modes pass, run a final explicit root-mode production build with no `BASE_PATH` value and only then upload `dist`.
4. Keep failure ordering strict: neither final build nor artifact upload may run after a failed test; deployment must remain dependent on successful build-and-test completion.
5. Give the steps short human-readable names that make the two test modes and final custom-domain build distinguishable in Actions logs.
6. Inspect the workflow diff and locally reproduce the exact logical sequence: `npm test`, `BASE_PATH=/alaya-crafts-website npm test`, then `npm run build` with no base path.
7. Inspect the final generated `dist/index.html` and every generated route. Prove shared asset and canonical route URLs begin at `/` and contain no `/alaya-crafts-website/` prefix, while the separate base-path test mode still passes.
8. Write `reviews/missions/AW-20260904-005/claude-return.md`, commit the workflow correction and return together as one actor commit whose sole parent is the issuance commit, then stop.

## Required proof
- Exact actor commit and sole-parent ancestry to issuance.
- SHA-256 of unchanged `mission.md` and completed `claude-return.md`.
- Complete changed-path list proving only the workflow and return changed.
- Exact final workflow step order and relevant environment values.
- Exact local results from root tests, repository-base-path tests, and the final root build.
- Generated-artifact inspection covering all six routes, shared CSS/JS/favicon, Section 05/07 assets, and absence of `/alaya-crafts-website/` URLs in the final root artifact.
- Confirmation that Pages upload consumes the final root-built `dist`.
- Confirmation that no site source, package, dependency, DNS, Pages setting, push, merge, or deployment changed.

## Allowed changes and return artifact
- Allowed paths:
  - `.github/workflows/pages.yml`
  - `reviews/missions/AW-20260904-005/claude-return.md`
- Required return: `reviews/missions/AW-20260904-005/claude-return.md`
- Commit boundary: exactly one actor implementation commit containing only allowed paths, with the issuance commit as its sole parent
- Push/merge/deploy boundary: prohibited

## Prohibited work
- No change outside allowed paths.
- No website source, page, CSS, asset, favicon, test, package, lockfile, script, route, content, or design change.
- No CNAME file, DNS record, Pages setting, custom-domain setting, HTTPS setting, workflow trigger, permission expansion, or new action/dependency.
- No removal or weakening of root-mode or repository-base-path test coverage.
- No artifact upload before the final explicit root build.
- No unrelated cleanup, adjacent QA remediation, requirement invention, mission edit, or QA disposition edit.
- No push, merge, deployment, or remote mutation.

## Stop conditions
- Stop if the dispatched mission path or issuance commit does not match repository state.
- Stop if the worktree is not clean or authoritative `main` differs from the issued state.
- Stop if a correct root artifact requires a change outside the two allowed paths.
- Stop if the exact three-command local sequence fails; report evidence rather than masking or weakening a failure.
- Stop if DNS, GitHub Pages configuration, or certificate state changes the diagnosed root cause before implementation; report the new state to Codex.
- Stop on any other mission-protocol state, authority, overlap, scope, or proof mismatch.
- Stop after writing the complete return and authorized actor commit.
