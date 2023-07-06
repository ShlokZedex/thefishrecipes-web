import React from "react";
import SmNavbar from "./SmNavbar";
import LgNavbar from "./LgNavbar";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-b-primary-2">
      <div className="container mx-auto">
        <div className="lg:hidden">
          <SmNavbar />
        </div>
        <div className="hidden lg:block">
          <LgNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
