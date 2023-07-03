import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

const LgNavbar = () => {
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
        <div className="self-center">
          <MagnifyingGlassIcon className='h-5 w-5'/>
        </div>
      </div>
    </nav>
  );
};

export default LgNavbar;
