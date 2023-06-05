import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./BannerSimple.scss";
import Container from 'react-bootstrap/Container';
import Icon from "../Icons/Icon";

const BannerSimple = ({ data }) => {
  console.log(data)
  return (
    <section>
      {(
        data.image.image !== null ? <SanityImage
          {...data.image.image}
          alt={`${data.image.alt}`}
          className="caruosel"
        /> : <></>
      )}
      <h1>{data.title}</h1>
      {data.icon !== null && <Icon code={data.icon.icon}></Icon>}
      <button></button>
    </section>);


}

export default BannerSimple;