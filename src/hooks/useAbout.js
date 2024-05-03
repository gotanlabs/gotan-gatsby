import { useStaticQuery, graphql } from "gatsby"

const useAbout = () => {
    return useStaticQuery(graphql`
    {
        sanityAbout {
            dinamicContent {
              ... on SanityBannerSimple {
                _key
                _type
                iconButton {
                  _key
                  _type
                  icon {
                    _key
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
                  _key
                  alt
                  image {
                    _key
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
                title
              }
              ... on SanityDualAsymmetric {
                _key
                _type
                image {
                  _key
                  alt
                  image {
                    asset {
                      _id
                    }
                    hotspot {
                      height
                      width
                      x
                      y
                    }
                    crop {
                      bottom
                      left
                      right
                      top
                    }
                  }
                }
                bannerStyle
                backgroundColor
                title
              }
              ... on SanityImageCarousel {
                _key
                _type
                firstLineSlides {
                  _key
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
                secondLineSlides {
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
              }
              ... on SanityTextBlockList {
                _key
                _type
                textBlocks {
                  _key
                  _type
                  _rawContent
                  title
                }
                titleTop
                title
              }
              ... on SanityTextContent {
                _key
                _type
                _rawContent
              }
            }
            titlePage
            descriptionPage
          }
}
  `)
}

export default useAbout;