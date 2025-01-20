import React, { useState, useEffect } from 'react';
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
  height: 41.6px;
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
  list-style: none;
  background-color: var(--primary-color);
  border-radius: 50px;
  padding: 0.5rem;

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

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;
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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav
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
              to='testimonials'
              smooth={true}
              duration={500}
              spy={true}
              activeClass='active'
            >
              Testimonials
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
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
