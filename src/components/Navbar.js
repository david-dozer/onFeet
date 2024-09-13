import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';  // Import react-scroll functions

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to the top
  };

  const handleAboutClick = () => {
    // Navigate to the home page and scroll to the About section
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('about-section', {
        duration: 0,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }, 0);  // Delay to ensure page navigation completes
  };

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
        {/* Clicking on the brand takes the user back to the landing page */}
        <Link className="navbar-brand" to="/" onClick={scrollToTop}>onFeet</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {/* ABOUT link triggers scroll to about-section on landing page */}
            <li className="nav-item">
            <span className="nav-link" onClick={handleAboutClick} style={{ cursor: 'pointer' }}>ABOUT</span>  {/* Add cursor: pointer */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/try-me">EXPLORE</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
