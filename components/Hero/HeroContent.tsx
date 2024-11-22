import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";


function HeroContent() {
  return (
    <div className='space-y-4'>
        <h1 className='mt-6 text-5xl text-[#102a42]. text-[#34aaea] text-opacity-60 tracking-wider font-kaushan italic font-semibold'>I'm Venkat</h1>
        <p className='font-Oswald text-3xl tracking-widest text-[#324d67]'>FrontEnd Web Developer</p>
        <div className='flex gap-5 text-4xl'>
            <FaTwitter className='text-[#34aadc]'/>
            <Link href={'https://www.linkedin.com/in/venkataramireddy-maram-0a92042b9/'}>
              <IoLogoLinkedin className='text-[#34aadc]'/>
            </Link>
            <AiFillInstagram className='text-[#34aadc]' />
            <Link href={'https://github.com/ramireddy078?tab=repositories'}>
            <FaGithub className='text-[#34aadc]'/>
            </Link>
        </div>
        <Link href={"/about-me"}>
          <p className='bg-[#0a6c75] w-fit px-10 text-lg md:text-2xl text-white rounded-md py-2 mt-4'>More About Venkat</p>
        </Link>
        {/* <button>More About Venkat</button> */}
    </div>
  )
}

export default HeroContent
