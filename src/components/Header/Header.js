import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./Header.scss";
import LinkBlock from "./LinkBlock";
import Menu from "./Menu";
import useHeader from "../../hooks/useHeader";
import { Link } from "gatsby";

const Header = () => {
  const data = useHeader().sanityHeader;
  return (
    <header className="header sticky-top">
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 pt-4">
          <Container>
            <Link href="/">
              <SanityImage
                {...data.logo.image}
                alt={`${data.logo.alt}`}
                className="header__logo"
              />
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <SanityImage
                    {...data.logo.image}
                    alt={`${data.logo.alt}`}
                    className="header__logo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className='line-mobile'></div>
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
      <div className='line-desktop'></div>
    </header>
  );
}

export default Header;