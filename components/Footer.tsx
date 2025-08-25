
import React from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { EmailIcon } from './icons/EmailIcon';
import { LocationIcon } from './icons/LocationIcon';

function Footer(): React.ReactNode {
  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Contact Us</h2>
          <p className="text-lg text-gray-300">Let's build the future together. Reach out for a consultation.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-display font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-brand-cyan" />
                <span className="text-gray-300">+966 11 123 4567 (placeholder)</span>
              </div>
              <div className="flex items-center gap-4">
                <EmailIcon className="w-6 h-6 text-brand-cyan" />
                <span className="text-gray-300">consult@brightarcllc.com (placeholder)</span>
              </div>
              <div className="flex items-center gap-4">
                <LocationIcon className="w-6 h-6 text-brand-cyan" />
                <span className="text-gray-300">Riyadh, Kingdom of Saudi Arabia</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
             <form className="space-y-4">
               <input type="text" placeholder="Name" className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition" />
               <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition" />
               <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition" />
               <textarea placeholder="Message" rows={4} className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition"></textarea>
               <button type="button" className="w-full bg-brand-cyan text-white font-display font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all shadow-md">
                 Send Message
               </button>
             </form>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          © 2025 Bright Arc LLC. All Rights Reserved. | www.brightarcllc.com
        </div>
      </div>
    </footer>
  );
}

export default Footer;
