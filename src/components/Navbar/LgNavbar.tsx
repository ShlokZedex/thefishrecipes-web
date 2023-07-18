"use client";

import { CaretDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React, { useState } from "react";

export default function LgNavbar({
  categories = [],
}: {
  categories: SanityDocument[];
}) {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchBar = () => {
    setOpen(!open);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className=" bg-primary-1">
      <div className=" flex justify-between mx-auto container">
        <div className="font-semibold self-center cursor-pointer">
          <Link href={`/`}>
            <h1>MM MITTE</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-6 p-7 my-auto uppercase text-sm ">
            <Link href={`/`}>
              <li className="hover:text-primary-3 cursor-pointer">Home</li>
            </Link>
            <li
              className="hover:text-primary-3 cursor-pointer flex"
              onClick={toggleDropdown}
            >
              <p>Category</p>
              <CaretDownIcon className="h-5 w-5" />
              {showDropdown && (
                <ul className="absolute bg-white text-black mt-12 border border-t-primary-3 p-2 shadow">
                  {categories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/blog/category/${category.title.toLowerCase()}`}
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
            <input
              type="search"
              className="absolute border text-sm border-t-primary-3 z-10 top-12 right-1 px-5 py-3 focus:outline-none "
              placeholder="Search:"
            />
          )}
        </div>
      </div>
    </nav>
  );
}
