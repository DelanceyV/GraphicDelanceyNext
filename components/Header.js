import React, { useState } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, NavLink, NavbarBrand } from 'reactstrap';
import Image from 'next/image';
import logoImg from '../public/images/graphicDelanceyWord_ImageLogoWhiteLines.png';
import faviconImg from '../public/images/Favicon.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Jumbotron fluid>
        <Navbar fixed='top' expand='lg'>
          <NavbarBrand onClick={toggle}>
            <Image
              src={faviconImg}
              alt='GD logo'
              height={30}
              width={30}
            />
          </NavbarBrand>
          <Collapse id='responsive-navbar-nav' isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/gallery'>
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/cardGame'>
                  Game
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/reachOut'>
                  Reach Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <a href='/'>
              <Image
                src={logoImg}
                alt='Graphic Delancey logo'
                width={1000}
                height={200}
                layout='intrinsic'
              />
              </a>
            </div>
            <div className='col col-12'>
              <span className='rainbow title'>Delancey Vela</span>
            </div>
            <div className='col col-12'>
              <span>Web Developer | Graphic Designer</span>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default Header;