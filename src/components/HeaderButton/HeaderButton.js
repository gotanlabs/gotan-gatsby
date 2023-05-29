import React from "react";
import "./HeaderButton.scss"


function HeaderButton({href, style, text}) {

  return (
    <a href={href} title={text} className={`header-button ${style}`}>
      <p className="mb-0">{text}</p>
    </a>
  );
}

export default HeaderButton;
