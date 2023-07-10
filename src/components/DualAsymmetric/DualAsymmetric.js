import SanityImage from "gatsby-plugin-sanity-image";
import React from "react";
import "./DualAsymmetric.scss";

const DualAsymmetric = ({
  data: { title, image, bannerStyle, backgroundColor },
}) => {
  return (
    <div className={` DualAsymmetric py-5`}>
      <div
        className={`container dualContainer ${
          bannerStyle === "asymmetricImageLeft" ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`titleContainer ${
            bannerStyle === "asymmetricImageRight" ||
            bannerStyle === "asymmetricImageLeft"
              ? "col-lg-9 col-md-9 col-12"
              : "col-6 me-2"
          } ${backgroundColor}`}
        >
          {title !== null && <h1>{title}</h1> }
          
        </div>
        {image && (
          <div
            className={`asymmetricImage ${
              bannerStyle === "asymmetricImageRight" ||
              bannerStyle === "asymmetricImageLeft"
                ? "col-md-3"
                : "col-6 ms-2"
            } ${bannerStyle === "asymmetricImageRight" && "ms-3"} ${bannerStyle === "asymmetricImageLeft" && "me-3"}`}
            style={{ backgroundColor: "#14D3FC" }}
          >
            <SanityImage {...image.image} alt={image.alt} />
          </div>
        )}
        <div style={{ backgroundColor: "gray" }}></div>
      </div>
    </div>
  );
};

export default DualAsymmetric;
