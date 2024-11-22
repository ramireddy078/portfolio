import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-gray-950 text-white space-y-5 py-10">
      <div>
        <ul className="flex items-center justify-center gap-5 sm:gap-10">
          <Link href={"/"}>
            <li className="hover:text-[#34aadc]">Home</li>
          </Link>
          <Link href={"about-me"}>
            <li className="hover:text-[#34aadc]">About</li>
          </Link>
          <Link href={"my-projects"}>
            <li className="hover:text-[#34aadc]">Projects</li>
          </Link>
          <Link href={"my-experience"}>
            <li className="hover:text-[#34aadc]">My-Experience</li>
          </Link>
        </ul>
      </div>
      <h1 className="text-center w-[95%] mx-auto">
        Copyright 2024 <Link href={'/'} className="underline hover:text-[#34aadc]">Venkat</Link>, Inc. All rights may be reserved
      </h1>
    </section>
  );
};

export default Footer;
