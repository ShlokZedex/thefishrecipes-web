import React from 'react'

interface SlideProps {
  slide : {
    "url" : string,
    "category" : string,
    "title":string,
    "time" : number,
  }
}

const Card:React.FC<SlideProps> = ({slide}) => {
  return (
    <div className="shadow-lg h-auto w-[375px] group">
        <div className="top mb-6">
            <img src={slide.url} alt="img" className='w-[375px] h-[300px]'/>
        </div>
        <div className="bottom flex flex-col ">
            <div className="category text-[10px] font-sans uppercase text-red-500">{slide.category}</div>
            <div className="title text-2xl font-bold font-sans text-primary-1 hover:text-primary-3">{slide.title}</div>
            <div className="time text-xs font-sans text-gray-400">{slide.time} days ago</div>
        </div>
    </div>
  )
}

export default Card