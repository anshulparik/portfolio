import React from "react";
import TextSlider from "@/components/animations/TextSlider";
import TextReveal from "@/components/animations/TextReveal";

const Main = () => {
  return (
    <section
      id="main"
      className="relative h-[calc(100vh-77px)] lg:h-[calc(100vh-103px)] 
      flex flex-col justify-center items-center bg-cover bg-center mb-14 lg:mb-40"
      style={{ backgroundImage: 'url("/images/bg2.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-[0.87]" />
      <div className="relative z-10">
        <span className="px-2 text-xl md:text-2xl lg:text-3xl font-medium flex gap-2 md:gap-3 lg:gap-4">
          <span className="text-purple-800">Hello!</span> <span>I am</span>
        </span>
        <h1 className="px-2 text-5xl md:text-6xl lg:text-9xl font-bold tracking-tight">
          <span className="text-purple-800">
            <TextReveal text="Anshul" />
          </span>{" "}
          <TextReveal text="Parik" />
        </h1>
        <TextSlider />
      </div>
    </section>
  );
};

export default Main;
