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

const sanityConfig = getSanityConfig()

export const sanity =
  sanityConfig &&
  createClient({
    ...sanityConfig,
    perspective: 'published',
    stega: false,
  })
