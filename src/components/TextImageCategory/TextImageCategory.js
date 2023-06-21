import React from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImageCategory.scss";

const TextImageCategory = ({ data }) => {

  return (
    <>
      {(
        <div className={`textImage container ${data.textRight}`}>
          <div className={`textContainer ${data.textRight}Text`}>
            {data.category && <p className="textContainer__category">{data.category}</p>}
            {data.textBlock.title && <h3 className="textContainer__title">{data.textBlock.title}</h3>}
            <PortableText value={data.textBlock._rawContent} />
          </div>

          <div className="textImage__content">
            <div className="textImage__text">
              {data.image && <SanityImage
                {...data.image.image}
                alt={`${data.image.alt}`}
                className="textImage__image"
              />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextImageCategory;
