import { DockLinks } from "@/components/DockLinks";
import { Header } from "@/components/Header";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <DockLinks />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
