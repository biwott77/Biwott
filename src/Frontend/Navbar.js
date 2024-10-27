import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import moik from './moik.jpg';
/* import Login from './Login';
import SignUp from './SignUp'; */

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={moik} alt="Moik" className="navbar-image" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      {/* <div className="navbar-right">
        <Login />
        <SignUp />
      </div> */}
    </nav>
  );
};

export default Navbar;
