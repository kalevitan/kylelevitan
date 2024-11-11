// components/Portfolio/Project.tsx
import React from "react";
import Image from "next/image";

interface ProjectProps {
  name: string;
  image: string;
  description?: string;
  features?: Array<string>;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({ name, image, description, features, link }) => {
  return (
    <div className="portfolio__slide">
      <div className="portfolio__image border-gray-400 border-opacity-25 rounded-sm shadow-md object-contain max-h-[485px] overflow-hidden">
        <Image
          className="aspect-ratio-content"
          src={image}
          alt={name}
          width={620}
          height={620}
          priority // Optional: Add priority if this image is important
        />
      </div>
      <div className="portfolio__details--wrapper">
        {link ? (
          <h3><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></h3>
        ) : (
          <h3>{name}</h3>
        )}
        {description && (
          <div className="portfolio__description mb-2">
            <p>{description}</p>
          </div>
        )}
        <ul className="portfolio__details">
          {features?.map((feature, index) => (
            <li className="flex items-center" key={index}>
              <i className="lni lni-chevron-left rotate-180"></i>{feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
