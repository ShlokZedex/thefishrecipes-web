"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

export default function TrendingCarousel({
  trendingPosts = [],
}: {
  trendingPosts: SanityDocument[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      const isLastSlide = currentIndex === trendingPosts.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 4000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [currentIndex]);

  return (
    <div className="container mx-auto bg-primary-1 pr-2 lg:pr-4">
      <div className="h-auto overflow-hidden">
        <div
          className="h-[375px] w-full bg-center mx-2 lg:mx-auto bg-cover duration-500 relative"
        >
          <Image
            src={builder.image(trendingPosts[currentIndex].mainImage).url()}
            alt={trendingPosts[currentIndex]?.mainImage?.alt}
            fill
          />

          <div className="absolute bottom-0 pb-5 pl-5 text-primary-1">
            <Link href={`/blog/category/${String(trendingPosts[currentIndex].category).toLowerCase()}`}>
              <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">
                {trendingPosts[currentIndex].category}
              </span>
            </Link>
            <Link href={`/blog/${trendingPosts[currentIndex].slug.current}`}>
            <h1 className="text-2xl font-bold font-sans">
              {trendingPosts[currentIndex].title}
            </h1>
            </Link>
            <p className="text-xs font-sans">
              by {trendingPosts[currentIndex].author} | {new Date(trendingPosts[currentIndex].publishedAt).toLocaleDateString(
            "en-US",{
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )} 
            </p>
          </div>
          <div className="absolute flex top-4 right-3 justify-center">
            {trendingPosts.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={classNames(
                  "text-sm text-primary-1 cursor-pointer",
                  slideIndex === currentIndex
                    ? "border border-white rounded-full"
                    : ""
                )}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
