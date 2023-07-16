import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

const builder = imageUrlBuilder(client);

export default function TrendingImage({ trendingPosts=[] }: { trendingPosts : SanityDocument[]}) {

  const randomPost = trendingPosts.sort(() => Math.random() - 0.5)[0];

  return (
    <div className="mx-auto relative">
      <div className="overflow-hidden">
      <img
          src={builder.image(randomPost.mainImage).url()}
          className=" w-full hover:scale-110 hover:rotate-3 hover:duration-[3000ms] hover:transition"
        ></img>
      </div>
      <div className="absolute top-0 pt-5 left-4 text-primary-1">
        <Link href={`/blog/category/${String(randomPost.category).toLowerCase()}`}>
          <span className="text-[10px] py-1 bg-primary-3 font-sans uppercase">
            {randomPost.category}
          </span>
        </Link>
        <Link href={`/blog/${randomPost.slug.current}`}>
          <h1 className="text-2xl font-bold font-sans line-clamp-2">{randomPost.title}</h1>
        </Link>
        <p className="text-xs font-sans">by {randomPost.author} | {new Date(randomPost.publishedAt).toLocaleDateString(
            "en-US",{
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}</p>
      </div>
    </div>
  );
};