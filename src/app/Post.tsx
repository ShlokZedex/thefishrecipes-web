"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";
import Social from "@/components/Latest/Social";
import Categories from "@/components/Latest/Categories";
import Join from "@/components/Join";
import LatestPosts from "@/components/LatestPosts";
import Stories from "@/components/Latest/Stories";
import Link from "next/link";

const builder = imageUrlBuilder(client);

interface ImageProps {
  value?: {
    asset?: {
      _ref?: string;
    };
    alt?: string;
  };
}

const ImageComponent: React.FC<ImageProps> = ({ value }) => {
  if (!value?.asset?._ref) {
    return null;
  }
  return (
    <Image
      className="inline-block"
      alt={value.alt || " "}
      loading="lazy"
      src={builder.image(value).url()}
      width={320}
      height={200}
    />
  );
};

const ptComponents = {
  types: {
    image: ImageComponent,
  },
};

interface PostProps {
  post: SanityDocument;
  categories: SanityDocument[];
  latestPosts: SanityDocument[];
}

const Post: React.FC<PostProps> = ({ post, categories = [], latestPosts = [] }) => {
  return (
    <main className="container mx-auto my-8">
      <div className="flex flex-col lg:flex-row gap-10 mx-2 md:mx-0">
        <div className="w-full lg:w-2/3">
          <div className="mb-5">
            {post?.mainImage ? (
              <Image
                className="w-full h-[358px]"
                src={builder.image(post.mainImage).width(300).height(300).url()}
                width={300}
                height={300}
                alt={post?.mainImage?.alt}
              />
            ) : null}
          </div>
          <Link href={`/category/${String(post.primaryCategory).trim().toLowerCase().replace(' ','-')}`}><h1 className="text-sm text-primary-3">{post.primaryCategory}</h1></Link>
          <h1 className="text-2xl font-extrabold">{post.title}</h1>
          <div className="prose">
            {post?.body ? <PortableText value={post.body} components={ptComponents} /> : null}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="my-4">
              <h3 className="text-sm text-primary-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <Link key={index} href={`/tag/${String(tag).trim().toLowerCase().replace(' ','-')}`}>
                  <span className="inline-block bg-primary-3 text-white px-2 py-1 rounded">
                    {tag}
                  </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/3">
          <div className="flex flex-col gap-5">
            <Social />
            <Categories categories={categories} />
            <Join />
            <LatestPosts />
            <Stories latestPosts={latestPosts} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
