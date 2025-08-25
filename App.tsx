
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App(): React.ReactNode {
  return (
    <div className="bg-white text-gray-800 font-sans">
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
}

export default App;
