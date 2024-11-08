// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Computational Neurology</h1>
          <img src="/images/logo_group.webp" alt="Logo" className="header-logo" />
        </div>
      </header>
      <nav>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="team" smooth={true} duration={500} >Team</Link>
        <Link to="publications" smooth={true} duration={500} >Publications</Link>
        <Link to="footer" smooth={true} duration={500} >Contact</Link>
      </nav>
    </>
  );
}

export default Header;