import { blockContent } from './objects/blockContent'
import { figure } from './objects/figure'
import { videoEmbed } from './objects/videoEmbed'

import { aboutPage } from './documents/aboutPage'
import { contactPage } from './documents/contactPage'
import { homePage } from './documents/homePage'
import { project } from './documents/project'
import { projectsPage } from './documents/projectsPage'
import { siteSettings } from './documents/siteSettings'

export const schemaTypes = [
  blockContent,
  figure,
  videoEmbed,
  homePage,
  aboutPage,
  projectsPage,
  contactPage,
  project,
  siteSettings,
]
