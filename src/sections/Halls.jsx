// src/sections/Halls.jsx

import React from 'react';
// 1. Import our data and the card component
import { halls } from '../data';
import HallCard from '../components/HallCard';

function Halls() {
  return (
    <section className="section halls-section" id="halls" data-testid="halls-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">Our Sacred Halls</h2>
          <p className="section-subtitle">
            Choose from our collection of divine venues
          </p>
        </div>
        
        {/* 2. Here is the magic! */}
        <div className="halls-grid">
          {halls.map((hall) => (
            // 3. We create a HallCard for each hall in the array
            // We pass the 'hall' object as a prop
            // The 'key' is crucial for React to track the list
            <HallCard key={hall.id} hall={hall} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Halls;