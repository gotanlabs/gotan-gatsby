import { useStaticQuery, graphql } from "gatsby"

const useApply = () => {
  return useStaticQuery(graphql`
    {
        sanityApply {
            titlePage
            descriptionPage
            dinamicContent {
              ... on SanityTextContent {
                _key
                _type
                _rawContent
              }
              ... on SanityBannerSimple {
                _key
                _type
                iconButton {
                  icon {
                    icon
                  }
                  iconbutton {
                    url
                    text
                  }
                  title
                }
                image {
                  alt
                  _key
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
                textIcon {
                  icon {
                    icon
                  }
                  title
                }
              }
              ... on SanityDualAsymmetric {
                _key
                _type
                bannerStyle
                image {
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
                bannerStyle
                backgroundColor
                title
              }
              ... on SanityLogos {
                _key
                _type
                Titulo
                logo {
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
              ... on SanityTextButton {
                _key
                _type
                iconButton {
                  icon {
                    icon
                  }
                  iconbutton {
                    text
                    url
                  }
                  title
                }
                text {
                  _rawContent
                  title
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

export default useApply