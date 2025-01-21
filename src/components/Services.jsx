import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 60px auto;
  padding: 100px 50px;
  --border-color: #ff8c00;
  --border-size: 3px;
  --cut-size: 40px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--border-color);
    clip-path: polygon(
      var(--cut-size) 0,
      100% 0,
      100% calc(100% - var(--cut-size)),
      calc(50% + var(--cut-size)) calc(100% - var(--cut-size)),
      50% 100%,
      0 100%,
      0 var(--cut-size)
    );
  }

  &::after {
    content: '';
    position: absolute;
    inset: var(--border-size);
    background: white;
    clip-path: polygon(
      var(--cut-size) 0,
      100% 0,
      100% calc(100% - var(--cut-size)),
      calc(50% + var(--cut-size)) calc(100% - var(--cut-size)),
      50% 100%,
      0 100%,
      0 var(--cut-size)
    );
  }
`;

const MainTitle = styled.h2`
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #ff8c00;
`;

const ServicesGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  height: 320px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(255, 140, 0, 0.2);
  }
`;

const ServiceContent = styled.div`
  padding: 24px;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const ServiceIcon = styled.span`
  font-size: 2.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
`;

const ServiceOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 140, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ServiceCard}:hover & {
    opacity: 1;
  }
`;

const Services = () => {
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

  return (
    <ServicesContainer>
      <MainTitle>Our Services</MainTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceContent>
              <ServiceHeader>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceHeader>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
            <ServiceOverlay />
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
