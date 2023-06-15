import React from "react";
import {
  TextBlock,
  TextImage,
  TextImageCarousel,
  AnimatedAccordion,
  DualAsymmetric,
  BannerSimple,
  Logos,
  TextButton,
  TextContent,
  TextBlockList,
} from "../";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const CustomSection = ({ sections }) => {
  console.log("sections", sections);
  const sectionResult = sections.map((section) => {
    {
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textBlock"
      ) {
        return (
          <TextBlock
            key={section._key}
            title={section?.title}
            text={section._rawContent}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textImage"
      ) {
        return (
          <TextImage
            key={section._key}
            title={section.textBlock?.title}
            text={section.textBlock?._rawContent}
            image={section.image.image}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textImageCarousel"
      ) {
        return (
          <TextImageCarousel
            key={section._key}
            slides={section.slides}
            title={section.textBlock?.title}
            text={section.textBlock?._rawContent}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "animatedAccordion"
      ) {
        return (
          <AnimatedAccordion
            key={section._key}
            sections={section.sections}
            summary={section.summary}
            title={section.title}
          />
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "dualAsymmetric"
      ) {
        return <DualAsymmetric key={section._key} data={section} />;
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "bannerSimple"
      ) {
        return <BannerSimple key={section._key} data={section} />;
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "logos"
      ) {
        return <Logos key={section._key} logos={section} />;
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textButton"
      ) {
        return <TextButton key={section._key} data={section} />;
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textContent"
      ) {
        return <TextContent key={section._key} data={section} />;
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textBlockList"
      ) {
        return (
          <TextBlockList
            key={section._key}
            title={section.title}
            blocks={section.textBlocks}
            titleTop={section.titleTop}
          />
        );
      }

      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "imageCarousel"
      ) {
        return <ImageCarousel key={section._key} data={section} />;
      }
    }
  });
  return <>{sectionResult}</>;
};

export default CustomSection;
