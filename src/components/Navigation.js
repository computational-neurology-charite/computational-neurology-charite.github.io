import React from 'react';
import { Link } from 'react-scroll'; // You'll need to install react-scroll: npm install react-scroll

function Navigation() {
  return (
    <nav>
      {/* <Link to="home" smooth={true} duration={500}>Home</Link> */}
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <Link to="team" smooth={true} duration={500}>Team</Link>
      <Link to="publications" smooth={true} duration={500}>Publications</Link>
    </nav>
  );
}

export default Navigation;