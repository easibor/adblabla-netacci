import { useEffect, useState } from 'react';
import { Blend, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'solutions', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='fixed w-full bg-white bg-opacity-90 shadow-md z-50'
      >
        <div className='container mx-auto px-4 py-4'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <Blend className='h-8 w-8 text-orange-600 mr-2' />
              <h1 className='text-2xl font-bold text-green-700'>
                adblabla tech
              </h1>
            </div>
            <nav className='hidden md:block'>
              <ul className='flex space-x-6'>
                {['About', 'Solutions', 'Contact'].map((item) => (
                  <motion.li key={item} whileHover={{ scale: 1.1 }}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-sm font-medium transition-all duration-300 ${
                        activeSection === item.toLowerCase()
                          ? 'text-orange-500 border-b-2 border-orange-500'
                          : 'text-gray-600 hover:text-orange-500'
                      }`}
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.button
              className='md:hidden text-gray-600 hover:text-green-600 transition-colors duration-200'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </motion.button>
          </div>
        </div>
        {isMenuOpen && (
          <div className='md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-40'>
            <nav className='container mx-auto px-4 py-4'>
              <ul className='space-y-4'>
                {['About', 'Solutions', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        activeSection === item.toLowerCase()
                          ? 'text-orange-500'
                          : 'text-gray-600 hover:text-orange-500'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </motion.header>
    </>
  );
};

export default Navbar;
