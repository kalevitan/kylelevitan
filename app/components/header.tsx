// components/Header.tsx
'use client';

import { motion } from "motion/react";

export const Header = () => {
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
            <div className="header__content">
              <h1 id="intro-heading">
                <span className="header__name">Kyle Levitan</span><br/>
                Senior Frontend & Full-Stack Engineer
              </h1>

              <div className="header__introduction">
                <p className="lead">
                  I&apos;m a frontend-first engineer building modern web and mobile products with React, React Native, Next.js, and TypeScript. I focus on clean interfaces, performance, accessibility, and scalable architecture that supports real product outcomes.
                </p>
              </div>

              <motion.div
                  className="header__cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.3, ease: "easeOut" },
                    y: { duration: 0.6, delay: 0.8, ease: "easeInOut", times: [0, 0.5, 1] }
                  }}
                  whileHover={{
                    y: [0, -8, 0],
                    transition: { duration: 0.4, ease: "easeInOut" }
                  }}
                >
                  <a
                    href="#portfolio"
                    className="header__cta__link"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('portfolio')?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    onFocus={(e) => e.target.blur()}
                  >
                    <span className="header__cta__text">View my work</span>
                    <svg
                      className="header__cta__icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14"/>
                      <path d="m19 12-7 7-7-7"/>
                    </svg>
                  </a>
                </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Header;
