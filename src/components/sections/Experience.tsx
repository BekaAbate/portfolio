import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-10 md:px-16 mb-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="uppercase font-bold font-serif text-4xl w-full text-center mb-16">
          Experience
        </h1>
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex flex-col gap-8 md:flex-row md:items-start"
            >
              <span className="text-6xl font-extralight font-serif text-foreground transition-colors md:text-7xl md:leading-none">
                {exp.number}
              </span>
              <div className="flex-1 border-t pt-8 md:pt-0 md:border-t-0 md:border-t-muted-foregroud md:pl-12">
                <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-light uppercase text-foreground md:text-3xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-xs font-mono font-medium text-foreground uppercase">
                      {exp.company}
                    </p>
                  </div>
                  <span className="mt-2 text-xs font-mono font-semibold uppercase tracking-wider text-foreground md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-6 max-w-xl text-sm font-mono leading-relaxed text-muted-foregroud">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
