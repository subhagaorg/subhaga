// src/components/ContactInfo.jsx

import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react'; // Import icons

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="info-item">
        <Phone className="info-icon" aria-hidden="true" />
        <div>
          <h4 className="font-playfair">Call Us</h4>
          <p>+91 98765 43210</p>
        </div>
      </div>
      <div className="info-item">
        <Mail className="info-icon" aria-hidden="true" />
        <div>
          <h4 className="font-playfair">Email Us</h4>
          <p>book@sambandham.in</p>
        </div>
      </div>
      <div className="info-item">
        <Clock className="info-icon" aria-hidden="true" />
        <div>
          <h4 className="font-playfair">Working Hours</h4>
          <p>Mon - Sun: 9 AM - 9 PM</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;