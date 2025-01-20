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

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    min-height: 350px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    min-height: 300px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), #ff8c00);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    background: linear-gradient(135deg, #ffffff 0%, #fff5e6 100%);
    border-color: rgba(255, 140, 0, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }

    ${ServiceIcon} {
      transform: scale(1.1);
      color: #ff8c00;
    }
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--primary-color);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    -webkit-line-clamp: 5;
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
