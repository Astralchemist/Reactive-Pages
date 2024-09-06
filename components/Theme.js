// src/components/ThemeToggle.js
import React, { useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    setDarkMode(!darkMode);
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
