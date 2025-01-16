import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import SEO from './SEO';
import JsonLd from '../components/JsonLd';

const ServicesSection = styled.section`
  background-color: #f8f8f8;
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
`;

const ServiceIcon = styled.i`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--primary-color);
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom web applications tailored to your needs.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: '🚀',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure.',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions for your business challenges.',
  },
];

const AnimatedServiceCard = ({ children, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    delay: index * 200,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'Service',
    position: index + 1,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Honeypot Solutions',
    },
  })),
};

const Services = () => {
  return (
    <ServicesSection>
      <JsonLd data={servicesSchema} />
      <SEO
        title='Our Services - Honeypot Solutions'
        description='Explore our comprehensive software development services including web development, mobile apps, cloud solutions, and AI integration.'
        keywords='web development, mobile apps, cloud solutions, AI services'
      />
      <div className='container'>
        <SectionTitle>Our Services</SectionTitle>
        <ServiceGrid>
          {services.map((service, index) => (
            <AnimatedServiceCard key={index} index={index}>
              <ServiceCard>
                <div>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                </div>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </AnimatedServiceCard>
          ))}
        </ServiceGrid>
      </div>
    </ServicesSection>
  );
};

export default Services;
