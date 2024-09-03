import React from "react";
import { EXPERIENCES } from "@/utils/constants";
import { ExperienceType } from "@/utils/type";

const Experience = () => {
  return (
    <section id="experience" className="p-4 mb-14 lg:mb-40">
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        Experience
      </h1>
      <div>
        {EXPERIENCES?.map((experience, index: number) => {
          return (
            <div
              key={`${experience?.company}-${index}`}
              className={` ${
                index !== EXPERIENCES.length - 1 ? "mb-8" : ""
              } flex flex-wrap justify-center lg:items-center
              lg:flex-nowrap lg:gap-10 xl:gap-16`}
            >
              <div className="w-full lg:w-2/5 max-w-xl lg:max-w-md">
                <p className="mb-2 text-sm font-extrabold lg:text-center">
                  {experience?.year}
                </p>
              </div>
              <div className="w-full max-w-xl lg:w-3/5">
                <h6 className="mb-1 font-semibold">{experience?.role}</h6>
                <h6 className="text-sm mb-4 font-semibold text-purple-800">
                  {experience?.company}
                </h6>
                <p className="mb-4 text-neutral-400">
                  {experience?.description}
                </p>
                <div className="flex flex-wrap">
                  {experience?.technologies?.map(
                    (tech: string, index: number) => {
                      return (
                        <span
                          className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                          key={`${tech}-${index}`}
                        >
                          {tech}
                        </span>
                      );
                    }
                  )}
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
