import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, body , mainImage ,"author" : author->name, "category" :categories[]->title,"primaryCategory" : primaryCategory->title ,publishedAt,
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,title, mainImage, body,"author":author->name, publishedAt, "category":categories[]->title,"primaryCategory" : primaryCategory->title , createdAt,"tags":tags[]->label,metadata
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
  _id, title, slug, body, mainImage, "author": author->name, "category": categories[]->title,"primaryCategory" : primaryCategory->title , publishedAt,
}`;

// Get all author slugs
export const authorsPathsQuery = groq`*[_type == "author" && defined(slug.current)][]{
  "params": { "slug": slug.current }
  }`;

// Get all posts of a particular author by slug
export const postsByAuthorQuery = groq`*[_type == "post" && references(*[_type == "author" && slug.current == $slug]._id)]{
  _id, title, slug, body, mainImage, "author": author->name, "category": categories[]->title, "primaryCategory" : primaryCategory->title , publishedAt,
}`;

// Get all tags slugs
export const tagsPathsQuery = groq`*[_type == "tag" && defined(slug.current)][]{
  "params": { "slug": slug.current }
  }`;

// Get all posts of a particular tag by slug
export const postsByTagQuery = groq`*[_type == "post" && references(*[_type == "tag" && slug.current == $slug]._id)]{
  _id, title, slug, body, mainImage, "author": author->name, "category": categories[]->title, publishedAt, "tag":tags[]->label,"primaryCategory" : primaryCategory->title ,
}`;


// Get all trending posts
export const trendingPostsQuery = groq`*[_type == "post" && defined(slug.current) && trending == true]{
  _id, title, slug, body, mainImage, "author": author->name, "category": categories[]->title, publishedAt,"primaryCategory" : primaryCategory->title ,
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
  "category": categories[]->title,
  publishedAt,
  "primaryCategory" : primaryCategory->title ,
}`;


// Site Config query 
export const siteConfigQuery = groq`*[_type == "siteConfig"][0]{
  title,description, mainLogo,
}`
