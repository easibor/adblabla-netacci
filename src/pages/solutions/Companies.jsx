import AnimatedSection from '../../components/animation/AnimatedSection';
import { companies } from '../../config/companies';
import CompanyCard from './components/CompanyCard';

const Companies = () => {
  return (
    <AnimatedSection id='solutions'>
      <div className='container mx-auto px-4'>
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
