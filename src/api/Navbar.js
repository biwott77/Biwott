import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import moik from './moik.jpg';

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [isOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const userInfoStr = localStorage.getItem('userInfo');
      if (token && userInfoStr) {
        const parsedUserInfo = JSON.parse(userInfoStr);
        if (parsedUserInfo) {
          setIsLoggedIn(true);
          setUserInfo(parsedUserInfo);
        }
      }
    } catch (error) {
      console.error('Error parsing user info:', error);
      // Clear potentially corrupted data
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
    }

    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      setIsLoggedIn(false);
      setUserInfo(null);
      setShowUserMenu(false);
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
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

        <div className={`auth-buttons ${isOpen ? 'active' : ''}`} style={{ marginRight: '50px' }}>
          {isLoggedIn && userInfo ? (
            <div className="user-menu-container">
              <button 
                className="user-menu-btn" 
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                {userInfo.username || 'User'} ▼
              </button>
              {showUserMenu && (
                <div className="user-menu-dropdown">
                  <div className="user-info">
                    <p>{userInfo.email}</p>
                    <p>{userInfo.role}</p>
                  </div>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="login-btn" onClick={onLoginClick}>
                <Link to="/login" style={{ color: 'blue' }}>Login</Link>
              </button>
              <Link to="/signup" className="signup-btn" onClick={onSignupClick}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
