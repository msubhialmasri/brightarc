import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { approachImages } from '../images';

const ApproachSection: React.FC<{ imageUrl: string; title: string; description: string; reverse?: boolean }> = ({ imageUrl, title, description, reverse = false }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div ref={ref} className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2">
                <img src={imageUrl} alt={title} className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-80" />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-[#0D2F4F] mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};


const Approach: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const isTitleVisible = useOnScreen(titleRef);
    return (
        <section id="approach" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className={`text-center mb-16 transition-opacity duration-1000 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold text-[#0D2F4F]">Our Innovative Approach</h2>
                </div>
                <div className="space-y-20">
                    <ApproachSection
                        imageUrl={approachImages.innovativeTech}
                        title="Innovative Technologies"
                        description="Sustainability through AI-driven systems saving resources, man-hour, water, critical in the Saudi climate. Consistency and quality as robotics ensure precision in tasks like paving, planting, painting, or inspection."
                    />
                    <ApproachSection
                        imageUrl={approachImages.precision}
                        title="Precision"
                        description="Data-driven solutions using AI for predictive cost estimation, project scheduling, and Augmented Reality via generative AI."
                        reverse={true}
                    />
                    <ApproachSection
                        imageUrl={approachImages.automation}
                        title="Automation"
                        description="Streamlining construction & landscaping with digital platforms, AR visualization, automated equipment, and 3D printing to deliver projects faster, safer, and more cost-effective."
                    />
                </div>
            </div>
        </section>
    );
};

export default Approach;