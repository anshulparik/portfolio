import Link from "next/link";
import React from "react";
import { GoDot } from "react-icons/go";

const SmoothScroll = () => {
  return (
    <div
      className="w-full md:text-xl lg:text-2xl bottom-0 
       flex pb-3 lg:pb-6 justify-center items-center text-white"
    >
      <Link href="#" className="mr-4 md:mr-16">
        <GoDot
          className="cursor-pointer
            transition-transform duration-200 
            transform hover:scale-180 hover:text-primary 
            hover:bg-primary rounded-full"
        />
      </Link>
      <Link href="#about" className="mr-4 md:mr-16">
        <GoDot
          className="cursor-pointer
            transition-transform duration-200 
            transform hover:scale-180 hover:text-primary 
            hover:bg-primary rounded-full"
        />
      </Link>
      <Link href="#experience" className="mr-4 md:mr-16">
        <GoDot
          className="cursor-pointer
            transition-transform duration-200 
            transform hover:scale-180 hover:text-primary 
            hover:bg-primary rounded-full"
        />
      </Link>
      <Link href="#projects" className="mr-4 md:mr-16">
        <GoDot
          className="cursor-pointer
            transition-transform duration-200 
            transform hover:scale-180 hover:text-primary 
            hover:bg-primary rounded-full"
        />
      </Link>
      <Link href="#contact">
        <GoDot
          className="cursor-pointer
            transition-transform duration-200 
            transform hover:scale-180 hover:text-primary 
            hover:bg-primary rounded-full"
        />
      </Link>
    </div>
  );
};

export default SmoothScroll;
