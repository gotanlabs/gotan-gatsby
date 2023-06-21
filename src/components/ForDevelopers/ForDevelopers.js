import React from "react";
import useForDevelopers from "../../hooks/useForDevelopers"
import {Seo, CustomSection} from "../";

const ForDevelopers = () => {
  const data = useForDevelopers().sanityForDevelopers;

  return <>
    <Seo title='For Developers' description='' keywords='' />
    {data !== null ? <div>
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
      
    </div> : <div className="d-flex justify-content-center">

    </div>}
  </>
};

export default ForDevelopers;