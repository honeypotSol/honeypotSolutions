import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import JsonLd from './JsonLd';

const HeroSection = styled.section`
  background-color: var(--primary-color);
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
`;

const HeroTitle = styled(animated.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled(animated.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled(animated.a)`
  background-color: white;
  color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

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
    <HeroSection>
      <JsonLd data={heroSchema} />
      <div className='container'>
        <HeroTitle style={titleProps}>Welcome to Honeypot Solutions</HeroTitle>
        <HeroSubtitle style={subtitleProps}>
          Innovative Software Development for Your Business
        </HeroSubtitle>
        <HeroButton style={buttonProps} href='#contact'>
          Get Started
        </HeroButton>
      </div>
    </HeroSection>
  );
};

export default Hero;
