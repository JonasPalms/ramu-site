# Sanity Studio

This folder contains the Sanity Studio (schemas/models + editor UI).

## Setup

1. Add env vars in this workspace:

- Create `studio/.env` (or use your shell env) with:
  - `SANITY_STUDIO_PROJECT_ID=aos0274a`
  - `SANITY_STUDIO_DATASET=development`

2. Install and run:

```bash
corepack enable
pnpm install
pnpm studio
```

## Deploy

- You can deploy the Studio separately (Sanity hosted Studio, or its own Vercel project).
- The Astro site uses production SSG and a separate preview deployment for draft content.
- For the deployed Studio that editors use, set `SANITY_STUDIO_DATASET=production`.

## Copy content between datasets

From this folder:

```bash
pnpm run dataset:copy:dev-to-prod
```

To copy in the opposite direction:

```bash
pnpm run dataset:copy:prod-to-dev
```

## Frontend preview deployment

Set frontend preview deployment env vars:

- `SANITY_DATASET=production`
- `SANITY_PREVIEW_DEPLOY=true`
- `SANITY_API_READ_TOKEN=<read-token-with-viewer-access>`
