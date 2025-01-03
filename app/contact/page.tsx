import { Button } from '@/components/ui/button';
import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-900 dark:text-gray-200 body-font relative bg-gray-100 dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5313906350534!2d67.19876541059422!3d24.845694277846896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3309a1285ed8b%3A0xf6996718975e5724!2s89%20Landhi%20Rd%2C%20Sector%2037%20B%20Landhi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1732903823899!5m2!1sen!2s"
          ></iframe>
          <div className="bg-gray-100 dark:bg-gray-900 border-purple-500 border-[3px] relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-purple-700 dark:text-purple-400 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1 text-gray-800 dark:text-gray-400">Silicon Valley, CA, USA</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-purple-700 dark:text-purple-400 tracking-widest text-xs">EMAIL</h2>
              <a className="text-gray-800 dark:text-gray-400 leading-relaxed">example@coderblog.com</a>
              <h2 className="title-font font-semibold text-purple-700 dark:text-purple-400 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed text-gray-800 dark:text-gray-400">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-gray-200 dark:bg-gray-800 px-3 rounded-lg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-purple-700 dark:text-purple-400 text-3xl font-extrabold mb-1 title-font">Get In Touch</h2>
          <p className="leading-relaxed mb-5 text-gray-800 dark:text-gray-400">
            Have questions, feedback, or want to collaborate? Drop a message below!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-900 dark:text-gray-200">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 dark:bg-gray-700 rounded border border-purple-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-900 dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-900 dark:text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 dark:bg-gray-700 rounded border border-purple-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-900 dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-900 dark:text-gray-200">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 dark:bg-gray-700 rounded border border-purple-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-300 h-32 text-base outline-none text-gray-900 dark:text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <Button>
            Send Message
          </Button>
          <p className="text-xs text-gray-800 dark:text-gray-400 mt-3">
            Your privacy is important to us. We won't share your details with anyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
