import React from "react";

const Main = () => {
  return (
    <>
      <section className="h-[calc(100vh_-_114.06px)] flex flex-col justify-center items-center">
        <h1 className="text-5xl lg:text-8xl font-bold tracking-tight">
          Anshul Parik
        </h1>
        <h2
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
          bg-clip-text text-transparent text-3xl lg:text-4xl tracking-tight mb-8 lg:mb-16"
        >
          Software Engineer
        </h2>
        <button
          className="text-sm lg:text-xl py-2 px-3 rounded bg-purple-800 uppercase 
          font-semibold tracking-wider text-white border-2 border-transparent 
          transition-all duration-300 ease-in-out 
        hover:bg-black hover:border-purple-800 hover:text-purple-800"
        >
          Resume
        </button>
      </section>
    </>
  );
};

export default Main;
