import React from 'react';
import { heroImageUrl } from '../images';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImageUrl}')` }}></div>
      <div className="absolute inset-0 bg-[#0D2F4F] opacity-70"></div>
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Building the Future of KSA: Smarter, Faster and Greener.
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          Smart and Sustainable Solutions into Construction and Landscaping. Fully Aligned with the Kingdom's Vision 2030.
        </p>
        <a href="#services" className="bg-[#00A0B0] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-[#007a85] transition-transform duration-300 hover:scale-105 inline-block">
          Experience Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;