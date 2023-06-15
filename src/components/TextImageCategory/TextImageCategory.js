import React from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImageCategory.scss";

const TextImageCategory = ({data}) => {
  console.log("TIC", data)
  return (
    <>
      { (
        <div className="textImage">
          {data.category && <p className="textImage__title">{data.category}</p>}
          {data.textBlock.title && <h3 className="textImage__title">{data.textBlock.title}</h3>}
          {<div className="textImage__content">
          <div className="textImage__text">
              <PortableText value={data.textBlock._rawContent} />
              {data.image && <SanityImage
              {...data.image.image}
              alt={`${data.image.alt}`}
              className="textImage__image"
            />}
            </div>
          </div> }
        </div>
      )}
    </>
  );
};

export default TextImageCategory;
