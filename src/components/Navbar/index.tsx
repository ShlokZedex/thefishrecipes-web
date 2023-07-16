import React from "react";
import SmNavbar from "./SmNavbar";
import LgNavbar from "./LgNavbar";
import { SanityDocument } from "next-sanity";

export default function Navbar({ categories = [] }: { categories : SanityDocument[] }) {
  return (
    <nav className="border-b-2 border-b-primary-2 sticky top-0 z-50 bg-primary-1">
      <div className="container mx-auto">
        <div className="lg:hidden">
          <SmNavbar categories= {categories}/>
        </div>
        <div className="hidden lg:block">
          <LgNavbar categories= {categories}/>
        </div>
      </div>
    </nav>
  );
};

