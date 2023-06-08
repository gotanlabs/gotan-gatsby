import React from "react";
import useHome from "../../hooks/useHome";
import Banner from "../Banner/Banner";
import {Seo, CustomSection, TextButton} from "../";
import BannerSimple from "../BannerSimple/BannerSimple";
import Logos from "../Logos/Logos";


const Home = () => {
  const data = useHome().sanityHome;
  console.log('home', data)
  return <>
    <Seo title='Home' description='' keywords='' />
    {data !== null ? <div>
      {data.banner !== null ? <Banner banner={data.banner} /> : <></>}
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
      <TextButton data={data.textButton}/>
      <Logos logos={data.Logos} />
      <BannerSimple data={data.bannerSimple}/>
    </div> : <div className="d-flex justify-content-center">
    </div>}
  </>

};

export default Home;
