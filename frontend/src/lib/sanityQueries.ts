import { defineQuery } from 'groq'

export const allPageSlugsQuery = defineQuery(
  `*[_type == "page" && defined(slug.current)]{ "slug": slug.current }`,
)
export const pageBySlugQuery = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  seo{metaTitle, metaDescription},
  content
}`)

export const allProjectSlugsQuery = defineQuery(
  `*[_type == "project" && defined(slug.current)]{ "slug": slug.current }`,
)
export const projectsIndexQuery = defineQuery(`*[_type == "project"]|order(year desc, title asc){
  title,
  "slug": slug.current,
  year,
  hero
}`)
export const projectBySlugQuery = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  year,
  hero,
  video,
  body
}`)

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  title,
  themePreset,
  "homeSlug": homePage->slug.current,
  navigation[]{
    label,
    "pageSlug": page->slug.current,
    externalUrl
  },
  social[]{label, url}
}`)
