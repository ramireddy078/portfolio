import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const ResponsiveNav: React.FC = () => {

  return (
    <div className="shadow-xl z-50 bg-white">
      {/* Pass the props to Navbar and MobileNav components */}
      <Navbar  />
      <MobileNav  />
    </div>
  );
};

export default ResponsiveNav;
