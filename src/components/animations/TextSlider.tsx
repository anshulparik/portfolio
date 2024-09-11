import React from "react";

const TextSlider = () => {
  return (
    <h1
      className="font-semibold tracking-tight px-2 flex 
        opacity-0 animate-fade-in [animation-delay:1.2s]"
    >
      <div className="text-2xl md:text-3xl lg:text-5xl h-12 md:h-14 lg:h-20 mr-2 lg:mr-3">
        Software
      </div>
      <span className="relative w-full overflow-hidden">
        <span className="absolute w-full -translate-y-full animate-slide text-primary">
          <div className="text-2xl md:text-3xl lg:text-5xl h-12 md:h-14 lg:h-20">
            Engineer
          </div>
        </span>
        <span className="absolute w-full -translate-y-full animate-slide text-primary [animation-delay:0.83s]">
          <div className="text-2xl md:text-3xl lg:text-5xl h-12 md:h-14 lg:h-20">
            Developer
          </div>
        </span>
        <span className="absolute w-full -translate-y-full animate-slide text-primary [animation-delay:1.83s]">
          <div className="text-2xl md:text-3xl lg:text-5xl h-12 md:h-14 lg:h-20">
            Enthusiast
          </div>
        </span>
      </span>
    </h1>
  );
};

export default TextSlider;
