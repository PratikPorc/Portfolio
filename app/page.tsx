import Cursor from "./components/ui/Cursor";
import Navbar from "./components/ui/Navbar";
import Divider from "./components/ui/Divider";
import Footer from "./components/ui/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Hackathons from "./components/sections/Hackathons";
import Extracurricular from "./components/sections/Extracurricular";
import Certifications from "./components/sections/Certifications";
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
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Hackathons />
        <Divider />
        <Extracurricular />
        <Divider />
        <Certifications />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
