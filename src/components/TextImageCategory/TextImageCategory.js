import React from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImageCategory.scss";

const TextImageCategory = ({ data }) => {

  return (
    <>
      {(
        <div className={`textImage container ${data.textRight}`}>
          <div className={`textContainer ${data.textRight}Text col-lg-6 col-md-6 col-12`}>
            {data.category && <p className="textContainer__category">{data.category}</p>}
            {data.textBlock.title && <h3 className="textContainer__title">{data.textBlock.title}</h3>}
            <PortableText value={data.textBlock._rawContent} />
          </div>

          <div className="picture col-lg-6 col-md-6 col-12">
           
              {data.image && <SanityImage
                {...data.image.image}
                alt={`${data.image.alt}`}
               
              />}
           
          </div>
        </div>
      )}
    </>
  );
};

export default TextImageCategory;
