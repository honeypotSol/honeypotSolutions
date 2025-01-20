import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import JsonLd from './JsonLd';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = styled.section`
  background-color: var(--primary-color);
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 100px), 0 100%);
  padding-bottom: 150px;

  &:hover {
    cursor: default;
  }

  z-index: 1;

  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), 0 100%);
    padding-bottom: 100px;
    margin-bottom: -50px;
  }

  @media (max-width: 480px) {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), 0 100%);
    padding-bottom: 80px;
    margin-bottom: -30px;
  }
`;

const HeroTitle = styled(animated.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled(animated.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0 15px;
`;

const HeroButton = styled(ScrollLink)`
  background-color: white;
  color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-color);
    color: white;
  }
`;

const Hero = () => {
  const heroSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Honeypot Solutions',
    description: 'Innovative Software Development for Your Business',
    url: 'https://honeypot-solutions.com',
    potentialAction: {
      '@type': 'ContactAction',
      target: 'https://honeypot-solutions.com/#contact',
    },
  };

  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  const subtitleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
  });

  const buttonProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 900,
  });

  return (
    <div>
      <HeroSection>
        <JsonLd data={heroSchema} />
        <HeroTitle style={titleProps}>Welcome to Honeypot Solutions</HeroTitle>
        <HeroSubtitle style={subtitleProps}>
          Innovative Software Development for Your Business
        </HeroSubtitle>
        <HeroButton
          style={buttonProps}
          to='pricing'
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
        >
          Get Started
        </HeroButton>
      </HeroSection>
    </div>
  );
};

export default Hero;
