import { PROJECTS } from "@/constant";
import React from "react";

import Image from "next/image";

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
              <div
                key={index}
                className="mb-8 flex flex-wrap lg:justify-center"
              >
                <div className="w-full lg:w-2/5">
                  <Image
                    src={project?.image}
                    width={400}
                    height={350}
                    alt={project?.title}
                    className="mb-6 rounded"
                  />
                </div>
                <div className="w-full max-w-xl lg:w-3/5">
                  <h6 className="mb-2 font-semibold">{project?.title}</h6>
                  <p className="mb-4 text-neutral-400">
                    {project?.description}
                  </p>
                  <div className="flex flex-wrap">
                    {project?.technologies?.map((tag) => {
                      return (
                        <span
                          key={index}
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
