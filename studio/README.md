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
- The Astro site can stay fully static and only fetch published content.
- For the deployed Studio that editors use, set `SANITY_STUDIO_DATASET=production`.
