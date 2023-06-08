import SanityImage from "gatsby-plugin-sanity-image"
import React from "react"
import { PortableText } from "@portabletext/react"
import "./DualAsymmetric.scss"

const DualAsymmetric = ({
   
  data: {
    title,
    image,
    imageSide,
  },
}) => {
    console.log("data componente", title)
  return (
    <div className={` DualAsymmetric py-3 py-md-5`} >
    <div className={`container dualContainer`} >
      <div className="titleContainer col-lg-8 col-md-8 col-12">
        <h1 className="titleDual">{title}</h1>
      </div >
      {image && (
        <div
          className={`asymmetricImage col-3`}
          style={{ backgroundColor: "#14D3FC" }}
        >
          <SanityImage {...image.image} alt={image.alt} />
        </div>
      )}
      <div className={`emptyRight ${imageSide}`} style={{ backgroundColor: "gray" }}></div>
    </div>
    </div>
  )
}

export default DualAsymmetric
