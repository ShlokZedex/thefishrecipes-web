"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "@/constants";

const TrendingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Function to automatically change slide after 2 seconds
    const autoSlide = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 4000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(autoSlide);
    };
  }, [currentIndex]);

  return (
    <div className="container mx-auto bg-primary-1 pr-2 lg:pr-4">
      <div className="h-auto overflow-hidden">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="h-[350px] w-full bg-center mx-2 lg:mx-auto bg-cover duration-500 relative"
        >
          <div className="absolute bottom-0 pb-5 pl-5 text-primary-1">
            <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">
              {slides[currentIndex].category}
            </span>
            <h1 className="text-2xl font-bold font-sans">
              {slides[currentIndex].title}
            </h1>
            <p className="text-xs font-sans">
              by Lorem, ipsum | {slides[currentIndex].time} days ago
            </p>
          </div>
          <div className="absolute flex top-4 right-3 justify-center">
            {slides.map((_, slideIndex) => (
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
};

export default TrendingCarousel;
