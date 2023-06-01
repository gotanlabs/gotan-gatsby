import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./Footer.scss";
import useFooter from "../../hooks/useFooter";
import FooterLinkBlock from "./FooterLinkBlock";
import SocialMediaBlock from "./SocialMediaBlock";
import FooterLinkArray from "./FooterLinkArray";

const Footer = () => {
  const data = useFooter().sanityFooter;
 

  return (
    data !== null && (
      <footer className="footer px-2">
       <div className='line container '></div>
        <div className="container py-4 d-flex flex-wrap test" >
          <div>
              { (
              data.logo.image.image !== null ?  <SanityImage
                {...data.logo.image.image}
                alt={`${data.logo.image.alt}`}
                className="footer__logo"
              /> : <></>
            )}
            {data.linkArray.length !== 0 &&
            data.linkArray.map((block) => (
              <div > 
              <FooterLinkArray 
                key={block._key}
                links={block.links}
              />
              </div>
            ))}
            </div>
              <div className="linkBlock">
          {data.linkBlock.length !== 0 &&
            data.linkBlock.map((block) => (
              <div className=""> 
              <FooterLinkBlock 
                key={block._key}
                links={block.links}
                title={block.title}
              />
              </div>
            ))}
            <div className=""  >
              {data.qrCode && (
                <a
                  href={data.qrCode.url}
                  title={`${data.qrCode.image.alt}`}
                  className="py-2"
                >
                  <SanityImage
                    {...data.qrCode.image.image}
                    alt={`${data.qrCode.image.alt}`}
                    className="qrCode"
                  />
                </a>
              )}
              {data.socialMediaBlock && (
                <SocialMediaBlock
                  links={data.socialMediaBlock.links}
                  title={data.socialMediaBlock.title}
                />
              )}
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
