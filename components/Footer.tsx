import React from 'react';
import { PhoneIcon, EmailIcon, LocationIcon } from '../images';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0D2F4F] text-white pt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-gray-300 mt-2">Let's build the future together. Reach out for a consultation.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <PhoneIcon />
                <span>+966 12 345 6789</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <EmailIcon />
                <span>consult@brightarcllc.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <LocationIcon />
                <span>Makkah, KSA</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form (Visual Only) */}
          <div className="md:w-2/3">
             <form className="space-y-4">
               <div className="flex flex-col sm:flex-row gap-4">
                 <input type="text" placeholder="Name" className="w-full bg-[#183d5f] p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00A0B0]" />
                 <input type="email" placeholder="Email" className="w-full bg-[#183d5f] p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00A0B0]" />
               </div>
               <input type="text" placeholder="Subject" className="w-full bg-[#183d5f] p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00A0B0]" />
               <textarea placeholder="Message" rows={5} className="w-full bg-[#183d5f] p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00A0B0]"></textarea>
               <button type="button" className="w-full bg-[#00A0B0] text-white font-bold py-3 px-6 rounded-md hover:bg-[#007a85] transition-colors duration-300">
                 Send Message
               </button>
             </form>
          </div>
        </div>
        
        <div className="mt-16 py-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Bright Arc LLC. All Rights Reserved. | www.brightarcllc.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;