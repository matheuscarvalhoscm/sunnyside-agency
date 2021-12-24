import React from 'react';
import logo from '../images/logo.svg';
import hamburguerMenu from '../images/icon-hamburger.svg';

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
      <div className='hamburger-menu'>
        <img
          src={ hamburguerMenu }
          alt='hamburguer-nav-bar'
        />
      </div>
    </div>
  );
}

export default Header;
