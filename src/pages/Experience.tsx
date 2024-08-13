import React from "react";
import { EXPERIENCES } from "@/constant/index";

const Experience = () => {
  return (
    <section className="p-4 mb-14 lg:mb-40">
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        Experience
      </h1>
      <div>
        {EXPERIENCES?.map((experience, index) => {
          return (
            <div
              key={index}
              className={` ${
                index !== EXPERIENCES.length - 1 ? "mb-8" : ""
              } flex flex-wrap lg:justify-center`}
            >
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm">{experience?.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience?.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {experience?.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">
                  {experience?.description}
                </p>
                <div className="flex flex-wrap">
                  {experience?.technologies?.map((tech, index) => {
                    return (
                      <span
                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium
                      text-purple-800"
                        key={index}
                      >
                        {tech}
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
  );
};

export default Experience;
