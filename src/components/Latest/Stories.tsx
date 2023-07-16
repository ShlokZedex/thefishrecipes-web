import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

export default function Stories({ latestPosts = [] }: { latestPosts: SanityDocument[] }) {
  return (
    <div  className='container mx-auto'>
        <div className='bg-primary-2 py-9 gap-6 px-10 flex flex-col'>
            <h1 className='font-bold'>Latest Stories</h1>
            {latestPosts.slice(0,6).map((post)=>(
                <div key={post._id} className='border-t'> 
                 <Link href={`/blog/category/${String(post.category).toLowerCase()}`}>
                  <span className="text-[10px] font-sans uppercase my-12 text-red-500">
                    {post.category}
                  </span>
                </Link>
                <Link href={`/blog/${post.slug.current}`}>
                  <h1 className=" font-medium font-sans hover:text-primary-3 cursor-pointer">
                    {post.title}
                  </h1>
                </Link>
                <p className="text-xs font-sans">
                    Date comes here
                </p>
              </div>
            ))}
            
        </div>
    </div>
  )
}