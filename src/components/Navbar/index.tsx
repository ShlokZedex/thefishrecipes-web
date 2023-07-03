import React from "react";
import SmNavbar from "./SmNavbar";
import LgNavbar from "./LgNavbar";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto ">
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
