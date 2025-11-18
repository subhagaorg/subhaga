// src/components/ParticleAnimations.jsx

import React from 'react';

// We'll create 20 particles
const particleCount = 20;

function ParticleAnimations() {
  return (
    <div className="particles-container">
      {/* Create an array of 20 items, then map over it */}
      {Array.from({ length: particleCount }).map((_, index) => (
        <div
          key={index}
          className="particle"
          style={{
            // Recreate the 0s, 0.5s, 1s, etc. delay
            animationDelay: `${index * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default ParticleAnimations;