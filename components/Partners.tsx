import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { partnerLogos } from '../images';

const Partners: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id="partners" className="py-20 bg-[#F0F2F5]">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-center text-4xl font-bold text-[#0D2F4F] mb-12">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;