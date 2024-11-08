// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Computational Neurology</h1>
          <img src="/images/logo_group.webp" alt="Logo" className="header-logo" />
        </div>
      </header>
      <nav className="fixed-nav">
        <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
        <Link to="team" smooth={true} duration={500} className="nav-link">Team</Link>
        <Link to="publications" smooth={true} duration={500} className="nav-link">Publications</Link>
        <Link to="footer" smooth={true} duration={500} className="nav-link">Contact</Link>
      </nav>
    </>
  );
}

export default Header;