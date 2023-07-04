import React from "react";
import Image from 'next/image'
// import { slides } from "@/constants";

const slides = [
  {
    url: "https://i.ibb.co/ncrXc2V/1.png",
    category: "Travel",
    title: "lorem ipsum tim.",
    time: 1,
  },
  {
    url: "https://picsum.photos/200",
    category: "Food",
    title: "lorem ipsum tim.",
    time: 2,
  },
  {
    url: "https://i.ibb.co/XXR8kzF/3.png",
    category: "Lifestyle",
    title: "lorem ipsum tim.",
    time: 3,
  },
  {
    url: "https://picsum.photos/400",
    category: "Travel",
    title: "lorem ipsum tim.",
    time: 4,
  },
  {
    url: "https://i.ibb.co/B3s7v4h/2.png",
    category: "Food",
    title: "lorem ipsum tim.",
    time: 5,
  },
  {
    url: "https://picsum.photos/200",
    category: "Food",
    title: "lorem ipsum tim.",
    time: 2,
  },
];

const Masonry = () => {
  return (
    <div className="container mx-auto">
      <h1 className='mb-4 text-lg font-bold'>Latest Posts</h1>
      <div className="columns-1 md:columns-2 gap-3 w-full mx-auto">
        <div className="h-auto w-full m-auto px-4 lg:px-0 lg:pr-4 group">
          {slides.slice(0,6).map((s, index) => (
            <div key={index} className="break-inside-avoid mb-5">
              <div className="overflow-hidden">
                <Image
                  src={s.url}
                  alt={`Slide ${index + 1}`}
                  className="w-full hover:scale-110 hover:rotate-3 hover:duration-[3000ms]  hover:transition"
                  width={500}
                  height={150}
                />
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase my-12 text-red-500">
                  {s.category}
                </span>
                <h1 className="text-2xl font-bold font-sans hover:text-primary-3 cursor-pointer">{s.title}</h1>
                <p className="text-xs font-sans">{s.time} days ago</p>
                <p className="text-sm font-sans font-medium pt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore, magni soluta? Earum omnis animi nulla fugiat ratione
                  commodi laboriosam sit. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Impedit, commodi?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='bg-primary-1 flex justify-center mx-auto border border-gray-300 text-primary-3 py-4 px-14 mt-7 uppercase text-xs  hover:bg-primary-3 hover:text-primary-1'>Load More</button>
    </div>
  );
};

export default Masonry;
