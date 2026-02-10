// components/Menu.tsx
import React from "react";

const obfuscateEmail = (username: string, domain: string) => {
  return `${username}@${domain}`;
};

const Menu: React.FC = () => {
  const email = obfuscateEmail('kylelevitan', 'gmail.com');

  return (
    <nav aria-label="Social links" className="menu">
      <ul className="grid grid-cols-4 gap-4 max-w-64 items-center list-none p-0 m-0">
        <li>
          <a
            href={`mailto:${email}`}
            aria-label="Send me an email"
          >
            <i className="lni lni-envelope-1" aria-hidden="true"></i>
            <span className="sr-only">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.drupal.org/u/k_a_l"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Drupal.org profile"
          >
            <i className="lni lni-drupal" aria-hidden="true"></i>
            <span className="sr-only">Drupal.org</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kalevitan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <i className="lni lni-github" aria-hidden="true"></i>
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kyle-levitan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <i className="lni lni-linkedin" aria-hidden="true"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
