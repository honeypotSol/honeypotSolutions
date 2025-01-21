import React from 'react';

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
    <div className="services-container">
      <h2 className="main-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
            <div className="service-overlay"></div>
          </div>
        ))}
      </div>

      <style>{`
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .main-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 40px;
          color: #ff8c00;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          position: relative;
          background: white;
          border-radius: 8px;
          height: 280px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(255, 140, 0, 0.2);
        }

        .service-content {
          padding: 24px;
          height: 100%;
          position: relative;
          z-index: 1;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .service-icon {
          font-size: 2.5rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          color: #333;
        }

        .service-description {
          color: #666;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 140, 0, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-overlay {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .services-container {
            padding: 20px 16px;
          }
          
          .main-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;