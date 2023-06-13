import * as React from "react"
import { Layout, About} from "../components"

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";

const AboutPage = () => {
  return (
    <Layout>
      <About/>
    </Layout>
  )
}

export default AboutPage

