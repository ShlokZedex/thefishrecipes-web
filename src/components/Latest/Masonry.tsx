import React from "react";
import Image from 'next/image'
import { SanityDocument } from "next-sanity";
import { builder } from "../MainBlogs";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function Masonry({ latestPosts = [] }: { latestPosts: SanityDocument[] }) {
  return (
    <div className="container mx-auto">
      <h1 className='mb-4 text-lg font-bold'>Latest Posts</h1>
      <div className="columns-1 md:columns-2 gap-3 w-full mx-auto">
        <div className="h-auto w-full m-auto px-4 lg:px-0 lg:pr-4 group">
          {latestPosts.slice(0,6).map((post) => (
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
                <Link href={`/blog/category/${String(post.category).toLowerCase()}`}>
                  <span className="text-[10px] font-sans uppercase my-12 text-red-500">
                    {post.category}
                  </span>
                </Link>
                <Link href={`/blog/${post.slug.current}`}>
                  <h1 className="text-2xl font-bold font-sans hover:text-primary-3 cursor-pointer">{post.title}</h1>
                </Link>
                <p className="text-xs font-sans"> Date comes here | by {post.author}</p>
                <div className="text-sm font-sans font-medium pt-4 text-gray-500 line-clamp-3">
                  {post?.body ? <PortableText value={post.body} /> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href={`/blog/all`} ><button className='bg-primary-1 flex justify-center mx-auto border border-gray-300 text-primary-3 py-4 px-14 mt-7 uppercase text-xs  hover:bg-primary-3 hover:text-primary-1'>Load More</button></Link>
    </div>
  );
};
