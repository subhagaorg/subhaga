// src/sections/Contact.jsx

import React from 'react';
// 1. Import our new components
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
      data-testid="contact-section"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title font-playfair">Connect With Us</h2>
          <p className="section-subtitle">
            Let us help you create memories that last forever
          </p>
        </div>

        <div className="contact-content">
          {/* 2. Left Column (Form) */}
          <div className="contact-card">
            <ContactForm />
          </div>

          {/* 3. Right Column (Info) */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default Contact;