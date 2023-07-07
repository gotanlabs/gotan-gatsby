import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./textImageButton.scss";
import { PortableText } from "@portabletext/react";
import CustomLink from "../CustomLink/CustomLink";
import { FaArrowRight } from "react-icons/fa";

const TextImageButton = ({ data }) => {

  return (
    <div className="textImageButton-container section-padding" id={data?.textBlock?.title.replace(/\s/g, '')}>
      <div className="container">
        <div className="textImageButton-content">
          <div className="textImageButton-content__title">
            {data.textBlock.title !== null && <h1>{data.textBlock.title}</h1>}
          </div>
          <div className="textImageButton-content__text-content body-large">
            {data.textBlock._rawContent !== null ? (
              <PortableText value={data.textBlock._rawContent} />
            ) : (
              <></>
            )}
          </div>
          <div className="textImageButton-content__button">
            {data.button !== null ? (
              <CustomLink
                title={data.button.title}
                href={data.button.link.url}
                text={data.button.link.text}
                icon={<FaArrowRight size={20} color="white" />}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="textImageButton-image">
          {data.image.image !== null ? (
            <SanityImage
              {...data.image.image}
              alt={`${data.image.alt}`}
              className="image"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextImageButton;
