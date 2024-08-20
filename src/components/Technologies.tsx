import React from "react";
import { Tech } from "@/utils/type";
import { TECHNOLOGIES } from "@/utils/constants";

const Technologies = () => {
  return (
    <section id="technologies" className="p-4 mb-14 lg:mb-40">
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center px-4 gap-4">
        {TECHNOLOGIES.map((tech: Tech, index: number) => (
          <div key={index} className="rounded-2xl border-4 border-white p-4">
            <tech.icon className={`text-7xl ${tech.color}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
