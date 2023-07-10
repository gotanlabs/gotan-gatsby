import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./PageNotFound.scss";
import CustomLink from "../CustomLink/CustomLink";
import usePageNotFound from "../../hooks/usePageNotFound";
import { RiArrowLeftFill } from "react-icons/ri";

const PageNotFound = () => {
  
  const data = usePageNotFound().sanityPageNotFound;

  

  return (
    <>
    {data !== null && <div className="container pageNotFound-container mb-5">
      <div className="image-container col-12">
      <div className="backgroundImage">
       {(
          data.image?.image !== null ? <SanityImage
           {...data.image.image}
          alt={`${data.image.alt}`}
         /> : <></>
       )}
       </div>
       {(
        data.imageTitle !== null   && <div className="titleImage">{data.imageTitle}</div>
       )}
      </div>

      {(
        data.text !== null   && <div className="text col-9 col-md-7 col-lg-5">{data.text}</div>
       )}
        <div className="button-pageNotFound">
             {(
               data.button !== null ? <CustomLink
               title={data.button.title}
               href={data.button.link.url}
               text={data.button.link.text}
               icon={<RiArrowLeftFill size={25} color="white"/>} /> : <></>
             )}
           </div>
    </div>}
    </>
    
    );


}

export default PageNotFound;