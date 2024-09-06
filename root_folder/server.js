const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Serve favicon
app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'public/favicon.ico')));

// API Endpoint for testing
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to our backend!' });
});

// The "catchall" handler: for any request that doesn't match the API routes, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
