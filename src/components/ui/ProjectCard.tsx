import { Project } from "@/data/projects";

import { ExternalLink } from "lucide-react";
import { SiGithub, SiYoutube } from "react-icons/si";
import Image from "next/image";

export default function ProjectCard({
  id,
  title,
  image,
  subtitle,
  category,
  description,
  stack,
  live,
  demo,
  github,
}: Project) {
  return (
    <div className="group relative flex flex-col overflow-hidden border border-muted-foregroud hover:border-foreground transition-all p-6 md:p-8">
      {/* Top row */}
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide">
        <span className="">{id}</span>
        <div className="flex items-center gap-1">
          {live && (
            <a
              href={live}
              aria-label={`${title} live demo`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <ExternalLink className="h-4.5 w-4.5" />
            </a>
          )}
          {github && (
            <a
              href={github}
              aria-label={`${title} source code`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <SiGithub className="h-4 w-4" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              aria-label={`${title} video`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <SiYoutube className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Visual mock */}
      <div className="relative mb-8 aspect-[16/9] overflow-hidden border border-muted-foregroud bg-background">
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
          <p className="mt-1 font-mono text-sm uppercase tracking-widest">
            {subtitle} — {category}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="font-mono mb-6 text-xs lowercase leading-relaxed text-muted-foregroud">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {stack.map((st, index) => (
          <span
            key={index}
            className="border border-muted-foregroud px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foregroud"
          >
            {st}
          </span>
        ))}
      </div>
    </div>
  );
}
