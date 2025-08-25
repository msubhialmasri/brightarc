import React from 'react';

function About(): React.ReactNode {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/3 w-full flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
               <img 
                 src="https://img.freepik.com/premium-vector/robotic-construction-automation-logo-design-suistable-business-construction_845634-182.jpg?w=1480" 
                 alt="Bright Arc LLC Logo" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">About Bright Arc LLC</h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed">
              BRIGHT ARC LLC is an innovative company to be formed in KSA, providing AI-enabled, streamlined services, specializing in contracting and landscape solutions. We connect projects with skilled manpower and reliable resources, ensuring efficiency, quality, and timely delivery. By integrating smart workforce management and advanced technologies, Bright Arc LLC streamlines operations and supports clients in achieving durable, cost-effective, and future-ready outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;