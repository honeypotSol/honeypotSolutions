import React from 'react';
import styled from 'styled-components';
import SEO from './SEO';
import JsonLd from '../components/JsonLd';

const ServicesSection = styled.section`
  --bc: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  --bs: 2px;
  --cs: 35px;

  position: relative;
  padding: 4rem 0;
  margin: 2rem;
  background: #f3f3f3;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 2rem 0;
    background: #fdfdff;
    border: 2px solid var(--primary-color);
    border-radius: 16px;

    &::before,
    &::after {
      display: none;
    }
  }

  @media (min-width: 769px) {
    &::before {
      content: '';
      position: absolute;
      inset: calc(-1 * var(--bs));
      background: var(--bc);
      z-index: -1;
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
      z-index: -1;
      clip-path: polygon(
        calc(var(--cs) + var(--bs) * 0.5) var(--bs),
        calc(100% - var(--bs)) var(--bs),
        calc(100% - var(--bs)) calc(100% - var(--cs) - var(--bs)),
        calc(50% + var(--cs) - var(--bs) * 0.5)
          calc(100% - var(--cs) - var(--bs)),
        calc(50% - var(--bs) * 0.5) calc(100% - var(--bs)),
        var(--bs) calc(100% - var(--bs)),
        var(--bs) calc(var(--cs) + var(--bs) * 0.5)
      );
    }
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

const ServiceCard = styled.div``;

const ServiceIcon = styled.i`
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  display: inline-block;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
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
            <ServiceCard key={index}>
              <div>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
              </div>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </div>
    </ServicesSection>
  );
};

export default Services;
