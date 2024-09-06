// src/components/Story.js
import React from 'react';
import './Story.css';
import heroImage from '../assets/img/hero-image.jpg';

const Story = () => (
  <section className="story section container">
    <img src={heroImage} alt="Story" className="story__image" />
    <h2>Our Story</h2>
    <p>
      Learn how we started and what inspires us every day.
    </p>
  </section>
);

export default Story;
