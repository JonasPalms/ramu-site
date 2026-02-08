# Astro + Sanity (Headless, Static)

Static Astro site that fetches published content from Sanity. The Sanity Studio (schemas + editor UI) lives in `studio/` and can be hosted separately.

## Setup

1. Install root deps:

```sh
npm install
```

2. Add env vars:

```sh
cp .env.example .env
```

Fill in `SANITY_PROJECT_ID` / `SANITY_DATASET` / `SANITY_API_VERSION`.
Recommended:

- Local Studio uses `development`
- Vercel builds use `production`

3. Run Astro:

```sh
npm run dev
```

## Deploy (Vercel)

- Set the same `SANITY_*` env vars in Vercel.
- Create a Vercel “Deploy Hook”, then add it as a webhook in Sanity (trigger on publish) so the static site rebuilds on content changes.

## Content model

- `page` → `src/pages/[slug].astro` (slug `home` is used for `/`)
- `project` → `src/pages/work/[slug].astro` and listing at `/work`
- `siteSettings` → optional singleton for nav + which page is “home”

## Sanity Studio

- Schemas/models are in code under `studio/schemaTypes/`.
- See `studio/README.md` for Studio setup and deploy notes.
