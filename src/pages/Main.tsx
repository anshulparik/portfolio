import React from "react";
import TextSlider from "@/components/animations/TextSlider";
import TextReveal from "@/components/animations/TextReveal";

const Main = () => {
  return (
    <section
      id="main"
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
    </section>
  );
};

export default Main;
