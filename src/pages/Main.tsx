import React from "react";
import { MdFileDownload } from "react-icons/md";

const Main = () => {
  return (
    <section
      className="h-[calc(100vh_-_51.76px_-_1rem)] lg:h-[calc(100vh_-_51.76px_-_1.5rem)] 
    flex flex-col justify-center items-center"
    >
      <h1 className="px-2 text-5xl md:text-6xl lg:text-9xl font-bold tracking-tight">
        Anshul Parik
      </h1>
      <h2
        className="px-2 pb-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
          bg-clip-text text-transparent text-3xl lg:text-5xl tracking-tight mb-8 lg:mb-16"
      >
        Software Engineer
      </h2>
      <a href="/anshulparik.pdf" download>
        <button
          className={`mt-2 text-sm lg:text-xl py-2 px-4 lg:px-6 lg:py-2  
          rounded bg-purple-800 uppercase
          font-semibold tracking-wider text-white border-2 border-transparent 
          transition-all duration-300 ease-in-out 
        hover:bg-black hover:border-purple-800 hover:text-purple-800
        `}
        >
          Resume <MdFileDownload className="inline-block text-xl lg:text-2xl" />
        </button>
      </a>
    </section>
  );
};

export default Main;
