import React from "react";
import "./StringsColorsBlock.scss";
import blue from "../../images/blue.jpg";
import blue2 from "../../images/blue2.jpg";
import green from "../../images/green.jpg";
import pink from "../../images/pink.jpg";

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
            <img className="keywordImage"  src={index % 4 === 0? blue : index % 4 === 1 ? pink : index % 4 === 2 ? green : blue2 } alt="frame" />
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
          <div className="imageContainer keyWordsSpacingRight">
            <img className="keywordImage"  src={blue} alt="frame" />
          </div> 
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
          <div className="imageContainer keyWordsSpacingLeft">
            <img className="keywordImage"  src={pink} alt="frame" />
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default StringsColorsBlock;
