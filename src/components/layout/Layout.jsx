/* eslint-disable react/prop-types */

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <main className='mx-auto px-4 py-12'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
