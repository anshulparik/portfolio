import AboutMe from "@/pages/AboutMe";
import Main from "../pages/Main";
import Technologies from "@/components/Technologies";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import ContactMe from "@/pages/ContactMe";

export default function Home() {
  return <div>
    <Main />
    <AboutMe />
    <Technologies />
    <Experience />
    <Projects />
    <ContactMe />
  </div>;
}
