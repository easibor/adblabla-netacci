import { Globe, Send, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from '../../components/animation/AnimatedSection';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6 '>
      <div>
        <Label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Name
        </Label>
        <Input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
        />
      </div>
      <div>
        <Label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email
        </Label>
        <Input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
        />
      </div>
      <div>
        <Label
          htmlFor='message'
          className='block text-sm font-medium text-gray-700'
        >
          Message
        </Label>
        <Textarea
          id='message'
          name='message'
          rows='4'
          value={formData.message}
          onChange={handleChange}
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
        ></Textarea>
      </div>
      <Button
        type='submit'
        className='items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
      >
        <Send className='h-5 w-5 mr-2' />
        Send Message
      </Button>
    </form>
  );
};

const Contact = () => {
  return (
    <AnimatedSection id='contact' className='mb-24'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 text-center text-green-700'>
          Get in Touch
        </h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-4 text-green-600'>
              Contact Us
            </h3>
            <ContactForm />
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-4 text-green-600'>
              Our Information
            </h3>
            <div className='space-y-4 text-gray-700'>
              <div className='flex items-center'>
                <Mail className='w-6 h-6 text-orange-500 mr-4 flex-shrink-0' />
                <p>support@adblabla.com</p>
              </div>
              <div className='flex items-center'>
                <Phone className='w-6 h-6 text-orange-500 mr-4 flex-shrink-0' />
                <p>289-885-7879</p>
              </div>
              <div className='flex items-center'>
                <Globe className='w-6 h-6 text-orange-500 mr-4 flex-shrink-0' />
                <p>73 Water Street North, Suite 300 Cambridge, ON N1R 7L6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
