import { defineCliConfig, getStudioEnvironmentVariables } from 'sanity/cli'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const envDir = path.dirname(fileURLToPath(import.meta.url))
const mode =
  process.env.SANITY_ACTIVE_ENV ||
  (process.env.NODE_ENV === 'production' ? 'production' : 'development')

const env = getStudioEnvironmentVariables({
  envFile: {
    mode,
    envDir,
  },
})

const projectId = env.SANITY_STUDIO_PROJECT_ID
if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID. Create studio/.env (see studio/.env.example) or set it in your shell.',
  )
}

export default defineCliConfig({
  api: {
    projectId,
    dataset: env.SANITY_STUDIO_DATASET || 'development',
  },
})
