import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";

export default function Categories({  categories = [] }: {categories : SanityDocument[] }) {
  return (
    <div className="container mx-auto">
      <div className="bg-primary-2 py-9 gap-6 px-10 flex flex-col">
        <h1 className="font-bold border-b pb-5">Categories</h1>
        <div>
          <ul className="flex flex-col gap-3">
            {categories.map((category)=>{ 
             return (    
                <Link href={`/category/${category.slug.current}`} key={category._id}> 
                  <li className="flex justify-between cursor-pointer" >
                    <h4 className="text-sm hover:text-primary-3">{category.title}</h4>
                    <p className="text-primary-3 text-xs">{category.numberOfBlogs}</p>
                  </li>
                </Link>         
            )})}
          </ul>
        </div>
      </div>
    </div>
  );
};

