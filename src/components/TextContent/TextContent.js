import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextContent.scss";


const TextContent = ({ data }) => {

    return (
         <div className="textContent section-padding container">
            <div className="textContent__text">
                {data !== null &&
                <PortableText value={data._rawContent} />}
            </div>
        </div> 
    );
};

export default TextContent;