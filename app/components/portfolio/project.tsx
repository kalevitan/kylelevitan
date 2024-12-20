// components/Portfolio/Project.tsx
import React from "react";
import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";

interface ProjectProps {
  name: string;
  image: string;
  description?: string;
  features?: Array<string>;
  link?: string;
  source?: string;
}

const Project: React.FC<ProjectProps> = ({ name, image, description, features, link, source }) => {
  return (
    <div className="portfolio__slide relative !p-12 rounded-2xl grid auto-flow-col gap-12 md:grid-cols-[1fr,40%] xlg:grid-cols-[1fr,35%] items-center">
      <div className="portfolio__image relative border-gray-400 border-opacity-25 rounded-2xl shadow-md object-contain max-h-[485px] overflow-hidden md:order-1">
        <Image
          src={image}
          alt={name}
          width={620}
          height={620}
          priority
        />
      </div>
      <div className="portfolio__details--wrapper flex flex-col">

        <div className="portfolio__header flex items-center justify-between">
          <h3>{name}</h3>
          {(link || source) && (
            <div className="portfolio__cta flex gap-4 mt-4">
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer"><span className="sr-only">Visit live site</span><ExternalLink/></a>
              )}
              {source && (
                <a href={source} target="_blank" rel="noopener noreferrer"><span className="sr-only">View source code</span><Code/></a>
              )}
            </div>
          )}
        </div>

        {description && (
          <div className="portfolio__description my-4">
            <p className="lead !pb-0">{description}</p>
          </div>
        )}
        <ul className="portfolio__details flex flex-wrap gap-2 my-4">
          {features?.map((feature, index) => (
            <li className="flex items-center px-4 py-2 rounded-2xl bg-[var(--background-gray)]" key={index}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
