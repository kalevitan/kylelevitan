// components/Index.tsx
import React from "react";
import credentialsData from "./credentials.json";

interface Credential {
  category: string;
  skills?: Array<string>;
}

interface CredentialsData {
  credentials: Credential[];
}

const Credentials: React.FC = () => {
  const credentials: CredentialsData = credentialsData;

  return (
    <div className="layout">
      <h2>Credentials</h2>
      <div className="credentials__introduction">
        <p className="lead">
          {`Clearly this is a list of several different languages, technologies, and frameworks. Truthfully, I've dabbled with them all, however, some more extensively than others. The point here is that I love learning and playing with new ways to code. It simply boils down to what's right for the project.`}
        </p>
      </div>
      <div className="credentials__content grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {credentials.credentials.map((credential) => (
          <div className="credentials__list" key={credential.category}>
            <h3>{credential.category}</h3>
            <ul>
              {credential.skills?.map((skill, index) => (
                <li className="flex items-center" key={index}><i className="lni lni-check-square-2"></i>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Credentials;
