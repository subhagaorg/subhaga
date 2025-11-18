// src/components/HallCard.jsx

import React from 'react';
// Import the icons we need for this card
import { MapPin, Users, Check } from 'lucide-react';

// We receive a 'hall' object as a prop
function HallCard({ hall }) {
  return (
    <div className="hall-card" data-testid={`hall-card-${hall.id}`}>
      <div className="hall-image">
        <img alt={hall.name} src={hall.image} />
        <div className="hall-overlay">
          <button
            className="view-details-btn"
            data-testid={`book-hall-${hall.id}`}
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="hall-name font-playfair">{hall.name}</h3>
        <div className="hall-location">
          <MapPin className="icon" aria-hidden="true" />
          <span>{hall.location}</span>
        </div>
      </div>
      <div className="p-6 pt-0">
        <p className="hall-description">{hall.description}</p>
        <div className="hall-meta">
          <div className="meta-item">
            <Users className="icon" aria-hidden="true" />
            <span>{hall.guests} Guests</span>
          </div>
          <div className="meta-item price">
            <span>{hall.price}</span>
          </div>
        </div>
        <div className="amenities">
          {/* We can even map over the amenities array! */}
          {hall.amenities.map((amenity) => (
            <span key={amenity} className="amenity-tag">
              <Check className="check-icon" aria-hidden="true" />
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HallCard;