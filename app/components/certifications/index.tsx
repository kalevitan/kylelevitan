import React from "react";

const Certifications: React.FC = () => {
  return (
    <>
    <div className="layout">
      <h2>Certifications & Training</h2>
      <div className="skills__introduction">
        <p className="lead">
          I have pursued various certifications and training programs to deepen my expertise in web and application development. These experiences have provided me with a solid foundation in the technologies and best practices that I rely on in my daily work.
        </p>
      </div>
    </div>
    <div className="layout xl:!col-span-3 xl:mx-40 2xl:mx-60 mx-0 !px-0">
      <div className="skills__content grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center px-4 lg:px-0">
        <div className="drupal-developer emblem rounded-full shadow-sm gradient-right p-8 min-w-fit place-content-center aspect-[1]">
          <h3>Drupal Developer</h3>
          <p>
            Acquia Certified Developer - Drupal 8
          </p>
        </div>
        <div className="drupal-frontend-specialist emblem rounded-full shadow-sm gradient-left p-8 place-content-center aspect-[1]">
          <h3>Drupal Frontend Specialist</h3>
          <p>
            Acquia Certified Frontend Specialist - Drupal 8
          </p>
        </div>
        <div className="next-js-developer emblem rounded-full shadow-sm gradient-right p-8 place-content-center aspect-[1]">
          <h3>Next.js 15 & React</h3>
          <p>
            Completed Professional Training: Next.js 15 & React (Udemy)
          </p>
        </div>
        <div className="ruby-developer emblem rounded-full shadow-sm gradient-left p-8 place-content-center aspect-[1]">
          <h3>Ruby Cohort Training</h3>
          <p>
            Completed 8-Week Ruby Cohort Training (Tech Talent South)
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Certifications;