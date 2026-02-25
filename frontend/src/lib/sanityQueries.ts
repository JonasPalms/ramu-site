import { defineQuery } from 'groq'

export const homePageQuery = defineQuery(`coalesce(
  *[_type == "homePage" && coalesce(language, $baseLanguage) == $language][0]{
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
  *[_type == "aboutPage" && coalesce(language, $baseLanguage) == $language][0]{
    title,
    seo{metaTitle, metaDescription},
    content,
    education[]{_key, title, subtitle, period},
    experience[]{_key, title, subtitle, period},
    portrait
  },
  *[_type == "page" && slug.current == "about"][0]{
    title,
    seo{metaTitle, metaDescription},
    content,
    "education": [],
    "experience": [],
    portrait
  }
)`)

export const projectsPageQuery = defineQuery(`coalesce(
  *[_type == "projectsPage" && coalesce(language, $baseLanguage) == $language][0]{
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
  *[_type == "contactPage" && coalesce(language, $baseLanguage) == $language][0]{
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
  `*[_type == "project" && defined(slug.current) && coalesce(language, $baseLanguage) == $language]{ "slug": slug.current }`,
)
export const projectsIndexQuery =
  defineQuery(`*[_type == "project" && coalesce(language, $baseLanguage) == $language]|order(year desc, title asc){
  title,
  "slug": slug.current,
  year,
  projectTypes,
  hero
}`)
export const projectBySlugQuery =
  defineQuery(`*[_type == "project" && slug.current == $slug && coalesce(language, $baseLanguage) == $language][0]{
  title,
  "slug": slug.current,
  year,
  projectTypes,
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
