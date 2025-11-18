// src/components/PackageCard.jsx

import React from 'react';
// We only need the 'Check' icon for this component
import { Check } from 'lucide-react';

// We receive a 'pkg' object as a prop
function PackageCard({ pkg }) {
  return (
    <div className="package-card flex flex-col h-full" data-testid={`package-card-${pkg.id}`}>
      {/* We don't need all the inner divs from the HTML, 
          our padding on the card itself handles the spacing. */}
      
      <div className="package-type">{pkg.type}</div>
      <h3 className="package-name font-playfair">{pkg.name}</h3>
      <p className="text-sm text-ivory-cream/70 mb-6">{pkg.description}</p>

      <div className="package-price">
        <span className="price-amount">{pkg.price}</span>
        <span className="price-duration">{pkg.duration}</span>
      </div>

      <div className="package-inclusions">
        <h4 className="font-semibold text-ivory-cream mb-4">Inclusions:</h4>
        <ul className="space-y-3">
          {pkg.inclusions.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="check-icon text-emerald-green" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="package-btn mt-6 mt-auto"
        data-testid={`select-package-${pkg.id}`}
      >
        Select Package
      </button>
    </div>
  );
}

export default PackageCard;