import { defineField, defineType } from 'sanity'

export const projectsPage = defineType({
  name: 'projectsPage',
  title: 'Projects page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Projects',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro content',
      type: 'blockContent',
    }),
  ],
})
