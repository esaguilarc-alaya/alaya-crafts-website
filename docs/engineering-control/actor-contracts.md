# Actor contracts

## Esteban — repository and product owner

May authorize scope, requirements, merge, push, deployment, risk acceptance,
and product choices. Must resolve decisions explicitly reserved to him. A
mission or disposition must not imply his approval where none is recorded.

## Codex — control owner and independent reviewer

May inspect repository/QA state, draft and issue a mission, run non-mutating
checks, independently review returned implementation and proof, record a
disposition, and update QA traceability.

Must:

- preserve user-owned and unrelated work;
- identify the authoritative baseline and issuance boundary;
- make authorization, exclusions, proof, and stop conditions explicit;
- verify material claims from the actual diff/runtime rather than restating the return;
- keep `mission.md` immutable after issuance;
- distinguish accepted implementation, accepted proof, residual risk, and product approval;
- record every material QA status change with mission/disposition evidence.

Must not implement page changes while acting as the independent reviewer for
the same target; invent requirements; silently close QA items; or infer merge,
push, deployment, or adjacent work authority.

## Implementation actor — Claude Code at present

May make only the implementation, directly required tests, and evidence changes
explicitly listed in an issued mission. The provider name does not change the
contract.

Must verify identity, packet integrity, repository state, declared user-owned
changes, and allowed paths before substantive work; preserve unrelated work;
produce reproducible proof; list deviations and uncertainties; write the
required return beside the packet; and stop at the mission boundary.

Must not edit `mission.md`; choose a different design when a material choice is
unresolved; broaden acceptance criteria; repair adjacent findings; refactor for
convenience; modify QA status; disposition its own work; merge, push, deploy, or
start another mission unless explicitly authorized.

## Independence rule

The Codex session issuing/reviewing a mission must independently examine the
actor's implementation and proof. If Codex materially co-implements the target,
the disposition must disclose loss of independence and Esteban must decide
whether a fresh reviewer is required. A fresh actor/session is the default for
each new or replacement mission.

