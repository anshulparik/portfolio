import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-purple-800 rounded-tl-[80px] pt-12 pb-6 md:py-12
    px-8 ml-12 w-[calc(100%_-_48px)]"
    >
      <div className="md:flex md:items-center md:justify-between mb-6 md:mb-12">
        <div className="mb-6 md:mb-0">
          <p className="text-2xl md:text-3xl mb-2 font-semibold">
            Let's keep in touch!
          </p>
          <p className="text-sm md:text-base font-semibold">
            Find me on any of these platforms...
          </p>
        </div>
        <div className="flex text-2xl md:text-3xl">
          <Link
            href={process?.env?.NEXT_PUBLIC_LINKEDIN_URL as Url}
            target="_blank"
          >
            <FaLinkedin className="mr-3 cursor-pointer hover:text-black" />
          </Link>
          <Link
            href={process?.env?.NEXT_PUBLIC_GITHUB_URL as Url}
            target="_blank"
          >
            <FaGithub className="cursor-pointer hover:text-black" />
          </Link>
        </div>
      </div>
      <div className="font-bold md:text-xl w-full text-center border-t-2 border-white">
        <p className="mt-6 md:mt-12">
          Copyright © 2024 by
          <Image
            src="/images/anshul25.png"
            alt="Anshul Parik"
            width={100}
            height={80}
            className="inline-block"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
