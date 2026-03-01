# Ramu Site

Astro site that fetches content from Sanity. Two workspaces:

- **frontend/** — Astro app (pages, components, Sanity client)
- **studio/** — Sanity Studio (schemas + editor UI), can be hosted separately

Global config (Prettier, README) lives in the repo root.

## Setup

1. Install dependencies (root installs all workspaces):

```sh
corepack enable
pnpm install
```

2. Add env vars for each workspace:

```sh
cp frontend/.env.example frontend/.env
cp studio/.env.example studio/.env
```

Set values in each file based on your environment.

3. Run the Astro dev server:

```sh
pnpm dev
```

4. Run Sanity Studio (optional):

```sh
pnpm studio
```

## Deploy (Vercel)

- Build from root: set Vercel build command to `pnpm build` (runs `build` in `frontend`).
- Set `SANITY_*` env vars in Vercel.
- Add a Sanity webhook (Deploy Hook) so the site rebuilds on publish.

### Preview setup (separate preview deployment)

Use two Vercel environments with different frontend env vars.

- **Production deployment (SSG + published only)**
  - `SANITY_DATASET=production`
  - `SANITY_PREVIEW_DEPLOY=false`
- **Preview deployment (SSR + drafts)**
  - `SANITY_DATASET=production`
  - `SANITY_PREVIEW_DEPLOY=true`
  - `SANITY_API_READ_TOKEN=<read-token-with-viewer-access>`

When `SANITY_PREVIEW_DEPLOY=true`, content routes are rendered on demand and queries use
Sanity `previewDrafts` with CDN disabled.

### Copy content between datasets

From `studio/`, promote development content to production:

```sh
pnpm run dataset:copy:dev-to-prod
```

This uses `dataset export` + `dataset import` (works without advanced dataset management).

Promote production back to development (if needed):

```sh
pnpm run dataset:copy:prod-to-dev
```

## Content model

- `homePage` → `frontend/src/pages/index.astro` and `frontend/src/pages/en/index.astro`
- `project` → `frontend/src/pages/projects/[slug].astro` and listing at `/projects`
- `siteSettings` → optional singleton for nav + home page

## Sanity Studio

- Schemas: `studio/schemaTypes/`
- See `studio/README.md` for Studio setup and deploy.
