import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Approach', href: '#approach' },
  { name: 'Contact', href: '#contact' },
];

function Header(): React.ReactNode {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const textColor = isScrolled ? 'text-brand-navy' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3">
          <img 
            src="https://img.freepik.com/premium-vector/robotic-construction-automation-logo-design-suistable-business-construction_845634-182.jpg?w=1480" 
            alt="Bright Arc LLC Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className={`font-display font-bold text-xl transition-colors duration-300 ${textColor}`}>Bright Arc LLC</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className={`font-display font-semibold hover:text-brand-cyan transition-colors duration-300 ${textColor}`}>
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-brand-cyan text-white font-display font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-sm">
          Request a Consultation
        </a>
        <button className={`md:hidden transition-colors duration-300 ${textColor}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
}

export default Header;