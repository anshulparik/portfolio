"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { PROJECTS } from "@/utils/constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="p-4 mb-14 lg:mb-40">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6"
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS?.map((project, index: number) => {
          return (
            <div
              key={project?.title}
              className="mb-8 flex flex-wrap justify-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full mb-4 lg:mb-0 lg:w-2/5 flex justify-center"
              >
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="mb-6 rounded w-full md:w-[80%] lg:w-[80%]"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-xl lg:w-[calc(60%_-_3rem)] "
              >
                <div className="flex justify-between items-center mb-4">
                  <h6 className="font-semibold">{project?.title}</h6>
                  <div className="flex flex-wrap gap-4">
                    <Link href={project.githubLink} target="_blank">
                      <FaGithub
                        className="cursor-pointer text-2xl hover:text-purple-800
                          text-white"
                      />
                    </Link>
                    <Link href={project.liveLink} target="_blank">
                      <FaEye
                        className="cursor-pointer text-2xl hover:text-purple-800 
                          text-white"
                      />
                    </Link>
                  </div>
                </div>
                <p className="mb-4 text-neutral-400">{project?.description}</p>
                <div className="flex flex-wrap mb-8">
                  {project?.technologies?.map((tech: string) => {
                    return (
                      <span
                        key={`${tech}-${index}`}
                        className="mr-2 mt-4 rounded px-2 py-1 text-sm font-medium
                            bg-neutral-900 text-purple-800"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
