
import React from 'react';

function Partners(): React.ReactNode {
  const partners = [
    { name: 'Boston Dynamics', logoUrl: 'https://www.materialhandling247.com/images/logos/Boston_Dynamics-Logo-500.png' },
    { name: 'Husqvarna', logoUrl: 'https://autolawn.co.uk/wp-content/uploads/2020/09/husqvarna-logo-blue-square.png' },
    { name: 'Humain', logoUrl: 'https://i.postimg.cc/yYwwQRwn/humain.jpg' }
  ];

  return (
    <section className="py-20 lg:py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy">Our partners</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
          {partners.map(partner => (
            <img 
              key={partner.name} 
              src={partner.logoUrl} 
              alt={partner.name} 
              className="h-16 md:h-20 object-contain" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;