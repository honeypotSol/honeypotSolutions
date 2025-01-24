import React from 'react';
import { Helmet } from 'react-helmet-async';

const JsonLd = ({ type = 'Organization', data = {} }) => {
  const baseData = {
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Honeypot Solutions',
      url: 'https://honeypot-solutions.com',
      logo: 'https://honeypot-solutions.com/img/logo.png',
      description: 'Custom software development solutions including web development, mobile apps, cloud solutions, and AI integration for businesses.',
      sameAs: [
        'https://twitter.com/honeypot_solutions',
        'https://www.linkedin.com/company/honeypot-solutions',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '',
        contactType: 'customer service',
        email: 'contact@honeypot-solutions.com',
        areaServed: 'Worldwide'
      }
    },
    WebSite: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Honeypot Solutions',
      url: 'https://honeypot-solutions.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://honeypot-solutions.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  };

  const schemaData = {
    ...baseData[type],
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default JsonLd;
