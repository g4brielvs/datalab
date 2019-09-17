import React from 'react';

import Home from '../components/layouts/home/home';
import SEO from '../components/seo';

const NotFoundPage = () => {
  if (typeof window !== 'undefined' && window.location.href.slice(-5) === '.html') {
    window.location = window.location.href.slice(0, window.location.href.length - 5);
  }
  return (
    <Home>
      <SEO title='404: Not found' />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Home >
  );
}

export default NotFoundPage;
