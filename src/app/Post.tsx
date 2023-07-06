"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";
import Social from "@/components/Latest/Social";
import Categories from "@/components/Latest/Categories";
import Join from "@/components/Join";
import Latest from "@/components/Latest";
import LatestPosts from "@/components/LatestPosts";
import Stories from "@/components/Latest/Stories";

const builder = imageUrlBuilder(client);

export default function Post({ post, categories=[] }: { post: SanityDocument, categories:SanityDocument[] }) {
  return (
    <main className="container mx-auto my-8">
      <div className="flex flex-col lg:flex-row gap-5 mx-2 md:mx-0">
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
          <h3 className="text-sm text-primary-3 ">{post.category}</h3>
          <h1 className="text-xl font-bold">{post.title}</h1>
          <div className="">
            {post?.body ? <PortableText value={post.body} /> : null}
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="flex flex-col gap-5">
            <Social />
            <Categories categories={categories} /> 
            <Join />
            <LatestPosts />
            <Stories />
          </div>
        </div>
      </div>
    </main>
  );
}
