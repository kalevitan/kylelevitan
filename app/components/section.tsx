// components/Section.tsx
import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  children: ReactNode;
  classes?: string;
}

const Section = ({ title, children, classes }: SectionProps) => {
  return (
    <div id={title} className={`section section--panel section--panel--${title} py-6 md:py-24 ${classes}`}>
      <div className="grid grid-cols-core">
        {children}
      </div>
    </div>
  );
};

export default Section;
