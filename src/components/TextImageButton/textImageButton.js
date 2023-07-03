import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./textImageButton.scss";
import { PortableText } from "@portabletext/react";
import CustomLink from "../CustomLink/CustomLink";

const TextImageButton = ({ data }) => {

  console.log("text", data)
  return (

    <div className="textImageButton-container mb-5">
      <div className="container">
        <div className="textImageButton-image">
          {(
            data.image.image !== null ? <SanityImage
              {...data.image.image}
              alt={`${data.image.alt}`} className="image"/> : <></>
          )}
        </div>
        <div className="textImageButton-content body-large">
          <div className="textImageButton-content__title">
            {(
              data.textBlock.title !== null && <h1>{data.textBlock.title}</h1>
            )}
          </div>
          <div className="textImageButton-content__text-content">
            {(
              data.textBlock._rawContent !== null ? <PortableText value={data.textBlock._rawContent} /> : <></>
            )}
          </div>
          <div className="textImageButton-content__button">
            {(
              data.button !== null ? <CustomLink
              title={data.button.title}
              href={data.button.link.url}
              text={data.button.link.text} /> : <></>
            )}
          </div>
        </div>
      </div>
    </div>);
}

export default TextImageButton;