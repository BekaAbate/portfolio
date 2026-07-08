import { projects } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";
import { SiGithub } from "react-icons/si";

export const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-16 mb-16">
      <h1 className="uppercase font-bold font-serif text-3xl w-full text-center mb-14">
        featured
        <span className="text-stroke ml-2">projects</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-12 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
