import imageUrlBuilder from '@sanity/image-url'
import { getSanityConfig } from './sanity'

export function urlForImage(source: unknown) {
  const config = getSanityConfig()
  if (!config) return null
  const builder = imageUrlBuilder({ projectId: config.projectId, dataset: config.dataset })
  return builder.image(source)
}
