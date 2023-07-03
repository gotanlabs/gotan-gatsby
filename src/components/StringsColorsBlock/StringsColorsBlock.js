import React from "react";
import "./StringsColorsBlock.scss";
import frameLightBlue from "../../images/frameLightBlue.svg";
import framePink from "../../images/framePink.svg";
import frameGreen from "../../images/frameGreen.svg";

const StringsColorsBlock = ({ data }) => {
  return (
    <div className="container section-padding StringsColorsBlockontainer">
      <div className="smallSize col-12">
        {data.title && <h4 className="title">{data.title}</h4>}
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
      {data.title && <h4 className="title">{data.title}</h4>}
      <div  className={`keyContainer`}>
        <div className={`keyWordsContainer`} >
          <img className="keywordImage keyWordsSpacingRight"  src={frameLightBlue} alt="frame" />
          {data.keyWords.slice(0,2).map((data, index) => (
              <div className={`keyWords ${
                index === 0 ? "keyWordsSpacingRight" : ""
              }`} >
                {data}
              </div>
          ))}
        </div>

        <div className={`keyWordsContainer`} >
          {data.keyWords.slice(2).map((data, index) => (
              <div className={`keyWords ${
                index === 0 ? "keyWordsSpacingRight" : ""
              }`} >
                {data}
              </div>
          ))}
          <img className="keywordImage keyWordsSpacingLeft"  src={frameLightBlue} alt="frame" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default StringsColorsBlock;
