import { defineArrayMember, defineField, defineType } from 'sanity'
import { supportedLanguages, baseLanguage } from '../localization'

export const project = defineType({
  name: 'project',
  title: 'Project',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'projectTypes',
      title: 'Project types',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Documentary', value: 'documentary' },
          { title: 'Short film', value: 'shortFilm' },
          { title: 'Article', value: 'article' },
          { title: 'Social media', value: 'socialMedia' },
        ],
      },
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero image',
      type: 'figure',
    }),
    defineField({
      name: 'video',
      title: 'Video embed',
      type: 'videoEmbed',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  orderings: [
    {
      title: 'Year (desc)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
    {
      title: 'Title (A–Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', media: 'hero.image', subtitle: 'year' },
  },
})
