import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        light: "#ffffff"
      },
      scale: {
        '175': '1.75',
        '180': '1.80',
        '200': '2.00',
        '250': '2.50',
        '300': '3.00',
      }
    },
  },
  plugins: [],
};
export default config;
