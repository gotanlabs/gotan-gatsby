import React, { useState } from "react";
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
import TimelineObserver from "react-timeline-animation";

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
        section?._type === "textImageCategoryArray"
      ) {
        return (
          <TextImageCategoryArray
            key={section._key}
            sections={section.sections}
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
    }
  });
  return <>{sectionResult}</>;
};

export default CustomSection;


// const Time = ({ setObserver, callback, blocks, title }) => {
//   const [messages, setMessages] = useState([]);
//   const [descriptions, setDescriptions] = useState([]);

//   const timelineRefs = useRef([]);
//   const circleRefs = useRef([]);

//   const handleCallback = (index) => {
//     setMessages((prevMessages) => {
//       const updatedMessages = [...prevMessages];
//       updatedMessages[index] = blocks[index].title;
//       return updatedMessages;
//     });

//     setDescriptions((prevDescriptions) => {
//       const updatedDescriptions = [...prevDescriptions];
//       updatedDescriptions[index] = blocks[index].title;
//       return updatedDescriptions;
//     });

//     callback();
//   };

//   useEffect(() => {
//     timelineRefs.current = timelineRefs.current.slice(0, blocks.length);
//     circleRefs.current = circleRefs.current.slice(0, blocks.length);

//     setObserver(timelineRefs.current);
//     circleRefs.current.forEach((circleRef, index) => {
//       setObserver(circleRef, () => handleCallback(index));
//     });
//   }, [blocks, setObserver]);

//   return (
//     <div className="wrapper container">
//       <div className="absolute-div">
//         <h4 className="sticky-div">{title}</h4>
//       </div>
//       {blocks.map((block, index) => (
//         <React.Fragment key={index}>
//           <div ref={(ref) => (timelineRefs.current[index] = ref)} className="timeline" />
//           <div className="circleWrapper">
//             <div ref={(ref) => (circleRefs.current[index] = ref)} className="circle">
//               {index + 1}
//             </div>
//             <div className="message body-large">{messages[index]}</div>
//             <div className="description">{descriptions[index]}</div>
//           </div>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default Timeline;
