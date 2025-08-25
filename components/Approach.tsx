import React from 'react';

interface ApproachItemProps {
  image: string;
  title: string;
  description: string;
  imageSide: 'left' | 'right';
  imageAlt: string;
}

const ApproachItem: React.FC<ApproachItemProps> = ({ image, title, description, imageSide, imageAlt }) => (
  <div className={`flex flex-col ${imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
    <div className="md:w-2/5">
      <img src={image} alt={imageAlt} className="rounded-lg shadow-xl w-full h-auto object-cover" />
    </div>
    <div className="md:w-3/5">
      <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">{title}</h3>
      <p className="text-lg font-sans text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

function Approach(): React.ReactNode {
  return (
    <section id="approach" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Our Innovative Approach</h2>
           <p className="text-lg text-gray-600 max-w-3xl mx-auto">We leverage cutting-edge automation, precision engineering, and sustainable practices to redefine excellence in construction and landscaping.</p>
        </div>
        <div className="space-y-20">
          <ApproachItem
            image="https://picsum.photos/seed/automation/600/400"
            title="Automation"
            description="Streamlining construction & landscaping with digital platforms, AR visualization, automated equipment, and 3D printing to deliver projects faster, safer, and more cost-effective."
            imageSide="left"
            imageAlt="Automated construction equipment with digital overlays"
          />
          <ApproachItem
            image="https://picsum.photos/seed/precision/600/400"
            title="Precision"
            description="Using AI for predictive cost estimation, smart project scheduling, and generative design to ensure accuracy and efficiency at every stage."
            imageSide="right"
            imageAlt="AI-powered project dashboard showing data analytics"
          />
          <ApproachItem
            image="https://picsum.photos/seed/sustainability/600/400"
            title="Sustainability"
            description="Deploying AI-driven irrigation and robotics to conserve water, enhance quality, and guarantee long-term durability in line with Saudi climate needs."
            imageSide="left"
            imageAlt="AI-controlled irrigation system in a modern landscape"
          />
        </div>
      </div>
    </section>
  );
}

export default Approach;