import { useStaticQuery, graphql } from "gatsby"

const useHome = () => {
  return useStaticQuery(graphql`
    {
        sanityHome {
            titlePage
            descriptionPage
            banner {
              autoplay
              slides {
                title
                text
                url
                overlay
                image {
                  alt
                  image {
                    _key
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
              }
            }
            dinamicContent {
              ... on SanityTextBlock {
                _key
                _type
                title
                _rawContent
              }
              ... on SanityTextImageCarousel {
                _key
                _type
                slides {
                  image {
                    alt
                    image {
                      hotspot {
                        y
                        x
                        width
                        height
                      }
                      crop {
                        top
                        right
                        left
                        bottom
                      }
                      asset {
                        _id
                      }
                    }
                  }
                  textBlock {
                    title
                    _rawContent
                  }
                  _type
                }
              }

              ... on SanityTextImage {
                _key
                _type
                image {
                  alt
                  image {
                    _key
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
                textBlock {
                  title
                  content {
                    _rawChildren
                  }
                }
              }
            }
          }
    }
  `)
}

export default useHome