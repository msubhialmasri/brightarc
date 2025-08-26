import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { aboutImageUrl } from '../images';

const About: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <section id="about" className="py-20 bg-white">
            <div ref={ref} className={`container mx-auto px-6 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold text-[#0D2F4F] mb-4">Who We Are</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            BRIGHT ARC LLC is an innovative firm based in KSA, providing AI-enabled, streamlined services, specializing in contracting and landscape solutions. We connect projects with skilled manpower and reliable resources, ensuring efficiency, quality, and timely delivery. By integrating smart workforce management and advanced technologies, Bright Arc LLC streamlines operations and supports clients in achieving durable, cost-effective, and future-ready outcomes.
                        </p>
                    </div>
                    <div>
                        <img 
                            src={aboutImageUrl}
                            alt="Robotic Construction Automation"
                            className="rounded-lg shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;