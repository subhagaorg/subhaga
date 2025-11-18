// src/components/ContactForm.jsx

import React, { useState } from 'react';

function ContactForm() {
  // 1. Setup state for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // 2. Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the page from reloading
    // For now, we'll just log the data to the console
    console.log({
      name,
      email,
      phone,
      message,
    });
    // You could also reset the form here
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          data-testid="contact-name-input"
          value={name} // 3. Control the component
          onChange={(e) => setName(e.target.value)} // 4. Update the state
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          data-testid="contact-email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          required
          data-testid="contact-phone-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="4"
          required
          data-testid="contact-message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        className="submit-btn"
        type="submit"
        data-testid="contact-submit-btn"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;