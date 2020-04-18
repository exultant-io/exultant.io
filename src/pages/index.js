import React from 'react';
import Hero from '../components/Home/hero';
import Motto from '../components/Home/motto';
import Work from '../components/Home/work';
import Contact from '../components/Home/contact';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Motto />
    <Work />
    <Contact />
  </>
);

export default IndexPage;
