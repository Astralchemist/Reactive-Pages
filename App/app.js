import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Featured from './pages/Featured';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import NewArrivals from './pages/NewArrivals';
import Newsletter from './pages/Newsletter';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import './assets/styles.css'; // Import the main CSS file

function App() {
  return (
    <Router>
      <div className="app">
        {/* Theme toggle button */}
        <ThemeToggle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/featured" component={Featured} />
          <Route path="/products" component={Products} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/new-arrivals" component={NewArrivals} />
          <Route path="/newsletter" component={Newsletter} />
        </Switch>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
