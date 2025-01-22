// components/Section.tsx
import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  children: ReactNode;
  classes?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, classes }) => {
  return (
    <div className={`section section--panel py-6 md:py-24 ${classes}`}>
      <div className="grid grid-cols-core">
        {children}
      </div>
    </div>
  );
};

export default Section;
