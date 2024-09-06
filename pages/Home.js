// src/pages/Home.js
import React from 'react';
import Footer from '../components/Footer';
import Story from '../components/Story';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import NewArrivals from '../components/NewArrivals';
import Newsletter from '../components/Newsletter';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => (
  <>
    <ThemeToggle />
    <Story />
    <Products />
    <Testimonials />
    <NewArrivals />
    <Newsletter />
    <Footer />
  </>
);

export default Home;
