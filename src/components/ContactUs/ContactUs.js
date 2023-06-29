import React from "react";
import {Seo} from "../";
import { Widget } from '@typeform/embed-react';
import "./ContactUs.scss"

const ContactUs = () => {
  
  return <>
    <Seo title='Contact Us' description='' keywords='' />
      <div className="container contactUsForm">
      <Widget id="MeTzLpIo"  style={{ height: '100%', width: '100%' }} />
      </div>
      
  </>

};

export default ContactUs;