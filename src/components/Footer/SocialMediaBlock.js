import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import  {Icon}  from "..";

const SocialMediaBlock = ({ links, title }) => {
  const socialMediaList = links.map((link) => (
    <CustomLink
      key={link._key}
      icon={<Icon code={link.icon.icon}></Icon>}
      href={link.link.url}
      text={link.link.text}
      style={link.style}
    />
  ));
  return (
    <div className="py-1">
      <h5 className="title-small">{title}</h5>
      <div className="row">{socialMediaList}</div>
    </div>
  );
};

export default SocialMediaBlock;
