"use client"

import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { SanityDocument } from "next-sanity";

const scrollLeft = (scrollDistance : number) => {
  const contentElement = document.getElementById("content");
  if (contentElement !== null) {
    contentElement.scrollLeft -= scrollDistance;
  }
};

const scrollRight = (scrollDistance : number) => {
  const contentElement = document.getElementById("content");
  if (contentElement !== null) {
    contentElement.scrollLeft += scrollDistance;
  }
};

export default function AnotherSlider({ posts = [] }: { posts: SanityDocument[] }) {
  const [scrollDistance, setScrollDistance] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1200) {
        setScrollDistance(1200);
      } else if (windowWidth >= 1000) {
        setScrollDistance(800);
      } else if (windowWidth >= 768) {
        setScrollDistance(800);
      } else {
        setScrollDistance(400);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight(scrollDistance);
    }, 10000); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, [scrollDistance]);

  return (
    <div className="bg-gray-800">
      <div className="container mx-auto relative">
        <div className="h-auto py-12 px-4 text-center text-primary-1">
          <h1 className="text-lg font-bold font-sans mb-5">Popular Videos</h1>
          <div
            id="content"
            className="flex items-center justify-start overflow-x-hidden scroll-smooth gap-8 "
            // max-w-[375px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[1200px]
          >
            {/* Left Arrow */}
            <div className="absolute top-[50%] left-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-primary-3">
              <BsChevronCompactLeft
                onClick={() => scrollLeft(scrollDistance)}
                size={30}
              />
            </div>
            {/* Right Arrow */}
            <div className="absolute top-[50%] right-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-primary-3">
              <BsChevronCompactRight
                onClick={() => scrollRight(scrollDistance)}
                size={30}
              />
            </div>

            {posts.map((post) => (
              <div key={post._id}>
                <Card post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

