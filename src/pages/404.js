import * as React from "react"
import { Seo } from "../components/seo"
import PageNotFound from "../components/PageNotFound/PageNotFound";


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
