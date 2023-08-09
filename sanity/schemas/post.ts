import { defineField, defineType,ValidationContext, Rule } from 'sanity';
import { cachedClient } from '../lib/client';

// Custom function to check if a post with the same slug exists
async function isSlugUnique(slug: string | undefined, context: ValidationContext): Promise<boolean> {
  if (!slug) {
    return true; // Return true if slug is undefined
  }
  const existingPosts = await cachedClient(`*[_type == "post" && slug.current == $slug]{_id}`, { slug });
  return existingPosts.length === 0;
}

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'metadata',
      type: 'metadata',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule =>
        Rule.custom(async (slug, context) => {
          const isUnique = await isSlugUnique(slug?.current, context);
          if (!isUnique) {
            return 'This slug is already in use.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),    
    defineField({
      name: 'primaryCategory',
      title: 'Primary Category',
      type: 'reference',
      to: { type: 'category' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'trending',
      title: 'Trending',
      type: 'boolean',
      description: 'Check this box if the post is trending',
      initialValue: () => false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
