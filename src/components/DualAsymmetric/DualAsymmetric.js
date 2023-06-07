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
    <div className={`DualAsymmetric`}>
      <div className="titleContainer col-6">
        <h4>{title}</h4>
      </div>
      {image && (
        <div
          className={`ImageContainer`}
          style={{ backgroundColor: "violet" }}
        >
          <SanityImage {...image.image} alt={image.alt} />
        </div>
      )}
      <div className={`emptyRight ${imageSide}`} style={{ backgroundColor: "gray" }}></div>
    </div>
  )
}

export default DualAsymmetric
