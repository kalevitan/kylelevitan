// components/Index.tsx
'use client';
import React from "react";
import credentialsData from "./credentials.json";
import { LucideProps, icons as LucideIcons } from 'lucide-react';
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

interface CredentialsData {
  credentials: Credential[];
}

interface IconProps extends LucideProps {
  iconName: string;
}

const Credentials: React.FC = () => {
  const credentials: CredentialsData = credentialsData;
  // const [expandedCategory, setExpandedCategory] = useState('');

  // const handleCategoryClick = (category: string) => {
  //   setExpandedCategory(category === expandedCategory ? "" : category);
  //   console.log(expandedCategory);
  // }

  const DynamicIcon = ({ iconName, ...props }: IconProps) => {
    const LucideIcon = LucideIcons[iconName as keyof typeof LucideIcons];
    if (!LucideIcon || typeof LucideIcon !== "function") return null;
    return <LucideIcon {...props} />;
  };

  return (
    <>
      <div className="layout">
        <h2>Technical Skills</h2>
        <div className="credentials__introduction">
          <p className="lead">
            This is a curated list of languages, technologies, and frameworks that I&apos;ve worked with across various projects. While my experience with each varies, what excites me most is exploring and adapting to new tools and approaches. Ultimately, it’&apos;s all about choosing the right solution for the project.
          </p>
        </div>
      </div>
      <div className="layout xl:!col-span-3 xl:mx-40 2xl:mx-60 mx-0 !px-0">
        <div className="credentials__content grid gap-6 grid-cols-1 md:grid-cols-12">
          {credentials.credentials.map((credential) => (
            <div className={`credentials__list flex flex-col p-12 border-spacing-2 rounded items-start gap-6 ${credential.grid == 'large' ? 'col-span-full sm:col-span-7 gradient-left' : 'col-span-full sm:col-span-5 gradient-right'}`} key={credential.category}>
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

export default Credentials;
