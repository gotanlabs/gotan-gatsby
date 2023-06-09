import React from "react";
import "./Logos.scss"
import SanityImage from "gatsby-plugin-sanity-image";

const Logos = (logos) => {

  return (
    <div className="logos-container section-padding"> 
    <h5 className="titulo">{logos.logos.Titulo}</h5>
    <div className="image-content container">
    {logos.logos.logo && logos.logos.logo.map((logo) => (
      <div className="col-6 col-md-3">
        <div className="image"> 
          <SanityImage
          {...logo.image}
          alt="Logo"
          /> 
        </div>
      </div>
    ))} 
    </div>
  
</div>
  )
}

export default Logos;
