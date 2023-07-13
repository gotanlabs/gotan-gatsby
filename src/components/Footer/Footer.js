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
      <footer className={`footer`}>
       <div className='line '></div>
        <div className="container py-4 d-flex flex-wrap test" >
          <div>
              { (
              data?.logo?.image !== null ?  <SanityImage
                {...data.logo.image}
                alt={`${data.logo.alt}`}
                className="footer__logo"
              /> : <></>
            )}
            {data.linkArray.length !== 0 &&
            data.linkArray.map((block) => (
              <div className={`linkArray `} > 
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
              <div className={`blockChild `} > 
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
                  {( data?.qrCode?.image !== null &&  <SanityImage
                    {...data.qrCode.image}
                    alt={`${data.qrCode.alt}`}
                    className="qrCode"
                  />

                  )}
                 
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
