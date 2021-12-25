import React from 'react';
import imageTransform from '../images/desktop/image-transform.jpg';
import imageStandOout from '../images/desktop/image-stand-out.jpg';

function SecondSection() {
  const Repolink = 'https://github.com/matheuscarvalhoscm/sunnyside-agency';

  return(
    <div className='second-section'>
      <div className='second-section-text-box'>
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing
          in helping brands grow fast. Engage your clients through
          compelling visuals that do most of the marketing for you.
        </p>
        <a className='second-section-first-link' href={ Repolink }>LEARN MORE</a>
      </div>
      <img
        className='second-section-first-image'
        src={ imageTransform }
        alt='Transform your brand'
      />
      <img
        className='second-section-second-image'
        src={ imageStandOout }
        alt='Stand out to the right audience'
      />
      <div className='second-section-text-box'>
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build
          and extend your brand in digital places.
        </p>
        <a className='second-section-second-link' href={ Repolink }>LEARN MORE</a>
      </div>
    </div>
  );
}

export default SecondSection;
