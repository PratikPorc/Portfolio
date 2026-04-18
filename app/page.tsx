import Cursor from "./components/ui/Cursor";
import Navbar from "./components/ui/Navbar";
import Divider from "./components/ui/Divider";
import Footer from "./components/ui/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Hackathons from "./components/sections/Hackathons";
import Extracurricular from "./components/sections/Extracurricular";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Education />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Certifications />
        <Divider />
        <Hackathons />
        <Divider />
        <Extracurricular />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}