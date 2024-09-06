// src/components/Products.js
import React from 'react';
import './Products.css';
import product1 from '../assets/img/product1.jpg';
import product2 from '../assets/img/product2.jpg';

const Products = () => (
  <section className="products section container">
    <div className="product">
      <img src={product1} alt="Product 1" />
      <h3>Product 1</h3>
      <p>High-quality product</p>
    </div>
    <div className="product">
      <img src={product2} alt="Product 2" />
      <h3>Product 2</h3>
      <p>Top-rated choice</p>
    </div>
  </section>
);

export default Products;
