import React from "react";
import { PortableText } from "@portabletext/react";
import "./TextContent.scss";


const TextContent = ({ data }) => {
console.log('data', data);
    return (
         <div className="textContent py-3 container">
            <div className="textContent__text">
                <PortableText value={data._rawContent} />
            </div>
        </div> 
    );
};

export default TextContent;