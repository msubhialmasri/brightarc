
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-md backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <Logo className="h-10 w-10 text-[#0D2F4F]" />
          <span className="font-bold text-xl text-[#0D2F4F] tracking-wider">Bright Arc LLC</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[#0D2F4F] font-semibold hover:text-[#00A0B0] transition-colors duration-300">
              {link.name}
            </a>
          ))}
           <a href="#login" className="text-[#0D2F4F] font-semibold hover:text-[#00A0B0] transition-colors duration-300">Member Login</a>
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-[#00A0B0] text-white font-bold py-2 px-6 rounded-full hover:bg-[#007a85] transition-transform duration-300 hover:scale-105">
          Request a Consultation
        </a>
      </div>
    </header>
  );
};

export default Header;
