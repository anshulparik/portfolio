import React from "react";
import { ABOUT } from "@/utils/constants";
import { MotionH3, MotionPara } from "@/components/animations/Motion";

const AboutMe = () => {
  return (
    <section id="about" className="p-4 mb-14 lg:mb-40">
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        About <span className="text-purple-800">Me</span>
      </h1>
      <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
        <MotionH3
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-8 md:text-6xl uppercase lg:text-8xl 
          bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
          bg-clip-text text-transparent xl:max-w-screen-lg 2xl:max-w-screen-2xl"
        >
          {ABOUT?.text1}
        </MotionH3>
        <MotionPara
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-wrap text-neutral-400 xl:max-w-screen-lg 2xl:max-w-screen-2xl"
        >
          {ABOUT?.text2}
        </MotionPara>
      </div>
    </section>
  );
};

export default AboutMe;
