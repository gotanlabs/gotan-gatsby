import React from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImageCarousel.scss";

const TextImageCarousel = ({ slides }) => {
  return (
    <>
      <div>
        carousel
        {/* <div>
          {slides.map((slide, index) => (
            <div key={index}>
              <SanityImage
                {...slide.image.image}
                alt={`${slide.image.alt}`}
                className="textImage__image"
              />
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <PortableText value={slide.textBlock?._rawContent} />
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default TextImageCarousel;
