# Fibo SaaS — public client documentation

The published site lives at **docs.fibo.io**. This repo is the source.

Built with [Docusaurus 3](https://docusaurus.io). Three sections:

- **Docs** at `/docs/*` — the integration reference (concepts, auth, webhooks, guides, SDK, API)
- **Blog** at `/blog` — release notes, integration patterns, behind-the-scenes
- **Landing** at `/` — marketing entry point that feeds into docs / contact

## Local development

```bash
npm install
npm run start
```

Serves at `http://localhost:3000` with hot reload. Edits to MDX files are picked up instantly; edits to `docusaurus.config.ts` require a restart.

## Build

```bash
npm run build       # builds static site to ./build
npm run serve       # serves the production build locally
npm run typecheck   # TypeScript check on .ts / .tsx
```

## Repo layout

```
/                            site root
├── docusaurus.config.ts     site config (navbar, footer, theme, plugins)
├── sidebars.ts              docs navigation order
├── tsconfig.json
├── package.json
├── docs/                    docs content (MDX)
│   ├── introduction.mdx
│   ├── quickstart.mdx
│   ├── concepts/
│   ├── authentication/
│   ├── webhooks/
│   ├── guides/
│   ├── sdk/
│   └── api-reference/
├── blog/                    blog posts (markdown)
│   ├── authors.yml
│   └── YYYY-MM-DD-slug.md
├── src/
│   ├── pages/index.tsx      landing page (React)
│   ├── components/Card.tsx  custom MDX component, available in any docs page
│   ├── theme/MDXComponents.tsx  registers <Card> + <CardGroup> globally
│   └── css/custom.css       brand theming (Fibo purple, Poppins)
└── static/img/              logos + favicons
```

## Adding a doc page

1. Create `docs/<section>/<page>.mdx`. Frontmatter must contain at least `title` + `description`. Add `sidebar_position: N` to order within its section.
2. Reference the new file id in `sidebars.ts` under the matching category. Pages not listed in the sidebar do not appear in the nav.
3. Use Docusaurus admonition syntax for callouts — `:::note`, `:::warning`, `:::tip`, `:::info`, `:::caution`, `:::danger`. They render as colored blocks.
4. For tabs, import at the top of the MDX file:
   ```mdx
   import Tabs from '@theme/Tabs';
   import TabItem from '@theme/TabItem';
   ```
   then use `<Tabs><TabItem value="x" label="X">...</TabItem></Tabs>`.
5. For card grids on a page (e.g., the "Next" section at the bottom of a guide), use `<CardGroup cols={2}>` and `<Card title="..." icon="rocket" href="/docs/...">description</Card>`. No import needed — they're registered as global MDX components.
6. Substantive content over placeholders. If a page can't be written yet (e.g., the feature ships at M5), keep it out of `sidebars.ts` until it has real content. Use `:::warning` to flag the rare case where you must publish a page with unfinished surfaces.

## Adding a blog post

1. Create `blog/YYYY-MM-DD-slug.md` (or `.mdx`).
2. Frontmatter: `slug`, `title`, `authors: [victor]`, optional `tags: [release, integration, ...]`.
3. Authors are defined in `blog/authors.yml`.

## Editorial conventions

- Write to **integrators**, not to ourselves. Skip the ADR-level reasoning; show how to use the thing. (Internal architecture docs live in [`vigimani/fibo-saas`](https://github.com/vigimani/fibo-saas).)
- Code examples should be runnable as-is. No `<your-api-key>` mid-example without a setup line that shows where it comes from.
- For every authentication / signature flow, give a working end-to-end snippet (request + response + verify), not isolated curl commands.
- One concept per page. Cross-link liberally — Docusaurus indexes for search out of the box.
- Keep snippets idempotent. A reader pasting the same example twice should get the same result.

## Cross-references

- Internal architecture / ADRs: [`vigimani/fibo-saas`](https://github.com/vigimani/fibo-saas) — design docs, decisions, anti-patterns. **Not for client consumption.**
- Backend PoC code: [`vigimani/fibo-saas-poc`](https://github.com/vigimani/fibo-saas-poc) — reference implementation of the APIs documented here.
