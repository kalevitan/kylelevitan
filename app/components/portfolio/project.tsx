// components/Portfolio/Project.tsx
import React from "react";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectProps {
  name: string;
  type: string;
  image: string;
  description?: string;
  features?: Array<string>;
  link?: string;
  source?: string;
  purpose?: string;
  year?: string;
}

const Project: React.FC<ProjectProps> = ({ name, type, image, description, features, link, source, purpose, year }) => {
  return (
    <div className="portfolio__slide relative p-8 sm:p-12 rounded grid auto-flow-col gap-0 sm:gap-14 md:grid-cols-[1fr,45%] xlg:grid-cols-[1fr,35%] items-center">
      <div className="portfolio__details--wrapper flex flex-col">
        <div className="portfolio__header flex flex-col">
          <span className="text-[var(--gray)] text-sm">{type}</span>
          <h3 className="mb-0">{name}</h3>
        </div>
        {description && (
          <div className="portfolio__description my-4">
            <p className="lead !pb-0">{description}</p>
          </div>
        )}
        <div className="portfolio__footer flex sm:flex-col gap-3 mt-6">
          <div className="text-[var(--gray)] text-sm"><span className="mr-2">Purpose:</span>{purpose}</div>
          <div className="text-[var(--gray)] text-sm"><span className="mr-2">Year:</span>{year}</div>
        </div>
      </div>
      <div className="portfolio__image-wrapper pt-8 sm:pt-0">
        <div className="portfolio__image relative border-gray-400 rounded border-opacity-25 shadow-md object-contain max-h-[485px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={620}
            height={620}
            priority
          />
        </div>
        <ul className="portfolio__details flex flex-wrap gap-2 my-4">
          {features?.map((feature, index) => (
            <li className="flex items-center px-4 py-2 rounded-2xl bg-[var(--background-gray)]" key={index}>
              {feature}
            </li>
          ))}
        </ul>
        {(link || source) && (
            <div className="portfolio__cta flex gap-3 mt-4">
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" title="Visit live site">
                  <div className="p-3 rounded-lg bg-[var(--brand-opaque)] bg-opacity-10">
                    <span className="sr-only">Visit live site</span><ExternalLink className="w-5 h-5 text-[var(--brand)]" size={25}/>
                  </div>
                </a>
              )}
              {source && (
                <a href={source} target="_blank" rel="noopener noreferrer" title="View source code">
                  <div className="p-3 rounded-lg bg-[var(--brand-opaque)] bg-opacity-10">
                    <span className="sr-only">View source code</span><Code2 className="w-5 h-5 text-[var(--brand)]" size={25}/>
                  </div>
                </a>
              )}
            </div>
          )}
      </div>
    </div>
  );
}

export default Project;
