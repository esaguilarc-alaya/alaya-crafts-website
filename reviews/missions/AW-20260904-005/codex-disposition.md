# Codex disposition — AW-20260904-005

## Decision

**ACCEPTED**

The implementation corrects the GitHub Pages artifact for the custom-domain root without weakening repository-subpath compatibility. Publication, repository settings, DNS, and HTTPS remain separate operator actions outside the actor's implementation authority.

## Authoritative record

- Issuance commit: `8a160f79d34f24bd32994c59b9406ccda969e679`
- Issued mission SHA-256: `9d1744a837bf4a5ad63396e3baa62854b3d5fcae1188d78cf463f2fb4704aa66`
- Actor commit: `b51db153356d60c402ce3709be82bc42130e0863`
- Actor commit parent: exact issuance commit
- Actor return SHA-256: `711b6b8e7186cdc71e562ae973a9ef5b3bd00d1c7e09fa47c7d63973b9aaf1c1`
- Reviewed actor range: `8a160f79d34f24bd32994c59b9406ccda969e679..b51db153356d60c402ce3709be82bc42130e0863`

## Independent review

| Check | Result |
|---|---|
| Changed-path boundary | Pass — only `.github/workflows/pages.yml` and `claude-return.md` changed |
| Root-mode regression suite | Pass — 29/29 |
| Repository-subpath suite | Pass — 29/29 with `BASE_PATH=/alaya-crafts-website` |
| Uploaded artifact ordering | Pass — a fresh root-mode build occurs after both suites and immediately before upload |
| Root-path output | Pass — final `dist` contains no `/alaya-crafts-website/` references |
| Required output | Pass — shared CSS, favicon, Homepage, CIE Professional, For Organizations, Ideas, launch article, and Contact outputs exist |
| Prohibited actor work | Pass — no page source, DNS, Pages setting, push, or deployment mutation |

## QA integration

- Governed workbook before SHA-256: `756e73e2f5c805100be0cf8707940240804d9e2ee090b3c712fd743fb7534c4f`
- Governed workbook after SHA-256: `e7a7953bafd2946fd7c3c4ec1dad1d050870d630c06e232893274d17996340e7`
- Added `Session History` row 28 and `Review Log` row 35.
- External source workbook remains unchanged at SHA-256 `818e22c31929a176b5378ef52c2a0fe81b1ae4297ef2e046b127fc480e238e88`.

## Post-acceptance operator checks

After the separately authorized push, confirm the workflow succeeds; apex and `www` resolve; all required routes and assets return successfully at the root domain; generated HTML has no repository-path prefix; and HTTPS is enforced once GitHub issues the certificate.
