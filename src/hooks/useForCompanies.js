import { useStaticQuery, graphql } from "gatsby"

const useForCompanies = () => {
  return useStaticQuery(graphql`
    {
      sanityForCompanies {
        dinamicContent {
          ... on SanityBannerSimple {
            _key
            _type
            image {
              alt
              _key
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
                  height
                  width
                  x
                  y
                }
              }
            }
            title
            iconButton {
              title
              icon {
                icon
                _key
              }
              iconbutton {
                text
                url
              }
            }
          }
          ... on SanityDualAsymmetric {
            _key
            _type
            image {
              alt
              _key
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
            title
            bannerStyle
            backgroundColor
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
          ... on SanityTextContent {
            _key
            _type
            _rawContent
          }
           ... on SanityTextImageCategoryArray {
        _key
        _type
        title
        sections {
          _key
          _type
          category
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
          textBlock {
            _rawContent
            title
          }
          textRight
        }
      }
        }
        descriptionPage
        titlePage
      }
    }
  `)
}

export default useForCompanies