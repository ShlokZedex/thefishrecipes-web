import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Source is the incoming request path pattern'
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'string',
      description:'Destination is the path we want to route to'
    }),
  ],
  });