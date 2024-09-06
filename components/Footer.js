// src/components/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../assets/img/logo.png';

const Footer = () => (
  <footer className="footer section">
    <div className="footer__container container grid">
      <img src={logo} alt="Logo" className="footer__logo" />
      <div className="footer__content">
        <h3>Our Information</h3>
        <ul>
          <li>1234 - Peru</li>
          <li>La Libertad 43210</li>
          <li>123-456-789</li>
        </ul>
      </div>
      <span className="footer__copy">&#169; All rights reserved</span>
    </div>
  </footer>
);

export default Footer;
