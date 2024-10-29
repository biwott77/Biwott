import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import moik from './moik.jpg';

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link">
            <img src={moik} alt="KIBIWOT" className="navbar-image" />
          </Link>
          
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        {/* Toggle Button */}
        <div className={`toggle-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Auth Buttons */}
        <div className={`auth-buttons ${isOpen ? 'active' : ''}`} style={{marginRight: '50px'}}>
          {/* Change Login Link to a button that triggers onLoginClick */}
          <button className="login-btn" onClick={onLoginClick}>
            <Link to="/login" style={{color: 'blue'}}>Login</Link>
          </button>
          <Link to="/signup" className="signup-btn" onClick={onSignupClick}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
