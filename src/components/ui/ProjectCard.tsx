import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
  id,
  title,
  image,
  subtitle,
  category,
  year,
  role,
  description,
  stack,
}: Project) {
  return (
    <a
      href="#"
      className="group relative flex flex-col overflow-hidden border border-border p-6 md:p-8"
    >
      {/* Top row */}
      <div className="mb-8 flex items-start justify-between font-mono text-[10px] uppercase tracking-wide">
        <span className="">{id}</span>
        <span>{year}</span>
      </div>

      {/* Visual mock */}
      <div className="relative mb-8 aspect-[16/9] overflow-hidden border border-border bg-background">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <Image
          src={image}
          alt="project image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Title */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-4xl font-bold uppercase leading-none tracking-tighter md:text-5xl">
            {title}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest">
            {subtitle} — {category}
          </p>
        </div>
        <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>

      {/* Description */}
      <p className="font-mono mb-6 text-sm lowercase leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {stack.map((st, index) => (
          <span
            key={index}
            className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            {st}
          </span>
        ))}
      </div>
    </a>
  );
}
