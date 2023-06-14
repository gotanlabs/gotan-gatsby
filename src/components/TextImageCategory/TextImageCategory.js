import React from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImageCategory.scss";

const TextImageCategory = ({data}) => {
  console.log(data)
  return (
    <>
      {text && (
        <div className="textImage">
          {category && <p className="textImage__title">{data}</p>}
          {textBlock.title && <h3 className="textImage__title">{data.title}</h3>}
          <div className="textImage__content">
            <div className="textImage__text">
              <PortableText value={data._rawContent} />
            </div>
            {image && <SanityImage
              {...image}
              alt={`${title}`}
              className="textImage__image"
            />}
          </div>
        </div>
      )}
    </>
  );
};

export default TextImageCategory;
