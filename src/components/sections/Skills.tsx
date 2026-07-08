import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-10 md:px-16 mb-20">
      <div className="mx-auto">
        <h1 className="uppercase font-bold font-serif text-3xl w-full text-center mb-14">
          Skills
        </h1>
        <div className="flex items-center gap-8 flex-wrap justify-center">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center  gap-3 rounded-lg p-4"
              >
                <Icon className="h-10 w-10 md:h-20 md:w-20" />
                <p className="text-xs font-mono text-muted-foregroud text-nowrap uppercase">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
