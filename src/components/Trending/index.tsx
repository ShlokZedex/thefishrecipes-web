import React from "react";
import TrendingCarousel from "./TrendingCarousel";
import TrendingBlogs from "./TrendingBlogs";
import TrendingImage from "./TrendingImage";

const Trending = () => {
  return (
    <>
      <div className=" bg-primary-1">
        <div className="container mx-auto h-auto">
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-0">
            <h1 className="text-xl font-extrabold mb-5 ">Trending Posts</h1>
            <div className="my-auto">
              <ul className="flex gap-6 uppercase text-[10px] text-gray-400 mb-6 lg:mb-0 px-3">
                <li>All</li>
                <li>Travel</li>
                <li>Food</li>
                <li>Lifestyle</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center">
            <TrendingCarousel />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid row  w-full">
                <TrendingBlogs />
                <TrendingImage />
            </div>     
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
