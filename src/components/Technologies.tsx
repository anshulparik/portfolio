import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";
import { motion, Variants } from "framer-motion";
import { MotionDiv } from "./animations/Motion";

const iconVariants = (duration: number): Variants => ({
  initial: { x: 0 },
  animate: {
    x: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section className="p-4 mb-14 lg:mb-40 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        Technologies
      </h1>
      <div className="overflow-x-hidden xl:max-w-screen-lg 2xl:max-w-screen-2xl">
        <MotionDiv
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center px-4 gap-4"
        >
          <MotionDiv
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <FaReact className="text-5xl lg:text-6xl text-cyan-400" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <RiNextjsFill className="text-5xl lg:text-6xl text-white" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <SiTypescript className="text-5xl lg:text-6xl text-sky-700" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <FaNode className="text-5xl lg:text-6xl text-green-500" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <SiNestjs className="text-5xl lg:text-6xl text-red-600" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <FaAws className="text-5xl lg:text-6xl text-yellow-600" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <FaDocker className="text-5xl lg:text-6xl text-blue-400" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <IoLogoJavascript className="text-5xl lg:text-6xl text-yellow-300" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <SiMongodb className="text-5xl lg:text-6xl text-green-600" />
          </MotionDiv>
          <MotionDiv
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-full shadow-inner shadow-white p-8"
          >
            <GrMysql className="text-5xl lg:text-6xl text-sky-700" />
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Technologies;
