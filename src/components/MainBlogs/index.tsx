import { SanityDocument } from "next-sanity";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export const builder = imageUrlBuilder(client);

function MainBlogs({ posts = [] }: { posts: SanityDocument[] }) {
  return (
    <div className=" bg-primary-2">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
          {posts.slice(0,3).map((post) => (
            <div className="px-4 lg:px-0 py-6 mx-auto relative" key={post._id}>
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 hover:rotate-3 hover:duration-[3000ms] hover:transition "
                  src={builder.image(post.mainImage).url()}
                  width={370}
                  height={510}
                  alt={post?.mainImage?.alt}
                />
              </div>
              <div className="absolute bottom-0 py-16 left-1/2 -translate-x-1/2 text-primary-1 text-center">
                <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">
                  {post.category}
                </span>
                <Link
                  href={`blog/${post.slug.current}`}
                  className="text-2xl font-bold font-sans"
                >
                  <h2>{post.title}</h2>
                </Link>
                <p className="text-xs font-sans">
                  by {post.author} | 3 days ago
                </p>
              </div>
            </div>
          ))}

          {/* <div className="px-4 lg:px-0 py-6 mx-auto relative">
                <div className="overflow-hidden">
                    <img src="http://nunforest.com/mite-demo/upload/blog/a1.jpg" className="hover:scale-110 hover:rotate-3 hover:transition hover:duration-[3000ms]"></img>
                </div>
                <div className="absolute bottom-0 py-16 left-1/2 -translate-x-1/2 text-primary-1 text-center">
                    <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">Travel</span>
                    <h1 className="text-2xl font-bold font-sans">Lorem, ipsum dolor.</h1>
                    <p className="text-xs font-sans">by Lorem, ipsum | 3 days ago</p>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainBlogs;
