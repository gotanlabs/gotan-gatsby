import React from "react";
import useHome from "../../hooks/useHome";
import Banner from "../Banner/Banner";
import { Seo, CustomSection } from "../";


const Home = () => {
  const data = useHome().sanityHome;


  return <>
    <Seo title='Home' description='' keywords='' />
    {data !== null ? <div className="container">
      {data.banner !== null ? <Banner banner={data.banner} /> : <></>}
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
    </div> : <div className="d-flex justify-content-center">
    </div>}
  </>

};

export default Home;
