import AnimatedSection from '../../components/animation/AnimatedSection';

const Banner = () => (
  <AnimatedSection id='contact'>
    <div className='mx-[-1rem] bg-gradient-to-r from-green-600 to-green-700 text-white py-20 px-4  shadow-xl'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>
          Revolutionizing Industries with AI
        </h2>
        <p className='text-xl mb-8'>
          Experience the power of artificial intelligence to transform your
          business and stay ahead in the digital era.
        </p>
        <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105'>
          Discover Our Solutions
        </button>
      </div>
    </div>
  </AnimatedSection>
);

export default Banner;
