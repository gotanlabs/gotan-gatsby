import React from "react";
import { TextBlock } from "../";
import './TextButton.scss'


const TextButton = ({ data }) => {
    return (
        <section className="container">
            <div className="container-text">
                <TextBlock
                    key={data._key}
                    title={data?.title}
                    text={data._rawContent}
                />
            </div>
        </section>
    );
};

export default TextButton;