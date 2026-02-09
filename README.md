# Ramu Site

Static Astro site that fetches published content from Sanity. Two workspaces:

- **frontend/** — Astro app (pages, components, Sanity client)
- **studio/** — Sanity Studio (schemas + editor UI), can be hosted separately

Global config (Prettier, README) lives in the repo root.

## Setup

1. Install dependencies (root installs all workspaces):

```sh
npm install
```

2. Add env vars. For the frontend, create `frontend/.env` (or root `.env` if you prefer) with `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`. For Studio, see `studio/README.md` and `studio/.env`.

3. Run the Astro dev server:

```sh
npm run dev
```

4. Run Sanity Studio (optional):

```sh
npm run studio
```

## Deploy (Vercel)

- Build from root: set Vercel build command to `npm run build` (runs `build` in `frontend`).
- Set `SANITY_*` env vars in Vercel.
- Add a Sanity webhook (Deploy Hook) so the site rebuilds on publish.

## Content model

- `page` → `frontend/src/pages/[slug].astro` (slug `home` → `/`)
- `project` → `frontend/src/pages/work/[slug].astro` and listing at `/work`
- `siteSettings` → optional singleton for nav + home page

## Sanity Studio

- Schemas: `studio/schemaTypes/`
- See `studio/README.md` for Studio setup and deploy.
