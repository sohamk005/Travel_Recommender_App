import React from 'react';
import '../css/Navbar.css';
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div id="logo">
        <img id="logo-img" src="/src/images/logo.png" alt="Travel Recommender Logo" />
        <Link to="/"> <span>Travel Recommender</span> </Link>
      </div>
      <div className="navbar-links">
        <Link to="/Featured" className="nav-link"> Featured </Link>
      
        <Link to="/About" className="nav-link"> About </Link>
      </div>
    
    </nav>
  );
}
