const express = require('express');
const app = express();
const port = 3000;

// Home route using GET
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// About route using GET 
app.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Profile route using POST (typically used for form submission)
app.post('/profile', (req, res) => {
  res.send('Profile creation or update received');
});

// Dynamic route for user profiles
app.get('/users/:userId', (req, res) => {
  res.send(`You requested to see the profile with ID: ${req.params.userId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});