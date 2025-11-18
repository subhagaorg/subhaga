// src/sections/Hero.jsx

import React from 'react';
// Import the heroImage we exported from our data file
import { heroImage } from '../data';

function Hero() {
  return (
    <section
      className="hero-section"
      id="home"
      data-testid="hero-section"
      // We set the background image using an inline style.
      // This is the best way to use an imported image variable.
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="om-symbol">ॐ</div>
        <h1 className="hero-title" data-testid="hero-title">
          Divine Spaces for
          <span className="gradient-text"> Sacred Moments</span>
        </h1>
        <p className="hero-subtitle" data-testid="hero-subtitle">
          Celebrate life's most auspicious occasions in halls blessed with
          tradition
        </p>
        <div className="hero-buttons">
          <button
            className="primary-cta"
            data-testid="hero-explore-btn"
          >
            Explore Halls
          </button>
          <button
            className="secondary-cta"
            data-testid="hero-contact-btn"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;