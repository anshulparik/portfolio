import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Image src="/images/logo3.png" width={200} height={300} alt="ANSHUL" />
      </div>
      <div className="flex mr-8 text-3xl">
        <FaLinkedin className="mr-3 cursor-pointer" />
        <FaGithub className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
