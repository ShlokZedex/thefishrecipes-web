import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',

    }),

    defineField({
      name: 'canonicalurl',
      title: 'Canonical Url',
      type: 'url',
    }),
  ],
})


