// src/sections/Testimonials.jsx

import React from 'react';
// 1. Import our data and the card component
import { testimonials } from '../data';
import TestimonialCard from '../components/TestimonialCard';

function Testimonials() {
  return (
    <section
      className="section testimonials-section"
      id="testimonials"
      data-testid="testimonials-section"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">Blessed Testimonials</h2>
          <p className="section-subtitle">
            Stories from families who celebrated with us
          </p>
        </div>

        {/* 2. Map over the testimonials data */}
        <div className="testimonials-grid">
          {testimonials.map((review) => (
            // 3. Render a card for each review
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;