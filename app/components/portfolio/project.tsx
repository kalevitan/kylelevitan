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

const Project: React.FC<ProjectProps> = ({
  name,
  type,
  image,
  description,
  features,
  link,
  source,
  purpose,
  year
}) => {
  return (
    <article className="portfolio__slide relative p-8 sm:p-12 rounded grid auto-flow-col gap-0 sm:gap-14 md:grid-cols-[1fr,45%] xlg:grid-cols-[1fr,35%] items-center max-w-[1472px]">
      <div className="portfolio__details--wrapper flex flex-col">
        <header className="portfolio__header flex flex-col">
          <span className="text-[var(--gray)] text-sm" role="doc-subtitle">{type}</span>
          <h3 id={`project-${name.toLowerCase().replace(/\s+/g, '-')}`} className="mb-0">{name}</h3>
        </header>
        {description && (
          <div className="portfolio__description my-4">
            <p className="lead !pb-0">{description}</p>
          </div>
        )}
        <footer className="portfolio__footer flex sm:flex-col gap-3 mt-6">
          <dl className="flex gap-3 flex-wrap">
            <div className="flex">
              <dt className="text-[var(--gray)] text-sm mr-2">Purpose:</dt>
              <dd className="text-[var(--gray)] text-sm">{purpose}</dd>
            </div>
            <div className="flex">
              <dt className="text-[var(--gray)] text-sm mr-2">Year:</dt>
              <dd className="text-[var(--gray)] text-sm">{year}</dd>
            </div>
          </dl>
        </footer>
      </div>
      <div className="portfolio__image-wrapper pt-8 sm:pt-0">
        <figure className="portfolio__image relative border-gray-400 rounded border-opacity-25 shadow-md object-contain max-h-[335px] overflow-hidden">
          <Image
            src={image}
            alt={`Screenshot of ${name} project`}
            width={620}
            height={345}
            priority
          />
        </figure>
        {features && features.length > 0 && (
          <div className="technologies-used">
            <h4 className="sr-only">Technologies Used</h4>
            <ul className="portfolio__details flex flex-wrap gap-2 my-5" role="list">
              {features.map((feature, index) => (
                <li className="flex items-center px-4 py-2 rounded-2xl bg-[var(--background-gray)]" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {(link || source) && (
          <div className="portfolio__cta flex gap-3 mt-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
                aria-label={`Visit ${name} live site`}
              >
                <div className="p-3 rounded-lg bg-[var(--brand-opaque)] bg-opacity-10">
                  <ExternalLink className="w-5 h-5 text-[var(--brand)]" aria-hidden="true" />
                </div>
              </a>
            )}
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
                aria-label={`View ${name} source code`}
              >
                <div className="p-3 rounded-lg bg-[var(--brand-opaque)] bg-opacity-10">
                  <Code2 className="w-5 h-5 text-[var(--brand)]" aria-hidden="true" />
                </div>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default Project;
