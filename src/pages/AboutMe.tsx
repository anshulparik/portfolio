import React from "react";
import Image from "next/image";
import { ABOUT } from "@/constant";

const AboutMe = () => {
  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold text-center py-4">About Me</h1>
      <h3 className="text-4xl mb-4 md:text-6xl uppercase lg:text-8xl">{ABOUT?.text1}</h3>
      <p className="text-lg text-wrap">{ABOUT?.text2}</p>
    </section>
  );
};

export default AboutMe;
