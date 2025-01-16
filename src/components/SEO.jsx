import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Honeypot Solutions - Innovative Software Development',
  description = 'Custom software development solutions including web development, mobile apps, cloud solutions, and AI integration for businesses.',
  keywords = 'software development, web development, mobile apps, cloud solutions, AI, machine learning',
  image = '/images/og-image.jpg',
  url = 'https://honeypot-solutions.com',
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {/* Additional SEO Tags */}
      <meta name='robots' content='index, follow' />
      <meta name='language' content='English' />
      <link rel='canonical' href={url} />
    </Helmet>
  );
};

export default SEO;
