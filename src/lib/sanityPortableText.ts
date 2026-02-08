import {toHTML} from '@portabletext/to-html'
import {urlForImage} from './sanityImage'

export function portableTextToHtml(value: unknown): string {
  if (!value) return ''

  return toHTML(value as any, {
    components: {
      types: {
        figure: ({value}: any) => {
          const img = value?.image
          const alt = value?.alt || ''
          const caption = value?.caption

          const url = urlForImage(img)?.width(1600).fit('max').auto('format').url()
          if (!url) return ''

          const figcaption = caption ? `<figcaption>${escapeHtml(String(caption))}</figcaption>` : ''
          return `<figure><img src="${escapeAttr(url)}" alt="${escapeAttr(alt)}" loading="lazy" />${figcaption}</figure>`
        },
        videoEmbed: ({value}: any) => {
          const url = value?.url
          if (!url) return ''
          return `<p><a href="${escapeAttr(String(url))}" rel="noopener noreferrer">${escapeHtml(String(value?.title || url))}</a></p>`
        },
      },
      marks: {
        link: ({value, children}: any) => {
          const href = value?.href
          if (!href) return children
          const blank = value?.blank !== false
          const target = blank ? ' target="_blank" rel="noopener noreferrer"' : ''
          return `<a href="${escapeAttr(String(href))}"${target}>${children}</a>`
        },
      },
    },
  })
}

function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function escapeAttr(input: string): string {
  return escapeHtml(input)
}

