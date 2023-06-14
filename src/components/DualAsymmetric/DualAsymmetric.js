import SanityImage from "gatsby-plugin-sanity-image"
import React from "react"
import { PortableText } from "@portabletext/react"
import "./DualAsymmetric.scss"

const DualAsymmetric = ({
   
  data: {
    title,
    image,
    bannerStyle,
    backgroundColor
  },
}) => {
  
  return (
    <div className={` DualAsymmetric py-3 py-md-5`} >
    <div className={`container dualContainer ${bannerStyle == "asymmetricImageLeft" ? "flex-row-reverse" : ""}`} >
      <div className={`titleContainer ${bannerStyle == "asymmetricImageRight" || bannerStyle == "asymmetricImageLeft" ? "col-lg-8 col-md-8 col-12" : "col-6"} ${backgroundColor}`}>
        <h1 className="titleDual">{title}</h1>
      </div >
      {image && (
        <div
          className={`asymmetricImage ${bannerStyle == "asymmetricImageRight" || bannerStyle == "asymmetricImageLeft" ? "col-3" :  "col-5"}`}   style={{ backgroundColor: "#14D3FC" }}
        >
          <SanityImage {...image.image} alt={image.alt} />
        </div>
      )}
      <div  style={{ backgroundColor: "gray" }}></div>
    </div>
    </div>
  )
}

export default DualAsymmetric
