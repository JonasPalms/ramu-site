import { defineArrayMember, defineField, defineType } from 'sanity'
import { supportedLanguages, baseLanguage } from '../localization'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
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
      initialValue: 'About',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object' as const,
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array' as const,
      of: [
        defineArrayMember({
          type: 'object' as const,
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Education title (for example: BA Journalism).',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              description: 'School or institution.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'period',
              title: 'Period',
              type: 'string',
              description: 'Optional, for example: 2016-2019.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array' as const,
      of: [
        defineArrayMember({
          type: 'object' as const,
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Job title.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              description: 'Workplace or company.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'period',
              title: 'Period',
              type: 'string',
              description: 'Optional, for example: 2021-present.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait image',
      type: 'figure',
    }),
  ],
})
