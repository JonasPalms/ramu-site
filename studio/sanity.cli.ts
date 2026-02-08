import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID. Create studio/.env (see studio/.env.example) or set it in your shell.',
  )
}

export default defineCliConfig({
  api: {
    projectId,
    dataset: process.env.SANITY_STUDIO_DATASET || 'development',
  },
})
