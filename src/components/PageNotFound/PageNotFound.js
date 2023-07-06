import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./PageNotFound.scss";
import Icon from "../Icons/Icon";
import CustomLink from "../CustomLink/CustomLink";
import usePageNotFound from "../../hooks/usePageNotFound";
import { RiArrowRightFill } from "react-icons/ri";

const PageNotFound = ({}) => {
  
  const data = usePageNotFound().sanityPageNotFound;
  
    console.log(data)
  return (
    <div className="container pageNotFound-container mb-5">
       <div className="backgroundImage">
      {(
        data.image.image !== null ? <SanityImage
          {...data.image.image}
          alt={`${data.image.alt}`}
        /> : <></>
      )}
      </div>
      <div className="pageNotFound-text-button">
        <div className="title-pageNotFound">
        {(
          data.imageTitle !== null   && <h1>{data.imageTitle}</h1>
          )}
        </div>
        <div className="button-pageNotFound ">
            {(
              data.button !== null ? <CustomLink
              title={data.button.title}
              href={data.button.link.url}
              text={data.button.link.text}
              icon={<RiArrowRightFill size={25} color="white"/>} /> : <></>
            )}
          </div>
      </div> 
    </div>);


}

export default PageNotFound;