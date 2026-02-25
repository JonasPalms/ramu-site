import { defineArrayMember, defineField, defineType } from 'sanity'
import { supportedLanguages, baseLanguage } from '../localization'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      initialValue: baseLanguage,
      options: {
        list: supportedLanguages.map((language) => ({
          title: language.title,
          value: language.id,
        })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Ramu',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Freelance director and video journalist',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'array' as const,
      name: 'featuredProjects',
      title: 'Featured projects',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
      validation: (Rule) => Rule.max(9).unique(),
      description: 'Used in the 3x3 hero grid. Max 9.',
    }),
  ],
})
