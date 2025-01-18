import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='container'>
        <FooterContent>
          <Copyright>
            &copy; {new Date().getFullYear()} Honeypot Solutions. All rights
            reserved.
          </Copyright>
          <SocialLinks>
            <SocialLink href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook'></i>
            </SocialLink>
            <SocialLink href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter'></i>
            </SocialLink>
            <SocialLink href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin'></i>
            </SocialLink>
            <SocialLink href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github'></i>
            </SocialLink>
          </SocialLinks>
        </FooterContent>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
