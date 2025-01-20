import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import JsonLd from '../components/JsonLd';
import logo from '../../public/img/logo.png';
const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 0.5rem;
  border-radius: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 24px;
  width: auto;
  padding: 0 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  background-color: var(--primary-color);
  border-radius: 50px;
  padding: 0.5rem;
  margin: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--primary-color);
    border: 1px solid white;
    border-radius: 0 0 20px 20px;
    padding: 1rem;
    margin-top: 0.5rem;
  }
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1px 1.2rem;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: block;
  text-align: center;
  width: 100%;
  offset: -100px;

  &:hover,
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-top: 5px;
  }
`;

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://honeypot-solutions.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://honeypot-solutions.com#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pricing',
      item: 'https://honeypot-solutions.com#pricing',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://honeypot-solutions.com#contact',
    },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav
      ref={navRef}
      style={{
        boxShadow: scrolled
          ? '0 4px 10px rgba(0, 0, 0, 0.1)'
          : '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <JsonLd data={breadcrumbSchema} />
      <NavContainer>
        <Logo src={logo} alt='Honeypot Solutions' />
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavItem>
            <NavLink
              to='home'
              smooth={true}
              duration={500}
              spy={true}
              activeClass='active'
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='services'
              smooth={true}
              duration={500}
              spy={true}
              activeClass='active'
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='pricing'
              smooth={true}
              duration={500}
              spy={true}
              activeClass='active'
            >
              Pricing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              activeClass='active'
            >
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='faq'
              smooth={true}
              duration={500}
              spy={true}
              activeClass='active'
            >
              FAQ
            </NavLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
