import React from 'react';
import logo from '../images/logo.svg'

function Header() {
  const link = 'https://github.com/matheuscarvalhoscm/sunnyside-agency'

  return(
    <div className="header">
      <img src={ logo } alt="sunnyside-agency-logo" />
      <div className="links">
        <a href={ link }>About</a>
        <a href={ link }>Services</a>
        <a href={ link }>Projects</a>
        <a href={ link }>Contact</a>
      </div>
    </div>
  );
}

export default Header;
