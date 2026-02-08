import groq from 'groq'

export const allPageSlugsQuery = groq`*[_type == "page" && defined(slug.current)]{ "slug": slug.current }`
export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  seo{metaTitle, metaDescription},
  content
}`

export const allProjectSlugsQuery = groq`*[_type == "project" && defined(slug.current)]{ "slug": slug.current }`
export const projectsIndexQuery = groq`*[_type == "project"]|order(year desc, title asc){
  title,
  "slug": slug.current,
  year,
  hero
}`
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  year,
  hero,
  video,
  body
}`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  "homeSlug": homePage->slug.current,
  navigation[]{
    label,
    "pageSlug": page->slug.current,
    externalUrl
  },
  social[]{label, url}
}`
