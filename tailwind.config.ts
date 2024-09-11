import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm2: "425px",
        sm3: "525px",
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(to right, #F97316, #C2410C)",
      },
      colors: {
        dark: "#000000",
        light: "#ffffff",
        primary: "#6b21a8",
        // primaryPurple: "#6b21a8",
        // primaryBlue: "#06b6d4",
        // primaryYellow: "#FFC000",
        // primaryGreen: "#008170",
      },
      scale: {
        "175": "1.75",
        "180": "1.80",
        "200": "2.00",
        "250": "2.50",
        "300": "3.00",
      },
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        "fade-in": "fadeIn 1.5s forwards",
        slide: "slide 2.5s linear infinite",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateY(100%)", opacity: "0.1" },
          "15%": { transform: "translateY(0)", opacity: "1" },
          "30%": { transform: "translateY(0)", opacity: "1" },
          "45%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0.1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

// bg-gradient-to-r from-white via-sky-500 to-sky-700 bg-clip-text text-transparent
// bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent
// bg-gradient-to-r from-teal-300 via-emerald-500 to-teal-800 bg-clip-text text-transparent
// bg-gradient-to-r from-slate-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent
