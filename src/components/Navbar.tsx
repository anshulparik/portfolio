"use client";
import React, { useEffect, useState } from "react";

import { MdFileDownload } from "react-icons/md";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // m-0 p-0 mr-3 md:text-xs md:py-[2px] md:px-[8px] lg:py-[6px]

  return (
    <nav className="mt-4 lg:mt-6 flex items-center justify-between">
      <div className="cursor-pointer ml-1 lg:ml-6 relative w-[100px] h-[45px] lg:w-[140px] lg:h-[55px]">
        <Link href="/">
          <Image src="/images/anshul25.png" alt="ANSHUL" quality={100} fill />
        </Link>
      </div>
      <div className="flex mr-2 lg:mr-8">
        {screenSize && screenSize >= 768 ? (
          <Link
            // className={`
            //   text-inherit no-underline hover:no-underline
            //   focus:no-underline active:no-underline visited:no-underline
            //   outline-none border-none p-0 m-0
            // `}
            className="
              flex items-center justify-center  
              text-xs lg:text-[14px] lg:leading-[18px] mr-3 px-2
              rounded bg-purple-800 uppercase
              font-semibold tracking-wider text-white border-2 border-transparent 
              transition-all duration-300 ease-in-out 
            hover:bg-black hover:border-purple-800 hover:text-purple-800"
            href="/anshulparik.pdf"
            target="_blank"
            download
          >
            Resume <MdFileDownload className="inline-block" />
          </Link>
        ) : (
          <Link
            href="/anshulparik.pdf"
            target="_blank"
            className="text-inherit no-underline hover:no-underline
              focus:no-underline active:no-underline visited:no-underline
              outline-none border-none p-0 m-0
              
              mr-3 text-2xl lg:text-3xl cursor-pointer"
            download
          >
            <IoMdDownload className="text-purple-800" />
          </Link>
        )}
        <Link
          href={process?.env?.NEXT_PUBLIC_LINKEDIN_URL as Url}
          target="_blank"
        >
          <FaLinkedin className="mr-3 text-2xl lg:text-3xl cursor-pointer hover:text-sky-600" />
        </Link>
        <Link
          href={process?.env?.NEXT_PUBLIC_GITHUB_URL as Url}
          target="_blank"
        >
          <FaGithub className="text-2xl lg:text-3xl cursor-pointer hover:text-purple-500" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
