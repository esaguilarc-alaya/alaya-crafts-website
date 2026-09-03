# Alaya Website Mission Control v1

**Status:** Active when committed by Esteban  
**Scope:** Governance of bounded work in the Alaya Crafts public website repository  
**Entry rule:** Every Codex reviewer and implementation actor reads this file, its actor contract, the mission protocol, and the exact dispatched mission before acting.

## Purpose

The repository, not chat history, carries continuity. Codex prepares and issues
a bounded mission; the assigned implementation actor (currently Claude Code)
implements only that mission and writes its return beside the immutable packet;
Codex independently reviews the diff and proof, records a disposition, and
updates the governed QA record.

This control governs the process. It does not authorize or specify page work.
Page requirements remain in accepted design, architecture, project-brief, QA,
and mission artifacts cited by a particular mission.

## Authority order

1. The dispatched repository and immutable target/starting state.
2. Accepted repository decisions, design direction, project briefs, and explicit Esteban decisions recorded durably.
3. This control system.
4. The exact issued mission packet.
5. Actor judgment inside the stated boundary.

Chat can dispatch an issued packet but cannot amend it. Conflicts, missing
authority, or state mismatches are stop conditions.

## Roles

- **Esteban — owner:** retains product authority, accepts risk, and resolves choices Codex reserves for him.
- **Codex — control owner and independent reviewer:** drafts and issues missions, verifies returns and proof, records dispositions, and maintains QA traceability. Codex does not treat an actor return as self-accepting.
- **Implementation actor — currently Claude Code:** performs only explicitly authorized implementation and returns evidence. The contract is provider-neutral; another actor can be named later without changing the lifecycle.

See [`actor-contracts.md`](actor-contracts.md) for exact boundaries.

## Operating loop

1. Codex inspects Git and QA state, chooses one already-authorized candidate, and drafts a complete packet from the template.
2. Codex verifies the packet, creates `reviews/missions/<MISSION-ID>/mission.md`, commits it, and dispatches the absolute repository path, exact ID, mission path, and issuance commit.
3. Claude Code first verifies that the repository root exactly matches the dispatched absolute path, then verifies the packet and starting state, performs only authorized work in an isolated checkout when needed, and writes `claude-return.md` in the same directory. `mission.md` is never edited after issuance.
4. Codex independently inspects the actual diff and reruns material proof. It writes `codex-disposition.md` and updates the governed QA tracker/backlog.
5. Esteban makes any reserved product, merge, deployment, or risk decision. Nothing is pushed or merged unless the mission explicitly authorizes it.

## Required controls

- Neutral mission IDs and exact-path dispatch, including the absolute repository
  root and a mandatory root check; never “latest,” “next,” or an implicit
  working directory.
- Explicit repository, branch, baseline commit, issuance commit, main commit,
  and clean or declared user-owned working-tree state.
- Finite authorization, required proof, prohibited work, and stop conditions.
- Immutable issued packet; requirement changes use a replacement mission.
- Separate actor return and Codex disposition.
- Reproducible evidence with claim limits; screenshots alone do not prove hidden behavior, and passing tests do not replace page-specific review.
- No silent remediation, requirement invention, unrelated cleanup, merge, push, deployment, or QA-status change.

## Repository map

```text
docs/engineering-control/
  README.md                 entry point and practical loop
  actor-contracts.md        role authority
  mission-protocol.md       packet fields and lifecycle
  mission-exchange.md       issuance, dispatch, replacement, isolation
  qa-integration.md         workbook provenance and update rules
  templates/                copyable packet/return/disposition templates
reviews/missions/           issued mission directories only
reviews/qa/                 governed QA snapshot, source register, candidates
```

## First-use checklist

Before issuing: read the current Git status; identify every user-owned change;
read current QA approvals and open rows; cite controlling page-specific sources;
select a neutral unused ID; fill every template field; and confirm that the
mission authorizes no more than intended.

Before execution: dispatch only the exact committed packet. Before disposition:
compare baseline-to-return commits, inspect the working tree, rerun decisive
checks, reconcile QA IDs, and state what remains unproved.
