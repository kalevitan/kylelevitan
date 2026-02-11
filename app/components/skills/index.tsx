"use client";
import skillsData from "./skills.json";
import { LucideProps, Layout, Server, Code2, Sparkles } from "lucide-react";

interface Credential {
  icon: string;
  category: string;
  items: string[];
  grid: string;
}

interface SkillsData {
  skills: Credential[];
}

interface IconProps extends LucideProps {
  iconName: string;
}

const Skills = () => {
  const skills: SkillsData = skillsData;

  const iconMapping = {
    Layout,
    Server,
    Code2,
    Sparkles,
  };

  const DynamicIcon = ({ iconName, ...props }: IconProps) => {
    const LucideIcon = iconMapping[iconName as keyof typeof iconMapping];
    return <LucideIcon {...props} />;
  };

  return (
    <>
      <div className="layout">
        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading">Core Competencies</h2>
          <div className="skills__introduction">
            <p className="lead">
              These capabilities reflect how I approach day-to-day product engineering, the areas where I consistently apply judgment, make tradeoffs, and deliver impact.
They represent how I think about building modern software, from interface design through long-term maintainability.
            </p>
          </div>
        </section>
      </div>
      <div className="layout xl:!col-span-3 xl:mx-40 2xl:mx-60 mx-0 !px-0">
        <section aria-label="Skills Categories">
          <div className="skills__content grid gap-6 grid-cols-1 md:grid-cols-12 max-w-[1472px] m-auto">
            {skills.skills.map((credential) => (
              <div
                className={`skills__list flex flex-col p-12 shadow-sm border-spacing-2 rounded items-start gap-6 ${
                  credential.grid == "large"
                    ? "col-span-full md:col-span-7 gradient-left"
                    : "col-span-full md:col-span-5 gradient-right"
                }`}
                key={credential.category}
              >
                <h3 className="m-0 flex gap-2 items-center">
                  <div className="p-3 rounded-lg bg-[var(--background-gray)] bg-opacity-10">
                    <DynamicIcon
                      className={"w-5 h-5 text-[var(--brand)]"}
                      iconName={credential.icon}
                      size={25}
                      aria-hidden="true"
                    />
                  </div>
                  {credential.category}
                </h3>
                <div className="space-y-4 text-[var(--gray)]">
                  {credential.items.map((item, index) => (
                    <p className="leading-relaxed" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
