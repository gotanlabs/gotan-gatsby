import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./Header.scss";
import LinkBlock from "./LinkBlock";
import Menu from "./Menu";
import useHeader from "../../hooks/useHeader";

const Header = () => {
  const data = useHeader().sanityHeader;

  return data !== null ? (
    <header className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <SanityImage
              {...data.logo.image.image}
              alt={`${data.logo.image.alt}`}
              className="header__logo"
            />
          </Navbar.Brand>
          {data.menu !== null ? <Menu links={data.menu.links} /> : <></>}
          {data.customLinkBlock !== null ? (
            <LinkBlock links={data.customLinkBlock?.links} />
          ) : (
            <></>
          )}
        </Container>
      </Navbar>
    </header>
  ) : (
    <></>
  );
};

export default Header;
