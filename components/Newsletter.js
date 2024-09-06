import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter section container">
      <div className="newsletter__bg grid">
        <h2 className="newsletter__title">Subscribe to our newsletter</h2>
        <form className="newsletter__subscribe">
          <input type="email" placeholder="Enter your email" className="newsletter__input" />
          <button className="button">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
