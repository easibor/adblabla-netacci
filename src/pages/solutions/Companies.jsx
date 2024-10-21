// import AnimatedSection from '../../components/animation/AnimatedSection';
import { companies } from '../../config/companies';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
// import CompanyCard from './components/CompanyCard';

// const Companies = () => {
// Use this when other comapnies are added
//   return (
//     <AnimatedSection id='solutions'>
//       <div className='container mx-auto px-4 relative'>
//         <div className='absolute top-50 z-10 right-40 w-60 h-60 bg-green-300 rounded-full opacity-10 '></div>
//         <h2 className='text-3xl font-bold mb-8 text-center text-green-700'>
//           Our AI Powered Solutions
//         </h2>
//         <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
//           {companies.map((company) => (
//             <CompanyCard key={company.name} {...company} />
//           ))}
//         </div>
//       </div>
//     </AnimatedSection>
//   );
// };
const Companies = () => {
  const { name, description, focus, impact, handleRedirect } = companies[0];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={handleRedirect}
      className='py-16 mx-[-1rem]  bg-gradient-to-br from-green-50 to-green-100 cursor-pointer'
    >
      <div className='container mx-auto px-4 relative'>
        <div className='absolute top-0 right-0 w-64 h-64 bg-green-300 rounded-full opacity-10' />
        <div className='absolute bottom-0 left-0 w-48 h-48 bg-green-200 rounded-full opacity-10' />

        <h2 className='text-4xl font-bold mb-12 text-center text-green-800'>
          Our AI Powered Solution
        </h2>

        <Card className='border-green-500 border-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden'>
          <CardHeader className='bg-gradient-to-r from-green-600 to-green-700 p-6'>
            <CardTitle className='text-3xl font-bold text-white'>
              {name}
            </CardTitle>
          </CardHeader>
          <CardContent className='p-6 space-y-6'>
            <p className='text-lg text-gray-700 leading-relaxed'>
              {description}
            </p>

            <div>
              <h3 className='text-xl font-semibold text-green-700 mb-4'>
                Focus Areas:
              </h3>
              <ul className='grid grid-cols-2 gap-4'>
                {focus.map((area, index) => (
                  <li key={index} className='flex items-center space-x-2'>
                    <CheckCircle className='text-green-500' size={20} />
                    <span className='text-gray-700'>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-semibold text-orange-600 mb-4'>
                Key Impact:
              </h3>
              <p className='text-gray-700 bg-orange-50 border border-orange-200 rounded-lg p-4'>
                {impact}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

export default Companies;
