// src/components/PetalAnimations.jsx

import React from 'react';

// We'll create 15 petals
const petalCount = 15;

function PetalAnimations() {
  return (
    <div className="petals-container">
      {Array.from({ length: petalCount }).map((_, index) => (
        <div
          key={index}
          className="petal"
          style={{
            // Recreate the 0s, 0.8s, 1.6s, etc. delay
            animationDelay: `${index * 0.8}s`,
            // Randomize the horizontal starting position
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default PetalAnimations;