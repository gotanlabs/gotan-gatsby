import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextBlockList.scss";

const TextBlockList = ({ title, blocks, titleTop }) => {
  const textBlocks = blocks.map((block) => (
    <div
      className={`${
        titleTop
          ? "textBlockListTop__block"
          : "textBlockList__block"
      }`}
    >
      <div
        className={`body-large ${
          titleTop ? "textBlockListTop__block_title" : "textBlockList__block_title"
        }`}
      >
        {block.title}
      </div>
      <PortableText value={block._rawContent} />
    </div>
  ));

  return (
    <div
      className={`container section-padding  ${
        titleTop ? "textBlockListTop" : "textBlockList"
      }`}
    >
      {title && <h2>{title}</h2>}
      <div
        className={`${
          titleTop ? "textBlockListTop__blocks" : "textBlockList__blocks"
        }`}
      >
        {textBlocks}
      </div>
    </div>
  );
};

export default TextBlockList;
