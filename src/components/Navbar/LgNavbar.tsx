"use client";

import { CaretDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { groq } from "next-sanity";
import { cachedClient, client } from "../../../sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import FishLogo from "../../../public/FishLogo.png"

export const builder = imageUrlBuilder(client);

export default function LgNavbar({
  categories = [],
}: {
  categories: SanityDocument[];
}) {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SanityDocument[]>([]);

  const dropdownRef = useRef<HTMLLIElement>(null); // Ref for the dropdown container

  const searchBar = () => {
    setOpen(!open);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearch = async () => {
    const searchResultsQuery = groq`
      *[
        _type == "post" &&
        (
          title match $searchQuery ||
          tags[]->label match $searchQuery
        )
      ]{
        _id,
        title,
        slug,
        "author": author->name,
        "category": categories[]->title
      }`;

    try {
      const results = await cachedClient(searchResultsQuery, {
        searchQuery: `*${searchQuery}*`, 
      });

      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(()=>{   
      handleSearch();
    },400)
    return ()=>{
      clearTimeout(debounce);
    }
  }, [searchQuery]);

  const handleBlur = () => {
    // Close the search input and search results box when the input loses focus
    setOpen(false);
  };

  const categoryBlur = () => {
    // Close the search input and search results box when the input loses focus
    setShowDropdown(false);
  };

    // Add click event listener on document to handle clicks outside the dropdown
    useEffect(() => {
      const handleOutsideClick = (event : MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setShowDropdown(false);
        }
      };
  
      document.addEventListener("click", handleOutsideClick);
  
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);

  return (
    <nav className=" bg-primary-1">
      <div className=" flex justify-between mx-auto container">
        <div className="font-semibold self-center cursor-pointer">
          <Link href={`/`}>
          <Image
            className=""
            src={FishLogo}
            width={88}
            height={22}
            alt="logo"
          />
            {/* <h1>MM MITTE</h1> */}
          </Link>
        </div>
        <div>
          <ul className="flex gap-6 p-7 my-auto uppercase text-sm ">
            <Link href={`/`}>
              <li className="hover:text-primary-3 cursor-pointer">Home</li>
            </Link>
            <li
              ref={dropdownRef}
              className="hover:text-primary-3 cursor-pointer flex"
              onClick ={toggleDropdown}
              onBlur = {categoryBlur}
            >
              <p>Category</p>
              <CaretDownIcon className="h-5 w-5" />
              {showDropdown && (
                <ul className="absolute bg-white text-black mt-12 border-t-2 border-t-primary-3 p-2 shadow">
                  {categories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/category/${String(category.title).trim().toLowerCase().replace(' ','-')}`}
                    >
                      <li className="hover:text-primary-3 cursor-pointer p-2">
                        {category.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <Link href={`/contact`}>
            <li className="hover:text-primary-3 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="self-center relative">
        <button onClick={searchBar}>
          <MagnifyingGlassIcon className="h-5 w-5 hover:text-primary-3" />
        </button>
        {open && (
          <div className="relative">
            <input
              type="search"
              className="absolute border border-t-primary-3  z-10 top-2 right-1 px-5 py-3 focus:outline-none"
              placeholder="Search:"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={handleBlur}
            />
            {searchResults.length > 0 && searchQuery.length > 0 && (
              <ul className="absolute bg-white text-black mt-14 border right-1 border-t-primary-3 p-2 shadow w-[266px]">
                {searchResults.map((result) => (
                  <li key={result._id} className="border-b-2 border-b-primary-2 px-2 py-1">
                    <Link href={`/${result.slug.current}`} className=" hover:text-primary-3">
                        <span className="line-clamp-2">
                          {result.title} ({result.primaryCategory})
                        </span>
                        {/* <span>({result.primaryCategory})</span>s */}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {searchResults.length === 0 && searchQuery.length > 0 && (
              <div className="absolute bg-white text-black mt-14 border right-1 border-t-primary-3 p-2 shadow w-[266px]">
                <p className="px-2 py-1">No results found.</p>
              </div>
            )}
          </div>
        )}
      </div>
      </div>
    </nav>
  );
}
