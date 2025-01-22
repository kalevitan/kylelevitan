// components/Header.tsx
'use client';

import React from "react";
import { motion } from "motion/react";

export const Header: React.FC = () => {
  return (
    <>
      <div className="layout">
        <section aria-labelledby="intro-heading">
          <motion.div
            className="md:min-h-[70dvh] place-content-center"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <h1 id="intro-heading">
              <span className="header__name">Kyle Levitan</span><br/>
              developer, designer, &<br/> solution<em>ist</em>.
            </h1>
            <div className="header__introduction">
              <p className="lead">
                I&apos;m a software engineer with expertise in crafting frontend and backend solutions for diverse platforms, including Drupal and WordPress. I specialize in modern JavaScript frameworks like React, Next.js, and Vue, and have experience developing APIs with REST and GraphQL. Additionally, I build full-stack applications using Ruby on Rails and leverage my background in system administration and cloud platforms to deliver complete, client-focused solutions.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Header;
