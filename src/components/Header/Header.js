import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./Header.scss";
import LinkBlock from "./LinkBlock";
import Menu from "./Menu";
import useHeader from "../../hooks/useHeader";

const Header = () => {
  const data = useHeader().sanityHeader;
  return (
    <header className="header">
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 mt-3">
          <Container>
            <SanityImage
              {...data.logo.image.image}
              alt={`${data.logo.image.alt}`}
              className="header__logo"
            />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas

              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <SanityImage
                    {...data.logo.image.image}
                    alt={`${data.logo.image.alt}`}
                    className="header__logo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {data.menu !== null ? <Menu links={data.menu.links} /> : <></>}
                {data.customLinkBlock !== null ? (
                  <LinkBlock links={data.customLinkBlock?.links} />
                ) : (
                  <></>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default Header;