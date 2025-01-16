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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <SEO />
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
        <Element name='testimonials' id='testimonials-section'>
          <Testimonials />
        </Element>
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
      <Footer />
    </AppContainer>
  );
}

export default App;
