import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  --col-gap: 2rem;
  --barH: 1rem;
  --roleH: 2rem;
  --flapH: 2rem;
`;

const MainTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #ff8c00;
`;

const ServicesGrid = styled.ul`
  width: 100%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--col-gap);
  padding-inline: calc(var(--col-gap) / 2);
  list-style: none;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.li`
  display: grid;
  grid-template:
    "role"
    "icon"
    "title"
    "descr";
  align-items: flex-start;
  gap: 1rem;
  padding-block-end: calc(var(--flapH) + 1rem);
  text-align: center;
  background: ${props => props.accentColor};
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6) var(--roleH),
    rgba(0, 0, 0, 0.4) calc(var(--roleH) + 0.5rem),
    rgba(0, 0, 0, 0) calc(var(--roleH) + 0.5rem + 5rem)
  );
  clip-path: polygon(
    calc(var(--col-gap) / -2 - 5px) 0,
    calc(100% + var(--col-gap) / 2 + 5px) 0,
    calc(100% + var(--col-gap) / 2 + 5px) calc(100% - var(--flapH)),
    50% 100%,
    calc(var(--col-gap) / -2 - 5px) calc(100% - var(--flapH))
  );

  &::before {
    content: "";
    grid-area: role;
    height: var(--barH);
    width: calc(100% + var(--col-gap));
    margin-left: calc(var(--col-gap) / -2);
    margin-top: calc(var(--roleH) / 2 - var(--barH) / 2);
    background: #666;
    z-index: -1;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2) 30%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.4)
    );
  }

  &::after {
    content: "";
    grid-area: role;
    background: ${props => props.accentColor};
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2) 30%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.4)
    );
    height: var(--roleH);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  padding-inline: 1rem;
  color: white;
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  grid-area: icon;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  padding-inline: 1rem;
  color: white;
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  margin: 0;
  grid-area: title;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  padding-inline: 1rem;
  color: white;
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  line-height: 1.6;
  margin: 0;
  grid-area: descr;
`;

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description:
        'Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js. We create everything from responsive business websites to complex enterprise solutions.',
      color: '#4A90E2'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description:
        'Native iOS/Android and cross-platform mobile applications using React Native. We deliver high-performance apps with native-like experience.',
      color: '#50C878'
    },
    {
      icon: '🛍️',
      title: 'E-commerce Solutions',
      description:
        'Comprehensive e-commerce solutions using Shopify, Wordpress, and custom platforms. We implement secure payment gateways and inventory management.',
      color: '#E24A86'
    },
    {
      icon: '⚡',
      title: 'API Development',
      description:
        'Robust and scalable REST and GraphQL APIs built with modern architecture principles. We create secure, and performant APIs that power your applications.',
      color: '#FFB347'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description:
        'Expert AWS and Google Cloud implementations for optimal scalability. We handle cloud migration, serverless architecture, and automated CI/CD pipelines.',
      color: '#9B59B6'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'Professional UI/UX design services focusing on user-centered design principles. We create intuitive interfaces and engaging user experiences.',
      color: '#E74C3C'
    },
  ];

  return (
    <ServicesContainer>
      <MainTitle>Our Services</MainTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} accentColor={service.color}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
