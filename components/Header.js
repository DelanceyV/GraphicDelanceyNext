import React, { useState } from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, NavLink, NavbarBrand } from "reactstrap";
import Image from "next/image";
import logoImg from "../public/images/graphicDelanceyWord_ImageLogoWhiteLines.png";
import faviconImg from "../public/images/Favicon.png";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <Image
                src={logoImg}
                alt="Graphic Delancey logo"
                width={1000}
                height={200}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </Jumbotron>
      <div>
        <Navbar>
          <NavbarBrand href="/">
            <Image
              src={faviconImg}
              alt="GD logo"
              height={30}
              width={30}
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/gallery">
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/game">
                  Game
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;