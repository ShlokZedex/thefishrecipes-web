import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, body , mainImage ,"author" : author->name, "category" :categories[]->title,publishedAt
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,title, mainImage, body,"author":author->name, publishedAt, "categories":categories[]->title, createdAt,"tags":tags[]->label
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all categories
export const categoriesQuery = groq`*[_type=="category"]{
  _id, title,slug,"numberOfBlogs": count(*[_type=="post" && references(^._id)])
}`;

// Get all category slugs
export const categoriesPathsQuery = groq`*[_type == "category" && defined(slug.current)][]{
"params": { "slug": slug.current }
}`;

// Get a single category by its slug
export const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0]{ 
  _id, title,slug
}`;

// Get all posts of a particular category by slug
export const postsByCategoryQuery = groq`*[_type == "post" && references(*[_type == "category" && slug.current == $slug]._id)]{
  _id, title, slug, body, mainImage, "author": author->name, "category": categories[]->title, publishedAt,
}`;

// Get all trending posts
export const trendingPostsQuery = groq`*[_type == "post" && defined(slug.current) && trending == true]{
  _id, title, slug, body, mainImage, "author": author->name, "category": categories[]->title, publishedAt,
}`;

// Get all Latest posts
export const LatestPostsQuery = groq`*[_type == "post" && defined(slug.current)]
| order(publishedAt desc)
{
  _id,
  title,
  slug,
  body,
  mainImage,
  "author": author->name,
  "category": categories[]->title
}`;

