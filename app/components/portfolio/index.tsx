// components/Portfolio/Index.tsx
'use client';
import React from 'react';
// import Project from "./project";
import dynamic from 'next/dynamic';
import projects from "./projects.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
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
          {`Below are selected projects showcasing my freelance work and personal prototypes. Each project demonstrates tailored solutions and results-driven strategies, crafted to meet the unique needs of diverse clients.`}
        </p>
    </div>
    </div>
    <div className="layout !col-span-3 !px-8">
        <div className="portfolio__list mb-8">
          <Swiper
            pagination={{ el: ".portfolio__pagination", clickable: true, type: "bullets" }}
            modules={[Pagination]}
            spaceBetween={35}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.name} >
                <div className="project">
                  <Project
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    features={project.features}
                    />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="portfolio__pagination"></div>
    </div>
    </>
  );
};

export default Portfolio;
