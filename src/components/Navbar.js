import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  useEffect(() => {
    // Navbar shrink function
    const navbarShrink = () => {
      const navbar = document.querySelector('#mainNav');
      if (!navbar) return;

      if (window.scrollY === 0) {
        navbar.classList.remove('navbar-shrink');
      } else {
        navbar.classList.add('navbar-shrink');
      }
    };

    // Shrink the navbar when page is scrolled
    window.addEventListener('scroll', navbarShrink);

    // Initial check if navbar should be shrunk
    navbarShrink();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', navbarShrink);
    };
  }, []); 

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#home">onFeet</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">ABOUT</a> {/* Scroll to the About section */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/try-me">TRY ME!</Link>  {/* Redirect to /try-me */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
