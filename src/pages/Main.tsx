import React from "react";
import TextSlider from "@/components/TextSlider";
import TextReveal from "@/components/TextReveal";

const Main = () => {
  return (
    <section
      className="h-[calc(100vh_-_51.76px_-_1rem)] lg:h-[calc(100vh_-_51.76px_-_1.5rem)] 
    flex flex-col justify-center items-center"
    >
      <div>
        <h1 className="px-2 text-5xl md:text-6xl lg:text-9xl font-bold tracking-tight">
          <TextReveal text="Anshul" />{" "}
          <span className="text-purple-800">
            <TextReveal text="Parik" />
          </span>
        </h1>
        <TextSlider />
      </div>
      {/* <div
        className="w-full md:text-xl lg:text-2xl absolute bottom-0 
       flex pb-3 lg:pb-6 justify-center items-center text-white"
      >
        <GoDot
          className="cursor-pointer mr-4 md:mr-16
          transition-transform duration-200 
          transform hover:scale-180 hover:text-purple-800 
          hover:bg-purple-800 rounded-full"
        />
        <GoDot
          className="cursor-pointer mr-4 md:mr-16
          transition-transform duration-200 
          transform hover:scale-180 hover:text-purple-800 
          hover:bg-purple-800 rounded-full"
        />
        <GoDot
          className="cursor-pointer mr-4 md:mr-16
          transition-transform duration-200 
          transform hover:scale-180 hover:text-purple-800 
          hover:bg-purple-800 rounded-full"
        />
        <GoDot
          className="cursor-pointer transition-transform duration-200 
          transform hover:scale-180 hover:text-purple-800 
          hover:bg-purple-800 rounded-full"
        />
      </div> */}
    </section>
  );
};

export default Main;
