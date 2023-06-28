import React from "react";
import "./StringsColorsBlock.scss";
import frameLightBlue from "../../images/frameLightBlue.svg";
import framePink from "../../images/framePink.svg";
import frameGreen from "../../images/frameGreen.svg";

const StringsColorsBlock = ({ data }) => {
  return (
    <div className="container section-padding StringsColorsBlockontainer">
      <div className="smallSize col-12">
        {data.title && <div className="title">{data.title}</div>}
        <div className="keyContainer">
        {data.keyWords.map((data, index) => (
          <div
            className={`keyWordsContainer ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }
        }`}
          >
            <img className="keywordImage"  src={index % 3 === 0? frameLightBlue : index % 3 === 1 ? framePink : frameGreen } alt="frame" />
            <div
              className={`keyWords ${
                index % 2 === 1 ? "keyWordsSpacingRight" : "keyWordsSpacingLeft"
              }`}
            >
              {data}
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="desktopSize col-12"> 
      {data.title && <div className="title">{data.title}</div>}
      <div  className={`keyContainer`}>
        {data.keyWords.map((data, index) => (
          <div className={`keyWordsContainer`} >
              {index === 0 ? <img className="keywordImage"  src={frameLightBlue} alt="frame" /> : index === 3 ? <img className="keywordImage"  src={framePink} alt="frame" /> : ""}
            <div
              className={`keyWords`}
            >
              {data}
            </div>
          </div>
        ))}.
        </div>
      </div>
    </div>
  );
};

export default StringsColorsBlock;
