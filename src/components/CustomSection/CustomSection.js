import React from "react";
import { TextBlock, TextImage} from "../";

const CustomSection = ({ sections }) => {
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
    }
  });

  return <>{sectionResult}</>;
};

export default CustomSection;
