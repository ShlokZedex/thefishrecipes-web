import React from "react";

const MainBlogs = () => {
  return (
    <div className=" bg-primary-2">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
            <div className="px-4 lg:px-0 py-6 mx-auto relative">
                <div className="overflow-hidden">
                    <img src="http://nunforest.com/mite-demo/upload/blog/a1.jpg" className="hover:scale-110 hover:rotate-3 hover:duration-[3000ms]  hover:transition "></img>
                </div>  
                <div className="absolute bottom-0 py-16 left-1/2 -translate-x-1/2 text-primary-1 text-center">
                    <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">Travel</span>
                    <h1 className="text-2xl font-bold font-sans">Lorem, ipsum dolor.</h1>
                    <p className="text-xs font-sans">by Lorem, ipsum | 3 days ago</p>
                </div>
            </div>
            <div className="px-4 lg:px-0 py-6 mx-auto relative">
                <div className="overflow-hidden">
                    <img src="http://nunforest.com/mite-demo/upload/blog/a1.jpg" className="hover:scale-110 hover:rotate-3 hover:transition hover:duration-[3000ms]"></img>
                </div>
                <div className="absolute bottom-0 py-16 left-1/2 -translate-x-1/2 text-primary-1 text-center">
                    <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">Travel</span>
                    <h1 className="text-2xl font-bold font-sans">Lorem, ipsum dolor.</h1>
                    <p className="text-xs font-sans">by Lorem, ipsum | 3 days ago</p>
                </div>
            </div>
            <div className="px-4 lg:px-0 py-6 mx-auto relative">
                <div className="overflow-hidden">
                    <img src="http://nunforest.com/mite-demo/upload/blog/a1.jpg" className="hover:scale-110 hover:rotate-3 hover:transition hover:duration-[3000ms]"></img>
                </div>
                <div className="absolute bottom-0 py-16 left-1/2 -translate-x-1/2 text-primary-1 text-center">
                    <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">Travel</span>
                    <h1 className="text-2xl font-bold font-sans">Lorem, ipsum dolor.</h1>
                    <p className="text-xs font-sans">by Lorem, ipsum | 3 days ago</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogs;
