import React from "react";
import Image from "next/image";
import { ABOUT } from "@/constant";

const AboutMe = () => {
  return (
    <section className="p-4 mb-14 lg:mb-40">
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        About{" "}
        <span
          className="text-purple-800"
        >
          Me
        </span>
      </h1>
      <h3
        className="text-4xl mb-8 md:text-6xl uppercase lg:text-8xl 
        bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
        bg-clip-text text-transparent"
      >
        {ABOUT?.text1}
      </h3>
      <p className="text-lg text-wrap text-neutral-400">{ABOUT?.text2}</p>
    </section>
  );
};

export default AboutMe;
