# komodo-ssr-engine-svelte — Agent Config

> Universal LLM directive for this repo (any model). The global root config (`~/.claude/AGENTS.md` → advisor persona, immutable rules, cross-review gate) governs above this. Specialist agents and their standards live globally in `~/.claude/agents/` (symlinked from `komodo-agentic-config`); cross-cutting standards in `~/.claude/standards/`; language modes in `~/.claude/modes/`. Project-specific context lives in this file; coding standards live in the agents' folders.

## Output contract

Every response a human reads follows `~/.claude/standards/communication.md` § Every user-facing response — emoji `##` section headers, bullet-only context, a decision table on any choice. A plain completion report ("here's what I changed") is in scope. Mechanical, obvious, or low-stakes work is not an exemption.

## Quick reference

| Key | Value |
|-----|-------|
| Language | SvelteKit 5 + TypeScript (bun) |
| Module / package | `komodo-ssr-engine-svelte` |
| Port(s) | 7003 |
| Contract | `openapi.yaml` |
| Before starting | `TODO.md` |

## Project Purpose
Server-side rendering engine (Svelte) for the platform's UIs.

## Repo Layout
```
komodo-ssr-engine-svelte/
├── src/            # SvelteKit app
├── static/ · e2e/ · scripts/ · deploy/
├── docs/           # start here
├── svelte.config.js · vite.config.ts · package.json (bun) · bun.lock
├── Dockerfile · docker-compose.yaml
└── TODO.md         # check before starting
```

## Tech Stack
- SvelteKit 5 + TypeScript, **bun** runtime, Vite 8
- Tests: vitest (unit) + Playwright (e2e); lint via biome
- `adapter-static` now → `adapter-node` target; write new code for `adapter-node`

## Context Strategy
**Don't pre-load the repo.** Start at `docs/`. Use `komodo-forge-sdk-ts` source for exact types — don't guess. Read `TODO.md` before starting.

## Frontend Conventions
- Types and API clients come from `komodo-forge-sdk-ts` — import, don't hand-roll.
- Mock mode where present: `bun run build:demo` (`--mode mock`).
