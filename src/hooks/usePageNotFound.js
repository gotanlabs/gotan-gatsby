import { useStaticQuery, graphql } from "gatsby"

const usePageNotFound = () => {
    return useStaticQuery(graphql`
    {
        sanityPageNotFound {
            button {
                link {
                  text
                  url
                }
                _type
                title
              }
              image {
                _key
                alt
                image {
                  asset {
                    _id
                  }
                  crop {
                    top
                    right
                    left
                    bottom
                  }
                  hotspot {
                    y
                    x
                    width
                    height
                  }
                }
              }
              imageTitle
              text
              _type
        }
}
  `)
}

export default usePageNotFound;