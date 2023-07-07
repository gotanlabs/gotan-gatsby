import React from "react";
import { PortableText } from "@portabletext/react";
import "./AnimatedAccordion.scss";
import { MdSouthEast } from "react-icons/md";

const AnimatedAccordion = ({ sections, summary, title }) => {
  return (
    <div className="container section-padding animatedAccordionContainer">
      {title && <h2>{title}</h2>}
      {summary && <div className="body-large animatedAccordionContainer__summary">
        <p>{summary}</p>
      </div>}
      <div className="sections">
        {sections.map((section) => (
          <div key={`section-${section.title}`} className="sectionContainer">
            <a href={`/forCompanies/#${section.title}`} className="body-large">
              <div>{section.title}</div>
              <div>
                {" "}
                <MdSouthEast />
              </div>
            </a>
            <div>
              {" "}
              <div>
                <PortableText value={section._rawContent} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedAccordion;
