// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';
import testimonial1 from '../assets/img/testimonial1.jpg';
import testimonial2 from '../assets/img/testimonial2.jpg';

const Testimonials = () => (
  <section className="testimonials section container">
    <div className="testimonial">
      <img src={testimonial1} alt="Testimonial 1" />
      <p>"Amazing service!"</p>
      <h4>John Doe</h4>
    </div>
    <div className="testimonial">
      <img src={testimonial2} alt="Testimonial 2" />
      <p>"Highly recommended!"</p>
      <h4>Jane Smith</h4>
    </div>
  </section>
);

export default Testimonials;
