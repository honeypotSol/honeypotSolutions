import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const OurWorkSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  /* Hide default arrows */
  .slick-prev,
  .slick-next {
    display: none !important;
  }

  /* Style the dots */
  .slick-dots {
    bottom: -40px;

    li button:before {
      font-size: 12px;
      color: var(--primary-color);
      opacity: 0.5;
    }

    li.slick-active button:before {
      opacity: 1;
      color: var(--primary-color);
    }
  }
`;

const WorkItem = styled.div`
  padding: 1rem;
`;

const WorkCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const WorkContent = styled.div`
  padding: 1.5rem;
`;

const WorkTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const WorkDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const FadeWrapper = styled.div`
  .slick-slide {
    opacity: 0.5;
    transition: opacity 0.5s ease;
  }

  .slick-active {
    opacity: 1;
  }

  .slick-current {
    opacity: 1;
  }
`;

const AnimatedWorkCard = ({ children, index }) => {
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

const works = [
  {
    title: 'E-commerce Platform',
    description:
      'A fully responsive online store with secure payment integration.',
    image: '/images/work1.jpg', // Replace with your actual image paths
    link: '#',
  },
  {
    title: 'AI-powered Chatbot',
    description:
      'An intelligent chatbot for customer support and lead generation.',
    image: '/images/work2.jpg',
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application.',
    image: '/images/work3.jpg',
    link: '#',
  },
  // Add more projects as needed
];

const OurWork = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    arrows: false, // Explicitly disable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <OurWorkSection>
      <SectionTitle>Our Work</SectionTitle>
      <CarouselContainer>
        <Slider {...settings}>
          {works.map((work, index) => (
            <WorkItem key={index}>
              <AnimatedWorkCard index={index}>
                <WorkCard>
                  <WorkImage src={work.image} alt={work.title} />
                  <WorkContent>
                    <WorkTitle>{work.title}</WorkTitle>
                    <WorkDescription>{work.description}</WorkDescription>
                  </WorkContent>
                </WorkCard>
              </AnimatedWorkCard>
            </WorkItem>
          ))}
        </Slider>
      </CarouselContainer>
    </OurWorkSection>
  );
};

export default OurWork;
