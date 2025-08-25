import React from 'react';
import { BuildingIcon } from './icons/BuildingIcon';
import { NutBoltIcon } from './icons/NutBoltIcon';
import { QualityIcon } from './icons/QualityIcon';
import { ChipIcon } from './icons/ChipIcon';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-cyan/10 text-brand-cyan">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{title}</h3>
    <p className="font-sans text-gray-600">{description}</p>
  </div>
);


function Services(): React.ReactNode {
  return (
    <section id="services" className="py-20 lg:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Experience our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the innovative solutions we offer to build a better future.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<BuildingIcon className="w-8 h-8"/>}
            title="Project Execution"
            description="End-to-end construction services for residential compounds, commercial facilities, and infrastructure projects — built to the highest Saudi standards & Vision 2030."
          />
          <ServiceCard
            icon={<NutBoltIcon className="w-8 h-8"/>}
            title="Maintenance Solutions"
            description="Ongoing care for built and landscaped environments and facility upkeep to ensure long-term value. Book with one click and get the service you need."
          />
          <ServiceCard
            icon={<QualityIcon className="w-8 h-8"/>}
            title="Premium Turf & Sod Production"
            description="In-house cultivation of high-quality, climate-adapted turf using advanced seeding technology, delivering ready-to-install green spaces to compounds, resorts, and public areas."
          />
          <ServiceCard
            icon={<ChipIcon className="w-8 h-8"/>}
            title="Smart Solutions & Technology Integration"
            description="Enhancing properties with AI-driven irrigation, smart sensors, robotic services, and real-time dashboards — delivering efficiency, sustainability, and innovation."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;