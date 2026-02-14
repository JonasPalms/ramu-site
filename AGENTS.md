# AGENTS.md

Guidance for coding agents working in `ramu-site`.

## 1) Repository shape

- Monorepo with npm workspaces.
- `frontend/`: Astro 5 static site, Tailwind CSS 4, Sanity content fetching.
- `studio/`: Sanity Studio 3 schemas and editor app.
- Root owns shared tooling (Prettier) and convenience scripts.

## 2) Source of truth for rules

- Checked for Cursor rules in `.cursor/rules/`: none found.
- Checked for `.cursorrules`: none found.
- Checked for Copilot instructions in `.github/copilot-instructions.md`: none found.
- Therefore, this file is the active agent instruction set for this repo.

## 3) Setup and install

- Install dependencies from root:
- `npm install`
- Requires Node/npm compatible with Astro 5 and Sanity 3.
- Frontend env vars used by Sanity client:
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION`
- Optional frontend env var:
- `SANITY_USE_CDN` (`true` by default).

## 4) Build, dev, lint, format, test commands

### Root commands

- Start frontend dev server:
- `npm run dev`
- Build frontend:
- `npm run build`
- Preview frontend build:
- `npm run preview`
- Run Sanity Studio dev server:
- `npm run studio`
- Format all files:
- `npm run format`
- Check formatting only:
- `npm run format:check`

### Workspace-specific commands

- Frontend dev:
- `npm run dev -w frontend`
- Frontend build:
- `npm run build -w frontend`
- Frontend preview:
- `npm run preview -w frontend`
- Astro CLI passthrough:
- `npm run astro -w frontend -- <args>`
- Studio dev:
- `npm run dev -w studio`
- Studio build:
- `npm run build -w studio`
- Studio deploy:
- `npm run deploy -w studio`
- Studio GraphQL deploy:
- `npm run deploy-graphql -w studio`
- Studio schema extract:
- `npm run schema:extract -w studio`
- Studio typegen:
- `npm run typegen -w studio`
- Studio schema+typegen:
- `npm run typegen:all -w studio`

### Lint / type-check status

- No dedicated ESLint script is currently configured.
- No dedicated test runner is currently configured.
- Use build as the primary safety check in this repo.
- Optional Astro diagnostics:
- `npm run astro -w frontend -- check`

### Test commands (current and future)

- Current state: no test scripts in root/frontend/studio `package.json`.
- If tests are added later, expose them as:
- `npm run test -w frontend`
- Single test file (recommended future pattern):
- `npm run test -w frontend -- path/to/test-file.test.ts`
- Single test by name (recommended future pattern):
- `npm run test -w frontend -- -t "test name"`
- Until then, do not claim tests were run; report that tests are not configured.

## 5) Code style and formatting

- Formatter: Prettier (root `prettier.config.mjs`).
- `printWidth: 100`.
- `singleQuote: true`.
- `semi: false`.
- `trailingComma: all`.
- `prettier-plugin-astro` enabled.
- `*.astro` uses Astro parser override.
- Run `npm run format` after meaningful edits.

## 6) TypeScript and typing expectations

- Frontend TS config extends `astro/tsconfigs/strict`.
- Studio TS config has `strict: true`.
- Prefer explicit prop types in Astro frontmatter.
- Prefer narrow unions and reusable `type` aliases for component props.
- Avoid `any`; if used for external data, keep it local and constrained.
- Sanity responses should be typed where practical.
- Keep null checks explicit when env/config-driven values may be absent.

## 7) Imports and module conventions

- In frontend, prefer alias imports from `@/` for `src/*` paths.
- In studio, use relative imports between schema modules.
- Group imports by purpose; keep order stable and readable.
- Avoid unused imports and dead exports.
- Do not introduce CommonJS syntax.

## 8) Naming conventions

- Components: PascalCase filenames (`BaseLayout.astro`, `Card.astro`).
- Utility modules: camelCase filenames (`sanityImage.ts`, `slugify.ts`).
- Sanity schema objects/documents: lower camelCase identifiers (`siteSettings`, `blockContent`).
- Query constants: descriptive camelCase with `Query` suffix.
- CSS custom properties: `--site-*` token naming pattern.

## 9) Astro and UI patterns

- Keep page shells in `frontend/src/pages` minimal; push reusable UI into components.
- Use `BaseLayout.astro` for global CSS and document metadata wiring.
- Reuse existing UI primitives (`Button`, `Card`, `Container`) when possible.
- Prefer semantic HTML structure before styling concerns.
- Respect responsive behavior for mobile and desktop.

## 10) Visual design constraints for this project

- Do not use background gradients.
- Prefer solid background colors from theme tokens.
- Preserve the existing visual language and token system.
- Avoid introducing new font families unless requested.
- Keep motion subtle and optional (`prefers-reduced-motion` aware).

## 11) CSS and theming

- Global styles live in `frontend/src/styles/`.
- Theme tokens are defined in `themes.css` and mapped in `global.css`.
- Prefer token-driven Tailwind classes (`bg-surface`, `text-muted`, etc.).
- Avoid hardcoded hex values in component markup when token exists.
- Keep component-scoped CSS small and purposeful.

## 12) Sanity content and querying

- Frontend Sanity client is optional; handle null client gracefully.
- Keep GROQ queries in `frontend/src/lib/sanityQueries.ts`.
- Fetch only needed fields.
- For image URLs, use `urlForImage` helper.
- In Studio, define fields with validation where required.

## 13) Error handling and resilience

- Prefer safe fallbacks for missing CMS content.
- Guard against absent env vars and null fetch results.
- Do not throw on expected content gaps in static pages.
- Keep user-facing output stable even when optional data is missing.

## 14) Git and change hygiene for agents

- Keep edits scoped to the request.
- Do not revert unrelated working tree changes.
- Do not add headers/licenses unless asked.
- Do not commit unless explicitly requested.
- If running checks, report exactly what was run and result.

## 15) Definition of done for most changes

- Code follows the conventions in this file.
- Formatting passes (`npm run format:check`) or files are formatted.
- Frontend build passes (`npm run build -w frontend`) for UI changes.
- Any unrun checks are clearly called out in handoff.
