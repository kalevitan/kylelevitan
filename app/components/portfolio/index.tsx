"use client";
import React from "react";
import dynamic from "next/dynamic";
import projects from "./projects.json";

const Project = dynamic(() => import("./project"), {
  loading: () => <p>Loading...</p>,
});

const Portfolio = () => {
  return (
    <>
      <div className="layout">
        <section aria-labelledby="portfolio-heading">
          <h2 id="portfolio-heading">Portfolio</h2>
          <div className="portfolio__introduction">
            <p className="lead" role="doc-subtitle">
              These are some of my recent projects that show how I build and ship modern
              products across web and mobile - anchored in React, React Native, Next.js, and
              TypeScript with a product-first mindset.
            </p>
          </div>
        </section>
      </div>
      <div className="layout xl:!col-span-3 xl:mx-40 2xl:mx-60 mx-0 !px-0">
        <section aria-label="Portfolio Projects">
          <ul
            className="portfolio__list grid gap-14 mb-8 list-none"
            role="list"
          >
            {projects?.map((project, index) => (
              <li className="project sm:contents" key={project.name || index}>
                <Project
                  name={project.name}
                  type={project.type}
                  image={project.image}
                  description={project.description}
                  features={project.features}
                  link={project.link}
                  source={project.source}
                  role={project.role}
                  focus={project.focus}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
