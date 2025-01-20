import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import OurWork from './components/OurWork';
import SEO from './components/SEO';
import JsonLd from './components/JsonLd';
import FAQ from './components/FAQ';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Honeypot Solutions',
  url: 'https://honeypot-solutions.com',
  logo: 'https://honeypot-solutions.com/favicon.svg',
  description:
    'Innovative software development solutions including web development, mobile apps, cloud solutions, and AI integration for businesses.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  sameAs: [
    'https://facebook.com/honeypot-solutions',
    'https://twitter.com/honeypot',
    'https://linkedin.com/company/honeypot-solutions',
    'https://github.com/honeypot-solutions',
  ],
  offers: {
    '@type': 'AggregateOffer',
    offers: [
      {
        '@type': 'Offer',
        name: 'Basic Plan',
        price: '999',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Pro Plan',
        price: '2499',
        priceCurrency: 'USD',
      },
    ],
  },
};

function App() {
  return (
    <AppContainer>
      <SEO />
      <JsonLd data={structuredData} />
      <Navbar />
      <Element name='home'>
        <Hero />
      </Element>
      <ScrollAnimation>
        <Element name='work' id='work-section'>
          <OurWork />
        </Element>
      </ScrollAnimation>
      <ScrollAnimation>
        <Element name='services' id='services-section'>
          <Services />
        </Element>
      </ScrollAnimation>
      <ScrollAnimation>
        {/* <Element name='testimonials' id='testimonials-section'>
          <Testimonials />
        </Element> */}
      </ScrollAnimation>
      <ScrollAnimation>
        <Element name='pricing' id='pricing-section'>
          <Pricing />
        </Element>
      </ScrollAnimation>
      <ScrollAnimation>
        <Element name='contact' id='contact-section'>
          <Contact />
        </Element>
      </ScrollAnimation>
      <ScrollAnimation>
        <Element name='faq' id='faq-section'>
          <FAQ />
        </Element>
      </ScrollAnimation>
      <Footer />
    </AppContainer>
  );
}

export default App;
