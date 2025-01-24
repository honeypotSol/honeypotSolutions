import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Honeypot Solutions - Innovative Software Development',
  description = 'Custom software development solutions including web development, mobile apps, cloud solutions, and AI integration for businesses.',
  keywords = 'software development, web development, mobile apps, cloud solutions, AI, machine learning',
  image = '/images/og-image.jpg',
  url = 'https://honeypot-solutions.com',
  type = 'website',
  locale = 'en_US',
  author = 'Honeypot Solutions',
}) => {
  const imageUrl = `${url}${image}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Preconnect to External Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Honeypot Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content={author} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
