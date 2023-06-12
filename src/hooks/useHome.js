import { useStaticQuery, graphql } from "gatsby"

const useHome = () => {
  return useStaticQuery(graphql`
    {
        sanityHome {
            titlePage
            descriptionPage
            dinamicContent {
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
                title
              }
              ... on SanityLogos {
                _key
                _type
                logo {
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
              ... on SanityAnimatedAccordion {
                _key
                _type
                title
                summary
                sections {
                  title
                  _rawContent
                }
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