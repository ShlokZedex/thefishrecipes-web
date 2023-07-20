"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

export default function Category({ postsByCategory = [] , heading }: { postsByCategory: SanityDocument[] ,heading?: string }) {

  return (
    <main className="container mx-auto">
      <div>
      <p className="text-center text-4xl font-bold uppercase text-primary-3 pt-6">{heading ? heading : postsByCategory[0]?.category} Blogs</p>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 w-full mx-auto my-6">
        <div className="h-auto w-full m-auto px-4 lg:px-0 lg:pr-4 group">
          {postsByCategory.map((post) => (
            <div key={post._id} className="break-inside-avoid mb-5">
              <div className="overflow-hidden">
                <Image
                  src={builder.image(post.mainImage).url()}
                  alt={post?.mainImage?.alt}
                  className="w-full hover:scale-110 hover:rotate-3 hover:duration-[3000ms]  hover:transition"
                  width={500}
                  height={150}
                />
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase my-12 text-red-500">
                  {post.category}
                </span>
                <Link href={`/blog/${post.slug.current}`}>
                  <h1 className="text-2xl font-bold font-sans hover:text-primary-3 cursor-pointer">{post.title}</h1>
                </Link>
                <p className="text-xs font-sans">3 days ago | by {post.author}</p>
                <div className="text-sm font-sans font-medium pt-4 text-gray-500 line-clamp-3">
                  {post?.body ? <PortableText value={post.body} /> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
}