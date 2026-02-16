import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
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
      name: 'featuredProjects',
      title: 'Featured projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (Rule) => Rule.max(9),
      description: 'Used in the 3x3 hero grid. Max 9.',
    }),
  ],
})
