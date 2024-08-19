import { PROJECTS } from "@/constant";
import React from "react";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <section className="p-4 mb-14 lg:mb-40">
        <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
          Projects
        </h1>
        <div className="">
          {PROJECTS?.map((project, index) => {
            return (
              <div key={index} className="mb-8 flex flex-wrap justify-center">
                <div className="w-full mb-4 lg:mb-0 lg:w-2/5 flex justify-center">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="mb-6 rounded w-full md:w-[80%] lg:w-[80%]"
                  />
                </div>
                <div className="w-full max-w-xl lg:w-[calc(60%_-_3rem)] ">
                  <div className="flex justify-between items-center mb-4">
                    <h6 className="font-semibold">{project?.title}</h6>
                    <div className="flex flex-wrap gap-4">
                      <FaGithub
                        className="cursor-pointer text-2xl hover:text-purple-800
                     text-white"
                      />
                      <FaEye
                        className="cursor-pointer text-2xl hover:text-purple-800 
                    text-white"
                      />
                    </div>
                  </div>
                  <p className="mb-4 text-neutral-400">
                    {project?.description}
                  </p>
                  <div className="flex flex-wrap mb-8">
                    {project?.technologies?.map((tag) => {
                      return (
                        <span
                          key={`${tag}-${index}`}
                          className="mr-2 mt-4 rounded px-2 py-1 text-sm font-medium
                            bg-neutral-900 text-purple-800"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
