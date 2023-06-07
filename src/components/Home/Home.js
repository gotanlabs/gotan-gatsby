import React from "react";
import useHome from "../../hooks/useHome";
import Banner from "../Banner/Banner";
import { Seo, CustomSection } from "../";
import Logos from "../Logos/Logos";
import DualAsymmetric from "../DualAsymmetric/DualAsymmetric";


const Home = () => {
  const data = useHome().sanityHome;
  console.log("HOME DUAL", data.dualAsymmetric)
  return <>
    <Seo title='Home' description='' keywords='' />
    {data !== null ? <div>
     <DualAsymmetric data={data.dualAsymmetric}/>
      {data.banner !== null ? <Banner banner={data.banner} /> : <></>}
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
      <Logos logos={data.Logos} />
      
    </div> : <div className="d-flex justify-content-center">
     
    </div>}
  </>

};

export default Home;
