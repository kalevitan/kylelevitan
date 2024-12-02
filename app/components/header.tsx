// components/Header.tsx
'use client';

import React from "react";
import { motion } from "motion/react";

export const Header: React.FC = () => {
  return (
    <motion.div
      className="layout"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5, ease: "easeOut" }}
    >
      <h1>
        <span className="header__name">Kyle Levitan</span><br/>
        developer, designer, &<br/> solution<em>ist</em>.
      </h1>
      <div className="header__introduction">
        <p className="lead">
          {`I'm a software engineer with experience building frontend and backend solutions for a variety of platforms, including content management systems like Drupal and WordPress. I specialize in JavaScript frameworks such as React and Next.js, with additional experience in Vue. My work also includes API development using REST and GraphQL, as well as building and maintaining full-stack applications with technologies like Ruby on Rails. With a strong background in system administration, design, and cloud platforms, I deliver end-to-end solutions tailored to client needs.`}
        </p>
      </div>
    </motion.div>
  );
}

export default Header;
