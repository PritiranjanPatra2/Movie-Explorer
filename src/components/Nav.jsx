
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Movie Explorer</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/movies">Movies</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
