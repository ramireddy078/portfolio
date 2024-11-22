"use client";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full h-[15vh] z-[1000] bg-slate-100 text-[#044e57]">
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        <Link href="/">
          <h1 className="text-4xl text-[#044e57] font-kaushan italic">Ram</h1>
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          <Link href={"/"}>
            <p className="relative z-10 text-xl w-fit font-semibold tracking-[1px] text-[#044e57] hover:text-[#34aadc] rounded-md py-1 px-2 cursor-pointer">
              Home
            </p>
          </Link>
          <Link href={"/about-me"}>
            <p className="relative z-10 text-xl w-fit font-semibold tracking-[1px] text-[#044e57] hover:text-[#34aadc] rounded-md py-1 px-2 cursor-pointer">
              About
            </p>
          </Link>
          <Link href={"/my-projects"}>
            <p className="relative z-10 text-xl w-fit font-semibold tracking-[1px] text-[#044e57] hover:text-[#34aadc] rounded-md py-1 px-2 cursor-pointer">
              Projects
            </p>
          </Link>
          <Link href={"/my-experience"}>
            <p className="relative z-10 text-xl w-fit font-semibold tracking-[1px] text-[#044e57] hover:text-[#34aadc] rounded-md py-1 px-2 cursor-pointer">
              My-Experience
            </p>
          </Link>
          <Link href={"/contact-me"}>
            <p className="relative z-10 text-xl w-fit font-semibold tracking-[1px] text-[#044e57] hover:text-[#34aadc] rounded-md py-1 px-2 cursor-pointer">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
