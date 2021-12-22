import React from 'react';
import logo from '../images/logo.svg'

function Header() {
  const Repolink = 'https://github.com/matheuscarvalhoscm/sunnyside-agency';
  const links = ['About', 'Services', 'Projects', 'Contact'];

  return(
    <div className="header">
      <img src={ logo } alt="sunnyside-agency-logo" />
      <div className="links">
        { links.map((link, index) => (
          <a key={ index } href={ Repolink }> { link } </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
