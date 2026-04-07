import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo Section */}
                <a href="/" className="navbar-logo">
                    <span className="logo-icon">🕹️</span>
                    KevinServ
                </a>

                {/* Hamburger Menu Icon */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}>{click ? '✖' : '☰'}</i>
                </div>

                {/* Navigation Links */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="/" className="nav-links">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/store" className="nav-links">Store</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-links">About</a>
                    </li>
                </ul>

                {/* Action Buttons */}
                <div className="navbar-actions">
                    <button className="btn-primary">Sign In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
