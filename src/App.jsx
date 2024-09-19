import Layout from './components/layout/Layout';
import About from './pages/about/About';
import Banner from './pages/banner/Banner';
import Contact from './pages/contact/Contact';
import Hero from './pages/hero/Hero';
import Companies from './pages/solutions/Companies';

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
