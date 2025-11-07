import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <RouterLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1 align="center">Computational Neurology</h1>
          </RouterLink>
        </div>
      </header>

      <nav>
        <Link to="home" smooth={true} duration={500}>News</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="team" smooth={true} duration={500}>Team</Link>
        <Link to="publications" smooth={true} duration={500}>Publications</Link>
        <Link to="footer" smooth={true} duration={500}>Contact</Link>

        {/* Competition is a separate page → use router link */}
        <RouterLink to="/video_challenge">Video Challenge</RouterLink>
      </nav>
    </>
  );
}

export default Header;

