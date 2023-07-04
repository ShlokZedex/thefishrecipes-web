import { slides } from '@/constants'
import React from 'react'

const Stories = () => {
  return (
    <div  className='container mx-auto'>
        <div className='bg-primary-2 py-9 gap-6 px-10 flex flex-col'>
            <h1 className='font-bold'>Latest Stories</h1>
            {slides.slice(0,6).map((s,index)=>(
                <div key={index} className='border-t'> 
                <span className="text-[10px] font-sans uppercase my-12 text-red-500">
                  {s.category}
                </span>
                <h1 className=" font-medium font-sans hover:text-primary-3 cursor-pointer">
                  {s.title}
                </h1>
                <p className="text-xs font-sans">
                  {s.time} days ago
                </p>
              </div>
            ))}
            
        </div>
    </div>
  )
}

export default Stories