import React from "react";
import "./Navbar.css";
import atbash from './atbash.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="Logo">
                <img src={atbash} alt="Logo" style={{width: "50px", height: "50px"}}/>
                <p className="txt">KIBIWOTMOI</p>
            </div>
            <ul className="navbar-list">
                <li><a href="#home" className="Default">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
