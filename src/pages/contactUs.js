import * as React from "react"
import { Layout} from "../components"
import ContactUs from "../components/ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";

const ContactUsPage = () => {
  return (
    <Layout>
      <ContactUs/>
    </Layout>
  )
}

export default ContactUsPage