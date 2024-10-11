import React from 'react';

function Footer() {
  return (
    <div id="footer">
    <footer>
      <p>
        Contact:{" "}
        <a href="mailto:computational-neurology@charite.de">
        computational-neurology at charite.de
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Computational Neurology Research Group</p>
    </footer>
    </div>
  );

}

export default Footer;