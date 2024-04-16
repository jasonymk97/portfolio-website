import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <h1>My Portfolio</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
