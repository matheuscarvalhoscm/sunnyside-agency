import React from 'react';
import cone from '../images/desktop/image-gallery-cone.jpg';
import milkBottles from '../images/desktop/image-gallery-milkbottles.jpg';
import orange from '../images/desktop/image-gallery-orange.jpg';
import sugarCubes from '../images/desktop/image-gallery-sugarcubes.jpg';

function FifthSection() {
  const images = [milkBottles, orange, cone, sugarCubes];
  
  return(
    <div className='fifth-section'>
    {images.map((image) => <img src={ image } alt={ image }/>)}
    </div>
  );
}

export default FifthSection;
