import React from "react";
import useAbout from "../../hooks/useAbout";
import {Seo, CustomSection} from "../";

const About = () => {
  const data = useAbout().sanityAbout;

  return <>
    <Seo title='About' description='' keywords='' />
    {data !== null ? <div>
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
     
    </div> : <div className="d-flex justify-content-center">

    </div>}
  </>
};

export default About;
