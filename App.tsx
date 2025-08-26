
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-[#0D2F4F]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;
