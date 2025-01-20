import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { InlineWidget } from 'react-calendly';

const ContactSection = styled.section`
  padding: 4rem 0;
  background-color: #fdfdff;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const BookCallSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
  min-height: 600px;
  width: 100%;
`;

const CalendlyWidget = styled.div`
  height: 100%;
  width: 100%;
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 20 },
  });

  useEffect(() => {
    const loadCalendlyScript = () => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsCalendlyReady(true);
      document.body.appendChild(script);
    };

    if (window.Calendly) {
      setIsCalendlyReady(true);
    } else if (
      !document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
    ) {
      loadCalendlyScript();
    }

    return () => {
      // Cleanup if needed
      const script = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          to: 'info@honeypot-solutions.com',
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection>
      <ContactContainer>
        <animated.div style={animationProps}>
          <Title>Get in Touch</Title>
          <Subtitle>
            Have a question or want to work together? We'd love to hear from
            you!
          </Subtitle>
          <ContactGrid>
            <BookCallSection>
              <CalendlyWidget>
                {isCalendlyReady && (
                  <InlineWidget
                    url='https://calendly.com/honeypot-solutions-info'
                    styles={{
                      height: '700px',
                      width: '100%',
                    }}
                    prefill={{
                      email,
                      name,
                      customAnswers: {
                        a1: message,
                        a2: 'Web Inquiry',
                      },
                    }}
                    pageSettings={{
                      backgroundColor: 'ffffff',
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: '00a2ff',
                      textColor: '4d5055',
                    }}
                  />
                )}
              </CalendlyWidget>
            </BookCallSection>

            <Title>Or Send Us a Message</Title>
            <ContactForm onSubmit={handleSubmit}>
              <FormInput
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormInput
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormTextarea
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <SubmitButton type='submit'>Send Message</SubmitButton>
            </ContactForm>
          </ContactGrid>
        </animated.div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
