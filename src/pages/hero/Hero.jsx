import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className='mb-16 mx-[-1rem]  '>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative h-[70vh] flex items-center justify-center overflow-hidden relative'
      >
        <div className='absolute top-10 z-10 left-10 w-2 h-80 transform rotate-45 bg-green-600 rounded-full opacity-10 '></div>
        <div className='absolute top-10 z-10 left-10 w-2 h-80 transform rotate-90 bg-green-600 rounded-full opacity-10 '></div>
        <div className='absolute top-10 z-10 right-10 w-20 h-80 bg-green-300 rounded-full opacity-20 '></div>

        <div className='hidden lg:block absolute -bottom-[200px] z-10 left-70 w-60 h-60 bg-orange-300 rounded-full opacity-20 '></div>
        <div className='absolute inset-0 z-0'>
          <motion.div
            animate={{
              scale: [1, 1.2, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className='w-full h-full bg-gradient-to-br from-green-100 via-green-200 to-orange-100'
          />
        </div>
        <div className='relative z-10 text-center text-gray-800'>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='text-6xl font-bold mb-4'
          >
            Adblabla tech
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='text-2xl mb-8'
          >
            Revolutionizing industries with cutting-edge AI solutions
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:bg-green-700 transition duration-300'
            onClick={() => (window.location.href = '#solutions')}
          >
            Explore Our Solutions
          </motion.button>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='absolute bottom-[10px] md:bottom-0 left-[45%] md:left-[49%] md:-translate-x-1/2 lg:bottom-10 transform -translate-x-1/2, cursor-pointer  '
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
        >
          <ChevronDown className='w-10 h-10 text-gray-600' />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
