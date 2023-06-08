import React from "react";
import './TextButton.scss';
import { PortableText } from "@portabletext/react";
import Icon from "../Icons/Icon";
import CustomLink from "../CustomLink/CustomLink";


const TextButton = ({ data }) => {
    console.log('data', data)
    return (
        <>
            <div className="background-textButton py-3 py-md-5">
                <div className="container">
                    <div className="textButton-text">
                        <h1>{data.text.title}</h1>
                        <PortableText value={data.text._rawContent} />
                    </div>
                    <div className="button-bannerSimple dark">
                        <CustomLink
                            href={data.iconButton.iconbutton.url}
                            text={data.iconButton.iconbutton.text}
                            icon={<Icon code={data.iconButton.icon.icon}></Icon>}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TextButton;