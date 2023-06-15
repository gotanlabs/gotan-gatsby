import React from "react";
import useForCompanies from "../../hooks/useForCompanies";
import {Seo, CustomSection} from "../";

const ForCompanies = () => {
  const data = useForCompanies().sanityForCompanies;

  return <>
    <Seo title='For Companies' description='' keywords='' />
    {data !== null ? <div>
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
      
    </div> : <div className="d-flex justify-content-center">

    </div>}
  </>
};

export default ForCompanies;