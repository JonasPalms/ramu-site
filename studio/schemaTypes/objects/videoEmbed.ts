import {defineField, defineType} from 'sanity'

export const videoEmbed = defineType({
  name: 'videoEmbed',
  title: 'Video embed',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube/Vimeo link (or any embeddable URL)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'url'},
  },
})

