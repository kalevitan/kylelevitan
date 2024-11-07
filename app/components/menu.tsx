// components/Menu.tsx
import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="menu pt-4">
      <ul className="grid grid-cols-4 gap-3 max-w-64">
        {/* <li>
          <a href="/Online-Levitan-Resume-2024.pdf" rel="noreferrer" title="See my resume" target="_blank">
            <i className="lni lni-id-card" aria-hidden="true"></i><div className="sr-only">resume</div>
          </a>
        </li> */}
        <li>
          <a href="mailto:kylelevitan@gmail.com" rel="noreferrer" title="Send me an email" target="_blank">
            <i className="lni lni-envelope-1" aria-hidden="true"></i><div className="sr-only">email</div>
          </a>
        </li>
        <li>
          <a href="https://www.drupal.org/u/k_a_l" rel="noreferrer" target="_blank" title="Visit my Drupal.org">
            <i className="lni lni-drupal" aria-hidden="true"></i><div className="sr-only">drupal</div>
          </a>
        </li>
        <li>
          <a href="https://github.com/kalevitan" rel="noreferrer" target="_blank" title="Visit my Github">
            <i className="lni lni-github" aria-hidden="true"></i><div className="sr-only">github</div>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kyle-levitan-1308a441/" rel="noreferrer" target="_blank" title="Visit my Linkedin">
            <i className="lni lni-linkedin" aria-hidden="true"></i><div className="sr-only">linkedin</div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;
