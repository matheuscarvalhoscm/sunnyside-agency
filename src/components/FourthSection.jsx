import React from "react";
import testimonials from "../utils/testimonialsData";

function FourthSection() {
  return (
    <div className="fourth-section">
      <h2>C L I E N TㅤT E S T I M O N I A L S</h2>
      <div className="testimonials-container">
        {testimonials.map(({ name, position, text, image }, index) => (
          <div className="testimonial-container" key={index}>
            <img src={ image } alt={`${name}`} />
            <p>{ text }</p>
            <h3>{ name }</h3>
            <h5>{ position }</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FourthSection;
