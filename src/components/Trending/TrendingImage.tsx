import React from "react";

const TrendingImage = () => {
  return (
    <div className="mx-auto relative">
      <div className="overflow-hidden">
        <img
          src="http://nunforest.com/mite-demo/upload/blog/a1.jpg"
          className="w-full hover:scale-110 hover:rotate-3 hover:duration-[3000ms] hover:transition "
        ></img>
      </div>
      <div className="absolute bottom-0 py-20 left-4 text-primary-1">
        <span className="text-[10px] py-1 bg-primary-3 font-sans uppercase">
          Travel
        </span>
        <h1 className="text-2xl font-bold font-sans">Lorem, ipsum amet consectetur.</h1>
        <p className="text-xs font-sans">by Lorem, ipsum | 3 days ago</p>
      </div>
    </div>
  );
};

export default TrendingImage;
