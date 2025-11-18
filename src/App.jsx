// src/App.jsx

import React from 'react';

// 1. Import all our components
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleAnimations from './components/ParticleAnimations';
import PetalAnimations from './components/PetalAnimations';

// 2. Import all our sections
import Hero from './sections/Hero';
import Halls from './sections/Halls';
import Packages from './sections/Packages';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app-container">
      {/* 3. Add the animation components */}
      <ParticleAnimations />
      <PetalAnimations />

      {/* 4. Add the Header */}
      <Header />

      {/* 5. Add all the sections */}
      <main>
        <Hero />
        <Halls />
        <Packages />
        <Testimonials />
        <Contact />
      </main>

      {/* 6. Add the Footer */}
      <Footer />
    </div>
  );
}

export default App;