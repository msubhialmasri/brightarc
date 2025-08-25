import React from 'react';

function Hero(): React.ReactNode {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white bg-gray-800">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/ksa-arch/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-brand-navy opacity-70"></div>
      </div>
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
          Building the Future of KSA: Smarter, Greener, and Future-Ready.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-sans">
          Integrating AI, Robotics, and Sustainable Solutions into Construction, Landscaping, and Facility Management. Fully Aligned with the Kingdom's Vision 2030.
        </p>
        <a 
          href="#services" 
          className="bg-brand-cyan text-white font-display font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 transition-all shadow-lg transform hover:scale-105"
        >
          Discover Our Services
        </a>
      </div>
    </section>
  );
}

export default Hero;