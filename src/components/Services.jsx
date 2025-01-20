import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import SEO from './SEO';
import JsonLd from '../components/JsonLd';

const ServicesSection = styled.section`
  --bc: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  --bs: 2px;
  --cs: 40px;

  position: relative;
  padding: 4rem 0;
  margin: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: calc(-1 * var(--bs));
    background: var(--bc);
    z-index: 0;
    clip-path: polygon(
      var(--cs) 0,
      100% 0,
      100% calc(100% - var(--cs)),
      calc(50% + var(--cs)) calc(100% - var(--cs)),
      50% 100%,
      0% 100%,
      0 var(--cs)
    );
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: #fdfdff;
    clip-path: polygon(
      calc(var(--cs) + var(--bs) * 0.5) var(--bs),
      calc(100% - var(--bs)) var(--bs),
      calc(100% - var(--bs)) calc(100% - var(--cs) - var(--bs)),
      calc(50% + var(--cs) - var(--bs) * 0.5) calc(100% - var(--cs) - var(--bs)),
      calc(50% - var(--bs) * 0.5) calc(100% - var(--bs)),
      var(--bs) calc(100% - var(--bs)),
      var(--bs) calc(var(--cs) + var(--bs) * 0.5)
    );
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);

  &:hover {
    cursor: default;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const ServiceIcon = styled.i`
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const ServiceCard = styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
  position: relative;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 1.5rem;
    background: #ffffff;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    z-index: 2;
  }

  @media (max-width: 480px) {
    min-height: 250px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: 3;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scaleX(1);
    }

    ${ServiceIcon} {
      transform: scale(1.1);
      color: var(--primary-color);
    }
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--primary-color);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description:
      'Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js. We create everything from responsive business websites to complex enterprise solutions, ensuring performance, security, and user experience.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'Native iOS/Android and cross-platform mobile applications using React Native. We deliver high-performance apps with native-like experience.',
  },
  {
    icon: '🛍️',
    title: 'E-commerce Solutions',
    description:
      'Comprehensive e-commerce solutions using Shopify, Wordpress, and custom platforms. We implement secure payment gateways, inventory management, multi-currency support, and analytics tracking. Our solutions help businesses scale their online presence.',
  },
  {
    icon: '⚡',
    title: 'API Development',
    description:
      'Robust and scalable REST and GraphQL APIs built with modern architecture principles. We create secure, and performant APIs that power your applications. Our solutions include authentication, rate limiting, caching strategies, and comprehensive API documentation.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Expert AWS and Google Cloud implementations for optimal scalability. We handle cloud migration, serverless architecture, and automated CI/CD pipelines. Our cloud solutions ensure high availability, disaster recovery, and optimal resource utilization.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'Professional UI/UX design services focusing on user-centered design principles. We create intuitive interfaces, engaging user experiences, and responsive designs. ',
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
        description='Explore our comprehensive software development services including web development, mobile apps, cloud solutions, UI/UX design.'
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
