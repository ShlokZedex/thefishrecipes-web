import React from 'react'

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

const LatestPosts = () => {
  return (
    <div>
      <div className="container mx-auto text-center">
        <h1 className="text-lg font-bold font-sans">Latest Posts </h1>
        <p className='text-gray-400 text-xs mb-7'>@abcdefghijklmnopqrstuvwxyz</p>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-4 mx-2 md:mx-auto '>
          {slides.map((s, index) => (
              <img src={s.url} alt={`Slide ${index + 1}`} className="w-full hover:opacity-60" key={index} />
          ))}
        </div>
        <button className='bg-primary-1 border border-gray-300 text-primary-3 py-4 px-14 my-7 uppercase text-xs hover:bg-primary-3 hover:text-primary-1'>Follow Us</button>
      </div>
    </div>
  )
}

export default LatestPosts