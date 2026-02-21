import { defineQuery } from 'groq'

export const homePageQuery = defineQuery(`coalesce(
  *[_type == "homePage"][0]{
    title,
    subtitle,
    featuredProjects[]->{
      title,
      "slug": slug.current,
      hero
    }
  },
  *[_type == "page" && slug.current == "home"][0]{
    title,
    "subtitle": "Freelance director and video journalist"
  }
)`)

export const aboutPageQuery = defineQuery(`coalesce(
  *[_type == "aboutPage"][0]{
    title,
    seo{metaTitle, metaDescription},
    content,
    portrait
  },
  *[_type == "page" && slug.current == "about"][0]{
    title,
    seo{metaTitle, metaDescription},
    content,
    portrait
  }
)`)

export const projectsPageQuery = defineQuery(`coalesce(
  *[_type == "projectsPage"][0]{
    title,
    seo{metaTitle, metaDescription},
    "intro": intro
  },
  {
    "title": "Projects",
    "seo": {
      "metaTitle": "Projects",
      "metaDescription": "Selected projects and films."
    },
    "intro": []
  }
)`)

export const contactPageQuery = defineQuery(`coalesce(
  *[_type == "contactPage"][0]{
    title,
    seo{metaTitle, metaDescription},
    content
  },
  *[_type == "page" && slug.current == "contact"][0]{
    title,
    seo{metaTitle, metaDescription},
    content
  }
)`)

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
  navigation[]{
    label,
    route,
    "pageSlug": coalesce(route, page->slug.current),
    externalUrl
  },
  social[]{label, url}
}`)
