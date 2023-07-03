"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import {slides} from '../../constants'


const NewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

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
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <div className="h-auto py-12 px-4 text-center text-primary-1">
          <h1 className="text-lg font-bold font-sans mb-5">Popular Videos</h1>
          <div className="h-auto w-full m-auto px-4 group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full lg:w-[400px] h-[300px] bg-center mx-auto bg-cover duration-500 relative mb-6"
            >
              {/* Left Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-primary-3">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-primary-3">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase my-12 text-red-500">
                {slides[currentIndex].category}
              </span>
              <h1 className="text-2xl font-bold font-sans">
                {slides[currentIndex].title}
              </h1>
              <p className="text-xs font-sans">
                {slides[currentIndex].time} days ago
              </p>
            </div>

            {/*  */}
            <div className="flex top-4 justify-center py-2 mt-8">
              {slides.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={classNames("text-sm cursor-pointer", slideIndex === currentIndex ? 'border border-white rounded-full' : '')}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlider;
