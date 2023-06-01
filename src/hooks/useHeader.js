import { useStaticQuery, graphql } from "gatsby"

const useHeader = () => {
  return useStaticQuery(graphql`
  query MyQuery {
    sanityHeader {
      menu {
        links {
          ... on SanityDropdown {
            _key
            _type
            text
            links {
              separated
              link {
                url
                text
                _key
              }
              _type
            }
            icon {
              _type
              _key
            }
          }
          ... on SanityMenuLink {
            _key
            _type
            link {
              url
              text
              _type
              _key
            }
            icon {
              _type
              _key
            }
          }
        }
      }
      logo {
        alt
        image {
          hotspot {
            width
            x
            y
            height
          }
          crop {
            bottom
            left
            right
            top
          }
          asset {
            _id
          }
        }
        _key
        _type
      }
      customLinkBlock {
        links {
          style
          link {
            url
            text
          }
          icon {
            icon
          }
        }
        _type
        _key
      }
    }
  }
  `)
}

export default useHeader