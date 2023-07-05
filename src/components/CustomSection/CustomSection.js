import React, { useState } from "react";
import TimelineObserver from "react-timeline-animation";
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
  TextImageCategoryArray,
  Timeline,
} from "../";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import TextImageButton from "../TextImageButton/textImageButton";
import StringsColorsBlock from "../StringsColorsBlock/StringsColorsBlock";

const CustomSection = ({ sections }) => {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };
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
            title={section.title}
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
        section?._type === "textImageCategoryArray"
      ) {
        return (
          <TextImageCategoryArray
            key={section._key}
            sections={section.sections}
            title={section.title}
          />
        );
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

      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "scrollTextBlocks"
      ) {
        return (
          <>
            {" "}
            <TimelineObserver
              key={section._key}
              initialColor="#e5e5e5"
              fillColor="black"
              handleObserve={(setObserver) => (
                <Timeline
                  callback={onCallback}
                  className="timeline"
                  setObserver={setObserver}
                  title={section.title}
                  blocks={section.textBlocks}
                />
              )}
            />
            <div className="stub2">{message}</div>
          </>
        );
      }
      if (
        section?._type !== null &&
        section?._type !== undefined &&
        section?._type === "textImageButton"
      ) {
        return <TextImageButton key={section._key} data={section} />;
      }
    }
    if (
      section?._type !== null &&
      section?._type !== undefined &&
      section?._type === "stringsColorsBlock"
    ) {
      return <StringsColorsBlock key={section._key} data={section} />;
    }
  });
  return <>{sectionResult}</>;
};

export default CustomSection;
