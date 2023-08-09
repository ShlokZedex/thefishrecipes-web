import React from "react";
import TrendingCarousel from "./TrendingCarousel";
import TrendingBlogs from "./TrendingBlogs";
import TrendingImage from "./TrendingImage";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

export default function Trending({ trendingPosts=[], categories = [] }: { trendingPosts : SanityDocument[] , categories : SanityDocument[] }) {
  return (
    <>
      <div className=" bg-primary-1">
        <div className="container mx-auto h-auto">
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-0">
            <h1 className="text-xl font-extrabold mb-5 ">Trending Posts</h1>
            <div className="my-auto">
              <ul className="flex gap-6 uppercase text-xs text-gray-400 mb-6 lg:mb-0 px-3">
                <Link href={`blog/all`} ><li className="hover:text-primary-3 cursor-pointer">All</li></Link>
                {categories.map((category)=> (
                  <Link href={`/category/${category.slug.current}`} key={category._id}>
                  <li className="hover:text-primary-3 cursor-pointer">{category.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-0">
            <TrendingCarousel trendingPosts={trendingPosts}/>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid row w-full gap-5 md:gap-0">
                <TrendingBlogs trendingPosts={trendingPosts} />
                <TrendingImage trendingPosts={trendingPosts}/>
            </div>     
          </div>
        </div>
      </div>
    </>
  );
};

