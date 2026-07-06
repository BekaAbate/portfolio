import { projects } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";

export const Projects = () => {
  return (
    <section className="px-6 md:px-12">
      <h1 className="uppercase font-bold font-serif text-3xl w-full text-center mb-14">
        featured projects
      </h1>
      <div className="grid md:grid-cols-2 gap-12 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
