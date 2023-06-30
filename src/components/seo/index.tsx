import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  lang?: string;
  meta?: string;
}

export function Seo(props: SeoProps) {
  const siteMetadata = { ...props };

  return (
    <Helmet
      htmlAttributes={{ lang: siteMetadata.lang }}
      title={siteMetadata.title}
      titleTemplate={`%s | GotanLabs`}
      meta={[
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          name: `description`,
          content: siteMetadata.description,
        },
        {
          name: `keywords`,
          content: siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:description`,
          content: siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: siteMetadata.description,
        },
      ]}
      // link={[]}
    >
       <script>{`window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 10496688,playbookUuid: '22b0382c-69e0-46d3-b626-b228698edf57',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})();`}</script>
      <script src="https://leadbooster-chat.pipedrive.com/assets/loader.js" async> </script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HV2Q7M85VG"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-HV2Q7M85VG')`}
      </script> 
    </Helmet>
  );
}
