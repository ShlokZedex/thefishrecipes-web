import { SanityDocument } from "next-sanity";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export const builder = imageUrlBuilder(client);

function MainBlogs({ posts = [] }: { posts: SanityDocument[] }) {
  const randomPosts = posts.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <div className=" bg-primary-2">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
          {randomPosts.slice(0, 3).map((post) => (
            <div className="px-4 lg:px-0 py-6 mx-auto relative " key={post._id}>
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
                <Link href={`/blog/category/${String(post.category).toLowerCase()}`}>
                  <span className="text-[10px] py-1 px-3 bg-primary-3 font-sans uppercase my-12">
                    {post.category}
                  </span>
                </Link>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="text-2xl font-bold font-sans"
                >
                  <h2 className="line-clamp-3">{post.title}</h2>
                </Link>
                <p className="text-xs font-sans">
                  by {post.author} |{" "}
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainBlogs;
