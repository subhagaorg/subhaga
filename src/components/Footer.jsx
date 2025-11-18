// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="font-playfair">सुभगा Subhagā</h3>
            <p>Creating divine spaces for life's most sacred moments</p>
          </div>
          <div className="footer-section">
            <h4 className="font-playfair">Quick Links</h4>
            {/* These are buttons to match the nav-menu styling */}
            <button>Halls</button>
            <br />
            <button>Packages</button>
            <br />
            <button>Testimonials</button>
          </div>
          <div className="footer-section">
            <h4 className="font-playfair">Contact</h4>
            <p>📞 +91 98765 43210</p>
            <p>📧 <a href="mailto:subhagaorg@gmail.com"><strong>subhagaorg@gmail.com</strong></a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2024 Saṃbandhaṃ. All rights reserved. May your celebrations be
            blessed.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;