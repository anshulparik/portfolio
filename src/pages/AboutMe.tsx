"use client";

import React from "react";
import { ABOUT } from "@/utils/constants";
import useInView from "@/components/animations/hooks/useInView";

const AboutMe = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1, // Adjust as needed
  });

  return (
    <section id="about" className="p-4 mb-14 lg:mb-40">
      <h1
        ref={ref}
        className={`
        transition-opacity duration-500 ease-out ${
          isInView && "animate-topSlideIn"
        }  
        text-4xl font-bold text-center py-4 mb-2 lg:mb-6`}
      >
        About <span className="text-purple-800">Me</span>
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        <h3
          ref={ref}
          className={`
          transition-opacity duration-500 ease-out ${
            isInView && "animate-leftSlideIn"
          }  
          text-4xl mb-8 md:text-6xl uppercase lg:text-8xl 
          bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
          bg-clip-text text-transparent`}
        >
          {ABOUT?.text1}
        </h3>
        <p
          ref={ref}
          className={`
          transition-opacity duration-500 ease-out ${
            isInView && "animate-rightSlideIn"
          } 
          text-lg text-wrap text-neutral-400`}
        >
          {ABOUT?.text2}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
