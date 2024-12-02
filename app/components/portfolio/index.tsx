// components/Portfolio/Index.tsx
'use client';
import React from 'react';
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
            {`Below are selected projects showcasing my freelance work and personal prototypes. Each project highlights tailored solutions and results-oriented strategies, crafted to meet the unique needs of diverse clients and demonstrate my passion for innovation. Through these ventures, I continually strive to build impactful, user-centered applications that reflect my dedication to solving real-world problems—and sometimes just having fun.`}
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
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.name} className="!grid !h-auto">
                <div className="project">
                  <Project
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    features={project.features}
                    link={project.link}
                    />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="portfolio__pagination py-6"></div>
      </div>
    </>
  );
};

export default Portfolio;
