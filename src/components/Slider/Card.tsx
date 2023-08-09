import { SanityDocument } from 'next-sanity'
import React from 'react'
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Link from 'next/link';

export const builder = imageUrlBuilder(client);

const Card = ({post}:{post: SanityDocument}) => {
  return (
    <div className="shadow-lg h-auto w-[375px] group">
        <div className="top mb-6">
            {/* <img src={post.url} alt="img" className=''/> */}
            <Image
                  className="w-[375px] h-[300px] "
                  src={builder.image(post.mainImage).url()}
                  width={370}
                  height={300}
                  alt={post?.mainImage?.alt}
                />
        </div>
        <div className="bottom flex flex-col ">
            <Link href={`/category/${String(post.primaryCategory).trim().toLowerCase().replace(' ','-')}`}><div className="category text-[10px] font-sans uppercase text-red-500">{post.primaryCategory}</div></Link>
            <Link href={`/${post.slug.current}`}><div className="title text-2xl font-bold font-sans text-primary-1 hover:text-primary-3 cursor-pointer line-clamp-1">{post.title}</div></Link>
            <div className="time text-xs font-sans text-gray-400">{new Date(post.publishedAt).toLocaleDateString(
            "en-US",{
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}</div>
        </div>
    </div>
  )
}

export default Card