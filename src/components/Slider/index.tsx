import React from "react";
import Carousel from "./Carousel";

const slides = [
  {
    url: "https://i.ibb.co/ncrXc2V/1.png",
  },
  {
    url: "https://i.ibb.co/B3s7v4h/2.png",
  },
  {
    url: "https://i.ibb.co/XXR8kzF/3.png",
  },
  {
    url: "https://i.ibb.co/yg7BSdM/4.png",
  },
  {
    url: "https://i.ibb.co/B3s7v4h/2.png",
  },
];

const Slider = () => {
  return (
    <div className="bg-primary-1">
      <div className="container mx-auto">
        <div className="bg-green-300 h-auto py-12 px-4 text-center text-primary-1">
          <h1 className="text-lg font-bold font-sans">Popular Videos</h1>
          <Carousel>
            {slides.map((s, index) => (
                  // <div >
                    <img src={s.url} alt={`Slide ${index + 1}`} className="w-full" key={index} />
                //     <div className="text-container">
                //       <div>
                //         <span className="text-[10px] font-sans uppercase my-12">Travel</span>
                //         <h1 className="text-2xl font-bold font-sans">Lorem, ipsum dolor.</h1>
                //         <p className="text-xs font-sans">by Lorem, ipsum | 3 days ago</p>
                //       </div>
                //     </div>
                // </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
