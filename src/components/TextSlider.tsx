import React from "react";

const TextSlider = () => {
  return (
    <h1
    // bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
    // bg-clip-text text-transparent 
      className="flex items-center gap-2 lg:gap-3 font-semibold
        px-2 pb-2 text-2xl md:text-3xl lg:text-5xl tracking-tight mb-8 lg:mb-16
        opacity-0 animate-fade-in [animation-delay:1.2s]"
    >
      Software
      <span className="relative h-8 md:h-9 lg:h-12 w-full overflow-hidden">
        <span className="absolute h-full w-full -translate-y-full animate-slide text-purple-800">
          Engineer
        </span>
        <span className="absolute h-full w-full -translate-y-full animate-slide text-purple-800 [animation-delay:0.83s]">
          Developer
        </span>
        <span className="absolute h-full w-full -translate-y-full animate-slide text-purple-800 [animation-delay:1.83s]">
          Enthusiast
        </span>
      </span>
    </h1>
  );
};

export default TextSlider;
