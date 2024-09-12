import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import TryMe from './components/TryMe';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar will stay on every page */}
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <div id="about-section"> {/* Add ID to target About section */}
              <About />
            </div>
            <Footer />
          </>
        } />
        <Route path="/try-me" element={<TryMe />} />
      </Routes>
    </Router>
  );
}

export default App;
