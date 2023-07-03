"use client"

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const LgNavbar = () => {

  const [open, setOpen]  = useState(false)
  const searchBar=()=>{
    setOpen(!open)
  }

  return (
    <nav className=" bg-primary-1">
      <div className=" flex justify-between mx-auto container">
        <div className="font-semibold self-center">
          <h1>MM MITTE</h1>
        </div>
        <div>
          <ul className="flex gap-6 p-7 my-auto uppercase text-sm">
            <li>Home</li>
            <li>Category</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="self-center relative">
          <button onClick={searchBar}><MagnifyingGlassIcon className='h-5 w-5'/></button>
          {open && (
            <input type="search" className="absolute border text-sm border-t-primary-3 z-10 top-12 right-1 px-5 py-3 focus:outline-none " placeholder="Search:"/>
          )}
        </div>
      </div>
    </nav>
  );
};

export default LgNavbar;
