// // src/components/Header.jsx

// import React from "react";
// // Import the icons we need from lucide-react
// import { Sparkles, Flame } from "lucide-react";
// import logo from "../assets/logo5.png";

// function Header() {
//   return (
//     <header className="header" data-testid="main-header">
//       <div className="header-content">
//         <div className="logo-section">
//           <div className="mandala-logo">
//             <img
//               src={logo}
//               alt="Subhaga Logo"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
//           <div>
//             {/* We use our custom font-playfair class from Tailwind */}
//             <h1 className="logo-text font-playfair">सुभगा Subhagā</h1>
//             <p className="tagline">Where every bond echoes forever</p>
//           </div>
//         </div>

//         {/* <nav className="nav-menu">
//           <button data-testid="nav-home">Home</button>
//           <button data-testid="nav-halls">Halls</button>
//           <button data-testid="nav-packages">Packages</button>
//           <button data-testid="nav-testimonials">Testimonials</button>
//           <button data-testid="nav-contact">Contact</button>
//         </nav> */}

//         <nav className="nav-menu">
//           {/* We use <a> tags now, pointing to the section IDs */}
//           <a href="#home" data-testid="nav-home">
//             Home
//           </a>
//           <a href="#halls" data-testid="nav-halls">
//             Halls
//           </a>
//           <a href="#packages" data-testid="nav-packages">
//             Packages
//           </a>
//           <a href="#testimonials" data-testid="nav-testimonials">
//             Testimonials
//           </a>
//           <a href="#contact" data-testid="nav-contact">
//             Contact
//           </a>
//         </nav>

//         <button className="book-now-btn" data-testid="header-book-now-btn">
//           <Flame className="btn-icon" aria-hidden="true" />
//           Book Now
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;

// src/components/Header.jsx

import React, { useState } from 'react';
import { Flame, Menu, X } from 'lucide-react';
import logo from '../assets/logo5.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header" data-testid="main-header">
      {/* Added 'flex' here explicitly */}
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-8 relative">
        
        {/* LOGO SECTION */}
        {/* Added 'flex' here explicitly */}
        <div className="logo-section flex items-center gap-4">
          <div className="mandala-logo">
            <img 
              src={logo} 
              alt="Subhaga Logo" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <div>
            <h1 className="logo-text font-playfair">सुभगा Subhagā</h1>
            <p className="tagline">Where every bond echoes forever</p>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        {/* Added 'items-center' explicitly */}
        <nav className="nav-menu hidden md:flex items-center gap-8">
          <a href="#home" data-testid="nav-home">Home</a>
          <a href="#halls" data-testid="nav-halls">Halls</a>
          <a href="#packages" data-testid="nav-packages">Packages</a>
          <a href="#testimonials" data-testid="nav-testimonials">Testimonials</a>
          <a href="#contact" data-testid="nav-contact">Contact</a>
        </nav>

        {/* DESKTOP BOOK BUTTON */}
        {/* Added 'flex items-center gap-2' explicitly */}
        <button
          className="book-now-btn hidden md:flex items-center gap-2"
          data-testid="header-book-now-btn"
        >
          <Flame className="btn-icon" aria-hidden="true" />
          Book Now
        </button>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden text-ivory-cream focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={28} className="text-saffron-gold" /> 
          ) : (
            <Menu size={28} className="text-saffron-gold" />
          )}
        </button>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[rgba(26,15,10,0.98)] border-t border-b border-[rgba(212,160,23,0.2)] shadow-xl md:hidden flex flex-col items-center py-6 space-y-4 animate-in slide-in-from-top-5 fade-in duration-300 z-50">
             <a href="#home" onClick={closeMenu} className="text-ivory-cream hover:text-saffron-gold text-lg">Home</a>
             <a href="#halls" onClick={closeMenu} className="text-ivory-cream hover:text-saffron-gold text-lg">Halls</a>
             <a href="#packages" onClick={closeMenu} className="text-ivory-cream hover:text-saffron-gold text-lg">Packages</a>
             <a href="#testimonials" onClick={closeMenu} className="text-ivory-cream hover:text-saffron-gold text-lg">Testimonials</a>
             <a href="#contact" onClick={closeMenu} className="text-ivory-cream hover:text-saffron-gold text-lg">Contact</a>
             
             {/* Added 'flex items-center gap-2' to mobile button too */}
             <button className="book-now-btn mt-4 flex items-center gap-2">
                <Flame className="btn-icon" aria-hidden="true" />
                Book Now
             </button>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;