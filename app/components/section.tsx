// components/Section.tsx
import React, { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {

  return (
    <section id={title} className="section section--panel py-0 md:py-24">
      <div className="grid grid-cols-core">
        {children}
      </div>
    </section>
  );
};

export default Section;
