import React from 'react';
import logo from '../images/logo.svg'

function Header() {
  const Repolink = 'https://github.com/matheuscarvalhoscm/sunnyside-agency';
  const links = ['About', 'Services', 'Projects', 'Contact'];

  return(
    <div className="header">
      <img src={ logo } alt="sunnyside-agency-logo" />
      <nav className="links">
        { links.map((link, index) => (
          <a key={ index } href={ Repolink }> { link } </a>
        ))}
      </nav>
    </div>
  );
}

export default Header;
