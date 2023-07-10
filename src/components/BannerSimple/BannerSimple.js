import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./BannerSimple.scss";
import Icon from "../Icons/Icon";
import CustomLink from "../CustomLink/CustomLink";
import { MdArrowOutward } from "react-icons/md";

const BannerSimple = ({ data }) => {
  
  return (
    <div className="container bannerSimple-container mb-5">
      <div className="image-bannerSimple">
      {(
        data.image.image !== null ? <SanityImage
          {...data.image.image}
          alt={`${data.image.alt}`}
          className="image-bannerSimple"
        /> : <></>
      )}
      </div>
      <div className="bannerSimple-text-button">
        {(
          data.title !== null   && <h3>{data.title}
          <span className="title-bannerSimple">
                <MdArrowOutward size={40} color="white" />
              </span>
          </h3>
          )}
        
        <div className="button-bannerSimple">
        {(
          data.iconButton.iconbutton !== null ? <CustomLink
            href={data.iconButton.iconbutton.url}
            text={data.iconButton.iconbutton.text} 
            icon={<Icon code={data.iconButton.icon.icon}></Icon>}/> : <></>
        )}    
        </div>
      </div>
    </div>);


}

export default BannerSimple;