// components/Index.tsx
'use client';
import React from "react";
import skillsData from "./skills.json";
import { LucideProps, Layout, Server, Code2, Workflow } from "lucide-react";
import Accordion from "./accordion";

interface Skill {
  type: string;
  list: string[];
}

interface Credential {
  icon: string;
  category: string;
  skills?: Skill[];
  grid: string;
}

interface SkillsData {
  skills: Credential[];
}

interface IconProps extends LucideProps {
  iconName: string;
}

const Skills: React.FC = () => {
  const skills: SkillsData = skillsData;
  // const [expandedCategory, setExpandedCategory] = useState('');

  // const handleCategoryClick = (category: string) => {
  //   setExpandedCategory(category === expandedCategory ? "" : category);
  //   console.log(expandedCategory);
  // }

  const iconMapping = {
    Layout,
    Server,
    Code2,
    Workflow,
  };

  const DynamicIcon: React.FC<IconProps> = ({ iconName, ...props }) => {
    const LucideIcon = iconMapping[iconName as keyof typeof iconMapping];
    return <LucideIcon {...props} />;
  };

  return (
    <>
      <div className="layout">
        <h2>Technical Skills</h2>
        <div className="skills__introduction">
          <p className="lead">
            This is a curated list of languages, technologies, and frameworks that I&apos;ve worked with across various projects. While my experience with each varies, what excites me most is exploring and adapting to new tools and approaches. Ultimately, it&apos;s all about choosing the right solution for the project.
          </p>
        </div>
      </div>
      <div className="layout xl:!col-span-3 xl:mx-40 2xl:mx-60 mx-0 !px-0">
        <div className="skills__content grid gap-6 grid-cols-1 md:grid-cols-12">
          {skills.skills.map((credential) => (
            <div className={`skills__list flex flex-col p-12 shadow-sm border-spacing-2 rounded items-start gap-6 ${credential.grid == 'large' ? 'col-span-full md:col-span-7 gradient-left' : 'col-span-full md:col-span-5 gradient-right'}`} key={credential.category}>
              <h3 className="m-0 flex gap-2 items-center">
                <div className="p-3 rounded-lg bg-[var(--background-gray)] bg-opacity-10">
                  <DynamicIcon className={"w-5 h-5 text-[var(--brand)]"} iconName={credential.icon} size={25} />
                </div>
                {credential.category}
              </h3>
              <Accordion
                items={credential.skills || []}
                // expandedCategory={expandedCategory}
                // setExpandedCategory={setExpandedCategory}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills;
