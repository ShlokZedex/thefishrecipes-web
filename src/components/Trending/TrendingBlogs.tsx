import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";

export default function TrendingBlogs({ trendingPosts=[] }: { trendingPosts : SanityDocument[]}) {
  return (
    <div className="mx-auto w-full flex flex-col gap-4 px-4">
      {trendingPosts.map((post)=>(
        <div key={post._id}>
          <Link href={`/category/${String(post.primaryCategory).trim().toLowerCase().replace(' ','-')}`}>
            <span className="text-[10px] py-1 text-primary-3 font-sans uppercase my-12">
              {post.primaryCategory}
            </span>
          </Link>
          <Link href={`/${post.slug.current}`}>
            <h1 className="text-base font-sans hover:text-primary-3 line-clamp-3">{post.title}</h1>
          </Link>
          <p className="text-xs font-sans text-gray-400">{new Date(post.publishedAt).toLocaleDateString(
            "en-US",{
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}</p>
        </div>
      ))}
    </div>
  );
};

