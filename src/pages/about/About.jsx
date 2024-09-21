import React from 'react';
import { solutionsData } from '../../config/solutions';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '../../components/animation/AnimatedSection';

const About = () => {
  return (
    <AnimatedSection id='about'>
      <div className='container mx-auto px-4 relative'>
        <div className='absolute top-20 z-10 left-10 w-10 h-10 bg-orange-300 rounded-full opacity-20 '></div>
        <h2 className='text-3xl font-bold mb-8 text-center text-green-700'>
          Empowering New Age Solutions with AI
        </h2>
        <p className='text-xl mb-12 text-center max-w-3xl mx-auto text-gray-700 leading-relaxed'>
          Adblabla technologies is at the forefront of developing and
          implementing cutting-edge AI solutions that drive efficiency, foster
          innovation, and create unprecedented value across industries.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {solutionsData.map((item, index) => (
            <Card
              key={index}
              className='bg-white border-green-200 border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <CardContent className='flex flex-col items-center text-center p-6'>
                <item.icon className='w-12 h-12 text-orange-500 mb-4' />
                <h3 className='text-lg font-semibold mb-2 text-green-700'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
