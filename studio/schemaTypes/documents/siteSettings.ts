import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({name: 'title', title: 'Site title', type: 'string'}),
    defineField({
      name: 'homePage',
      title: 'Home page',
      type: 'reference',
      to: [{type: 'page'}],
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        defineField({
          name: 'navItem',
          title: 'Nav item',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'page',
              title: 'Page',
              type: 'reference',
              to: [{type: 'page'}],
            }),
            defineField({
              name: 'externalUrl',
              title: 'External URL',
              type: 'url',
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'externalUrl'},
          },
        }),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social link',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'url', title: 'URL', type: 'url', validation: (Rule) => Rule.required()}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'url'},
          },
        }),
      ],
    }),
  ],
})
