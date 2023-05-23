import React from "react";
import { graphql } from "gatsby";
import { Layout, CustomSection, Banner} from "../components";

const Page = ({location,  data }) => {
  const {
    dinamicContent
  } = data?.allSanityPages?.nodes[0]

  const bannerInfo = data?.allSanityPages?.nodes[0]
  

  return (
    <Layout location={location}>
      <div className="container">
      {(bannerInfo.banner !== null && bannerInfo.banner?.slides?.length !== 0) ? <Banner banner={bannerInfo.banner}/> : <></>}
        {dinamicContent !== null  && dinamicContent.length !==0  &&(
          <CustomSection sections={dinamicContent} />
        )}
      </div>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    allSanityPages(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        titlePage
        slug {
          current
        }
        id
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
          ... on SanityTextImage {
            _key
            _type
            textBlock {
              title
              _rawContent
            }
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
          ... on SanityTextBlock {
            _key
            _type
            title
            _rawContent
          }
        }
        descriptionPage
        banner {
          slides {
            url
            title
            text
            overlay
            _key
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
          autoplay
        }
      }
    }
  }
`;
