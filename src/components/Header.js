// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';



function Header() {
  return (
    <>
      <header>
        <div className="header-content">
			<h1 align="center">Computational Neurology</h1>
         
        </div>
      </header>
      <nav>
        <Link to="home" smooth={true} duration={500}>News</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="team" smooth={true} duration={500} >Team</Link>
        <Link to="publications" smooth={true} duration={500} >Publications</Link>
        <Link to="footer" smooth={true} duration={500} >Contact</Link>
      </nav>
    </>
  );
}

export default Header;

// <img src="/images/logo_group.webp" alt="Logo" className="header-logo" />
