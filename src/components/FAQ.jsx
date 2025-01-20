import React, { useState } from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
  padding: 4rem 0;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary-color);
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Question = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background-color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const Answer = styled.div`
  padding: ${({ isOpen }) => (isOpen ? '1.5rem' : '0 1.5rem')};
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: #f8f8f8;
  line-height: 1.6;
`;

const Icon = styled.span`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a comprehensive range of software development services including web development, mobile app development, cloud solutions, and UI/UX design. Our expertise spans across various technologies and frameworks to deliver custom solutions for your business needs.',
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer:
      'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our Basic plan includes 1 month of support, while our Pro and Subscription plans include ongoing support and maintenance.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer:
      "Absolutely! You can upgrade your plan at any time. We'll work with you to ensure a smooth transition and that all your needs are met with the new plan. Contact our support team to discuss upgrade options.",
  },
  {
    question: 'How do you handle project communication?',
    answer:
      "We maintain clear and consistent communication through regular meetings, progress reports, and a dedicated project management platform. You'll have a direct line to your project manager and can expect weekly updates on progress.",
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'We work with a wide range of modern technologies including React, Next.js, Angular, Node.js, NestJS, Python, Laravel, and more. Our team stays up-to-date with the latest technological advances to provide the best solutions for your needs.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id='faq'>
      <Container>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question onClick={() => toggleFAQ(index)}>
                {faq.question}
                <Icon isOpen={openIndex === index}>▼</Icon>
              </Question>
              <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </FAQSection>
  );
};

export default FAQ;
