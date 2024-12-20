// components/Portfolio/Index.tsx
'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import projects from "./projects.json"
import 'swiper/css';
import 'swiper/css/pagination';

const Project = dynamic(() => import('./project'), {
  loading: () => <p>Loading...</p>,
});

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="layout">
        <h2>Portfolio</h2>
        <div className="portfolio__introduction">
          <p className="lead">
            {`Below are selected projects showcasing my freelance work and personal prototypes. Each project highlights tailored solutions and results-oriented strategies, crafted to meet the unique needs of diverse clients and demonstrate my passion for innovation. Through these ventures, I continually strive to build impactful, user-centered applications that reflect my dedication to solving real-world problems—and sometimes just having fun.`}
          </p>
        </div>
      </div>
      <div className="layout 2xl:!col-span-3 2xl:mx-60 mx-0">
        <div className="portfolio__list grid gap-12 mb-8">
          {projects?.map((project, index) => (
            <div className="project sm:contents" key={index}>
              <Project
                name={project.name}
                image={project.image}
                description={project.description}
                features={project.features}
                link={project.link}
                source={project.source}
                />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
