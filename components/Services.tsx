import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { ProjectExecutionIcon, MaintenanceSolutionsIcon, PremiumTurfIcon, SmartSolutionsIcon } from '../images';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: string }> = ({ icon, title, description, delay }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
    return (
        <div ref={ref} className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: delay}}>
            <div className="text-[#00A0B0] mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-[#0D2F4F] mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

const Services: React.FC = () => {
    const services = [
        {
            icon: <ProjectExecutionIcon />,
            title: "Project Execution",
            description: "End-to-end construction services for residential compounds, commercial facilities, and infrastructure projects — built to the highest Saudi standards & Vision 2030.",
            delay: "100ms"
        },
        {
            icon: <MaintenanceSolutionsIcon />,
            title: "Maintenance Solutions",
            description: "Ongoing care for built and landscaped environments and facility upkeep to ensure long-term value. Book with one click and get the service you need.",
            delay: "200ms"
        },
        {
            icon: <PremiumTurfIcon />,
            title: "Premium Turf & Sod Production",
            description: "In-house cultivation of high-quality, climate-adapted turf using advanced seeding technology, delivering ready-to-install green spaces to compounds, resorts, and public areas.",
            delay: "300ms"
        },
        {
            icon: <SmartSolutionsIcon />,
            title: "Smart Solutions & Technology Integration",
            description: "Enhancing properties with AI-driven irrigation, smart sensors, robotic services, and real-time dashboards, delivering efficiency, sustainability, and innovation.",
            delay: "400ms"
        }
    ];

    const titleRef = useRef<HTMLHeadingElement>(null);
    const isTitleVisible = useOnScreen(titleRef);

    return (
        <section id="services" className="py-20 bg-[#F0F2F5]">
            <div className="container mx-auto px-6">
                <div ref={titleRef} className={`text-center mb-12 transition-opacity duration-1000 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold text-[#0D2F4F]">What We Offer</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;