import React from "react";
import "./Footer.scss";

const FooterLinkBlock = ({ links, title }) => {
  const linksList = links.map((link) => {
    const url = link?.url;
    const linkTitle = link?.text;
    const key = link?._key;

    return (
      <li className={`body-small mb-2 ${url ? "linktrue" : ""}`} key={key} >
        <a href={url}>{linkTitle}</a>
      </li>
    );
  });

  return (
    <div className="py-1">
      <h5 className="title-small">{title}</h5>
      <ul>{linksList}</ul>
    </div>
  );
};

export default FooterLinkBlock;
