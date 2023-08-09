import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

const builder = imageUrlBuilder(client);

export default function TrendingImage({ trendingPosts=[] }: { trendingPosts : SanityDocument[]}) {

  const randomPost = trendingPosts.sort(() => Math.random() - 0.5)[0];

  return (
    <div className="mx-auto relative px-2 lg:px-0">
      <div className="overflow-hidden">
      <img
          src={builder.image(randomPost.mainImage).url()}
          className=" w-full hover:scale-110 hover:rotate-3 hover:duration-[3000ms] hover:transition"
        ></img>
      </div>
      <div className="absolute bottom-0 pb-5 pl-5 text-primary-1">
        <Link href={`/category/${String(randomPost.primaryCategory).toLowerCase()}`}>
          <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">
            {randomPost.primaryCategory}
          </span>
        </Link>
        <Link href={`/${randomPost.slug.current}`}>
          <h1 className="text-2xl font-bold font-sans line-clamp-2">{randomPost.title}</h1>
        </Link>
        <p className="text-xs font-sans">{new Date(randomPost.publishedAt).toLocaleDateString(
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