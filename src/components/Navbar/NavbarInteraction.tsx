"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Url } from "next/dist/shared/lib/router/router";

const NavbarInteraction = () => {
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex mr-2 lg:mr-8">
      {screenSize && screenSize >= 768 ? (
        <Link
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
      <Link href={process?.env?.NEXT_PUBLIC_GITHUB_URL as Url} target="_blank">
        <FaGithub className="text-2xl lg:text-3xl cursor-pointer hover:text-purple-500" />
      </Link>
    </div>
  );
};

export default NavbarInteraction;
