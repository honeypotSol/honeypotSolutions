import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const OurWorkSection = styled.section`
  padding: 4rem 0;
  background-color: #f3f3f3;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
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
  position: relative;
  height: 450px;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 380px;
  }

  &:hover {
    transform: translateY(-5px);
    .overlay {
      opacity: 1;
    }
  }
`;

const WorkImage = styled.img.attrs({
  loading: 'lazy',
  decoding: 'async',
  width: '100%',
  height: '300',
})`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
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

const WorkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 140, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 2rem;
  color: white;
  text-align: center;
`;

const OverlayTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const OverlayDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ViewProjectButton = styled.a`
  background: white;
  color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    border: 1px solid white;
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
    title: 'Gambling Website',
    description: 'Gambling website with live betting for Roshtein',
    longDescription:
      'A comprehensive gambling platform featuring live betting, and real-time odds updates for one of the most popular streamers in the world',
    image: '/img/Rosh.png',
    technologies: ['Next.js', 'Laravel', 'CSS', 'MariaDB'],
  },
  {
    title: 'E-commerce Website',
    description: 'Redesigned e-commerce website for Voursa',
    longDescription:
      'Redesigned e-commerce website with transaction on Arabic and French languages and payment processing',
    image: '/img/Voursa.png',
    technologies: ['Next.js', 'Spring Boot', 'Tailwind'],
  },
  {
    title: 'Fitness Mobile App',
    description:
      'A secure and user-friendly mobile Fitness application for JustFit.',
    longDescription:
      'Interactive fitness tracking application with workout plans, progress monitoring, and social features.',
    image: '/img/JustFit.png',
    technologies: ['React Native', 'GraphQL'],
  },
  {
    title: 'Automobile Manufacturing Website',
    description:
      'Clean and modern website for a Carbon Fibre component manufacturer for MV Composites',
    longDescription:
      'MV Composites is a Carbon Fibre component manufacturer working within Formula 1, Automotive and Sports sectors.',
    image: '/img/Mvcomposite.png',
    technologies: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
  },
  {
    title: 'Portfolio Website',
    description: 'Creative portfolio website for JD',
    longDescription:
      'A clean and modern portfolio website for a Photographer and UI/UX Designer.',
    image: '/img/Portfolio.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
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
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
          dots: false,
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
                  <WorkOverlay className='overlay'>
                    <OverlayTitle>{work.title}</OverlayTitle>
                    <OverlayDescription>
                      {work.longDescription}
                    </OverlayDescription>
                    <div style={{ marginBottom: '1rem' }}>
                      {work.technologies.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            background: 'rgba(255,255,255,0.2)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '15px',
                            margin: '0 0.25rem',
                            fontSize: '0.9rem',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </WorkOverlay>
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
