import * as React from "react";
import { CustomSection, Layout, Seo } from "../components";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import { graphql } from "gatsby";

const Page = ({ location, data }) => {
  const { dinamicContent, descriptionPage, titlePage, keywordsPage } =
    data?.allSanityLandings?.nodes[0] || {};

  return (
    <Layout>
      <Seo
        title={titlePage}
        description={descriptionPage}
        keywords={keywordsPage}
      />
      {data !== null ? (
        <div>
          {dinamicContent !== null ? (
            <CustomSection sections={dinamicContent} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="d-flex justify-content-center"></div>
      )}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query ($slug: String!) {
    allSanityLandings(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
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
        keywordsPage
      }
    }
  }
`;
