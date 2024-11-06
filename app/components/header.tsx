// components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return(
    <div className="layout">
      <h1>
        <span className="header__name">Kyle Levitan</span><br/>
        developer, designer, &<br/> solution<em>ist</em>.
      </h1>
      <div className="header__introduction">
        <p className="lead">
          {`I'm a full-stack developer specializing in building frontend and backend solutions for content management platforms like Drupal and WordPress. I have strong experience working with frameworks such as React and Next.js, along with additional expertise in Vue. My background also includes API development using REST and GraphQL, as well as building and maintaining applications with Ruby on Rails. With a diverse skill set ranging from graphic design to system administration, I deliver adaptable, end-to-end solutions tailored to client needs.`}
        </p>
      </div>
    </div>
  );
}

export default Header;
