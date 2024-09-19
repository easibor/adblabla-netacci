/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const CompanyCard = ({ name, description, focus, impact, handleRedirect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className='w-full h-full cursor-pointer'
    onClick={handleRedirect}
  >
    <Card className='border-green-500 border shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <CardHeader className='bg-gradient-to-r from-green-500 to-green-600'>
        <CardTitle className='text-xl font-bold text-white'>{name}</CardTitle>
      </CardHeader>
      <CardContent className='mt-4'>
        <p className='mb-4 text-gray-700'>{description}</p>
        <div className='space-y-2'>
          <p className='text-sm font-semibold text-green-600'>Focus Areas:</p>
          <ul className='list-disc list-inside text-sm text-gray-600'>
            {focus.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
          <p className='text-sm mt-4 font-semibold text-orange-600'>
            Key Impact:
          </p>
          <p className='text-sm text-gray-600'>{impact}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default CompanyCard;
