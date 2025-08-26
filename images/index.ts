import React from 'react';

// Image URLs
export const heroImageUrl = 'https://thesaudiboom.com/wp-content/uploads/2025/01/1-NEOM-to-Begin-Vertical-Construction-of-THE-LINE-by-End-of-2025.png';
export const aboutImageUrl = 'https://img.freepik.com/premium-vector/robotic-construction-automation-logo-design-suistable-business-construction_845634-182.jpg';

export const approachImages = {
  innovativeTech: 'https://alcorfund.com/wp-content/uploads/2020/09/Technical-Innovation-defination.png',
  precision: 'https://neuroject.com/wp-content/uploads/2024/08/7-Innovative-Construction-Robotics-Changing-the-Industry-Neuroject-Main.jpg',
  automation: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

// Partner Logos
export const partnerLogos = [
  { name: 'Boston Dynamics', logoUrl: 'https://www.materialhandling247.com/images/logos/Boston_Dynamics-Logo-500.png' },
  { name: 'Husqvarna', logoUrl: 'https://autolawn.co.uk/wp-content/uploads/2020/09/husqvarna-logo-blue-square.png' },
  { name: 'Humain', logoUrl: 'https://i.postimg.cc/yYwwQRwn/humain.jpg' },
  { name: '2030', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GkrXPufQ5LrbcAD-6s3JK6bs4KRIXDkelA&s' },
];

// SVG Icon Components for Services
const serviceIconProps = {
    className: "h-12 w-12",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
};

export const ProjectExecutionIcon: React.FC = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", ...serviceIconProps },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" })
    )
);

export const MaintenanceSolutionsIcon: React.FC = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", ...serviceIconProps },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l1.414 1.414m10.9-1.414l-1.414 1.414M18.364 18.364l-1.414-1.414m-10.9 1.414l1.414-1.414M12 16a4 4 0 110-8 4 4 0 010 8z" })
    )
);

export const PremiumTurfIcon: React.FC = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", ...serviceIconProps },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l5.707 5.707a1 1 0 010 1.414L13 21m5-16l-2.293 2.293a1 1 0 000 1.414L16 12l-5.707 5.707a1 1 0 000 1.414L13 21" })
    )
);

export const SmartSolutionsIcon: React.FC = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", ...serviceIconProps },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" })
    )
);


// SVG Icon Components for Footer
const footerIconProps = {
    className:"h-6 w-6 text-[#00A0B0]",
    fill:"none",
    viewBox:"0 0 24 24",
    stroke:"currentColor"
};

export const PhoneIcon: React.FC = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", ...footerIconProps },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" })
    )
);

export const EmailIcon: React.FC = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", ...footerIconProps },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
    )
);

export const LocationIcon: React.FC = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", ...footerIconProps },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
    )
);