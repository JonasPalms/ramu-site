import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { documentInternationalization } from '@sanity/document-internationalization'

import { schemaTypes } from './schemaTypes'
import { supportedLanguages } from './schemaTypes/localization'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'Ramu Studio',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: import.meta.env.SANITY_STUDIO_DATASET || 'development',

  plugins: [
    structureTool({ structure }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: supportedLanguages.map((language) => ({
        id: language.id,
        title: language.title,
      })),
      schemaTypes: ['homePage', 'aboutPage', 'projectsPage', 'contactPage', 'project'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
