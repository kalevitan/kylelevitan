// components/Header.tsx
'use client';

import { motion, type Variants } from "motion/react";

// The hero lines rise into place one after another - the same settle the cards
// below use on scroll, so the page opens the way it scrolls. MotionConfig
// (layout.tsx) drops the movement and keeps the fades for reduced motion.
const sequence: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Arrives last, then a single bounce to point the way down. null = start from
// the current value, so the bounce continues from the rise without a snap.
const ctaRise: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: [null, 0, -6, 0],
    transition: {
      y: { duration: 1.1, ease: "easeInOut", times: [0, 0.4, 0.7, 1] },
      opacity: { duration: 0.5, ease: "easeOut" },
    },
  },
};

export const Header = () => {
  return (
    <>
      <div className="layout">
        <section aria-labelledby="intro-heading">
          <motion.div
            className="md:min-h-[70dvh] place-content-center"
            variants={sequence}
            initial="hidden"
            animate="show"
          >
            <div className="header__content">
              <h1 id="intro-heading">
                <motion.span variants={rise} className="header__name">
                  Kyle Levitan
                </motion.span>
                <motion.span variants={rise} className="block">
                  Full-Stack Engineer
                </motion.span>
              </h1>

              <motion.div variants={rise} className="header__introduction max-w-[44rem] space-y-4">
                <p className="lead !pb-0">
                  I&apos;m a frontend-first engineer building modern web and mobile products with React, React Native, Next.js, and TypeScript. I focus on clean interfaces, performance, accessibility, and scalable architecture that supports real product outcomes.
                </p>
                <p className="lead !pb-0">
                  Currently building{" "}
                  <a
                    href="https://levitandigital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline underline decoration-1 underline-offset-4"
                  >
                    Levitan Digital
                  </a>.
                </p>
              </motion.div>

              <motion.div variants={ctaRise} className="header__cta">
                <a
                  href="#portfolio"
                  className="header__cta__link"
                  onClick={(e) => {
                    e.preventDefault();
                    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    document.getElementById('portfolio')?.scrollIntoView({
                      behavior: reduceMotion ? 'auto' : 'smooth'
                    });
                  }}
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
