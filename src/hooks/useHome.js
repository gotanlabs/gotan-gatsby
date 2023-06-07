import { useStaticQuery, graphql } from "gatsby"

const useHome = () => {
  return useStaticQuery(graphql`
    {
        sanityHome {
            titlePage
            descriptionPage
            bannerSimple {
              _key
              iconButton {
                _key
                icon {
                  icon
                }
                iconbutton {
                  _key
                  text
                  url
                }
                title
              }
              image {
                alt
                image {
                  asset {
                    _id
                  }
                  crop {
                    bottom
                    left
                    right
                    top
                  }
                  hotspot {
                    height
                    width
                    x
                    y
                  }
                }
              }
              textIcon {
                title
                icon {
                  icon
                }
              }
            }
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