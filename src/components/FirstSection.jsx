import React from 'react';
import Header from './Hearder';
import arrow from '../images/icon-arrow-down.svg';

function FirstSection() {
  return(
    <div className='first-section'>
      <Header />
      <h1 className='hero-text'>W EㅤA R Eㅤ
      C R E A T I V E S</h1>
      <img className='hero-arrow-down' src={ arrow } alt='Arrow Down' />
    </div>
  );
}

export default FirstSection;
