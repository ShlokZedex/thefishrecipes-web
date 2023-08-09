import React from 'react'
import Social from './Social'
import Stories from './Stories'
import Masonry from './Masonry'
import Categories from './Categories'
import { SanityDocument } from 'next-sanity'

export default function Latest({ latestPosts = [], categories = [] }: { latestPosts: SanityDocument[] , categories : SanityDocument[] }) {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8'>
            <div className='col-span-1 md:col-span-2'>
                <Masonry latestPosts={latestPosts}/>
            </div>
            <div className='flex flex-col gap-5'>
                <Social />
                <Stories latestPosts={latestPosts}/>
                <Categories categories = {categories}/>
            </div>
        </div>
    </div>
  )
}