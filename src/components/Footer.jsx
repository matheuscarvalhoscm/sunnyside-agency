import React from 'react';
import logo from '../images/logo.svg';
import facebookLogo from '../images/icon-facebook.svg';
import instagramLogo from '../images/icon-instagram.svg';
import twitterLogo from '../images/icon-twitter.svg';
import pinterestLogo from '../images/icon-pinterest.svg';

function Footer() {
  const links = ['About', 'Services', 'Projects'];
  const repoLink = 'https://github.com/matheuscarvalhoscm/sunnyside-agency';
  const logos =[facebookLogo, instagramLogo, twitterLogo, pinterestLogo];

  return(
    <div className='sixth-section'>
      <footer className='footer'>
        <img className='logo' src={ logo } alt="logo" />
        <div className='links-container'>
          {links.map((link) => (
            <a href={ repoLink }>{ link }</a>
          ))}
        </div>
        <div className='social-media-container'>
          {logos.map((logo) => (
            <a href={ repoLink }>
              <img src={ logo } alt={ logo } />
            </a>
          ))}  
        </div>
      </footer>
    </div>
  );
}

export default Footer;
