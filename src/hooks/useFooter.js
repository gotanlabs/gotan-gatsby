import { useStaticQuery, graphql } from "gatsby";

const useFooter = () => {
  return useStaticQuery(graphql`
    {
      sanityFooter {
        socialMediaBlock {
          title
          links {
            link {
              url
              text
              _key
            }
            icon {
              icon
            }
            style
          }
        }
        qrCode {
          url
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
                y
                x
                width
                height
              }
            }
          }
        }
        logo {
          _key
          _type
          alt
          image {
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
            asset {
              _id
            }
          }
        }
        linkBlock {
          _key
          title
          links {
            url
            text
            _key
          }
        }
        linkArray {
          _key
          links {
            url
            text
            _key
          }
        }
        id
      }
    }
  `);
};

export default useFooter;
