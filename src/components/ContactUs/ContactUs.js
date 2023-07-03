import React from "react";
import {Seo, CustomSection} from "../";
import { Widget } from '@typeform/embed-react';
import useContactUs from "../../hooks/useContactUs";
import "./ContactUs.scss"

const ContactUs = () => {
  const data = useContactUs().sanityContactUs;
  return <>
  {data !== null ? <div>
      {data.dinamicContent !== null ? <CustomSection sections={data.dinamicContent} /> : <></>}
     
    </div> : <div className="d-flex justify-content-center">
    </div>}
    <Seo title='Contact Us' description='' keywords='' />
      <div className="container contactUsForm">
      <Widget id="MeTzLpIo"  style={{ height: '100%', width: '100%' }} />
      </div>
      
  </>

};

export default ContactUs;