import React from "react";

const FooterLinkArray = ({ links}) => {
  const linksList = links.map((link) => {
    const url = link?.url;
    const linkTitle = link?.text;
    const key = link?._key;

    return (
      <li className="body-small mb-2" key={key} >
        <a href={url}>{linkTitle}</a>
      </li>
    );
  });

  return (
    <div className="py-1">
      <ul>{linksList}</ul>
    </div>
  );
};

export default FooterLinkArray;
