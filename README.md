# Fibo SaaS — public client documentation

The published site lives at **docs.fibo.io** (TBD — Mintlify-hosted). This repo is the source.

## Tooling

[Mintlify](https://mintlify.com) renders the MDX files in this repo on every push to `main`. No build step required — the config lives in `docs.json`.

## Local preview

```bash
npm i -g mint
mint dev
```

Opens `http://localhost:3000` with hot reload.

## Adding a page

1. Create `<section>/<page>.mdx` (frontmatter must contain `title`).
2. Reference the page in `docs.json` under the matching `navigation.tabs[*].groups[*].pages` array — Mintlify only displays pages that are listed.
3. Substantive content > placeholders. Don't merge a page that's only "TODO" — readers see it and lose trust. If a page can't be written yet (e.g., feature ships at M5), keep it out of `docs.json` until it has real content.

## Repo layout

```
/                       site root
├── docs.json           Mintlify config (theme + navigation)
├── introduction.mdx    landing page
├── quickstart.mdx      5-min getting started
├── concepts/           what Fibo does + why architecture is what it is
├── authentication/     API keys, webhook HMAC verification
├── webhooks/           event catalog + delivery semantics
├── api-reference/      REST endpoint reference (per-resource)
├── sdk/                @fibo/react-sdk usage
├── guides/             end-to-end integration walkthroughs
├── snippets/           reusable MDX includes
└── images/             logos + diagrams
```

## Editorial conventions

- Write to **integrators**, not to ourselves. Skip the ADR-level reasoning; show how to use the thing.
- Code examples should be runnable as-is. No `<your-api-key>` mid-example without a setup line that shows where it comes from.
- For every authentication / signature flow, give a working **end-to-end** snippet (request + response + verify), not isolated curl commands.
- One concept per page. Cross-link liberally — Mintlify auto-indexes for search.
- Keep snippets idempotent. A reader pasting the same example twice should get the same result.

## Editorial pipeline

| Stage | Status | Note |
|---|---|---|
| Mintlify account | TBD — being provisioned by Victor | will connect this repo on creation |
| Custom domain | TBD — `docs.fibo.io` once DNS is set | |
| Search index | Auto by Mintlify | |
| Analytics | TBD | |

## Cross-references

- Internal architecture / ADRs: [`vigimani/fibo-saas`](https://github.com/vigimani/fibo-saas) — design docs, decisions, anti-patterns. **Not for client consumption.**
- Backend PoC code: [`vigimani/fibo-saas-poc`](https://github.com/vigimani/fibo-saas-poc) — reference implementation of the APIs documented here.
