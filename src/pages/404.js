import * as React from "react"
import { Link } from "gatsby"
import { Seo } from "../components/seo"
import PageNotFound from "../components/PageNotFound/PageNotFound";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <>
    <Seo title='404: Not found' description='' keywords='' />
    <PageNotFound/>
    </>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
