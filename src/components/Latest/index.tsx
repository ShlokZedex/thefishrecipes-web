import React from 'react'
import Social from './Social'
import TrendingCarousel from '../Trending/TrendingCarousel'
import Stories from './Stories'
import Masonry from './Masonry'
import Categories from './Categories'

const Latest = () => {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8'>
            <div className='col-span-1 md:col-span-2'>
                <Masonry />
            </div>
            <div className='flex flex-col gap-5'>
                <Social />
                <TrendingCarousel />
                <Stories />
                <Categories />
            </div>
        </div>
    </div>
  )
}

export default Latest