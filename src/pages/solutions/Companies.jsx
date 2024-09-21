import AnimatedSection from '../../components/animation/AnimatedSection';
import { companies } from '../../config/companies';
import CompanyCard from './components/CompanyCard';

const Companies = () => {
  return (
    <AnimatedSection id='solutions'>
      <div className='container mx-auto px-4 relative'>
        <div className='absolute top-50 z-10 right-40 w-60 h-60 bg-green-300 rounded-full opacity-10 '></div>
        <h2 className='text-4xl font-bold mb-8 text-center text-green-700'>
          Our AI Powered Solutions
        </h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Companies;
