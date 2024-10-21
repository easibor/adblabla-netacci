import { lazy } from 'react';

import Layout from './components/layout/Layout';
const About = lazy(() => import('./pages/about/About.jsx'));
const Banner = lazy(() => import('./pages/banner/Banner.jsx'));
const Contact = lazy(() => import('./pages/contact/Contact.jsx'));
const Hero = lazy(() => import('./pages/hero/Hero.jsx'));
const Companies = lazy(() => import('./pages/solutions/Companies.jsx'));

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Companies />
      <Banner />
      <Contact />
    </Layout>
  );
};

export default App;
