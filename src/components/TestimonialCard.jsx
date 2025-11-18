// src/components/TestimonialCard.jsx

import React from 'react';
import { Star } from 'lucide-react'; // We only need the Star icon

// Helper function to render the stars
const renderStars = (rating) => {
  // Create an array with 5 empty slots
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className="star-icon"
      // Fill the star if the index is less than the rating
      fill={index < rating ? 'currentColor' : 'none'}
      aria-hidden="true"
    />
  ));
};

// We receive a 'review' object as a prop
function TestimonialCard({ review }) {
  return (
    <div
      className="testimonial-card"
      data-testid={`testimonial-${review.id}`}
    >
      <div className="testimonial-content">
        <div className="stars">
          {/* Call our helper function to create the stars */}
          {renderStars(review.rating)}
        </div>
        <p className="testimonial-review">{review.review}</p>
        <div className="testimonial-author">
          <div>
            <p className="author-name">{review.author}</p>
            <p className="author-event">{review.event}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;