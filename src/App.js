import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Your existing Navbar
import Header from './components/Header';  // Part of your landing page
import About from './components/About';    // Part of your landing page
import Footer from './components/Footer';  // Your footer component
import TryMe from './components/TryMe';    // The TryMe component you want to use

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route for the home/landing page */}
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        } />

        {/* Route for the "Try Me" page */}
        <Route path="/try-me" element={<TryMe />} />
      </Routes>
    </Router>
  );
}

export default App;
