import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site title', type: 'string' }),
    defineField({
      name: 'themePreset',
      title: 'Theme preset',
      type: 'string',
      initialValue: 'sandGreen',
      options: {
        list: [
          { title: 'Sand + Green', value: 'sandGreen' },
          { title: 'Ink + Sand', value: 'inkSand' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
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
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'route',
              title: 'Internal route',
              type: 'string',
              options: {
                list: [
                  { title: 'Projects', value: 'projects' },
                  { title: 'About', value: 'about' },
                  { title: 'Contact', value: 'contact' },
                ],
                layout: 'dropdown',
              },
            }),
            defineField({
              name: 'externalUrl',
              title: 'External URL',
              type: 'url',
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'externalUrl' },
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
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        }),
      ],
    }),
  ],
})
