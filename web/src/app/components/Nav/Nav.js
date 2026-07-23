'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/wlogo.png';
import { usePathname, useRouter } from 'next/navigation';

function MainNav() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='main-nav'>
      <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} height={70} width={200} className='nav-logo' alt='image'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link 
                className={`link d-flex align-items-center ${pathname === '/' ? 'activeNav' : ''}`} 
                href="/"
              >
                HOME
              </Link>
              <Link 
                className={`link d-flex align-items-center ${pathname === '/aboutUs' ? 'activeNav' : ''}`} 
                href="/aboutUs"
              >
                ABOUT
              </Link>
              
              {/* Dropdown for LOANS */}
              <NavDropdown
                title={<span className="dropdown-title" style={{color:'#fff'}}>LOANS</span>}
                id="financial-sectors-dropdown"
                show={isDropdownOpen}
                onClick={toggleDropdown}
                className="custom-dropdown"
                style={{display: 'flex', alignItems: 'center'}}
              >
                <NavDropdown.Item href="/acquisition-debt" className="dropdown-item-custom">
                  ACQUISITION DEBT
                </NavDropdown.Item>
                <NavDropdown.Item href="/machinery-loans" className="dropdown-item-custom">
                  MACHINERY LOANS
                </NavDropdown.Item>
                <NavDropdown.Item href="/ecb" className="dropdown-item-custom">
                  ECB
                </NavDropdown.Item>
              </NavDropdown>

              <Link 
                className={`link d-flex align-items-center ${pathname === '/contact' ? 'activeNav' : ''}`} 
                href="/contact" 
                style={{color:'#fff'}}
              >
                CONTACT US
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;