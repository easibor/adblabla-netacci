const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-700 py-8 border-t border-green-200'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-center md:text-left'>
            &copy; 2024 adblabla technologies. All rights reserved.
          </p>
          <div className='mt-4 md:mt-0 flex flex-wrap justify-center'>
            <a
              href='#'
              className='text-sm hover:text-green-600 transition-colors duration-200 mr-4'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-sm hover:text-green-600 transition-colors duration-200'
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
