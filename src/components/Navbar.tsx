import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="mt-4 lg:mt-6 flex items-center justify-between">
      <div className="ml-1 lg:ml-6">
        <Image
          src="/images/anshul25.png"
          alt="ANSHUL"
          width={140}
          height={120}
        />
      </div>
      <div className="flex mr-2 lg:mr-8 text-3xl">
        <FaLinkedin className="mr-3 cursor-pointer hover:text-sky-600" />
        <FaGithub className="cursor-pointer hover:text-purple-500" />
      </div>
    </nav>
  );
};

export default Navbar;
