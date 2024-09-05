import travellerHome from "../../public/images/home_lt.png";
import teaStationHome from "../../public/images/home_ts.png";
import animeInsightHome from "../../public/images/home_ai.png";

import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { Url } from "next/dist/shared/lib/router/router";
import { FaReact, FaNode, FaAws, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiNestjs } from "react-icons/si";

export const TECHNOLOGIES = [
  { icon: FaReact, color: "text-cyan-400" },
  { icon: RiNextjsFill, color: "text-white" },
  { icon: SiTypescript, color: "text-sky-700" },
  { icon: FaNode, color: "text-green-500" },
  { icon: SiNestjs, color: "text-red-600" },
  { icon: FaAws, color: "text-yellow-600" },
  { icon: FaDocker, color: "text-blue-400" },
  { icon: IoLogoJavascript, color: "text-yellow-300" },
  { icon: SiMongodb, color: "text-green-600" },
  { icon: GrMysql, color: "text-sky-700" },
] as const;

export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    role: "Software Engineer",
    company: "Aubergine Solutions Private Limited, Ahmedabad",
    description: `At Aubergine Solutions, I managed and mentored a team of interns, leading a major project from inception to completion. I designed the entire project schema and workflow, creating robust and scalable components that ensured the project's success and longevity. My role involved precise project planning and client communication, where I provided accurate time estimates and created compelling Proof of Concepts (POCs) using technologies like Strapi and React, directly influencing client decisions.`,
    technologies: [
      "Tailwind CSS",
      "React.js",
      "Prisma",
      "Node.js",
      "Postgres",
      "Shadcn",
    ],
  },
  {
    year: "Feb 2024 - Apr 2024",
    role: "Software Developer",
    company: "Markovate, Gurugram",
    description: `During my time at Markovate, I spearheaded several AI Proof of Concepts (POCs), focusing on advanced AI models and frameworks such as Langchain and Llama Index. I developed and implemented Multimodal RAGs (Retriever-Reader-Generator models) capable of processing both text and image inputs, creating sophisticated AI chatbots tailored to client needs. Additionally, I integrated Guardrails AI to ensure data security and customized response formats, enhancing the user experience.`,
    technologies: ["Python", "Langchain", "Node.js", "OpenAI", "Llama Index"],
  },
  {
    year: "Nov 2021 - Feb 2024",
    role: "Junior Software Developer",
    company: "Mysense Technologies Private Limited, Mohali",
    description: `At Mysense Technologies, I played a key role in developing and maintaining complex e-commerce applications, including an Admin dashboard and Order Management System. I was responsible for designing and constructing modules from the ground up, implementing robust server-side logic with NestJS, and ensuring secure user authentication. My work included integrating APIs, optimizing user experience, and applying SOLID principles to maintain a clean and efficient codebase. Additionally, I enhanced user insights through comprehensive Google Analytics data tracking and collaborated closely with my team to troubleshoot, debug, and deliver high-quality software solutions.`,
    technologies: [
      "React.js",
      "Next.js",
      "Nest.js",
      "MsSQL",
      "Firebase",
      "Electron",
    ],
  },
] as const;

export const ABOUT = {
  text1: "Transforming Ideas into Powerful Applications",
  text2:
    "Hello! I'm Anshul Parik, a Software Engineer with over 3 years of experience in crafting scalable, user-friendly applications. My expertise spans full-stack development, with a strong focus on backend and frontend technologies. I’m passionate about delivering high-quality software that meets client needs, and I thrive in collaborative environments where effective communication and problem-solving are key. Always eager to learn and innovate, I aim to contribute impactful solutions that drive success. My passion for detail ensures that every project is polished and professional.",
} as const;

export const FOOTER = {
  text1: "Let's keep in touch!",
  text2: "Find me on any of these platforms...",
} as const;

export const PROJECTS = [
  {
    title: "Anime Insight",
    image: animeInsightHome,
    description:
      "The Anime Insight project is a dynamic web application designed to provide users with comprehensive ratings and information about their favorite anime series. Built with Next.js, this project utilizes server actions for efficient data fetching, ensuring a seamless and responsive experience. The application features infinite scroll, allowing users to effortlessly browse through an extensive list of anime without interruptions. Engaging animations enhance the user interface, creating a visually appealing and interactive platform for anime enthusiasts.",
    technologies: [
      "Next,js",
      "Tailwind CSS",
      "Server Actions",
      "Server Components",
      "Framer Motion",
      "Infinite Scroll",
    ],
    liveLink: process?.env?.NEXT_PUBLIC_ANIME_INSIGHT_LINK as Url,
    githubLink: process?.env?.NEXT_PUBLIC_ANIME_INSIGHT_GITHUB as Url,
  },
  {
    title: "Tea Station",
    image: teaStationHome,
    description:
      "Tea Station is a captivating web platform crafted specifically for tea enthusiasts. Leveraging Flexbox for a responsive and elegant layout, the site features a custom-designed hamburger menu for intuitive navigation. Modern animations enhance the user experience, adding a touch of sophistication and interactivity. Whether exploring tea varieties or learning brewing techniques, Tea Station offers a beautifully designed space that caters to all tea lovers with style and functionality.",
    technologies: ["HTML", "CSS", "JS", "Animations", "Flexbox"],
    liveLink: process?.env?.NEXT_PUBLIC_TEA_STATION_LINK as Url,
    githubLink: process?.env?.NEXT_PUBLIC_TEA_STATION_GITHUB as Url,
  },
  {
    title: "Lone Traveller",
    image: travellerHome,
    description:
      "Lone Traveller is an inspiring website designed for adventurers and wanderers. It features modern animations that bring the site to life, creating an engaging and immersive experience. The highlight of the site is its stunning image gallery, showcasing breathtaking travel destinations and experiences. With its sleek design and dynamic visuals, Lone Traveller is the perfect platform for explorers seeking inspiration and information for their next adventure.",
    technologies: ["HTML", "CSS", "JS", "Flexbox", "Animations", "Gallery"],
    liveLink: process?.env?.NEXT_PUBLIC_LONE_TRAVELLER_LINK as Url,
    githubLink: process?.env?.NEXT_PUBLIC_LONE_TRAVELLER_GITHUB as Url,
  },
] as const;
