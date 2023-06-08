import React from "react";
import useHome from "../../hooks/useHome";
import { Seo, CustomSection } from "../";
import Logos from "../Logos/Logos";



const Home = () => {
  const data = useHome().sanityHome;
  return <>
    <Seo title='Home' description='' keywords='' />
    {data !== null ? <div>
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
      <Logos logos={data.Logos} />
    </div> : <div className="d-flex justify-content-center">
     
    </div>}
  </>

};

export default Home;
