import { createClient } from '@sanity/client'

export type SanityConfig = {
  projectId: string
  dataset: string
  apiVersion: string
  useCdn: boolean
}

export function getSanityConfig(): SanityConfig | null {
  const projectId = import.meta.env.SANITY_PROJECT_ID
  const dataset = import.meta.env.SANITY_DATASET
  const apiVersion = import.meta.env.SANITY_API_VERSION
  const useCdn = (import.meta.env.SANITY_USE_CDN ?? 'true') === 'true'

  if (!projectId || !dataset || !apiVersion) return null
  return { projectId, dataset, apiVersion, useCdn }
}

const isPreviewDeploy =
  (import.meta.env.SANITY_PREVIEW_DEPLOY ?? import.meta.env.SANITY_PREVIEW ?? 'false') === 'true'

export function getSanity() {
  const sanityConfig = getSanityConfig()
  if (!sanityConfig) return null

  const token = import.meta.env.SANITY_API_READ_TOKEN
  const previewEnabled = Boolean(token) && isPreviewDeploy

  return createClient({
    ...sanityConfig,
    useCdn: previewEnabled ? false : sanityConfig.useCdn,
    perspective: previewEnabled ? 'previewDrafts' : 'published',
    stega: previewEnabled,
    token: previewEnabled ? token : undefined,
  })
}

export const sanity = getSanity()
