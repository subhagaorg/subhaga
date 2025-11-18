// src/sections/Packages.jsx

import React from 'react';
// 1. Import our package data and the new card component
import { packages } from '../data';
import PackageCard from '../components/PackageCard';

function Packages() {
  return (
    <section
      className="section packages-section"
      id="packages"
      data-testid="packages-section"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">Sacred Packages</h2>
          <p className="section-subtitle">
            Curated experiences for every celebration
          </p>
        </div>

        {/* 2. Map over the packages data */}
        <div className="packages-grid">
          {packages.map((pkg) => (
            // 3. Render a card for each package
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;