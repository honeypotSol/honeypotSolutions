import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);

  &:hover {
    cursor: default;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: default;
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  text-align: right;
`;

const testimonials = [
  {
    text: "Honeypot Solutions transformed our business with their innovative software. We couldn't be happier with the results!",
    author: 'Jane Doe, CEO of TechCorp',
  },
  {
    text: 'The team at Honeypot Solutions is incredibly talented and professional. They delivered our project on time and exceeded our expectations.',
    author: 'John Smith, CTO of StartupX',
  },
  {
    text: 'Working with Honeypot Solutions was a game-changer for our company. Their expertise in AI and machine learning helped us stay ahead of the competition.',
    author: 'Alice Johnson, Founder of AIVentures',
  },
];

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <div className='container'>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <TestimonialGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;
