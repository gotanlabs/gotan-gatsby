import React from "react";
import './TextButton.scss';
import { PortableText } from "@portabletext/react";
import Icon from "../Icons/Icon";
import CustomLink from "../CustomLink/CustomLink";


const TextButton = ({ data }) => {
    console.log('data', data)
    return (
        <>
            <div className="background-textButton section-padding">
                <div className="container">
                    <div className="textButton-text">
                        {data.text !== null && 
                        <h1>{data.text.title}</h1> }
                        {data.text !== null && 
                        <PortableText value={data.text._rawContent} /> }
                    </div>
                    <div className="button-bannerSimple dark">
                    {data.iconButton !== null && 
                        <CustomLink
                            href={data.iconButton.iconbutton.url}
                            text={data.iconButton.iconbutton.text}
                            icon={<Icon code={data.iconButton.icon.icon}></Icon>}
                        /> }
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextButton;