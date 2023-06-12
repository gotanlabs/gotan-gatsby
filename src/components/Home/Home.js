import React from "react";
import useHome from "../../hooks/useHome";
import {Seo, CustomSection, TextButton} from "../";
import BannerSimple from "../BannerSimple/BannerSimple";
import Logos from "../Logos/Logos";
import DualAsymmetric from "../DualAsymmetric/DualAsymmetric";



const Home = () => {
  const data = useHome().sanityHome;
  
  
  return <>
    <Seo title='Home' description='' keywords='' />
    {data !== null ? <div>
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
     
    </div> : <div className="d-flex justify-content-center">
    </div>}
  </>

};

export default Home;
