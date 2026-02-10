import React from "react";

const Certifications: React.FC = () => {
  return (
    <>
      <div className="layout">
        <section aria-labelledby="certifications-heading">
          <h2 id="certifications-heading">Certifications & Training</h2>
          <div className="skills__introduction">
            <p className="lead">
              Certifications and training that reflect both my modern frontend focus and earlier foundational experience.
            </p>
          </div>
        </section>
      </div>
      <div className="layout xl:!col-span-3 xl:mx-40 2xl:mx-60 mx-0 !px-0">
        <section aria-label="Certification List">
          <div className="skills__content grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center px-4 lg:px-0 max-w-[1472px] m-auto">
            <div className="drupal-developer emblem rounded-full shadow-sm gradient-right p-8 min-w-fit place-content-center aspect-[1]">
              <h3>Drupal Developer</h3>
              <p>
                Foundation in scalable CMS architecture and content systems.
              </p>
            </div>
            <div className="drupal-frontend-specialist emblem rounded-full shadow-sm gradient-left p-8 place-content-center aspect-[1]">
              <h3>Drupal Frontend Specialist</h3>
              <p>
                Foundation in accessibility, templating, and structured content systems.
              </p>
            </div>
            <div className="next-js-developer emblem rounded-full shadow-sm gradient-right p-8 place-content-center aspect-[1]">
              <h3>Next.js & React</h3>
              <p>
                Modern React and Next.js patterns with focus on performance and architecture.
              </p>
            </div>
            <div className="ruby-developer emblem rounded-full shadow-sm gradient-left p-8 place-content-center aspect-[1]">
              <h3>Ruby Cohort Training</h3>
              <p>
                Strengthened backend fundamentals and scripting fluency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Certifications;
