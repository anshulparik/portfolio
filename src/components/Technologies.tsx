import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";

const Technologies = () => {
  return (
    <section className="">
      <h1 className="text-4xl font-bold text-center py-4">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center px-4 gap-4">
        <div className="rounded-2xl border-4 border-white p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-white p-4">
          <RiNextjsFill className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-white p-4">
          <SiTypescript className="text-7xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-white p-4">
          <FaNode className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-white p-4">
          <SiNestjs className="text-7xl text-red-600" />
        </div>
        {/* <div className="rounded-2xl border-4 border-white p-4">
          <BiLogoPostgresql className="text-7xl text-blue-900" />
        </div> */}
        <div className="rounded-2xl border-4 border-white p-4">
          <FaAws className="text-7xl text-yellow-600" />
        </div>
        <div className="rounded-2xl border-4 border-white p-4">
          <FaDocker className="text-7xl text-blue-00" />
        </div>
        <div className="rounded-2xl border-4 border-white p-4">
          <IoLogoJavascript className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-white p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-white p-4">
          <GrMysql className="text-7xl text-sky-700" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
