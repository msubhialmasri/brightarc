import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bright Arc LLC Logo"
    >
      <path d="M60 150 V 90 H 40 V 170 H 160 V 90 H 80 V 110 H 140 V 150 H 60 Z" fill="#0D2F4F" />
      <path d="M125 30 C 94.62 30 70 54.62 70 85 C 70 93.28 72.32 101.05 76.38 107.5 H 91.1 C 88.24 102.34 86.54 96.4 86.54 90 C 86.54 69.9 102.94 53.46 123 53.46 C 143.06 53.46 159.46 69.9 159.46 90 C 159.46 96.4 157.76 102.34 154.9 107.5 H 170 C 170 66.86 150.6 30 125 30 Z" fill="#0D2F4F" />
      <path d="M125 53.46 C 102.94 53.46 86.54 69.9 86.54 90 C 86.54 92.5 86.84 94.92 87.38 97.24 L 70 85 C 70 70 80 40 125 45 C 155 48 159.46 70 159.46 90 C 159.46 80 145 53.46 125 53.46 Z" fill="#00A0B0" />
    </svg>
  );
};

export default Logo;